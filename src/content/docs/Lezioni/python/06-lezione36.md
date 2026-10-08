---
title: 3.6 Strutture Dati Avanzate
description: Gestione di collezioni immutabili, logica insiemistica senza duplicati, mappatura associativa chiave-valore e tabelle hash.
---

### Introduzione

Nel Modulo 3.5 abbiamo esplorato le liste, comprendendo come aggregare più informazioni all'interno di una sequenza dinamica, ordinata e mutabile. Con le liste abbiamo imparato a simulare registri di voti, code di attesa e serie numeriche indicizzate con numeri interi progressivi da 0 a N - 1.

Tuttavia, il mondo reale e l'ingegneria del software non possono essere ricondotti unicamente a elenchi numerati di valori modificabili. Consideriamo tre scenari concreti:
1.  **Dati immutabili e costanti fisiche:** Se un programma gestisce le coordinate GPS di un monumento o i tre canali cromatici RGB di un pixel, vogliamo essere certi al cento per cento che nessuna riga di codice successiva possa accidentalmente alterare o cancellare quei valori. Usare una lista esporrebbe il sistema a modifiche indesiderate.
2.  **Unicità e test di appartenenza:** Immaginiamo di gestire gli accessi di un server web: abbiamo milioni di indirizzi IP registrati e vogliamo isolare solo gli utenti unici, oppure verificare all'istante se un determinato IP appartiene a una lista nera, senza dover scorrere uno a uno milioni di elementi.
3.  **Accesso per significato e non per posizione:** Se dobbiamo rappresentare una scheda anagrafica composta da nome, cognome, età e codice fiscale, riferirsi a essi con indici numerici (`dati[0]`, `dati[1]`, `dati[2]`) è macchinoso e genera confusione. Vorremmo poter chiedere alla memoria: *"Dammi il valore associato alla chiave 'codice_fiscale'"*.

Python risponde a queste esigenze offrendo tre strutture dati native e specializzate che affiancano le liste: le **Tuple** (`tuple`), gli **Insiemi** (`set`) e i **Dizionari** (`dict`). 

In questa lezione scopriremo la garanzia di sicurezza offerta dall'immutabilità delle tuple, applicheremo l'algebra insiemistica con i set eliminando i duplicati, e domineremo la struttura dati più potente e utilizzata dell'intero ecosistema Python: il dizionario associativo basato su tabelle hash.

---

### Sviluppo dell'Argomento

#### 1. Le Tuple (`tuple`): La Sicurezza dell'Immutabilità
Una **tupla** è una collezione ordinata di elementi, racchiusa tra parentesi tonde **`()`**, che presenta una caratteristica cardine: **è rigorosamente immutabile**.

Una volta allocata nella memoria RAM, una tupla non può essere espansa con nuovi elementi, non può essere ridotta e le sue celle non possono essere riassegnate:
```python
punto_geografico = (45.4642, 9.1900)  # Coordinate di Milano (Latitudine, Longitudine)
# punto_geografico[0] = 40.8518       # ERRORE FATALE: TypeError!
```
Se si tenta di modificare una cella, la Python Virtual Machine blocca l'esecuzione sollevando un'eccezione (`TypeError: 'tuple' object does not support item assignment`).

##### Perché Usare una Tupla al Posto di una Lista?
Un programmatore alle prime armi potrebbe chiedersi: *se la lista fa le stesse cose e in più si può modificare, perché dovrei usare una tupla?*
1.  **Integrità dei dati (Protezione da bug):** La tupla funge da "contratto di sola lettura". Garantisce che dati strutturali critici (configurazioni di rete, chiavi crittografiche, dimensioni fisse dello schermo) rimangano inalterati durante l'intera esecuzione del software.
2.  **Efficienza prestazionale e consumo di memoria:** Poiché la dimensione e i contenuti sono fissi, Python alloca per la tupla un unico blocco continuo e compatto di RAM, senza i margini di riserva necessari alle liste dinamiche. Le tuple sono più rapide da creare e richiedono meno byte di memoria.
3.  **Idoneità come chiavi:** Essendo immutabile, una tupla possiede un'impronta numerica fissa (*hash*) e può essere impiegata come chiave nei dizionari o come elemento degli insiemi, cosa severamente vietata alle liste.

