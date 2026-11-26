---
title: 4 Ripasso Generale (Moduli 4.1 - 4.4)
description: Test di autovalutazione teorico a risposte aperte su reti di calcolatori, topologie, commutazione di pacchetto, dispositivi, MAC, IP, DNS, HTTP e HTTPS.
---

### Introduzione

Avete completato l'Unità 4 dedicata alle **Reti di Comunicazione e a Internet**: dalle tipologie fisiche fino ai pacchetti che attraversano il mondo, dagli indirizzi MAC e IP fino al DNS e alla sicurezza HTTPS.

Qui sotto trovate **26 domande teoriche a risposta aperta** suddivise per lezione. Mettetevi alla prova rispondendo prima sul quaderno o a voce alta, poi aprite **"Mostra la risposta"** per controllare la preparazione. Buono studio!

---

### Sviluppo dell'Argomento: Domande di Ripasso

#### Sezione 1: Fondamenti, Topologie e Mezzi Trasmissivi (Modulo 4.1)

**1. Che cos'è una Rete di Calcolatori e quali sono i suoi vantaggi principali?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È un insieme di due o più dispositivi autonomi (nodi/host) interconnessi per scambiare dati e condividere risorse. I vantaggi principali sono la condivisione di risorse hardware e informative, la comunicazione rapida a distanza, la scalabilità e l'affidabilità tramite copie distribuite.</p>
</details>
<br/>

**2. Qual è la differenza tra una rete PAN, una LAN, una MAN e una WAN?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Si distinguono per estensione geografica: <strong>PAN</strong> copre pochi metri attorno a una persona (es. Bluetooth); <strong>LAN</strong> copre un edificio o campus (es. casa o scuola); <strong>MAN</strong> copre un'area urbana; <strong>WAN</strong> copre regioni, stati o continenti (es. Internet).</p>
</details>
<br/>

**3. Perché la topologia a Stella è la più usata nelle LAN, e qual è il suo unico punto critico?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché ogni PC ha un cavo dedicato verso lo Switch centrale: se si rompe un cavo o un computer, tutti gli altri continuano a funzionare e aggiungere nodi è semplicissimo. Il suo punto critico è il nodo centrale (<em>Single Point of Failure</em>): se si guasta lo Switch si ferma l'intera LAN.</p>
</details>
<br/>

**4. Perché la dorsale di Internet adotta una topologia a Maglia (*Mesh*)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché garantisce un'elevatissima <strong>tolleranza ai guasti</strong>: essendoci molti collegamenti ridondanti tra i nodi, se un cavo o un router si interrompe il traffico viene instradato automaticamente su percorsi alternativi.</p>
</details>
<br/>

**5. Quali sono i principali vantaggi della Fibra Ottica rispetto al doppino in rame Ethernet?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>La fibra ottica trasmette impulsi di luce anziché segnali elettrici: raggiunge velocità molto più alte, copre decine di chilometri senza attenuarsi (contro i 100 metri del cavo Ethernet in rame) ed è totalmente immune alle interferenze elettromagnetiche.</p>
</details>
<br/>

**6. Spiega la differenza tra Larghezza di Banda e Latenza usando la metafora dell'autostrada.**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>La <strong>banda</strong> (misurata in <code>Mbps</code>/<code>Gbps</code>) è il numero di corsie dell'autostrada: indica quanti bit passano in un secondo. La <strong>latenza</strong> (misurata in millisecondi <code>ms</code>) è la durata del viaggio di una singola auto da partenza a destinazione.</p>
</details>
<br/>

**7. Se una connessione ha una banda di `80 Mbps`, a quanti Megabyte al secondo (`MB/s`) corrisponde al massimo?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Corrisponde a <strong><code>10 MB/s</code></strong>: poiché <code>1 Byte = 8 bit</code>, per passare da Megabit al secondo (<code>Mbps</code>) a Megabyte al secondo (<code>MB/s</code>) occorre dividere per <code>8</code>.</p>
</details>
<br/>

#### Sezione 2: Architetture, Pacchetti e Dispositivi (Modulo 4.2)

