---
title: 1 Attività Laboratoriale
description: Attività Laboratoriale
---

### Introduzione

Fino ad ora abbiamo studiato l'informatica sulla carta: abbiamo immaginato macchine universali, disegnato porte logiche, parlato di astrazione, sistemi operativi, pixel e segnali digitali. Ma l'informatica è una scienza applicata: l'unico modo per capirla davvero è "sporcarsi le mani".

In questo modulo abbandoneremo i concetti teorici ed entreremo direttamente nel cuore del computer. Attraverso sei "Missioni" pratiche da svolgere autonomamente al PC, toglieremo l'elegante "buccia" grafica del nostro Sistema Operativo per vedere come funzionano i dati nudi e crudi. Impareremo a comandare la macchina tramite testo, a gestire la memoria come veri amministratori di sistema, a costruire circuiti logici funzionanti, a manipolare i pixel e persino a "ingannare" il computer cambiando l'estensione dei file.

---

### Sviluppo dell'Argomento

#### Missione 1: Gli Esploratori del File System (La Linea di Comando - CLI)
*   **Obiettivo:** Comprendere la differenza tra GUI e CLI, imparando a navigare nell'albero del File System senza usare il mouse.
*   **Collegamento Teorico:** Modulo 1.6 (Interfacce e Astrazione).
*   **Strumento:** Prompt dei comandi (Windows).

**Istruzioni Passo-Passo:**
1. Premete il tasto `Windows` sulla tastiera, digitate `cmd` e premete `Invio`. Si aprirà una finestra nera: benvenuti nel Prompt dei Comandi, la storica interfaccia a riga di comando (CLI) di Windows.
2. **Dove vi trovate?** La riga di testo che vedete lampeggiare (chiamata *prompt*) vi indica la vostra posizione attuale nel File System (ad esempio, `C:\Users\NomeUtente>`). Questo è il vostro percorso logico attuale (*Path*).
3. Digitate il comando `dir` e premete `Invio`. Sullo schermo apparirà la lista completa di tutti i file e le cartelle presenti nella vostra posizione attuale. State vedendo le stesse cartelle che vedreste graficamente, ma sotto forma di testo puro.
4. Digitate `cd Desktop` (o `cd OneDrive\Desktop` a seconda della configurazione della scuola) e premete `Invio`. Notate come il prompt sia cambiato. Siete appena "entrati" nella cartella Desktop.
5. Digitate `mkdir Laboratorio_CLI` e premete `Invio`. Riducete a icona la finestra nera per un secondo: noterete che sul vostro Desktop reale è magicamente apparsa una nuova cartella gialla chiamata `Laboratorio_CLI`. L'avete creata senza toccare il mouse!
6. Tornate sulla finestra nera ed entrate nella nuova cartella digitando `cd Laboratorio_CLI`.

> **La Sfida della Missione:** 
> Vogliamo creare un file di testo contenente un messaggio segreto senza usare il Blocco Note. Digitate esattamente questo comando:
> `echo "Codice di Accesso: 9982" > indizio.txt`
> Premete `Invio` e usate il comando `dir` per verificare che il file sia stato creato. Per leggerne il contenuto direttamente dalla schermata nera, digitate `type indizio.txt`. 
> Per finire, provate a tornare indietro alla cartella precedente digitando il comando `cd ..`.

---

#### Missione 2: I "Vigili Urbani" della RAM (Task Manager e Processi)
*   **Obiettivo:** Osservare la differenza tra un programma (inattivo su disco) e un processo (attivo in RAM), comprendendo il ruolo dello Scheduler.
*   **Collegamento Teorico:** Modulo 1.6 (Processi, RAM, CPU e Multitasking).
*   **Strumento:** Gestione Attività (Task Manager) di Windows.

**Istruzioni Passo-Passo:**
1. Premete contemporaneamente la combinazione di tasti `Ctrl + Shift + Esc`. Si aprirà l'utility **Gestione Attività** di Windows. Se la schermata si presenta in modalità semplificata, fate clic su "Più dettagli" in basso.
2. Selezionate la scheda **Prestazioni** (Performance) e fate clic su **CPU** e poi su **Memoria**. Osservate i grafici in tempo reale: mostrano la percentuale di calcoli eseguiti dal processore e quanta RAM è attualmente occupata dai dati.
3. Spostatevi sulla scheda **Dettagli** (o **Processi**). Qui troverete una tabella con tutti i programmi attualmente in esecuzione. 
    *   Molti di questi processi sono attivi in *background* (dietro le quinte): sono i servizi di sistema dell'OS, come l'antivirus o la gestione della rete.
    *   Notate la colonna **PID** (Process Identifier): è il numero univoco che il Sistema Operativo assegna a ogni processo per non confonderlo con gli altri.
