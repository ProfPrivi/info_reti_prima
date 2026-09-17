---
title: 2.2 Il Coding Visivo con Flowgorithm
description: Diagrammi di flusso, blocchi logici, variabili e l'esecuzione passo-passo.
---

## Modulo 2.2: Il Coding Visivo con Flowgorithm e le Istruzioni di Selezione

### Introduzione

Nel modulo precedente abbiamo scoperto cos'è un algoritmo: un ragionamento logico, preciso e senza ambiguità per risolvere un problema. Ma una volta che abbiamo l'algoritmo chiaro in testa, come facciamo a spiegarlo al computer? Non possiamo usare il linguaggio umano di tutti i giorni, perché è troppo vago e pieno di sottintesi, ma allo stesso tempo non siamo ancora pronti per scrivere complessi codici di programmazione testuali (come in Python, C++ o Java). Ci serve un "linguaggio ponte", esattamente come un architetto non inizia a posare i mattoni senza prima aver disegnato la piantina della casa.

Inoltre, fino a questo momento, i nostri algoritmi si sono comportati come un treno che viaggia su un unico binario dritto. Abbiamo utilizzato la struttura della **Sequenza**: il calcolatore leggeva la prima istruzione, poi la seconda, poi la terza, scendendo in linea retta fino al blocco di fine. Questo approccio è efficiente, ma ha un grosso limite: non può deviare, non può evitare un ostacolo e non può cambiare destinazione. La risoluzione dei problemi nel mondo reale raramente segue una linea retta; la nostra vita quotidiana è costellata di scelte e bivi logici, come ad esempio decidere di prendere l'ombrello se piove o gli occhiali da sole altrimenti. 

Un programma informatico che non sa fare scelte è un programma limitato. In questa lezione impareremo a progettare gli algoritmi utilizzando la **Pseudocodifica** e i **Diagrammi di Flusso (Flow chart)**, e scopriremo come dare vita a questi disegni utilizzando il software **Flowgorithm**. Esploreremo i concetti di variabile e introdurremo l'**Istruzione di Selezione**, la struttura fondamentale che permette al nostro algoritmo di osservare una situazione, farsi una domanda e imboccare strade diverse a seconda della risposta.

---

### Sviluppo dell'Argomento

#### 1. Dalla Mente alla Carta e l'Alfabeto delle Forme
Esistono due modi principali per scrivere un algoritmo in modo universale. La **Pseudocodifica** è un finto linguaggio di programmazione che usa l'italiano (o l'inglese base), ma scrivendo frasi estremamente rigide, stilizzate e ordinate passo dopo passo. I **Diagrammi a Blocchi (Flow chart)** sono la traduzione puramente visiva dell'algoritmo, che utilizzano forme geometriche specifiche collegate da frecce (archi orientati) per indicare il "senso di marcia" in cui il computer leggerà le istruzioni, solitamente dall'alto verso il basso.

Per disegnare un diagramma di flusso si utilizza uno standard internazionale con quattro tipologie fondamentali di blocchi:
*   **Blocco Ovale (Inizio / Fine):** È un blocco senza spigoli che segna i confini dell'algoritmo; in ogni programma deve esserci un solo blocco di Inizio e un solo blocco di Fine.
*   **Blocco Parallelogramma (Comunicazione I/O):** Rappresenta i "sensi" e la "voce" del computer, usato per l'Input (quando il computer legge un dato digitato) e per l'Output (quando mostra un risultato a schermo).
*   **Blocco Rettangolare (Elaborazione e Calcolo):** È il blocco in cui la CPU lavora eseguendo operazioni di calcolo matematico o trasformazioni dei dati.
*   **Blocco Rombo (Decisione Condizionale):** È il blocco del "bivio" al cui interno viene posta una domanda chiara (un test logico) che ammette solo due risposte: SÌ (VERO) o NO (FALSO).

