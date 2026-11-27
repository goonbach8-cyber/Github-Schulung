export const handbook: [string,string,string,string,string[],string][] = [
  [
    "1",
    "Einleitung",
    "Lernziele, Einsatz und Vorbereitung",
    "GitHub hilft, Dokumentationen, Konfigurationen und Prototypen gemeinsam zu verwalten. Für die Schulung benötigst du einen Browser, ein zugelassenes Konto und Schreibrecht auf ein Schulungsrepository. Für Reviews arbeitet ihr zu zweit. Verwende nur freigegebene Dienste und fiktive Daten.",
    [
      "Konto und Organisation mit der Schulungsleitung klären.",
      "Repository, Commit, Branch, Issue und Pull Request unterscheiden.",
      "Veröffentlichung und Zugriff getrennt prüfen."
    ],
    "Erkläre, weshalb ein privates Repository nicht automatisch eine private Website bedeutet."
  ],
  [
    "2",
    "Git und GitHub",
    "Versionsverwaltung und Zusammenarbeit",
    "Git ist ein verteiltes Versionsverwaltungssystem. GitHub ist eine Online-Plattform für Git-Repositories und gemeinsame Arbeit. Git funktioniert auch ohne GitHub. Im Browser wird eine bestätigte Änderung direkt als Commit gespeichert; bei lokaler Arbeit muss ein Commit zunächst per Push übertragen werden.",
    [
      "Repository öffnen und Branch kontrollieren.",
      "Datei bearbeiten und Commit erstellen.",
      "Pull Request, Review und Merge durchführen."
    ],
    "Erkläre Git und GitHub anhand der CRM-Suche."
  ],
  [
    "3",
    "GitHub-Account erstellen",
    "Registrierung und Sicherheit",
    "Nutze das vorgesehene persönliche oder verwaltete Unternehmenskonto. Verwende eine zugelassene E-Mail-Adresse. Bei Unternehmenskonten gelten die administrativen Vorgaben.",
    [
      "github.com öffnen und Sign up wählen, falls kein Konto besteht.",
      "E-Mail bestätigen und über Sign in anmelden.",
      "Profil → Settings → Password and authentication öffnen.",
      "Zugelassene 2FA-Methode einrichten, Wiederherstellungscodes sicher ausserhalb des Repositories aufbewahren und Anmeldung testen."
    ],
    "E-Mail bestätigt und zusätzliche Authentifizierung funktioniert. Keine QR-Codes oder Zugangscodes fotografieren."
  ],
  [
    "4",
    "GitHub-Oberfläche",
    "Dashboard, Profil und Repository",
    "Das Dashboard ist dein Einstieg. Das Profil bezeichnet deine Identität; Organisationen verwalten gemeinsame Mitglieder und Repositories. Im Repository findest du Code, Issues, Pull requests, Actions, Projects und Settings. Die angezeigten Funktionen hängen von Berechtigungen ab.",
    [
      "Your repositories und Your organizations unterscheiden.",
      "Repository öffnen und Owner, Name und Branch kontrollieren.",
      "README, Dateiliste und Suchfeld finden.",
      "Issues, Pull requests, Actions, Projects und Settings zuordnen."
    ],
    "Zeige, wo Aufgaben erfasst, Dateien bearbeitet und Änderungen geprüft werden."
  ],
  [
    "5",
    "Repository erstellen",
    "Name, Owner, Sichtbarkeit und README",
    "Erstelle einen separaten Sandkasten. Public bedeutet öffentlich sichtbar; Private beschränkt den Repository-Zugriff auf Berechtigte. .gitignore verhindert die Neuaufnahme bestimmter Dateien bei Git-Arbeit, ersetzt aber keine Prüfung von Browseruploads. Eine Lizenz beschreibt Nutzungsbedingungen.",
    [
      "New repository wählen und Owner prüfen.",
      "Name: mini-crm-schulung; Beschreibung: Statischer CRM-Lernprototyp mit fiktiven Daten.",
      "Private wählen, sofern keine öffentliche Variante genehmigt wurde.",
      "README hinzufügen; .gitignore und Lizenz bewusst nach Vorgaben wählen.",
      "Create repository bestätigen."
    ],
    "Owner, Name, Sichtbarkeit und README stimmen."
  ],
  [
    "6",
    "Mini-CRM",
    "Dashboard, Kundenliste und vollständiger Beispielcode",
    "Das Mini-CRM besteht aus einer HTML-Datei mit CSS und JavaScript. Es enthält eine Kundenliste, Suche nach Firma oder Kontakt, Erfassung und Kennzahlen. Einträge bleiben nur im Arbeitsspeicher und verschwinden beim Neuladen. Kein Login, kein Server, keine zentrale Speicherung, keine echten Kundendaten.",
    [
      "index.html in einem reinen Texteditor als UTF-8 speichern; kein .txt-Anhang.",
      "Datei im Browser öffnen und Dashboard, Liste und Formular prüfen.",
      "Nach Alpen und einer Kontaktperson suchen; einen nicht existierenden Begriff testen.",
      "Demo Werkstatt / Alex Beispiel als Interessent hinzufügen. Kennzahlen und Zeile prüfen.",
      "Seite neu laden: Der neu hinzugefügte Kunde muss verschwinden."
    ],
    "Die Demo startet ohne Installation und alle Tests funktionieren."
  ],
  [
    "7",
    "Dateien hochladen",
    "Upload und Bearbeitung im Browser",
    "Beim Upload wird die Datei mit einer Commit-Nachricht gespeichert. Kontrolliere vorab Dateien und Pfade. Die Quelltextansicht ist keine Live-Website. Die im Handbuch genannte Browsergrenze beträgt 25 MiB je Datei und 100 Dateien pro Upload.",
    [
      "Repository und Branch prüfen.",
      "Add file → Upload files wählen.",
      "index.html direkt in die Repository-Wurzel hochladen, kein ZIP.",
      "Commit-Nachricht: Add mini CRM training prototype. Zielbranch gemäss Schulungsregeln wählen.",
      "README über das Stiftsymbol bearbeiten und Commit changes bestätigen."
    ],
    "Datei und zugehöriger Commit sind auf dem vorgesehenen Branch sichtbar."
  ],
  [
    "8",
    "Commits",
    "Änderungen nachvollziehbar speichern",
    "Ein Commit ist ein festgehaltener Projektstand mit Nachricht und Kennung. Er ist weder eine Freigabe noch automatisch ein Deployment. Kleine fachlich zusammenhängende Commits und klare Nachrichten erleichtern die Zusammenarbeit.",
    [
      "README öffnen und einen Hinweis zu flüchtigen CRM-Daten ergänzen.",
      "Änderungen und Branch kontrollieren.",
      "Commit changes mit Document temporary CRM session data bestätigen.",
      "Commit-Historie öffnen und die Änderung erklären."
    ],
    "Eine zweite Person versteht Zweck und Inhalt des Commits. Vermeide Nachrichten wie Update."
  ],
  [
    "9",
    "Branches",
    "main, Feature Branch und optional develop",
    "Ein Branch trennt Arbeitslinien, nicht Berechtigungen. Im Lernprojekt bleibt main der gemeinsame freigegebene Stand; Feature Branches sind kurzlebige Arbeitslinien. develop ist optional, kein Pflichtbestandteil.",
    [
      "Im Repository Code öffnen und main als Ausgangsstand wählen.",
      "Im Branch-Menü feature/suchhinweis eingeben und aus main erstellen.",
      "Branch-Anzeige prüfen und index.html nur auf dem Feature Branch bearbeiten."
    ],
    "Die Änderung ist auf dem Feature Branch sichtbar, auf main noch nicht."
  ],
  [
    "10",
    "Pull Requests",
    "Vorschlagen, Review und Merge",
    "Ein Pull Request schlägt Änderungen vom Quell- zum Zielbranch vor. Erst der Merge übernimmt sie. Eine unabhängige berechtigte Person prüft unter Files changed den Zweck, die Unterschiede und die Tests.",
    [
      "Auf feature/suchhinweis den Platzhalter Zum Beispiel Alpen in Firma oder Kontakt eingeben ändern.",
      "Commit: Clarify customer search hint.",
      "Pull requests → New pull request; base: main, compare: feature/suchhinweis.",
      "Beschreibung mit Ziel, Umfang und Tests ergänzen; Pull Request erstellen.",
      "Zweite Person prüft Files changed und wählt Comment, Request changes oder Approve.",
      "Nach Freigabe und erforderlichen Prüfungen mergen; main kontrollieren."
    ],
    "Der Pull Request ist abgeschlossen und die Änderung ist auf main sichtbar. Schutzregeln nicht umgehen."
  ],
  [
    "11",
    "GitHub Copilot",
    "KI-Unterstützung mit menschlicher Prüfung",
    "Copilot kann Code erklären, Änderungen vorschlagen und Tests unterstützen. Funktionen hängen von Tarif, Anwendung und Richtlinien ab. Nutze nur genehmigte Zugänge und fiktive Daten. Ohne Copilot bearbeitet ihr die Aufgabe manuell.",
    [
      "Prompt: Ergänze eine reine JavaScript-Funktion, die Kunden nach Firmenname sortiert, ohne das Array zu verändern. Erkläre den Code und Tests für Umlaute und leere Listen.",
      "Beispiel: function sortCustomers(items) { return [...items].sort((a,b) => a.company.localeCompare(b.company, 'de')); }",
      "Leere Liste, mehrere Firmen, Umlaute und unverändertes Ursprungsarray testen.",
      "Nur nachvollziehbare Änderungen auf einem Feature Branch übernehmen und reviewen."
    ],
    "Du kannst den Code und die Tests selbst erklären. KI-Ausgaben können falsch sein."
  ],
  [
    "12",
    "GitHub Pages",
    "Statische Websites veröffentlichen",
    "Pages hostet HTML, CSS und JavaScript aus einer festgelegten Quelle. Verfügbarkeit und Zugriff hängen vom Konto und den Einstellungen ab. GitHub Free benötigt für Pages grundsätzlich ein öffentliches Repository. Keine internen Repositories für den Test öffentlich machen. Pages ist kein produktives CRM-Hosting.",
    [
      "Genehmigung und Verfügbarkeit prüfen; index.html liegt im vorgesehenen Quellordner.",
      "Repository → Settings → Pages öffnen.",
      "Für das einzelne HTML-Beispiel Deploy from a branch, main und /(root) wählen und speichern, sofern erlaubt.",
      "Actions prüfen, danach Visit site öffnen und CRM-Tests wiederholen."
    ],
    "Live-Zugriff, Quelle und Commit stimmen. Pages und Netlify sind alternative Wege."
  ],
  [
    "13",
    "Deployment mit Netlify",
    "Import, Build-Einstellungen und Continuous Deployment",
    "Netlify kann statische Websites aus einem GitHub-Repository veröffentlichen. Für das Mini-CRM ist kein Build-Befehl nötig. Prüfe Konto, Team, genehmigten Tarif, Zugriff und Sichtbarkeit. Erlaube nur die notwendige Repository-Verknüpfung.",
    [
      "Netlify-Konto mit genehmigter Methode erstellen bzw. anmelden; Team prüfen.",
      "Add new project → Import a Git repository → GitHub wählen.",
      "Zugriff auf mini-crm-schulung beschränken und den richtigen Owner wählen.",
      "Production branch: main; Base Directory: leer; Build command: leer; Publish Directory: . (kein dist).",
      "Sichtbarkeit prüfen, Publish wählen; Deployment-Status, Logs und Commit kontrollieren.",
      "Tatsächliche Live-URL öffnen und CRM-Tests wiederholen.",
      "Auf feature/dashboard-titel Dashboard in Kundenübersicht umbenennen (IDs unverändert). Commit: Rename CRM dashboard heading.",
      "Pull Request reviewen und mergen; in Netlify neuen Deploy prüfen und Live-Überschrift, Suche und Formular testen."
    ],
    "Live-URL, Commit-ID, Tests und Abweichungen dokumentieren. Ein Merge und Deployment sind getrennte Ereignisse."
  ],
  [
    "14",
    "Best Practices",
    "Sicher und nachvollziehbar zusammenarbeiten",
    "Verwende eindeutige Namen und README, kleine Commits, überschaubare Feature Branches, verständliche PR-Beschreibungen und unabhängige Reviews. Kennzeichne Prototypen und prüfe die tatsächliche Website-Sichtbarkeit.",
    [
      "Zweck, Startanleitung, Tests und Einschränkungen in README festhalten.",
      "Geänderte Dateien und Commit-Nachricht vor dem Speichern prüfen.",
      "Review: Zweck, Diff, fachliches Verhalten, fiktive Daten und Dokumentation prüfen.",
      "Keine Passwörter, API-Schlüssel, Kundendaten oder vertraulichen Logs veröffentlichen."
    ],
    "Eine andere Person kann die Änderung und den Test nachvollziehen."
  ],
  [
    "15",
    "Häufige Fehler",
    "Ursachen und Lösungen",
    "Kontrolliere zuerst Konto, Repository, Branch und letzten Commit. Ändere nicht mehrere Einstellungen gleichzeitig.",
    [
      "Login scheitert: Identität und 2FA prüfen; freigegebenen Wiederherstellungsweg nutzen.",
      "E-Mail fehlt: Adresse, Spamordner und erneute Bestätigung prüfen.",
      "Upload verweigert: Berechtigung und Branch-Schutz prüfen; Feature Branch nutzen.",
      "Datei zu gross: Auswahl prüfen; Browserlimit laut Handbuch 25 MiB.",
      "Änderung fehlt auf main: Branch und Merge-Status prüfen.",
      "Unerwarteter Diff: base, compare und Dateien kontrollieren.",
      "Merge-Konflikt: korrekten Endstand gemeinsam klären und erneut testen.",
      "Website-Fehler: index.html, Quelle bzw. Publish Directory prüfen.",
      "Netlify-Buildfehler: Logs, leeren Build-Befehl und Publish Directory . prüfen.",
      "Kein Auto-Deploy: Produktionsbranch, Commit und Verknüpfung kontrollieren.",
      "Neue Kunden verschwinden: beabsichtigt, nur Arbeitsspeicher.",
      "Formular/Suche defekt: vollständigen Code, gerade Anführungszeichen, IDs und Dateiname prüfen."
    ],
    "Melde erwartetes und tatsächliches Verhalten mit bereinigtem Screenshot ohne Geheimnisse."
  ],
  [
    "16",
    "Glossar",
    "Begriffe zum Nachschlagen",
    "Die Begriffserklärungen stehen unterhalb dieses Kapitels. Verwende sie zusammen mit den praktischen Aufgaben.",
    [
      "Repository, Commit und Branch an einer eigenen Änderung erklären.",
      "Issue, Pull Request, Diff, Review, Merge und Deployment in die richtige Reihenfolge bringen."
    ],
    "Erkläre den Unterschied zwischen Merge und Deployment."
  ],
  [
    "17",
    "Zusammenfassung",
    "Vom Konto bis zur Live-Version",
    "Git hält Versionen fest; GitHub organisiert Zusammenarbeit. Ein Commit speichert, ein Branch trennt, ein Pull Request schlägt vor, ein Review prüft, ein Merge übernimmt. Erst das Deployment veröffentlicht den vorgesehenen Stand.",
    [
      "Kleine Textänderung am Mini-CRM auf Feature Branch vorbereiten.",
      "Commit und Pull Request erstellen; unabhängig prüfen und freigeben lassen.",
      "Veröffentlichten Commit bis zur Live-Seite verfolgen und Tests dokumentieren.",
      "Erklären, weshalb das CRM keine echten Kundendaten verarbeiten darf."
    ],
    "Lernpartner können Zweck, Änderung, Test und Veröffentlichung nachvollziehen."
  ]
]
export const glossary: [string,string][] = [
  [
    "Git",
    "Verteilte Versionsverwaltung"
  ],
  [
    "GitHub",
    "Online-Plattform für Git-Repositories"
  ],
  [
    "Repository",
    "Projektdateien mit Versionsgeschichte"
  ],
  [
    "Public / Private",
    "Öffentlich einsehbar / auf Berechtigte beschränkt"
  ],
  [
    "README",
    "Einführung in das Projekt"
  ],
  [
    "Markdown",
    "Lesbare Textsyntax für strukturierte Inhalte"
  ],
  [
    ".gitignore",
    "Regeln für Dateien, die Git nicht neu verfolgen soll"
  ],
  [
    "Lizenz",
    "Bedingungen für die Nutzung von Code"
  ],
  [
    "Commit",
    "Gespeicherter Projektstand"
  ],
  [
    "Commit-Nachricht",
    "Beschreibung der Änderung"
  ],
  [
    "Commit-ID",
    "Kennung eines Commits"
  ],
  [
    "Historie",
    "Gespeicherte Projektstände"
  ],
  [
    "Branch",
    "Benannte Entwicklungslinie"
  ],
  [
    "Main Branch",
    "Gemeinsamer Hauptbranch"
  ],
  [
    "Feature Branch",
    "Arbeitsbranch für eine Änderung"
  ],
  [
    "Base Branch",
    "Zielbranch eines Pull Requests"
  ],
  [
    "Clone",
    "Lokale Kopie mit Versionsinformationen"
  ],
  [
    "Working Directory",
    "Lokaler Arbeitsbereich"
  ],
  [
    "Staging Area",
    "Auswahl für nächsten lokalen Commit"
  ],
  [
    "Push",
    "Lokale Commits übertragen"
  ],
  [
    "Pull",
    "Entfernte Änderungen abrufen und integrieren"
  ],
  [
    "Pull Request",
    "Änderung zur Übernahme vorschlagen"
  ],
  [
    "Diff",
    "Unterschied zwischen Versionen"
  ],
  [
    "Review",
    "Prüfung und Rückmeldung"
  ],
  [
    "Approve",
    "Positive Review-Rückmeldung"
  ],
  [
    "Merge",
    "Änderungen zusammenführen"
  ],
  [
    "Merge-Konflikt",
    "Änderungen nicht automatisch zusammenführbar"
  ],
  [
    "Issue",
    "Aufgabe, Fehler oder Idee"
  ],
  [
    "Assignee",
    "Zugeordnete Person"
  ],
  [
    "Label",
    "Kategorisierung"
  ],
  [
    "@mention",
    "Person oder Team erwähnen"
  ],
  [
    "Profil",
    "Eigene GitHub-Identität"
  ],
  [
    "Organisation",
    "Gemeinsame Verwaltung von Mitgliedern und Repositories"
  ],
  [
    "GitHub Actions",
    "Automatisierte Arbeitsabläufe"
  ],
  [
    "Workflow",
    "Definierter Automatisierungsablauf"
  ],
  [
    "GitHub Copilot",
    "KI-Assistent für Software"
  ],
  [
    "GitHub Pages",
    "Hosting statischer Websites"
  ],
  [
    "2FA",
    "Zusätzlicher Authentifizierungsfaktor"
  ],
  [
    "Wiederherstellungscode",
    "Zugangshilfe bei Verlust der 2FA-Methode"
  ],
  [
    "Deployment",
    "Bereitstellung als erreichbare Website"
  ],
  [
    "Continuous Deployment",
    "Automatische Veröffentlichung bei konfigurierten Änderungen"
  ],
  [
    "Build-Befehl",
    "Erzeugt auslieferbare Dateien"
  ],
  [
    "Publish Directory",
    "Verzeichnis der veröffentlichten Dateien"
  ]
]
export const tabs: [string,string][] = [
  [
    "Code",
    "Dateien, README, Branch-Auswahl und Commit-Historie."
  ],
  [
    "Issues",
    "Aufgaben, Fehler und Ideen erfassen."
  ],
  [
    "Pull requests",
    "Änderungsvorschläge vergleichen, prüfen und zusammenführen."
  ],
  [
    "Actions",
    "Automatisierte Abläufe und deren Status prüfen."
  ],
  [
    "Projects",
    "Aufgaben in Projektübersichten organisieren."
  ],
  [
    "Settings",
    "Repository-Einstellungen und Berechtigungen verwalten."
  ]
]
export const challenge: [string,string,string][] = [
  [
    "Wo reichst du einen Fehlerbericht ein?",
    "Issues",
    "Issues erfassen Aufgaben, Fehler und Ideen."
  ],
  [
    "Wo findest du die Projekteinstellungen?",
    "Settings",
    "Settings enthält die Repository-Einstellungen."
  ],
  [
    "Wo siehst du die README und den aktuellen Branch?",
    "Code",
    "Code zeigt die Projektdateien und Branch-Auswahl."
  ],
  [
    "Wo lässt du eine Änderung vor der Übernahme prüfen?",
    "Pull requests",
    "Pull Requests ermöglichen Vergleich und Review."
  ],
  [
    "Wo prüfst du einen automatisierten Deployment-Workflow?",
    "Actions",
    "Actions zeigt Workflow-Ausführungen und Status."
  ]
]
export const sections: [string,string,string,string,string][] = [
  [
    "intro",
    "01",
    "GitHub Grundlagen",
    "12 Min.",
    "Git und GitHub unterscheiden, Begriffe verstehen, Konto absichern."
  ],
  [
    "navigation",
    "02",
    "Benutzeroberfläche",
    "20 Min.",
    "Profile, Organisationen, Repository-Tabs und Suche kennenlernen."
  ],
  [
    "praxis",
    "03",
    "Praxis & Live-Demo",
    "45 Min.",
    "Privates Test-Repository erstellen, README committen und Issue anlegen."
  ],
  [
    "challenge",
    "04",
    "Navigator Challenge",
    "10 Min.",
    "Fünf Navigationsrätsel lösen, Punkte sammeln und Abzeichen erhalten."
  ]
]
// Reale, freigegebene Forms-URLs hier eintragen; leere Werte aktivieren nur die lokale Übung.
export const forms: {pre:string; final:string} = {pre:'', final:''}
export const sources = [{title:'GitHub – Hallo Welt',url:'https://docs.github.com/de/get-started/start-your-journey/hello-world'},{title:'GitHub Docs',url:'https://docs.github.com/de'},{title:'Netlify Docs',url:'https://docs.netlify.com/'}]
