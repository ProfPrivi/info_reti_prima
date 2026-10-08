---
title: 3.3 Strutture Decisionali e Operatori Logici
description: Costrutti condizionali if, elif, else, algebra booleana applicata, operatori relazionali e logici, indentazione PEP 8 e validazione degli input.
---

### Introduzione

Nel modulo precedente abbiamo fatto la conoscenza degli "ingredienti base" con cui lavora ogni programma informatico: le variabili e i tipi di dato primitivi. Abbiamo compreso che in Python una variabile non è una scatola rigida preformata, ma un'etichetta dinamica applicata a un oggetto nella memoria RAM, e abbiamo visto come manipolare numeri interi, numeri con la virgola, stringhe di testo e valori booleani attraverso il meccanismo della conversione di tipo esplicita (casting).

Tuttavia, fino a questo momento, tutti gli script che abbiamo mandato in esecuzione si sono comportati come una catena di montaggio a senso unico: la Python Virtual Machine (PVM) ha letto la riga 1, poi la riga 2, poi la riga 3, scendendo ciecamente in linea retta fino alla fine del file. Un programma privo della capacità di scegliere è come un carillon: ripete sempre la stessa melodia meccanica, senza potersi adattare a ciò che accade all'esterno, a dati imprevisti o a scelte compiute dall'utente.

Nel Modulo 2.2 abbiamo scoperto l'importanza logica dell'**Istruzione di Selezione** attraverso il rombo di Flowgorithm. Ora è il momento di compiere il grande passo: tradurre quel rombo in codice Python professionale. Scoprirete che Python affronta le decisioni con una pulizia visiva senza paragoni: niente parentesi graffe ingombranti come in C o Java, nessuna parola chiave arcaica come `then` o `endif`. La macchina comprenderà la struttura dei vostri ragionamenti attraverso due soli elementi: il simbolo dei due punti `:` e l'**indentazione**. In questa lezione esploreremo i costrutti `if`, `elif` ed `else`, integreremo gli operatori relazionali con i connettivi dell'algebra booleana (`and`, `or`, `not`) e impareremo a progettare algoritmi sicuri e difensivi capaci di convalidare i dati prima di elaborarli.

---

### Sviluppo dell'Argomento

#### 1. L'Espressione Booleana e gli Operatori di Confronto
Ogni decisione informatica nasce sempre da una domanda precisa posta allo stato della memoria. Come abbiamo appreso studiando la teoria della comunicazione e la codifica binaria, un calcolatore non può tollerare l'ambiguità del linguaggio naturale umano: non possiamo chiedere al programma *"Questo valore ti sembra ragionevole?"*, perché la macchina non possiede buon senso né intuito.

All'interno di una struttura decisionale possiamo inserire solo una **condizione logica (o espressione Booleana)**: una formulazione matematica che ammette solo due esiti categorici e mutuamente esclusivi: **`True`** (Vero) oppure **`False`** (Falso).

Per confrontare variabili e costanti, Python mette a disposizione sei **operatori relazionali (o di confronto)**:

| Operatore | Significato Logico | Esempio Sintattico | Esito (ipotizzando `x = 10`) | Regola Operativa |
| :---: | :--- | :---: | :---: | :--- |
| `==` | Uguale a | `x == 10` | `True` | **Doppio uguale:** confronta due valori. Non confondere mai con `=`, che serve per assegnare un dato a una variabile! |
| `!=` | Diverso da | `x != 5` | `True` | Restituisce `True` se i valori a sinistra e a destra sono differenti. |
| `>` | Maggiore di | `x > 15` | `False` | Confronto numerico strettamente maggiore. |
| `<` | Minore di | `x < 20` | `True` | Confronto numerico strettamente minore. |
| `>=` | Maggiore o uguale a | `x >= 10` | `True` | Restituisce `True` se il valore è maggiore o tocca esattamente la soglia. |
| `<=` | Minore o uguale a | `x <= 8` | `False` | Restituisce `True` se il valore è minore o tocca esattamente la soglia. |

In Python possiamo confrontare non solo numeri, ma anche stringhe di testo. L'interprete confronta i caratteri lettera per lettera in base al loro codice numerico Unicode (ordinamento lessicografico):
```python
print("mela" < "pera")   # Restituisce True perché 'm' precede 'p' nell'alfabeto
print("Casa" == "casa")  # Restituisce False: le lettere maiuscole hanno codici diversi dalle minuscole
```

