---
title: 2.1 Dal Problema all'Algoritmo (Il Pensiero Computazionale)
description: 2.1 Dal Problema all'Algoritmo (Il Pensiero Computazionale)
---

### Introduzione

Fino ad ora abbiamo costruito una macchina potentissima (l'hardware) e abbiamo capito che il Sistema Operativo ci aiuta a comunicare con lei. Ma ora dobbiamo compiere il passo più importante: farle fare qualcosa di utile. 

Molti credono erroneamente che l'informatica sia "la scienza di saper usare i computer". In realtà, l'informatico olandese Edsger Dijkstra diceva: *"L'informatica non riguarda i computer più di quanto l'astronomia riguardi i telescopi"*. Il computer è solo uno strumento stupido ma velocissimo; l'informatica è la scienza di risolvere problemi.

Per dominare questa scienza, dobbiamo sviluppare una nuova abilità mentale chiamata **Pensiero Computazionale**. Attenzione: non significa imparare a pensare *come* un computer (che di fatto è solo un pezzo di silicio attraversato da corrente), ma significa imparare a formulare i nostri ragionamenti in un modo così logico, preciso e strutturato che persino una macchina priva di intelligenza possa capirli ed eseguirli al posto nostro in totale autonomia.

---

### Sviluppo dell'Argomento

#### 1. Il Problem Solving: Problema ed Esecutore
Nella vita reale affrontiamo problemi di continuo, spesso senza accorgercene: "Qual è la strada più veloce per arrivare a scuola se ho perso l'autobus?", "Come preparo una torta con quello che c'è in frigorifero?". 

In informatica, il **Problem Solving** (la risoluzione metodica di problemi) è un processo rigoroso. Per analizzarlo, dobbiamo sempre identificare due elementi chiave:
*   **Il Problema:** È la "distanza" o l'ostacolo che c'è tra una situazione iniziale (i dati di partenza, chiamati *Input*) e la situazione desiderata (il risultato finale, o *Output*).
*   **L'Esecutore:** È colui (o la cosa) che deve materialmente compiere le azioni per risolvere il problema. Può essere un essere umano, un braccio robotico in una fabbrica, o il processore centrale di un PC. La regola d'oro è che *il linguaggio e le istruzioni devono sempre adattarsi ai limiti dell'esecutore*. Non puoi dire a un computer "Fammi una torta", perché non ha le mani, e non puoi usare parole vaghe, perché non possiede il dono dell'intuito.

#### 2. L'Astrazione e i Modelli (L'esempio della Metropolitana)
Il primo passo per risolvere un problema informatico è scartare la complessità inutile. Se dovete calcolare il tempo necessario per arrivare a scuola in bicicletta, vi serve conoscere solo due cose: la distanza in chilometri e la vostra velocità media. Il colore della vostra bicicletta, la marca delle scarpe che indossate o la forma delle nuvole in cielo sono dettagli assolutamente inutili ai fini del calcolo!

Questo vitale processo mentale si chiama **Astrazione**: significa estrarre la vera essenza di un problema, ignorando i dettagli superflui per concentrarsi solo sugli elementi logici e matematici fondamentali.
*   *L'esempio quotidiano:* Pensate alla **Mappa della Metropolitana** di una grande città come Londra o Milano. Nella realtà, i binari fanno curve complesse, salgono, scendono e le stazioni hanno distanze chilometriche diverse tra loro. Ma se la mappa fosse geograficamente perfetta, sarebbe illeggibile. Chi ha disegnato la mappa ha *astratto* la realtà: ha rimosso le curve, ha tracciato solo linee rette colorate e ha messo i pallini delle stazioni tutti alla stessa distanza. Ha creato un **Modello**: una rappresentazione della realtà falsata, ma infinitamente più utile per risolvere il problema del passeggero (capire dove scendere).

#### 3. L'Arte di dare Istruzioni e l'Ambiguità Umana
Una volta creato un modello astratto del problema, dobbiamo scrivere le istruzioni per il nostro esecutore. Prendiamo un esempio umano: la ricetta della torta della nonna.
In una ricetta abbiamo sempre:
1.  **Dati iniziali (Ingredienti):** Farina, uova, zucchero. (In informatica, queste diventeranno le nostre **Variabili**, dei "contenitori" logici in cui salvare i dati di partenza).
2.  **Una sequenza di azioni:** 1. Rompi le uova; 2. Mescola; 3. Inforna.

Ma qui nasce un ostacolo enorme. Provate a leggere attentamente un ricettario. Ci troverete frasi come: *"Aggiungi un pizzico di sale"*, *"Cuoci in forno finché la superficie non è ben dorata"*, o il famigerato *"Aggiungi farina quanto basta"*.
Noi esseri umani siamo creature intelligenti e possediamo una dote meravigliosa: l'**intuito**. Capiamo il contesto e ci regoliamo "a occhio". 
Ma immaginate di dare la stessa ricetta a un braccio meccanico privo di cervello. Il robot andrebbe immediatamente in tilt (errore di sistema): cos'è esattamente un "pizzico"? Quanti grammi sono? Cos'è "dorato"? Qual è il codice colore esatto che definisce la doratura? E quanto diavolo è "quanto basta"? 
Le istruzioni umane sono per natura **ambigue**. Per parlare con un calcolatore elettronico, l'esecutore più stupido e letterale che esista, dobbiamo eliminare ogni minima traccia di ambiguità.

#### 4. La Soluzione: L'Algoritmo
Per superare il divario tra l'intuito umano e la rigidità della macchina, dobbiamo trasformare una semplice "ricetta" in un vero e proprio **Algoritmo**.
La parola *algoritmo* ha origini antichissime: deriva dalla latinizzazione del nome di **Al-Khwarizmi**, un geniale matematico e astronomo persiano vissuto nel IX secolo, padre dell'algebra.
Oggi, in informatica, possiamo definire un algoritmo in questo modo:
*Una sequenza finita di istruzioni chiare, precise e inequivocabili che, se eseguite in un ordine rigoroso, portano infallibilmente alla risoluzione di un problema.*

Attenzione a un equivoco comune: l'algoritmo **non è** il codice di programmazione. L'algoritmo non è scritto in linguaggi come Python, C++ o Java. L'algoritmo è il puro ragionamento logico umano che sta alla base. Il codice sorgente che scriviamo sulla tastiera è solo la traduzione successiva di quell'algoritmo in una lingua "straniera" che la macchina è capace di leggere.

#### 5. Le Quattro Proprietà Fondamentali dell'Algoritmo
Non basta fare un elenco numerato per avere un algoritmo. Per essere considerato valido a livello informatico e matematico, un procedimento logico deve possedere obbligatoriamente quattro proprietà:

*   **1. Finitezza:** L'algoritmo deve essere composto da un numero *finito* di passaggi (non può avere infinite istruzioni) e deve terminare il suo lavoro in un lasso di tempo *finito*. Non può girare a vuoto per l'eternità (il famoso "loop infinito" in cui a volte si bloccano malamente i computer).
*   **2. Non ambiguità (o Chiarezza):** Le singole istruzioni devono essere elementari e interpretabili in uno e un solo modo dall'esecutore. Niente "forse" o "un pochino". Un'istruzione deve essere assoluta, come: "Aggiungi esattamente 5,00 grammi di sale".
*   **3. Determinismo:** Questa è una proprietà chiave. A parità di dati di partenza (stessi Input), l'algoritmo deve produrre rigorosamente e sistematicamente sempre lo stesso risultato finale (stesso Output). Se inserisco i numeri 5 e 3 nel mio algoritmo dell'addizione, il risultato deve essere 8 oggi, 8 domani e 8 tra cent'anni. Non c'è alcuno spazio per il caso o l'imprevisto (a meno che non inseriamo noi volontariamente una formula per generare numeri casuali).
*   **4. Generalità:** L'algoritmo non deve risolvere un singolo caso specifico e isolato, ma deve essere in grado di risolvere un'intera *classe* di problemi identici. Un bravo informatico non crea un algoritmo per fare solo "5 + 3"; ne crea uno per fare "Numero A + Numero B". In questo modo, cambiando semplicemente i dati in ingresso, lo stesso sforzo logico risolverà infiniti casi diversi.

---

### Sintesi

*   **Pensiero Computazionale:** È l'abilità mentale di analizzare un problema e scomporlo per formulare una soluzione in un modo così strutturato e logico da poter essere eseguita in automatico da un calcolatore.
*   **Astrazione e Modello:** È il processo mentale vitale con cui si eliminano i dettagli marginali della realtà (es. i colori, le forme inutili) per isolare solo i dati fondamentali necessari a risolvere il problema, creando così un "Modello" astratto (come la mappa della metropolitana).
*   **Il limite dell'Esecutore:** Le istruzioni umane si basano sull'intuito e sull'esperienza e sono spesso ambigue. Il computer è un esecutore rigidissimo: non avendo intuito, necessita di comandi assoluti e millimetrici.
*   **Definizione di Algoritmo:** Derivato dal matematico persiano Al-Khwarizmi, è una sequenza logica, ordinata e inequivocabile di passi elementari che porta alla risoluzione di un problema specifico. È il pensiero logico prima ancora del codice scritto.
*   **Le 4 Proprietà dell'Algoritmo:** Per funzionare e non far "crushare" la macchina, un algoritmo deve possedere: Finitezza (deve avere una fine), Non ambiguità (comandi impossibili da fraintendere), Determinismo (stessi input portano sempre allo stesso identico output) e Generalità (deve valere per un'intera categoria di problemi).