#### 2. Variabili e Costanti: I Cassetti della Memoria RAM
Prima di fare calcoli, il programmatore utilizza le **Variabili** per salvare i dati. Immaginiamo la memoria RAM come un immenso armadio pieno di cassetti vuoti; creare una variabile significa scegliere un cassetto vuoto e attaccarci sopra un'etichetta con un nome univoco (Identificatore). Si chiamano "variabili" perché il contenuto del cassetto può variare, essere modificato, cancellato o sovrascritto durante l'esecuzione. Le **Costanti** sono invece dati che non devono mai cambiare (come un cassetto chiuso a lucchetto).

In Flowgorithm è obbligatorio costruire il cassetto prima di usarlo tramite un'operazione chiamata **Dichiarazione**. Quando dichiariamo una variabile, dobbiamo specificare il **Tipo di Dato** che conterrà:
*   **Intero (Integer):** Numeri interi senza virgola.
*   **Reale (Real):** Numeri decimali con il punto.
*   **Stringa (String):** Solo testo racchiuso tra virgolette.
*   **Booleano (Boolean):** Un cassetto che può contenere solo i valori Vero o Falso.
Se si tenta di inserire un tipo di dato non corrispondente, Flowgorithm andrà in errore (Crash).

#### 3. Il Bivio Logico e il Blocco di Test
Nei diagrammi di flusso, il punto in cui il programma si trova di fronte a una scelta viene rappresentato dal rombo, chiamato blocco di test o blocco di condizione. Poiché i calcolatori ragionano esclusivamente in codice binario e non tollerano l'ambiguità, non possiamo inserire domande aperte con infinite risposte. 

All'interno del rombo possiamo inserire unicamente una condizione logica (o espressione Booleana) che ammette solo due risposte possibili: VERO o FALSO (ad esempio, chiedendo se l'età è maggiore o uguale a 18). Dal vertice del rombo usciranno sempre due frecce (due binari) che prenderanno direzioni diverse a seconda dell'esito del test.

