---
title: "4.4 Internet e il World Wide Web: URL, HTTP e Sicurezza HTTPS"
description: Differenza tra Internet e World Wide Web, anatomia di un URL, ciclo richiesta-risposta HTTP, codici di stato principali e principi teorici di HTTPS e crittografia in transito.
---

### Introduzione

Nel linguaggio di tutti i giorni usiamo spesso le parole **"Internet"** e **"Web"** come se fossero sinonimi perfetti. Per un futuro informatico, però, confonderle è un errore concettuale importante: esattamente come non si confonde la rete ferroviaria (i binari) con uno specifico treno che viaggia sopra quei binari.

In questa lezione conclusiva dell'Unità 4 chiariremo la distinzione tra **Internet** e **World Wide Web**, smonteremo pezzo per pezzo la struttura di un indirizzo web (**URL**), osserveremo il dialogo invisibile tra browser e server (**HTTP**) e capiremo cosa garantisce davvero il piccolo lucchetto (**HTTPS**) nella barra del browser quando navighiamo o accediamo ai nostri account.

---

### Sviluppo dell'Argomento

#### 1. Internet vs World Wide Web: Due Realtà Distinte
*   **Internet** (nata alla fine degli anni '60 dal progetto ARPANET e consolidata negli anni '80 col protocollo TCP/IP) è l'**infrastruttura fisica e logica mondiale**: l'insieme di cavi in fibra ottica, router, server, onde radio e protocolli (`IP`, `TCP`) che collega miliardi di dispositivi sul pianeta. È "la rete delle autostrade".
*   **Il World Wide Web (WWW)** è invece **uno dei tanti servizi** applicativi che viaggiano sopra Internet (accanto alla posta elettronica, alle chat, alle videochiamate o al trasferimento file).

Il Web fu inventato nel **1989** al **CERN di Ginevra** dall'informatico britannico **Tim Berners-Lee**, che desiderava permettere agli scienziati di condividere documenti collegati tra loro da rimandi cliccabili (**ipertesto** / *hyperlink*). Per farlo, Berners-Lee creò tre pilastri standard ancora oggi alla base di ogni sito:
1.  **URL:** Il sistema di indirizzamento univoco per ogni risorsa (pagina, immagine, documento).
2.  **HTTP:** Il protocollo con cui il browser chiede le pagine al server.
3.  **HTML (*HyperText Markup Language*):** Il linguaggio di marcatura con cui viene descritta la struttura delle pagine web.

#### 2. Anatomia di un URL (*Uniform Resource Locator*)
Ogni volta che clicchiamo un link, usiamo un **URL**, cioè l'indirizzo completo e univoco di una risorsa sul Web. Analizziamo le sue parti fondamentali su un esempio reale:

```text
https://www.esempio.it:443/lezioni/reti.html?anno=2026
└─┬──┘  └─────┬──────┘ └┬┘└───────┬────────┘└───┬────┘
Schema     Dominio    Porta    Percorso     Query String
(Prot.)   (Host DNS) (opz.)     (Path)     (Parametri)
```

1.  **Schema / Protocollo (`https://`):** Indica *come* dialogare con il server (in questo caso HTTP cifrato).
2.  **Nome di Dominio (`www.esempio.it`):** Il nome mnemonico che il **DNS** (`4.3`) tradurrà nell'indirizzo IP del server. Si legge gerarchicamente da destra a sinistra: `.it` è il dominio di primo livello (*TLD*), `esempio` è il dominio principale, `www` è il sottodominio.
3.  **Porta (`:443`):** Spesso omessa perché i browser usano automaticamente le porte standard (`80` per HTTP, `443` per HTTPS).
4.  **Percorso / Path (`/lezioni/reti.html`):** Indica la risorsa esatta richiesta all'interno del server (proprio come un percorso del File System!).
5.  **Query String (`?anno=2026`):** Parametri aggiuntivi opzionali passati al server (es. le parole digitate in un motore di ricerca).

#### 3. Il Dialogo Client-Server: Il Protocollo HTTP
Quando digitate un URL e premete Invio, il vostro **Browser** (il *Client*) e il **Web Server** avviano una conversazione basata sul protocollo **HTTP (*HyperText Transfer Protocol*)**, strutturata in coppie **Richiesta (*Request*) → Risposta (*Response*)**:

1.  Il browser risolve il dominio tramite **DNS** e ottiene l'IP del server.
2.  Invia al server una **Richiesta HTTP** specificando:
    *   il **Metodo** (i due più importanti sono **`GET`**, per *chiedere/leggere* una risorsa come una pagina web, e **`POST`**, per *inviare* dati al server come un modulo di login o un messaggio);
    *   il percorso richiesto e alcune intestazioni (*Header*, ad esempio la lingua preferita o il tipo di browser).
3.  Il server elabora la richiesta e restituisce una **Risposta HTTP** contenente un **Codice di Stato numerico** (3 cifre) seguito dal contenuto richiesto (es. il codice HTML della pagina o un'immagine).

##### I Codici di Stato HTTP più Famosi

| Famiglia | Codice Esempio | Significato Teorico |
| :--- | :--- | :--- |
| **2xx (Successo)** | **`200 OK`** | La richiesta è riuscita e il server ha inviato regolarmente la risorsa. |
| **3xx (Reindirizzamento)** | **`301 / 302 Redirect`** | La risorsa è stata spostata a un altro URL: il browser segue il nuovo indirizzo. |
| **4xx (Errore del Client)** | **`403 Forbidden`** | Accesso negato: non hai i permessi necessari per vedere questa risorsa. |
| **4xx (Errore del Client)** | **`404 Not Found`** | La risorsa richiesta non esiste sul server (es. indirizzo digitato male o pagina rimossa). |
| **5xx (Errore del Server)** | **`500 Internal Server Error`** | Il server ha riscontrato un guasto interno o un bug durante l'elaborazione. |

#### 4. Perché HTTP non Basta: La Sicurezza di HTTPS
Il protocollo `HTTP` originale ha un grave limite di sicurezza: trasmette tutti i pacchetti **in chiaro** (come cartoline aperte senza busta). Poiché su Internet i pacchetti attraversano decine di router e spesso reti Wi-Fi pubbliche condivise, un malintenzionato posto lungo il percorso (*attacco Man-in-the-Middle*) potrebbe leggere password, messaggi o dati bancari in transito.

Per risolvere questo problema, oggi la quasi totalità del Web utilizza **HTTPS (*HTTP Secure*)**, che aggiunge tra HTTP e TCP uno strato di sicurezza crittografica chiamato **TLS (*Transport Layer Security*)**.

A livello concettuale, **HTTPS garantisce tre proprietà fondamentali**:
1.  **Riservatezza (Crittografia):** I dati viaggiano trasformati in un testo cifrato incomprensibile a chiunque intercetti i pacchetti lungo la rete; solo il browser e il server possiedono le chiavi matematiche per decifrarli.
2.  **Integrità:** Impedisce che qualcuno alteri di nascosto i dati o inietti codice malevolo nella pagina durante il tragitto.
3.  **Autenticazione (Certificato Digitale):** Il server esibisce un "passaporto elettronico" (il **Certificato Digitale**, firmato da un'autorità fidata chiamata *Certification Authority*) che garantisce al browser che quel server è davvero chi dice di essere (es. davvero il sito della vostra banca e non una copia falsa).

*Attenzione a un falso mito:* Il lucchetto HTTPS garantisce che la **comunicazione è cifrata** e che il dominio corrisponde al certificato, ma **non garantisce che il contenuto del sito sia onesto** (anche un sito truffaldino può avere un certificato HTTPS valido sul proprio dominio!). Verificare sempre con attenzione il **nome di dominio** nell'URL resta la prima difesa dell'utente consapevole.

---

<figure class="schema-svg">
  <svg viewBox="0 0 740 185" width="700" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ciclo DNS e HTTP/HTTPS tra Browser e Web Server">
  <rect x="20" y="55" width="140" height="75" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="90" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#1e3a8a">BROWSER</text>
  <text x="90" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#334155">(Client)</text>
  <rect x="295" y="10" width="150" height="48" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="370" y="39" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#92400e">1. Server DNS</text>
  <line x1="160" y1="68" x2="295" y2="34" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,4"/>
  <text x="215" y="36" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#f59e0b">Dominio ➔ IP</text>
  <rect x="570" y="55" width="150" height="75" rx="10" fill="#0f5682" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="645" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#ffffff">WEB SERVER</text>
  <text x="645" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#cbd5e1">(Porta 443 HTTPS)</text>
  <line x1="160" y1="88" x2="570" y2="88" stroke="#22c55e" stroke-width="3"/>
  <polygon points="570,88 558,82 558,94" fill="#22c55e"/>
  <text x="365" y="80" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#22c55e">2. Richiesta HTTPS cifrata (GET /lezioni/reti.html)</text>
  <line x1="570" y1="122" x2="160" y2="122" stroke="#a78bfa" stroke-width="3"/>
  <polygon points="160,122 172,116 172,128" fill="#a78bfa"/>
  <text x="365" y="144" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#a78bfa">3. Risposta HTTPS (200 OK + pagina HTML cifrata)</text>
  </svg>
  <figcaption>Sequenza completa di caricamento di una pagina web sicura: risoluzione DNS, richiesta HTTPS cifrata e risposta con codice di stato.</figcaption>
</figure>

:::tip[Idea chiave]
**Internet** è l'infrastruttura di rete mondiale; il **World Wide Web** è uno dei servizi che viaggiano su Internet grazie ai tre pilastri creati da Tim Berners-Lee: **URL**, **HTTP** e **HTML**.
:::

:::caution[Errore tipico in verifica]
Il lucchetto **HTTPS** protegge il *canale di trasmissione* (crittografia e identità del server), ma **non certifica l'onestà del sito**: anche un sito di phishing può avere HTTPS sul proprio dominio fasullo!
:::

### Mettiti alla prova (Domande Flash)

<details>
  <summary><strong>1. Domanda rapida:</strong> Che cosa significa ricevere dal server il codice di stato HTTP <code>404</code> invece di <code>500</code>?</summary>
  <p><code>404 Not Found</code> indica che la risorsa richiesta dal client non esiste (errore lato client/URL errato); <code>500</code> indica invece un guasto o bug interno del server.</p>
</details>

<details>
  <summary><strong>2. Domanda rapida:</strong> Quali tre garanzie fornisce lo strato TLS in HTTPS?</summary>
  <p><strong>Riservatezza</strong> (crittografia), <strong>Integrità</strong> (nessuna modifica nascosta) e <strong>Autenticazione</strong> del server tramite certificato digitale.</p>
</details>

<details>
  <summary><strong>3. Vero o Falso:</strong> La posta elettronica e WhatsApp fanno parte del World Wide Web.</summary>
  <p><strong>Falso.</strong> Sono servizi che viaggiano su <strong>Internet</strong> usando protocolli propri, distinti dal World Wide Web.</p>
</details>

---

### Sintesi

*   **Internet vs Web:** Internet è l'infrastruttura mondiale di reti interconnesse; il World Wide Web (ideato da Tim Berners-Lee nel 1989) è uno dei servizi che viaggiano su Internet, basato su URL, HTTP e HTML.
*   **URL:** Identifica univocamente ogni risorsa web combinando protocollo, dominio (risolto dal DNS), porta, percorso ed eventuali parametri.
*   **HTTP:** Modello Client-Server basato su richieste (metodi `GET`, `POST`) e risposte identificate da codici di stato (`200`, `301`, `403`, `404`, `500`).
*   **HTTPS (HTTP + TLS):** Protegge il traffico web garantendo **riservatezza** (crittografia), **integrità** dei dati e **autenticazione** del server tramite certificato digitale.

---

### Glossario

*   **World Wide Web (WWW):** Servizio applicativo di Internet basato su documenti ipertestuali collegati tra loro tramite link, accessibili attraverso un browser.
*   **Browser:** Applicazione client (es. Firefox, Chrome, Edge, Safari) che invia richieste HTTP/HTTPS ai server web e interpreta il codice ricevuto (HTML/CSS/JS) per disegnare le pagine sullo schermo.
*   **URL (*Uniform Resource Locator*):** Stringa standardizzata che identifica in modo univoco l'indirizzo e il protocollo di accesso a una specifica risorsa sul Web.
*   **HTTP (*HyperText Transfer Protocol*):** Protocollo applicativo del Web che regola lo scambio di richieste e risposte tra client e web server.
*   **Codice di Stato HTTP:** Numero di tre cifre incluso in ogni risposta HTTP per comunicare sinteticamente l'esito della richiesta (`2xx` successo, `3xx` redirect, `4xx` errore client, `5xx` errore server).
*   **HTTPS / TLS:** Estensione sicura del protocollo HTTP che sfrutta la crittografia TLS per cifrare i dati in transito, verificarne l'integrità e autenticare il server.
*   **Certificato Digitale:** Documento elettronico firmato da un'autorità certificatrice fidata che attesta l'identità autentica di un server web associandola alla sua chiave crittografica.
*   **Attacco *Man-in-the-Middle* (MitM):** Tecnica di intercettazione in cui un soggetto malevolo si frappone segretamente nella comunicazione tra client e server per spiare o alterare i dati trasmessi in chiaro.
