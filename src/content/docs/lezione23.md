---
title: 2.3 L'Istruzione di Iterazione (Il Ciclo) con Flowgorithm
description: Esercizi di laboratorio per la traduzione di problemi in algoritmi tramite Flowgorithm.
---

### Introduzione

Nello sviluppo di un algoritmo, può capitare frequentemente che alcune operazioni debbano essere eseguite più di una volta, ovvero ripetute in modo del tutto identico. Si ipotizzi, ad esempio, di dover effettuare un conto alla rovescia da 10 a 1, oppure di dover versare ripetutamente dell'acqua in un bicchiere finché la vasca da bagno non è piena. 

Utilizzando esclusivamente le strutture di sequenza e selezione, il programmatore sarebbe costretto a duplicare decine o migliaia di volte i medesimi blocchi, rendendo il diagramma illeggibile e prono ad errori. L'informatica risolve questo problema strutturale attraverso l'**istruzione di iterazione**. La ripetizione di un insieme di istruzioni si chiama iterazione o ciclo (in inglese, *loop*). In questa lezione analizzeremo come il calcolatore gestisce la ripetizione di un gruppo di istruzioni e come implementare correttamente queste logiche all'interno dell'ambiente Flowgorithm.

---

### Sviluppo dell'Argomento

#### 1. Classificazione: Iterazione Definita e Indefinita
Il gruppo di istruzioni che viene ripetuto all'interno della struttura prende il nome formale di "corpo del ciclo". L'istruzione di iterazione è classificata in due grandi categorie, distinte in base alla possibilità di conoscere o meno a priori il numero esatto di ripetizioni del corpo del ciclo:

*   **Iterazione Definita:** Si utilizza quando il numero di ripetizioni è noto a priori, cioè quando il programmatore sa esattamente quante volte le istruzioni devono essere ripetute. In queste iterazioni è sempre presente un numero che indica quante volte deve essere eseguita un'operazione.
    *   *Esempi dal mondo reale:* "Fai 10 giorni di ferie", "Leggi 20 pagine", "Invia 100 SMS alla zia".
*   **Iterazione Indefinita:** Si utilizza quando il ciclo dev'essere ripetuto un numero di volte sconosciuto a priori, e la ripetizione termina solamente quando si verifica una particolare condizione logica.
    *   *Esempi dal mondo reale:* "Mescola la pasta finché è cotta", "Innaffia le piante finché basta", "Fino a quando il serbatoio non è pieno, metti benzina".

Graficamente, lo schema generale di un'istruzione iterativa forma un "anello" in cui è sempre presente un'istruzione di test. Il test controlla se il blocco di istruzioni deve essere ripetuto, oppure se la ripetizione termina e si deve "uscire" dal ciclo per proseguire con il resto del programma.

#### 2. L'Iterazione Indefinita (Il Ciclo "Mentre" / While)
L'istruzione di iterazione indefinita più utilizzata prende il nome di "iterazione precondizionata", detta anche ciclo a condizione iniziale o a controllo di testa. I programmatori chiamano questa iterazione "ciclo while", utilizzando la parola riservata della pseudocodifica inglese. 
In questa struttura, il test viene fatto all'ingresso: esso stabilisce se bisogna entrare nel ramo ed eseguire le istruzioni del ciclo, oppure se si esce proseguendo col programma.

