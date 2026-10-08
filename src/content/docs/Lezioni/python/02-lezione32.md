---
title: 3.2 Tipi di Dato Fondamentali, Variabili e Tipizzazione Dinamica
description: Gestione della memoria in Python, tipi di dato primitivi, codifica binaria e floating-point, operatori aritmetici e conversione esplicita (casting).
---

### Introduzione

Nel modulo precedente abbiamo analizzato l'ambiente di sviluppo e il modello esecutivo di Python, scoprendo come il codice sorgente venga compilato in bytecode per essere eseguito dalla Python Virtual Machine. Abbiamo preparato la nostra postazione di lavoro; ora dobbiamo iniziare a manipolare la materia prima di qualsiasi algoritmo: i **dati**.

Nel corso dell'Unità 2, lavorando con Flowgorithm, eravamo vincolati a una fase preliminare obbligatoria: la dichiarazione esplicita. Prima di poter utilizzare una variabile, dovevamo inserire un apposito blocco grafico per comunicare al sistema il nome del contenitore e il genere di informazione consentito (Intero, Reale, Stringa o Booleano). Questo paradigma, adottato da linguaggi industriali come C, C++ e Java, prende il nome di **tipizzazione statica**: la cella di memoria viene "scolpita" all'inizio dell'esecuzione e non può cambiare forma.

Python adotta una filosofia differente, orientata alla flessibilità, all'espressività e alla produttività dello sviluppatore. Abbandona i "cassetti rigidi" per abbracciare un modello basato su riferimenti a oggetti e **tipizzazione dinamica**. Al contempo, sotto questa apparente semplicità, Python si interfaccia con le medesime strutture binarie dell'hardware: numeri interi con segno, rappresentazioni floating-point su standard internazionali e codifiche testuali universali. In questa lezione scopriremo come Python gestisce le variabili in memoria RAM, analizzeremo i quattro tipi di dato atomici collegandoli alla teoria della codifica delle informazioni, e padroneggeremo gli operatori aritmetici e le tecniche di conversione esplicita (casting).

---

### Sviluppo dell'Argomento

#### 1. Dalla Fisica alla Memoria: Dati, Informazioni e Variabili come Etichette
A livello circuitale, l'elaboratore tratta esclusivamente segnali digitali binari: sequenze di bit (0 e 1) aggregate in byte (gruppi di 8 bit) e parole di memoria. Un dato grezzo memorizzato nei registri o nella RAM è solo una sequenza elettrica priva di significato autonomo; diventa **informazione** nel momento in cui gli viene associato un codice e un contesto interpretativo.

In linguaggi a tipizzazione statica, una variabile coincide fisicamente con una specifica locazione di memoria dimensionata a priori. In Python il funzionamento è concettualmente diverso:
*   I valori non risiedono "dentro" la variabile.
*   Ogni valore immesso nel programma è un **oggetto indipendente** allocato dinamicamente nella memoria RAM.
*   Il nome della variabile funge semplicemente da **etichetta adesiva** (un riferimento simbolico o puntatore) applicata all'oggetto.

Quando eseguiamo l'istruzione di assegnazione:
```python
punteggio = 100
```
L'interprete compie tre operazioni:
1. Alloca uno spazio nella memoria heap e vi memorizza l'oggetto intero `100`.
2. Crea l'identificatore `punteggio`.
3. Collega l'etichetta `punteggio` all'oggetto `100`.

L'operatore `=` prende il nome di **operatore di assegnazione** e non va confuso con l'uguaglianza matematica. Possiamo verificare l'indirizzo univoco di memoria assegnato all'oggetto tramite la funzione nativa `id()`:
```python
x = 42
print(id(x))  # Mostra l'identificativo numerico della cella di memoria
```

#### 2. La Tipizzazione Dinamica e la Tipizzazione Forte
La natura a "etichette" delle variabili in Python comporta due proprietà architetturali decisive:

##### A. Tipizzazione Dinamica (Dynamic Typing)
In Python **non esiste un comando di dichiarazione preventiva**. Una variabile nasce nel momento esatto in cui le viene assegnato un valore, e il suo tipo è determinato automaticamente dal dato associato (*type inference*). Di conseguenza, un'etichetta può essere staccata da un oggetto e riassegnata a un oggetto di natura completamente diversa nel corso dello stesso script:

