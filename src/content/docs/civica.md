---
title: Uso consapevole della AI per la Prima
---

## 1. Introduzione: Benvenuti "sotto il cofano"

Essere studenti di informatica significa fare un salto di qualità: non siete più semplici "utenti" che subiscono la tecnologia, ma futuri creatori. Quando usate strumenti come ChatGPT, Gemini o Claude, non state parlando con un oracolo magico o un "cervello digitale", ma state interagendo con un software estremamente complesso. Per usarlo bene, dovete capire come funziona, quali sono i suoi limiti e come sfruttarlo per diventare programmatori migliori, non programmatori pigri.

---

## 2. Cos'è e come funziona l'IA Generativa (LLM)

Le IA con cui chattiamo oggi appartengono alla famiglia dell'**Intelligenza Artificiale Generativa** e, in particolare, sono basate su modelli chiamati **LLM** (*Large Language Models*, Grandi Modelli Linguistici).

### Come funzionano? Il "T9" potenziato
Immaginate il suggeritore di parole della tastiera del vostro smartphone (il vecchio T9), ma infinitamente più potente. Un LLM ha "letto" miliardi di testi (siti web, libri, forum, codice sorgente) e ha imparato le relazioni statistiche tra le parole. 

Quando gli fate una domanda, l'IA non "pensa" alla risposta e non "capisce" davvero il significato di ciò che le chiedete. Usa la matematica per calcolare quale parola (o parte di parola, chiamata **Token**) è statisticamente più probabile che segua quella precedente, costruendo la frase pezzo per pezzo. È un calcolatore di probabilità, non un essere pensante.

---

## 3. L'IA come Co-Pilota: le Opportunità

Nel mondo del lavoro informatico, l'IA non sostituisce il programmatore, ma lo affianca come un "co-pilota" (o *Copilot*). Ecco come dovreste usarla per migliorare:

* **Brainstorming:** Per superare il blocco del foglio bianco.  
  * *Esempio:* "Devo fare una ricerca sulle memorie di massa, suggeriscimi 5 punti chiave da trattare."
* **Tutor Personale:** Per farvi spiegare concetti difficili in modo semplice.  
  * *Esempio:* "Spiegami cos'è una variabile in programmazione usando la metafora di una scatola."
* **Rubber Duck Debugging (Ricerca degli errori):** A volte si passa un'ora su un codice che non funziona per colpa di un punto e virgola mancante o di una parentesi chiusa male. Incollare il codice nell'IA chiedendo "C'è un errore di sintassi in questo codice?" vi salva ore di frustrazione.

---

## 4. I "Bug" dell'IA: Rischi e Limiti Tecnologici

Visto che l'IA calcola probabilità e non cerca fatti verificati, ha delle "vulnerabilità" strutturali che un buon informatico deve conoscere:

* **Le Allucinazioni (Falsi d'autore):** È il difetto più pericoloso. Se l'IA non conosce una risposta, o se la sequenza di parole più probabile la porta fuori strada, inventerà informazioni (date, nomi, link a siti inesistenti, regole matematiche) mostrandosi però sicurissima di sé.  
  > **Regola d'oro:** L'IA non è Google. Non usatela mai per cercare fatti certi senza poi verificare le fonti.
* **Il Bias (I Pregiudizi):** Esiste una regola in informatica chiamata **GIGO** (*Garbage In, Garbage Out* - se inserisci spazzatura, uscirà spazzatura). Se l'IA è stata addestrata su testi presi da internet che contengono razzismo, sessismo o stereotipi, le sue risposte tenderanno a riprodurre quegli stessi pregiudizi.
* **Privacy e Sicurezza:** Tutto ciò che scrivete a un'IA "pubblica" potrebbe essere salvato e usato per ri-addestrare il modello in futuro.  
  > **Regola d'oro:** MAI inserire dati personali, password, indirizzi o, in futuro, il codice sorgente segreto dell'azienda per cui lavorate.

---

## 5. Etica Scolastica: La trappola del Copia-Incolla

Usare l'IA per farsi scrivere un intero programma o un tema e consegnarlo non è solo una violazione delle regole scolastiche, è un danno enorme a voi stessi. 

La programmazione (come la matematica o l'italiano) è come l'allenamento in palestra. Se pagate qualcuno per sollevare i pesi al posto vostro, i vostri muscoli non cresceranno. Il **Problem Solving** e la **Logica** si sviluppano solo sforzandosi di trovare la soluzione. Le aziende del futuro non assumeranno chi sa fare "copia-incolla" da ChatGPT (quello sanno farlo tutti), ma assumeranno chi capisce il codice, sa trovare gli errori nell'output dell'IA e sa costruire sistemi complessi.

---

## 6. Basi di Prompt Engineering (Ingegneria delle Istruzioni)

Il **Prompt** è il testo che scrivete all'IA. Il **Prompt Engineering** è la competenza tecnica per scrivere istruzioni che producano risultati di alta qualità.

> **Formula per un Prompt perfetto:**  
> **Ruolo + Contesto + Compito + Formato**

* **Esempio di Prompt Sbagliato (Uso Passivo):**
  > "Scrivimi un programma in C++ che fa la somma di due numeri."  
  *(Risultato: l'IA vi dà il codice pronto, voi fate copia-incolla, non imparate nulla e alla verifica prendete un'insufficienza).*

* **Esempio di Prompt Corretto (Uso Attivo/Tutor):**
  > "[Ruolo] Agisci come un professore di informatica severo ma incoraggiante. [Contesto] Sono uno studente del primo anno e devo scrivere un programma in C++ per sommare due numeri, ma non so da dove iniziare. [Compito] NON scrivermi il codice. Fammi invece un elenco dei passaggi logici (algoritmo) che devo seguire per scriverlo io da solo. [Formato] Usa un elenco puntato semplice."  
  *(Risultato: l'IA vi guida passo passo, voi scrivete il codice e imparate la logica).*

### Esempi pratici di prompting

#### Dal Copia-Incolla allo Studio Attivo
Di seguito analizzeremo alcune situazioni tipiche della vita scolastica di uno studente di informatica. Per ogni situazione vedremo il "Prompt Pigro" (da evitare, perché non vi insegna nulla e produce risultati mediocri) e il "Prompt Intelligente" (quello che un vero informatico utilizzerebbe).

Ricordate sempre la formula magica: **Ruolo + Contesto + Compito + Formato**.

---

#### Caso 1: Trovare un errore in un codice (Debugging)
Siete in laboratorio, il vostro programma in C++ o Python non compila o restituisce un risultato sbagliato. Non riuscite a capire il perché.

* **❌ Il Prompt Pigro:**
  > "Perché questo codice non funziona? [Copia-incolla del codice]"
  * **Perché è sbagliato:** L'IA vi riscriverà tutto il codice corretto. Voi farete copia-incolla per consegnarlo al prof. Non avrete capito l'errore e alla prossima verifica lo rifarete identico.
* **✅ Il Prompt Intelligente:**
  > "Agisci come un programmatore esperto che fa da mentore a uno studente alle prime armi [Ruolo + Contesto]. C'è un errore in questo codice che ho scritto, ma voglio trovarlo da solo [Compito]. Non riscrivermi il codice corretto. Dimmi solo in quale riga si trova l'errore e dammi un piccolo indizio teorico per farmi capire cosa ho sbagliato. [Formato] Sii breve e diretto. Ecco il codice: [Copia-incolla del codice]."
  * **Perché è corretto:** Vi costringe a ragionare sull'indizio e a correggere il codice con le vostre mani. È un allenamento perfetto per il problem solving.

---

#### Caso 2: Studiare un concetto tecnico teorico
Siete a casa e state studiando per l'interrogazione di Sistemi e Reti, ma il libro usa parole troppo complicate.

* **❌ Il Prompt Pigro:**
  > "Cos'è un indirizzo IP?"
  * **Perché è sbagliato:** L'IA vi risponderà con la definizione standard (stile Wikipedia). Sarà corretta, ma probabilmente userà termini tecnici che ancora non conoscete, lasciandovi più confusi di prima.
* **✅ Il Prompt Intelligente:**
  > "Agisci come un divulgatore scientifico molto bravo a spiegare le cose ai ragazzi [Ruolo]. Sono uno studente del primo anno di informatica e sto iniziando a studiare le reti [Contesto]. Spiegami in modo semplice cos'è un indirizzo IP [Compito]. Usa la metafora del sistema postale (lettere, postini, indirizzi di casa) per farmi capire il concetto. [Formato] Struttura la risposta in paragrafi brevi e usa il grassetto per le parole chiave."
  * **Perché è corretto:** Avete dato all'IA un target di riferimento (studente del 1° anno) e le avete suggerito una tecnica didattica (la metafora). Il risultato sarà perfettamente comprensibile e facile da memorizzare.

---

## 7. Oltre la Chat: Gli Agenti Intelligenti (AI Agents)

Fino ad ora abbiamo immaginato l'IA come un "pappagallo saggio" (il modello LLM) chiuso in una scatola: gli fate una domanda, lui elabora il testo e vi dà una risposta. Finisce lì. Il futuro dell'informatica, però, si basa sugli **Agenti IA**.

### Cos'è un Agente? Il cervello a cui sono state date delle "mani"
Un Agente è un sistema informatico in cui il modello linguistico (LLM) viene usato come "motore di ragionamento", ma a cui viene data anche la possibilità di usare strumenti (**Tools**) e di agire in autonomia. Invece di limitarsi a generare testo, un Agente può:

* Cercare informazioni aggiornate su Internet.
* Aprire una calcolatrice per fare conti esatti (superando i limiti matematici degli LLM).
* Aprire un terminale, scrivere del codice, eseguirlo, accorgersi che c'è un errore e riscriverlo da solo finché non funziona.

### L'Autonomia: Il ciclo "Pensiero -> Azione -> Osservazione"
Mentre in una chat normale dovete guidare l'IA passo dopo passo, a un Agente fornite solo un obiettivo finale (es. *"Crea un file di testo con il riassunto delle ultime 5 notizie di tecnologia"*). L'agente ragionerà così:

1. **Pensiero:** Devo prima cercare le notizie. Userò lo strumento "Motore di ricerca".
2. **Azione:** (Cerca su Google).
3. **Osservazione:** Ho trovato 5 articoli. Ora devo riassumerli.
4. **Azione:** (Scrive il riassunto in memoria).
5. **Pensiero:** Ora devo salvare il file sul computer dell'utente. Userò lo strumento "Gestione File".
6. **Azione:** (Salva il file sul desktop).

### I Rischi degli Agenti: La sindrome dell'Apprendista Stregone
Dare autonomia a un software che può commettere "allucinazioni" è rischioso. Se chiedete a un Agente che ha accesso al vostro computer di "fare spazio sul disco fisso", potrebbe decidere che il modo più veloce per farlo è cancellare la vostra cartella dei compiti!

Per questo, nello sviluppo degli Agenti, i programmatori usano una regola chiamata **Human in the Loop** (Umano nel ciclo): l'Agente può pianificare le azioni, ma prima di eseguire quelle critiche o distruttive (es. inviare un'email, cancellare un file, fare un acquisto) deve sempre chiedere l'autorizzazione finale all'utente umano.

---

### Esempi di definizione degli Agenti
Quando interagite con un Agente IA, non state più solo parlando con un generatore di parole, ma state dando ordini a un piccolo "robot software" che ha accesso a strumenti (Tools) e può compiere azioni. Per questo, l'approccio cambia: dovete definire un **Obiettivo** chiaro, indicare gli **Strumenti** da usare e impostare dei **Limiti** di sicurezza.

Ecco alcuni esempi di come un informatico istruisce un Agente:

#### Caso 1: Ricerca web e creazione di file
Dovete raccogliere informazioni aggiornate su una nuova tecnologia (es. l'uscita di una nuova scheda video) e salvarle in un documento.

* **❌ Il Comando Generico (Sbagliato per un Agente):**
  > "Dimmi le ultime notizie sulle schede video NVIDIA."
  * **Perché è sbagliato:** L'Agente potrebbe usare la sua memoria interna (forse non aggiornata) e inventarsi i dati (allucinazione), limitandosi a scrivervi un testo in chat.
* **✅ La Missione per l'Agente (Corretta):**
  > "[Obiettivo] Trova le informazioni più recenti sulle nuove schede video NVIDIA. [Strumenti] Usa il tool 'Browser Web' per cercare articoli degli ultimi 7 giorni. Leggi almeno due fonti diverse per verificare i dati. [Azione] Una volta trovati i dati certi, usa il tool 'Gestione File' per creare un file chiamato ricerca_gpu.txt sul mio desktop e scrivici dentro un riassunto a punti."
  * **Perché è corretto:** Avete obbligato l'Agente a usare uno strumento esterno (il browser) per evitare allucinazioni e gli avete fatto compiere un'azione reale sul vostro computer (creare il file).

---

#### Caso 2: Calcoli matematici o analisi dati complessi
Dovete fare dei calcoli precisi o analizzare un file Excel con centinaia di righe. Sappiamo che i modelli linguistici (LLM) sono pessimi in matematica perché cercano di "indovinare" il numero successivo.

* **❌ Il Comando Generico (Sbagliato per un Agente):**
  > "Qual è la radice quadrata di 5.345.891 diviso per il 12% di 450?"
  * **Perché è sbagliato:** L'IA proverà a generare la risposta come se fosse un testo, rischiando altissimo di darvi un numero sbagliato ma dall'aspetto molto convincente.
* **✅ La Missione per l'Agente (Corretta):**
  > "[Obiettivo] Risolvi questa espressione matematica: radice quadrata di 5.345.891 divisa per il 12% di 450. [Strumenti] NON provare a indovinare il risultato testualmente. Usa lo strumento 'Esecutore di Codice' (o Terminale Python) per scrivere un piccolo script che calcoli l'operazione con precisione matematica. [Azione] Esegui il codice e mostrami solo il risultato finale stampato a schermo."
  * **Perché è corretto:** L'Agente riconosce il suo limite matematico e usa lo strumento giusto (scrivere ed eseguire un codice in Python) per darvi un risultato infallibile.

---

## Glossario Essenziale (da sapere per la verifica)

* **LLM (Large Language Model):** Modello linguistico di grandi dimensioni, addestrato su enormi quantità di testo per generare linguaggio umano.
* **Prompt:** L'istruzione di input (testo) che l'utente fornisce all'intelligenza artificiale.
* **Prompt Engineering:** L'abilità di formulare prompt precisi e strutturati per ottenere il miglior risultato possibile dall'IA.
* **Allucinazione:** Fenomeno in cui l'IA genera informazioni false, inventate o illogiche, presentandole come se fossero vere e accurate.
* **Token:** Il "mattoncino" base che l'IA usa per leggere e generare il testo (può essere una parola intera, una sillaba o una singola lettera).
* **Bias:** Pregiudizio o distorsione presente nei dati di addestramento che porta l'IA a fornire risposte non neutrali o stereotipate.
* **GIGO (Garbage In, Garbage Out):** Principio informatico per cui la qualità dell'output dipende strettamente dalla qualità dell'input (e dei dati di addestramento).
* **Agente IA (AI Agent):** Un sistema che usa un modello linguistico come "cervello" per prendere decisioni, pianificare azioni in autonomia e utilizzare strumenti esterni (come browser, calcolatrici o terminali di codice).
* **Tools (Strumenti):** Le applicazioni esterne o le funzioni (es. ricerca web, esecuzione codice) che un Agente IA può chiamare e utilizzare per superare i limiti intrinseci del semplice testo.
* **Human in the Loop (HITL):** Principio di sicurezza informatica in cui un sistema autonomo (come un Agente) richiede l'intervento o l'approvazione finale di un essere umano prima di compiere azioni critiche.