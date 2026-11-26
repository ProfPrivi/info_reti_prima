---
title: 2 Ripasso Generale (Moduli 2.1 - 2.7)
description: Test di autovalutazione a risposte aperte su pensiero computazionale, Flowgorithm, iterazione, vettori, sottoprogrammi e passaggio al codice testuale.
---

### Introduzione

Complimenti! Avete completato il secondo grande blocco del corso: **Algoritmi & Coding**. Siete partiti dal significato profondo del *Pensiero Computazionale*, avete costruito diagrammi di flusso con decisioni, cicli, vettori e sottoprogrammi in Flowgorithm, fino ad arrivare sulla soglia della programmazione testuale in Python.

Prima di tuffarvi definitivamente nel codice Python dell'Unità 3, fermatevi a consolidare i concetti fondamentali. Qui sotto trovate **30 domande a risposta aperta** divise per argomento: provate a rispondere a voce alta o sul quaderno, poi aprite **"Mostra la risposta"** per verificare la vostra preparazione in vista della verifica. Buono studio!

---

### Sviluppo dell'Argomento: Domande di Ripasso

#### Sezione 1: Pensiero Computazionale e Algoritmi (Modulo 2.1)

**1. Che cos'è il Pensiero Computazionale?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È la capacità mentale di analizzare un problema, scomporlo e formulare una soluzione in modo così logico, preciso e strutturato da poter essere eseguita automaticamente da un esecutore (anche privo di intelligenza, come un computer).</p>
</details>
<br/>

**2. Che cosa significa fare "Astrazione" quando si crea un Modello di un problema?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Significa eliminare i dettagli superflui o irrilevanti della realtà per concentrarsi solo sugli elementi essenziali al calcolo (es. la mappa della metropolitana rimuove curve e distanze reali per mostrare solo fermate e linee).</p>
</details>
<br/>

**3. Perché una ricetta di cucina scritta per umani non è un buon algoritmo per un computer?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché il linguaggio umano contiene istruzioni ambigue (es. "un pizzico di sale", "quanto basta") che richiedono intuito. Un computer è un esecutore rigido e letterale: ha bisogno di comandi univoci e privi di ambiguità.</p>
</details>
<br/>

**4. Quali sono le quattro proprietà fondamentali che deve possedere un algoritmo?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>1) <strong>Finitezza</strong> (numero finito di passi e tempo finito); 2) <strong>Non ambiguità</strong> (ogni istruzione ha una sola interpretazione); 3) <strong>Determinismo</strong> (a parità di input produce sempre lo stesso output); 4) <strong>Generalità</strong> (risolve una classe di problemi, non un solo caso).</p>
</details>
<br/>

**5. Che differenza c'è tra un Algoritmo e un Programma (codice sorgente)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>L'algoritmo è il procedimento logico astratto, indipendente dal linguaggio di programmazione. Il programma è la traduzione concreta di quell'algoritmo in un linguaggio specifico (come Python, C++ o Java) comprensibile al calcolatore.</p>
</details>
<br/>

#### Sezione 2: Flowgorithm, Variabili e Selezione (Modulo 2.2)

**6. Quali sono i quattro blocchi principali dei diagrammi di flusso e cosa rappresenta ciascuno?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>1) <strong>Ovale</strong>: Inizio e Fine; 2) <strong>Parallelogramma</strong>: Input (Lettura) e Output (Scrittura); 3) <strong>Rettangolo</strong>: Elaborazione/Calcolo e Dichiarazione; 4) <strong>Rombo</strong>: Decisione condizionale (test booleano Vero/Falso).</p>
</details>
<br/>

**7. Che cos'è una variabile e qual è la differenza rispetto a una costante?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Una variabile è un'area riservata nella memoria RAM, etichettata con un identificatore, il cui valore può cambiare durante l'esecuzione. Una costante è invece un contenitore il cui valore resta fisso e immutabile per tutto il programma.</p>
</details>
<br/>

**8. Quali sono i quattro tipi di dato fondamentali in Flowgorithm?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p><strong>Intero (Integer)</strong> per numeri senza virgola, <strong>Reale (Real)</strong> per numeri con la virgola decimale, <strong>Stringa (String)</strong> per il testo tra virgolette e <strong>Booleano (Boolean)</strong> per i soli valori Vero o Falso.</p>
</details>
<br/>

**9. Qual è la differenza tra selezione semplice e selezione doppia?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>La selezione doppia (<em>se / allora / altrimenti</em>) prevede istruzioni sia nel ramo Vero sia nel ramo Falso. La selezione semplice esegue istruzioni solo se la condizione è Vera, lasciando vuoto il ramo Falso.</p>
</details>
<br/>

**10. A cosa serve l'esecuzione Passo-Passo (Step-by-Step) nel Debugging?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Permette di rallentare l'esecuzione eseguendo un blocco alla volta, osservando quale ramo viene scelto e controllando in tempo reale come cambiano i valori delle variabili in RAM per scovare errori logici (bug).</p>
</details>
<br/>

