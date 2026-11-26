---
title: Lab 2.2 - Palestra Flowgorithm (Vettori e Sottoprogrammi)
description: Palestra algoritmica dedicata ad array monodimensionali, procedure, funzioni e passaggio di parametri in Flowgorithm.
---

### Introduzione

Nella prima palestra algoritmica ([Lab 2.1 - Palestra Flowgorithm](/info_reti_prima/lezioni/laboratorio/02-es-algoritmi-base/)) avete allenato sequenze, selezioni e cicli lavorando su singole variabili scalari. Con le lezioni `2.5` e `2.6` avete però acquisito due strumenti da veri progettisti software: i **Vettori (Array)**, per gestire intere collezioni di dati sotto un unico nome, e i **Sottoprogrammi** (**Procedure** e **Funzioni**), per scomporre problemi complessi in moduli ordinati e riutilizzabili.

Questo modulo raccoglie **20 sfide pratiche** suddivise in 3 livelli crescenti, da progettare e testare in **Flowgorithm**. Ogni livello include un piccolo suggerimento a scomparsa per aiutarvi a impostare la struttura corretta senza rovinarvi il piacere della scoperta.

---

### Sviluppo dell'Argomento: La Palestra Avanzata

**Regole d'oro prima di iniziare:**
1.  **Attenzione agli indici:** Un vettore di dimensione `N` usa sempre indici da `0` a `N - 1` (mai `N`, pena errore *Index Out of Bounds*).
2.  **Procedura o Funzione?** Se il sottoprogramma deve *restituire un risultato numerico o logico* da usare in un calcolo, create una **Funzione**; se deve solo *stampare* o *modificare un vettore/variabili*, create una **Procedura**.
3.  **Testate con il Debugging:** Usate la finestra delle variabili passo-passo per verificare il contenuto delle singole celle dell'array e il passaggio dei parametri.

---

#### Livello 1: Padronanza dei Vettori (Array Monodimensionali)
*Concentratevi sul ciclo `Per` abbinato agli indici `vettore[i]`: caricamento, scansione, filtraggio e ricerca.*

