---
title: 2.5 I Vettori (Array) con Flowgorithm
description: Rappresentazione, gestione e manipolazione di collezioni ordinate di dati omogenei tramite indici e cicli iterativi.
---

### Introduzione

Nelle lezioni precedenti abbiamo compreso come un calcolatore memorizza ed elabora le informazioni elementari: abbiamo utilizzato le variabili ordinarie, immaginandole come singoli cassetti etichettati all'interno della memoria RAM, ciascuno destinato a contenere un solo dato alla volta (un numero intero, una misura reale, una parola o un valore booleano).

Questo modello a variabili isolate, definito in informatica a **variabili scalari**, è perfetto quando dobbiamo gestire problemi semplici come calcolare l'area di un rettangolo o verificare la maggiore età di un singolo individuo. Ma cosa accade quando la realtà si fa più articolata? Immaginate di dover progettare un algoritmo per il registro elettronico scolastico: dovete memorizzare i voti dei 30 studenti di una classe, calcolarne la media aritmetica, individuare il voto più alto e stampare l'elenco dei voti sopra la sufficienza.

Seguendo l'approccio visto finora, sareste costretti a dichiarare trenta variabili differenti: `voto1`, `voto2`, `voto3`, fino a `voto30`. Di conseguenza, dovreste inserire nel vostro diagramma trenta blocchi di lettura distinti e un blocco di calcolo chilometrico. Se la scuola vi chiedesse poi di estendere il programma a tutti i 900 studenti dell'istituto, il vostro algoritmo diventerebbe ingestibile, portando al collasso la leggibilità del progetto.

Per superare questo vicolo cieco, l'informatica introduce le **strutture dati**. In questa lezione esploreremo la struttura dati fondamentale della programmazione: il **Vettore** (noto universalmente con il termine inglese **Array**). Scopriremo come un unico identificatore possa organizzare centinaia o migliaia di valori omogenei e come l'abbinamento tra array e cicli iterativi rappresenti uno dei meccanismi più potenti dell'ingegneria del software.

---

### Sviluppo dell'Argomento

#### 1. Dal Cassetto Isolato al Casellario Postale: Cos'è un Vettore
Un **vettore** (o array monodimensionale) è una collezione finita e ordinata di elementi dello stesso tipo che condividono tutti lo stesso identico nome di variabile.

Per visualizzare mentalmente questa differenza, abbandoniamo l'idea dei cassetti sparsi nell'armadio della RAM e immaginiamo un **casellario postale** o una stecca di cassette delle lettere condominiali:
*   L'intero casellario ha un unico nome generale (ad esempio `voti`).
*   Tutti gli scomparti interni sono identici e possono accogliere solo lo stesso tipo di informazione (ad esempio, solo numeri reali). Questa proprietà si chiama **omogeneità dei dati**.
*   Gli scomparti sono posizionati uno di seguito all'altro, in modo consecutivo.

Come fa il calcolatore a distinguere un singolo scomparto dagli altri, se il nome del vettore è unico? Attraverso un numero progressivo chiamato **Indice**. L'indice è la coordinata che identifica in modo univoco la posizione di un dato all'interno della struttura.

**La regola dello Zero-Based Indexing:**
Nel mondo informatico e all'interno di Flowgorithm, le posizioni di un vettore non iniziano a contare da 1, ma rigorosamente da **0**.
Se dichiariamo un vettore composto da 5 elementi, i suoi scomparti saranno numerati così:
*   Primo elemento: `voti[0]`
*   Secondo elemento: `voti[1]`
*   Terzo elemento: `voti[2]`
*   Quarto elemento: `voti[3]`
*   Quinto (e ultimo) elemento: `voti[4]`

In generale, se un vettore ha una dimensione pari a N, i suoi indici validi spazieranno sempre da 0 a N - 1. Tentare di accedere a `voti[5]` su un array di 5 elementi provocherà un arresto anomalo immediato del programma.

#### 2. La Dichiarazione dell'Array in Flowgorithm
Mentre nei linguaggi dinamici moderni (come Python) le collezioni di dati possono espandersi o rimpicciolirsi a piacimento, nei linguaggi strutturati e negli ambienti didattici come Flowgorithm gli array sono **statici**. Ciò significa che la quantità di memoria occupata deve essere stabilita all'inizio del programma e non può essere modificata durante l'esecuzione.

