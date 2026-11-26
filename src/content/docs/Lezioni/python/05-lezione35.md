---
title: 3.5 Strutture Dati Monodimensionali
description: Dagli array statici alle liste dinamiche, indicizzazione diretta e negativa, slicing, mutabilità, metodi di manipolazione e algoritmi di scansione con cicli for.
---

### Introduzione

Nel Modulo 2.5 abbiamo affrontato una svolta concettuale determinante per la nostra formazione da programmatori: abbiamo superato il limite delle variabili scalari isolate. Abbiamo compreso che dichiarare manualmente `voto1`, `voto2`, `voto3` per memorizzare le valutazioni di una classe è una pratica insostenibile e che l'informatica risolve questo problema raggruppando i dati all'interno di collezioni ordinate, note come **vettori** o **array**.

Tuttavia, quando lavoravamo nell'ambiente grafico di Flowgorithm, eravamo costretti a sottostare a una rigida limitazione dell'architettura hardware tradizionale: la **dimensione fissa e statica**. Prima di avviare il programma dovevamo dichiarare preventivamente al calcolatore: *"Riserva nella memoria RAM esattamente 10 celle contigue"*. Ma cosa accade se, durante l'esecuzione del software, arrivano 11 elementi? Il programma va in crash per errore di indice fuori limite (*Index Out of Bounds*). E cosa accade se ne utilizziamo soltanto due? Sprechiamo inutilmente otto celle di memoria RAM.

Nella vita reale i dati non sono quasi mai statici: il carrello di un sito di e-commerce si riempie e si svuota dinamicamente, i messaggi in una chat aumentano a ogni secondo e i sensori di una centralina meteorologica continuano a registrare rilevazioni per un tempo imprevedibile.

Python abbatte questa rigidità attraverso la sua struttura dati fondamentale: la **Lista** (`list`).

Le liste di Python sono **strutture dati dinamiche, mutabili ed eterogenee**. Non richiedono alcuna allocazione preventiva di memoria: possono crescere, rimpicciolirsi, riordinarsi e accogliere qualsiasi combinazione di dati con una flessibilità sconosciuta ai linguaggi a tipizzazione statica. In questa lezione esploreremo come Python gestisce le liste nella memoria RAM, impareremo a navigarle tramite indici positivi e indici negativi, scopriremo l'efficacia della tecnica dello **Slicing** per estrarre porzioni di collezioni senza scrivere cicli, e padroneggeremo i metodi interni essenziali per inserire, rimuovere e manipolare dati in contesti applicativi reali.

---

### Sviluppo dell'Argomento

#### 1. Dagli Array Statici alla Lista Dinamica: Dietro le Quinte della RAM
Nel Capitolo 2 abbiamo appreso come la memoria centrale del computer sia organizzata fisicamente in parole di memoria e celle progressive numerate a partire dall'indirizzo zero. Nei linguaggi a basso livello o statici come C o nell'ambiente Flowgorithm, un array rappresenta un blocco compatto di celle contigue nella RAM: la dimensione deve essere nota a priori affinché il sistema operativo possa riservare quello spazio continuo.

In Python, la classe **`list`** è un'astrazione di altissimo livello implementata internamente come un **array dinamico di puntatori (o riferimenti a oggetti)**.
Questo significa due cose fondamentali:
1.  **Dinamicità dimensionale:** Non dobbiamo dichiarare quante celle occuperà la lista. Quando creiamo una lista vuota e vi aggiungiamo elementi, la Python Virtual Machine si occupa automaticamente di allocare memoria supplementare, espandendo o contraendo la struttura in tempo reale.
2.  **Eterogeneità dei dati:** Negli array convenzionali tutti gli elementi dovevano appartenere rigorosamente allo stesso tipo di dato (tutti interi, tutti reali, ecc.). Poiché le liste di Python contengono riferimenti a oggetti indipendenti, una singola lista può ospitare contemporaneamente numeri interi, float, stringhe, valori booleani o persino altre liste:
    ```python
    dati_misti = ["Mario Rossi", 25, 1.78, True]
    ```
    Sebbene l'eterogeneità sia ammessa, nella buona pratica ingegneristica e algoritmica le liste vengono utilizzate prevalentemente per conservare collezioni di dati omogenei (ad esempio, solo elenchi di temperature o solo inventari di nomi).

Una lista si definisce sintatticamente racchiudendo i suoi elementi tra **parentesi quadre `[]`**, separandoli con una virgola:
```python
# Creazione di una lista vuota pronta all'uso
registro_voti = []

# Creazione di una lista popolata
temperature = [18.5, 21.0, 19.8, 22.4, 17.9]
```

