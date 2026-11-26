---
title: 4.2 Architetture di Rete, Commutazione di Pacchetto e Dispositivi
description: Modelli Client-Server e Peer-to-Peer, commutazione di circuito vs commutazione di pacchetto, protocolli, cenni al modello a strati TCP/IP e dispositivi di rete (Switch, Router, Access Point).
---

### Introduzione

Ora che conosciamo i cavi, le onde radio e le forme geometriche di una rete, dobbiamo rispondere a una domanda fondamentale: **come fanno milioni di computer sparsi sul pianeta a spedirsi dati contemporaneamente sugli stessi cavi senza creare un gigantesco ingorgo incomprensibile?**

La risposta sta nell'organizzazione logica della rete. In questa lezione scopriremo quali ruoli assumono i computer quando dialogano (**Client-Server** vs **Peer-to-Peer**), l'intuizione rivoluzionaria che ha reso possibile Internet (**la commutazione di pacchetto**), il significato di **protocollo di comunicazione** e il ruolo specifico di ciascun dispositivo che vediamo ogni giorno a scuola o a casa (**Switch**, **Router**, **Access Point** e **Modem**).

---

### Sviluppo dell'Argomento

#### 1. Architetture Logiche: Client-Server vs Peer-to-Peer
A seconda di come vengono distribuiti i compiti tra i computer connessi in rete, esistono due modelli organizzativi fondamentali:

*   **Modello Client-Server:** È asimmetrico e gerarchico.
    *   Il **Server** ("servitore") è un computer potente, sempre acceso, che custodisce risorse o servizi (pagine web, email, registro elettronico, database) e resta in attesa di richieste.
    *   Il **Client** ("cliente", es. il nostro browser o smartphone) invia una **richiesta** (*Request*) al server e attende la **risposta** (*Response*).
    *   *Pregi:* Gestione centralizzata, sicurezza e backup facili da controllare. *Limite:* Se il server si guasta o viene sovraccaricato da troppe richieste contemporanee, il servizio si ferma per tutti.
*   **Modello Peer-to-Peer (P2P — "da pari a pari"):** È paritario e decentralizzato. Non esiste un server centrale dominante: ogni nodo (**Peer**) funge contemporaneamente sia da Client (chiede dati) sia da Server (condivide dati con gli altri).
    *   *Pregi:* Nessun punto singolo di guasto, costi distribuiti, ottima resistenza al traffico (es. reti *BitTorrent* o sistemi decentralizzati). *Limite:* Più difficile garantire controllo centralizzato e sicurezza.

#### 2. Commutazione di Circuito vs Commutazione di Pacchetto
Come si trasmette un messaggio lungo (ad esempio una fotografia da `2 MB`) da Milano a New York? Esistono due grandi tecniche storiche:

##### A. Commutazione di Circuito (la vecchia telefonia fissa)
Prima di iniziare a parlare, la rete costruisce e **prenota in esclusiva** un canale fisico continuo tra mittente e destinatario per tutta la durata della telefonata.
*   *Difetto per i computer:* Se nessuno parla per 10 secondi (o mentre leggete una pagina web), quella linea resta comunque occupata e sprecata. Inoltre, se un cavo lungo il percorso si interrompe, la chiamata cade istantaneamente.

##### B. Commutazione di Pacchetto (il segreto di Internet)
Negli anni '60, durante gli studi che portarono ad ARPANET (l'antenata di Internet), si affermò un'idea rivoluzionaria: **non prenotare mai una linea esclusiva, ma spezzettare ogni file in tanti piccoli blocchi indipendenti chiamati Pacchetti (*Packet*)**.

Immaginate di dover spedire per posta un romanzo di 300 pagine scrivendolo su 300 **cartoline numerate**:
1.  **Frammentazione:** Il file viene diviso in piccoli pacchetti (tipicamente fino a circa `1.500 Byte` ciascuno).
2.  **Intestazione e Carico:** Ogni pacchetto è composto da due parti:
    *   **Header (Intestazione):** La "busta", che contiene indirizzo del mittente, indirizzo del destinatario, numero d'ordine del pacchetto (es. `3 di 50`) e codici di controllo degli errori.
    *   **Payload (Carico Utile):** La piccola fetta reale del messaggio (i dati della foto o del testo).
3.  **Instradamento Dinamico:** I pacchetti viaggiano mescolati sui cavi insieme a quelli di milioni di altri utenti. Ogni incrocio della rete può instradare cartoline diverse su strade diverse per aggirare un cavo congestionato o rotto!
4.  **Riassemblaggio:** Quando i pacchetti arrivano a destinazione (anche fuori ordine!), il destinatario legge i numeri di sequenza nell'Header, li rimette in ordine e chiede la ritrasmissione di eventuali cartoline smarrite.