```python
valore = 10          # 'valore' referenzia un numero intero (int)
print(type(valore))  # Output: <class 'int'>

valore = "Dieci"     # La stessa etichetta ora referenzia una stringa (str)
print(type(valore))  # Output: <class 'str'>
```
L'oggetto precedente (`10`), rimasto privo di etichette che lo referenziano, viene individuato e rimosso automaticamente dalla memoria dal sottosistema di **Garbage Collection**, liberando la RAM senza intervento manuale del programmatore.

##### B. Tipizzazione Forte (Strong Typing)
Un errore comune consiste nel confondere la tipizzazione dinamica con una gestione approssimativa dei dati. Python è un linguaggio a **tipizzazione forte**: una volta che un oggetto possiede un tipo, l'interprete non esegue conversioni implicite arbitrarie che potrebbero alterare il senso logico del calcolo.
Se tentiamo di sommare una stringa e un intero:
```python
risultato = "Numero: " + 5  # Genera un TypeError!
```
A differenza di altri linguaggi permissivi (come JavaScript), Python solleva immediatamente un'eccezione bloccante (`TypeError: can only concatenate str (not "int") to str`), imponendo al programmatore di esplicitare le proprie intenzioni.

#### 3. I Quattro Tipi di Dato Atomici Fondamentali
L'informazione trattata da Python si articola in quattro famiglie di tipi atomici (o primitivi):

##### A. Numeri Interi (`int`)
Rappresentano quantità numeriche prive di parte frazionaria, positive, negative o nulle. Nei linguaggi tradizionali e a livello hardware, i numeri interi sono vincolati alla dimensione della parola di memoria (es. registri a 16, 32 o 64 bit) e codificati con il criterio del **complemento a 2**, con un limite massimo rappresentabile pari a $2^{63} - 1$ nei sistemi a 64 bit. Oltre tale soglia, i sistemi compilati incorrono nell'*overflow* numerico.

In Python 3, la classe `int` implementa nativamente la **precisione arbitraria** (*bignum*): la dimensione del numero non è bloccata a 32 o 64 bit, ma si espande dinamicamente impiegando tutti i byte di RAM necessari. Possiamo calcolare potenze con centinaia di cifre senza temere errori di traboccamento:
```python
popolazione = 8000000000
fattoriale_grande = 2 ** 100  # Calcolato esattamente senza overflow
```

##### B. Numeri in Virgola Mobile (`float`)
I numeri reali e frazionari vengono gestiti mediante la rappresentazione a **virgola mobile** (*floating point*). Per convenzione internazionale, il separatore tra parte intera e frazionaria è rigorosamente il **punto decimale `.`**, mai la virgola.

I valori possono essere espressi in notazione posizionale standard oppure in **notazione esponenziale scientifica**, impiegando la lettera `e` (o `E`) per indicare la moltiplicazione per potenze di 10:
```python
costante_gravitazionale = 6.674e-11  # Equivale a 6.674 * 10^-11
massa_terra = 5.972e24               # Equivale a 5.972 * 10^24
```

*Fondamento hardware:* A livello circuitale, Python mappa i float sullo standard internazionale **IEEE 754 in doppia precisione (binary64)** a 64 bit:
*   1 bit dedicato al segno ($s$).
*   11 bit dedicati all'esponente, polarizzato con un valore di bias pari a 1023.
*   52 bit dedicati alla mantissa (significand), a cui si aggiunge un bit implicito per la parte intera normalizzata.

Poiché molte frazioni decimali (come 0.1 o 0.2) si trasformano in numeri binari periodici infiniti, la loro rappresentazione su un numero finito di bit comporta una lieve approssimazione:
```python
print(0.1 + 0.2)  # Output: 0.30000000000000004
```
Questo comportamento non è un bug di Python, ma una conseguenza fisica della conversione tra base 10 e base 2 nei microprocessori.