#### 2. Indicizzazione Diretta e la Risorsa degli Indici Negativi
Esattamente come abbiamo appreso nel Modulo 2.5 per i vettori grafici, ciascun elemento di una lista occupa una posizione precisa identificata da un numero intero progressivo chiamato **Indice**.

##### A. Indicizzazione Zero-Based (Da sinistra a destra)
La numerazione inizia tassativamente da **`0`** per il primo elemento e si conclude a **`lunghezza - 1`** per l'ultimo.
Se consideriamo la lista `colori = ["rosso", "verde", "blu", "giallo"]`:
*   `colori[0]` punta a `"rosso"`
*   `colori[1]` punta a `"verde"`
*   `colori[2]` punta a `"blu"`
*   `colori[3]` punta a `"giallo"`

Per conoscere in qualsiasi momento quanti elementi risiedono in una lista, si impiega la funzione universale integrata **`len()`** (*length*):
```python
totale_elementi = len(colori)  # Restituisce 4
ultimo_valore = colori[len(colori) - 1]  # Restituisce "giallo"
```

##### B. Indicizzazione Negativa (Da destra a sinistra)
In molti linguaggi, recuperare l'ultimo elemento di una collezione richiede di calcolarne prima la lunghezza (`lista[len(lista) - 1]`). Python introduce una sintassi elegante: gli **indici negativi**, che leggono la sequenza a ritroso a partire dalla fine:
*   `colori[-1]` punta all'**ultimo** elemento (`"giallo"`).
*   `colori[-2]` punta al **penultimo** elemento (`"blu"`).
*   `colori[-3]` punta al **terzultimo** elemento (`"verde"`).
*   `colori[-len(colori)]` punta al primo elemento assoluto (`"rosso"`).

##### L'Errore Critico: `IndexError`
Se tentate di accedere a una posizione inesistente (ad esempio scrivendo `colori[4]` o `colori[10]`), Python arresterà l'esecuzione generando l'eccezione **`IndexError: list index out of range`**. È compito del programmatore proteggere gli accessi verificando sempre la dimensione effettiva della collezione.

#### 3. L'Arte dello Slicing (`lista[start:stop:step]`)
Una delle caratteristiche più potenti e idiomatiche di Python è lo **Slicing** (affettamento). Lo slicing permette di estrarre una porzione o sotto-lista da una lista genitrice senza dover implementare un ciclo `for` manuale.

La sintassi completa dello slicing all'interno delle parentesi quadre prevede tre parametri separati da due punti:
```python
sotto_lista = lista[inizio:fine:passo]
```
1.  **`inizio` (start):** L'indice del primo elemento da includere (compreso).
2.  **`fine` (stop):** L'indice al quale arrestare l'estrazione (**escluso**, esattamente come avviene con la funzione `range()`).
3.  **`passo` (step):** L'intervallo di campionamento (opzionale, di default vale `1`).

##### Casi d'Uso Tipici dello Slicing
Consideriamo una lista di dieci numeri interi:
```python
numeri = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

# 1. Estrazione di una finestra intermedia (dall'indice 2 all'indice 5 escluso)
intervallo = numeri[2:5]
# Risultato: [30, 40, 50]

# 2. Omissione dell'inizio: estrae dall'inizio fino all'indice specificato
primi_quattro = numeri[:4]
# Risultato: [10, 20, 30, 40]

# 3. Omissione della fine: estrae da un indice fino alla fine della lista
dal_sesto_in_poi = numeri[5:]
# Risultato: [60, 70, 80, 90, 100]

# 4. Uso del passo: campionare un elemento ogni due
elementi_alternati = numeri[::2]
# Risultato: [10, 30, 50, 70, 90]

# 5. Passo negativo: invertire completamente la lista
lista_rovesciata = numeri[::-1]
# Risultato: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
```

Lo slicing genera **una nuova lista indipendente** contenente la copia degli elementi estratti; la lista originale rimane intatta.

#### 4. La Mutabilità e i Metodi Fondamentali di Manipolazione
A differenza delle stringhe e dei numeri, che in Python sono immutabili (non possono essere alterati sul posto), le liste sono **mutabili**. Possiamo sovrascrivere il contenuto di una cella, inserire nuovi elementi o eliminarli senza ricreare la lista da zero:

```python
numeri = [10, 20, 999, 40]
numeri[2] = 30  # Sostituisce 999 con 30 direttamente in memoria
```

Per gestire collezioni dinamiche, la classe `list` fornisce una serie di metodi integrati richiamabili attraverso l'operatore punto (`.`):

