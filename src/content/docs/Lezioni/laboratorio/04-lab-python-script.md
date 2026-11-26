---
title: Lab 3 - Raccolta Script Completi di Python (3.2 - 3.6)
description: Raccolta laboratoriale degli script Python completi e commentati collegati alle lezioni teoriche sui tipi, selezioni, cicli, liste, tuple, set e dizionari.
---

### Introduzione

Questa sezione raccoglie tutti gli **script completi ed eseguibili in laboratorio** collegati alle lezioni teoriche dell'Unità 3 (*Programmazione in Python*). Tenere i listati estesi in un'unica raccolta dedicata mantiene agili le dispense teoriche d'aula e consente di provare, modificare ed estendere facilmente il codice in laboratorio.

---

### Modulo 3.2 — Tipi di Dato, Casting e Operatori

#### Script 1: Calcolo dell'Indice di Massa Corporea (`calcolo_bmi.py`)
*Obiettivo:* Acquisire peso e altezza con casting esplicito a `float`, calcolare il BMI con l'operatore `**` e arrotondare a due decimali.

```python
print("--- CALCOLATORE INDICE DI MASSA CORPOREA (BMI) ---")

peso = float(input("Inserisci il tuo peso corporeo in kg (es. 72.5): "))
altezza = float(input("Inserisci la tua altezza in metri (es. 1.78): "))

bmi = peso / (altezza ** 2)

print("\nElaborazione completata:")
print("Peso registrato:", peso, "kg")
print("Altezza registrata:", altezza, "m")
print("Il tuo indice BMI calcolato e':", round(bmi, 2))
```

#### Script 2: Decomposizione Temporale (`tempo_conversione.py`)
*Obiettivo:* Scomporre un numero di secondi in ore, minuti e secondi usando `//` e `%`.

```python
secondi_totali = int(input("Inserisci il numero complessivo di secondi: "))

ore = secondi_totali // 3600
secondi_restanti = secondi_totali % 3600

minuti = secondi_restanti // 60
secondi_finali = secondi_restanti % 60

print("\nRisultato della scomposizione temporale:")
print(secondi_totali, "secondi corrispondono esattamente a:")
print(ore, "ore,", minuti, "minuti e", secondi_finali, "secondi.")
```

#### Script 3: Ispezione Dinamica della Memoria (`ispezione_variabili.py`)
*Obiettivo:* Osservare dal vivo come cambiano `type()` e `id()` quando una variabile viene riassegnata.

```python
dato = 500
print("Valore:", dato, "| Tipo:", type(dato), "| ID:", id(dato))

dato = "Informatica"
print("Nuovo Valore:", dato, "| Tipo:", type(dato), "| ID:", id(dato))

conteggio = 5
messaggio = "Tentativi rimasti: " + str(conteggio)
print(messaggio)
```

---

### Modulo 3.3 — Strutture Decisionali e Operatori Logici

#### Script 4: Biglietteria Cinema (`biglietteria_cinema.py`)
*Obiettivo:* Gestire scaglioni multipli e selezioni annidate con validazione iniziale.

```python
print("=== SISTEMA DI BIGLIETTERIA MULTISALA ===")
eta = int(input("Inserisci l'eta' dello spettatore: "))

if eta < 0 or eta > 125:
    print("Errore: Il valore di eta' inserito non e' plausibile.")
else:
    if eta < 8:
        prezzo = 0.0
        categoria = "Bambino (Omaggio)"
    elif eta < 18:
        prezzo = 5.0
        categoria = "Junior (Ridotto)"
    elif eta >= 65:
        prezzo = 4.0
        categoria = "Senior (Over 65)"
    else:
        risposta_studente = input("Sei uno studente universitario con tesserino? (s/n): ")
        if risposta_studente == "s" or risposta_studente == "S":
            prezzo = 6.0
            categoria = "Universitario (Sconto Studio)"
        else:
            prezzo = 8.5
            categoria = "Adulto (Intero)"

    print("Categoria assegnata:", categoria, "| Importo:", prezzo, "Euro")
```

