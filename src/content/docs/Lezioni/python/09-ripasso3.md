---
title: 3 Ripasso Generale (Moduli 3.1 - 3.8)
description: Test di autovalutazione teorico a risposte aperte sul modello esecutivo di Python, tipi di dato, strutture di controllo, collezioni, funzioni ed eccezioni.
---

### Introduzione

Avete completato il percorso teorico dell'Unità 3 dedicata a **Python**. Dalla macchina virtuale interna (PVM) fino alle strutture dati avanzate basate su tabelle hash, alle funzioni e alla gestione degli errori, avete scoperto cosa accade davvero "sotto il cofano" di un linguaggio di programmazione moderno.

Qui sotto trovate **30 domande teoriche a risposta aperta** suddivise per sezione. Provate a formulare la risposta a voce alta o sul quaderno prima di aprire **"Mostra la risposta"**. Buono studio!

---

### Sviluppo dell'Argomento: Domande di Ripasso

#### Sezione 1: Modello Esecutivo, Tipi e Memoria (Moduli 3.1 - 3.2)

**1. Perché si dice che Python ha un modello esecutivo ibrido (bytecode + PVM)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché prima di eseguire il codice sorgente (<code>.py</code>), Python lo compila internamente in un codice intermedio portabile chiamato <strong>bytecode</strong> (<code>.pyc</code>), che viene poi interpretato ed eseguito istruzione per istruzione dalla <strong>Python Virtual Machine (PVM)</strong>.</p>
</details>
<br/>

**2. Che differenza c'è tra modalità interattiva (REPL) ed esecuzione tramite script?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>La modalità <strong>REPL</strong> (<em>Read-Eval-Print Loop</em>) esegue una riga alla volta in tempo reale senza salvare il programma, utile per test rapidi. La modalità <strong>script</strong> salva l'intero programma in un file <code>.py</code> per poterlo modificare, riutilizzare ed eseguire in modo completo.</p>
</details>
<br/>

**3. Cosa si intende per "tipizzazione dinamica" in Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Significa che non occorre dichiarare in anticipo il tipo di una variabile: il tipo è associato all'<strong>oggetto</strong> in memoria e non all'etichetta (variabile), la quale può essere riassegnata durante l'esecuzione a oggetti di tipo diverso.</p>
</details>
<br/>

**4. Perché in Python una variabile è meglio descritta come un'"etichetta" (riferimento) piuttosto che come una scatola fissa?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché in Python tutti i valori sono oggetti allocati in RAM con un proprio indirizzo univoco (ispezionabile con <code>id()</code>): la variabile non contiene il dato fisicamente, ma è un nome collegato a quell'oggetto in memoria.</p>
</details>
<br/>

**5. Che differenza c'è tra gli operatori `/`, `//` e `%` in Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p><code>/</code> esegue la divisione reale (restituisce sempre un <code>float</code>); <code>//</code> esegue la divisione intera (quoziente intero senza decimali); <code>%</code> (modulo) restituisce il <strong>resto</strong> della divisione intera.</p>
</details>
<br/>

**6. Perché è necessario il *casting* esplicito (es. `int()`, `float()`) quando si leggono numeri con `input()`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché la funzione <code>input()</code> restituisce <strong>sempre una stringa</strong> (<code>str</code>). Senza conversione esplicita, l'operatore <code>+</code> concatenerebbe i testi invece di eseguire una somma aritmetica.</p>
</details>
<br/>

#### Sezione 2: Decisioni e Iterazioni (Moduli 3.3 - 3.4)

**7. Quale ruolo svolge l'indentazione in Python secondo lo standard PEP 8?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>In Python l'indentazione (per convenzione PEP 8: <strong>4 spazi</strong>) non è estetica ma è un vincolo sintattico obbligatorio: delimita l'inizio e la fine dei blocchi interni a <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code> e <code>def</code>.</p>
</details>
<br/>

**8. Che cos'è la valutazione a cortocircuito (*Short-Circuit Evaluation*) degli operatori `and` e `or`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È un'ottimizzazione per cui Python interrompe la valutazione di un'espressione logica appena il risultato è certo: in <code>A and B</code>, se <code>A</code> è <code>False</code> non valuta nemmeno <code>B</code> (evitando ad esempio una divisione per zero nella seconda parte).</p>
</details>
<br/>

