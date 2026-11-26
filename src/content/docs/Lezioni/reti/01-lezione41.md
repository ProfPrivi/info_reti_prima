---
title: "4.1 Fondamenti delle Reti: Tipologie, Topologie e Mezzi Trasmissivi"
description: Definizione di rete di calcolatori, classificazione geografica (PAN, LAN, MAN, WAN), topologie di rete, mezzi trasmissivi (rame, fibra, Wi-Fi), banda e latenza.
---

### Introduzione

Nelle prime tre unità abbiamo studiato il computer come una macchina isolata: un processore che esegue istruzioni in codice binario, una memoria che conserva i dati, un sistema operativo che gestisce i processi e programmi capaci di risolvere problemi. Eppure oggi un computer scollegato dalla rete ci sembra quasi inutile: lavoriamo su piattaforme condivise, scambiamo messaggi in tempo reale, guardiamo video in streaming e salviamo documenti nel cloud.

La rivoluzione contemporanea nasce quando i calcolatori imparano a **comunicare tra loro**. Riprendendo lo schema della comunicazione di Shannon-Weaver visto nella lezione `1.2` (Mittente, Destinatario, Messaggio, Canale, Codice e Rumore), in questa prima lezione dell'Unità 4 scopriremo che cos'è una **Rete di Comunicazione**, come si classificano le reti per estensione e forma geometrica (**Topologia**), su quali **mezzi fisici** viaggiano i bit e cosa significano davvero i numeri che leggiamo nelle offerte di connessione (**Banda** e **Latenza**).

---

### Sviluppo dell'Argomento

#### 1. Che Cos'è una Rete di Calcolatori?
Una **Rete di Calcolatori** (*Computer Network*) è un insieme di due o più dispositivi autonomi (chiamati **Nodi** o **Host**: PC, smartphone, server, stampanti, sensori) interconnessi tra loro tramite un canale fisico o wireless, con l'obiettivo di **scambiare informazioni** e **condividere risorse** (file, stampanti, potenza di calcolo, accesso a Internet).

I vantaggi principali della messa in rete sono tre:
*   **Condivisione di risorse hardware e dati:** Una sola stampante o un solo server centrale può servire un'intera scuola o azienda.
*   **Comunicazione rapida e collaborazione:** Scambio istantaneo di messaggi, documenti e servizi tra persone geograficamente lontane.
*   **Affidabilità e Scalabilità:** I dati possono essere replicati su più macchine (backup distribuiti) e la rete può crescere facilmente aggiungendo nuovi nodi.

#### 2. Classificazione delle Reti per Estensione Geografica
Le reti si distinguono anzitutto per la dimensione dell'area fisica che coprono:

| Acronimo | Nome Completo | Estensione Tipica | Esempi Concreti |
| :--- | :--- | :--- | :--- |
| **PAN** | *Personal Area Network* | Pochi metri (attorno a una persona) | Smartphone collegato a cuffie Bluetooth, smartwatch, hotspot personale. |
| **LAN** | *Local Area Network* | Un edificio o un campus (fino a qualche centinaio di metri) | La rete di un laboratorio scolastico, di un ufficio o di casa nostra (Wi-Fi/Ethernet). |
| **MAN** | *Metropolitan Area Network* | Una città o area metropolitana (alcuni chilometri) | Rete che collega le diverse sedi comunali o i plessi universitari di una città. |
| **WAN** | *Wide Area Network* | Regioni, nazioni o interi continenti | Le reti delle grandi aziende internazionali e, come caso massimo, **Internet** (la "rete delle reti"). |

*(Nota: una LAN senza fili basata su tecnologia Wi-Fi viene spesso indicata anche come **WLAN**, Wireless LAN).*

#### 3. Le Topologie di Rete (La Forma dei Collegamenti)
La **Topologia** descrive il modo geometrico con cui i nodi sono collegati tra loro. Ogni topologia offre un diverso equilibrio tra costo dei cavi e **tolleranza ai guasti** (*fault tolerance*):