##### L'Eleganza del Tuple Packing e Unpacking
Python consente di impacchettare valori in una tupla anche omettendo le parentesi tonde (*packing*), e soprattutto permette di spacchettarli in variabili distinte in un unico passaggio (*unpacking*):
```python
# Packing: aggregazione in un record immutabile
studente = ("Leonardo", "Da Vinci", 1452)

# Unpacking: estrazione diretta nei singoli cassetti di memoria
nome, cognome, anno_nascita = studente
print(f"{nome} {cognome} e' nato nel {anno_nascita}.")
```

Grazie all'unpacking delle tuple, in Python è possibile scambiare il valore di due variabili senza dover creare la variabile temporanea `temp` vista in Flowgorithm:
```python
a = 10
b = 20
a, b = b, a  # Scambio istantaneo tramite tupla!
print(a, b)  # Stampa: 20 10
```

*Nota di sintassi:* Per creare una tupla contenente un solo elemento, è obbligatorio inserire una virgola finale `(42,)`. Scrivere semplicemente `(42)` verrebbe interpretato da Python come un comune numero intero racchiuso tra parentesi matematiche.

#### 2. Gli Insiemi (`set`): Unicità ed Efficienza Matematica
Un **insieme** (`set`) è una collezione **non ordinata** di elementi unici, definita sintatticamente da parentesi graffe **`{}`** oppure invocando la funzione nativa **`set()`**.

Gli insiemi implementano fedelmente il concetto di insieme studiato nella teoria matematica:
*   **Assenza di duplicati:** Se provate a inserire lo stesso valore dieci volte, l'insieme ne conserverà una sola copia.
*   **Assenza di ordine e indici:** Gli elementi non possiedono una posizione fissa. Di conseguenza, **è impossibile accedere a un set tramite indice** (scrivere `mio_set[0]` genera un `TypeError`).
*   **Elementi immutabili:** Un set può contenere numeri, stringhe o tuple, ma non può contenere liste o altri set.

```python
# Creazione di un set: i duplicati vengono rimossi automaticamente
numeri_estratti = {5, 12, 5, 8, 12, 90}
print(numeri_estratti)  # Output: {5, 8, 12, 90}
```
*Attenzione alla creazione di insiemi vuoti:* Per istanziare un insieme privo di elementi si deve usare obbligatoriamente `set()`. Scrivere `{}` genera infatti un dizionario vuoto.

##### Ricerca Istantanea e Tabelle Hash
In una lista di un milione di elementi, verificare la presenza di un valore con `valore in lista` costringe il processore a scorrere la sequenza elemento per elemento (complessità lineare, tempi crescenti). 

Nei set, la verifica di appartenenza avviene tramite una **tabella hash**: l'interprete converte il dato in un indirizzo di memoria calcolato all'istante, verificando la presenza in tempo costante, indipendentemente dal fatto che il set contenga 10 elementi o 10 milioni di elementi.

##### Le Operazioni Insiemistiche Native
Python dota i set di operatori algebrici che richiamano i diagrammi di Eulero-Venn:

| Operazione Matematica | Operatore Python | Metodo Equivalente | Descrizione |
| :--- | :---: | :--- | :--- |
| **Unione** | `A \| B` | `A.union(B)` | Restituisce tutti gli elementi appartenenti ad A, a B o a entrambi. |
| **Intersezione** | `A & B` | `A.intersection(B)` | Isola solo gli elementi presenti contemporaneamente in entrambi i set. |
| **Differenza** | `A - B` | `A.difference(B)` | Mantiene gli elementi che appartengono ad A ma non a B. |
| **Differenza Simmetrica** | `A ^ B` | `A.symmetric_difference(B)` | Raccoglie gli elementi presenti in A o in B, escludendo quelli comuni. |

```python
gruppo_calcetto = {"Marco", "Luca", "Andrea", "Simone"}
gruppo_basket = {"Luca", "Andrea", "Matteo", "Giovanni"}

# Chi pratica entrambi gli sport? (Intersezione)
intersezione = gruppo_calcetto & gruppo_basket
print("Praticano entrambi:", intersezione)  # {'Luca', 'Andrea'}

# Chi gioca a calcetto ma NON a basket? (Differenza)
solo_calcetto = gruppo_calcetto - gruppo_basket
print("Solo calcetto:", solo_calcetto)  # {'Marco', 'Simone'}
```

#### 3. I Dizionari (`dict`): L'Accesso Chiave-Valore
Il **dizionario** (`dict`) è la struttura dati più versatile, performante e diffusa di Python. In informatica teorica viene definito *array associativo* o *mappa*.

