---
title: 1.9 Peso dell'Informazione e Compressione (Lossless vs Lossy)
description: Calcolo teorico della dimensione di file testuali, immagini raster e audio non compressi; principi della compressione senza perdita (Lossless) e con perdita (Lossy).
---

### Introduzione

Nelle lezioni `1.3` e `1.4` abbiamo scoperto come il computer digitalizza il mondo reale: i testi diventano codici ASCII o Unicode, le fotografie diventano griglie di pixel RGB, e il suono viene fotografato decine di migliaia di volte al secondo tramite campionamento e quantizzazione.

Sorge però subito una domanda concretissima: **quanto spazio occupano tutti questi bit?** Se proviamo a calcolare il peso reale di una fotografia o di un minuto di musica non compressi, scopriamo numeri enormi. Senza un trucco matematico per "restringere" i dati, sullo smartphone entrerebbero pochissime foto e guardare un video in streaming su Internet sarebbe impossibile.

In questa lezione impareremo prima a **calcolare teoricamente il peso** di un'informazione digitale grezza, e poi esploreremo la scienza della **Compressione dei Dati**, distinguendo le due grandi filosofie che governano tutti i formati moderni: **Lossless** (senza perdita) e **Lossy** (con perdita).

---

### Sviluppo dell'Argomento

#### 1. Quanto Pesa l'Informazione Non Compressa?
Conoscendo le regole di codifica della lezione `1.4`, possiamo calcolare alla lavagna la dimensione teorica di qualsiasi file "grezzo" (non compresso):

##### A. Il Peso di un Testo
In codifica ASCII estesa (1 Byte per carattere), un testo di `10.000` caratteri pesa esattamente `10.000 Byte` (circa `10 KB`). Il testo puro è estremamente leggero: l'intera Divina Commedia (circa 550.000 caratteri) occupa poco più di mezzo Megabyte!

##### B. Il Peso di un'Immagine Bitmap (RGB)
La formula teorica è:
> **Peso (in Byte) = Larghezza (pixel) × Altezza (pixel) × Byte per pixel**

Ricordando che un'immagine a colori RGB usa `3 Byte` per ogni pixel (1 Byte per il Rosso, 1 per il Verde, 1 per il Blu — ovvero 24 bit, *True Color*):
*   Una foto Full HD (`1920 × 1080` pixel) contiene `2.073.600` pixel.
*   Moltiplicando per `3 Byte`: `2.073.600 × 3 = 6.220.800 Byte` ≈ **6,2 MB** (o ~`5,93 MiB`) per una **singola** immagine non compressa!
*   E un video a 30 fotogrammi al secondo? `6,2 MB × 30 = 186 MB` per **ogni singolo secondo** di filmato (oltre 11 GB al minuto!).

##### C. Il Peso di un Audio Non Compresso (Qualità CD)
La formula teorica per un segnale audio digitale è:
> **Peso (in bit) = Frequenza di campionamento (Hz) × Risoluzione (bit per campione) × Canali × Durata (secondi)**

Per un CD Audio standard (`44.100 Hz`, `16 bit` per campione, `2` canali stereo):
*   In 1 secondo: `44.100 × 16 × 2 = 1.411.200 bit/s` ≈ `176.400 Byte/s` (~`176 KB/s`).
*   In una canzone di 3 minuti (`180` secondi): `176.400 × 180 ≈ 31,7 MB`!

È evidente perché l'informatica moderna non potrebbe esistere senza algoritmi capaci di ridurre drasticamente questi volumi di dati.

#### 2. Che Cos'è la Compressione dei Dati?
La **Compressione** è il processo matematico e algoritmico che consente di rappresentare la stessa informazione (o un'informazione percettivamente equivalente) utilizzando un **numero inferiore di bit**, eliminando le **ridondanze** (ripetizioni inutili) o i dettagli superflui.

Per misurare l'efficacia di una compressione si definisce il **Rapporto di Compressione** (rapporto tra dimensione originale e dimensione compressa): se un file da `10 MB` diventa `2 MB`, abbiamo ottenuto una compressione di `5:1` (riduzione dell'80%).

Esistono due famiglie radicalmente diverse di algoritmi di compressione: **Lossless** e **Lossy**.