**9. Quando conviene usare un ciclo `for` e quando un ciclo `while` in Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Il ciclo <code>for</code> si usa per l'iterazione <strong>definita</strong> (scorrere una sequenza, una lista o un intervallo generato da <code>range()</code>). Il ciclo <code>while</code> si usa per l'iterazione <strong>indefinita</strong>, quando si ripete finché permane una condizione dinamica (es. validazione input o valore sentinella).</p>
</details>
<br/>

**10. Come funziona `range(inizio, fine, passo)` rispetto al valore `fine`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Il parametro <code>inizio</code> è incluso, mentre <code>fine</code> è sempre <strong>escluso</strong> (intervallo semiaperto). Ad esempio <code>range(1, 5)</code> genera i numeri <code>1, 2, 3, 4</code>.</p>
</details>
<br/>

**11. Che differenza c'è tra le istruzioni `break` e `continue` dentro un ciclo?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p><code>break</code> interrompe definitivamente e immediatamente l'intero ciclo uscendone fuori. <code>continue</code> salta soltanto le istruzioni rimaste dell'iterazione corrente e passa subito al giro successivo del ciclo.</p>
</details>
<br/>

#### Sezione 3: Liste, Tuple, Set e Dizionari (Moduli 3.5 - 3.6)

**12. Qual è la differenza tra un array statico (come in Flowgorithm) e una Lista (`list`) di Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Un array statico ha dimensione fissa e dati rigorosamente omogenei. Una lista Python è <strong>dinamica</strong> (può crescere o ridursi in esecuzione con <code>append</code>, <code>pop</code>, ecc.), mutabile e può contenere elementi anche di tipi diversi.</p>
</details>
<br/>

**13. Come funziona l'indicizzazione negativa nelle liste di Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Permette di accedere agli elementi partendo dal fondo della lista: <code>lista[-1]</code> indica l'ultimo elemento, <code>lista[-2]</code> il penultimo, senza dover conoscere o calcolare manualmente la lunghezza <code>len(lista)</code>.</p>
</details>
<br/>

**14. Cosa permette di fare lo *Slicing* `lista[inizio:fine:passo]`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Estrae una nuova sottolista dall'indice <code>inizio</code> (compreso) fino a <code>fine</code> (escluso) avanzando di <code>passo</code>. Con passo negativo (<code>lista[::-1]</code>) crea una copia invertita della sequenza.</p>
</details>
<br/>

**15. Qual è la differenza fondamentale tra una Lista e una Tupla (`tuple`)?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>La lista è <strong>mutabile</strong> (modificabile dopo la creazione), mentre la tupla è rigorosamente <strong>immutabile</strong>: protegge i dati strutturali da modifiche accidentali, occupa meno memoria e può essere usata come chiave di un dizionario.</p>
</details>
<br/>

**16. Che cos'è il *Tuple Unpacking*?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È la tecnica che estrae in un'unica istruzione i singoli elementi di una tupla assegnandoli a variabili distinte (es. <code>nome, cognome = ("Mario", "Rossi")</code>, oppure lo scambio diretto <code>a, b = b, a</code>).</p>
</details>
<br/>

**17. Quali sono le proprietà principali di un Insieme (`set`) in Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È una collezione <strong>non ordinata</strong> (senza indici) e priva di <strong>duplicati</strong>: elimina automaticamente i valori ripetuti e supporta le operazioni matematiche insiemistiche (unione <code>|</code>, intersezione <code>&amp;</code>, differenza <code>-</code>).</p>
</details>
<br/>

**18. Perché la ricerca di un elemento in un `set` o in un `dict` è enormemente più veloce che in una `list`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché in una lista Python deve scorrere gli elementi uno a uno (tempo lineare). In <code>set</code> e <code>dict</code> utilizza invece una <strong>tabella hash</strong>, calcolando istantaneamente la posizione del dato in tempo costante indipendentemente dalla dimensione della collezione.</p>
</details>
<br/>

**19. Come è strutturato un Dizionario (`dict`) e che vincolo hanno le sue chiavi?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Associa coppie <strong>chiave: valore</strong> consentendo l'accesso ai dati per significato anziché per posizione numerica. Le chiavi devono essere <strong>univoche</strong> e <strong>immutabili</strong> (es. stringhe, numeri o tuple, mai liste).</p>
</details>
<br/>

