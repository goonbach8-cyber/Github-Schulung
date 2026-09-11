export type LessonSection = {
  title: string
  text: string
  bullets?: string[]
  code?: string
}

export type Lesson = {
  id: number
  slug: string
  title: string
  subtitle: string
  duration: string
  intro: string
  goals: string[]
  sections: LessonSection[]
  exercise: {
    title: string
    tasks: string[]
  }
  mistakes: string[]
  docsUrl: string
  docsLabel: string
}

export const lessons: Lesson[] = [
  {
    id: 1,
    slug: 'git-und-github',
    title: 'Git & GitHub verstehen',
    subtitle: 'Versionsverwaltung und Plattform unterscheiden.',
    duration: '10–15 Min.',
    intro:
      'Git und GitHub gehören zusammen, sind aber nicht dasselbe. Git ist die Versionsverwaltung auf deinem Computer. GitHub ist eine Plattform, auf der Git-Repositories gespeichert, geteilt und gemeinsam bearbeitet werden können.',
    goals: [
      'Git und GitHub voneinander unterscheiden.',
      'Repository, Working Directory und Remote erklären.',
      'Verstehen, warum Versionsverwaltung in Projekten wichtig ist.',
    ],
    sections: [
      {
        title: 'Was ist Git?',
        text:
          'Git speichert Änderungen an Dateien als nachvollziehbare Versionen. Dadurch kannst du sehen, wer etwas verändert hat, ältere Stände vergleichen und bei Bedarf zurückgehen.',
        bullets: [
          'Git läuft lokal auf deinem Computer.',
          'Änderungen werden in Commits gespeichert.',
          'Branches ermöglichen paralleles Arbeiten.',
        ],
      },
      {
        title: 'Was ist GitHub?',
        text:
          'GitHub stellt Git-Repositories online bereit und ergänzt Git um Funktionen für Zusammenarbeit. Dazu gehören Pull Requests, Issues, Reviews, Actions und Berechtigungen.',
        bullets: [
          'Repository online speichern und teilen.',
          'Zusammenarbeit über Pull Requests und Reviews.',
          'Aufgaben und Fehler mit Issues organisieren.',
          'Automatisierungen über GitHub Actions ausführen.',
        ],
      },
      {
        title: 'Local und Remote',
        text:
          'Dein lokales Repository liegt auf deinem Gerät. Das Remote-Repository liegt beispielsweise auf GitHub. Mit push sendest du lokale Commits zu GitHub, mit pull holst du Änderungen herunter.',
        code: 'git clone <repository-url>\ngit status\ngit pull\ngit push',
      },
    ],
    exercise: {
      title: 'Mini-Aufgabe',
      tasks: [
        'Öffne ein beliebiges Repository auf GitHub.',
        'Finde den Bereich mit den Dateien und die Commit-Historie.',
        'Erkläre in einem Satz den Unterschied zwischen Git und GitHub.',
      ],
    },
    mistakes: [
      'Git und GitHub als dasselbe Produkt bezeichnen.',
      'Annehmen, dass Änderungen automatisch auf GitHub landen.',
      'Direkt an wichtigen Dateien arbeiten, ohne den Versionsverlauf zu beachten.',
    ],
    docsUrl: 'https://docs.github.com/en/get-started/start-your-journey/about-github-and-git',
    docsLabel: 'GitHub Docs: About GitHub and Git',
  },
  {
    id: 2,
    slug: 'repository',
    title: 'Repository erstellen',
    subtitle: 'Ein Projekt sauber auf GitHub anlegen.',
    duration: '15 Min.',
    intro:
      'Ein Repository ist der zentrale Ort eines Projekts. Es enthält Dateien, Ordner und den vollständigen Git-Verlauf. Ein gutes Repository hat einen verständlichen Namen, eine README und eine passende Sichtbarkeit.',
    goals: [
      'Ein neues Repository auf GitHub erstellen.',
      'Public und Private sinnvoll unterscheiden.',
      'Eine README als Einstiegspunkt verwenden.',
    ],
    sections: [
      {
        title: 'Repository über GitHub erstellen',
        text:
          'Klicke auf GitHub auf New repository. Vergib einen kurzen Namen, optional eine Beschreibung und entscheide, ob das Repository öffentlich oder privat sein soll.',
        bullets: [
          'Repository-Name ohne unnötige Sonderzeichen wählen.',
          'README direkt initialisieren, wenn du neu beginnst.',
          '.gitignore nutzen, wenn lokale oder generierte Dateien ausgeschlossen werden sollen.',
        ],
      },
      {
        title: 'Public oder Private?',
        text:
          'Public bedeutet, dass grundsätzlich jede Person das Repository sehen kann. Private beschränkt den Zugriff auf berechtigte Personen. Für interne Schulprojekte oder vertrauliche Inhalte ist Private meistens sinnvoller.',
      },
      {
        title: 'README sinnvoll aufbauen',
        text:
          'Die README erklärt das Projekt. Sie sollte kurz beantworten, was das Projekt macht, wie es gestartet wird und welche Voraussetzungen nötig sind.',
        code: '# Projektname\n\nKurze Beschreibung.\n\n## Setup\n1. Repository klonen\n2. Abhängigkeiten installieren\n3. Projekt starten',
      },
    ],
    exercise: {
      title: 'Praxis',
      tasks: [
        'Erstelle ein Test-Repository.',
        'Füge eine README hinzu.',
        'Ergänze Beschreibung, Ziel und Startanleitung.',
      ],
    },
    mistakes: [
      'Vertrauliche Daten in ein öffentliches Repository hochladen.',
      'API-Keys, Passwörter oder Tokens committen.',
      'Repository ohne README und ohne erkennbare Struktur erstellen.',
    ],
    docsUrl: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository',
    docsLabel: 'GitHub Docs: Creating a new repository',
  },
  {
    id: 3,
    slug: 'commit-und-push',
    title: 'Commit, Push & Pull',
    subtitle: 'Änderungen nachvollziehbar speichern und synchronisieren.',
    duration: '15–20 Min.',
    intro:
      'Ein Commit speichert einen sinnvollen Zwischenstand im lokalen Git-Verlauf. Push überträgt Commits zu GitHub. Pull holt neue Änderungen aus dem Remote-Repository und integriert sie lokal.',
    goals: [
      'status, add, commit, push und pull richtig einordnen.',
      'Saubere Commit-Messages schreiben.',
      'Lokale und entfernte Änderungen synchronisieren.',
    ],
    sections: [
      {
        title: 'Der typische Ablauf',
        text:
          'Bevor du commitest, prüfst du zuerst den aktuellen Status. Danach wählst du Änderungen aus, speicherst sie als Commit und lädst sie zu GitHub hoch.',
        code: 'git status\ngit add .\ngit commit -m "Login-Validierung ergänzt"\ngit push',
      },
      {
        title: 'Gute Commits',
        text:
          'Ein Commit sollte eine zusammengehörige Änderung enthalten. Eine gute Commit-Message beschreibt konkret, was geändert wurde.',
        bullets: [
          'Gut: "Fehlerbehandlung beim Login ergänzt"',
          'Gut: "Navigation auf Mobilgeräten korrigiert"',
          'Schlecht: "update"',
          'Schlecht: "zeug fertig"',
        ],
      },
      {
        title: 'Pull vor neuer Arbeit',
        text:
          'Wenn mehrere Personen an einem Repository arbeiten, solltest du regelmässig den aktuellen Stand holen. So reduzierst du Konflikte.',
        code: 'git pull',
      },
    ],
    exercise: {
      title: 'Praxis',
      tasks: [
        'Ändere eine Zeile in deiner README.',
        'Prüfe die Änderung mit git status.',
        'Committe sie mit einer verständlichen Message.',
        'Pushe den Commit zu GitHub und kontrolliere ihn dort.',
      ],
    },
    mistakes: [
      'Sehr viele unabhängige Änderungen in einen einzigen Commit packen.',
      'Nichtssagende Commit-Messages verwenden.',
      'Vor längerer Arbeit nie pull ausführen.',
    ],
    docsUrl: 'https://docs.github.com/en/get-started/using-git/about-git',
    docsLabel: 'GitHub Docs: Using Git',
  },
  {
    id: 4,
    slug: 'branches',
    title: 'Branches',
    subtitle: 'Neue Funktionen getrennt vom Hauptstand entwickeln.',
    duration: '15–20 Min.',
    intro:
      'Ein Branch ist eine eigene Entwicklungslinie. Du kannst Änderungen ausprobieren, ohne den stabilen main-Branch direkt zu verändern. Das ist besonders wichtig, wenn mehrere Personen gleichzeitig arbeiten.',
    goals: [
      'Verstehen, warum Branches genutzt werden.',
      'Einen Feature-Branch erstellen und wechseln.',
      'Eine sinnvolle Branch-Benennung verwenden.',
    ],
    sections: [
      {
        title: 'Feature-Branch erstellen',
        text:
          'Erstelle für eine neue Aufgabe einen eigenen Branch. Der Name sollte erkennen lassen, woran gearbeitet wird.',
        code: 'git checkout -b feature/login-form',
      },
      {
        title: 'Branch-Namen',
        text:
          'Einheitliche Namen helfen im Team. Häufig werden Präfixe wie feature, fix oder docs verwendet.',
        bullets: [
          'feature/login-form',
          'fix/mobile-navigation',
          'docs/readme-setup',
        ],
      },
      {
        title: 'Warum nicht direkt auf main?',
        text:
          'Der main-Branch sollte möglichst stabil bleiben. Auf einem eigenen Branch kannst du Änderungen testen und erst nach einem Review zusammenführen.',
      },
    ],
    exercise: {
      title: 'Praxis',
      tasks: [
        'Erstelle den Branch feature/readme-update.',
        'Ändere dort die README.',
        'Committe und pushe den Branch.',
        'Kontrolliere auf GitHub, dass main noch unverändert ist.',
      ],
    },
    mistakes: [
      'Alle Änderungen direkt auf main durchführen.',
      'Unklare Branch-Namen wie test2 oder neu verwenden.',
      'Alte, bereits gemergte Branches unnötig weiterverwenden.',
    ],
    docsUrl: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches',
    docsLabel: 'GitHub Docs: About branches',
  },
  {
    id: 5,
    slug: 'pull-requests',
    title: 'Pull Requests & Reviews',
    subtitle: 'Änderungen gemeinsam prüfen und sicher zusammenführen.',
    duration: '20 Min.',
    intro:
      'Ein Pull Request zeigt die Unterschiede zwischen zwei Branches und schlägt vor, sie zusammenzuführen. Er ist der zentrale Ort für Review, Diskussion und Freigabe.',
    goals: [
      'Einen Pull Request erstellen.',
      'Änderungen im Diff lesen.',
      'Review-Kommentare verstehen und auf Feedback reagieren.',
    ],
    sections: [
      {
        title: 'Pull Request erstellen',
        text:
          'Nachdem dein Branch auf GitHub liegt, kannst du einen Pull Request Richtung main öffnen. Titel und Beschreibung sollten klar erklären, was geändert wurde und warum.',
        bullets: [
          'Kurzen, konkreten Titel verwenden.',
          'In der Beschreibung Änderung und Test erklären.',
          'Bei Bedarf Issue oder Aufgabe verlinken.',
        ],
      },
      {
        title: 'Changes prüfen',
        text:
          'Im Tab Files changed siehst du, welche Zeilen entfernt oder ergänzt wurden. Reviewer können einzelne Zeilen kommentieren und Änderungen verlangen.',
      },
      {
        title: 'Merge',
        text:
          'Erst wenn die Änderung geprüft wurde und alle nötigen Checks erfolgreich sind, wird der Pull Request gemerged. Danach kann der Feature-Branch meistens gelöscht werden.',
      },
    ],
    exercise: {
      title: 'Praxis',
      tasks: [
        'Erstelle für deinen Übungs-Branch einen Pull Request.',
        'Schreibe eine kurze Beschreibung.',
        'Öffne Files changed und überprüfe den Diff.',
        'Merge den Pull Request und lösche danach den Branch.',
      ],
    },
    mistakes: [
      'Pull Request ohne Beschreibung erstellen.',
      'Sehr grosse Pull Requests mit vielen Themen gleichzeitig.',
      'Merge durchführen, obwohl offene Review-Kommentare vorhanden sind.',
    ],
    docsUrl: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request',
    docsLabel: 'GitHub Docs: Creating a pull request',
  },
  {
    id: 6,
    slug: 'zusammenarbeit',
    title: 'Zusammenarbeit mit Issues & Reviews',
    subtitle: 'Aufgaben, Fehler und Änderungen im Team organisieren.',
    duration: '15–20 Min.',
    intro:
      'GitHub ist nicht nur ein Speicherort für Code. Issues, Reviews und Actions machen aus einem Repository eine Arbeitsplattform für Teams.',
    goals: [
      'Issues für Aufgaben und Fehler verwenden.',
      'Reviews als Qualitätskontrolle verstehen.',
      'Einfache Regeln für gute Zusammenarbeit anwenden.',
    ],
    sections: [
      {
        title: 'Issues',
        text:
          'Issues können Aufgaben, Bugs oder Ideen dokumentieren. Gute Issues haben einen klaren Titel, genügend Kontext und ein erwartetes Ergebnis.',
        bullets: [
          'Problem oder Ziel verständlich beschreiben.',
          'Labels verwenden, wenn das Team sie nutzt.',
          'Verantwortliche Person und Meilenstein zuweisen, wenn sinnvoll.',
        ],
      },
      {
        title: 'Code Reviews',
        text:
          'Reviews helfen dabei, Fehler früh zu erkennen und Wissen zu teilen. Feedback sollte sachlich und konkret sein.',
        bullets: [
          'Fragen stellen statt nur Fehler markieren.',
          'Vorschläge begründen.',
          'Kleine Pull Requests lassen sich leichter prüfen.',
        ],
      },
      {
        title: 'Ein einfacher Team-Workflow',
        text:
          'Eine Aufgabe startet als Issue. Danach wird ein Branch erstellt, die Änderung umgesetzt, als Pull Request eingereicht, reviewed und schliesslich gemerged.',
        code: 'Issue → Branch → Commit → Push → Pull Request → Review → Merge',
      },
    ],
    exercise: {
      title: 'Abschlussaufgabe',
      tasks: [
        'Erstelle ein Issue für eine kleine Verbesserung.',
        'Erstelle einen passenden Branch.',
        'Setze die Änderung um und öffne einen Pull Request.',
        'Verknüpfe den Pull Request mit dem Issue.',
      ],
    },
    mistakes: [
      'Aufgaben nur mündlich absprechen und nirgends dokumentieren.',
      'Reviews persönlich statt sachlich formulieren.',
      'Keine klare Verbindung zwischen Issue, Branch und Pull Request herstellen.',
    ],
    docsUrl: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues',
    docsLabel: 'GitHub Docs: About issues',
  },
]

export const quiz = [
  {
    question: 'Was ist ein Repository?',
    answers: ['Ein Chatraum', 'Ein Projekt mit Dateien und Versionsverlauf', 'Nur eine einzelne Datei'],
    correct: 1,
  },
  {
    question: 'Wofür wird ein Branch verwendet?',
    answers: ['Für getrennte parallele Änderungen', 'Zum Löschen des Projekts', 'Zum Anmelden bei GitHub'],
    correct: 0,
  },
  {
    question: 'Was macht ein Commit?',
    answers: ['Er veröffentlicht automatisch eine Website', 'Er speichert einen definierten Stand von Änderungen', 'Er löscht alte Versionen'],
    correct: 1,
  },
  {
    question: 'Was ist der Zweck eines Pull Requests?',
    answers: ['Änderungen prüfen und zusammenführen', 'Ein Passwort ändern', 'Git installieren'],
    correct: 0,
  },
  {
    question: 'Welche Commit-Message ist am sinnvollsten?',
    answers: ['update', 'zeug', 'Login-Validierung für leere Felder ergänzt'],
    correct: 2,
  },
]