#### 3. Compressione Lossless (Senza Perdita di Informazione)
La compressione **Lossless** (*letteralmente "senza perdita"*) è **completamente reversibile**: quando decomprimiamo il file, recuperiamo bit per bit l'esatta copia identica del file originale, senza perdere nemmeno una virgola.

*   **Quando è obbligatoria?** Sempre quando anche un solo bit modificato distruggerebbe il file: **testi, documenti di lavoro, codice sorgente, programmi eseguibili (`.exe`), fogli di calcolo, archivi sanitari o bancari**. Non potete permettervi che un algoritmo "approssimi" il saldo del vostro conto o una riga di codice!
*   **Formati tipici:** `.zip`, `.rar`, `.7z`, `.png` (immagini), `.flac` (audio ad alta fedeltà).

##### Come funziona? Due idee intuitive alla lavagna
1.  **Run-Length Encoding (RLE — Codifica a lunghezze di corsa):** Sostituisce lunghe sequenze dello stesso simbolo ripetuto con la coppia `(quantità, simbolo)`.
    *   *Esempio:* La riga di pixel di un cielo azzurro `AAAAAAAAAABBBBBCCCCCCCC` (23 caratteri) diventa `10A5B8C` (7 caratteri). Alla decompressione si ricostruisce fedelmente l'originale! È efficacissima su disegni tecnici, icone o schermate con ampie zone di colore uniforme.
2.  **Codifica a Dizionario e di Huffman (principio di ZIP):** Assegna codici binari **più corti** ai simboli o alle parole che compaiono molto spesso (come la lettera `e` o la parola `che` in italiano) e codici **più lunghi** ai simboli rari (come `z` o `k`), esattamente come fa il Codice Morse (dove la `E` è un solo punto `.`!).