#### 4. La Selezione Doppia e Semplice
Parliamo di **selezione doppia** quando l'algoritmo prevede istruzioni operative in entrambi i percorsi: un'azione specifica se la condizione è Vera, e un'azione diversa se è Falsa. 
*   **Esempio (L'acquisto di una moto):** Il programma chiede il costo della moto (`costoMoto`) e i soldi a disposizione (`risparmi`). Il rombo si chiede se `risparmi >= costoMoto`. Se l'esito è VERO, segue il ramo destro e visualizza "Ottimo! Puoi comprare la moto!"; se l'esito è FALSO, segue il ramo sinistro e visualizza "Mi spiace, devi guadagnare altri soldi". I due rami si ricongiungeranno più in basso.

Nella pseudocodifica, si usano le parole chiave **se** (condizione), **allora** (ramo Vero) e **altrimenti** (ramo Falso). Le istruzioni che dipendono dalla scelta sono spostate verso destra tramite la tecnica dell'**indentazione**, che permette di capire a colpo d'occhio quali azioni sono rinchiuse nei rami.

Parliamo di **selezione semplice** quando le operazioni sono presenti in un solo ramo (il ramo Falso è vuoto), utile quando vogliamo compiere un'azione specifica solo se si verifica un determinato evento. 
*   **Esempio (I numeri sempre positivi):** Il programma legge un numero. Il rombo verifica se `numero < 0`. Se VERO, entra nel ramo *allora* e moltiplica il numero per -1 per renderlo positivo. Se FALSO (già positivo), imbocca il ramo *altrimenti* dove non trova alcuna istruzione e non fa nulla.

#### 5. Costruire le scelte e il Debugging in Flowgorithm
Quando traduciamo queste logiche in Flowgorithm, dobbiamo ricordare che il software disegnerà sempre automaticamente il ramo Falso (F) sul lato sinistro e il ramo Vero (T) sul lato destro del blocco Condizione. All'interno del rombo bisogna digitare esclusivamente la formula logica (es. `numeroA > numeroB`), senza scrivere le parole "se" o "allora".

Per trovare errori di logica invisibili (i Bug), si usa lo strumento del **Debugging** tramite l'**Esecuzione Passo-Passo**. Avanzando di un singolo passo alla volta, si rallenta il tempo per vedere fisicamente quale blocco il processore sta leggendo. Questo permette di vedere il blocco della condizione "illuminarsi" e scegliere dinamicamente quale binario imboccare in base ai dati. Attivando la "Finestra di visualizzazione delle Variabili", si ottiene una "vista a Raggi X" sulla RAM, permettendo di osservare i cassetti che si creano e i numeri al loro interno che cambiano in tempo reale.

---

### Sintesi

*   **Pseudocodifica e Flow chart:** Sono gli strumenti di progettazione universali che traducono le istruzioni in percorsi visivi fatti di forme geometriche e frecce.
*   **Le forme e le variabili:** Ogni blocco ha una funzione specifica (Ovale, Parallelogramma, Rettangolo, Rombo). Le variabili sono aree (cassetti) nella memoria RAM, con un nome univoco, che devono essere dichiarate specificando il Tipo di Dato (Intero, Reale, Stringa, Booleano).
*   **Il Rombo e le Condizioni:** I bivi nei diagrammi sono gestiti da blocchi di test (rombi) che contengono espressioni logiche valutabili unicamente come Vero o Falso.
*   **Doppia o Semplice:** La selezione doppia esegue operazioni in entrambi i casi (costrutto se/allora/altrimenti), mentre la selezione semplice serve per le eccezioni, eseguendo operazioni solo se la condizione è Vera e lasciando vuoto il percorso Falso.
*   **Indentazione:** Nella stesura testuale dell'algoritmo, è la pratica di spostare il testo verso destra per organizzare visivamente e gerarchicamente le istruzioni.
*   **Debugging:** L'esecuzione "Step-by-Step" permette di rallentare il computer, osservare la RAM in tempo reale e correggere i difetti logici o di instradamento nei bivi.

---

### Glossario

*   **Diagramma di Flusso (Flow chart):** Rappresentazione grafica della sequenza di istruzioni logiche che compongono un algoritmo, realizzata tramite figure geometriche standardizzate collegate da frecce.
*   **Pseudocodifica:** Metodo testuale per descrivere un algoritmo utilizzando un linguaggio simile a quello naturale, ma in modo molto più rigido e schematico.
*   **Identificatore:** Il nome univoco e significativo scelto dal programmatore per etichettare e richiamare una variabile.
*   **Variabile:** Un'area logica riservata nella memoria RAM il cui contenuto può variare durante l'esecuzione.
*   **Costante:** Un contenitore in memoria il cui valore rimane rigorosamente fisso durante l'intera esecuzione.
*   **Dichiarazione:** L'istruzione formale con cui si crea lo spazio in memoria specificandone il nome e il tipo di dato.
*   **Tipo di Dato:** Classificazione che indica al sistema quale genere di informazioni una variabile è autorizzata a contenere (es. Intero, Reale, Stringa, Booleano).
*   **Blocco di Test (Rombo):** Elemento grafico standard preposto ad accogliere l'espressione logica e a biforcare il percorso dell'algoritmo.
*   **Condizione Booleana (o Logica):** Espressione di confronto inserita nel blocco di test che produce un risultato strettamente dicotomico: Vero o Falso.
*   **Istruzione di Selezione:** Costrutto logico che interrompe il flusso sequenziale di un algoritmo, smistando l'esecuzione su percorsi differenti in base a una scelta.
*   **Selezione Doppia:** Architettura decisionale in cui l'algoritmo possiede istruzioni distinte sia per la gestione dell'evento Vero sia per l'evento Falso.
*   **Selezione Semplice:** Architettura decisionale che prevede istruzioni operative solo per l'esito Vero del test, omettendo qualsiasi istruzione nel ramo dell'esito Falso.
*   **Indentazione:** Pratica tipografica e sintattica che consiste nell'inserire spazi a inizio riga per evidenziare visivamente i blocchi di codice "contenuti" in una struttura.
*   **Bug:** Un errore di logica, di sintassi o di progettazione all'interno di un algoritmo.
*   **Debugging:** Il processo investigativo mirato a individuare, analizzare e correggere i bug all'interno di un diagramma di flusso.
*   **Esecuzione Passo-Passo (Step-by-Step):** Modalità che rallenta l'esecuzione del software a comando manuale, illuminando il blocco attivo e mostrando lo stato della memoria.