---

### Glossario

*   **Problem Solving:** Il processo logico e metodologico utilizzato per analizzare una situazione problematica, dividerla in sotto-problemi più piccoli e individuare la sequenza di azioni necessarie a risolverla.
*   **Esecutore:** L'entità (umana, meccanica o informatica) incaricata di svolgere materialmente le istruzioni. Deve conoscere il vocabolario del linguaggio in cui sono scritte e possedere le capacità hardware o fisiche per eseguirle.
*   **Astrazione:** L'operazione intellettuale di separare le caratteristiche essenziali e costitutive di un problema dai dettagli puramente accessori.
*   **Modello:** Una rappresentazione astratta, schematica e semplificata di una realtà complessa, costruita con l'obiettivo di studiarla o di risolverne i problemi matematici/logici in modo agevole.
*   **Variabile:** Un "contenitore" logico all'interno della memoria del computer, appositamente progettato per ospitare i dati iniziali (gli ingredienti) e i risultati temporanei necessari allo svolgimento dell'algoritmo.
*   **Algoritmo:** Procedimento logico, sequenziale e rigoroso, costituito da istruzioni non ambigue, il cui svolgimento garantisce la risoluzione di una classe generale di problemi in un tempo limitato.
*   **Determinismo:** Proprietà matematica fondamentale per cui un sistema (o un algoritmo), se posto nelle stesse identiche condizioni iniziali, si comporterà sempre nello stesso modo, restituendo sempre il medesimo risultato in modo totalmente prevedibile.

<button onclick="window.print()" style="padding: 10px 15px; background-color: #dbae1a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  🖨️ Stampa / Salva in PDF
</button>