4. Fate clic sull'intestazione della colonna **Memoria** per ordinare i processi da quello che consuma più RAM a quello che ne consuma meno. Qual è l'applicazione più pesante attiva sul vostro computer in questo momento?

> **La Sfida della Missione:**
> Aprite il browser (Chrome o Edge) e caricate un video pesante su YouTube. Tornate sul Task Manager e individuate il processo del browser. Osservate come l'occupazione di CPU e RAM sia aumentata. 
> Ora simulate il blocco di un software: fate clic destro sul processo del browser all'interno del Task Manager e selezionate **Termina attività** (o *Termina albero dei processi*). 
> Il browser si chiuderà istantaneamente. Avete appena costretto il Sistema Operativo a "sfrattare" di forza i dati del processo dalla RAM, liberando risorse per gli altri programmi.

---

#### Missione 3: L'Ingegnere Elettronico (Simulare le Porte Logiche)
*   **Obiettivo:** Progettare circuiti digitali funzionanti combinando porte logiche elementari e sperimentando le Tabelle di Verità.
*   **Collegamento Teorico:** Modulo 1.5 (Algebra di Boole, Porte Logiche, XOR).
*   **Strumento:** Browser Web (Simulatore online gratuito su *logic.ly/demo* o *circuitverse.org*).

**Istruzioni Passo-Passo:**
1. Aprite il browser e collegatevi al sito `logic.ly/demo` (oppure a un simulatore equivalente suggerito dal docente).
2. Sulla parte sinistra dello schermo troverete i componenti da trascinare sul piano di lavoro:
    *   **Input Controls:** Selezionate l'interruttore a levetta (*Toggle Switch*). Trascinatene due sullo schermo. Rappresentano i nostri ingressi logici (A e B). Cliccando su di essi, cambiano stato da 0 (spento/grigio) a 1 (acceso/blu).
    *   **Logic Gates:** Trascinate una porta **AND** e una porta **OR**.
    *   **Output Controls:** Trascinate una lampadina (*Light Bulb*).
3. **Cablaggio del circuito:** Cliccate con il mouse sul pin di uscita del primo interruttore e trascinate il filo fino al primo ingresso della porta AND. Collegate il secondo interruttore al secondo ingresso della porta AND. Infine, collegate l'uscita della porta AND alla lampadina.
4. **Verifica della Tabella di Verità:** Cliccate sugli interruttori e provate tutte le quattro combinazioni possibili. Noterete che la lampadina si accende solo ed esclusivamente quando entrambi gli interruttori sono su 1 (Vero).
5. Scollegate i fili e provate a sostituire la porta AND con una porta OR, poi con una porta XOR. Osservate come cambia il comportamento della lampadina a parità di clic sugli interruttori.

   [Interruttore A] ---\
                        |===> [Porta AND] ===> [Lampadina]
   [Interruttore B] ---/

> **La Sfida della Missione (Il circuito di sicurezza):**
> Progettate il circuito logico dell'allarme di una banca basandovi su questa regola: *"La sirena (lampadina) deve suonare se la porta è aperta OR se la finestra è rotta, MA solo se l'interruttore di sicurezza del direttore NOT è attivo"*.
> *   Utilizzate tre interruttori: A (Porta), B (Finestra), C (Chiave Sicurezza).
> *   Collegate A e B a una porta OR.
> *   Collegate C a una porta NOT.
> *   Inviate l'uscita della porta OR e l'uscita della porta NOT a una porta AND finale.
> *   Collegate la AND alla lampadina. 
> Testate il vostro circuito: la lampadina si accende se attivate la porta (A=1) mentre la sicurezza del direttore è disattivata (C=0)?

---

#### Missione 4: Vedere e Ascoltare i Bit (Il Campionamento Audio)
*   **Obiettivo:** Scoprire la natura discreta dei segnali digitali visualizzando i singoli campioni audio e sperimentando gli effetti del Teorema di Nyquist.
*   **Collegamento Teorico:** Modulo 1.3 (Conversione Analogico-Digitale, Campionamento, Nyquist).
*   **Strumento:** Software gratuito di editing audio *Audacity*.