#### 2. L'Anatomia della Scelta: La Sintassi di `if` ed `else`
In Python il costrutto fondamentale per la selezione è la parola chiave **`if`** (che in inglese significa "se").

##### La Regola dei Due Punti e dell'Indentazione
La grammatica di un'istruzione condizionale in Python è essenziale ma ferrea:
1. Si inizia con la parola chiave `if`, seguita dall'espressione logica (non serve racchiuderla tra parentesi tonde, a meno di formule algebriche complesse).
2. La riga deve terminare **tassativamente con il simbolo dei due punti `:`**. I due punti sono il segnale che dice alla PVM: *"La condizione è terminata; preparati a leggere il blocco di istruzioni subordinate che dipendono da questo test"*.
3. Tutte le istruzioni che devono essere eseguite se la condizione è Vera devono essere **rientrate verso destra** rispetto al margine. Questa rientranza prende il nome di **indentazione**.

Secondo le linee guida ufficiali di stile del linguaggio (**PEP 8**), l'indentazione standard è composta rigorosamente da **4 spazi vuoti** (evitate di mescolare tabulazioni e spazi). Quando l'indentazione cessa e il codice ritorna allineato al margine sinistro, Python deduce istantaneamente che il blocco condizionale è terminato.

##### Selezione Semplice (Solo Ramo Vero)
Equivale al blocco a rombo in cui il ramo Falso non compie alcuna azione operativa.
```python
temperatura = 38.5

if temperatura > 37.0:
    print("Attenzione: rilevata temperatura corporea anomala!")
    print("Si consiglia riposo e idratazione.")

print("Misurazione registrata con successo.")
```
*Cosa accade durante l'esecuzione?* Se la variabile `temperatura` vale 38.5, il test restituisce `True`: il programma entra nel blocco indentato ed esegue i due messaggi di allarme. Se la variabile valesse 36.2, il test restituirebbe `False`: la PVM salterebbe all'istante le due righe indentate, passando direttamente alla terza riga ("Misurazione registrata con successo"), che non essendo indentata viene eseguita in ogni scenario.

##### Selezione Doppia (`if` - `else`)
Rappresenta il bivio completo: un insieme di istruzioni se la condizione è Vera, un insieme completamente alternativo se è Falsa.
```python
eta = int(input("Inserisci la tua eta': "))

if eta >= 18:
    print("Accesso autorizzato: profilo maggiorenne.")
else:
    print("Accesso negato: servizio riservato ai maggiori di 18 anni.")
```
La parola chiave `else` (altrimenti) non vuole mai una condizione dopo di sé: raccoglie tutti i casi possibili in cui il test dell'`if` è risultato `False`. Anche dopo `else` è obbligatorio inserire i due punti `:` e indentare le istruzioni figlie.

#### 3. Bivi Multipli a Cascata: La Parola Chiave `elif`
Nella vita reale i problemi non si dividono quasi mai in sole due strade. Pensiamo alla valutazione di una prova scolastica: il risultato può essere insufficiente, sufficiente, buono oppure ottimo.

Se dovessimo gestire queste alternative usando solo `if` ed `else`, saremmo costretti ad annidare un nuovo `if` dentro ogni ramo `else`, spingendo il codice sempre più a destra e creando una complessa e illeggibile "piramide ad albero":
```python
# Approccio sconsigliato: ramificazione a gradini faticosa da leggere
if punteggio >= 90:
    giudizio = "Ottimo"
else:
    if punteggio >= 70:
        giudizio = "Buono"
    else:
        if punteggio >= 60:
            giudizio = "Sufficiente"
        else:
            giudizio = "Insufficiente"
```

Per evitare questo degrado visivo, Python introduce una parola chiave compatta ed elegante: **`elif`**, che è la fusione grammaticale di *else if* ("altrimenti se"). Essa consente di allineare una serie indefinita di controlli mutualmente esclusivi lungo la stessa colonna:

```python
# Approccio professionale e leggibile ("Pythonic Style")
punteggio = int(input("Inserisci il punteggio del test (0-100): "))

if punteggio >= 90:
    giudizio = "Ottimo"
elif punteggio >= 70:
    giudizio = "Buono"
elif punteggio >= 60:
    giudizio = "Sufficiente"
else:
    giudizio = "Insufficiente"

print("Valutazione finale:", giudizio)
```

