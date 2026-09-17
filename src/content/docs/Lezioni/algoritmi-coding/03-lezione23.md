---
title: 2.3 L'Istruzione di Iterazione (Il Ciclo) con Flowgorithm
description: Esercizi di laboratorio per la traduzione di problemi in algoritmi tramite Flowgorithm.
---

## Modulo 2.3: Laboratorio di Problem Solving con Flowgorithm

### Introduzione

Nei moduli precedenti abbiamo appreso la teoria alla base del *coding visivo*: abbiamo esplorato l'alfabeto delle forme dei diagrammi di flusso, imparato a gestire la memoria tramite le variabili e, soprattutto, abbiamo insegnato al computer a prendere decisioni (Selezione) e a compiere azioni ripetitive (Iterazione). 

Tuttavia, l'informatica non è una disciplina che si impara solo leggendo. Esattamente come non si può imparare a nuotare studiando un manuale a bordo piscina, non si può diventare programmatori senza "sporcarsi le mani" con la logica. Questo modulo è concepito come una vera e propria **Palestra Algoritmica**. 
Il problem solving è un muscolo: all'inizio farete fatica a scomporre un problema nei suoi dati di *Input* e *Output*, ma con la pratica il vostro cervello inizierà a ragionare in modo strutturato e sequenziale. Affronteremo una serie di sfide di difficoltà crescente da codificare ed eseguire rigorosamente in Flowgorithm.

---

### Sviluppo dell'Argomento: La Palestra Algoritmica

**Metodologia di Lavoro:**
Per ogni esercizio, prima di aprire Flowgorithm, siete tenuti a seguire questi tre passi mentali:
1.  **Analisi:** Quali dati mi fornisce il problema (Input)? Cosa devo calcolare o mostrare alla fine (Output)?
2.  **Scelta delle Variabili:** Quali "cassetti" devo dichiarare? Di che tipo (Intero, Reale, Stringa)?
3.  **Strategia (I blocchi):** Mi serve un bivio logico (Rombo)? Devo ripetere un'azione (Esagono o Ciclo Mentre)?

Di seguito, 40 sfide algoritmiche suddivise in 4 livelli di maestria.

#### Livello 1: Riscaldamento (Sequenza e Variabili)
*In questi esercizi il flusso è lineare, dall'alto verso il basso. Concentratevi sulla corretta dichiarazione delle variabili e sull'uso dei blocchi di Input/Output e Assegnazione.*

1. **Incremento percentuale:** Scrivi un algoritmo che riceve in ingresso un numero intero $x$ e lo incrementa del 5%, visualizzando il risultato.
2. **Geometria di base:** Scrivi un programma che legge i dati necessari (basi e altezza) per calcolare e stampare a video l'area e il perimetro di un trapezio.
3. **Il Cubo:** Scrivi un programma che legge il valore del lato di un cubo e comunica la superficie totale e il volume, soltanto se il valore letto è positivo.
4. **Scambio di valori:** Effettua lo scambio dei valori di due variabili lette in input (`num1` e `num2`) avvalendoti di una terza variabile temporanea.
5. **Distanza tra punti:** Scrivi un programma che, lette le coordinate di due punti $A(x_1, y_1)$ e $B(x_2, y_2)$ nel piano cartesiano, calcola e stampa la distanza tra essi.
6. **Tempo di percorrenza:** Scrivi l'algoritmo che calcola il tempo di percorrenza, espresso in ore, minuti e secondi, impiegato da un treno alla velocità costante di 120 km/h, leggendo in input la distanza percorsa in chilometri.
7. **Separazione decimale:** Scrivi un programma che acquisisce un numero reale e separa la parte intera dalla parte decimale, stampandole entrambe.

#### Livello 2: Bivi e Decisioni (Selezione Semplice e Doppia)
*È il momento di usare il blocco Rombo (SE/ALLORA/ALTRIMENTI) per far prendere decisioni all'algoritmo in base ai dati inseriti.*