#### Script 5: Verifica Anno Bisestile (`anno_bisestile.py`)
*Obiettivo:* Applicare `and`, `or` e `%` in un'unica espressione booleana.

```python
anno = int(input("Inserisci l'anno da verificare (es. 2024): "))
e_bisestile = (anno % 4 == 0 and anno % 100 != 0) or (anno % 400 == 0)

if e_bisestile:
    print("L'anno", anno, "E' bisestile (29 giorni a febbraio).")
else:
    print("L'anno", anno, "NON e' bisestile (365 giorni).")
```

#### Script 6: Calcolatrice Protetta (`calcolatrice_sicura.py`)
*Obiettivo:* Intercettare la divisione per zero e gli operatori non validi con programmazione difensiva.

```python
primo_numero = float(input("Inserisci il primo numero: "))
operatore = input("Scegli l'operazione (+, -, *, /): ")
secondo_numero = float(input("Inserisci il secondo numero: "))

if operatore == "+":
    print("Risultato:", primo_numero + secondo_numero)
elif operatore == "-":
    print("Risultato:", primo_numero - secondo_numero)
elif operatore == "*":
    print("Risultato:", primo_numero * secondo_numero)
elif operatore == "/":
    if secondo_numero == 0:
        print("Errore Matematico: Impossibile dividere per zero!")
    else:
        print("Risultato:", primo_numero / secondo_numero)
else:
    print("Errore: operatore non riconosciuto.")
```

---

### Modulo 3.4 — Strutture Iterative

#### Script 7: Validazione Voto (`validazione_voto.py`)
*Obiettivo:* Usare il ciclo `while` per rifiutare valori fuori dall'intervallo `1 – 10`.

```python
tentativi_errati = 0
voto = float(input("Inserisci il voto conseguito dallo studente (1 - 10): "))

while voto < 1.0 or voto > 10.0:
    tentativi_errati += 1
    print("Errore: il voto deve essere compreso tra 1.0 e 10.0.")
    voto = float(input("Riprova a inserire il voto corretto: "))

print(f"Dato registrato: {voto:.1f} (errori commessi: {tentativi_errati})")
```

#### Script 8: Potenze di Due (`potenze_di_due.py`)
*Obiettivo:* Generare una tabella formattata delle potenze di 2 usando `for` e `range()`.

```python
esponente_massimo = int(input("Fino a quale esponente calcolare (es. 10)? "))
print(f"{'Esponente (N)':<15}{'Valore (2^N)':<10}")
print("=" * 25)

potenza = 1
for n in range(0, esponente_massimo + 1):
    if n > 0:
        potenza *= 2
    print(f"{n:<15}{potenza:<10}")
```

#### Script 9: Test di Primalità (`verifica_primalita.py`)
*Obiettivo:* Combinare `for`, `break` e la clausola `else` del ciclo.

```python
numero = int(input("Inserisci un numero intero maggiore di 1: "))

if numero <= 1:
    print("I numeri primi sono maggiori di 1.")
else:
    for divisore in range(2, (numero // 2) + 1):
        if numero % divisore == 0:
            print(f"{numero} NON e' primo (divisibile per {divisore}).")
            break
    else:
        print(f"{numero} E' UN NUMERO PRIMO!")
```

---

### Modulo 3.5 — Liste Monodimensionali

#### Script 10: Registro Dinamico (`registro_dinamico.py`)
*Obiettivo:* Acquisizione con sentinella, `.append()`, calcolo della media e ricerca del massimo.

```python
valutazioni = []
while True:
    voto_input = float(input("Inserisci un voto (negativo per terminare): "))
    if voto_input < 0:
        break
    if 1.0 <= voto_input <= 10.0:
        valutazioni.append(voto_input)
    else:
        print("Valore non valido (1 - 10).")

if len(valutazioni) > 0:
    somma_totale = 0.0
    sufficienti = 0
    voto_massimo = valutazioni[0]
    for v in valutazioni:
        somma_totale += v
        if v >= 6.0:
            sufficienti += 1
        if v > voto_massimo:
            voto_massimo = v
    print(f"Media: {somma_totale / len(valutazioni):.2f} | Max: {voto_massimo:.1f} | Sufficienti: {sufficienti}")
```