*Il meccanismo della mutua esclusione:* La PVM esamina le condizioni dall'alto verso il basso. Nel momento esatto in cui incontra la **prima condizione che risulta vera**, esegue il suo blocco indentato e poi **ignora e scavalca tutti gli `elif` successivi e il blocco `else` finale**, saltando direttamente alla prima riga non indentata. L'eventuale blocco `else` in coda funge da "rete di sicurezza", intercettando tutti i casi che non hanno soddisfatto nessuna delle condizioni precedenti.

#### 4. I Connettivi Logici: L'Algebra Booleana in Azione
Spesso un bivio decisionale non dipende da un singolo dato, ma dalla combinazione simultanea di più circostanze. George Boole formalizzò queste relazioni attraverso l'algebra della logica, fondata su tre connettivi universali: la congiunzione, la disgiunzione e la negazione.

Mentre altri linguaggi usano simboli matematici talvolta ostici (`&&`, `||`, `!`), Python impiega parole inglesi limpide e trasparenti: **`and`**, **`or`**, **`not`**.

##### A. L'Operatore `and` (Congiunzione Logica)
Restituisce `True` se e solo se **entrambe** le condizioni poste ai suoi lati sono contemporaneamente vere. Basta che uno solo dei due elementi sia falso per far crollare a `False` l'intera espressione.
```python
eta = 20
ha_patente = True

if eta >= 18 and ha_patente:
    print("Pratica di noleggio auto approvata.")
```

*Scrittura matematica compatta (Chained Comparisons):* Per verificare se una variabile numerica si trova all'interno di un intervallo chiuso, Python supporta la notazione a catena tipica dei libri di matematica, evitando la ridondanza:
```python
# Questa forma concisa:
if 18 <= eta <= 65:
    print("Fascia d'eta' lavorativa.")

# Equivale esattamente a scrivere:
# if eta >= 18 and eta <= 65:
```

##### B. L'Operatore `or` (Disgiunzione Inclusiva)
Restituisce `True` se **almeno una** delle due condizioni risulta vera. Restituisce `False` esclusivamente se entrambi i termini posti ai suoi lati risultano falsi.
```python
giorno = "Domenica"
e_festivo = False

if giorno == "Domenica" or e_festivo:
    print("Oggi gli uffici sono chiusi al pubblico.")
```

##### C. L'Operatore `not` (Negazione Logica)
È un operatore unario: agisce su una sola espressione e ne **inverte il valore di verità**. Trasforma il Vero in Falso e il Falso in Vero.
```python
account_sospeso = False

if not account_sospeso:
    print("Accesso alla piattaforma consentito.")
```

##### Ottimizzazione Hardware: La Valutazione a Corto Circuito (Short-Circuit)
Negli operatori `and` e `or`, Python applica una strategia ingegneristica ad alte prestazioni chiamata **valutazione a corto circuito**:
*   Nell'espressione `A and B`, se Python valuta `A` e scopre che vale `False`, **non valuta neppure il termine `B`**: sa già con assoluta certezza logica che l'espressione non potrà mai essere vera.
*   Nell'espressione `A or B`, se Python scopre che `A` vale `True`, **si arresta immediatamente e non calcola `B`**: un termine vero è sufficiente a rendere vero l'intero blocco.

Questo meccanismo non serve solo a risparmiare millisecondi di calcolo, ma agisce come scudo difensivo contro gli arresti anomali del software (*crash*). Osserviamo questo esempio:
```python
denominatore = 0

# Se 'denominatore != 0' è False, Python si arresta subito e NON calcola la divisione,
# evitando il temibile arresto per ZeroDivisionError!
if denominatore != 0 and (100 / denominatore) > 2:
    print("Frazione calcolata regolarmente.")
else:
    print("Operazione annullata: denominatore non valido.")
```

#### 5. Selezioni Annidate e Validazione degli Input
Parliamo di **selezioni annidate** quando un intero blocco `if` viene inserito all'interno del corpo di un altro blocco condizionale. L'indentazione visiva guiderà con naturalezza il programmatore: ogni livello di annidamento comporterà un ulteriore rientro di 4 spazi verso destra.

