---
title: 3.7 Funzioni, Scope e Astrazione Procedurale in Python
description: Definizione di funzioni, valore di ritorno, passaggio per riferimento all'oggetto (mutabili vs immutabili), regola LEGB dello scope, moduli e namespace.
---

### Introduzione

Nella lezione `2.6` dell'Unità 2 abbiamo esplorato i fondamenti concettuali della **modularità**: il principio del *Divide et Impera*, la separazione tra sottoprogrammi che eseguono azioni e sottoprogrammi che restituiscono risultati, la distinzione tra parametri formali e attuali e il ruolo del *Call Stack*.

Quando portiamo questi stessi principi all'interno di **Python**, troviamo un modello elegante e potente chiamato **Astrazione Procedurale**: una funzione diventa una "scatola nera" di cui chi la usa deve conoscere solo il *contratto* (cosa entra nei parametri e cosa esce dal `return`), senza doversi preoccupare dei dettagli implementativi interni.

In questa lezione analizzeremo l'architettura teorica delle funzioni in Python: vedremo come il linguaggio unifica procedure e funzioni tramite il valore `None`, come funziona realmente in memoria il **passaggio per riferimento all'oggetto**, come l'interprete risolve i nomi delle variabili tramite la **regola LEGB** e come i **moduli** organizzano il software in spazi dei nomi (*namespace*) separati.

---

### Sviluppo dell'Argomento

#### 1. Anatomia di una Funzione in Python (`def` e `return`)
In Python non esiste una parola chiave separata per distinguere procedure e funzioni: ogni sottoprogramma viene definito con la parola chiave **`def`** (*define*), seguita dal nome della funzione, dai **parametri formali** tra parentesi tonde e dai due punti `:`, con il corpo rigorosamente indentato.

```python
def calcola_media(somma, conteggio):
    """Restituisce la media aritmetica tra somma e conteggio."""
    return somma / conteggio
```