##### C. Stringhe di Testo (`str`)
Rappresentano sequenze ordinate di caratteri alfanumerici e simboli speciali. 
Nella storia dell'informatica, i testi venivano codificati mediante lo standard **ASCII** a 7 bit (128 caratteri) ed esteso a 8 bit (256 caratteri). Con la globalizzazione e il World Wide Web si è imposta la necessità di rappresentare gli alfabeti di tutte le lingue del pianeta, portando alla nascita dello standard universale **Unicode**. Python 3 adotta nativamente Unicode, codificando i testi secondo lo standard **UTF-8**.

Le stringhe possono essere delimitate da apici singoli (`'...'`) o virgolette doppie (`"..."`):
```python
messaggio = "Laboratorio di Informatica"
saluto = 'Benvenuto!'
```

Caratteristiche fondamentali delle stringhe in Python:
*   **Caratteri di escape:** Introdotti dalla barra rovesciata `\`, consentono di inserire comandi speciali come il ritorno a capo (`\n`) o la tabulazione (`\t`):
    ```python
    print("Riga 1\nRiga 2")
    ```
*   **Stringhe multilinea:** Riconosciute aprendo e chiudendo tre apici (`'''...'''` o `"""..."""`), ideali per stampare blocchi di testo formattati:
    ```python
    menu = """
    1. Calcola perimetro
    2. Calcola area
    3. Esci dal programma
    """
    ```
*   **Immutabilità:** Una volta allocata in memoria, una stringa non può essere modificata nelle sue singole lettere. Per alterarla, occorre crearne una nuova istanza.

##### D. Valori Booleani (`bool`)
Derivati dall'algebra di George Boole, rappresentano le due costanti logiche della programmazione: **`True`** (Vero, corrispondente al livello logico 1) e **`False`** (Falso, corrispondente al livello logico 0). 

In Python l'iniziale deve essere rigorosamente maiuscola. Dal punto di vista architetturale, la classe `bool` è una sottoclasse specializzata degli interi:
```python
print(True + True)  # Restituisce 2, poiché True vale numericamente 1
print(False == 0)   # Restituisce True
```
I booleani costituiscono il risultato di tutte le espressioni di confronto e guidano i bivi decisionali analizzati nell'Unità 2.

#### 4. Operatori Matematici e Aritmetica Avanzata
Python implementa un set completo di operatori per la manipolazione algebrica dei dati numerici:

| Operatore | Significato Matematico | Esempio | Risultato | Note di Comportamento |
| :--- | :--- | :--- | :--- | :--- |
| `+` | Addizione | `14 + 6` | `20` | Se usato tra stringhe, esegue la concatenazione. |
| `-` | Sottrazione | `20 - 7` | `13` | Funziona anche come operatore unario di negazione (`-x`). |
| `*` | Moltiplicazione | `4 * 3` | `12` | Se applicato a stringhe, esegue la ripetizione (`"Abc" * 2` -> `"AbcAbc"`). |
| `/` | Divisione decimale | `10 / 4` | `2.5` | In Python 3 restituisce **sempre** un dato di tipo `float`. |
| `//` | Divisione intera | `10 // 4` | `2` | Calcola il quoziente intero troncando la parte frazionaria. |
| `%` | Modulo (Resto) | `10 % 4` | `2` | Restituisce il resto della divisione euclidea intera. |
| `**` | Elevamento a potenza | `2 ** 8` | `256` | Calcola la potenza senza richiedere librerie esterne. |

**Regole di Precedenza Operativa:**
Python rispetta rigorosamente le priorità algebriche:
1. Espressioni racchiuse tra parentesi tonde `()`.
2. Elevamento a potenza `**` (valutato da destra verso sinistra).
3. Moltiplicazione `*`, Divisione `/`, Divisione intera `//` e Modulo `%`.
4. Addizione `+` e Sottrazione `-`.

#### 5. Input, Output e la Necessità del Casting Esplicito
Per creare applicazioni capaci di interagire con l'esterno, utilizziamo le funzioni built-in `print()` e `input()`:
*   `print(*oggetti, sep=' ', end='\n')`: invia i dati al canale standard di output (il monitor). Consente di stampare più elementi separandoli con una virgola.
*   `input(messaggio)`: sospende l'esecuzione del programma e attende che l'utente digiti un testo premendo Invio.