1. **Somma e Media con Soglia:** Dichiara un vettore di 8 numeri reali (voti). Caricalo da tastiera, calcola la media e, con un secondo ciclo, stampa **solo** i voti strettamente superiori alla media calcolata.
2. **Conteggio Pari e Dispari:** Carica un vettore di 10 numeri interi e conta quanti elementi sono pari, quanti sono dispari e quanti sono esattamente uguali a zero.
3. **Ricerca Lineare (Esiste il valore?):** Carica un vettore di 10 numeri interi, poi chiedi all'utente un numero `cercato`. Scorri l'array e comunica se il numero è presente (indicandone la prima posizione trovata) oppure stampa `"Valore non trovato"`.
4. **Ricerca di Minimo e Massimo:** Carica un vettore di 7 temperature reali (una settimana). Trova e stampa sia la temperatura minima sia la massima, indicando anche il numero del giorno (da 1 a 7) in cui si sono registrate.
5. **Inversione di un Vettore:** Carica un vettore `A` di 6 numeri interi. Crea un secondo vettore `B` della stessa dimensione e copialo al contrario (il primo elemento di `A` finisce nell'ultimo posto di `B`, e così via). Stampa entrambi i vettori.
6. **Vettore Somma (Element-wise):** Carica due vettori `A` e `B` di 5 numeri interi ciascuno. Genera un terzo vettore `C` in cui ogni cella `C[i]` è uguale alla somma `A[i] + B[i]`.
7. **Sconto di Fine Stagione:** Carica un vettore `prezzi` di 6 articoli. Applica direttamente all'interno del vettore uno sconto del 15% a tutti gli articoli che costano più di 50€, poi stampa il listino aggiornato.

<details>
  <summary><strong>Suggerimento per il Livello 1 (Ricerca e Inversione)</strong></summary>
  <p>Per la <strong>Ricerca Lineare</strong>, usa una variabile booleana <code>trovato = False</code> prima del ciclo e impostala a <code>True</code> appena incontri <code>vettore[i] == cercato</code>. Per l'<strong>Inversione</strong> di un vettore di dimensione <code>6</code>, l'indice speculare di <code>i</code> è sempre <code>5 - i</code> (in generale, <code>N - 1 - i</code>).</p>
</details>

---

#### Livello 2: Sottoprogrammi, Procedure e Funzioni
*Scomponete il programma in moduli nel Gestore Funzioni di Flowgorithm, lasciando il `Main` pulito e leggibile.*

8. **Funzione `AreaRettangolo` e `PerimetroRettangolo`:** Crea due funzioni distinte che ricevono `base` e `altezza` (Reali) per valore e restituiscono rispettivamente l'area e il perimetro. Nel `Main`, leggi i dati una volta sola e richiama entrambe le funzioni.
9. **Funzione Booleana `IsPari`:** Progetta una funzione `IsPari(n)` che riceve un intero `n` e restituisce `True` se è pari, `False` se è dispari. Usala nel `Main` dentro un ciclo per verificare 5 numeri inseriti dall'utente.
10. **Funzione `MassimoTraTre`:** Crea prima una funzione `MaxDue(a, b)` che restituisce il maggiore tra due numeri. Poi sfrutta `MaxDue` per calcolare nel `Main` il maggiore tra tre numeri (`MaxDue(MaxDue(x, y), z)`), dimostrando la composizione di funzioni!
11. **Convertitore di Temperature:** Scrivi due funzioni: `CelsiusToFahrenheit(c)` (formula: `c * 9 / 5 + 32`) e `CelsiusToKelvin(c)` (`c + 273.15`). Nel `Main`, crea un menu che chiede all'utente quale conversione eseguire.
12. **Procedura `StampaTabellina`:** Crea una procedura (tipo di ritorno `None`) che riceve un intero `n` e stampa a video la sua tabellina da `n * 1` a `n * 10`, incorniciata da una riga di trattini.
13. **Funzione `Potenza`:** Reimplementa il calcolo della potenza `base ^ esponente` (con esponente intero non negativo) all'interno di una funzione che usa un ciclo `Per`, senza usare l'operatore `^` predefinito.
14. **Procedura con Passaggio per Riferimento (`OrdinaDue`):** Crea una procedura `OrdinaDue(a, b)` con entrambi i parametri passati **per riferimento**. Se `a > b`, la procedura deve scambiare i loro valori in modo che, al ritorno nel `Main`, `a` sia sempre minore o uguale a `b`.

<details>
  <summary><strong>Suggerimento per il Livello 2 (Chiamata di Procedure vs Funzioni)</strong></summary>
  <p>Ricorda che in Flowgorithm una <strong>Procedura</strong> (ritorno <code>None</code>) si invoca con il blocco <strong>Chiamata (Call)</strong>, mentre una <strong>Funzione</strong> si invoca all'interno di un'assegnazione (es. <code>ris = IsPari(x)</code>) o direttamente dentro un <code>Output</code> o un blocco <code>Se</code>.</p>
</details>

---

#### Livello 3: Sfide Integrate (Vettori + Sottoprogrammi)
*È il momento di combinare le due tecniche: passare un intero vettore a procedure e funzioni per costruire piccoli software modulari.*

15. **Caricamento e Stampa Modulari:** Scrivi due procedure: `CaricaVettore(v, n)` (che legge da tastiera `n` valori dentro il vettore `v`) e `StampaVettore(v, n)` (che li mostra a schermo). Nel `Main` limita il flusso alla dichiarazione del vettore e alle due chiamate `Call`.
16. **Funzione `CalcolaMediaVettore`:** Scrivi una funzione che riceve un vettore di `n` numeri reali e la sua dimensione `n`, e restituisce la media aritmetica. Usala nel `Main` per confrontare la media di due classi diverse (`classeA` e `classeB`).
17. **Funzione `ContaOccorrenze`:** Scrivi una funzione `ContaOccorrenze(v, n, target)` che conta e restituisce quante volte il numero `target` compare all'interno del vettore `v`.
18. **Funzione `VerificaOrdinato`:** Scrivi una funzione booleana che riceve un vettore di interi `v` di dimensione `n` e restituisce `True` se gli elementi sono già disposti in ordine crescente (`v[0] <= v[1] <= ... <= v[n-1]`), oppure `False` altrimenti.
19. **Mini-Registro Scolastico Modulare:** Progetta un programma completo per gestire i voti di 6 studenti (due vettori paralleli: `nomi` di tipo Stringa e `voti` di tipo Reale). Realizza:
    *   una procedura `InserisciDati` per caricare nomi e voti (con ciclo `Fai` per validare che ogni voto sia tra `1` e `10`);
    *   una funzione `MediaClasse` che restituisce la media;
    *   una procedura `StampaPromossi` che elenca solo gli studenti con voto `>= 6`.
20. **Sfida Finale — Ordinamento a Bolle (*Bubble Sort*) Modulare:** Crea una procedura `OrdinaVettore(v, n)` che ordina in senso crescente un vettore di `n` numeri confrontando coppie di elementi adiacenti (`v[j]` e `v[j + 1]`) e scambiandoli tramite la procedura `ScambiaValori` vista nella lezione `2.6`.

<details>
  <summary><strong>Suggerimento per il Livello 3 (Vettori Paralleli e Bubble Sort)</strong></summary>
  <p>Nei <strong>vettori paralleli</strong> (esercizio 19), la posizione <code>i</code> collega logicamente i due array: <code>voti[i]</code> è il voto dello studente <code>nomi[i]</code>. Nel <strong>Bubble Sort</strong> (esercizio 20), servono due cicli <code>Per</code> annidati: uno esterno per ripetere le passate e uno interno che confronta <code>v[j] > v[j + 1]</code> fermandosi a <code>n - 2</code> per non uscire dai limiti del vettore.</p>
</details>

---

### Sintesi

*   **Scomposizione Prima del Disegno:** Nei problemi con array e moduli, progettate sempre prima l'elenco delle firme dei sottoprogrammi (nome, parametri in ingresso, eventuale valore di ritorno) e solo dopo disegnate i singoli diagrammi.
*   **Vettori Paralleli:** Quando un'entità possiede più caratteristiche di tipi diversi (es. nome e voto), in Flowgorithm si usano due vettori della stessa lunghezza sincronizzati dallo stesso indice `i`.
*   **Riuso Reale:** L'esercizio `16` dimostra il vero vantaggio della modularità: la stessa funzione `CalcolaMediaVettore` analizza sia `classeA` sia `classeB` senza duplicare nemmeno un blocco.

---

### Glossario

*   **Ricerca Lineare (Sequenziale):** Algoritmo che scandisce un vettore elemento per elemento dall'indice `0` fino a trovare il valore cercato o raggiungere la fine dell'array.
*   **Vettori Paralleli:** Coppia o insieme di array di uguale dimensione in cui gli elementi situati al medesimo indice `i` descrivono attributi diversi della stessa entità logica.
*   **Composizione di Funzioni:** Tecnica che consiste nel passare il valore restituito da una funzione direttamente come parametro attuale in ingresso a un'altra funzione.
*   **Bubble Sort (Ordinamento a Bolle):** Algoritmo classico di ordinamento che confronta ripetutamente coppie di elementi adiacenti di un vettore e li scambia se non sono nell'ordine desiderato, facendo "risalire" gradualmente i valori maggiori verso la fine dell'array.