#### Sezione 3: L'Iterazione e i Cicli (Modulo 2.3)

**11. Che differenza c'è tra iterazione definita e iterazione indefinita?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Nell'iterazione definita si conosce in anticipo il numero esatto di ripetizioni (si usa il ciclo <code>Per / For</code>). Nell'iterazione indefinita il numero di giri dipende da una condizione dinamica durante l'esecuzione (si usano <code>Mentre / While</code> o <code>Fai / Do-While</code>).</p>
</details>
<br/>

**12. Qual è la differenza fondamentale tra il ciclo `Mentre` (`While`) e il ciclo `Fai` (`Do-While`)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Il ciclo <code>Mentre</code> è <strong>pre-condizionale</strong>: controlla la condizione prima di entrare, quindi può eseguire il corpo anche <strong>0 volte</strong>. Il ciclo <code>Fai</code> è <strong>post-condizionale</strong>: esegue il corpo e controlla alla fine, garantendo almeno <strong>1 esecuzione</strong>.</p>
</details>
<br/>

**13. Qual è la differenza tra un contatore e un accumulatore? Come vanno inizializzati?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Il contatore conta gli eventi aumentando di un passo fisso (es. <code>conta = conta + 1</code>) e va inizializzato a <code>0</code>. L'accumulatore somma o moltiplica valori variabili (es. <code>somma = somma + prezzo</code>) e va inizializzato prima del ciclo a <code>0</code> per le somme o a <code>1</code> per i prodotti.</p>
</details>
<br/>

**14. Che cos'è un "valore sentinella" nei cicli indefiniti?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È un valore speciale concordato con l'utente (ad esempio <code>0</code> o <code>-1</code>) che, una volta digitato in input, rende falsa la condizione del ciclo e segnala la fine dell'inserimento dei dati.</p>
</details>
<br/>

**15. Che cos'è un Loop Infinito e come si genera tipicamente in un ciclo `Mentre`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È un errore logico in cui la condizione del ciclo resta per sempre Vera e il programma non termina mai. Succede tipicamente quando ci si dimentica di aggiornare la variabile di controllo all'interno del ciclo o si scrive una condizione impossibile da falsificare.</p>
</details>
<br/>

**16. Che cos'è e a cosa serve una Tabella di Tracciamento (Trace Table)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È una griglia compilata su carta per simulare passo-passo l'esecuzione di un algoritmo, annotando i valori assunti dalle variabili a ogni iterazione per verificare che la logica sia corretta prima o durante il debugging.</p>
</details>
<br/>

#### Sezione 3b: Teorema di Böhm-Jacopini ed Efficienza (Modulo 2.4)

**16b. Cosa afferma il Teorema di Böhm-Jacopini e perché è fondamentale?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Afferma che qualsiasi algoritmo calcolabile può essere espresso combinando unicamente tre strutture di controllo: <strong>Sequenza</strong>, <strong>Selezione</strong> e <strong>Iterazione</strong>. Ha fondato la programmazione strutturata, eliminando la necessità dei salti arbitrari (<code>GOTO</code>) responsabili dello <em>Spaghetti Code</em>.</p>
</details>
<br/>

**16c. Che differenza c'è tra Correttezza ed Efficienza di un algoritmo?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>La <strong>correttezza</strong> verifica che l'algoritmo produca sempre il risultato esatto per ogni input valido. L'<strong>efficienza</strong> misura quante risorse (tempo di calcolo e memoria RAM) consuma al crescere della quantità di dati <code>N</code>.</p>
</details>
<br/>

**16d. Perché la Ricerca Binaria è drasticamente più veloce della Ricerca Lineare e quale prerequisito richiede?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché a ogni confronto dimezza lo spazio di ricerca (su 1.000 elementi bastano al massimo 10 confronti invece di 1.000; su un miliardo ne bastano 30). Tuttavia ha un prerequisito indispensabile: <strong>i dati devono essere già ordinati</strong>.</p>
</details>
<br/>

#### Sezione 4: I Vettori / Array (Modulo 2.5)

**17. Cos'è un Vettore (Array) e perché sostituisce le variabili scalari quando si gestiscono molti dati?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È una collezione finita, ordinata e contigua di elementi dello stesso tipo che condividono un unico nome di variabile. Evita di dover dichiarare decine o centinaia di variabili singole e permette di elaborare tutti i dati con poche righe tramite un ciclo.</p>
</details>
<br/>

**18. Cosa significa "omogeneità dei dati" e "dimensione statica" in un array di Flowgorithm?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p><strong>Omogeneità</strong> significa che tutte le celle dell'array devono contenere lo stesso tipo di dato (es. tutti Interi o tutti Reali). <strong>Dimensione statica</strong> significa che il numero di celle va fissato alla dichiarazione e non può cambiare durante l'esecuzione.</p>
</details>
<br/>