Tre aspetti teorici fondamentali:
1.  **Definizione vs Invocazione:** Quando la Python Virtual Machine legge un blocco `def`, **non esegue** le istruzioni interne, ma registra la funzione come oggetto in memoria. Il codice interno viene eseguito solo al momento della chiamata (es. `m = calcola_media(24, 3)`).
2.  **`return` e il valore `None`:** L'istruzione `return` interrompe immediatamente l'esecuzione della funzione e restituisce il valore al chiamante. Se una funzione termina senza un'istruzione `return` esplicita (comportandosi quindi come una *procedura*), Python restituisce automaticamente l'oggetto speciale **`None`** (che rappresenta l'assenza di valore).
3.  **Ritorni Multipli tramite Tuple:** A differenza di molti linguaggi classici che restituiscono un solo dato scalare, Python permette di restituire più valori contemporaneamente (`return minimo, massimo`). Dietro le quinte, Python impacchetta automaticamente i risultati in una **tupla** (lezione `3.6`) che il chiamante può estrarre con l'*unpacking* (`lo, hi = analizza(voti)`).
4.  **Parametri di Default e Docstring:** Un parametro formale può avere un valore predefinito (es. `def sconta(prezzo, percentuale=10):`), reso opzionale alla chiamata. La stringa tra triple virgolette `"""..."""` subito sotto `def` si chiama **Docstring** e costituisce la documentazione ufficiale della funzione.

#### 2. Il Modello di Memoria: Passaggio per Riferimento all'Oggetto
Nella lezione `2.6` abbiamo studiato la distinzione classica tra passaggio *per valore* (copia) e *per riferimento* (indirizzo). Python adotta un meccanismo proprio e coerente con il suo modello a etichette (visto nella `3.2`): il **Passaggio per Riferimento all'Oggetto (*Pass by Object Reference*)**.

Quando chiamiamo una funzione passando una variabile, Python **non copia il dato**, ma assegna al parametro formale un'etichetta che punta esattamente allo **stesso oggetto in memoria RAM**. Ciò che accade se la funzione prova a modificare quel parametro dipende interamente dalla natura dell'oggetto:

| Tipo di Argomento Passato | Esempi | Cosa Succede se la Funzione Prova a Modificarlo? | Effetto nel Chiamante |
| :--- | :--- | :--- | :--- |
| **Oggetto Immutabile** | `int`, `float`, `str`, `bool`, `tuple` | L'oggetto in RAM non può essere alterato; una riassegnazione (`x = x + 1`) sposta solo l'etichetta locale su un nuovo oggetto. | **Nessun effetto** (si comporta *come* un passaggio per valore). |
| **Oggetto Mutabile** | `list`, `dict`, `set` | Se la funzione modifica l'oggetto sul posto (es. `lista.append(99)`), altera direttamente la struttura condivisa in RAM. | **Modifica permanente** (si comporta *come* un passaggio per riferimento). |

```python
def tenta_modifica(numero, elenco):
    numero = numero + 10      # Crea un nuovo intero locale: l'originale resta intatto
    elenco.append(99)         # Modifica sul posto la lista condivisa in memoria!

a = 5
dati = [1, 2]
tenta_modifica(a, dati)
# Risultato: 'a' vale ancora 5, mentre 'dati' ora è [1, 2, 99]
```

Comprendere questa differenza evita uno dei bug concettuali più frequenti nello sviluppo in Python: gli *effetti collaterali involontari* (*side effects*) sulle strutture mutabili.

#### 3. Visibilità dei Nomi: La Regola LEGB dello Scope
Quando all'interno di una funzione citiamo il nome di una variabile, in quale ordine l'interprete Python la cerca nella memoria? Python applica la **regola LEGB**, acronimo di quattro ambiti di visibilità concentrici:

1.  **L — Local (Locale):** Cerca prima tra le variabili e i parametri creati *dentro* la funzione corrente (conservati nel suo *Stack Frame* sul *Call Stack*, che viene distrutto al termine della chiamata).
2.  **E — Enclosing (Racchiudente):** Se la funzione è definita dentro un'altra funzione, cerca nell'ambito della funzione esterna.
3.  **G — Global (Globale):** Cerca tra le variabili definite al livello principale del file (modulo).
4.  **B — Built-in (Predefinito):** Infine, cerca tra i nomi nativi del linguaggio (come `print`, `len`, `int`, `range`).

Se il nome non esiste in nessuno dei quattro livelli, Python solleva un'eccezione `NameError`.

*Buona norma di progettazione:* Una funzione può **leggere** una variabile globale, ma non dovrebbe modificarla (per farlo servirebbe la parola chiave `global`, fortemente sconsigliata). Le funzioni ben progettate sono **funzioni pure**: ricevono tutto ciò che serve tramite i **parametri** e comunicano il risultato tramite il **`return`**, restando isolate e prevedibili.

#### 4. Moduli, Namespace e Libreria Standard
Quando un software cresce, anche avere decine di funzioni nello stesso file diventa disordinato. Python organizza il codice a un livello superiore di modularità tramite i **Moduli**: qualsiasi file `.py` contenente funzioni e costanti riutilizzabili è un modulo.

Con l'istruzione **`import`** (es. `import math`), Python carica un modulo all'interno di un proprio **Namespace** (spazio dei nomi):
*   Un *namespace* è una sorta di "cognome" che evita collisioni tra funzioni con lo stesso nome provenienti da librerie diverse (`math.sqrt(16)` appartiene chiaramente al modulo `math`).
*   Python adotta la filosofia ***"Batteries Included"*** ("batterie incluse"): la sua **Libreria Standard** mette subito a disposizione decine di moduli già testati per matematica (`math`), casualità (`random`), date e ore (`datetime`), statistiche (`statistics`), riducendo la necessità di "reinventare la ruota" (principio DRY).

---

:::tip[Idea chiave]
Una buona funzione è una **funzione pura**: riceve tutto ciò di cui ha bisogno tramite i **parametri**, non altera variabili globali esterne e restituisce il risultato tramite **`return`**.
:::

:::caution[Errore tipico in verifica]
Confondere `print()` con `return` dentro una funzione: `print()` mostra solo un testo a video e lascia il valore di ritorno a **`None`**, impedendo di riutilizzare il risultato nei calcoli successivi!
:::

### Mettiti alla prova (Domande Flash)

<details>
  <summary><strong>1. Domanda rapida:</strong> Se passo una lista <code>dati</code> a una funzione e dentro la funzione eseguo <code>dati.append(10)</code>, la lista originale cambia?</summary>
  <p><strong>Sì</strong>, perché le liste sono <strong>mutabili</strong> e Python passa il riferimento allo stesso oggetto in memoria RAM.</p>
</details>

<details>
  <summary><strong>2. Domanda rapida:</strong> In quale ordine la regola LEGB cerca il nome di una variabile?</summary>
  <p><strong>Local → Enclosing → Global → Built-in</strong>.</p>
</details>

<details>
  <summary><strong>3. Vero o Falso:</strong> Una funzione Python può restituire due risultati contemporaneamente con <code>return a, b</code>.</summary>
  <p><strong>Vero.</strong> Python impacchetta automaticamente i valori in una <strong>tupla</strong> che il chiamante può estrarre con l'unpacking.</p>
</details>

---

### Sintesi

*   **Astrazione Procedurale:** Una funzione `def` incapsula una logica riutilizzabile dietro un'interfaccia chiara (parametri in ingresso e valore di ritorno `return`, oppure `None` in assenza di ritorno esplicito).
*   **Passaggio per Riferimento all'Oggetto:** Python passa sempre riferimenti agli oggetti in RAM: gli oggetti *immutabili* (`int`, `str`, `tuple`) risultano protetti dalle modifiche interne, mentre gli oggetti *mutabili* (`list`, `dict`, `set`) possono subire modifiche permanenti sul posto.
*   **Regola LEGB:** La risoluzione di ogni identificatore segue l'ordine rigoroso *Local → Enclosing → Global → Built-in*; isolare i dati tramite parametri e `return` previene effetti collaterali.
*   **Moduli e Namespace:** L'istruzione `import` separa le librerie in spazi dei nomi distinti, garantendo ordine, riusabilità e accesso immediato alla Libreria Standard.

---

### Glossario

*   **Astrazione Procedurale:** Principio per cui un'operazione complessa viene racchiusa in una funzione dotata di un nome significativo, permettendo di usarla conoscendone solo input e output e ignorando i dettagli interni.
*   **`None`:** Oggetto speciale e univoco di Python che rappresenta l'assenza di un valore; viene restituito automaticamente dalle funzioni prive di `return`.
*   **Docstring:** Stringa di documentazione posta come prima istruzione del corpo di una funzione (o modulo) per descriverne formalmente scopo, parametri e valore di ritorno.
*   **Passaggio per Riferimento all'Oggetto (*Pass by Object Reference*):** Meccanismo di Python per cui ai parametri formali viene associato il riferimento diretto agli oggetti passati dal chiamante, con comportamento diverso a seconda della mutabilità dell'oggetto.
*   **Effetto Collaterale (*Side Effect*):** Modifica osservabile dello stato esterno (es. alterazione di una lista del chiamante o di una variabile globale) prodotta da una funzione al di là del proprio valore di ritorno.
*   **Regola LEGB:** Gerarchia di ricerca degli ambiti di visibilità (*Local, Enclosing, Global, Built-in*) usata dall'interprete Python per risolvere i nomi delle variabili.
*   **Modulo:** File sorgente Python (`.py`) contenente definizioni di funzioni, costanti o strutture dati progettate per essere importate e riutilizzate in altri programmi.
*   **Namespace (Spazio dei Nomi):** Contenitore logico che associa nomi univoci agli oggetti in memoria, impedendo conflitti tra identificatori definiti in moduli o ambiti differenti.