##### A. Metodi di Inserimento
*   **`.append(elemento)`:** Aggiunge un singolo elemento in coda alla lista. È l'operazione fondamentale per accumulare dati da input o da letture cicliche.
*   **`.insert(indice, elemento)`:** Inserisce un elemento in una posizione arbitraria, facendo slittare verso destra tutti gli elementi successivi.
*   **`.extend(seconda_lista)`:** Concatena un'intera seconda lista in coda alla prima (analogo all'operatore di concatenazione `+`).

##### B. Metodi di Rimozione
*   **`.pop(indice)`:** Rimuove l'elemento presente all'indice specificato e **lo restituisce come valore**. Se non si specifica alcun indice (`.pop()`), rimuove ed estrae l'ultimo elemento della lista (funzionamento tipico dello *Stack* hardware).
*   **`.remove(valore)`:** Cerca la prima occorrenza del valore indicato e la cancella dalla lista. Se il valore cercato non esiste, solleva l'errore `ValueError`.
*   **`del lista[indice]`:** Istruzione di sistema per eliminare un elemento (o una fetta via slicing) liberando la memoria associata.
*   **`.clear()`:** Svuota completamente la lista eliminando tutti gli elementi, lasciandola vuota (`[]`).

##### C. Metodi di Ricerca e Ispezione
*   **`valore in lista`:** Operatore di appartenenza booleano. Restituisce `True` se l'elemento è presente nella lista, evitando l'errore sollevato da `.remove()` o `.index()`.
*   **`.index(valore)`:** Restituisce l'indice numerico della prima occorrenza del valore cercato.
*   **`.count(valore)`:** Conta quante volte un dato elemento compare all'interno della lista.

##### D. Metodi di Ordinamento
*   **`.sort()`:** Ordina gli elementi della lista sul posto in ordine crescente (o alfabetico). È possibile invertire l'ordine specificando `.sort(reverse=True)`.
*   **`.reverse()`:** Inverte l'ordine degli elementi della lista direttamente in memoria.
*   *Nota metodologica:* Esiste anche la funzione integrata `sorted(lista)`, che non modifica la lista originaria ma ne restituisce una copia ordinata ex novo.

#### 5. Strategie di Scansione con il Ciclo For
Nel Modulo 3.4 abbiamo visto che il ciclo `for` di Python è progettato come un attraversatore di sequenze. Esistono tre modalità distinte per elaborare una lista mediante un ciclo:

##### Metodo 1: Iterazione Diretta per Elemento (Scrittura ad alto livello)
È il modo più pulito ed elegante quando dobbiamo solo leggere i valori senza modificarli né conoscerne la posizione:
```python
voti = [7.5, 8.0, 6.0, 9.5]

for voto in voti:
    print("Voto esaminato:", voto)
```

##### Metodo 2: Iterazione per Indice (`range(len(lista))`)
È la tecnica classica derivata da Flowgorithm, indispensabile quando dobbiamo modificare le celle sul posto o quando il calcolo richiede di conoscere la posizione numerica:
```python
for i in range(len(voti)):
    # Modifichiamo direttamente l'elemento nella lista
    if voti[i] < 6.0:
        voti[i] = 6.0  # Concessione del debito formativo
```

##### Metodo 3: L'Iteratore `enumerate()` (L'approccio professionale)
Quando abbiamo bisogno contemporaneamente sia dell'indice numerico sia del valore corrente, Python mette a disposizione la funzione `enumerate()`, che restituisce a ogni iterazione una coppia ordinata `(indice, valore)`:
```python
studenti = ["Alice", "Bob", "Carlo", "Diana"]

for posizione, nome in enumerate(studenti, start=1):
    print(f"Posto {posizione}: {nome}")
```

---

