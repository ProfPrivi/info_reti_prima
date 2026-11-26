---
title: 2.3 L'Istruzione di Iterazione (Il Ciclo) con Flowgorithm
description: Cicli definiti e indefiniti, strutture Mentre (While), Fai (Do-While) e Per (For), contatori, accumulatori e prevenzione dei loop infiniti in Flowgorithm.
---

### Introduzione

Nella lezione precedente abbiamo fatto compiere ai nostri algoritmi un primo grande salto di qualità: grazie all'**Istruzione di Selezione** (il rombo), il nostro "treno" logico non è più costretto a viaggiare su un unico binario dritto, ma può imboccare scambi ferroviari e prendere decisioni in base ai dati ricevuti.

Tuttavia, manca ancora il terzo e decisivo pilastro della programmazione strutturata. Immaginate di dover progettare un algoritmo in Flowgorithm per stampare i numeri da 1 a 100, oppure per sommare i prezzi di tutti i prodotti passati alla cassa di un supermercato. Con i soli blocchi di sequenza e selezione dovreste trascinare a mano cento blocchi di Output identici — e nel caso della cassa del supermercato sarebbe addirittura impossibile, perché non sapete in anticipo quanti articoli ha nel carrello il cliente!

Il vero superpotere di un calcolatore non è fare calcoli difficili una volta sola, ma ripetere milioni di volte la stessa operazione in una frazione di secondo senza mai stancarsi né distrarsi. In informatica, la struttura di controllo che permette di ripiegare il flusso su sé stesso per ripetere un gruppo di istruzioni prende il nome di **Iterazione** (o **Ciclo**, in inglese *Loop*). In questa lezione impareremo a progettare i tre tipi di cicli di **Flowgorithm**, a governarli con **contatori** e **accumulatori** e a disinnescare la trappola più insidiosa per chi programma: il ciclo infinito.

---

### Sviluppo dell'Argomento

#### 1. Iterazione Definita e Iterazione Indefinita
Prima di inserire un blocco di ciclo nel diagramma di flusso, il programmatore deve porsi una domanda fondamentale: **so già in anticipo quante volte dovrò ripetere le istruzioni?**

In base alla risposta, i problemi iterativi si dividono in due grandi famiglie:

