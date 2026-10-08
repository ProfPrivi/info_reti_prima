---
title: 3.4 Strutture Iterative
description: Iterazione definita e indefinita, cicli while e for, generatore range, contatori, accumulatori, istruzioni break e continue, prevenzione dei loop infiniti e tracciamento delle variabili.
---

### Introduzione

Immaginate di dover copiare a mano una frase su un quaderno per mille volte, oppure di dover calcolare la media aritmetica di diecimila scontrini fiscali uno alla volta con carta e penna. Dopo poche decine di ripetizioni, un essere umano inizierebbe a manifestare stanchezza, calo di concentrazione e una tendenza inesorabile a commettere errori di distrazione. Gli esseri umani sono straordinari nell'intuizione, nella creatività e nel pensiero laterale, ma sono biologicamente inadatti a svolgere compiti noiosi e ripetitivi.

I calcolatori elettronici rappresentano l'esatto opposto. Privi di coscienza e di affaticamento, eccellono nell'eseguire la medesima sequenza di calcoli miliardi di volte al secondo con precisione assoluta. Anzi, la vera ragion d'essere dell'informatica moderna risiede nella capacità di automatizzare la ripetizione. Nel Capitolo 2 abbiamo scoperto che il cuore stesso della CPU opera attraverso un ciclo instancabile — il ciclo di fetch-decode-execute — e nel Modulo 2.3 abbiamo sperimentato come un diagramma a blocchi possa curvare le proprie frecce all'indietro per rieseguire più volte lo stesso blocco di codice[cite: 13].

Questa struttura logica prende il nome di **Iterazione** o **Ciclo** (*Loop*). 

Nel passaggio al linguaggio Python, l'iterazione si trasforma in uno strumento incredibilmente compatto ed espressivo. Invece di duplicare manualmente righe di codice, impareremo a governare il flusso dell'elaborazione attraverso due costrutti cardine: il ciclo **`while`** (per le ripetizioni subordinate a un evento logico) e il ciclo **`for`** (per le scansioni controllate e numerabili). In questa lezione analizzeremo la meccanica di questi due cicli, comprenderemo come evitare il pericolo dei loop infiniti che mandano in stallo il processore, integreremo le variabili di conteggio e di accumulo, e scopriremo le istruzioni di controllo avanzato come `break` e `continue`.

---

### Sviluppo dell'Argomento

#### 1. Cicli Definiti vs Indefiniti: Scegliere la Giusta Strategia
Prima di scrivere un ciclo sulla tastiera, il programmatore deve porsi una domanda analitica fondamentale: *so già a priori quante volte l'azione dovrà essere ripetuta, oppure la ripetizione dipende da un evento che accadrà durante l'esecuzione?*

In base a questa risposta, la teoria degli algoritmi suddivide i cicli in due grandi famiglie:

*   **Iterazione Definita (o a conteggio):** Il numero di ripetizioni è noto prima di avviare il ciclo (ad esempio: *"Ripeti questo calcolo per tutti i 30 studenti della classe"*, oppure *"Stampa i primi 50 numeri pari"*). In Python, questo scenario è dominato dal ciclo **`for`** abbinato alla funzione `range()`.
*   **Iterazione Indefinita (o condizionale):** Il numero esatto di passaggi non è prevedibile a monte, poiché la ripetizione prosegue finché si mantiene vera una determinata condizione logica, arrestandosi non appena tale condizione diventa falsa (ad esempio: *"Continua a chiedere la password finché l'utente non digita quella corretta"*, oppure *"Estrai numeri a sorte finché non esce il numero 90"*). In Python, questa logica è governata dal ciclo **`while`**.

#### 2. Il Ciclo `while`: L'Iterazione Indefinita Condizionale
La parola inglese *while* si traduce in italiano come *"mentre"* o *"fin tanto che"*. Il ciclo `while` valuta un'espressione booleana prima di ogni singola esecuzione del corpo di istruzioni. Se l'espressione restituisce `True`, le istruzioni indentate vengono eseguite; al termine, l'interprete risale all'inizio del blocco e rivaluta la condizione. Nel momento esatto in cui la condizione restituisce `False`, il ciclo cessa e l'esecuzione prosegue con la prima riga successiva non indentata.