#### Script 11: Separazione Temperature (`separazione_temperature.py`)
*Obiettivo:* Filtrare codici errore (`-999.0`), separare in due liste e ordinare sul posto.

```python
letture_grezze = [12.4, -3.2, -999.0, 5.0, -1.8, 18.2, -999.0, 0.5, -4.1]
temperature_positive = []
temperature_negative = []
errori_rilevati = 0

for valore in letture_grezze:
    if valore == -999.0:
        errori_rilevati += 1
    elif valore > 0.0:
        temperature_positive.append(valore)
    else:
        temperature_negative.append(valore)

temperature_positive.sort()
temperature_negative.sort(reverse=True)
print(f"Anomalie scartate: {errori_rilevati}")
print("Positive:", temperature_positive)
print("Negative:", temperature_negative)
```

#### Script 12: Coda allo Sportello (`sportello_clienti.py`)
*Obiettivo:* Usare insieme `.pop(0)`, `.insert()`, slicing `[:3]`, `.remove()` e `enumerate()`.

```python
coda_sportello = ["Bianchi", "Rossi", "Verdi", "Neri", "Gialli", "Ferrari"]

utente_servito = coda_sportello.pop(0)
print("Servito:", utente_servito)

coda_sportello.insert(1, "Esposito (Prioritario)")
print("Prossimi 3 in coda:", coda_sportello[:3])

if "Neri" in coda_sportello:
    coda_sportello.remove("Neri")

for posto, cliente in enumerate(coda_sportello, start=1):
    print(f"Posizione {posto}: {cliente}")
```

---

### Modulo 3.6 — Tuple, Set e Dizionari

#### Script 13: Logistica Spedizioni (`logistica_spedizioni.py`)
*Obiettivo:* Lista di tuple immutabili con unpacking a doppio livello.

```python
spedizioni = [
    ("PKG-101", 12.5, (45.464, 9.190)),
    ("PKG-102", 4.2, (41.902, 12.496)),
    ("PKG-103", 28.0, (40.851, 14.268)),
    ("PKG-104", 8.3, (45.070, 7.686))
]

peso_totale = 0.0
for codice, peso, coordinate in spedizioni:
    lat, lon = coordinate
    peso_totale += peso
    print(f"Pacco {codice}: {peso:.1f} kg -> ({lat:.3f}, {lon:.3f})")

print(f"Peso medio: {peso_totale / len(spedizioni):.2f} kg")
```

#### Script 14: Controllo Accessi con Insiemi (`controllo_accessi.py`)
*Obiettivo:* Deduplicazione con `set()` e operatori insiemistici (`-`, `&`).

```python
letture_tornelli = ["USR-01", "USR-03", "USR-01", "USR-04", "USR-02", "USR-01", "USR-05", "USR-99"]
autorizzati = {"USR-01", "USR-02", "USR-03", "USR-04", "USR-05", "USR-06"}

presenti = set(letture_tornelli)
print("Intrusi (non autorizzati):", presenti - autorizzati)
print("Assenti oggi:", autorizzati - presenti)
print("Regolarmente presenti:", presenti & autorizzati)
```

#### Script 15: Anagrafica con Dizionari Annidati (`registro_dizionari.py`)
*Obiettivo:* Dizionari annidati, ricerca sicura con `.get()` e scansione con `.items()`.

```python
archivio_studenti = {
    "MAT-101": {"nome": "Chiara Bianchi", "classe": "1A", "voti": [8.0, 7.5, 9.0]},
    "MAT-102": {"nome": "Marco Verdi", "classe": "1A", "voti": [6.0, 5.5, 6.5]},
    "MAT-103": {"nome": "Sara Neri", "classe": "1B", "voti": [7.0, 8.0, 8.5]}
}

matricola = input("Matricola da cercare (es. MAT-102): ")
studente = archivio_studenti.get(matricola, None)

if studente is not None:
    media = sum(studente["voti"]) / len(studente["voti"])
    print(f"{studente['nome']} ({studente['classe']}) -> Media: {media:.2f}")
else:
    print("Matricola non trovata.")
```