**Istruzioni Passo-Passo:**
1. Aprite il programma **Audacity**. Se avete un microfono collegato, fate clic sul tasto rosso **Registra** e parlate per 3 o 4 secondi, altrimenti trascinate all'interno del programma un file audio MP3 qualsiasi.
2. Davanti a voi apparirà l'onda sonora. A schermo intero, l'onda sembra un disegno fluido e continuo: una perfetta rappresentazione analogica del suono.
3. **Alla ricerca dei campioni:** Selezionate lo strumento **Zoom** (la lente d'ingrandimento) o tenete premuto `Ctrl` mentre girate la rotellina del mouse verso l'alto per ingrandire l'onda. Scegliete una frazione piccolissima dell'onda e continuate a zoomare con insistenza.
4. Ad un certo punto, la linea fluida scomparirà. Al suo posto, vedrete una serie di piccoli punti grigi o blu collegati da segmenti dritti. Ognuno di quei punti è un **campione** (*sample*): una misurazione numerica della vostra voce scattata in una frazione infinitesimale di secondo.

> **La Sfida della Missione (Rompere il Teorema di Nyquist):**
> Ascoltate la vostra registrazione a velocità normale: la qualità è ottima perché il file è registrato a $44.100\text{ Hz}$ (44.100 "fotografie" del suono al secondo).
> Ora andate nel menu in basso a sinistra o nelle impostazioni di esportazione della traccia e cambiate la frequenza di campionamento (*Project Rate*) impostando un valore bassissimo, ad esempio **$8.000\text{ Hz}$** o addirittura **$2.000\text{ Hz}$**.
> Riproducete l'audio. Noterete che la voce è diventata metallica, gracchiante, quasi robotica. Avendo ridotto drasticamente il numero di campioni al secondo, avete violato la regola di Nyquist: il computer non ha più abbastanza punti per ricostruire fedelmente l'onda sonora originale, generando distorsione.

---

#### Missione 5: Cacciatori di Pixel (La Grafica Raster e il Colore)
*   **Obiettivo:** Comprendere come le immagini digitali siano memorizzate sotto forma di griglie di pixel e come i colori siano codificati tramite il sistema RGB.
*   **Collegamento Teorico:** Modulo 1.4 (Codifica delle Immagini, Pixel, RGB).
*   **Strumento:** Editor grafico raster (Paint o Paint.NET).

**Istruzioni Passo-Passo:**
1. Aprite il classico programma **Microsoft Paint** (o *Paint.NET*).
2. Andate su *File -> Proprietà* (o ridimensiona immagine) e impostate la dimensione dell'immagine a esattamente **$20 \times 20\text{ pixel}$**. Lo spazio di lavoro diventerà un quadratino microscopico al centro dello schermo.
3. Selezionate lo strumento zoom e ingrandite al massimo l'area di lavoro (fino all'800%). Se state usando un programma avanzato, attivate l'opzione "Mostra griglia dei pixel".
4. Selezionate lo strumento matita, scegliete un colore e fate un singolo clic sulla tela. Noterete che non avete tracciato una linea fluida, ma avete colorato un singolo, perfetto quadratino. Quello è un **Pixel** (*Picture Element*), l'unità fondamentale delle immagini Raster.
5. Disegnate una faccina sorridente (*smiley*) colorando i singoli quadratini uno a uno (Pixel Art). Notate come le linee diagonali appaiano a "gradini" (effetto *aliasing*).

      [ ] [X] [X] [ ]  <-- I pixel colorati formano 
      [X] [ ] [ ] [X]      le curve a gradini
      [X] [O] [O] [X]
      [ ] [X] [X] [ ]

6. **Esplorare l'RGB:** Fate clic sullo strumento di selezione del colore avanzato (Modifica colori). Troverete tre campi numerici contrassegnati con **R (Rosso)**, **G (Verde)** e **B (Blu)**, con valori che vanno da 0 a 255.
    *   Impostate R=255, G=0, B=0: otterrete il rosso puro.
    *   Impostate R=0, G=0, B=0: otterrete il nero (assenza di luce).
    *   Impostate R=255, G=255, B=255: otterrete il bianco puro (somma di tutti i colori).

> **La Sfida della Missione:**
> Trovate i valori RGB necessari per generare un perfetto colore **Giallo Evidenziatore** e poi quelli per un colore **Viola Scuro**. Scrivete i tre numeri corrispondenti (R, G, B) sul vostro quaderno.

---

#### Missione 6: Il Mistero delle Estensioni (Come l'OS Legge i File)
*   **Obiettivo:** Capire che l'estensione di un file è solo un'etichetta di astrazione per il Sistema Operativo e che il vero contenuto di un file è determinato dalla sua codifica interna.
*   **Collegamento Teorico:** Modulo 1.6 (Astrazione, File System).
*   **Strumento:** File System di Windows, Blocco Note.