##### L'Anatomia di un Ciclo While Robusto
Per funzionare correttamente e non bloccarsi, qualsiasi ciclo `while` deve possedere tre componenti architetturali obbligatorie:
1.  **Inizializzazione:** Prima dell'ingresso nel ciclo, la variabile di controllo deve essere creata e predisposta a un valore iniziale coerente.
2.  **Test di Condizione:** L'espressione logica posta dopo la parola `while` e chiusa dai due punti `:` deve stabilire chiaramente il criterio di permanenza nel ciclo.
3.  **Aggiornamento (Progressione):** All'interno del corpo indentato del ciclo, deve essere presente almeno un'istruzione che modifica il valore della variabile di controllo, spingendola progressivamente verso la condizione di terminazione.

Osserviamo un esempio lineare: contare da 1 a 5.
```python
# 1. Inizializzazione della variabile di controllo
contatore = 1

# 2. Test condizionale: continua finché contatore è minore o uguale a 5
while contatore <= 5:
    print("Numero corrente:", contatore)
    # 3. Aggiornamento essenziale: incremento unitario
    contatore = contatore + 1

print("Ciclo concluso con successo!")
```

##### Il Pericolo del Loop Infinito (*Infinite Loop*)
Cosa accadrebbe se dimenticassimo di scrivere l'istruzione `contatore = contatore + 1`?
La variabile `contatore` rimarrebbe per sempre ancorata al valore iniziale `1`. Di conseguenza, il test `contatore <= 5` risulterebbe vero al primo giro, al secondo giro, al milionesimo giro e all'infinito.

Il programma cadrebbe in un **Loop Infinito**: il computer continuerebbe a stampare `"Numero corrente: 1"` senza sosta, occupando il 100% delle risorse di calcolo concesse dal sistema operativo. 
> **Nota diagnostica:** Se durante l'esecuzione di uno script da terminale vi accorgete che il programma è bloccato in un loop infinito, potete forzarne l'arresto immediato premendo la combinazione di tasti **`Ctrl + C`**.

##### Il Pattern del Valore Sentinella
Uno degli impieghi più comuni del ciclo `while` consiste nel ricevere input continui dall'utente finché non viene digitato un valore convenzionale speciale, noto come **valore sentinella** (o segnale di stop):

```python
totale_spesa = 0.0
prezzo = float(input("Inserisci il prezzo dell'articolo (oppure 0 per terminare): "))

# 0 funge da valore sentinella
while prezzo != 0.0:
    totale_spesa = totale_spesa + prezzo
    prezzo = float(input("Inserisci il prossimo prezzo (0 per terminare): "))

print(f"Scontrino finale: {totale_spesa:.2f} Euro")
```

#### 3. Il Ciclo `for` e il Generatore di Sequenze `range()`
In linguaggi storici come C o Pascal, il ciclo `for` è basato su contatori numerici a incremento manuale. In Python, il ciclo `for` è concepito con un paradigma differente: è un costrutto di **attraversamento sequenziale** (*foreach*). Esso scandisce, uno alla volta, tutti gli elementi appartenenti a una sequenza o collezione ordinata.

La sua sintassi è:
```python
for variabile in sequenza:
    # blocco di istruzioni indentate
```

Per realizzare iterazioni numeriche definite in cui vogliamo ripetere un blocco per un numero esatto di volte, Python non usa indici manuali, ma si affida a una funzione integrata: **`range()`**.

##### La Logica della Funzione `range()`
La funzione `range()` genera una sequenza immutabile di numeri interi. Può essere invocata in tre forme diverse a seconda del numero di argomenti passati tra parentesi:

1.  **Forma a un parametro `range(stop)`:**
    Genera i numeri partendo da `0` fino a `stop - 1`, con passo predefinito pari a `+1`.
    *Esempio:* `range(4)` produce la sequenza `0, 1, 2, 3` (esegue esattamente 4 iterazioni).
2.  **Forma a due parametri `range(start, stop)`:**
    Genera i numeri partendo dal valore iniziale `start` fino a `stop - 1`.
    *Esempio:* `range(3, 8)` produce la sequenza `3, 4, 5, 6, 7`.
3.  **Forma a tre parametri `range(start, stop, step)`:**
    Genera i numeri da `start` a `stop - 1`, incrementando a ogni passaggio della quantità indicata da `step` (il passo).
    *Esempio positivo:* `range(10, 30, 5)` produce `10, 15, 20, 25`.
    *Esempio con passo negativo (conto alla rovescia):* `range(5, 0, -1)` produce `5, 4, 3, 2, 1`.

```python
# Conto alla rovescia elegante per il decollo
print("Inizio sequenza di lancio:")
for secondo in range(5, 0, -1):
    print(secondo, "secondi al via...")
print("Decollo avvenuto!")
```