**20. Perché è buona norma usare `dizionario.get(chiave, default)` invece di `dizionario[chiave]`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Perché se la chiave non esiste, l'accesso con parentesi quadre <code>dizionario[chiave]</code> fa andare il programma in crash con un <code>KeyError</code>, mentre <code>.get()</code> restituisce in sicurezza <code>None</code> oppure il valore di default scelto.</p>
</details>
<br/>

#### Sezione 4: Funzioni, Scope e Moduli (Modulo 3.7)

**21. Cosa restituisce una funzione Python priva dell'istruzione `return`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Restituisce automaticamente l'oggetto speciale <code>None</code>, che rappresenta l'assenza di valore.</p>
</details>
<br/>

**22. Come funziona il passaggio dei parametri in Python (*Pass by Object Reference*) rispetto a oggetti immutabili e mutabili?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Python passa sempre il riferimento all'oggetto in memoria. Se l'oggetto è <strong>immutabile</strong> (<code>int</code>, <code>str</code>, <code>tuple</code>), riassegnarlo nella funzione non altera la variabile del chiamante. Se l'oggetto è <strong>mutabile</strong> (<code>list</code>, <code>dict</code>), modificarlo sul posto dentro la funzione altera permanentemente anche l'originale del chiamante.</p>
</details>
<br/>

**23. Che cosa indica la regola LEGB dello Scope in Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Indica l'ordine in cui Python cerca il nome di una variabile: <strong>L</strong>ocal (dentro la funzione), <strong>E</strong>nclosing (funzione esterna racchiudente), <strong>G</strong>lobal (livello del modulo/file) e <strong>B</strong>uilt-in (nomi predefiniti del linguaggio).</p>
</details>
<br/>

**24. A cosa servono i Moduli e i Namespace in Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>I moduli sono file <code>.py</code> che raccolgono funzioni e costanti riutilizzabili (come la Libreria Standard: <code>math</code>, <code>random</code>). I <strong>namespace</strong> separano gli identificatori di moduli diversi per evitare conflitti di nome (es. <code>math.sqrt</code>).</p>
</details>
<br/>

#### Sezione 5: Errori, Eccezioni e Qualità del Software (Modulo 3.8)

**25. Quali sono le tre categorie principali di errori in programmazione e qual è la più difficile da scoprire?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>1) <strong>Errori di Sintassi</strong> (bloccati prima dell'avvio); 2) <strong>Errori a Runtime / Eccezioni</strong> (arrestano il programma durante l'esecuzione); 3) <strong>Errori Logici (Semantici)</strong>. I più difficili sono gli <strong>errori logici</strong>, perché il programma termina senza segnalazioni ma con risultati errati.</p>
</details>
<br/>

**26. Che differenza c'è tra un `ValueError` e un `TypeError`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Il <code>TypeError</code> compare quando si applica un'operazione a tipi incompatibili (es. <code>"ciao" + 5</code>). Il <code>ValueError</code> compare quando il tipo è accettabile ma il valore concreto non è valido per quell'operazione (es. <code>int("ciao")</code>).</p>
</details>
<br/>

**27. A cosa serve il blocco `try / except / finally`?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Il blocco <code>try</code> protegge il codice potenzialmente rischioso; <code>except</code> intercetta specifiche eccezioni per gestire l'errore senza crash; <code>finally</code> contiene istruzioni di chiusura che vengono eseguite <strong>sempre</strong>, con o senza errore.</p>
</details>
<br/>

**28. Che cos'è il *Traceback* stampato da Python?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>È il rapporto diagnostico prodotto in caso di eccezione non gestita: elenca la catena delle chiamate attive sullo stack, il file, il numero di riga e il tipo esatto di eccezione che ha interrotto il programma.</p>
</details>
<br/>

**29. Che cosa significa il principio DRY (*Don't Repeat Yourself*) nella qualità del software?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Significa evitare di copiare e incollare la stessa logica in più punti del programma, raccogliendola invece in una funzione riutilizzabile: in questo modo le modifiche future e la correzione di bug si fanno in un unico punto.</p>
</details>
<br/>

**30. Cosa sono i "casi limite" (*Edge Cases*) nel testing di un algoritmo?**
<details>
  <summary><strong>Mostra la risposta</strong></summary>
  <p>Sono gli input estremi o di confine (come il valore <code>0</code>, numeri negativi, liste vuote o valori esattamente sulla soglia di una condizione) che vanno sempre verificati perché sono i punti in cui si nascondono più spesso gli errori logici.</p>
</details>

---