**8. Qual è la differenza tra il modello Client-Server e il modello Peer-to-Peer (P2P)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Nel <strong>Client-Server</strong> i ruoli sono distinti: il server centrale custodisce i servizi e risponde alle richieste dei client. Nel <strong>Peer-to-Peer</strong> la rete è decentralizzata e ogni nodo funge contemporaneamente da client e da server condividendo risorse alla pari.</p>
</details>
<br/>

**9. In cosa consiste la Commutazione di Pacchetto e perché ha superato la Commutazione di Circuito nelle reti di dati?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Divide ogni messaggio in piccoli blocchi indipendenti (<strong>pacchetti</strong>) che viaggiano su canali condivisi seguendo percorsi dinamici e vengono riassemblati a destinazione. Supera la commutazione di circuito perché non spreca linee prenotate in esclusiva e resiste ai guasti dei singoli collegamenti.</p>
</details>
<br/>

**10. Da quali due parti principali è composto un pacchetto di rete?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Dall'<strong>Header</strong> (intestazione con indirizzi di mittente/destinatario, numero d'ordine e controlli di errore) e dal <strong>Payload</strong> (il carico utile, cioè la porzione reale dei dati trasmessi).</p>
</details>
<br/>

**11. Che cos'è un Protocollo di Comunicazione e quali sono i 4 livelli del modello TCP/IP?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Un protocollo è l'insieme di regole formali che consente a dispositivi diversi di scambiarsi dati senza ambiguità. I 4 livelli del modello TCP/IP sono: <strong>Applicazione</strong>, <strong>Trasporto</strong> (TCP/UDP), <strong>Internet</strong> (IP) e <strong>Accesso alla Rete</strong>.</p>
</details>
<br/>

**12. Che differenza c'è tra il protocollo `TCP` e il protocollo `UDP`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p><code>TCP</code> è affidabile: controlla che tutti i pacchetti arrivino integri e nell'ordine corretto chiedendo la ritrasmissione di quelli persi (ideale per web ed email). <code>UDP</code> è più leggero e veloce ma non garantisce ritrasmissioni (ideale per streaming live, videochiamate e gaming).</p>
</details>
<br/>

**13. Qual è la differenza tra il ruolo di uno Switch e il ruolo di un Router?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Lo <strong>Switch</strong> collega i dispositivi all'interno della <em>stessa</em> rete locale (LAN) smistando il traffico verso la porta fisica giusta. Il <strong>Router</strong> collega <em>reti diverse</em> tra loro (es. la LAN domestica verso Internet) scegliendo il percorso migliore per i pacchetti IP.</p>
</details>
<br/>

**14. Che funzione svolge un Access Point e che funzione svolge un Modem?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>L'<strong>Access Point</strong> permette ai dispositivi wireless (Wi-Fi) di accedere alla rete locale cablata. Il <strong>Modem</strong> converte e adatta il segnale digitale della rete locale alla linea fisica fornita dall'ISP.</p>
</details>
<br/>

#### Sezione 3: Indirizzamento MAC, IP e DNS (Modulo 4.3)

**15. Qual è la differenza concettuale tra Indirizzo MAC e Indirizzo IP?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Il <strong>MAC</strong> è l'indirizzo <em>fisico</em> permanente scolpito nella scheda di rete (48 bit in esadecimale), usato nella LAN dallo Switch. L'<strong>IP</strong> è l'indirizzo <em>logico</em> assegnato dalla rete in cui ci troviamo, usato dai Router per instradare i pacchetti su Internet.</p>
</details>
<br/>

**16. Come è strutturato un indirizzo IPv4 e perché nessuno dei suoi quattro numeri può superare `255`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È composto da 32 bit divisi in 4 ottetti da 8 bit ciascuno, scritti in decimale separati da punti (es. <code>192.168.1.10</code>). Poiché ogni ottetto contiene 8 bit (2⁸ = 256 valori), il massimo numero rappresentabile è <code>255</code> (da <code>0</code> a <code>255</code>).</p>
</details>
<br/>