*Perché l'estremo superiore `stop` viene escluso?*
Nei linguaggi ad alto livello moderni, escludere l'estremo finale è una convenzione universale derivata dalla numerazione che parte da zero (*zero-based indexing*). Se scrivete `range(N)`, otterrete esattamente `N` valori distinti (da `0` a `N - 1`), perfettamente allineati con gli indici validi per accedere agli elementi di un vettore o di una stringa.

#### 4. Ruoli Operativi delle Variabili: Contatori e Accumulatori
All'interno dei corpi ciclici, le variabili assumono spesso due ruoli algoritmici specializzati che abbiamo già incontrato in Flowgorithm:

*   **Il Contatore:** È una variabile intera che tiene traccia di quante volte si è verificato un evento o un passaggio. A ogni iterazione viene incrementata di un valore costante (solitamente $+1$). Deve sempre essere azzerata prima dell'ingresso nel ciclo (`contatore = 0`).
*   **L'Accumulatore (o Sommatore):** È una variabile (intera o reale) destinata a raccogliere la somma progressiva di valori variabili estratti o calcolati a ogni giro del ciclo. Anch'essa deve essere inizializzata a zero prima del ciclo (`somma = 0.0`).

##### Gli Operatori di Assegnazione Combinata
Per rendere la scrittura più fluida, Python supporta gli operatori compatti di riassegnazione:
*   `variabile += 1` equivale a `variabile = variabile + 1`
*   `somma += valore` equivale a `somma = somma + valore`
*   `prodotto *= 2` equivale a `prodotto = prodotto * 2`
*   `residuo -= scarico` equivale a `residuo = residuo - scarico`

##### Il Tracciamento delle Variabili (*Trace Table*)
Per accertarsi che la logica iterativa sia priva di bug, un informatico compie l'operazione di tracciamento (analoga a quanto mostrato per la traccia di esecuzione dell'architettura hardware nel Capitolo 3): si crea una tabella che annota il valore assunto da ogni variabile alla fine di ciascuna iterazione.

Consideriamo questo frammento di codice:
```python
totale = 0
for i in range(1, 4):
    totale += i * 2
```

La tabella di tracciamento (*Trace Table*) documenta l'evoluzione dello stato di memoria:

| Iterazione | Valore di `i` | Espressione calcolata (`i * 2`) | Nuovo Valore di `totale` |
| :---: | :---: | :---: | :---: |
| Inizializzazione | - | - | 0 |
| Giro 1 | 1 | 2 | 2 |
| Giro 2 | 2 | 4 | 6 |
| Giro 3 | 3 | 6 | 12 |

Al termine del ciclo, la variabile `totale` contiene il valore finale `12`.

#### 5. Istruzioni di Controllo del Flusso: `break`, `continue` e l'`else` dei Cicli
Python include due istruzioni speciali per alterare manualmente il normale ciclo di ripetizione:

##### A. L'istruzione `break` (Interruzione Forzata)
L'istruzione `break` ordina alla PVM di uscire all'istante dal ciclo corrente, senza attendere che la condizione del `while` diventi falsa o che la sequenza del `for` si esaurisca. L'esecuzione balza immediatamente alla prima riga successiva al ciclo. Si impiega solitamente a fronte di eventi anomali, errori o quando l'obiettivo della ricerca è stato raggiunto precocemente.

##### B. L'istruzione `continue` (Salto dell'Iterazione)
L'istruzione `continue` non esce dal ciclo: si limita ad arrestare anticipatamente l'iterazione in corso, saltando qualsiasi riga sottostante, e riporta immediatamente il flusso al controllo iniziale per iniziare il giro successivo. È utile per filtrare e scartare dati non rilevanti prima di eseguire calcoli complessi.

##### C. La Clausola Speciale `else` associata ai Cicli
In Python, sia il costrutto `for` sia il costrutto `while` possono avere in coda un blocco **`else`**.
Il codice contenuto nell'`else` di un ciclo viene eseguito **solo ed esclusivamente se il ciclo è terminato in modo naturale** (ossia se la sequenza del `for` si è conclusa per intero, o se la condizione del `while` è diventata `False`). Se il ciclo viene interrotto forzatamente da un'istruzione `break`, il blocco `else` **viene completamente scavalcato**. Questa caratteristica è ideale negli algoritmi di ricerca.

---

### Esempi Pratici e Script Completi Guidati

