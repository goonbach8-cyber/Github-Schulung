# GitHub Schulung – Modul 219

Interaktive, browserorientierte Schulung für Einsteiger:innen (2 × 45 Minuten).

## Lernweg
Start / Quick-Check (3 Min.), Grundlagen (12 Min.), Navigation (20 Min.), Praxis (45 Min., davon 10 Min. in Lektion 1), Navigator Challenge (10 Min.). Das Nachschlagewerk umfasst 17 Kapitel nach dem GitHub-Handbuch, Stand 20.11.2026. Das Mini-CRM ist ein optionaler statischer Lernprototyp und speichert keine Eingaben dauerhaft.

## Lokal starten
```sh
npm install
npm run dev
npm run build
```

## Medien und offene Abnahmen
- Forms: freigegebene Pre- und Abschlussquiz-URLs in src/content.ts in forms.pre und forms.final eintragen. Bis dahin laufen ausdrücklich als lokale Übungen markierte Alternativen, ohne zentrale Übermittlung; die lokale Challenge vergibt ein Übungsabzeichen ab 80 Punkten.
- Video: offizieller englischsprachiger GitHub-Ausschnitt zur Repository-Erstellung, nach Klick geladen. Vor dem Unterricht Verständlichkeit, Sprache und Einbettung prüfen.
- Navigation: klickbare, gekennzeichnete Nachbildung. Aktuelle, bereinigte Original-Screenshots mit Callouts fehlen noch; keine echten Screenshots vortäuschen.
- Mini-CRM: public/mini-crm/index.html, nach Kapitel 6.4. Ausschliesslich fiktive Daten.
- Vor Freigabe: Build, mobile Darstellung, reale GitHub-Klickpfade, CRM-Suche/Erfassung/Reload, Forms und Medien im Zielbrowser prüfen. HZ1-Ergebnisse, Expertenfeedback und Usability-Test nicht fingieren.
- Veröffentlichung: bisherige GitHub Pages Actions-Konfiguration beibehalten. Änderungen zunächst auf separatem Branch prüfen.

Die Originalunterlagen werden nicht in das öffentliche Repository hochgeladen. Fachliche Grundlage: GitHub-Benutzerdokumentation v1.0; didaktische Grundlage: M219-Planungsdokument.

## Ausführliche Fachinhalte
Die 17 Handbuchkapitel sind in `src/handbookDetails.ts` nach Unterkapiteln und Seitenangaben erschlossen. Die Kernseiten enthalten zusätzlich ausführliche Lesestrecken, während die 90-Minuten-Ziele unverändert bleiben. Kapitel 6.4 nutzt den vollständigen HTML-Prototyp als kopierbaren Quellcode und Download; Kapitel 16 nutzt die durchsuchbare Glossar-Ansicht. Bildplatzhalter aus der Vorlage werden nicht als Screenshots dargestellt.

## Geführter Lernpfad
Der Quick-Check schaltet die Grundlagen frei; jedes Kernmodul benötigt einen bestandenen Wissenscheck, die Praxis zusätzlich eine lokale Sandbox. Die Challenge benötigt mindestens 80/100. Zustände und Ergebnisse sind im Browser gespeichert; direkte Modul-URLs werden per Route Guard gesperrt. Nach Abschluss ist die Dokumentation frei zugänglich. Dies ist lokale Lernlogik, keine serverseitige Zugriffssicherung oder echte GitHub-Aktionsprüfung. `npm test` prüft die Zustandslogik.