Per dichiarare un vettore in Flowgorithm:
1. Si inserisce nel diagramma il tradizionale blocco rettangolare di **Dichiarazione** (colore arancione chiaro).
2. Si specifica il nome della variabile (ad esempio `numeri`).
3. Si seleziona il **Tipo di Dato** (es. Intero, Reale, Stringa, Booleano).
4. Si spunta la casella denominata **Array?**.
5. Nella casella di testo **Dimensione Array**, si specifica il numero di elementi complessivi (ad esempio `5`).

Da questo istante, la memoria RAM riserva una striscia contigua di cinque celle di memoria, pronta a essere manipolata.

#### 3. Il Matrimonio Perfetto: Vettori e Ciclo FOR
Per quale ragione gli array hanno rivoluzionato la programmazione? Perché la loro struttura a indici numerici si sposa in maniera simmetrica con il funzionamento dei cicli a conteggio (il ciclo **PER / FOR**).

La variabile contatore del ciclo `For` (solitamente indicata con la lettera `i`), che aumenta automaticamente di 1 a ogni iterazione, può essere impiegata non solo per contare i passaggi, ma come **indice dinamico** per puntare allo scomparto del vettore: `vettore[i]`.

Con sole tre istruzioni grafiche all'interno di un ciclo, possiamo ordinare al computer di compiere operazioni su insiemi di dati imponenti. Se vogliamo azzerare o acquisire da tastiera mille valori, basterà impostare un ciclo `For` con `i` che varia da 0 a 999 e inserire all'interno l'operazione su `vettore[i]`.

#### 4. Esempi Pratici e Schemi Risolutivi

##### Esempio 1: Caricamento e Stampa di un Vettore
Supponiamo di voler acquisire da tastiera i voti di 5 verifiche scritte e, successivamente, visualizzarli sullo schermo nell'ordine inverso rispetto a come sono stati inseriti.

*Strategia risolutiva:*
1. Dichiariamo il vettore `voti` di tipo Reale, con dimensione 5. Dichiariamo una variabile intera `i`.
2. **Fase di Caricamento (Input):** Costruiamo un primo ciclo `For` con `i` che va da 0 a 4 (passo 1). All'interno del ciclo inseriamo un blocco di lettura: `Leggi voti[i]`. A ogni giro, il dato digitato dall'utente andrà a riempire ordinatamente la cella corrispondente.
3. **Fase di Stampa Inversa (Output):** Costruiamo un secondo ciclo `For`. Questa volta impostiamo la variabile iniziale a 4, la variabile finale a 0 e selezioniamo l'opzione di decremento (passo -1). All'interno, inseriamo un blocco di scrittura: `Scrivi voti[i]`.

Questo schema evidenzia come il vettore conservi i dati in memoria: a differenza delle variabili singole, dove ogni nuovo inserimento distrugge il precedente, nell'array tutti i valori rimangono disponibili per successive elaborazioni.

##### Esempio 2: Calcolo della Somma e della Media Aritmetica
Vogliamo calcolare la media aritmetica di una serie di temperature registrate durante una settimana (7 rilevazioni).

*Strategia risolutiva:*
1. Dichiariamo il vettore `temperature` di dimensione 7 (tipo Reale), l'indice intero `i`, la variabile reale `somma` e la variabile reale `media`.
2. Inizializziamo l'accumulatore prima dell'ingresso nel ciclo: `somma = 0`.
3. Con un ciclo `For` (da `i = 0` a `6`), leggiamo ogni valore: `Leggi temperature[i]`. Subito sotto, accumuliamo il valore appena acquisito: `somma = somma + temperature[i]`.
4. All'uscita dal ciclo, quando tutte le 7 temperature sono state sommate, calcoliamo la media fuori dal loop: `media = somma / 7`.
5. Visualizziamo il risultato finale con un blocco di Output: `Scrivi "La temperatura media rilevata è: " & media`.

##### Esempio 3: Ricerca del Valore Massimo in un Vettore
Uno dei compiti classici dell'informatica è scandire una collezione di dati per isolare l'elemento con valore maggiore (ad esempio, individuare il record sportivo o il prezzo più elevato).