*   **Iterazione Definita (a conteggio):** Il numero di ripetizioni è noto *prima* di iniziare il ciclo (può essere un numero fisso, come i 7 giorni della settimana, oppure un numero `N` appena letto in input dall'utente). Esempio: *"Leggi 10 temperature e calcola la media"*.
*   **Iterazione Indefinita (condizionale):** Non è possibile sapere in anticipo quanti giri saranno necessari; la ripetizione prosegue *finché* una certa condizione logica rimane vera (oppure fino a quando si verifica un evento di arresto). Esempio: *"Chiedi la password all'utente finché non digita quella corretta"*.

#### 2. I Tre Cicli in Flowgorithm
Per gestire entrambe le situazioni, Flowgorithm mette a disposizione tre blocchi di iterazione, ciascuno caratterizzato da una precisa forma geometrica e da un diverso momento di controllo della condizione.

| Ciclo in Flowgorithm | Nome Inglese | Momento del Controllo | Esecuzioni Minime | Quando Usarlo |
| :--- | :--- | :--- | :---: | :--- |
| **Mentre** | `While` | **Pre-condizionale** (controlla *prima* di entrare) | **0** | Iterazione indefinita: il corpo potrebbe non dover essere eseguito nemmeno una volta. |
| **Fai** | `Do-While` | **Post-condizionale** (controlla *alla fine* del giro) | **1** | Validazione dell'input e menu interattivi: l'azione va fatta almeno una volta prima di decidere se ripeterla. |
| **Per** | `For` | **A conteggio** (gestito automaticamente dall'esagono) | **0** | Iterazione definita: si conosce inizio, fine e passo di avanzamento (es. da 1 a 10). |

##### A. Il Ciclo `Mentre` (`While` — Pre-condizionale)
Nel ciclo **Mentre**, la condizione booleana viene valutata **all'ingresso**.
*   Se la condizione è **VERA**, il flusso entra nel ramo del ciclo, esegue tutte le istruzioni interne e poi risale automaticamente al test per ricontrollare la condizione.
*   Se la condizione è **FALSA**, il ciclo termina immediatamente e il flusso prosegue verso i blocchi successivi.

*Attenzione:* se la condizione è già Falsa al primissimo controllo, il computer salta completamente il corpo del ciclo (**zero esecuzioni**).

##### B. Il Ciclo `Fai` (`Do-While` — Post-condizionale)
Nel ciclo **Fai**, il computer entra **sempre** nel corpo del ciclo, esegue le istruzioni e solo in fondo incontra il rombo di controllo.
*   Se la condizione è **VERA**, risale in cima e ripete il giro.
*   Se la condizione è **FALSA**, esce dal ciclo.

Questo garantisce che le istruzioni interne vengano eseguite **almeno una volta**. È la scelta naturale quando dobbiamo chiedere un dato all'utente e verificare subito dopo se il dato inserito è accettabile.

##### C. Il Ciclo `Per` (`For` — A Conteggio)
Quando dobbiamo ripetere un'azione un numero prefissato di volte, usare un ciclo `Mentre` ci costringerebbe a inizializzare e incrementare manualmente una variabile contatore. Flowgorithm semplifica questo schema con il blocco esagonale **Per** (`For`), in cui è sufficiente compilare quattro campi:
1.  **Variabile:** il nome del contatore (per convenzione spesso si usa `i`, `j` o `conta`), che deve essere stato **dichiarato in precedenza** come Intero.
2.  **Valore iniziale:** il numero di partenza (es. `1`).
3.  **Valore finale:** il numero di arrivo, **compreso** nell'ultimo giro (es. `10`).
4.  **Direzione e Passo (Step):** indica se aumentare (*Crescente*) o diminuire (*Decrescente*) e di quanto a ogni giro (di default `1`, ma può essere `2` per saltare di due in due, oppure decrescente per un conto alla rovescia).

#### 3. Contatori, Accumulatori e Valori Sentinella
Un ciclo da solo ripete istruzioni, ma per produrre risultati utili ha quasi sempre bisogno di tre schemi fondamentali di gestione delle variabili:

1.  **Il Contatore:** È una variabile intera che tiene traccia di quante volte si verifica un evento (es. quanti voti sufficienti sono stati inseriti).
    *   Va **inizializzato a `0` prima del ciclo**: `conta = 0`.
    *   All'interno del ciclo viene incrementato di un valore costante: `conta = conta + 1`.
2.  **L'Accumulatore:** È una variabile che "raccoglie" progressivamente valori diversi a ogni iterazione (es. il totale dello scontrino).
    *   Per una **sommatoria**, va inizializzato a `0` (elemento neutro della somma): `somma = 0`, poi nel ciclo `somma = somma + valore`.
    *   Per una **produttoria** (come il calcolo del fattoriale o della potenza), va inizializzato a `1` (elemento neutro della moltiplicazione): `prodotto = 1`, poi nel ciclo `prodotto = prodotto * valore`. Se lo inizializzaste a `0`, il risultato resterebbe per sempre zero!
3.  **Il Valore Sentinella (o Tappo):** Nei cicli indefiniti, è un valore speciale concordato con l'utente che segnala la fine dei dati (ad esempio `0` per terminare l'inserimento di prezzi positivi, oppure `-1` per terminare l'inserimento di età). La condizione del ciclo controlla che il dato inserito sia diverso dalla sentinella (`prezzo != 0`).

#### 4. La Trappola del Ciclo Infinito (*Infinite Loop*) e il Tracciamento
L'errore più celebre legato all'iterazione è il **Ciclo Infinito**: una condizione logica che rimane per sempre Vera, intrappolando il programma in una ripetizione senza fine fino all'interruzione forzata da parte dell'utente.

Le due cause più frequenti in Flowgorithm sono:
*   **Dimenticare l'aggiornamento:** Nel ciclo `Mentre`, se controllate `conta <= 5` ma vi dimenticate di scrivere `conta = conta + 1` dentro il ciclo, `conta` resterà sempre `1` e il programma non uscirà mai.
*   **Condizione sbagliata:** Scrivere `While numero != 0` partendo da `numero = 1` e aggiungendo `+ 2` a ogni giro: i numeri saranno `1, 3, 5, 7...`, saltando lo zero per sempre.

Per verificare la correttezza di un ciclo prima ancora di eseguirlo (o durante il debugging), si costruisce una **Tabella di Tracciamento (*Trace Table*)**: una griglia su carta in cui ogni colonna è una variabile e ogni riga fotografa il valore assunto dalle variabili al termine di ciascuna iterazione. In Flowgorithm, la *Finestra di visualizzazione delle Variabili* abbinata all'esecuzione Passo-Passo compie automaticamente questa stessa operazione in tempo reale.

---

### Esempi Pratici Guidati

#### Esempio 1: Ciclo `Per` (`For`) — Media di N Voti
*Obiettivo:* Chiedere all'utente quanti voti desidera inserire (`N`), leggerli uno per uno e calcolarne la media aritmetica.

*Analisi delle Variabili:*
*   `N`, `i` (Intero) — numero di voti e contatore del ciclo.
*   `voto`, `somma`, `media` (Reale) — dato corrente, accumulatore e risultato finale.

*Struttura dell'Algoritmo (Pseudocodifica fedele a Flowgorithm):*
```text
Inizio
  Dichiara N, i come Intero
  Dichiara voto, somma, media come Reale
  somma = 0
  Scrivi "Quanti voti vuoi inserire?"
  Leggi N
  Per i = 1 a N (passo 1, Crescente)
    Scrivi "Inserisci il voto numero " & i
    Leggi voto
    somma = somma + voto
  Fine Per
  media = somma / N
  Scrivi "La media finale è: " & media
Fine
```
*Nota didattica:* L'istruzione `somma = 0` sta rigorosamente **prima** del ciclo `Per` (altrimenti azzererebbe la somma a ogni giro), mentre il calcolo `media = somma / N` sta **dopo** la fine del ciclo (quando la somma è completa).

#### Esempio 2: Ciclo `Mentre` (`While`) — Cassa del Supermercato con Valore Sentinella
*Obiettivo:* Sommare i prezzi di una spesa di lunghezza sconosciuta. L'inserimento termina quando il cassiere digita `0`. Alla fine, mostrare il totale da pagare e il numero di articoli acquistati.

*Struttura dell'Algoritmo:*
```text
Inizio
  Dichiara prezzo, totale come Reale
  Dichiara articoli come Intero
  totale = 0
  articoli = 0
  Scrivi "Inserisci il prezzo del primo articolo (0 per terminare):"
  Leggi prezzo
  Mentre prezzo != 0
    totale = totale + prezzo
    articoli = articoli + 1
    Scrivi "Inserisci il prezzo del prossimo articolo (0 per terminare):"
    Leggi prezzo
  Fine Mentre
  Scrivi "Articoli acquistati: " & articoli
  Scrivi "Totale da pagare: " & totale & " euro"
Fine
```

*Tabella di Tracciamento (supponendo gli input `12.5`, `7.5`, `0`):*

| Momento | `prezzo` | Condizione `prezzo != 0` | `totale` | `articoli` |
| :--- | :---: | :---: | :---: | :---: |
| Prima del ciclo (1ª lettura) | `12.5` | **VERA** (entra) | `0` | `0` |
| Fine 1ª iterazione (2ª lettura) | `7.5` | **VERA** (continua) | `12.5` | `1` |
| Fine 2ª iterazione (3ª lettura) | `0` | **FALSA** (esce) | `20.0` | `2` |

*Perché leggiamo `prezzo` una volta prima del ciclo e di nuovo alla fine del ciclo?* Questa tecnica si chiama **lettura di innesco (*priming read*)**: permette di controllare subito se il primo valore è già `0` (evitando di contare lo `0` come articolo acquistato!) e garantisce che alla fine del giro la variabile di controllo venga aggiornata per evitare un ciclo infinito.

#### Esempio 3: Ciclo `Fai` (`Do-While`) — Validazione Protetta dell'Input
*Obiettivo:* Leggere un voto scolastico intero che deve essere obbligatoriamente compreso tra `1` e `10`. Se l'utente sbaglia (es. digita `15` o `-2`), il programma deve segnalare l'errore e richiedere il dato finché non è valido.

*Struttura dell'Algoritmo:*
```text
Inizio
  Dichiara voto come Intero
  Fai
    Scrivi "Inserisci un voto valido (da 1 a 10):"
    Leggi voto
    Se voto < 1 OR voto > 10 allora
      Scrivi "Errore! Il voto deve essere compreso tra 1 e 10."
    Fine Se
  Mentre voto < 1 OR voto > 10
  Scrivi "Voto registrato correttamente: " & voto
Fine
```
*Perché qui il ciclo `Fai` è perfetto?* Perché dobbiamo chiedere il voto **almeno una volta** prima di poter verificare se è fuori intervallo. Finché il voto è errato (`voto < 1 OR voto > 10` è Vero), il ciclo intrappola l'utente e gli ripropone la richiesta; appena il voto è valido, la condizione diventa Falsa e il programma prosegue in sicurezza.

---

:::tip[Idea chiave]
Scegli il ciclo in 5 secondi: sai già quante volte ripetere → **`Per` (`For`)**; devi farlo almeno una volta (es. validare un input) → **`Fai` (`Do-While`)**; potresti doverlo fare anche zero volte → **`Mentre` (`While`)**.
:::

:::caution[Errore tipico in verifica]
Dimenticare di inizializzare l'accumulatore prima del ciclo (`somma = 0` per le somme, `prodotto = 1` per i prodotti) oppure inizializzarlo **dentro** il ciclo (azzerandolo a ogni giro!).
:::

### Mettiti alla prova (Domande Flash)

<details>
  <summary><strong>1. Domanda rapida:</strong> Quante volte al minimo viene eseguito il corpo di un ciclo <code>Mentre</code>? E di un ciclo <code>Fai</code>?</summary>
  <p>Il ciclo <code>Mentre</code> (pre-condizionale) almeno <strong>0 volte</strong>; il ciclo <code>Fai</code> (post-condizionale) almeno <strong>1 volta</strong>.</p>
</details>

<details>
  <summary><strong>2. Trova l'errore:</strong> Voglio calcolare il prodotto dei numeri da 1 a 5 e scrivo <code>prodotto = 0</code> prima del ciclo <code>Per</code>. Cosa stampa alla fine?</summary>
  <p>Stampa sempre <strong><code>0</code></strong>! Per una produttoria l'accumulatore va inizializzato a <code>1</code> (elemento neutro della moltiplicazione).</p>
</details>

<details>
  <summary><strong>3. Domanda rapida:</strong> Perché nella lettura con sentinella si usa spesso una lettura di innesco prima del ciclo <code>Mentre</code>?</summary>
  <p>Per evitare di elaborare o conteggiare il valore sentinella stesso (es. lo <code>0</code> di uscita) nel caso in cui l'utente termini subito l'inserimento.</p>
</details>

---

### Sintesi

*   **Il Potere dell'Iterazione:** I cicli permettono di eseguire ripetutamente un blocco di istruzioni senza duplicare il codice, rendendo gli algoritmi compatti e capaci di gestire qualsiasi quantità di dati.
*   **Definito vs Indefinito:** Quando il numero di ripetizioni è noto prima di partire si usa il ciclo **Per** (`For`); quando la durata dipende da una condizione dinamica si usano **Mentre** (`While`) o **Fai** (`Do-While`).
*   **Pre-condizionale vs Post-condizionale:** Il ciclo `Mentre` testa la condizione all'ingresso (0 o più giri); il ciclo `Fai` esegue prima il corpo e controlla in uscita (almeno 1 giro, ideale per validare l'input).
*   **Contatori e Accumulatori:** Vanno sempre inizializzati *prima* dell'ingresso nel ciclo (`0` per contatori e somme, `1` per i prodotti) e aggiornati *all'interno* del ciclo.
*   **Prevenzione dei Loop Infiniti:** Ogni ciclo indefinito deve contenere almeno un'istruzione capace di modificare la condizione di controllo verso lo stato Falso; la *Tabella di Tracciamento* e l'esecuzione passo-passo permettono di verificarlo con certezza.

---

### Glossario

*   **Iterazione (Ciclo o Loop):** Struttura di controllo fondamentale che consente di ripetere l'esecuzione di una sequenza di istruzioni finché permane valida una determinata condizione logica.
*   **Iterazione Definita:** Ripetizione di cui è noto a priori il numero esatto di giri da compiere, tipicamente implementata con il ciclo `Per` (`For`).
*   **Iterazione Indefinita:** Ripetizione il cui termine non è fissato numericamente in partenza, ma dipende dal verificarsi di una condizione durante l'esecuzione (`Mentre` o `Fai`).
*   **Ciclo Pre-condizionale (`Mentre` / `While`):** Ciclo che valuta la condizione di permanenza prima di eseguire il corpo; se la condizione è inizialmente falsa, il corpo non viene mai eseguito.
*   **Ciclo Post-condizionale (`Fai` / `Do-While`):** Ciclo che esegue il proprio corpo prima di valutare la condizione, garantendo almeno un'iterazione completa.
*   **Ciclo a Conteggio (`Per` / `For`):** Costrutto iterativo che automatizza inizializzazione, controllo del limite e incremento/decremento di una variabile indice.
*   **Contatore:** Variabile intera utilizzata per conteggiare il numero di ripetizioni o di eventi verificatisi, incrementata di un passo fisso (solitamente `+1`).
*   **Accumulatore:** Variabile che totalizza progressivamente valori variabili nel corso delle iterazioni (es. somma totale di una sequenza di numeri).
*   **Valore Sentinella (Tappo):** Dato convenzionale inserito dall'utente (es. `0` o `-1`) per segnalare a un ciclo indefinito che la sequenza di input è terminata.
*   **Loop Infinito (Ciclo Infinito):** Errore logico in cui la condizione di un ciclo rimane perennemente Vera, impedendo la terminazione dell'algoritmo.
*   **Tabella di Tracciamento (*Trace Table*):** Schema tabellare compilato manualmente per simulare l'esecuzione di un algoritmo e monitorare l'evoluzione delle variabili a ogni iterazione.
