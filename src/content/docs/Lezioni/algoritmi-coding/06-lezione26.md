---
title: 2.6 Sottoprogrammi e Modularità
description: Principi di decomposizione algoritmica, passaggio di parametri per valore e per riferimento, gestione dello stack e implementazione visiva.
---

### Introduzione

Fino a questo momento, tutti gli algoritmi che abbiamo progettato sono stati sviluppati all'interno di un unico blocco esecutivo lineare: il diagramma di flusso principale, identificato in Flowgorithm con il blocco `Main`. Abbiamo gestito sequenze, decisioni, iterazioni e persino vettori di dati, ma sempre collocandoli in un unico diagramma continuo, dall'inizio alla fine.

Questo approccio, definito **monolitico**, funziona perfettamente per problemi didattici circoscritti. Tuttavia, provate a immaginare un software industriale reale: un videogioco moderno, un sistema operativo o il motore di gestione di un'automobile. Questi sistemi contengono centinaia di migliaia, se non milioni, di istruzioni. Se un team di ingegneri cercasse di disegnare un programma del genere su un unico diagramma di flusso, il risultato sarebbe un groviglio indecifrabile di blocchi e frecce, noto storicamente nel gergo informatico come *Spaghetti Code*. Inoltre, cosa accadrebbe se in dieci punti diversi del nostro algoritmo avessimo bisogno di calcolare la radice quadrata, ordinare un vettore o validare l'input dell'utente? Duplicare dieci volte la medesima sequenza di blocchi violerebbe uno dei principi cardine dell'ingegneria del software: la regola **DRY** (*Don't Repeat Yourself*, non ripeterti mai).

La soluzione a questa complessità risiede nella **Modularità**. Esattamente come un'automobile non viene forgiata da un unico blocco di metallo, ma è assemblata combinando moduli indipendenti e specializzati (il motore, l'impianto frenante, il cambio, le luci), un software professionale viene suddiviso in componenti autonome e riutilizzabili. In questa lezione scopriremo i **Sottoprogrammi**, distinti formalmente in **Procedure** e **Funzioni**, impareremo a farli comunicare tramite lo scambio di **Parametri** e analizzeremo come il software Flowgorithm gestisce visivamente e dinamicamente queste potenti architetture logiche.

---

### Sviluppo dell'Argomento

#### 1. La Filosofia del *Divide et Impera* e la Decomposizione Top-Down
Il pilastro concettuale su cui si fonda la programmazione modulare è il principio del **Divide et Impera** ("dividi e conquista"). Di fronte a un problema computazionale vasto o intricato, la strategia vincente consiste nello scomporlo sistematicamente in sotto-problemi più piccoli, più semplici e tra loro indipendenti. Ciascun sotto-problema viene risolto isolatamente all'interno di un modulo dedicato; infine, i vari moduli vengono orchestrati dal programma principale per raggiungere l'obiettivo complessivo.