**Istruzioni Passo-Passo:**
1. Prima di cominciare, dobbiamo dire a Windows di mostrarci le estensioni (altrimenti le nasconderà per astrazione). Aprite una cartella qualsiasi, andate nel menu in alto, cliccate su **Visualizza**, poi su **Mostra** e assicuratevi che ci sia la spunta su **Estensioni nomi file**.
2. Fate clic destro sul Desktop e selezionate *Nuovo -> Documento di testo*. Chiamate il file `esperimento.txt`.
3. Aprite il file, scrivete all'interno una frase (ad esempio: *"L'informatica è bellissima!"*) e salvate il file premendo `Ctrl + S`. Chiudete il Blocco Note.
4. **L'inganno:** Fate clic destro sul file `esperimento.txt` e selezionate **Rinomina**. Cambiate l'estensione finale cancellando `txt` e digitando `mp3` (il file diventerà quindi `esperimento.mp3`). Premete `Invio`.
5. Windows vi mostrerà un avviso spaventoso: *"Se si modifica l'estensione, il file potrebbe essere inutilizzabile. Modificare l'estensione?"*. Fate clic su **Sì**.
6. Notate che l'icona del file è cambiata: ora ha l'aspetto di un file musicale! Provate a fare doppio clic sul file per aprirlo. Il lettore musicale del computer si avvierà, proverà a riprodurlo per qualche secondo e poi restituirà un messaggio di errore.

> **La Sfida della Missione:**
> Il file si è rotto? No! Avete solo ingannato il Sistema Operativo, dicendogli di usare il traduttore musicale per leggere del testo. 
> Per dimostrarlo, fate clic destro sul file `esperimento.mp3`, selezionate **Apri con** e scegliete **Blocco Note**. Il file si aprirà correttamente e potrete leggere di nuovo la vostra frase intatta. 
> Ripristinate il file rinominandolo nuovamente in `esperimento.txt`.

---

### Sintesi

*   **Linea di Comando (CLI):** Abbiamo imparato a esplorare l'albero del File System usando comandi testuali come `dir`, `cd` e `mkdir`. Questo ci permette di interagire con la macchina bypassando l'astrazione grafica.
*   **Gestione dei Processi:** Tramite il Task Manager, abbiamo monitorato l'allocazione delle risorse in RAM e CPU in tempo reale e compreso come lo Scheduler organizzi i processi attivi in background e foreground.
*   **Porte Logiche:** Abbiamo cablato circuiti logici simulando porte AND, OR, NOT e XOR, dimostrando come i computer prendano decisioni traducendo formule matematiche in flussi elettrici.
*   **Campionamento Audio:** Zoomando su un'onda sonora abbiamo scoperto che il suono digitale non è continuo ma è composto da una serie di campioni numerici discreti, ed è vincolato dal Teorema di Nyquist.
*   **Grafica Raster:** Attraverso Paint abbiamo verificato che le immagini digitali sono griglie di pixel e che ogni colore è definito da una miscela quantizzata di tre canali luminosi (RGB).
*   **Estensioni dei File:** Abbiamo compreso che l'estensione (es. `.txt`, `.mp3`) è un'astrazione utilizzata dall'OS per associare rapidamente un file al suo programma, ma non altera la reale codifica binaria conservata sul disco.

---

### Glossario

*   **CLI (Command Line Interface):** Interfaccia a riga di comando che consente all'utente di interagire con il computer digitando comandi testuali sequenziali.
*   **Path (Percorso):** La stringa di testo che indica la posizione esatta di un file o di una directory all'interno della struttura ad albero del File System (es. `C:\Users\Desktop`).
*   **Processo:** Un programma in fase di esecuzione caricato nella RAM e gestito attivamente dalla CPU e dal Sistema Operativo.
*   **PID (Process Identifier):** Un numero intero univoco assegnato dal Sistema Operativo a ciascun processo attivo per poterne tracciare e gestire l'esecuzione.
*   **Frequenza di Campionamento:** Il numero di misurazioni (campioni) effettuate in un secondo per convertire un segnale analogico continuo in digitale, espresso in Hertz (Hz).
*   **Pixel (Picture Element):** Il più piccolo elemento costitutivo di un'immagine digitale raster, caratterizzato da una specifica posizione sulla griglia e da un valore di colore.
*   **RGB (Red-Green-Blue):** Modello di colore additivo basato sulla combinazione di luce rossa, verde e blu a diverse intensità (solitamente espresse con valori da 0 a 255) per riprodurre l'intera gamma cromatica su uno schermo.
*   **Estensione File:** Suffisso di pochi caratteri posto alla fine del nome di un file (preceduto da un punto) utilizzato dal sistema operativo per identificarne il formato e decidere con quale software aprirlo.