#### 4. Compressione Lossy (Con Perdita di Informazione)
La compressione **Lossy** (*"con perdita"*) è **irreversibile**: scarta definitivamente una parte delle informazioni originali per ottenere file molto più piccoli (spesso ridotti dell'80%–95%). Una volta salvato in formato lossy, i bit eliminati non possono più essere recuperati.

*   **Come fa a funzionare senza rovinare tutto?** Sfrutta i **limiti biologici della percezione umana** (modelli *psicoacustici* e *psicovisivi*):
    *   **Nell'Audio (MP3, AAC):** L'orecchio umano non percepisce frequenze oltre una certa soglia né suoni debolissimi coperti contemporaneamente da un suono molto più forte (effetto di *mascheramento*). L'algoritmo MP3 elimina semplicemente quei suoni che il nostro cervello non sentirebbe comunque, portando la canzone da `31 MB` a circa `3 MB`.
    *   **Nelle Immagini (JPEG, WebP):** L'occhio umano è molto sensibile alle variazioni di luminosità (chiaro/scuro), ma molto meno sensibile alle sfumature microscopiche di colore tra pixel vicini. L'algoritmo JPEG semplifica queste micro-sfumature riducendo una foto da `6 MB` a `300 KB` con una perdita quasi invisibile a occhio nudo.
    *   **Nei Video (MP4 / H.264):** Oltre a comprimere ogni singolo fotogramma, non risalva l'intera immagine 30 volte al secondo: memorizza un fotogramma completo (*keyframe*) e per i fotogrammi successivi salva **solo ciò che si è mosso** rispetto all'istante precedente (lo sfondo fermo non viene ripetuto!).

##### Tabella di Confronto: Lossless vs Lossy

| Caratteristica | Compressione Lossless | Compressione Lossy |
| :--- | :--- | :--- |
| **Perdita di dati** | **Nessuna** (ricostruzione identica al 100%) | **Presente e irreversibile** |
| **Riduzione del peso** | Moderata (in genere 20% – 60%) | Molto elevata (fino al 90% – 95%) |
| **Principio teorico** | Eliminazione delle ridondanze matematiche | Eliminazione dei dettagli poco percepibili dai sensi umani |
| **Dati adatti** | Testi, programmi, archivi, loghi, radiografie | Fotografie, musica in streaming, video |
| **Formati comuni** | `.zip`, `.png`, `.flac` | `.jpg` (JPEG), `.mp3`, `.mp4` |

:::tip[Idea chiave]
Scegli **Lossless** quando ogni singolo bit è insostituibile (testi, codice, programmi, archivi); scegli **Lossy** quando conta il risparmio di spazio su contenuti multimediali destinati a occhi e orecchie umani (foto, musica, video).
:::

:::caution[Errore tipico in verifica]
Una volta salvato un file in un formato **Lossy** (es. JPEG o MP3), riconvertirlo in un formato Lossless (es. PNG o WAV) **non ripristina la qualità persa**: i bit scartati non esistono più!
:::

---

### Esercizi Carta e Penna

<details>
  <summary><strong>Esercizio 1:</strong> Calcola il peso teorico (in Byte e in KB decimali) di un'immagine RGB non compressa di dimensioni <code>100 × 100</code> pixel.</summary>
  <br />
  <strong>Risultato: <code>30.000 Byte</code> (<code>30 KB</code>)</strong><br />
  <em>Spiegazione:</em> <code>100 × 100 = 10.000</code> pixel. Ogni pixel RGB occupa <code>3 Byte</code> (24 bit). Quindi <code>10.000 × 3 = 30.000 Byte</code> = <code>30 KB</code>.
</details>

<details>
  <summary><strong>Esercizio 2:</strong> Applica la compressione Lossless RLE alla sequenza <code>WWWWWWWWBBBBWWWWW</code>. Quanti caratteri risparmi?</summary>
  <br />
  <strong>Risultato: <code>8W4B5W</code> (da 17 a 6 caratteri: risparmiati 11 caratteri)</strong><br />
  <em>Spiegazione:</em> Contiamo le ripetizioni consecutive: 8 lettere <code>W</code>, 4 lettere <code>B</code>, 5 lettere <code>W</code>.
</details>

<details>
  <summary><strong>Esercizio 3:</strong> Perché non ha alcun senso comprimere un file di codice Python (<code>.py</code>) con un algoritmo Lossy?</summary>
  <br />
  <strong>Risultato:</strong> Perché un algoritmo Lossy scarterebbe o altererebbe dei bit in modo irreversibile; nel codice sorgente anche un singolo carattere alterato provoca un errore di sintassi o un comportamento completamente sbagliato del programma. Per il codice serve rigorosamente compressione Lossless (es. <code>.zip</code>).
</details>

---

### Sintesi

*   **Dimensione dei File Grezzi:** Testi puri pesano pochissimo, mentre immagini bitmap RGB (`L × H × 3 Byte`), audio campionato e soprattutto video generano volumi di dati enormi.
*   **Compressione:** Riduce i bit necessari a memorizzare o trasmettere un file, rendendo sostenibili l'archiviazione e lo streaming su Internet.
*   **Lossless (Senza Perdita):** Reversibile al 100%, sfrutta ripetizioni e frequenze statistiche (es. RLE, Huffman/ZIP). Indispensabile per testi, programmi e dati sensibili.
*   **Lossy (Con Perdita):** Irreversibile ma molto più aggressiva, elimina informazioni poco percepibili dall'occhio o dall'orecchio umano (es. JPEG, MP3, MP4).

---

### Glossario

*   **Ridondanza:** Presenza di dati ripetuti o prevedibili all'interno di un file che possono essere rappresentati in forma più compatta senza perdere informazione.
*   **Rapporto di Compressione:** Misura dell'efficacia di un algoritmo, espressa come rapporto tra la dimensione del file originale e quella del file compresso.
*   **Compressione Lossless:** Tecnica di compressione reversibile che consente, in fase di decompressione, di ricostruire esattamente tutti i bit originali.
*   **Compressione Lossy:** Tecnica di compressione irreversibile che raggiunge elevate riduzioni di peso eliminando dettagli ritenuti poco rilevanti per la percezione umana.
*   **RLE (*Run-Length Encoding*):** Semplice algoritmo lossless che sostituisce sequenze consecutive di simboli identici con il numero di ripetizioni seguito dal simbolo stesso.
*   **Keyframe (Fotogramma Chiave):** Nella compressione video, fotogramma memorizzato per intero rispetto al quale i fotogrammi successivi registrano soltanto le variazioni di movimento.