Le strutture annidate sono preziose per implementare la **validazione dei dati di input** (o *sanificazione*): la pratica professionale che controlla preventivamente la bontà dei dati forniti dall'utente prima di ammetterli ai calcoli veri e propri, evitando che numeri negativi o formati assurdi compromettano la solidità dell'applicazione.

---

### Esempi Pratici e Script Completi Guidati

#### Esempio 1: Calcolo Tariffario del Cinema con Scaglioni Multipli
*Obiettivo:* Progettare un algoritmo di biglietteria che acquisisca l'età dello spettatore e verifichi se possiede uno status di studente, calcolando il costo del biglietto secondo le seguenti regole:
*   Bambini sotto gli 8 anni: Ingresso Gratuito (0,00 €).
*   Ragazzi dagli 8 ai 17 anni: Tariffa Ridotta (5,00 €).
*   Adulti (18-64 anni): Tariffa Piena (8,50 €), con riduzione a 6,00 € in caso di studenti universitari.
*   Senior (dai 65 anni in su): Tariffa Over 65 (4,00 €).

```python
# =======================================================
# Script: biglietteria_cinema.py
# Scopo: Dimostrazione pratica di if - elif - else annidati
# =======================================================

print("=== SISTEMA DI BIGLIETTERIA MULTISALA ===")

# Acquisizione dell'età con casting esplicito a numero intero
eta = int(input("Inserisci l'eta' dello spettatore: "))

# Fase di validazione preliminare contro input assurdi
if eta < 0 or eta > 125:
    print("Errore: Il valore di eta' inserito non e' plausibile.")
else:
    # Catena di bivi mutualmente esclusivi
    if eta < 8:
        prezzo = 0.0
        categoria = "Bambino (Omaggio)"
    elif eta < 18:
        prezzo = 5.0
        categoria = "Junior (Ridotto)"
    elif eta >= 65:
        prezzo = 4.0
        categoria = "Senior (Over 65)"
    else:
        # Gestione della tariffa adulti con sotto-selezione condizionale
        risposta_studente = input("Sei uno studente universitario con tesserino? (s/n): ")
        if risposta_studente == "s" or risposta_studente == "S":
            prezzo = 6.0
            categoria = "Universitario (Sconto Studio)"
        else:
            prezzo = 8.5
            categoria = "Adulto (Intero)"

    # Visualizzazione pulita del riepilogo cassa
    print("-----------------------------------------")
    print("Categoria assegnata:", categoria)
    print("Importo da saldare: ", prezzo, "Euro")
    print("-----------------------------------------")
```

#### Esempio 2: Verifica dell'Anno Bisestile con Logica Booleana
*Obiettivo:* Realizzare un algoritmo che determini se un anno inserito dall'utente è bisestile. 
*Regola astronomica gregoriana:* Un anno è bisestile se è divisibile per 4, **ma non** per 100, **a meno che** non sia contemporaneamente divisibile per 400 (gli anni secolari 1600 e 2000 erano bisestili; 1700, 1800 e 1900 non lo erano).

```python
# =======================================================
# Script: anno_bisestile.py
# Scopo: Applicazione congiunta di and, or e operatore modulo %
# =======================================================

print("=== VERIFICA ANNO BISESTILE ===")

anno = int(input("Inserisci l'anno da verificare (es. 2024): "))

# Condizione logica avanzata formulata in un'unica espressione booleana
# La regola è: (divisibile per 4 AND NON per 100) OPPURE (divisibile per 400)
e_bisestile = (anno % 4 == 0 and anno % 100 != 0) or (anno % 400 == 0)

if e_bisestile:
    print("L'anno", anno, "E' bisestile: il mese di febbraio conta 29 giorni.")
else:
    print("L'anno", anno, "NON e' bisestile: l'anno dura 365 giorni regolari.")
```

#### Esempio 3: Calcolatrice Aritmetica con Protezione Errori a Runtime
*Obiettivo:* Acquisire due operandi numerici e il simbolo dell'operazione desiderata (`+`, `-`, `*`, `/`). Il programma deve identificare l'operatore corretto, intercettare la divisione per zero prima che causi un crash e segnalare eventuali comandi non riconosciuti.