#### Esempio 1: Validazione Difensiva con Ciclo `while` e Riconoscimento Errori
*Obiettivo:* Realizzare un modulo per l'acquisizione di una valutazione scolastica. Il programma deve rifiutare qualsiasi voto non compreso nell'intervallo didattico tra 1 e 10, reiterando la richiesta fino all'immissione di un dato corretto, e quantificare quanti tentativi errati sono stati compiuti.

```python
# =======================================================
# Script: validazione_voto.py
# Scopo: Dimostrazione del while per il controllo dell'input
# =======================================================

print("=== ACQUISIZIONE VALUTAZIONE SCOLASTICA ===")

tentativi_errati = 0

# Prima lettura (Input di prova)
voto = float(input("Inserisci il voto conseguito dallo studente (1 - 10): "))

# Ciclo di validazione condizionale: continua finché il dato è fuori range
while voto < 1.0 or voto > 10.0:
    tentativi_errati += 1
    print("Errore: Il voto immesso non e' valido!")
    print("Attenzione: La valutazione deve essere compresa tra 1.0 e 10.0.")
    # Nuova richiesta per consentire l'uscita dal ciclo
    voto = float(input("Riprova a inserire il voto corretto: "))

# Elaborazione a valle dell'iterazione
print("--------------------------------------------------")
print(f"Dato registrato con successo: {voto:.1f}")
if tentativi_errati > 0:
    print(f"Si sono resi necessari {tentativi_errati} tentativi di correzione.")
else:
    print("Dato inserito correttamente al primo tentativo.")
print("--------------------------------------------------")
```

#### Esempio 2: Calcolo della Potenza e Tabella Riepilogativa con Ciclo `for`
*Obiettivo:* Riprodurre in Python l'algoritmo di calcolo esponenziale studiato a livello architetturale hardware nel Capitolo 2 (calcolo di $P = 2^N$). Il programma acquisisce l'esponente massimo $N$ e visualizza a schermo la progressione geometrica di tutte le potenze di 2 da zero fino a $N$, formattando i dati in una tabella a due colonne.

```python
# =======================================================
# Script: potenze_di_due.py
# Scopo: Generazione di serie numeriche con for e range()
# =======================================================

print("=== PROGRESSIONE DELLE POTENZE DI 2 ===")

esponente_massimo = int(input("Fino a quale esponente desideri calcolare (es. 10)? "))

# Intestazione della tabella formattata
print("\n" + "=" * 25)
print(f"{'Esponente (N)':<15}{'Valore (2^N)':<10}")
print("=" * 25)

potenza = 1

# Iterazione definita: da 0 fino a esponente_massimo compreso (+1)
for n in range(0, esponente_massimo + 1):
    if n == 0:
        potenza = 1
    else:
        # Moltiplicazione iterativa: potenza = potenza * 2
        potenza *= 2
    
    # Stampa incolonnata dei valori calcolati
    print(f"{n:<15}{potenza:<10}")

print("=" * 25)
print("Tabella generata con successo.")
```

#### Esempio 3: Test di Primalità con Interruzione Anticipata (`break`) e Clausola `else`
*Obiettivo:* Progettare un algoritmo efficiente per verificare se un numero intero positivo maggiore di 1 è un **numero primo** (divisibile unicamente per 1 e per se stesso). Il programma deve scandire i potenziali divisori: se ne individua uno, interrompe immediatamente il ciclo con `break`; se invece il ciclo giunge al termine senza trovare divisori, la clausola `else` certifica che il numero è primo.

```python
# =======================================================
# Script: verifica_primalita.py
# Scopo: Utilizzo combinato di for, range, break ed else
# =======================================================

print("=== VERIFICA DI PRIMALITA' ALGORITMICA ===")

numero = int(input("Inserisci un numero intero maggiore di 1: "))

if numero <= 1:
    print("Per definizione teorica, i numeri primi sono maggiori di 1.")
else:
    # Testiamo tutti i possibili divisori da 2 fino alla metà del numero (+1)
    # Nessun divisore proprio può essere maggiore della metà del numero stesso
    limite = (numero // 2) + 1
    
    for divisore in range(2, limite):
        # Operatore modulo %: se il resto è 0, abbiamo trovato un divisore esatto
        if numero % divisore == 0:
            print(f"Il numero {numero} NON e' primo!")
            print(f"E' divisibile per {divisore} (infatti {divisore} * {numero // divisore} = {numero}).")
            # Interrompiamo immediatamente: inutile testare gli altri numeri!
            break
    else:
        # Questo blocco viene raggiunto solo se il for non ha mai incontrato un 'break'
        print(f"Il numero {numero} E' UN NUMERO PRIMO!")
        print("Non e' stato individuato alcun divisore intero nell'intervallo.")
```