*   **Topologia a Bus:** Tutti i computer sono collegati a un unico cavo dorsale condiviso. È economica, ma se il cavo principale si spezza si blocca l'intera rete e tutti i nodi competono per lo stesso canale.
*   **Topologia ad Anello (*Ring*):** Ogni nodo è collegato esattamente ad altri due formando un cerchio chiuso. Il segnale viaggia in una direzione precisa, ma in un anello semplice il guasto di un singolo collegamento può interrompere il flusso.
*   **Topologia a Stella (*Star*):** È lo standard assoluto delle moderne LAN. Ogni dispositivo si collega con un cavo dedicato a un concentratore centrale (uno **Switch**).
    *   *Pregio:* Se si rompe il cavo di un PC, tutti gli altri continuano a funzionare regolarmente; è facilissimo aggiungere nuovi computer.
    *   *Punto critico:* Se si guasta il nodo centrale (lo Switch), la rete locale si ferma (*Single Point of Failure*).
*   **Topologia a Maglia (*Mesh*):** Ogni nodo è collegato a molti altri nodi (o a tutti, nella *maglia completa*). È costosa per una rete locale, ma offre una **tolleranza ai guasti elevatissima**: se una strada si interrompe, i dati trovano automaticamente un percorso alternativo. È il principio su cui si regge la dorsale mondiale di Internet!

<figure class="schema-svg">
  <svg viewBox="0 0 760 190" width="720" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le quattro topologie principali di rete">
    <!-- BUS -->
    <g transform="translate(15,15)">
      <rect width="165" height="145" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="20" y1="75" x2="145" y2="75" stroke="#0f5682" stroke-width="4"/>
      <line x1="40" y1="75" x2="40" y2="42" stroke="#64748b" stroke-width="2"/>
      <line x1="82" y1="75" x2="82" y2="108" stroke="#64748b" stroke-width="2"/>
      <line x1="125" y1="75" x2="125" y2="42" stroke="#64748b" stroke-width="2"/>
      <circle cx="40" cy="36" r="10" fill="#2563eb"/>
      <circle cx="82" cy="114" r="10" fill="#2563eb"/>
      <circle cx="125" cy="36" r="10" fill="#2563eb"/>
      <text x="82" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#0f172a">BUS</text>
    </g>
    <!-- ANELLO -->
    <g transform="translate(200,15)">
      <rect width="165" height="145" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <circle cx="82" cy="68" r="38" fill="none" stroke="#0f5682" stroke-width="3"/>
      <circle cx="82" cy="30" r="10" fill="#2563eb"/>
      <circle cx="120" cy="68" r="10" fill="#2563eb"/>
      <circle cx="82" cy="106" r="10" fill="#2563eb"/>
      <circle cx="44" cy="68" r="10" fill="#2563eb"/>
      <text x="82" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#0f172a">ANELLO</text>
    </g>
    <!-- STELLA -->
    <g transform="translate(385,15)">
      <rect width="165" height="145" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="82" y1="68" x2="40" y2="35" stroke="#0f5682" stroke-width="2.5"/>
      <line x1="82" y1="68" x2="124" y2="35" stroke="#0f5682" stroke-width="2.5"/>
      <line x1="82" y1="68" x2="40" y2="102" stroke="#0f5682" stroke-width="2.5"/>
      <line x1="82" y1="68" x2="124" y2="102" stroke="#0f5682" stroke-width="2.5"/>
      <rect x="66" y="56" width="32" height="24" rx="4" fill="#dbae1a" stroke="#92400e" stroke-width="2"/>
      <circle cx="40" cy="35" r="9" fill="#2563eb"/>
      <circle cx="124" cy="35" r="9" fill="#2563eb"/>
      <circle cx="40" cy="102" r="9" fill="#2563eb"/>
      <circle cx="124" cy="102" r="9" fill="#2563eb"/>
      <text x="82" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#0f172a">STELLA (LAN)</text>
    </g>
    <!-- MAGLIA -->
    <g transform="translate(570,15)">
      <rect width="165" height="145" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="42" y1="35" x2="122" y2="35" stroke="#0f5682" stroke-width="2"/>
      <line x1="42" y1="35" x2="42" y2="102" stroke="#0f5682" stroke-width="2"/>
      <line x1="42" y1="35" x2="122" y2="102" stroke="#0f5682" stroke-width="2"/>
      <line x1="122" y1="35" x2="42" y2="102" stroke="#0f5682" stroke-width="2"/>
      <line x1="122" y1="35" x2="122" y2="102" stroke="#0f5682" stroke-width="2"/>
      <line x1="42" y1="102" x2="122" y2="102" stroke="#0f5682" stroke-width="2"/>
      <circle cx="42" cy="35" r="9" fill="#16a34a"/>
      <circle cx="122" cy="35" r="9" fill="#16a34a"/>
      <circle cx="42" cy="102" r="9" fill="#16a34a"/>
      <circle cx="122" cy="102" r="9" fill="#16a34a"/>
      <text x="82" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#0f172a">MAGLIA (WAN)</text>
    </g>
  </svg>
  <figcaption>Confronto visivo tra le quattro topologie di rete: la stella concentra i cavi nello Switch, la maglia garantisce percorsi alternativi contro i guasti.</figcaption>