Questo meccanismo rende Internet straordinariamente **efficiente** (nessun cavo resta inutilizzato) e **resiliente** ai guasti.

#### 3. Protocolli e Modello a Strati (Cenni a TCP/IP)
Perché due computer di marche e sistemi operativi diversi (es. un iPhone e un server Linux) riescano a capirsi senza ambiguità, devono rispettare un **Protocollo di Comunicazione**: un insieme rigoroso di regole che stabiliscono il formato dei pacchetti, l'ordine dei messaggi e come gestire eventuali errori di trasmissione.

Esattamente come il Sistema Operativo usa l'astrazione "a cipolla" (`1.6`), anche le reti suddividono la comunicazione in **strati (livelli)** indipendenti. Il modello reale su cui gira Internet è il **Modello TCP/IP** (4 livelli):

1.  **Livello Applicazione:** I protocolli vicini all'utente e ai programmi (es. `HTTP/HTTPS` per il Web, `SMTP/IMAP` per le email, `DNS` per i nomi).
2.  **Livello Trasporto (`TCP` / `UDP`):** Divide i dati in segmenti/pacchetti e garantisce che arrivino integri e nell'ordine giusto (`TCP`, affidabile — usato per web ed email) oppure privilegia la massima velocità senza attendere ritrasmissioni (`UDP` — usato per videochiamate live e giochi online).
3.  **Livello Internet (`IP`):** Assegna gli indirizzi logici e instrada ogni pacchetto di rete in rete fino alla destinazione.
4.  **Livello Accesso alla Rete:** Gestisce la trasmissione fisica dei bit sul mezzo concreto (cavo Ethernet o onde radio Wi-Fi).

#### 4. I Dispositivi Fondamentali di una Rete
Nelle reti reali, i collegamenti tra i nodi sono governati da dispositivi hardware specializzati, ciascuno con un compito preciso:

*   **NIC (*Network Interface Card* — Scheda di Rete):** Il componente dentro ogni PC o smartphone (cablato Ethernet o Wi-Fi) che converte i bit del bus interno in segnali elettrici/radio sul mezzo trasmissivo.
*   **Switch (Commutatore di Rete):** È il cuore della topologia a stella all'interno di una **LAN**. Collega tra loro tutti i computer dello stesso laboratorio o ufficio e inoltra i dati in modo "intelligente" **solo** verso la porta del destinatario corretto (senza intasare tutti gli altri PC).
*   **Access Point (AP):** È il "ponte" radio che permette ai dispositivi wireless (smartphone, portatili) di collegarsi via Wi-Fi alla rete locale cablata.
*   **Router (Instradatore):** È il "vigile internazionale" che collega **reti diverse tra loro** (ad esempio la nostra LAN domestica o scolastica con la grande WAN di Internet). Legge l'indirizzo IP di destinazione di ogni pacchetto e sceglie la strada migliore (*routing*) per farlo proseguire.
*   **Modem (*MOdulator-DEModulator*):** Adatta il segnale digitale della nostra rete locale alla linea fisica del fornitore di servizi (**ISP**, *Internet Service Provider*, come la linea telefonica o la fibra esterna).

*Nota pratica:* Lo scatolotto che abbiamo in casa ("il router Wi-Fi") in realtà racchiude in un unico contenitore di plastica quattro dispositivi distinti: **Modem + Router + Switch (le porte Ethernet sul retro) + Access Point (le antenne Wi-Fi)**.

---

<figure class="schema-svg">
  <svg viewBox="0 0 740 165" width="700" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Struttura di un pacchetto e percorso di rete">
  <rect x="20" y="14" width="210" height="44" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
  <text x="125" y="41" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#713f12">HEADER (IP Mitt. / Dest. / N°)</text>
  <rect x="230" y="14" width="490" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="475" y="41" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#1e3a8a">PAYLOAD (Porzione reale dei dati: foto, testo, video...)</text>
  <rect x="20" y="96" width="110" height="46" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
  <text x="75" y="123" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#0f172a">Client (PC)</text>
  <line x1="130" y1="119" x2="175" y2="119" stroke="#38bdf8" stroke-width="3"/>
  <rect x="175" y="96" width="110" height="46" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="230" y="123" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#92400e">Switch (LAN)</text>
  <line x1="285" y1="119" x2="330" y2="119" stroke="#38bdf8" stroke-width="3"/>
  <rect x="330" y="96" width="115" height="46" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="387" y="123" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#14532d">Router (WAN)</text>
  <line x1="445" y1="119" x2="490" y2="119" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,4"/>
  <ellipse cx="535" cy="119" rx="45" ry="26" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="535" y="124" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#0369a1">Internet</text>
  <line x1="580" y1="119" x2="615" y2="119" stroke="#38bdf8" stroke-width="3"/>
  <rect x="615" y="96" width="105" height="46" rx="8" fill="#0f5682" stroke="#38bdf8" stroke-width="2"/>
  <text x="667" y="123" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#ffffff">Server</text>
  </svg>
  <figcaption>Anatomia di un pacchetto (Header + Payload) e catena dei dispositivi dal Client locale fino al Server remoto su Internet.</figcaption>