```python
# =======================================================
# Script: calcolatrice_sicura.py
# Scopo: Selezioni annidate e programmazione difensiva
# =======================================================

print("=== CALCOLATRICE ARITMETICA PROTETTA ===")

primo_numero = float(input("Inserisci il primo numero: "))
operatore = input("Scegli l'operazione da eseguire (+, -, *, /): ")
secondo_numero = float(input("Inserisci il secondo numero: "))

# Riconoscimento del simbolo operatore
if operatore == "+":
    risultato = primo_numero + secondo_numero
    print("Risultato:", primo_numero, "+", secondo_numero, "=", risultato)
elif operatore == "-":
    risultato = primo_numero - secondo_numero
    print("Risultato:", primo_numero, "-", secondo_numero, "=", risultato)
elif operatore == "*":
    risultato = primo_numero * secondo_numero
    print("Risultato:", primo_numero, "*", secondo_numero, "=", risultato)
elif operatore == "/":
    # Protezione condizionale preventiva contro il crash per divisione per zero
    if secondo_numero == 0:
        print("Errore Matematico: Impossibile dividere una quantita' per zero!")
    else:
        risultato = primo_numero / secondo_numero
        print("Risultato:", primo_numero, "/", secondo_numero, "=", risultato)
else:
    # Gestione dell'anomalia di digitazione
    print("Errore: Il simbolo '", operatore, "' non e' riconosciuto come operatore valido.")
```

---

### Sintesi

*   **Il Ruolo dei Costrutti Condizionali:** Permettono alla Python Virtual Machine di deviare dal percorso lineare ed eseguire rami di codice differenti in funzione della verità o falsità di un'espressione booleana.
*   **Sintassi Essenziale e Indentazione:** L'istruzione `if` impone la presenza dei due punti `:` al termine della condizione; la delimitazione dei blocchi interni è affidata in modo esclusivo all'indentazione (4 spazi vuoti secondo lo standard PEP 8).
*   **Bivi Multipli con `elif`:** La clausola `elif` (crasi di *else if*) consente di concatenare controlli alternativi mutualmente esclusivi lungo una sola colonna visiva, arrestando la valutazione al primo test verificato ed evitando disordinate strutture ad albero.
*   **Connettivi Booleani Lessicali:** Python impiega parole chiave leggibili (`and`, `or`, `not`) per aggregare condizioni multiple; la valutazione procede a "corto circuito", bloccando l'analisi non appena il risultato complessivo è matematicamente certo.
*   **Programmazione Difensiva:** L'uso combinato di selezioni annidate e verifiche logiche preventive permette di sanificare i dati in ingresso, respingere anomalie e scongiurare blocchi a runtime (come la divisione per zero).

---

### Glossario

*   **Costrutto Condizionale:** Struttura di controllo sintattica che subordina l'esecuzione di un blocco di istruzioni all'esito vero o falso di un test logico.
*   **Operatore Relazionale:** Simbolo algebrico di confronto (`==`, `!=`, `<`, `>`, `<=`, `>=`) che mette a confronto due valori generando un risultato booleano (`True` o `False`).
*   **Operatore Logico:** Connettivo algebrico booleano (`and`, `or`, `not`) utilizzato per combinare o invertire espressioni logiche elementari nel rispetto delle tavole di verità.
*   **PEP 8:** Documento ufficiale di standardizzazione stilistica per il codice Python (*Python Enhancement Proposal 8*), che stabilisce le convenzioni tipografiche comunemente accettate dalla comunità internazionale di sviluppatori (tra cui l'uso tassativo di 4 spazi per livello di indentazione).
*   **Elif:** Parola chiave riservata del linguaggio Python che contrae la locuzione *else if*, consentendo di concatenare controlli alternativi ed escludenti senza dover incrementare la profondità di indentazione.
*   **Valutazione a Corto Circuito (Short-Circuit Evaluation):** Strategia ottimizzata degli interpreti per cui un'espressione logica composta viene valutata solo finché non è noto il risultato finale, tralasciando i termini successivi superflui ed evitando potenziali errori a runtime.
*   **Validazione dei Dati (Input Sanitization):** Procedura di ispezione condizionale applicata ai dati forniti dall'utente prima dell'avvio delle elaborazioni di calcolo, finalizzata a verificarne la correttezza formale e la plausibilità logica.

<button onclick="window.print()" style="padding: 10px 15px; background-color: #dbae1a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  🖨️ Stampa / Salva in PDF
</button>