</figure>

#### 4. I Mezzi Trasmissivi: Su Cosa Viaggiano i Bit?
I bit (`0` e `1`) non viaggiano nel vuoto: devono essere tradotti in segnali fisici (impulsi elettrici, impulsi di luce o onde elettromagnetiche) attraverso un **Mezzo Trasmissivo**, diviso in due categorie:

##### A. Mezzi Guidati (Cablati)
*   **Doppino in Rame (Cavo Ethernet / UTP):** È il classico cavo di rete con connettore `RJ-45` composto da 4 coppie di fili di rame intrecciati (*twisted pair*) per ridurre le interferenze elettromagnetiche. Trasporta **segnali elettrici**, è economico e diffuso in tutte le LAN, ma perde potenza dopo circa `100 metri` di lunghezza.
*   **Fibra Ottica:** È un sottilissimo filamento di vetro (silice) purissimo all'interno del quale viaggiano **impulsi di luce** (laser o LED) per riflessione interna totale. È immune ai disturbi elettromagnetici, copre decine di chilometri senza perdere segnale e raggiunge velocità altissime (da Gigabit a Terabit al secondo). È la spina dorsale di Internet e dei cavi sottomarini intercontinentali.

##### B. Mezzi Non Guidati (Wireless)
*   **Onde Radio (Wi-Fi, Bluetooth, Reti Cellulari 4G/5G, Satelliti):** Trasportano i bit nell'aria sotto forma di onde elettromagnetiche. Offrono massima **mobilità**, ma sono più esposte a ostacoli fisici (muri), interferenze, attenuazione con la distanza e rischi di intercettazione (rendendo indispensabile la crittografia).

#### 5. Prestazioni di Rete: Banda vs Latenza
Due concetti che vengono spesso confusi nel linguaggio comune, ma che in informatica indicano grandezze fisiche completamente diverse:

1.  **Larghezza di Banda (*Bandwidth* / Velocità di Trasmissione):** È la quantità massima di bit che un canale può trasportare in un secondo. Si misura in **bit al secondo (`bps`)** e nei suoi multipli decimali: **`Mbps`** (Megabit/s) e **`Gbps`** (Gigabit/s).
    *   *Attenzione alla differenza tra `b` minuscola (bit) e `B` maiuscola (Byte)!* Una connessione da `100 Mbps` (Megabit al secondo) scarica al massimo `100 / 8 = 12,5 MB/s` (Megabyte al secondo), perché `1 Byte = 8 bit`!
2.  **Latenza (*Latency* / Ping):** È il **tempo di ritardo** (misurato in **millisecondi, `ms`**) necessario affinché un segnale parta dal mittente, raggiunga il destinatario e (nel caso del *Round-Trip Time*) torni indietro.