**Esempi pratici di Iterazione Indefinita:**
*   **Accumulo di valori (L'acquisto della moto):** Supponiamo che un programma debba avvisare l'utente quando, sommando vari risparmi inseriti progressivamente, viene raggiunta la cifra necessaria per comprare una moto. Il programma utilizzerà due variabili: `costoMoto` e l'ammontare dei risparmi `risparmi`. L'istruzione di test valuterà la condizione `risparmi < costoMoto`. Finché l'esito è VERO, il programma chiederà un nuovo importo e lo aggiungerà al totale; quando l'esito diventerà FALSO (obiettivo raggiunto), uscirà dal ciclo.
*   **Istruzioni annidate (La Giostra):** All'interno di un ciclo si possono inserire istruzioni di selezione. Ad esempio, per calcolare il riempimento di una giostra, il ciclo può acquisire le persone in ingresso verificando con una condizione (SE/IF) se si tratta di bambini, i quali occupano solo metà posto.
*   **La generazione casuale (Indovina il numero):** Un classico ciclo indefinito è il gioco in cui l'utente deve indovinare un numero segreto. In Flowgorithm è possibile utilizzare la funzione `random(x)` per la generazione di un numero casuale compreso tra 0 e un determinato valore x-1 (il range). Il ciclo continuerà a chiedere tentativi all'utente "mentre" il numero inserito è diverso da quello generato dal sistema.

#### 3. L'Iterazione Definita (Il Ciclo "Per" / For)
L'iterazione definita risulta particolarmente comoda e utilizzata quando conosciamo a priori il numero di volte in cui il ciclo deve essere eseguito. 
Dal punto di vista della codifica, la sintassi si compone di tre parti fondamentali eseguite a ogni ripetizione:
1.  **Inizializzazione:** assegna il valore iniziale al contatore (es. `x = 1`).
2.  **Condizione:** fa ripetere il ciclo fino al limite prefissato (es. `x <= 5`).
3.  **Aggiornamento:** incrementa la variabile di conteggio a ogni ripetizione (es. `x = x + 1`).

Flowgorithm aiuta a realizzare questa istruzione fornendo un blocco dedicato (l'esagono) dotato di una comoda maschera di inserimento per queste tre espressioni logiche.
*   **Esempio matematico (Potenza n-esima):** Per calcolare la potenza di un numero utilizzando solo la moltiplicazione, è necessario moltiplicare la base per sé stessa un numero di volte pari all'esponente inserito. In questo caso, il numero letto in ingresso dall'utente viene utilizzato proprio come estremo finale della condizione di conteggio del ciclo.

#### 4. La Traccia delle Variabili e il Debugging
Nello studio dell'iterazione, visualizzare la traccia del programma è molto importante per ricercare eventuali errori (fase di debugging).
I programmatori utilizzano uno strumento fondamentale chiamato **trace table** (tabella di traccia). È buona norma abituarsi a fare manualmente questa traccia: si crea una tabella riportando in testa alle colonne i nomi delle variabili e si aggiunge una riga con i nuovi valori che queste assumono a ogni loro modifica all'interno dei cicli.
In alternativa manuale, l'ambiente Flowgorithm permette l'esecuzione passo-passo (cliccando sull'icona dedicata), evidenziando il blocco attivo e mostrando in una finestra a lato l'evoluzione e lo stato della memoria RAM man mano che il programma viene eseguito.

---

### Sintesi

*   **Necessità del Ciclo:** L'iterazione permette di eseguire ripetutamente un gruppo di istruzioni in modo identico, creando una struttura logica ad "anello" governata da un test.
*   **Categorie Logiche:** Le iterazioni si dividono in *definite* (il numero di ripetizioni è un dato noto a priori, es. ciclo For) e *indefinite* (il ciclo si ripete per un numero ignoto di volte fino al soddisfacimento di una condizione, es. ciclo While).
*   **Il Ciclo Indefinito (While):** Essendo precondizionato, valuta il test prima di accedere al corpo del ciclo. Può ospitare al suo interno complesse istruzioni annidate (come le selezioni) o appoggiarsi a funzioni matematiche come la generazione di numeri casuali.
*   **Il Ciclo Definito (For):** Semplifica la stesura dell'algoritmo raggruppando in un'unica maschera le tre fasi obbligatorie del conteggio: inizializzazione, condizione limite e aggiornamento del contatore.
*   **Metodologia di Debugging:** Il tracciamento dei valori tramite la *trace table* (manuale) o la finestra delle variabili (su Flowgorithm) risulta un procedimento ineludibile per scovare le criticità logiche all'interno delle iterazioni.

---

### Glossario

*   **Iterazione (Ciclo/Loop):** La ripetizione controllata di un insieme di istruzioni all'interno di un algoritmo.
*   **Corpo del Ciclo:** Il gruppo specifico di istruzioni e procedure che vengono ripetute all'interno dell'istruzione di iterazione.
*   **Iterazione Definita:** Struttura ciclica impiegata quando il numero esatto di ripetizioni è noto a priori dal programmatore.
*   **Iterazione Indefinita:** Struttura ciclica impiegata quando il numero di iterazioni è sconosciuto e termina solo al verificarsi di una determinata situazione logica.
*   **Ciclo Mentre (While):** Istruzione di iterazione indefinita precondizionata (a controllo di testa) in cui la condizione è testata al momento dell'ingresso nel ramo ripetitivo.
*   **Trace Table (Tabella di traccia):** Strumento fondamentale per il debugging che consiste nel riportare in una tabella l'evoluzione dei valori assunti dalle variabili man mano che le istruzioni vengono eseguite.
*   **Range:** In statistica e informatica, indica l'intervallo di valori racchiuso tra un limite massimo e un limite minimo all'interno del quale una variabile o un numero casuale può assumere un dato.