*Strategia risolutiva (L'algoritmo del podio):*
1. Si acquisisce l'intero vettore di numeri.
2. Prima di procedere con i controlli, ipotizziamo arbitrariamente che il primo elemento dell'array sia il maggiore in assoluto. Creiamo una variabile `massimo` e le assegniamo il primo scomparto: `massimo = numeri[0]`. Conserviamo anche la sua posizione: `posizioneMax = 0`.
3. Avviamo un ciclo `For` che scandisce il vettore partendo dal secondo elemento fino all'ultimo (da `i = 1` a `N - 1`).
4. All'interno del ciclo inseriamo un blocco di selezione semplice (Rombo): `numeri[i] > massimo`.
   *   Se la condizione è **VERA**, significa che abbiamo trovato un numero ancora più grande. Aggiorniamo le nostre variabili: `massimo = numeri[i]` e `posizioneMax = i`.
   *   Se la condizione è **FALSA**, non eseguiamo alcuna operazione e proseguiamo al passo successivo.
5. Terminato il ciclo, la variabile `massimo` conterrà con certezza il numero più elevato dell'intera collezione e `posizioneMax` indicherà la sua cella.

#### 5. Gestione degli Errori: L'Anomalia "Index Out of Bounds"
Nello studio dei vettori, l'errore logico più comune prende il nome di **Index Out of Bounds** (Indice Fuori dai Limiti).

Se dichiarate un vettore di dimensione 10 e provate a eseguire l'istruzione `vettore[10] = 50`, Flowgorithm interromperà bruscamente l'esecuzione segnalando un errore critico. Perché accade questo? Perché gli indici validi per una dimensione pari a 10 vanno unicamente da `0` a `9`.

Chiedere al processore di accedere alla cella 10 significa pretendere di leggere o scrivere in una zona di memoria RAM che non è stata assegnata a quella struttura dati. Nei linguaggi a basso livello come il C o il C++, questa disattenzione può provocare vulnerabilità di sicurezza severe (i cosiddetti *Buffer Overflow*); in Flowgorithm, il motore di interpretazione blocca il programma proteggendo il sistema e indicando con precisione il blocco del diagramma incriminato.

---

### Sintesi

*   **Dalle Variabili Scalari alle Strutture Dati:** Le variabili tradizionali contengono un solo valore alla volta; i vettori (array) permettono di aggregare sotto un unico identificatore un gruppo di informazioni affini, superando la proliferazione caotica di variabili singole.
*   **Omogeneità e Dimensione Statica:** Gli array impongono che tutti gli elementi ospitati appartengano al medesimo tipo di dato (tutti interi, tutti reali, ecc.) e richiedono la definizione preventiva della loro capienza massima al momento della dichiarazione.
*   **L'Indice e la Convenzione Zero-Based:** Ciascun elemento è accessibile istantaneamente tramite un indice racchiuso tra parentesi quadre. La numerazione parte obbligatoriamente da zero: per una dimensione pari a N, il primo scomparto risiede all'indice 0 e l'ultimo all'indice N - 1.
*   **Integrazione Algoritmica con il Ciclo FOR:** La scansione, l'acquisizione, la modifica e la stampa dei vettori si realizzano in modo compatto utilizzando la variabile contatore del ciclo `For` come indice dinamico della struttura.
*   **Sicurezza della Memoria:** Il tentativo di referenziare una posizione non allocata (indice negativo o maggiore/uguale alla dimensione dichiarata) produce l'errore bloccante di *Index Out of Bounds*, violazione che ogni programmatore deve prevenire con un accurato controllo dei limiti del ciclo.

---

### Glossario

*   **Array (Vettore):** Struttura dati lineare composta da una sequenza contigua di celle di memoria di dimensione fissa, destinate a contenere elementi tra loro omogenei.
*   **Variabile Scalare:** Variabile semplice deputata alla conservazione di un singolo dato atomico per volta, in contrapposizione alle strutture dati composite.
*   **Indice:** Valore numerico intero utilizzato per identificare e indirizzare in modo diretto la posizione di un elemento all'interno di un vettore.
*   **Zero-Based Indexing:** Convenzione informatica secondo la quale il primo elemento di una struttura ordinata viene indicizzato con il valore numerico 0.
*   **Omogeneità dei Dati:** Vincolo architetturale delle strutture ad array secondo cui tutte le componenti devono appartenere al medesimo tipo di dato.
*   **Scansione (o Traversamento):** Operazione algoritmica che consiste nel visitare sistematicamente, una dopo l'altra e mediante una struttura iterativa, tutte le celle di un vettore.
*   **Index Out of Bounds:** Condizione di errore fatale che si manifesta quando un'istruzione tenta di accedere a una cella dell'array utilizzando un valore di indice esterno all'intervallo valido di dichiarazione.
*   **Dimensione (Size):** Il numero complessivo di elementi che un vettore è strutturato per contenere, fissato in fase di allocazione della memoria.

<button onclick="window.print()" style="padding: 10px 15px; background-color: #dbae1a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  🖨️ Stampa / Salva in PDF
</button>