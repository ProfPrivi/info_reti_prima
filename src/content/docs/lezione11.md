---
title: 1.1 Le Radici dell'Informatica, gli Automi e la Macchina di Turing
description: Le Radici dell'Informatica, gli Automi e la Macchina di Turing
---


### Introduzione

Benvenuti nel mondo dell'Informatica! Quando accendiamo uno smartphone o un computer, diamo per scontato che tutto funzioni all'istante, ma vi siete mai chiesti cosa significhi davvero questa parola?
Il termine nasce negli anni '60 in Francia (dal termine *Informatique*, coniato da Philippe Dreyfus) e deriva dalla fusione di due parole: **INFORmazione** e **autoMATICA**. 

L'informatica non è semplicemente "saper usare un computer". È la scienza che studia **come trattare, organizzare e gestire le informazioni in modo automatico**. Fin dall'antichità, la mente umana si è dimostrata geniale e creativa, ma ha un grande limite: è lenta e si stanca facilmente quando deve fare calcoli ripetitivi e noiosi. Da sempre, l'uomo ha cercato di costruire strumenti che facessero il "lavoro sporco" al posto suo.

### Sviluppo

La storia dell'informatica è, di fatto, la storia del nostro tentativo di delegare la fatica mentale a una macchina. Vediamo le tappe fondamentali di questo viaggio.

**1. L'Abaco (L'estensione della memoria)**
L'abaco (usato fin dal 2000 a.C.) è stato il primo strumento di ausilio al calcolo. Funziona tramite palline fatte scorrere su delle guide (o fili): ogni filo rappresenta unità, decine, centinaia, ecc. 
*Come funziona:* Non "calcola" da solo. L'abaco serve solo a "ricordare" i riporti, ma il calcolo vero e proprio avviene ancora nella testa dell'umano che muove le palline. Non c'è vera automazione.

<figure style="text-align: center;">
  <img src="/info_reti_prima/immagini/abaco_romano.jpg" alt="Abaco romano antico" width="50%" style="display: block; margin: 0 auto;">
  <figcaption><em>Figura 1: Un antico abaco romano</em></figcaption>
</figure>

**2. La Pascalina (Il calcolo meccanico)**
Nel 1642, il matematico francese Blaise Pascal, a soli 19 anni, inventò la "Pascalina" per aiutare il padre esattore delle tasse. Era una scatola di legno e ottone piena di ingranaggi.
*Come funziona:* Si basava su ruote dentate, ciascuna con i numeri da 0 a 9. Il genio di Pascal fu inventare il meccanismo del "riporto automatico": quando la ruota delle unità faceva un giro completo (passando dal 9 allo 0), un dentino agganciava la ruota vicina (delle decine) facendola scattare avanti di uno. Fu la prima vera calcolatrice meccanica, ma sapeva fare solo addizioni e sottrazioni e richiedeva un umano per girare le manovelle.

<figure style="text-align: center;">
  <img src="/info_reti_prima/immagini/pascalina.jpg" alt="pascalina" width="50%" style="display: block; margin: 0 auto;">
  <figcaption><em>Figura 2: Pascalina</em></figcaption>
</figure>

**3. Il Turco Meccanico (L'illusione dell'intelligenza)**
Nel XVIII secolo, l'ossessione per l'automazione portò a creazioni bizzarre. Nel 1769, Wolfgang von Kempelen presentò il "Turco Meccanico", un manichino di legno vestito con abiti orientali seduto dietro una scrivania piena di ingranaggi complessi. Questa macchina era capace di giocare a scacchi contro avversari umani, e spesso vinceva!
Sembrava il primo esempio di Intelligenza Artificiale, ma era un trucco: all'interno della scrivania, usando un sistema di specchi e magneti, era nascosto un maestro di scacchi in carne ed ossa che muoveva le braccia del manichino. Questo ci insegna una cosa fondamentale: per secoli, la vera "intelligenza automatica" è sembrata solo una finzione da illusionisti.

<figure style="text-align: center;">
  <img src="/info_reti_prima/immagini/automa_turco.jpg" alt="automa turco" width="50%" style="display: block; margin: 0 auto;">
  <figcaption><em>Figura 3: Il turco meccanico</em></figcaption>
</figure>