> **La Metafora dell'Autostrada:**
> Immaginate i dati come automobili su un'autostrada. La **Banda** è il **numero di corsie** (più corsie = più auto passano ogni secondo, ideale per scaricare un film pesante). La **Latenza** è la **durata del viaggio** della singola auto da casello a casello (determinante nelle videochiamate o nel gaming online, dove anche un ritardo di `200 ms` si percepisce subito come scatto o eco).

---

:::caution[Errore tipico in verifica]
Non confondere **`Mbps`** (Mega**bit** al secondo) con **`MB/s`** (Mega**Byte** al secondo): una fibra da `800 Mbps` scarica al massimo `800 / 8 = 100 MB/s`!
:::

### Mettiti alla prova (Domande Flash)

<details>
  <summary><strong>1. Domanda rapida:</strong> Se scarichi un file da <code>50 MB</code> con una linea da <code>40 Mbps</code>, quanti secondi servono teoricamente al minimo?</summary>
  <p><code>40 Mbps = 5 MB/s</code> (dividendo per 8). Quindi <code>50 MB / 5 MB/s = <strong>10 secondi</strong></code>.</p>
</details>

<details>
  <summary><strong>2. Domanda rapida:</strong> Quale topologia di rete è più resistente alla rottura di un singolo cavo e perché?</summary>
  <p>La <strong>topologia a Maglia (Mesh)</strong>, perché offre percorsi ridondanti alternativi tra i nodi.</p>
</details>

<details>
  <summary><strong>3. Vero o Falso:</strong> La fibra ottica trasmette impulsi elettrici più velocemente del rame.</summary>
  <p><strong>Falso.</strong> La fibra ottica trasmette <strong>impulsi di luce</strong> attraverso filamenti di vetro, non corrente elettrica.</p>
</details>

---

### Sintesi

*   **Rete di Calcolatori:** Insieme di nodi (host) interconnessi per scambiare dati e condividere risorse.
*   **Estensione Geografica:** PAN (personale), LAN (locale, es. scuola/casa), MAN (cittadina) e WAN (geografica/mondiale, come Internet).
*   **Topologie:** La topologia a **stella** domina le LAN moderne per semplicità e isolamento dei guasti; la topologia a **maglia** domina le grandi reti geografiche grazie ai percorsi ridondanti.
*   **Mezzi Trasmissivi:** Doppino in rame (impulsi elettrici, fino a 100 m), fibra ottica (impulsi di luce, altissima velocità e immunità ai disturbi), onde radio wireless (massima mobilità).
*   **Banda vs Latenza:** La banda misura il volume di dati al secondo (`Mbps`, ricordando `1 Byte = 8 bit`), mentre la latenza misura il tempo di ritardo del segnale (`ms`).

---

### Glossario

*   **Nodo (Host):** Qualsiasi dispositivo dotato di interfaccia di rete capace di inviare, ricevere o instradare dati all'interno di una rete.
*   **LAN (*Local Area Network*):** Rete locale ad alta velocità che collega dispositivi situati in un'area geografica ristretta (abitazione, ufficio, istituto scolastico).
*   **WAN (*Wide Area Network*):** Rete geografica estesa su grandi distanze (regioni, stati, continenti) che interconnette più LAN.
*   **Topologia di Rete:** Configurazione geometrica (fisica o logica) con cui i nodi e i collegamenti di una rete sono disposti tra loro (stella, bus, anello, maglia).
*   **Tolleranza ai Guasti (*Fault Tolerance*):** Capacità di una rete di continuare a funzionare anche in presenza della rottura di uno o più collegamenti o dispositivi.
*   **Fibra Ottica:** Mezzo trasmissivo guidato in vetro che propaga informazioni digitali sotto forma di impulsi luminosi ad altissima velocità e immunità alle interferenze elettriche.
*   **Larghezza di Banda (*Bandwidth*):** Capacità massima di trasmissione di un canale di comunicazione, espressa in bit al secondo (`bps`, `Mbps`, `Gbps`).
*   **Latenza (*Latency*):** Ritardo temporale (espresso in millisecondi, `ms`) impiegato da un segnale per viaggiare dal mittente al destinatario.