**17. Qual è la differenza tra IP Pubblico e IP Privato, e a cosa serve il NAT?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>L'<strong>IP pubblico</strong> è univoco in tutto il mondo su Internet; l'<strong>IP privato</strong> (es. <code>192.168.x.x</code>) è valido solo dentro una rete locale e può essere riutilizzato in milioni di LAN diverse. Il <strong>NAT</strong> nel router traduce gli IP privati interni nell'unico IP pubblico quando i dispositivi escono su Internet.</p>
</details>
<br/>

**18. Perché è stato creato il protocollo IPv6 e quanti bit utilizza?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È stato creato per superare l'esaurimento dei 4,3 miliardi di indirizzi di IPv4. Utilizza <strong>128 bit</strong> (scritti in esadecimale), mettendo a disposizione uno spazio di indirizzi praticamente inesauribile.</p>
</details>
<br/>

**19. Che cos'è il DNS e che analogia lo descrive meglio?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Il <strong>DNS</strong> (<em>Domain Name System</em>) è il sistema distribuito che traduce i nomi di dominio leggibili dall'uomo (es. <code>www.wikipedia.org</code>) nei corrispondenti indirizzi IP numerici. Funziona esattamente come la <strong>rubrica telefonica</strong> di Internet.</p>
</details>
<br/>

**20. A cosa servono le Porte Logiche in rete (es. porta `80` o `443`)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Mentre l'IP individua il computer destinatario ("il palazzo"), la <strong>porta logica</strong> individua il singolo programma o servizio software attivo su quel computer ("l'appartamento"), permettendo a più applicazioni di usare la rete contemporaneamente.</p>
</details>
<br/>

#### Sezione 4: Internet, World Wide Web, HTTP e HTTPS (Modulo 4.4)

**21. Che differenza c'è tra Internet e il World Wide Web (WWW)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p><strong>Internet</strong> è l'infrastruttura fisica e logica mondiale di reti collegate tra loro. Il <strong>World Wide Web</strong> (inventato da Tim Berners-Lee nel 1989) è soltanto uno dei tanti servizi che viaggiano su Internet, basato su pagine ipertestuali, URL, HTTP e HTML.</p>
</details>
<br/>

**22. Quali sono le parti principali che compongono un URL?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Lo <strong>schema/protocollo</strong> (es. <code>https://</code>), il <strong>nome di dominio</strong> (es. <code>www.esempio.it</code>), la <strong>porta</strong> (spesso implicita), il <strong>percorso</strong> della risorsa (es. <code>/lezioni/reti.html</code>) e l'eventuale <strong>query string</strong> con parametri aggiuntivi.</p>
</details>
<br/>

**23. Come funziona il protocollo HTTP e qual è la differenza tra i metodi `GET` e `POST`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>HTTP funziona a coppie Richiesta (dal browser) → Risposta (dal server). Il metodo <code>GET</code> serve a richiedere e leggere una risorsa dal server; il metodo <code>POST</code> serve a inviare dati al server (es. un modulo compilato o credenziali di accesso).</p>
</details>
<br/>

**24. Cosa indicano i codici di stato HTTP `200`, `403`, `404` e `500`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p><code>200 OK</code>: richiesta riuscita; <code>403 Forbidden</code>: accesso negato (mancano i permessi); <code>404 Not Found</code>: risorsa inesistente sul server; <code>500 Internal Server Error</code>: errore interno imprevisto del server.</p>
</details>
<br/>

**25. Quali tre garanzie di sicurezza offre HTTPS (HTTP + TLS) rispetto al semplice HTTP?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>1) <strong>Riservatezza</strong> (cifra i dati in transito rendendoli illeggibili a chi intercetta i pacchetti); 2) <strong>Integrità</strong> (impedisce alterazioni nascoste lungo il percorso); 3) <strong>Autenticazione</strong> (verifica l'identità del server tramite un certificato digitale).</p>
</details>
<br/>

**26. Il lucchetto HTTPS basta da solo a garantire che un sito web sia affidabile e non una truffa?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>No: HTTPS garantisce soltanto che il canale di trasmissione è cifrato e che il server corrisponde al dominio mostrato, ma anche un sito truffaldino può avere un certificato HTTPS valido sul proprio dominio falso. Occorre sempre verificare attentamente il nome di dominio nell'URL.</p>
</details>

---
