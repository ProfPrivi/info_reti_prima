# Linee Guida del Progetto Didattico (Astro + Starlight)

Questo sito ospita le dispense teoriche di **Informatica e Reti** (a cura del Prof. Privitera) e funge da **progetto matrice** per gli altri siti didattici.

## Principi Didattici
- **Taglio teorico d'aula:** i moduli principali (`architettura-os`, `algoritmi-coding`, `python`, `reti`) contengono dispense teoriche progettate per 2 ore di lezione frontale alla LIM senza PC.
- **Sezione Laboratorio separata:** eserciziari pratici, missioni operative e raccolte di script lunghi vanno esclusivamente in `src/content/docs/Lezioni/laboratorio/` (`🧪 Laboratorio & Esercizi`), richiamati dalle lezioni teoriche tramite box `:::tip`.

## Struttura Standard
- **Ogni modulo teorico** inizia con `00-overview<N>.md` (obiettivi + mappa tabellare) e termina con un `Ripasso Generale` a domande aperte `<details>`.
- **Ogni lezione teorica** segue lo schema:
  `Introduzione` → `Sviluppo dell'Argomento` (con tabelle, schemi `.schema-svg` o micro-simulatori Astro `.mdx`) → box Starlight `:::tip[Idea chiave]` / `:::caution[Errore tipico in verifica]` → `Mettiti alla prova (Domande Flash)` (`3` `<details>`) → `Sintesi` → `Glossario`.

## Regole Tecniche
- **Stampa PDF centralizzata:** gestita da `src/components/PageFooter.astro` + `@media print` in `src/styles/custom.css`. Non inserire `<button onclick="window.print()">` nei file Markdown.
- **Schemi SVG in `.md`:** racchiusi in `<figure class="schema-svg">`, **senza righe vuote interne** e con indentazione massima di 2 spazi.
- **MDX e Simulatori LIM:** nei file `.mdx` chiudere sempre i tag vuoti (`<img ... />`, `<br />`) e usare `style={{ ... }}`. I componenti in `src/components/` usano card ad alto contrasto (`class="no-print"`) e script IIFE isolati per `id`.
- **YAML e Codifica:** racchiudere tra virgolette `"..."` i titoli YAML con `: `; mantenere codifica UTF-8 rigorosa (non usare PowerShell `Get-Content` senza `-Encoding UTF8`); evitare `$...$` LaTeX (KaTeX non è configurato).
- **Verifica build:** prima di concludere ogni modifica eseguire `$env:ASTRO_TELEMETRY_DISABLED="1"; npm run build`.