**Il Meccanismo del Casting:**
La funzione `input()` restituisce **sempre e tassativamente una stringa (`str`)**, indipendentemente da ciò che l'utente digita sulla tastiera.
Se acquisiamo due valori numerici per sommarli:
```python
valore1 = input("Inserisci il primo numero: ")  # Utente digita 5 -> "5"
valore2 = input("Inserisci il secondo numero: ") # Utente digita 3 -> "3"
totale = valore1 + valore2
print(totale)                                    # Output: "53" (Concatenazione!)
```
L'operatore `+` tra due stringhe esegue l'accostamento dei testi, non l'addizione aritmetica. Per operare sui valori numerici, dobbiamo convertire esplicitamente la rappresentazione dell'informazione tramite il **Casting**:

```python
# Funzioni di conversione esplicita
num_intero = int("45")       # Converte la stringa "45" nell'intero 45
num_reale = float("12.75")   # Converte la stringa "12.75" nel float 12.75
testo = str(1024)            # Converte il numero 1024 nella stringa "1024"
booleano = bool(1)           # Converte il numero 1 nel valore True
```

**Regole del Casting a Booleano (Truthy e Falsy):**
In Python, qualsiasi dato può essere convertito a valore logico tramite `bool()`:
*   Restituiscono `False`: il numero `0`, il decimale `0.0`, la stringa vuota `""` e l'oggetto speciale `None`.
*   Restituisce `True`: qualsiasi altro valore numerico diverso da zero e qualsiasi stringa che contenga almeno un carattere (incluso lo spazio `" "`).

---

### Esempi Pratici e Script Completi Guidati

#### Esempio 1: Calcolo dell'Indice di Massa Corporea (BMI)
*Obiettivo:* Acquisire peso e altezza di un individuo, convertire i dati nei tipi appropriati, calcolare il BMI applicando la formula $\text{BMI} = \text{peso} / \text{altezza}^2$ e formattare l'output.

```python
# =======================================================
# Script: calcolo_bmi.py
# Scopo: Dimostrazione di input con casting e operatori
# =======================================================

print("--- CALCOLATORE INDICE DI MASSA CORPOREA (BMI) ---")

# Acquisizione dati con casting diretto a float
peso = float(input("Inserisci il tuo peso corporeo in kg (es. 72.5): "))
altezza = float(input("Inserisci la tua altezza in metri (es. 1.78): "))

# Elaborazione matematica: uso dell'operatore potenza **
bmi = peso / (altezza ** 2)

# Output dei dati: arrotondamento a due cifre decimali
print("\nElaborazione completata:")
print("Peso registrato:", peso, "kg")
print("Altezza registrata:", altezza, "m")
print("Il tuo indice BMI calcolato e':", round(bmi, 2))
```

#### Esempio 2: Decomposizione Temporale con Divisione Intera e Modulo
*Obiettivo:* Dato un intervallo temporale espresso in secondi complessivi, determinare quante ore, minuti e secondi residui compongono tale durata, sfruttando le proprietà di `//` e `%`.

```python
# =======================================================
# Script: tempo_conversione.py
# Scopo: Applicazione pratica degli operatori // e %
# =======================================================

# Acquisizione dei secondi totali (casting a int)
secondi_totali = int(input("Inserisci il numero complessivo di secondi: "))

# 1 ora = 3600 secondi
ore = secondi_totali // 3600
secondi_restanti = secondi_totali % 3600

# 1 minuto = 60 secondi
minuti = secondi_restanti // 60
secondi_finali = secondi_restanti % 60

# Visualizzazione dei risultati scomposti
print("\nRisultato della scomposizione temporale:")
print(secondi_totali, "secondi corrispondono esattamente a:")
print(ore, "ore,", minuti, "minuti e", secondi_finali, "secondi.")
```

#### Esempio 3: Ispezione Dinamica della Memoria
*Obiettivo:* Verificare empiricamente come cambia l'identificatore di memoria e il tipo di dato di una variabile quando viene riassegnata.