**19. In cosa consiste la regola dello *Zero-Based Indexing*?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Gli indici di un vettore partono sempre da <code>0</code> e non da <code>1</code>. Quindi un vettore di dimensione <code>N</code> ha come primo elemento <code>vettore[0]</code> e come ultimo elemento <code>vettore[N - 1]</code>.</p>
</details>
<br/>

**20. Perché il ciclo `Per` (`For`) è considerato il compagno naturale dei vettori?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché la variabile contatore <code>i</code> del ciclo <code>Per</code> (da <code>0</code> a <code>N - 1</code>) può essere usata direttamente come indice dinamico <code>vettore[i]</code> per leggere, modificare o stampare tutte le celle in sequenza.</p>
</details>
<br/>

**21. Quando si verifica l'errore *Index Out of Bounds*?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Si verifica quando l'algoritmo tenta di leggere o scrivere in una posizione inesistente dell'array, usando un indice negativo oppure maggiore o uguale alla dimensione dichiarata (es. accedere a <code>voti[5]</code> in un array di 5 elementi).</p>
</details>
<br/>

#### Sezione 5: Sottoprogrammi e Modularità (Modulo 2.6)

**22. In cosa consiste il principio del *Divide et Impera* nella progettazione modulare?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Consiste nello scomporre un problema complesso in sotto-problemi più piccoli e indipendenti (decomposizione Top-Down), risolvendo ciascuno in un sottoprogramma dedicato che verrà poi richiamato dal <code>Main</code>.</p>
</details>
<br/>

**23. Qual è la differenza tra una Procedura e una Funzione?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Una <strong>Procedura</strong> esegue un'azione senza restituire un valore di ritorno (in Flowgorithm ha ritorno <code>None</code> e si invoca con il blocco <code>Call</code>). Una <strong>Funzione</strong> calcola e restituisce obbligatoriamente un valore tipizzato al chiamante (si usa in assegnazioni o espressioni).</p>
</details>
<br/>

**24. Che differenza c'è tra parametri formali e parametri attuali?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>I <strong>parametri formali</strong> sono le variabili segnaposto dichiarate nell'intestazione del sottoprogramma. I <strong>parametri attuali</strong> sono i valori o le variabili concrete passati dal programma chiamante nel momento della chiamata. Devono combaciare per numero, ordine e tipo.</p>
</details>
<br/>

**25. Spiega la differenza tra passaggio di parametri *per Valore* e *per Riferimento*.**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Nel passaggio <strong>per valore</strong> il sottoprogramma riceve una copia del dato: le modifiche interne non alterano la variabile del chiamante. Nel passaggio <strong>per riferimento</strong> riceve l'indirizzo di memoria della variabile originale: ogni modifica interna cambia direttamente anche il valore nel chiamante.</p>
</details>
<br/>

**26. Che cos'è lo *Scope* (ambito di visibilità) di una variabile locale?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È la porzione di programma in cui la variabile esiste ed è accessibile. Una variabile locale dichiarata dentro un sottoprogramma nasce quando il modulo viene chiamato, è invisibile al <code>Main</code> e agli altri moduli, e viene distrutta al termine del modulo stesso.</p>
</details>
<br/>

**27. Cos'è il *Call Stack* (Pila delle Chiamate) e con quale logica opera?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È una struttura di memoria gestita con logica <strong>LIFO</strong> (<em>Last In, First Out</em>) in cui vengono impilati i record di attivazione (indirizzo di ritorno, parametri e variabili locali) di ogni sottoprogramma invocato, per sapere esattamente dove tornare al termine di ogni chiamata.</p>
</details>
<br/>

#### Sezione 6: Dalla Grafica al Testo (Modulo 2.7)

**28. Perché l'industria del software utilizza linguaggi testuali invece dei diagrammi di flusso?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Per tre motivi principali: maggiore velocità di scrittura, scalabilità su progetti con migliaia o milioni di righe di codice (impossibili da disegnare a blocchi) e facilità di condivisione, versionamento (es. Git) e integrazione con librerie esterne.</p>
</details>
<br/>

**29. Qual è la differenza tra *Sintassi* e *Semantica* di un programma?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>La <strong>sintassi</strong> è l'insieme delle regole grammaticali e ortografiche del linguaggio (es. parentesi, due punti, indentazione): violarla genera un <em>Syntax Error</em>. La <strong>semantica</strong> è il significato logico dell'algoritmo: un codice può essere sintatticamente perfetto ma semanticamente sbagliato (es. sommare invece di sottrarre).</p>
</details>
<br/>

**30. Quale ruolo assume l'indentazione nel passaggio dalla pseudocodifica a Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Mentre in pseudocodifica l'indentazione è una convenzione estetica per facilitare la lettura, in Python diventa un <strong>obbligo sintattico rigoroso</strong>: sono proprio gli spazi a inizio riga a definire quali istruzioni appartengono a un blocco <code>if</code>, <code>for</code>, <code>while</code> o a una funzione <code>def</code>.</p>
</details>

---