:::tip[Script completi di laboratorio]
Gli script completi sulle liste (`registro_dinamico.py`, `separazione_temperature.py`, `sportello_clienti.py`) sono disponibili nella sezione [**Lab 3 - Script Python (Modulo 3.5)**](/info_reti_prima/lezioni/laboratorio/04-lab-python-script/#modulo-35--liste-monodimensionali).
:::

:::caution[Errore tipico in verifica]
Attenzione alla copia delle liste: scrivere `b = a` **non crea una copia**, ma collega due etichette alla stessa identica lista in RAM! Modificare `b` altererà anche `a`. Per copiare davvero una lista si usa `b = a.copy()` oppure lo slicing `b = a[:]`.
:::

### Mettiti alla prova (Domande Flash)

<details>
  <summary><strong>1. Domanda rapida:</strong> Data <code>L = [10, 20, 30, 40, 50]</code>, cosa restituiscono <code>L[-1]</code> e <code>L[1:4]</code>?</summary>
  <p><code>L[-1]</code> restituisce <code>50</code> (l'ultimo elemento); <code>L[1:4]</code> restituisce <code>[20, 30, 40]</code> (indice 4 escluso).</p>
</details>

<details>
  <summary><strong>2. Domanda rapida:</strong> Che differenza c'è tra <code>.remove(valore)</code> e <code>.pop(indice)</code>?</summary>
  <p><code>.remove()</code> cerca ed elimina la prima occorrenza di un <strong>valore</strong> senza restituirlo; <code>.pop()</code> elimina l'elemento in una certa <strong>posizione</strong> e ne restituisce il valore.</p>
</details>

<details>
  <summary><strong>3. Domanda rapida:</strong> Quando conviene usare <code>enumerate(lista)</code> invece di <code>for x in lista</code>?</summary>
  <p>Quando durante la scansione servono contemporaneamente sia il <strong>valore</strong> dell'elemento sia il suo <strong>indice</strong> posizionale.</p>
</details>

---

### Sintesi

*   **Superamento della Staticità:** A differenza dei vettori tradizionali che impongono una capienza fissa determinata a monte, le liste in Python sono strutture dinamiche la cui dimensione varia automaticamente a tempo di esecuzione in base ai dati immessi o rimossi.
*   **Architettura in Memoria:** Una lista Python è implementata internamente come un array dinamico di riferimenti a oggetti allocati nella memoria RAM, caratteristica che consente di gestire collezioni con elementi di tipi eterogenei.
*   **Dualità di Indicizzazione:** L'accesso agli elementi avviene in tempo costante mediante indici racchiusi tra parentesi quadre. Gli indici positivi contano da sinistra partendo da `0`, mentre gli indici negativi consentono l'accesso rapido a ritroso partendo dall'ultimo elemento con `-1`.
*   **Potenza dello Slicing:** La sintassi `lista[inizio:fine:passo]` permette di estrarre e duplicare porzioni e finestre di dati senza ricorrere a iterazioni manuali, consentendo anche il campionamento a intervalli o l'inversione immediata della collezione con passo `-1`.
*   **Mutabilità Operativa:** Le liste possono essere espanse in coda (`.append()`), modificate per posizione (`.insert()`), ridotte per valore (`.remove()`) o per indice (`.pop()`), e riordinate direttamente in memoria tramite il metodo `.sort()`.
*   **Pattern di Scansione:** La lettura dei dati può essere condotta direttamente per elemento con `for elemento in lista`, per coordinate posizionali tramite `for i in range(len(lista))`, oppure abbinando indice e dato mediante l'iteratore nativo `enumerate()`.

---

### Glossario

*   **Lista (`list`):** Struttura dati lineare nativa di Python, ordinata, mutabile ed eterogenea, preposta alla memorizzazione di sequenze di elementi referenziati dinamicamente.
*   **Array Dinamico:** Modello architetturale di gestione della memoria in cui la capacità allocata per una collezione si espande o si riduce automaticamente all'occorrenza, gestendo i ridimensionamenti in modo trasparente per il programmatore.
*   **Mutabilità:** Proprietà di una struttura dati che consente di modificarne il contenuto interno (aggiunta, rimozione o riassegnazione di valori) direttamente nella sua locazione di memoria originale senza dover istanziare un nuovo oggetto.
*   **Indicizzazione Negativa:** Caratteristica sintattica che consente di accedere agli elementi di una collezione partendo dall'estremità finale mediante valori interi negativi, dove `-1` identifica l'ultimo elemento.
*   **Slicing (Affettamento):** Operazione algebrica che consente di estrarre una sotto-sequenza da una lista specificando gli indici di inizio, fine esclusa e passo di campionamento.
*   **IndexError:** Eccezione bloccante a tempo di esecuzione sollevata dall'interprete quando un'istruzione tenta di accedere a una coordinata di indice esterna ai confini dimensionali effettivi della lista.
*   **Metodo Append:** Procedura interna della classe `list` che inserisce un nuovo elemento in coda alla collezione, incrementandone la lunghezza di un'unità.
*   **Metodo Pop:** Operazione che rimuove un elemento da una posizione specifica della lista (o dall'estremità finale per default) e ne restituisce il valore contestualmente all'istruzione chiamante.
*   **Enumerate:** Funzione generatrice di Python che trasforma un oggetto iterabile in una serie sequenziale di coppie ordinate, fornendo contestualmente l'indice posizionale progressivo e il rispettivo valore.