---

### Sintesi

*   **Finalità dell'Iterazione:** Consente di eseguire ripetutamente un blocco di istruzioni senza duplicare codice, sfruttando la velocità di calcolo della macchina per elaborare masse imponenti di dati.
*   **La Scelta del Costrutto:** Si adotta il ciclo `for` quando il numero di iterazioni è quantificabile a priori (iterazione definita); si impiega il ciclo `while` quando la ripetizione deve proseguire fino al verificarsi di un evento o finché una condizione logica resta vera (iterazione indefinita).
*   **Componenti del Ciclo While:** Esige una variabile di controllo inizializzata a monte, un test condizionale di permanenza e un'istruzione interna di avanzamento. La mancata alterazione della condizione intrappola il programma in un *loop infinito*, saturando la CPU.
*   **Flessibilità di `range()`:** Genera sequenze aritmetiche especificando `stop`, coppia `(start, stop)` o terna `(start, stop, step)`. L'estremo superiore viene escluso per armonizzarsi con la convenzione informatica degli indici che partono da zero.
*   **Ruolo di Contatori e Accumulatori:** I contatori tengono traccia della frequenza di un evento incrementando di un passo fisso (`c += 1`), mentre gli accumulatori sommano quantità eterogenee (`s += dato`), richiedendo sempre l'azzeramento iniziale.
*   **Modifica del Flusso con `break` e `continue`:** L'istruzione `break` tronca istantaneamente l'intero ciclo; l'istruzione `continue` sopprime unicamente il passaggio corrente per ripartire dal test successivo. La clausola `else` del ciclo viene eseguita unicamente se il loop termina senza subire interruzioni forzate da `break`.

---

### Glossario

*   **Iterazione (Ciclo / Loop):** Struttura algoritmica di controllo che ordina al calcolatore di ripetere l'esecuzione di un dato blocco di istruzioni finché perdurano determinate condizioni logiche o fino all'esaurimento di una sequenza.
*   **Ciclo While:** Costrutto condizionale a controllo pre-iterativo (*pre-test loop*) che valuta l'espressione logica prima di accedere al corpo delle istruzioni, ripetendole finché essa restituisce il valore booleano `True`.
*   **Ciclo For:** Costrutto iterativo orientato alla scansione e all'attraversamento sistematico di collezioni di dati o sequenze numeriche generate da iteratori.
*   **Funzione Range:** Generatore nativo di Python deputato alla produzione in memoria di sequenze ordinate di numeri interi, definito dai parametri di inizio, fine esclusa e passo di incremento.
*   **Loop Infinito (Ciclo Senza Fine):** Condizione anomala di esecuzione in cui un ciclo non riesce mai a soddisfare la propria clausola di terminazione, continuando a girare indefinitamente e occupando in modo improprio le risorse della CPU.
*   **Valore Sentinella:** Costante convenzionale fornita in input per segnalare all'algoritmo la conclusione dell'inserimento dei dati e provocare l'uscita controllata da un ciclo iterativo.
*   **Contatore:** Variabile numerica deputata alla quantificazione progressiva delle iterazioni o degli eventi verificatisi durante l'elaborazione, soggetta a incrementi costanti.
*   **Accumulatore:** Variabile numerica preposta all'aggregazione sequenziale di quantità eterogenee mediante addizioni successive, impiegata per calcolare totali e medie aritmetiche.
*   **Break:** Istruzione di salto che forza la terminazione immediata del ciclo all'interno del quale è collocata, trasferendo il controllo alla prima riga esterna al costrutto.
*   **Continue:** Istruzione di controllo che arresta l'iterazione corrente del ciclo e reindirizza istantaneamente il flusso all'inizio dell'iterazione successiva.
*   **Tabella di Tracciamento (Trace Table):** Metodologia diagnostica manuale consistente nel registrare in forma tabellare l'evoluzione dei valori assunti dalle variabili passo dopo passo durante ciascun giro di ciclo, al fine di verificare la correttezza logica dell'algoritmo.

<button onclick="window.print()" style="padding: 10px 15px; background-color: #dbae1a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  🖨️ Stampa / Salva in PDF
</button>