**4. La Sfida di Hilbert: Automatizzare il pensiero**
Negli anni '20 del Novecento, non si cercava più di costruire ingranaggi, ma si ragionava sui limiti della matematica stessa. Il grande matematico tedesco **David Hilbert** lanciò una sfida formidabile chiamata *Entscheidungsproblem* (Il Problema della Decisione).
Hilbert chiese: *Esiste una procedura meccanica, un metodo a prova di errore fatto di passaggi precisi, che ci permetta di decidere in modo automatico se una qualsiasi affermazione matematica è vera o falsa?*
Hilbert sognava una sorta di "ricetta infallibile" in cui inserire un problema matematico per ottenere sempre una risposta esatta, senza bisogno dell'intuizione umana.

**5. L'Intuizione di Alan Turing e la sua Macchina**
Nel 1936, un giovanissimo matematico inglese di nome **Alan Turing** distrusse il sogno di Hilbert. Dimostrò matematicamente che *non* può esistere un metodo automatico per risolvere tutti i problemi. Ma per dimostrarlo, Turing dovette inventare sulla carta la macchina calcolatrice perfetta.

Immaginò un dispositivo astratto, oggi noto come **Macchina di Turing**. Come funziona? Immaginate tre componenti semplicissimi:
1. **Un nastro infinito** di carta diviso in caselle. Su ogni casella può essere scritto un simbolo (es. 0, 1 o vuoto). Questo nastro rappresenta la memoria (come i nostri moderni Hard Disk o la RAM).
2. **Una testina di lettura/scrittura**, capace di scorrere sul nastro a destra e a sinistra, leggere il simbolo nella casella, cancellarlo o scriverne uno nuovo (come il processore del computer).
3. **Un registro di stato e una tabella di regole (Il Cervello)**, che dice alla macchina cosa fare. Una regola tipica è: *"Se sei nello Stato A e leggi un 1 sul nastro, cancella l'1, scrivi uno 0, spostati a destra e passa allo Stato B"*.

<figure style="text-align: center;">
  <img src="/info_reti_prima/immagini/turing.jpg" alt="Macchina di Turing" width="50%" style="display: block; margin: 0 auto;">
  <figcaption><em>Figura 4: Una moderna macchina di Turing</em></figcaption>
</figure>

Turing dimostrò una cosa che cambiò la storia dell'umanità: non serve costruire una macchina diversa per ogni tipo di calcolo. Inventò la **Macchina di Turing Universale**, capace di simulare qualsiasi altra macchina. 
Come? Semplicemente scrivendo le "tabelle di regole" *direttamente sul nastro*, insieme ai dati da calcolare. La macchina legge prima le istruzioni, e poi le esegue sui dati. 
Senza saperlo, **Alan Turing aveva appena inventato il Software (i programmi) e lo aveva separato dall'Hardware (la macchina fisica)**. Il nostro computer, il nostro smartphone o la console per i videogiochi, dal punto di vista logico, non sono altro che Macchine di Turing Universali!

---

### Sintesi

* **Il bisogno storico:** Fin dall'invenzione dell'Abaco e della Pascalina, l'uomo ha cercato di usare la tecnologia per velocizzare i calcoli e ridurre la fatica mentale, partendo da ingranaggi meccanici.
* **L'illusione vs Realtà:** Storie come il Turco Meccanico dimostrano quanto l'uomo sognasse macchine pensanti, ricorrendo persino all'inganno quando la tecnologia non era pronta.
* **La svolta logica:** Per rispondere a un problema matematico impossibile posto da David Hilbert, Alan Turing inventò un modello teorico di calcolatore.
* **L'invenzione del computer:** La Macchina di Turing si basa su un nastro (memoria), una testina (elaboratore) e un set di regole. L'idea di caricare le regole direttamente nella memoria ha dato vita alla distinzione moderna tra l'hardware (fisso e immutabile) e il software (i programmi flessibili e intercambiabili).

---

### Glossario

* **Informatica:** Scienza che si occupa del trattamento logico e automatico dell'informazione tramite elaboratori elettronici.
* **Abaco:** Antico strumento di calcolo manuale; funge da supporto alla memoria umana, non automatizza il calcolo.
* **Pascalina:** Prima calcolatrice meccanica in grado di eseguire addizioni e sottrazioni tramite un sistema di riporto automatico con ruote dentate.
* **Turco Meccanico:** Celebre falso storico del XVIII secolo; un finto automa giocatore di scacchi azionato da un essere umano nascosto al suo interno.
* **Macchina di Turing:** Modello matematico e teorico ideato nel 1936, dotato di un nastro infinito e una testina di lettura/scrittura. È considerato il capostipite ideale di tutti i computer.
* **Hardware:** L'insieme delle componenti fisiche, elettroniche e materiali di un computer.
* **Software:** L'insieme delle istruzioni, delle regole e dei programmi che indicano all'hardware quali operazioni eseguire.