Questo metodo di progettazione prende il nome di **Decomposizione Top-Down** (dall'alto verso il basso):
1.  **Livello Alto (Visione d'insieme):** Il programma principale (`Main`) non si perde nei dettagli operativi minuti, ma si limita a coordinare l'esecuzione dei moduli (es. 1. Carica dati; 2. Ordina dati; 3. Calcola statistiche; 4. Stampa prospetto finale).
2.  **Livello Basso (Dettaglio esecutivo):** Ogni singolo modulo contiene l'algoritmo specifico per portare a termine il suo micro-compito senza interferire con gli altri.

I benefici ingegneristici della modularità sono molteplici:
*   **Riusabilità del Codice:** Un modulo scritto una sola volta può essere invocato decine di volte in punti differenti del programma, o addirittura esportato in progetti futuri.
*   **Manutenibilità e Debugging Isolato:** Se il calcolo del prezzo finale risulta errato, non serve esaminare l'intero sistema; basta isolare e correggere il sottoprogramma preposto al calcolo delle imposte.
*   **Lavoro Collaborativo (Teamwork):** In un'azienda informatica, team diversi possono lavorare contemporaneamente su moduli distinti purché siano stati concordati in anticipo i dati di ingresso e di uscita del modulo stesso.

#### 2. Anatomia di un Sottoprogramma: Funzioni vs Procedure
Un **sottoprogramma** (o *subroutine*) è un blocco autonomo di istruzioni identificato da un nome univoco, progettato per assolvere a un compito specifico e attivabile su richiesta dal programma principale o da altri sottoprogrammi.

In informatica teorica e nella maggior parte dei linguaggi, i sottoprogrammi si dividono in due grandi famiglie in base alla presenza o meno di un valore di ritorno:

| Caratteristica | Procedura | Funzione |
| :--- | :--- | :--- |
| **Scopo Principale** | Eseguire un'azione, un'elaborazione o un compito operativo (es. stampare una cornice, resettare uno schermo). | Eseguire un calcolo ed **estrarre un risultato** da restituire al chiamante. |
| **Valore di Ritorno** | **Nessuno**. La procedura non restituisce alcun dato direttamente nel punto di chiamata. | **Obbligatorio**. La funzione restituisce un singolo valore (scalare) tipizzato. |
| **Modalità di Invocazione** | Viene chiamata come **istruzione a sé stante** (blocco `Call` in Flowgorithm). | Viene utilizzata **all'interno di un'espressione** o assegnazione (es. `y = calcolaPotenza(2, 5)`). |
| **Analogia nel Mondo Reale** | L'ordine dato a una stampante di stampare un foglio: compie l'azione, ma non genera un dato di calcolo. | La funzione matematica `f(x) = x²`: le fornisci un numero e ti restituisce il suo quadrato. |

#### 3. Il Meccanismo della Chiamata e del Controllo del Flusso
Cosa accade fisicamente quando un algoritmo incontra l'invocazione di un sottoprogramma?
1.  Il programma chiamante (`Main`) sospende temporaneamente la propria esecuzione sequenziale.
2.  Il controllo dell'elaborazione viene trasferito al blocco di inizio del sottoprogramma richiesto.
3.  Vengono eseguite tutte le istruzioni contenute nel corpo del sottoprogramma.
4.  Raggiunto il termine del sottoprogramma (o l'istruzione di ritorno), il controllo ritorna automaticamente al chiamante, riprendendo l'esecuzione esattamente dal punto (o dall'istruzione) successivo alla chiamata.

#### 4. La Comunicazione tra Moduli: Parametri Formali e Attuali
Un sottoprogramma sarebbe scarsamente utile se potesse lavorare solo su dati fissi. Per renderlo dinamico e versatile, il programma chiamante deve poter trasmettere al sottoprogramma i dati su cui operare. Questo scambio di informazioni avviene tramite i **Parametri**.

È fondamentale comprendere la distinzione teorica tra due concetti:
*   **Parametri Formali (o Segnaposto):** Sono le variabili dichiarate nell'intestazione (*firma* o *signature*) del sottoprogramma al momento della sua creazione. Essi definiscono quali tipi di dato il modulo si aspetta di ricevere (ad esempio, una funzione `calcolaAreaRettangolo` definirà i parametri formali `base` e `altezza` di tipo Reale). Hanno una valenza puramente simbolica: dicono *come* lavorerà il modulo quando riceverà i dati.
*   **Parametri Attuali (o Effettivi):** Sono i valori concreti, le costanti o le variabili reali che il programma chiamante passa fisicamente al modulo nel momento esatto dell'invocazione (ad esempio `area = calcolaAreaRettangolo(12.5, 4.0)`). 

**Regola di Corrispondenza:** Tra parametri attuali e formali deve sempre sussistere una perfetta corrispondenza in termini di **numero**, **ordine di posizionamento** e **compatibilità di tipo di dato**. Se un modulo si aspetta un Intero e una Stringa, non possiamo inviargli una Stringa e un Reale.

#### 5. Modalità di Passaggio dei Parametri: Valore vs Riferimento
La modalità con cui la memoria gestisce il collegamento tra i parametri attuali e formali è uno degli snodi concettuali più importanti della disciplina informatica. Esistono due metodologie standard:

##### A. Passaggio per Valore (*Pass by Value* o per copia)
Nel passaggio per valore, il sistema operativo crea nella memoria RAM una **copia fisica** del dato contenuto nel parametro attuale e la deposita nel parametro formale. 
*   **Comportamento:** Il sottoprogramma lavora unicamente su questo duplicato locale.
*   **Isolamento protettivo:** Qualsiasi alterazione, calcolo o modifica apportata alla variabile all'interno del sottoprogramma non ha alcun effetto sulla variabile originale del programma chiamante. Al termine del modulo, la copia viene distrutta e la variabile originaria rimane inalterata.
*   **Utilizzo:** È la modalità standard e predefinita, ideale quando il modulo deve solo leggere ed elaborare informazioni senza modificarle alla radice.

##### B. Passaggio per Riferimento (*Pass by Reference* o per indirizzo)
Nel passaggio per riferimento, il sistema non duplica il dato. Al sottoprogramma viene invece passato l'**indirizzo fisico di memoria** (il puntatore alla cella RAM) della variabile originaria.
*   **Comportamento:** Il parametro formale agisce come un vero e proprio "alias" o sinonimo della variabile originale.
*   **Condivisione totale:** Qualsiasi modifica, azzeramento o riscrittura compiuta sul parametro formale all'interno del sottoprogramma si ripercuote istantaneamente e direttamente sulla variabile del chiamante.
*   **Utilizzo:** È indispensabile quando una procedura ha il compito di modificare più variabili contemporaneamente (ad esempio, una procedura di ordinamento o di scambio dei dati).

#### 6. Visibilità delle Variabili (Scope) e lo Stack delle Chiamate
Perché i moduli siano realmente indipendenti, le variabili non devono potersi "contaminare" tra loro. A questo scopo, l'informatica introduce il concetto di **Ambito di Visibilità** (*Scope*):

*   **Variabili Locali:** Sono le variabili dichiarate all'interno di uno specifico sottoprogramma. Esse hanno un ciclo di vita limitato: nascono quando il modulo viene eseguito e vengono distrutte non appena esso termina. Sono completamente invisibili al resto del programma: il `Main` non può né leggere né modificare una variabile locale di un sottoprogramma, e viceversa. Questo principio garantisce l'**Information Hiding** (occultamento delle informazioni interne).
*   **Variabili Globali:** Sono variabili accessibili e modificabili da qualunque punto del codice. Nei linguaggi strutturati e nella buona pratica ingegneristica, l'uso delle variabili globali viene fortemente scoraggiato o limitato, poiché espone il programma a effetti collaterali incontrollabili e rende il debugging estremamente difficoltoso.

**La Gestione Hardware: Lo Stack delle Chiamate (Call Stack)**
Come fa il calcolatore a ricordare dove deve tornare quando una funzione termina, specialmente se una funzione ne chiama un'altra a cascata?
La memoria utilizza una struttura a pila (*Stack*), governata dalla logica **LIFO** (*Last In, First Out* - l'ultimo a entrare è il primo a uscire). 
Ogni volta che viene invocato un modulo, la CPU alloca sulla sommità dello stack un blocco di memoria dedicato chiamato **Record di Attivazione** (o *Stack Frame*), contenente l'indirizzo di ritorno, i parametri e le variabili locali di quel modulo. Quando il modulo conclude il suo compito, il suo record di attivazione viene rimosso (*Pop*) dalla cima dello stack, liberando memoria e ripristinando istantaneamente l'ambiente di lavoro del programma chiamante.

#### 7. La Modularità nell'Ambiente Flowgorithm
Flowgorithm offre un supporto visivo avanzato per la progettazione modulare:

1.  **Creazione di Nuovi Moduli:** Nella barra degli strumenti in alto, accanto al nome della funzione corrente (`Main`), è presente un menu a tendina affiancato dall'icona **Gestore Funzioni** (Function Manager). Cliccando su di esso, è possibile aggiungere un nuovo diagramma di flusso separato.
2.  **Configurazione della Funzione:** All'apertura della finestra di dialogo, l'ambiente richiede:
    *   **Nome della Funzione:** L'identificatore del modulo (es. `CalcolaMedia`).
    *   **Tipo di Ritorno:** Se si seleziona *None* (Nessuno), il blocco agirà formalmente come una **Procedura**. Se si seleziona un tipo di dato valido (Intero, Reale, Stringa, Booleano), il modulo diventerà una **Funzione** e comparirà un campo per definire la **Variabile di Ritorno**.
    *   **Parametri:** Tramite il pulsante "Aggiungi", si possono definire i parametri formali, specificandone il nome, il tipo e spuntando la casella **Passa per riferimento** qualora si desideri che le modifiche si riflettano sul chiamante.
3.  **Il Blocco Chiamata (Call):** Per invocare una procedura all'interno del flusso, Flowgorithm mette a disposizione un blocco specifico a forma di rettangolo con doppie linee laterali, denominato **Chiamata**. Al suo interno si digita il nome del modulo seguito dai parametri attuali tra parentesi (es. `StampaCornice(20)`). Se invece il modulo è una funzione con valore di ritorno, esso non si invoca con il blocco Call, ma viene inserito direttamente dentro un blocco di Assegnazione o Output (es. `totale = SommaValori(a, b)`).

---

### Esempi Pratici Guidati

#### Esempio 1: Procedura di Utilità (Stampa Cornice con Messaggio)
*Obiettivo:* Creare un modulo che disegna a video una linea divisoria decorativa composta da asterischi, la cui lunghezza è scelta dal programmatore, al fine di migliorare l'interfaccia grafica del terminale.

*Analisi del Sottoprogramma:*
*   **Tipologia:** Procedura (non deve restituire calcoli numerici, ma eseguire un'azione di stampa). Tipo di ritorno: `None`.
*   **Nome:** `StampaLinea`.
*   **Parametri Formali:** `lunghezza` (di tipo Intero, passato per valore).
*   **Variabili Locali:** `contatore` (tipo Intero).

*Struttura del Diagramma del Sottoprogramma:*
All'interno del diagramma `StampaLinea`, si imposta un ciclo `For` che conta da 1 a `lunghezza`. Nel corpo del ciclo si inserisce un blocco di scrittura: `Output "*" (senza a capo)`. Al termine del ciclo, si inserisce un'istruzione di a capo.

*Utilizzo nel Main:*
Nel flusso principale basterà inserire due blocchi di tipo `Chiamata`:
```text
Call StampaLinea(30)
Output "PROGRAMMA GESTIONE ARCHIVIO"
Call StampaLinea(30)
```
Questo evita di dover duplicare i cicli di stampa per ogni sezione del programma.

#### Esempio 2: Funzione con Valore di Ritorno (Il Calcolo del Fattoriale)
*Obiettivo:* Creare un modulo matematico che riceve in ingresso un numero intero positivo N e ne calcola il fattoriale (N! = 1 * 2 * 3 * ... * N), restituendo il valore calcolato al programma principale.

*Analisi della Funzione:*
*   **Tipologia:** Funzione. Tipo di ritorno: `Intero`.
*   **Nome:** `Fattoriale`.
*   **Variabile di Ritorno:** `risultato`.
*   **Parametri Formali:** `numero` (tipo Intero).
*   **Variabili Locali:** `i` (tipo Intero).

*Logica interna della Funzione:*
1.  Assegnazione: `risultato = 1`.
2.  Ciclo `For` con indice `i` da 1 a `numero` con passo +1.
3.  All'interno del ciclo: `risultato = risultato * i`.
4.  Raggiunto il blocco di fine, Flowgorithm estrae automaticamente il valore presente nella variabile `risultato` e lo invia al chiamante.

*Utilizzo nel Main:*
Nel diagramma principale, la funzione può essere utilizzata direttamente all'interno di formule matematiche o in blocchi di visualizzazione:
```text
Leggi n
valoreFinale = Fattoriale(n)
Output "Il fattoriale calcolato è: " & valoreFinale
```

#### Esempio 3: Procedura con Passaggio per Riferimento (L'Algoritmo di Scambio "Swap")
*Obiettivo:* Progettare un sottoprogramma modulare che riceve due variabili numeriche e ne inverte i valori, rendendo la modifica permanente anche nel `Main`.

*Perché serve il passaggio per Riferimento?*
Se passassimo le due variabili per valore, la procedura scambierebbe solo le copie temporanee create nella sua memoria locale, lasciando i dati originali del `Main` totalmente inalterati.

*Analisi della Procedura:*
*   **Tipologia:** Procedura (Tipo di ritorno: `None`).
*   **Nome:** `ScambiaValori`.
*   **Parametri Formali:** 
    *   `x` (tipo Intero, **Passa per riferimento: SÌ**)
    *   `y` (tipo Intero, **Passa per riferimento: SÌ**)
*   **Variabile Locale:** `temp` (tipo Intero).

*Corpo della Procedura:*
1.  `temp = x`
2.  `x = y`
3.  `y = temp`

*Esecuzione nel Main:*
1.  Dichiarazione nel Main: `primo = 10`, `secondo = 99`.
2.  Output: "Prima dello scambio: " & primo & " - " & secondo.
3.  Blocco di Chiamata: `Call ScambiaValori(primo, secondo)`.
4.  Output: "Dopo lo scambio: " & primo & " - " & secondo.

Grazie al passaggio per riferimento, il `Main` stamperà: `Dopo lo scambio: 99 - 10`. La procedura ha agito direttamente sulle celle di memoria allocate dal `Main`.

---

### Sintesi

*   **Il Principio della Modularità:** La frammentazione di un problema complesso in moduli indipendenti e circoscritti (*Divide et Impera*) garantisce chiarezza concettuale, riusabilità del codice e facilita la localizzazione degli errori.
*   **Procedure e Funzioni:** Le *Procedure* sono sottoprogrammi che compiono azioni ed elaborazioni senza generare un valore di ritorno immediato (invocate tramite blocco `Call`); le *Funzioni* producono e restituiscono al chiamante un singolo dato tipizzato, potendo essere impiegate direttamente all'interno di espressioni di calcolo.
*   **Parametri Formali vs Attuali:** I parametri formali sono i segnaposto simbolici definiti nell'intestazione del sottoprogramma; i parametri attuali sono i dati reali trasmessi dal programma chiamante all'atto dell'invocazione.
*   **Meccanismi di Passaggio:** Nel passaggio *per Valore*, il modulo opera su un duplicato temporaneo proteggendo il dato originario; nel passaggio *per Riferimento*, il modulo riceve l'indirizzo di memoria della variabile, potendone alterare definitivamente il valore nel chiamante.
*   **Incapsulamento e Call Stack:** Le variabili locali risiedono esclusivamente all'interno del modulo e decadono al suo termine. Il flusso esecutivo tra moduli e il salvataggio dei contesti di memoria sono governati a livello hardware dalla pila delle chiamate (*Call Stack*).

---

### Glossario

*   **Sottoprogramma (Subroutine):** Porzione autonoma di codice algoritmico, dotata di un identificatore univoco, progettata per assolvere a un compito specifico e riutilizzabile attraverso chiamate formali.
*   **Procedura:** Sottoprogramma che esegue un insieme di operazioni senza produrre un valore di ritorno esplicito verso il contesto chiamante.
*   **Funzione:** Sottoprogramma che, a fronte di un insieme di parametri in ingresso, esegue un'elaborazione e restituisce un unico valore tipizzato al chiamante.
*   **Divide et Impera:** Metodologia euristica di problem solving consistente nella scomposizione ricorsiva di un problema complesso in sotto-problemi di minore entità, la cui risoluzione integrata porta alla soluzione globale.
*   **Parametro Formale:** Variabile simbolica definita nella firma di un sottoprogramma per dichiarare il tipo e il numero di dati accettati in ingresso.
*   **Parametro Attuale:** Valore effettivo, variabile o espressione passata concretamente a un sottoprogramma durante la sua invocazione.
*   **Passaggio per Valore:** Tecnica di associazione dei parametri che trasferisce al sottoprogramma una copia del valore originario, garantendo l'immutabilità della variabile del chiamante.
*   **Passaggio per Riferimento:** Tecnica di associazione dei parametri che trasmette l'indirizzo di memoria della variabile reale, consentendo al sottoprogramma di manipolarne direttamente il contenuto originario.
*   **Scope (Ambito di Visibilità):** Porzione di codice all'interno della quale una determinata variabile è dichiarata, allocata e legalmente accessibile dalle istruzioni del calcolatore.
*   **Call Stack (Pila delle Chiamate):** Struttura dati dinamica di sistema operante in logica LIFO, deputata alla memorizzazione sequenziale dei record di attivazione relativi alle funzioni e procedure in fase di esecuzione.
*   **Record di Attivazione (Stack Frame):** Area di memoria allocata sullo stack contenente i parametri, le variabili locali e l'indirizzo di ritorno al chiamante per una specifica istanza di esecuzione di un sottoprogramma.

<button onclick="window.print()" style="padding: 10px 15px; background-color: #dbae1a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  🖨️ Stampa / Salva in PDF
</button>