```python
# =======================================================
# Script: ispezione_variabili.py
# Scopo: Comprendere etichette, tipi e id di memoria
# =======================================================

dato = 500
print("Valore:", dato)
print("Tipo:", type(dato))
print("Indirizzo di memoria ID:", id(dato))
print("------------------------------------------")

# Riassegniamo la medesima etichetta a una stringa
dato = "Informatica"
print("Nuovo Valore:", dato)
print("Nuovo Tipo:", type(dato))
print("Nuovo Indirizzo di memoria ID:", id(dato))
print("------------------------------------------")

# Test di concatenazione e casting
conteggio = 5
messaggio = "Tentativi rimasti: " + str(conteggio)
print(messaggio)
```

---

### Sintesi

*   **Il Modello a Oggetti ed Etichette:** In Python le variabili non sono contenitori statici allocati preventivamente, ma nomi simbolici che referenziano oggetti residenti nella memoria heap.
*   **Tipizzazione Dinamica e Forte:** Il tipo appartiene all'oggetto e non alla variabile; il linguaggio deduce il tipo a tempo di esecuzione e vieta operazioni implicite tra tipi tra loro incompatibili.
*   **I Quattro Tipi Primitivi:** Il calcolo e la memorizzazione si basano su numeri interi a precisione arbitraria (`int`), numeri reali codificati secondo lo standard IEEE 754 a 64 bit (`float`), sequenze testuali codificate in standard universale Unicode UTF-8 (`str`) e valori logici booleani (`bool`).
*   **Aritmetica Potenziata:** Accanto agli operatori elementari, Python gestisce nativamente la divisione a quoziente intero (`//`), l'operatore modulo per il calcolo del resto (`%`) e la potenza diretta (`**`).
*   **Obbligatorietà del Casting per l'I/O:** Poiché la funzione di lettura da tastiera `input()` acquisisce sempre sequenze testuali (`str`), è indispensabile effettuare la conversione esplicita tramite `int()` o `float()` per poter eseguire qualsiasi elaborazione matematica.

---

### Glossario

*   **Tipizzazione Dinamica (Dynamic Typing):** Meccanismo di un linguaggio di programmazione in cui il controllo e l'associazione dei tipi avvengono a tempo di esecuzione, permettendo a una variabile di referenziare oggetti di tipo differente nel corso della sua vita.
*   **Tipizzazione Forte (Strong Typing):** Regola architetturale che impedisce conversioni di tipo automatiche e implicite qualora un'operazione sia definita solo per specifici tipi di dato, sollevando eccezioni a runtime.
*   **IEEE 754:** Standard internazionale per l'aritmetica in virgola mobile che definisce la codifica binaria dei numeri reali ripartendo i bit tra segno, esponente polarizzato con bias e mantissa.
*   **Precisione Arbitraria (Bignum):** Caratteristica della gestione degli interi in Python 3 che alloca dinamicamente la memoria necessaria per rappresentare numeri di ampiezza teoricamente illimitata, prevenendo il fenomeno dell'overflow.
*   **Unicode (UTF-8):** Standard universale di codifica dei caratteri che associa un valore numerico univoco a ogni simbolo di qualsiasi scrittura umana, rappresentato a lunghezza variabile da 1 a 4 byte.
*   **Casting (Conversione di Tipo):** Procedura formale mediante la quale un valore appartenente a un determinato tipo di dato viene esplicitamente trasformato in un altro tipo compatibile (es. da stringa a float).
*   **Operatore Modulo (`%`):** Operatore aritmetico che restituisce il resto della divisione euclidea tra due operandi interi, ampiamente impiegato per verifiche di parità, divisibilità e scansione ciclica di intervalli.
*   **Garbage Collector:** Componente del motore di runtime preposto al monitoraggio automatico della memoria RAM, responsabile della deallocazione e del recupero dello spazio occupato da oggetti non più referenziati da alcuna variabile.

<button onclick="window.print()" style="padding: 10px 15px; background-color: #dbae1a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  🖨️ Stampa / Salva in PDF
</button>