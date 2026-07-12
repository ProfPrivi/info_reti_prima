---
title: 1.2 La Comunicazione Uomo-Macchina e il Codice Macchina
description: La Comunicazione Uomo-Macchina e il Codice Macchina
---

### Introduzione

Nella lezione precedente abbiamo visto come Alan Turing abbia immaginato una macchina capace di eseguire istruzioni scritte su un nastro. Ma sorge un problema spontaneo: **come facciamo a parlare con questa macchina?** Quando comunichiamo con un nostro amico, diamo per scontate moltissime cose. Se diciamo *"Prendi la sedia"*, lui capisce all'istante quale sedia prendere in base al contesto e a dove stiamo guardando. Con un computer questo è impossibile. I computer non hanno intuito, non provano emozioni, non hanno vissuto esperienze nel mondo reale e, soprattutto, sono macchine estremamente "letterali": fanno *esattamente* ciò che dici loro, non ciò che *intendi* dire. 

Per poter interagire con loro senza impazzire, dobbiamo prima comprendere come funziona la scienza della comunicazione e perché il computer richieda un linguaggio radicalmente diverso dal nostro: il **Codice Macchina**.

### Sviluppo

#### 1. Lo Schema Fondamentale della Comunicazione
Per capire il "dialogo" tra uomo e computer, dobbiamo isolare gli elementi che compongono qualsiasi tipo di comunicazione (umana, animale o tecnologica). Negli anni '40, studiosi come Shannon e Weaver schematizzarono questo processo. Ogni volta che un'informazione passa da un punto A a un punto B, entrano in gioco 6 elementi fondamentali:

1. **Mittente (Encoder):** Chi dà origine all'informazione e la trasforma in un messaggio.
2. **Destinatario (Decoder):** Chi riceve il messaggio e lo decodifica.
3. **Messaggio:** L'informazione concreta che si vuole trasmettere.
4. **Canale:** Il mezzo fisico attraverso cui viaggia il messaggio (es. l'aria per la voce, un cavo in fibra ottica o le onde radio del Wi-Fi).
5. **Codice (o Protocollo):** L'insieme di regole condivise da mittente e destinatario per dare un significato ai segnali (es. la lingua italiana, l'alfabeto Morse).
6. **Rumore (Interferenza):** Qualsiasi disturbo fisico o logico che altera il messaggio mentre viaggia nel canale (es. il frastuono del traffico mentre parlate, o un'interferenza elettromagnetica in un cavo).

> **Esempio pratico:** Se voi (Mittente) dite "Ciao" (Messaggio) a un compagno (Destinatario) parlando a voce alta nell'aula (Canale), la comunicazione va a buon fine solo se entrambi conoscete l'italiano (Codice) e se non c'è troppo chiasso (Rumore) che copre la vostra voce.

#### 2. Il Linguaggio Naturale e la Trappola dell'Ambiguità
Noi umani comunichiamo usando i **linguaggi naturali** (italiano, inglese, cinese, ecc.). Questi linguaggi si sono evoluti nel corso di millenni per essere efficienti tra persone che condividono lo stesso mondo. Sono ricchi di sfumature, metafore e sottintesi, ma hanno un difetto enorme per un computer: sono **ambigui**. 

> **Esempio di ambiguità linguistica:** Consideriamo la frase:
> *"La vecchia porta la sbarra"*
> Significa che una signora anziana sta trasportando un oggetto di metallo? Oppure che un'antica porta di legno sta bloccando il passaggio?
> 
> Un altro esempio informatico? Se vi dicessi: *"Sposta il mouse sul tavolo"*. State per spostare il puntatore sullo schermo sopra l'immagine di un tavolo, oppure state per prendere fisicamente il dispositivo di plastica con la mano per spostarlo sulla scrivania?

Un essere umano risolve il dubbio all'istante guardando il contesto. Un computer andrebbe in blocco totale: l'ambiguità è il nemico numero uno dell'informatica.

#### 3. Il Codice Macchina: Il linguaggio dell'hardware
Poiché la macchina è un insieme di circuiti elettronici velocissimi ma rigidi, ha bisogno di un codice che sia l'esatto opposto del linguaggio naturale: un **linguaggio formale**, matematico e privo di qualsiasi ambiguità. 

Questo linguaggio si chiama **Codice Macchina** (Machine Code). È l'unico linguaggio che il "cervello" del computer, il processore (CPU), comprende direttamente. In codice macchina non esistono sinonimi: ogni istruzione fa una micro-operazione fisica sui circuiti.

**L'abisso tra Uomo e Macchina**
Vogliamo far fare al computer un'operazione banalissima: *"Somma il numero 3 e il numero 2"*.

* **In Linguaggio di Alto Livello (Python):** `risultato = 3 + 2`
* **In Codice Macchina:**
  La CPU riceve un flusso continuo di bit diviso in "comandi" (OpCode) e "dati" (Operandi).
  `10000011` *(Il processore legge questo e apre i circuiti dell'addizione)*
  `00000011` *(Il processore carica nella sua memoria il numero 3)*
  `00000010` *(Il processore carica il numero 2)*

Per la CPU, questa stringa di 0 e 1 è musica perfetta. Ma per un umano, sviluppare il codice di Instagram o di Fortnite digitando milioni di 0 e 1 sarebbe pura follia.

#### 4. La Scelta del Binario: Perché proprio 0 e 1?
Perché i computer usano solo gli 0 e gli 1? La risposta è puramente fisica. I computer sono un ammasso di fili e interruttori microscopici (i transistor), e le informazioni viaggiano sotto forma di tensione elettrica (Volt).

Se avessimo usato il sistema decimale (cifre da 0 a 9), avremmo dovuto dividere la corrente in 10 livelli diversi. Immaginiamo che 5 Volt equivalgano al numero 5, e 4 Volt al numero 4. 
I circuiti reali non sono perfetti, si scaldano e subiscono interferenze ("rumore"). Se un componente dovesse inviare un 5 (5 Volt), ma a causa del calore ne inviasse 4,5, il computer andrebbe in confusione: è un 4 o un 5? 

Per evitare errori disastrosi, gli ingegneri hanno imposto solo **due stati diametralmente opposti** con ampie fasce di tolleranza:
* **Livello logico 0:** Tensione bassa (es. da 0 a 1,5 Volt).
* **Livello logico 1:** Tensione alta (es. da 3,5 a 5 Volt).
*(La fascia centrale tra 1,5 e 3,5 Volt è considerata "zona vietata" o zona d'ombra).*

Con questo sistema, se un segnale parte a 5 Volt ma per un'interferenza scende a 3,8 Volt, il computer lo interpreterà sempre e con certezza assoluta come un "1". Questo rende i calcolatori incredibilmente affidabili.

#### 5. I Linguaggi di Programmazione: Il ponte e i traduttori
Per non dover scrivere in zeri e uni, abbiamo inventato i **linguaggi di programmazione**, che fungono da ponte tra noi e l'hardware. 
Si dividono in due grandi famiglie:
* **Linguaggi di Basso Livello (es. Assembly):** Parlano in modo intimo con l'hardware. Al posto dei numeri binari usano brevi sigle (come `ADD`, `MOV`, `SUB`). Sono difficilissimi da usare, ma creano programmi ultra-veloci (usati per i sistemi operativi o i motori dei videogiochi).
* **Linguaggi di Alto Livello (es. Python, C++, Java):** Usano un inglese logico e semplificato (`if`, `while`, `print`). Sono comodissimi per l'uomo.

**Come comunichiamo davvero? Compilatori e Interpreti**
Se scriviamo in Python, la CPU continua a non capirci nulla. Serve un software "traduttore" che prenda il nostro codice di alto livello e ne tiri fuori il Codice Macchina. Esistono due tipi di traduttori:
1. **Il Compilatore (es. C++):** Prende tutto il vostro programma, lo traduce interamente dall'inizio alla fine creando un file eseguibile (es. un file `.exe`). È come tradurre un libro intero per poi stamparlo.
2. **L'Interprete (es. Python):** Legge la prima riga del vostro codice, la traduce in codice macchina, la fa eseguire alla CPU, poi passa alla seconda riga e così via. Funziona esattamente come un interprete simultaneo all'ONU.

---

### Sintesi

* **Il modello di Shannon-Weaver:** La comunicazione richiede Mittente, Destinatario, Messaggio, Canale, Codice e deve sopravvivere al Rumore (interferenze).
* **Linguaggio vs Codice Macchina:** I linguaggi umani (naturali) dipendono dal contesto e sono ambigui. Il computer esige un linguaggio formale (Codice Macchina) rigido, matematico e letterale.
* **Perché il binario:** I due stati (0 e 1) rappresentano fasce di tensione elettrica (bassa e alta) molto distanti tra loro, garantendo che i circuiti non si confondano in caso di cali di corrente.
* **Linguaggi e Traduttori:** Per non scrivere sequenze di bit, l'uomo usa linguaggi di Alto Livello. Software appositi (Compilatori o Interpreti) si incaricano del duro lavoro di tradurre queste istruzioni nel codice macchina che la CPU desidera.

---

### Glossario

* **Linguaggio Naturale:** Lingua sviluppata spontaneamente dagli esseri umani per comunicare, ricca di regole sociali ma soggetta ad ambiguità.
* **Codice Macchina:** Linguaggio formale nativo del processore, composto unicamente da istruzioni binarie (0 e 1) che controllano l'hardware.
* **Livello Logico:** Rappresentazione astratta (0 o 1) di una specifica gamma di tensione elettrica all'interno di un circuito digitale.
* **Linguaggio di Alto Livello:** Linguaggio di programmazione con forte astrazione dai dettagli del computer, che impiega una sintassi simile al linguaggio umano.
* **Compilatore / Interprete:** Programmi fondamentali che agiscono da "traduttori", convertendo il codice sorgente scritto dall'uomo in codice macchina eseguibile.

<button onclick="window.print()" style="padding: 10px 15px; background-color: #1a60db; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  🖨️ Stampa / Salva in PDF
</button>