Mentre in una lista gli elementi sono associati a una posizione numerica automatica (0, 1, 2, ...), in un dizionario ogni dato (il **Valore**) viene memorizzato e recuperato tramite un identificatore semantico personalizzato (la **Chiave**).

La struttura si dichiara con parentesi graffe, separando la chiave dal valore con i due punti `:` e le coppie tra loro con una virgola:
```python
profilo_server = {
    "indirizzo_ip": "192.168.1.100",
    "porta": 8080,
    "sistema_operativo": "Linux Ubuntu",
    "stato_attivo": True
}
```

##### Le Due Regole Ferree delle Chiavi
1.  **Univocità:** All'interno di un dizionario non possono esistere due chiavi identiche. Se si assegna un valore a una chiave già esistente, il vecchio valore viene sovrascritto.
2.  **Immutabilità:** Una chiave deve essere un tipo di dato non modificabile (stringhe, interi, float, tuple). Non è possibile usare una lista come chiave.

##### Lettura, Aggiunta e il Metodo Sicuro `.get()`
Per leggere un dato si fa riferimento alla sua etichetta tra parentesi quadre:
```python
print(profilo_server["indirizzo_ip"])  # Output: 192.168.1.100
```
Tuttavia, se la chiave richiesta non esiste all'interno del dizionario, il programma si interrompe immediatamente con un crash da **`KeyError`**.

Per prevenire questo errore e garantire la robustezza del codice, si utilizza il metodo protetto **`.get(chiave, valore_di_default)`**:
```python
# Se la chiave 'dominio' non esiste, restituisce il valore alternativo senza andare in errore
dominio = profilo_server.get("dominio", "Nessun dominio assegnato")
print("Dominio del server:", dominio)
```

Per aggiungere una nuova coppia o aggiornarne una esistente:
```python
# Aggiunta di una nuova voce
profilo_server["ram_installata_gb"] = 16

# Modifica di una voce esistente
profilo_server["porta"] = 443

# Rimozione di una voce con estrazione del valore
porta_vecchia = profilo_server.pop("porta")
```

##### Tecniche di Iterazione sui Dizionari
Possiamo scandire un dizionario con un ciclo `for` esaminando le sole chiavi, i soli valori, o entrambe le componenti contemporaneamente tramite il metodo `.items()`:
```python
computer = {"CPU": "i7-12700", "RAM": "32GB", "SSD": "1TB"}

# Scansione coordinata chiave-valore tramite items() e unpacking
for componente, modello in computer.items():
    print(f"Hardware: {componente} -> Modello: {modello}")
```

#### 4. Quadro Sinottico delle Strutture Dati di Python
Per orientarsi nella progettazione di un algoritmo, la tabella seguente sintetizza le caratteristiche delle quattro strutture dati studiate:

| Struttura Dati | Sintassi | Ordinata? | Mutabile? | Duplicati? | Principale Caso d'Uso |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Lista (`list`)** | `[a, b]` | Sì | **Sì** | Ammessi | Collezioni dinamiche e sequenze manipolabili nel tempo. |
| **Tupla (`tuple`)** | `(a, b)` | Sì | **No** | Ammessi | Record fissi, coordinate immutabili, protezione da scritture. |
| **Insieme (`set`)** | `{a, b}` | **No** | **Sì** | **Vietati** | Eliminazione duplicati, appartenenza rapida, algebra insiemistica. |
| **Dizionario (`dict`)** | `{k: v}` | Sì (da Py 3.7) | **Sì** | Chiavi uniche | Schede informative, archivi, basi di dati, modelli JSON/Web. |

---

### Esempi Pratici e Script Completi Guidati

#### Esempio 1: Tracciamento Logistico con Tuple e Unpacking
*Obiettivo:* Un centro di smistamento merci riceve una serie di spedizioni identificate ciascuna da un codice pacco, dal peso in kg e dalle coordinate di destinazione espresse come tupla annidata. Il programma deve scorrere le spedizioni, spacchettare i dati e calcolare il peso medio trasportato.