</figure>

:::tip[Idea chiave]
La differenza tra **Switch** e **Router** in una frase: lo **Switch** fa parlare i computer *dentro la stessa rete* (LAN); il **Router** collega *reti diverse* tra loro instradando i pacchetti verso Internet.
:::

:::caution[Errore tipico in verifica]
Nella commutazione di pacchetto, i pacchetti dello stesso file **non** sono obbligati a fare tutti la stessa strada né ad arrivare in ordine: è il protocollo **TCP** a destinazione che li riordina leggendo i numeri nell'Header!
:::

### Mettiti alla prova (Domande Flash)

<details>
  <summary><strong>1. Domanda rapida:</strong> Perché durante una videochiamata in diretta si usa spesso <code>UDP</code> invece di <code>TCP</code>?</summary>
  <p>Perché in una diretta è meglio scartare un pacchetto perso e andare avanti subito (bassa latenza) piuttosto che congelare il video per attendere la ritrasmissione tipica di <code>TCP</code>.</p>
</details>

<details>
  <summary><strong>2. Domanda rapida:</strong> Quali dispositivi sono fusi dentro il classico "router Wi-Fi" domestico?</summary>
  <p>Quattro funzioni insieme: <strong>Modem</strong> (linea ISP), <strong>Router</strong> (verso Internet), <strong>Switch</strong> (porte Ethernet LAN) e <strong>Access Point</strong> (antenne Wi-Fi).</p>
</details>

<details>
  <summary><strong>3. Vero o Falso:</strong> In un'architettura Peer-to-Peer esiste un unico server centrale che controlla tutta la rete.</summary>
  <p><strong>Falso.</strong> Tutti i nodi (peer) operano alla pari fungendo sia da client sia da server.</p>
</details>

---

### Sintesi

*   **Client-Server vs Peer-to-Peer:** Nel primo modello un server centrale eroga servizi ai client; nel secondo tutti i nodi sono paritari e condividono risorse reciprocamente.
*   **Commutazione di Pacchetto:** I dati vengono suddivisi in piccoli pacchetti (Header + Payload) che viaggiano indipendentemente su percorsi dinamici e vengono riassemblati a destinazione, garantendo efficienza e tolleranza ai guasti.
*   **Protocolli e TCP/IP:** La comunicazione in rete è governata da regole formali (protocolli) organizzate in quattro strati indipendenti (Applicazione, Trasporto, Internet, Accesso alla Rete).
*   **Dispositivi di Rete:** Lo **Switch** collega dispositivi nella stessa LAN; il **Router** instrada i pacchetti tra reti diverse; l'**Access Point** estende la LAN via Wi-Fi; il **Modem** dialoga con la linea dell'ISP.

---

### Glossario

*   **Client:** Dispositivo o software che avvia la comunicazione inviando richieste di dati o servizi verso un server.
*   **Server:** Computer o processo software dedicato a ospitare risorse ed elaborare le richieste provenienti dai client.
*   **Peer-to-Peer (P2P):** Architettura di rete decentralizzata in cui ogni nodo svolge contemporaneamente il ruolo di client e di server.
*   **Commutazione di Pacchetto (*Packet Switching*):** Tecnica di trasmissione che suddivide i messaggi in pacchetti indipendenti instradati dinamicamente sulla rete condivisa.
*   **Pacchetto (*Packet*):** Unità dati di rete composta da un'intestazione (**Header**, con indirizzi e informazioni di controllo) e da un carico utile (**Payload**, i dati veri e propri).
*   **Protocollo di Comunicazione:** Insieme formale e condiviso di regole che stabiliscono come due dispositivi debbano formattare, inviare, ricevere e verificare i dati.
*   **TCP / UDP:** I due principali protocolli del livello Trasporto: `TCP` garantisce consegna affidabile e ordinata; `UDP` privilegia bassa latenza e velocità senza ritrasmissioni.
*   **Switch:** Dispositivo di rete locale (LAN) che collega più host a stella, inoltrando i frame solo alla porta fisica del destinatario.
*   **Router:** Dispositivo che interconnette reti differenti e decide il percorso ottimale (*routing*) per instradare i pacchetti IP verso la loro destinazione.
*   **ISP (*Internet Service Provider*):** Azienda fornitrice di connettività che permette a privati, scuole e imprese di accedere all'infrastruttura di Internet.