8. **Maggiore età:** Scrivi l'algoritmo che legge il valore dell'età di una persona e determina, stampando un messaggio, se è maggiorenne o minorenne.
9. **Il divisore:** Scrivi un programma che legge un numero intero e indica con un messaggio se tale numero è divisibile per 5.
10. **Il maggiore tra due (con varianti):** Scrivi un programma che legge due numeri e visualizza sullo schermo solo il maggiore di essi; nel caso in cui siano uguali, scrivi la frase "i due numeri sono uguali".
11. **Pari o Dispari (con calcolo):** Scrivi un programma che legge un numero intero e visualizza sullo schermo il suo triplo se è un numero dispari, il suo doppio se è un numero pari.
12. **Sconti al Supermercato 1:** Un supermercato applica uno sconto del 20% sull'importo che supera i 100 €. Scrivi un programma che calcola l'eventuale importo scontato e il totale da pagare.
13. **Sconti al Supermercato 2 (A scaglioni):** Ricevi in input il totale della spesa e applica uno sconto variabile: 5% sotto i 50€, 6% sotto i 65€, 7% sotto gli 80€, e 10% per importi pari o superiori a 80€. Stampa l'importo netto.
14. **Biglietteria Stadio:** Allo stadio il costo del biglietto è gratis fino a 10 anni e sopra i 65 anni; costa 5 € tra gli 11 e i 17 anni, e 10 € per tutti gli altri. Leggi l'età e calcola il biglietto.
15. **Il Traghettatore:** Il costo del biglietto di un traghetto distingue tra autovetture e camion, ripartendo i costi per cilindrata (es. auto fino a 1000cc = 20€, camion fino a 2000cc = 40€). Chiedi il tipo di veicolo e la cilindrata, quindi calcola il costo.
16. **Allarme Serra:** In una serra la temperatura normale è > 18°C. Sotto i 5°C si hanno danni gravi. Tra 5°C e 18°C vi è una situazione di pericolo. Leggi la temperatura e stampa lo stato della serra.
17. **Tipologia Triangolo:** Scrivi un programma che legge in input tre valori che rappresentano le lunghezze dei lati di un triangolo e stabilisce se si tratta di un triangolo equilatero, isoscele o scaleno.
18. **L'equazione di 2° grado:** Scrivi un programma che calcola le soluzioni di un'equazione di secondo grado ($ax^2 + bx + c = 0$) valutando il discriminante (Delta) per stabilire se le radici sono reali e distinte, coincidenti o impossibili.

#### Livello 3: Il Potere della Ripetizione (Cicli FOR e WHILE)
*In questa fase useremo i costrutti iterativi. Fate molta attenzione all'uso dei contatori e degli accumulatori (da inizializzare a zero!) per evitare i Loop Infiniti.*

19. **Stampa multipli (Ciclo FOR):** Scrivi un programma che visualizza i primi 20 numeri interi, e successivamente modificalo per leggere un numero $N$ in input e stamparne i primi $N$ multipli.
20. **Pari e Dispari in sequenza:** Scrivi il codice per visualizzare i primi $N$ numeri pari o i primi $N$ numeri dispari, dopo aver letto $N$ da input e aver chiesto all'utente quale delle due sequenze desidera.
21. **Intervallo compreso:** Scrivi un programma che legge in input due numeri (con il primo minore del secondo) e utilizza un ciclo a conteggio per visualizzare tutti i numeri pari compresi in quell'intervallo.
22. **Sommatoria (Ciclo WHILE):** Scrivi un programma che legge una sequenza di numeri interi, terminandola solo quando l'utente inserisce lo $0$. Al termine, comunica la loro somma totale.
23. **Il maggiore tra tanti:** Scrivi un programma che acquisisce numeri interi positivi finché non viene inserito lo $0$. Al termine, comunica qual è stato il numero più grande inserito.
24. **Conteggio mirato:** Scrivi un programma che legge cinque numeri e conteggia (usando variabili contatore separate) quanti di essi sono pari e quanti sono dispari.
25. **Tabellina pitagorica:** Scrivi un programma che legge in input un numero compreso tra 7 e 12 e ne visualizza sullo schermo l'intera tabellina (moltiplicandolo da 1 a 10).
26. **Potenza N-esima:** Scrivi un programma che legge un numero `NUM` e un numero `EXP` e, utilizzando un ciclo basato sulle moltiplicazioni, calcola la potenza `EXP`-esima di `NUM`.
27. **Filtro di acquisizione:** Scrivi un programma che calcola la radice quadrata di numeri finché vengono inseriti numeri che sono quadrati perfetti. Usa solo operazioni di prodotto e somma (niente funzione radice predefinita se possibile, altrimenti usa un While per il controllo input).
28. **Conversione Binaria:** Scrivi un programma che legge in ingresso una sequenza di cinque cifre binarie (solo 0 o 1), la interpreta come numero binario e ne visualizza l'equivalente in base decimale.

#### Livello 4: Sfide Algoritmiche e Maestria (Istruzioni Miste)
*Questi problemi finali richiedono di unire tutti i concetti: selezioni annidate dentro cicli, formattazioni complesse e logica matematica avanzata.*