```python
# =======================================================
# Script: logistica_spedizioni.py
# Scopo: Dimostrazione di tuple, record fissi e unpacking
# =======================================================

print("=== GESTORE SPEDIZIONI LOGISTICHE ===")

# Lista di record immutabili (tuple)
spedizioni = [
    ("PKG-101", 12.5, (45.464, 9.190)),
    ("PKG-102", 4.2, (41.902, 12.496)),
    ("PKG-103", 28.0, (40.851, 14.268)),
    ("PKG-104", 8.3, (45.070, 7.686))
]

peso_totale = 0.0

print(f"Riepilogo delle {len(spedizioni)} spedizioni in partenza:\n")

# Scansione con unpacking strutturato a doppio livello
for codice, peso, coordinate in spedizioni:
    latitudine, longitudine = coordinate
    peso_totale += peso
    print(f"Pacco: {codice:<8} | Peso: {peso:>4.1f} kg | Destinazione: Lat {latitudine:.3f}, Lon {longitudine:.3f}")

peso_medio = peso_totale / len(spedizioni)

print("-" * 55)
print(f"Carico complessivo: {peso_totale:.2f} kg")
print(f"Peso medio per spedizione: {peso_medio:.2f} kg")
```

#### Esempio 2: Bonifica Dati e Controllo Accessi con Insiemi
*Obiettivo:* Un sistema di sicurezza registra i badge di ingresso scansionati durante la giornata lavorativa. A causa di letture multiple ai tornelli, molti badge compaiono decine di volte. Lo script deve eliminare i duplicati, confrontare l'elenco dei presenti con la lista degli impiegati autorizzati e segnalare eventuali accessi anomali o dipendenti assenti.

```python
# =======================================================
# Script: controllo_accessi.py
# Scopo: Deduplicazione e operazioni insiemistiche con set
# =======================================================

print("=== SISTEMA DI MONITORAGGIO PRESENZE ===")

# Letture grezze del sensore ottico (lista con molti duplicati)
letture_tornelli = [
    "USR-01", "USR-03", "USR-01", "USR-04", 
    "USR-02", "USR-01", "USR-05", "USR-99"
]

# Elenco ufficiale dei dipendenti autorizzati per il reparto
dipendenti_autorizzati = {"USR-01", "USR-02", "USR-03", "USR-04", "USR-05", "USR-06"}

# Bonifica immediata dei duplicati tramite conversione in set
presenti_unici = set(letture_tornelli)

print(f"Totale timbrature registrate: {len(letture_tornelli)}")
print(f"Persone uniche entrate: {len(presenti_unici)} -> {presenti_unici}\n")

# 1. Individuazione di accessi non autorizzati (Presenti - Autorizzati)
intrusi = presenti_unici - dipendenti_autorizzati
if len(intrusi) > 0:
    print(f"[ALLARME SICUREZZA] Badge non riconosciuti: {intrusi}")
else:
    print("[SICUREZZA] Tutti i presenti risultano regolarmente autorizzati.")

# 2. Individuazione dei dipendenti assenti (Autorizzati - Presenti)
assenti = dipendenti_autorizzati - presenti_unici
print(f"Dipendenti autorizzati oggi assenti: {assenti}")

# 3. Dipendenti regolarmente al lavoro (Intersezione)
regolari = presenti_unici & dipendenti_autorizzati
print(f"Personale regolarmente in sede ({len(regolari)}): {regolari}")
```

#### Esempio 3: Anagrafica Studenti e Medie con Dizionari Annidati
*Obiettivo:* Realizzare un archivio scolastico dove ogni studente è identificato univocamente dalla propria matricola. Per ogni matricola è memorizzato un dizionario con nome, classe e lista dei voti. Il programma consente di cercare uno studente in modo protetto, calcolare la sua media e stampare l'intero prospetto della classe.

```python
# =======================================================
# Script: registro_dizionari.py
# Scopo: Dizionari annidati, metodo get() e manipolazione
# =======================================================

print("=== ARCHIVIO DIGITALE ISTITUTO SCOLASTICO ===")

# Struttura dati complessa: dizionario con dizionari e liste interne
archivio_studenti = {
    "MAT-101": {
        "nome": "Chiara Bianchi",
        "classe": "3A Informatica",
        "voti": [8.0, 7.5, 9.0]
    },
    "MAT-102": {
        "nome": "Marco Verdi",
        "classe": "3A Informatica",
        "voti": [6.0, 5.5, 6.5]
    },
    "MAT-103": {
        "nome": "Sara Neri",
        "classe": "3B Telecomunicazioni",
        "voti": [7.0, 8.0, 8.5]
    }
}

# Aggiunta dinamica di un nuovo studente all'archivio
archivio_studenti["MAT-104"] = {
    "nome": "Davide Rossi",
    "classe": "3A Informatica",
    "voti": [6.5, 7.0, 7.5]
}

# Ricerca sicura tramite codice matricola
matricola_cercata = input("Digita la matricola da interrogare (es. MAT-102): ")
studente_trovato = archivio_studenti.get(matricola_cercata, None)

if studente_trovato is not None:
    voti = studente_trovato["voti"]
    media = sum(voti) / len(voti)
    print("\n--- SCHEDA STUDENTE INDIVIDUATA ---")
    print(f"Nominativo: {studente_trovato['nome']}")
    print(f"Sezione:    {studente_trovato['classe']}")
    print(f"Voti prove: {voti}")
    print(f"Media calcolata: {media:.2f}")
else:
    print(f"\nAttenzione: Nessuno studente censito con la matricola '{matricola_cercata}'.")

# Stampa riassuntiva di fine anno per l'intero istituto
print("\n" + "=" * 50)
print(f"{'MATRICOLA':<12}{'NOMINATIVO':<20}{'CLASSE':<15}")
print("=" * 50)
for matricola, info in archivio_studenti.items():
    print(f"{matricola:<12}{info['nome']:<20}{info['classe']:<15}")
print("=" * 50)
```

