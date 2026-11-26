---
title: 3.8 Tassonomia degli Errori, Eccezioni e Qualità del Software
description: Classificazione degli errori (sintattici, a runtime, logici), gestione concettuale delle eccezioni (try/except), programmazione difensiva e principi di qualità del software.
---

### Introduzione

Scrivere codice che funziona quando l'utente inserisce esattamente i dati "perfetti" è solo metà del mestiere di un informatico. Nel mondo reale i programmi vengono esposti a imprevisti continui: un utente digita una parola dove ci si aspettava un numero, un calcolo tenta una divisione per zero, una chiave cercata in un dizionario non esiste oppure un ragionamento matematico contiene una piccola svista invisibile.

Capire **che tipo di errore** si ha di fronte — e saper progettare programmi robusti, leggibili e facili da mantenere — è ciò che distingue un codice improvvisato da un software di qualità. In questa lezione conclusiva dell'Unità 3 studieremo la **tassonomia formale degli errori**, il modello teorico della **gestione delle eccezioni** in Python e i pilastri della **qualità del software**.

---

### Sviluppo dell'Argomento

#### 1. Le Tre Famiglie di Errori Informatici
Non tutti i bug sono uguali. In ingegneria del software gli errori si classificano in tre categorie radicalmente diverse per *momento in cui compaiono* e *difficoltà di individuazione*:

| Categoria di Errore | Quando Compare | Chi lo Scopre | Esempio in Python | Difficoltà di Diagnosi |
| :--- | :--- | :--- | :--- | :--- |
| **1. Errore di Sintassi (*Syntax Error*)** | **Prima** dell'esecuzione (fase di parsing/compilazione in bytecode) | L'interprete blocca subito l'avvio | `if x > 5` (mancano i `:`) oppure `IndentationError` | **Bassa:** Python indica la riga esatta. |
| **2. Errore a Runtime (*Eccezione*)** | **Durante** l'esecuzione, su specifici dati in ingresso | La Python Virtual Machine arresta il programma | `10 / 0` (`ZeroDivisionError`), `int("ciao")` (`ValueError`) | **Media:** Python stampa la traccia (*Traceback*) con il tipo di errore. |
| **3. Errore Logico (Semantico)** | **Mai segnalato** dalla macchina: il programma termina normalmente | Solo l'essere umano, confrontando l'output con il risultato atteso | Calcolare la media come `a + b / 2` invece di `(a + b) / 2` | **Alta:** il codice è valido ma il ragionamento è sbagliato! |

*Riflessione teorica chiave:* Gli errori di sintassi sono i più "rumorosi" ma i meno pericolosi, perché la macchina li blocca sul nascere. Gli **errori logici** sono i più insidiosi: il computer esegue fedelmente e senza protestare una formula sbagliata, producendo risultati falsi con perfetta sicurezza.

#### 2. Le Eccezioni più Comuni in Python
In Python, ogni errore che si verifica a tempo di esecuzione è un oggetto chiamato **Eccezione** (*Exception*). Conoscerne i nomi ufficiali permette di interpretare all'istante il *Traceback* (il resoconto di errore prodotto dall'interprete):

*   **`ZeroDivisionError`:** Tentativo di dividere un numero per zero (`x / 0` o `x % 0`).
*   **`ValueError`:** Il tipo del dato è giusto (es. una stringa), ma il suo contenuto non è convertibile o valido (es. `int("abc")`).
*   **`TypeError`:** Operazione applicata a tipi incompatibili (es. sommare una stringa a un intero `"voto: " + 8`, oppure tentare di modificare una tupla immutabile).
*   **`NameError`:** Uso di una variabile o funzione mai definita (spesso un semplice errore di battitura nel nome).
*   **`IndexError`:** Accesso a una posizione inesistente in una lista o stringa (*Index Out of Bounds*).
*   **`KeyError`:** Ricerca in un dizionario di una chiave che non esiste (evitabile col metodo `.get()`, visto nella lezione `3.6`).

#### 3. Gestione delle Eccezioni e Programmazione Difensiva
Quando si verifica un'eccezione non gestita, il programma va in **crash** (arresto anomalo). Per costruire software affidabili esistono due strategie complementari:

1.  **Prevenzione (Programmazione Difensiva):** Controllare le condizioni critiche *prima* di eseguire l'operazione rischiosa (es. verificare `if denominatore != 0:` prima di dividere, come visto nella `3.3`).
2.  **Gestione Controllata (`try / except`):** Intercettare l'eccezione quando l'errore dipende da eventi esterni imprevedibili (come l'input dell'utente o un file mancante) per reagire in modo ordinato invece di far chiudere il programma.

Il meccanismo concettuale in Python si basa su un blocco protetto:
```python
try:
    numero = int(input("Inserisci un divisore intero: "))
    risultato = 100 / numero
except ValueError:
    print("Errore: devi digitare un numero intero valido.")
except ZeroDivisionError:
    print("Errore: impossibile dividere per zero.")
else:
    print("Risultato calcolato:", risultato)
finally:
    print("Operazione conclusa.")
```
*   **`try`:** Racchiude le istruzioni che potrebbero sollevare un'eccezione.
*   **`except <TipoErrore>`:** Cattura uno specifico tipo di eccezione e definisce la risposta di recupero.
*   **`else`** *(opzionale)*: Viene eseguito solo se il blocco `try` si è concluso senza errori.
*   **`finally`** *(opzionale)*: Viene eseguito **sempre** (sia in caso di successo sia in caso di errore), utile per chiudere risorse aperte.

*Regola d'oro:* È sempre meglio catturare eccezioni **specifiche** (`except ValueError:`) piuttosto che un generico `except:`, che nasconderebbe anche eventuali bug imprevisti del programmatore.