29. **La serie di Fibonacci:** Scrivi un algoritmo che legge un numero $N$ e visualizza i primi termini della sequenza di Fibonacci (0, 1, 1, 2, 3, 5, 8...), dove ogni numero è la somma dei due precedenti.
30. **Ordinamento a tre:** Scrivi un programma che, leggendo tre numeri da tastiera, li ordina in senso crescente scambiando i valori all'interno delle variabili (ordinamento a bolla semplificato).
31. **Il Quadrilatero:** Scrivi un programma che acquisisce la misura dei quattro lati di un quadrilatero e visualizza sullo schermo la sua natura (quadrato, rettangolo, oppure generico quadrilatero scaleno).
32. **Statistiche Numeriche:** Scrivi un algoritmo che acquisisce quattro numeri interi e determina: quale dei quattro è il maggiore, il valore medio, la varianza e lo scarto quadratico medio (attenzione alle formule matematiche).
33. **Anno Bisestile Continuo:** Scrivi un programma che verifica se l'anno inserito è bisestile (divisibile per 4 ma non per 100, oppure divisibile per 400). Se l'utente inserisce un numero < 0, il programma termina; altrimenti, dopo la verifica, ricomincia da capo chiedendo un nuovo anno.
34. **Analisi Meteorologica:** Leggi un numero $N$ di coppie di valori corrispondenti alle temperature minime e massime di una giornata per $N$ città diverse (acquisisci anche i nomi delle città). Al termine, il programma deve stampare il nome della città più fredda (minima assoluta) e di quella più calda (massima assoluta).
35. **Biglietteria Teatrale Complessa:** Calcola l'importo da pagare in un teatro sapendo che il prezzo base è 12€, ma vi sono sconti: bambini gratis (<10 anni), sconto 20% (10-16 anni), sconto 50% (over 75). L'algoritmo deve inserire una persona per volta (chiedendo l'età) e sommare i prezzi. Inserire $0$ come età per terminare l'inserimento e visualizzare il totale del gruppo.
36. **Numeri Gemelli:** Scrivi un programma che acquisisce $N$ numeri di valore compreso tra 10 e 100, segnalando immediatamente con un messaggio quando viene individuato un "numero gemello" (es. 11, 22, 33, con cifre uguali).
37. **La Congettura Cinese:** Scrivi un algoritmo che, letto un numero $N$, verifica la congettura cinese del 500 a.C. la quale afferma che "$N$ è primo se $(2^N - 2)$ è divisibile per $N$".
38. **Black Friday:** Un negoziante decide che se vengono acquistati 5 prodotti, i due che costano meno vengono addebitati a solo 1 euro ciascuno. Scrivi un programma che, presi in input i costi di 5 articoli, calcoli la spesa totale. *Bonus: modificarlo per valutare anche lo sconto del 50% sul più caro e del 20% sul meno caro in caso di acquisto di soli 4 articoli.*
39. **Piani Tariffari Telefonici:** Una compagnia offre due abbonamenti: il primo costa 9€/mese con 6GB inclusi e 1€ per ogni GB extra; il secondo costa 3€/mese, 2€ per il primo GB extra e 1€ per i successivi. Visualizza il costo di entrambi per utilizzi mensili da 8 a 18 GB.
40. **Numeri Amicabili:** Scrivi un programma che ricerca e visualizza due numeri "amicabili", sapendo che sono amicabili se la somma dei divisori propri del primo numero è uguale al secondo numero, e viceversa (es. 220 e 284).

---

### Sintesi

*   **Scomposizione del Problema:** Di fronte a un testo complesso (come gli esercizi di Livello 4), la chiave del successo è scomporre il problema in micro-azioni sequenziali. 
*   **L'importanza della Logica su Carta:** Saltare direttamente sul software Flowgorithm senza aver prima analizzato le variabili o disegnato uno schizzo del diagramma (anche mentale) porta spesso a errori logici (*bug*) strutturali difficili da trovare.
*   **Gestione di Contatori e Accumulatori:** Negli esercizi con i cicli, ricordatevi costantemente la differenza tra un *contatore* (che incrementa di un valore fisso, es. `conta = conta + 1`) e un *accumulatore* (che somma valori variabili, es. `totale = totale + prezzo`), assicurandovi di inizializzarli a zero prima di entrare nel ciclo.
*   **Robustezza del Programma:** Un buon algoritmo (soprattutto dal Livello 2 in poi) deve prevedere e gestire gli inserimenti "anomali" dell'utente, come la divisione per zero o l'inserimento di numeri negativi dove sono richiesti numeri positivi (es. l'età o i lati di un triangolo).

---

### Glossario

*   **Problem Solving:** L'insieme delle metodologie e dei processi logico-cognitivi volti a individuare la soluzione ottimale a un problema complesso, traducendola in una sequenza di passi (algoritmo).
*   **Istanza di un problema:** I valori specifici forniti in input a un algoritmo durante una singola esecuzione (es. se il problema è "somma due numeri", l'istanza è "somma 5 e 3").
*   **Tracciamento (Trace):** L'esecuzione mentale o manuale (su carta) di un algoritmo passo-passo, annotando il cambiamento del valore delle variabili nel tempo, al fine di verificarne la correttezza prima dell'esecuzione sul computer.
*   **Ottimizzazione:** Il processo di revisione di un diagramma di flusso al fine di renderlo più efficiente, riducendo il numero di blocchi superflui, variabili inutilizzate o iterazioni non necessarie.
*   **Condizione di Terminazione (o Uscita):** L'espressione logica booleana che, inserita nel test di un ciclo iterativo, determina quando il computer deve interrompere la ripetizione del blocco di istruzioni (es. `età == 0`).