---

### Sintesi

*   **Complementarità delle Strutture Dati:** Accanto alle liste dinamiche, Python offre strutture con garanzie semantiche diverse per coprire qualsiasi scenario: tuple per collezioni fisse, set per insiemi matematici non ridondanti e dizionari per associazioni semantiche.
*   **La Tupla e la Salvaguardia dei Dati:** Struttura ordinata e immutabile racchiusa tra parentesi tonde. Ottimizza il consumo di RAM, previene sovrascritture accidentali del codice e supporta l'assegnazione multipla tramite il costrutto dell'*unpacking*.
*   **Il Set e la Velocità Hash:** Collezione non ordinata di valori unici priva di indici. Garantisce l'azzeramento automatico dei duplicati e controlli di esistenza ad altissima velocità tramite tabelle hash, supportando gli operatori insiemistici di unione (`|`), intersezione (`&`) e differenza (`-`).
*   **Il Dizionario e la Mappatura Chiave-Valore:** Struttura associativa fondata su chiavi uniche e immutabili collegate a valori eterogenei. Consente l'accesso rapido all'informazione tramite etichette di testo e protegge il flusso esecutivo da crash mediante l'uso del metodo protetto `.get()`.
*   **Modellazione Annidata dei Dati Reali:** La combinazione di dizionari, tuple e liste consente di rappresentare fedelmente entità informative complesse (archivi anagrafici, configurazioni di rete, serie temporali) prima del salvataggio definitivo su disco.

---

### Glossario

*   **Tupla (`tuple`):** Struttura dati nativa di Python, lineare, ordinata e immutabile, impiegata per rappresentare sequenze fisse di informazioni che non devono subire alterazioni a tempo di esecuzione.
*   **Immutabilità:** Proprietà di un oggetto software che ne impedisce qualsiasi modifica strutturale o di stato interno una volta completata l'allocazione nella memoria RAM.
*   **Tuple Unpacking:** Operazione sintattica con cui gli elementi contenuti all'interno di una tupla (o di un'altra sequenza) vengono estratti e assegnati simultaneamente a un insieme di variabili distinte.
*   **Insieme (`set`):** Struttura dati mutabile, non ordinata e non indicizzata che implementa le proprietà degli insiemi matematici, garantendo l'assoluta unicità degli elementi ospitati.
*   **Funzione Hash:** Algoritmo matematico che trasforma un dato di dimensione arbitraria in un valore numerico intero di lunghezza fissa (*hash code*), impiegato per mappare e individuare istantaneamente la locazione di memoria di un oggetto.
*   **Dizionario (`dict`):** Struttura dati associativa costituita da una collezione mutabile di coppie chiave-valore, in cui ciascun valore è memorizzato e indicizzato tramite una chiave univoca e immutabile.
*   **Coppia Chiave-Valore (Key-Value Pair):** Relazione biunivoca elementare alla base delle mappe e dei dizionari, in cui la chiave agisce da indirizzo semantico per raggiungere il dato memorizzato.
*   **Metodo Get:** Funzione della classe `dict` che consente il recupero del valore associato a una chiave specifica, evitando il sollevamento dell'eccezione `KeyError` qualora la chiave risulti assente e restituendo un valore di riserva predefinito.
*   **KeyError:** Eccezione bloccante a tempo di esecuzione generata dall'interprete Python quando un'istruzione tenta di accedere a un dizionario utilizzando una chiave non presente nella struttura.

<button onclick="window.print()" style="padding: 10px 15px; background-color: #dbae1a; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
  🖨️ Stampa / Salva in PDF
</button>