#### 4. I Pilastri della Qualità del Software
Un programma professionale viene scritto una volta, ma viene letto, corretto e aggiornato decine di volte nel corso degli anni (spesso da persone diverse dall'autore originale). Per questo l'ingegneria del software valuta la **qualità del codice** secondo quattro criteri teorici fondamentali:

1.  **Leggibilità e Standard di Stile (PEP 8):** Nomi di variabili espressivi (`prezzo_scontato` al posto di `x1`), indentazione coerente a 4 spazi, spaziatura pulita. Il codice dovrebbe essere **autoesplicativo**: i commenti servono a spiegare il *perché* di una scelta logica, non a tradurre l'ovvio.
2.  **Manutenibilità e Principio DRY (*Don't Repeat Yourself*):** Evitare duplicazioni di codice isolando le logiche ripetute dentro funzioni (`3.7`). Se cambia una regola (es. l'aliquota IVA), si modifica in un solo punto.
3.  **Robustezza:** Capacità del software di non andare in crash di fronte a input anomali o inattesi (validazione degli input e gestione delle eccezioni).
4.  **Verifica tramite Testing e Casi Limite (*Edge Cases*):** Provare un algoritmo solo su un caso "normale" non dimostra che sia corretto. Un buon collaudo (*testing*) verifica sistematicamente i **casi limite**: input pari a `0`, numeri negativi, liste vuote `[]`, valori esattamente sulla soglia di un confronto (`<` vs `<=`).

---

:::tip[Idea chiave]
Un programma che gira senza errori a schermo non è automaticamente corretto: gli **errori logici** sono i più insidiosi perché la macchina non li segnala mai. Solo il **testing sui casi limite** (*edge cases*) li smaschera.
:::

:::caution[Errore tipico in verifica]
Scrivere un blocco `except:` generico senza specificare il tipo di eccezione (es. `except ValueError:`) è una cattiva pratica, perché maschera eventuali bug di programmazione imprevisti rendendoli invisibili.
:::

### Mettiti alla prova (Domande Flash)

<details>
  <summary><strong>1. Domanda rapida:</strong> Che eccezione solleva <code>int("ventidue")</code>? E che eccezione solleva <code>"voto: " + 8</code>?</summary>
  <p><code>int("ventidue")</code> solleva un <strong><code>ValueError</code></strong> (tipo stringa corretto, ma contenuto non convertibile); <code>"voto: " + 8</code> solleva un <strong><code>TypeError</code></strong> (tipi incompatibili).</p>
</details>

<details>
  <summary><strong>2. Domanda rapida:</strong> Quando viene eseguito il blocco <code>finally</code> in un costrutto <code>try / except / finally</code>?</summary>
  <p>Viene eseguito <strong>sempre</strong>, sia che il blocco <code>try</code> riesca sia che si verifichi un'eccezione.</p>
</details>

<details>
  <summary><strong>3. Vero o Falso:</strong> Un errore nella formula della media <code>a + b / 2</code> invece di <code>(a + b) / 2</code> è un errore di sintassi.</summary>
  <p><strong>Falso.</strong> È sintatticamente valido: si tratta di un <strong>errore logico (semantico)</strong>.</p>
</details>

---

### Sintesi

*   **Tre Tipi di Errori:** *Sintattici* (violano la grammatica del linguaggio, bloccati prima dell'esecuzione), *a Runtime / Eccezioni* (bloccano il programma durante l'esecuzione su dati anomali) e *Logici* (il programma gira ma produce risultati sbagliati, i più difficili da scoprire).
*   **Eccezioni Principali:** `ValueError`, `TypeError`, `ZeroDivisionError`, `NameError`, `IndexError` e `KeyError` descrivono con precisione la causa di un arresto anomalo nel *Traceback*.
*   **Costrutto `try / except`:** Consente di isolare il codice esposto a errori esterni e gestire il fallimento in modo controllato senza far terminare bruscamente il software.
*   **Qualità del Software:** Leggibilità (PEP 8), modularità (DRY), robustezza e verifica rigorosa dei casi limite (*edge cases*) trasformano un semplice script in un programma affidabile e manutenibile.

---

### Glossario

*   **Errore di Sintassi (*Syntax Error*):** Violazione delle regole grammaticali del linguaggio che impedisce all'interprete di tradurre ed avviare il programma.
*   **Eccezione (*Exception* / *Runtime Error*):** Evento anomalo che interrompe il normale flusso di esecuzione di un programma sintatticamente corretto a causa di operazioni illegali sui dati (es. divisione per zero).
*   **Errore Logico (Semantico):** Difetto nel ragionamento algoritmico che permette al programma di terminare senza crash ma generando output errati.
*   **Traceback:** Messaggio diagnostico stampato da Python in caso di eccezione non gestita, che mostra la sequenza delle chiamate attive sullo stack e la riga esatta in cui si è verificato l'errore.
*   **Gestione delle Eccezioni (`try / except`):** Meccanismo strutturato che intercetta le eccezioni a tempo di esecuzione per eseguire codice di recupero ed evitare il crash del software.
*   **Programmazione Difensiva:** Approccio progettuale mirato a prevedere e neutralizzare in anticipo possibili input errati o condizioni anomale.
*   **Testing:** Processo sistematico di verifica di un programma tramite insiemi mirati di dati di prova per accertarne correttezza e robustezza.
*   **Caso Limite (*Edge Case*):** Condizione di input estrema o di confine (es. valore `0`, collezione vuota, estremo di un intervallo) dove si annidano più frequentemente i bug logici.
