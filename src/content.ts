export type Chapter = {
  slug: string
  title: string
  summary: string
  duration: string
  text: string
  bullets?: string[]
  steps?: string[]
  code?: string
  task: string[]
  docsUrl: string
  docsLabel: string
}

export type Lesson = {
  id: number
  slug: string
  title: string
  subtitle: string
  duration: string
  intro: string
  goals: string[]
  chapters: Chapter[]
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
    duration: '20–25 Min.',
    intro:
      'Bevor du mit Branches und Pull Requests arbeitest, musst du verstehen, was Git lokal macht und welche Rolle GitHub als Plattform übernimmt.',
    goals: [
      'Git und GitHub klar voneinander unterscheiden.',
      'Repository, Working Directory und Remote erklären.',
      'Verstehen, wie lokale und entfernte Änderungen zusammenhängen.',
    ],
    chapters: [
      {
        slug: 'git-vs-github',
        title: 'Git vs. GitHub',
        summary: 'Die zwei Begriffe sauber auseinanderhalten.',
        duration: '6 Min.',
        text:
          'Git ist ein Versionsverwaltungssystem. Es läuft lokal auf deinem Computer und speichert Änderungen an Dateien als nachvollziehbare Versionen. GitHub ist eine Online-Plattform rund um Git. Dort kannst du Repositories hosten, mit anderen Personen zusammenarbeiten und Funktionen wie Pull Requests, Issues und Actions nutzen.',
        bullets: [
          'Git = Versionsverwaltung auf deinem Gerät.',
          'GitHub = Plattform für Repositories und Zusammenarbeit.',
          'Du kannst Git auch ohne GitHub verwenden.',
          'GitHub baut auf Git auf und ergänzt Team-Funktionen.',
        ],
        task: [
          'Formuliere in einem Satz den Unterschied zwischen Git und GitHub.',
          'Nenne zwei Funktionen, die GitHub zusätzlich zu Git bietet.',
        ],
        docsUrl: 'https://docs.github.com/en/get-started/start-your-journey/about-github-and-git',
        docsLabel: 'About GitHub and Git',
      },
      {
        slug: 'repository-aufbau',
        title: 'Wie ein Repository aufgebaut ist',
        summary: 'Dateien, Verlauf und Metadaten verstehen.',
        duration: '7 Min.',
        text:
          'Ein Repository ist ein Projektordner mit Versionsverlauf. Neben den eigentlichen Dateien speichert Git Informationen zu Commits, Branches und dem aktuellen Zustand des Projekts.',
        bullets: [
          'Working Directory: Dateien, an denen du gerade arbeitest.',
          'Git-Verlauf: gespeicherte Commits des Projekts.',
          'Branch: eine eigene Entwicklungslinie.',
          'Remote: die entfernte Version des Repositories, zum Beispiel auf GitHub.',
        ],
        code: 'git status\ngit log --oneline',
        task: [
          'Öffne ein Repository auf GitHub.',
          'Finde die Dateiübersicht und die Commit-Historie.',
          'Suche den Namen des aktuell angezeigten Branches.',
        ],
        docsUrl: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories',
        docsLabel: 'About repositories',
      },
      {
        slug: 'local-und-remote',
        title: 'Local und Remote',
        summary: 'Verstehen, wo Änderungen wirklich liegen.',
        duration: '7 Min.',
        text:
          'Dein lokales Repository befindet sich auf deinem Gerät. Das Remote-Repository liegt zum Beispiel auf GitHub. Erst mit push überträgst du lokale Commits zu GitHub. Mit pull holst du Änderungen aus dem Remote-Repository auf deinen Computer.',
        steps: [
          'Repository mit clone auf den Computer holen.',
          'Lokal Dateien bearbeiten und committen.',
          'Commits mit push zu GitHub übertragen.',
          'Änderungen anderer Personen mit pull holen.',
        ],
        code: 'git clone <repository-url>\ngit pull\ngit push',
        task: [
          'Erkläre, warum ein lokaler Commit noch nicht automatisch auf GitHub sichtbar ist.',
          'Ordne clone, pull und push den Richtungen lokal → remote bzw. remote → lokal zu.',
        ],
        docsUrl: 'https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository',
        docsLabel: 'Getting changes from a remote repository',
      },
    ],
    exercise: {
      title: 'Modul-Challenge',
      tasks: [
        'Öffne ein beliebiges Repository auf GitHub.',
        'Finde Branch, Commits und README.',
        'Erkläre einem Kollegen den Unterschied zwischen Git, GitHub, lokalem Repository und Remote.',
      ],
    },
    mistakes: [
      'Git und GitHub als dasselbe Produkt bezeichnen.',
      'Annehmen, dass lokale Änderungen automatisch online sind.',
      'Nicht wissen, auf welchem Branch man arbeitet.',
    ],
    docsUrl: 'https://docs.github.com/en/get-started/start-your-journey/about-github-and-git',
    docsLabel: 'GitHub Docs: About GitHub and Git',
  },
  {
    id: 2,
    slug: 'repository',
    title: 'Repository erstellen',
    subtitle: 'Ein Projekt sauber auf GitHub anlegen.',
    duration: '25–30 Min.',
    intro:
      'Ein gutes Repository beginnt mit einer klaren Struktur. In diesem Modul erstellst du ein Repository, legst die wichtigsten Dateien an und holst das Projekt auf deinen Computer.',
    goals: [
      'Ein Repository korrekt erstellen.',
      'README und .gitignore sinnvoll verwenden.',
      'Ein Repository klonen und lokal öffnen.',
    ],
    chapters: [
      {
        slug: 'repository-erstellen',
        title: 'Repository auf GitHub erstellen',
        summary: 'Name, Sichtbarkeit und Startoptionen richtig wählen.',
        duration: '8 Min.',
        text:
          'Über New repository legst du ein neues Projekt an. Der Name sollte kurz und eindeutig sein. Die Sichtbarkeit entscheidet, wer das Repository sehen kann.',
        bullets: [
          'Public: grundsätzlich öffentlich sichtbar.',
          'Private: nur für berechtigte Personen sichtbar.',
          'README kann direkt beim Erstellen hinzugefügt werden.',
          'Lizenz und .gitignore können ebenfalls vorbereitet werden.',
        ],
        steps: [
          'Auf GitHub New repository auswählen.',
          'Repository-Name und Beschreibung eintragen.',
          'Public oder Private festlegen.',
          'README initialisieren.',
          'Repository erstellen.',
        ],
        task: [
          'Erstelle ein Test-Repository mit README.',
          'Vergib eine kurze Beschreibung.',
          'Prüfe, ob die gewählte Sichtbarkeit zu deinem Zweck passt.',
        ],
        docsUrl: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository',
        docsLabel: 'Creating a new repository',
      },
      {
        slug: 'readme-und-gitignore',
        title: 'README & .gitignore',
        summary: 'Das Repository verständlich und sauber halten.',
        duration: '9 Min.',
        text:
          'Die README ist die Einstiegsseite deines Projekts. Eine .gitignore verhindert, dass bestimmte lokale, generierte oder vertrauliche Dateien versehentlich in Git aufgenommen werden.',
        bullets: [
          'README: Zweck, Setup, Nutzung und wichtige Hinweise.',
          '.gitignore: z. B. node_modules, Build-Dateien oder lokale Konfigurationen.',
          'Keine Passwörter, Tokens oder API-Keys committen.',
        ],
        code: '# Projektname\n\nKurze Beschreibung.\n\n## Setup\n1. Repository klonen\n2. Abhängigkeiten installieren\n3. Projekt starten',
        task: [
          'Ergänze deine README um Ziel, Setup und Nutzung.',
          'Füge eine passende .gitignore hinzu.',
          'Überlege, welche Dateien niemals in dein Repository gehören.',
        ],
        docsUrl: 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes',
        docsLabel: 'About READMEs',
      },
      {
        slug: 'repository-klonen',
        title: 'Repository klonen',
        summary: 'Das Projekt auf deinen Computer holen.',
        duration: '8 Min.',
        text:
          'Mit git clone erstellst du eine lokale Kopie des Repositories inklusive Versionsverlauf und Verbindung zum Remote-Repository.',
        steps: [
          'Auf GitHub den Code-Button öffnen.',
          'HTTPS-URL kopieren.',
          'Terminal im gewünschten Ordner öffnen.',
          'git clone ausführen.',
          'In den neuen Projektordner wechseln.',
        ],
        code: 'git clone https://github.com/USER/REPOSITORY.git\ncd REPOSITORY\ngit status',
        task: [
          'Klone dein Test-Repository.',
          'Öffne den Ordner in deinem Editor.',
          'Führe git status aus und lies die Ausgabe.',
        ],
        docsUrl: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository',
        docsLabel: 'Cloning a repository',
      },
    ],
    exercise: {
      title: 'Modul-Challenge',
      tasks: [
        'Erstelle ein sauberes Test-Repository.',
        'Dokumentiere es mit einer README.',
        'Klone es lokal und prüfe die Remote-Verbindung.',
      ],
    },
    mistakes: [
      'Vertrauliche Daten in ein öffentliches Repository hochladen.',
      'API-Keys oder Passwörter committen.',
      'README und Projektstruktur vernachlässigen.',
    ],
    docsUrl: 'https://docs.github.com/en/repositories/creating-and-managing-repositories',
    docsLabel: 'GitHub Docs: Repositories',
  },
  {
    id: 3,
    slug: 'commit-und-push',
    title: 'Commit, Push & Pull',
    subtitle: 'Änderungen nachvollziehbar speichern und synchronisieren.',
    duration: '30–35 Min.',
    intro:
      'Jetzt arbeitest du wirklich mit Git. Du lernst den Weg von einer geänderten Datei über die Staging Area bis zum Commit und anschliessend zu GitHub.',
    goals: [
      'Working Tree, Staging Area und Commit unterscheiden.',
      'Saubere Commits erstellen.',
      'Push und Pull korrekt verwenden.',
    ],
    chapters: [
      {
        slug: 'status-und-staging',
        title: 'Status & Staging Area',
        summary: 'Änderungen kontrolliert für den Commit vorbereiten.',
        duration: '10 Min.',
        text:
          'Git unterscheidet zwischen geänderten Dateien und Änderungen, die für den nächsten Commit vorgemerkt sind. Mit git status siehst du den aktuellen Zustand. Mit git add verschiebst du Änderungen in die Staging Area.',
        code: 'git status\ngit add README.md\ngit status',
        bullets: [
          'Modified: Datei wurde geändert.',
          'Staged: Änderung ist für den nächsten Commit vorgemerkt.',
          'Untracked: Git kennt die Datei noch nicht.',
        ],
        task: [
          'Ändere deine README.',
          'Führe git status aus.',
          'Stage nur die README und prüfe erneut den Status.',
        ],
        docsUrl: 'https://docs.github.com/en/get-started/using-git/about-git',
        docsLabel: 'About Git',
      },
      {
        slug: 'commits',
        title: 'Gute Commits erstellen',
        summary: 'Kleine, verständliche Zwischenstände speichern.',
        duration: '10 Min.',
        text:
          'Ein Commit sollte genau eine zusammengehörige Änderung beschreiben. So bleibt der Verlauf verständlich und Fehler lassen sich leichter nachvollziehen.',
        bullets: [
          'Gut: "Login-Validierung für leere Felder ergänzt".',
          'Gut: "README um Setup-Anleitung erweitert".',
          'Schlecht: "update".',
          'Schlecht: "alles fertig".',
        ],
        code: 'git commit -m "README um Setup-Anleitung erweitert"\ngit log --oneline',
        task: [
          'Erstelle einen Commit für deine README-Änderung.',
          'Nutze eine konkrete Commit-Message.',
          'Prüfe den Commit mit git log --oneline.',
        ],
        docsUrl: 'https://docs.github.com/en/get-started/using-git/about-git',
        docsLabel: 'About Git',
      },
      {
        slug: 'push-und-pull',
        title: 'Push & Pull',
        summary: 'Lokales und Remote-Repository synchron halten.',
        duration: '10–15 Min.',
        text:
          'Mit push überträgst du lokale Commits zum Remote-Repository. Mit pull holst du neue Änderungen von dort. In Teamprojekten solltest du regelmässig pull verwenden, bevor du neue Arbeit beginnst.',
        code: 'git pull\ngit push\n\n# Erster Push eines neuen Branches\ngit push -u origin feature/mein-branch',
        task: [
          'Pushe deinen neuen Commit.',
          'Kontrolliere auf GitHub, ob er sichtbar ist.',
          'Ändere die README einmal direkt auf GitHub und hole die Änderung mit git pull.',
        ],
        docsUrl: 'https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository',
        docsLabel: 'Pushing commits to a remote repository',
      },
    ],
    exercise: {
      title: 'Modul-Challenge',
      tasks: [
        'Ändere zwei Dateien.',
        'Erstelle daraus zwei sinnvolle Commits.',
        'Pushe beide Commits und prüfe den Verlauf auf GitHub.',
      ],
    },
    mistakes: [
      'Zu viele unabhängige Änderungen in einen Commit packen.',
      'Nichtssagende Commit-Messages schreiben.',
      'Lange arbeiten, ohne den aktuellen Remote-Stand zu holen.',
    ],
    docsUrl: 'https://docs.github.com/en/get-started/using-git',
    docsLabel: 'GitHub Docs: Using Git',
  },
  {
    id: 4,
    slug: 'branches',
    title: 'Branches',
    subtitle: 'Neue Funktionen getrennt vom Hauptstand entwickeln.',
    duration: '30–35 Min.',
    intro:
      'Branches sind einer der wichtigsten Bestandteile professioneller Git-Workflows. Sie erlauben parallele Änderungen, ohne den stabilen main-Branch direkt zu verändern.',
    goals: [
      'Den Zweck von Branches erklären.',
      'Branches erstellen, wechseln und veröffentlichen.',
      'Einen einfachen Feature-Branch-Workflow durchführen.',
    ],
    chapters: [
      {
        slug: 'warum-branches',
        title: 'Warum Branches?',
        summary: 'Parallel arbeiten, ohne main zu gefährden.',
        duration: '8 Min.',
        text:
          'Ein Branch ist eine eigene Entwicklungslinie. Neue Funktionen, Fehlerbehebungen oder Experimente können getrennt vom Hauptstand entwickelt werden.',
        bullets: [
          'main bleibt möglichst stabil.',
          'Mehrere Personen können parallel arbeiten.',
          'Änderungen werden erst nach Prüfung zusammengeführt.',
        ],
        task: [
          'Überlege dir zwei Situationen, in denen ein eigener Branch sinnvoll ist.',
          'Erkläre, warum direkte Änderungen auf main riskanter sind.',
        ],
        docsUrl: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches',
        docsLabel: 'About branches',
      },
      {
        slug: 'branch-erstellen',
        title: 'Branch erstellen & wechseln',
        summary: 'Eine neue Entwicklungslinie anlegen.',
        duration: '10 Min.',
        text:
          'Mit git switch -c oder git checkout -b erstellst du einen neuen Branch und wechselst direkt darauf. Der Name sollte den Zweck beschreiben.',
        code: 'git switch -c feature/login-form\n# alternativ\ngit checkout -b feature/login-form\n\ngit branch',
        bullets: [
          'feature/login-form',
          'fix/mobile-navigation',
          'docs/readme-update',
        ],
        task: [
          'Erstelle feature/readme-update.',
          'Prüfe mit git branch, welcher Branch aktiv ist.',
          'Ändere die README nur auf diesem Branch.',
        ],
        docsUrl: 'https://docs.github.com/en/get-started/using-git/managing-remote-repositories',
        docsLabel: 'Managing remote repositories',
      },
      {
        slug: 'branch-workflow',
        title: 'Feature-Branch-Workflow',
        summary: 'Änderung entwickeln, pushen und für Review vorbereiten.',
        duration: '12–15 Min.',
        text:
          'Ein typischer Ablauf beginnt auf main. Danach wird ein Feature-Branch erstellt, die Änderung umgesetzt, committet und zu GitHub gepusht. Anschliessend folgt der Pull Request.',
        steps: [
          'main aktualisieren.',
          'Feature-Branch erstellen.',
          'Änderung umsetzen und testen.',
          'Commit erstellen.',
          'Branch pushen.',
          'Pull Request öffnen.',
        ],
        code: 'git switch main\ngit pull\ngit switch -c feature/readme-update\n# Dateien ändern\ngit add .\ngit commit -m "README erweitern"\ngit push -u origin feature/readme-update',
        task: [
          'Führe den vollständigen Ablauf mit deinem Test-Repository durch.',
          'Kontrolliere auf GitHub, dass main und Feature-Branch unterschiedlich sind.',
        ],
        docsUrl: 'https://docs.github.com/en/get-started/using-git/about-git',
        docsLabel: 'About Git',
      },
    ],
    exercise: {
      title: 'Modul-Challenge',
      tasks: [
        'Erstelle einen Feature-Branch.',
        'Setze eine kleine Änderung um.',
        'Committe und pushe den Branch.',
        'Bereite ihn für einen Pull Request vor.',
      ],
    },
    mistakes: [
      'Alles direkt auf main entwickeln.',
      'Unklare Branch-Namen wie neu2 verwenden.',
      'Vor dem Erstellen des Branches den main-Stand nicht aktualisieren.',
    ],
    docsUrl: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches',
    docsLabel: 'GitHub Docs: About branches',
  },
  {
    id: 5,
    slug: 'pull-requests',
    title: 'Pull Requests & Reviews',
    subtitle: 'Änderungen gemeinsam prüfen und sicher zusammenführen.',
    duration: '30–35 Min.',
    intro:
      'Pull Requests verbinden Entwicklung und Zusammenarbeit. Sie zeigen Änderungen, ermöglichen Feedback und schaffen einen nachvollziehbaren Freigabeprozess.',
    goals: [
      'Pull Requests korrekt erstellen.',
      'Diffs lesen und Reviews verstehen.',
      'Änderungen sicher mergen.',
    ],
    chapters: [
      {
        slug: 'pull-request-erstellen',
        title: 'Pull Request erstellen',
        summary: 'Eine Änderung verständlich zur Prüfung einreichen.',
        duration: '10 Min.',
        text:
          'Wenn dein Branch auf GitHub liegt, kannst du einen Pull Request Richtung main öffnen. Titel und Beschreibung sollen erklären, was geändert wurde und warum.',
        bullets: [
          'Konkreten Titel verwenden.',
          'Änderung und Grund beschreiben.',
          'Tests oder Prüfschritte erwähnen.',
          'Bei Bedarf ein Issue verlinken.',
        ],
        task: [
          'Öffne für deinen Feature-Branch einen Pull Request.',
          'Schreibe eine kurze Beschreibung mit Was? Warum? Wie getestet?',
        ],
        docsUrl: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request',
        docsLabel: 'Creating a pull request',
      },
      {
        slug: 'diff-und-review',
        title: 'Diff & Review',
        summary: 'Änderungen lesen, kommentieren und verbessern.',
        duration: '10–12 Min.',
        text:
          'Im Bereich Files changed siehst du den Diff. Hinzugefügte und entfernte Zeilen werden direkt gegenübergestellt. Reviewer können einzelne Zeilen kommentieren, Fragen stellen oder Änderungen verlangen.',
        bullets: [
          'Prüfe nur die Änderungen, nicht nur das Endergebnis.',
          'Feedback sachlich und konkret formulieren.',
          'Offene Kommentare vor dem Merge klären.',
        ],
        task: [
          'Öffne Files changed in deinem Pull Request.',
          'Lies jede geänderte Zeile.',
          'Schreibe einen Beispiel-Review-Kommentar.',
        ],
        docsUrl: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests',
        docsLabel: 'Reviewing changes in pull requests',
      },
      {
        slug: 'merge',
        title: 'Merge & Aufräumen',
        summary: 'Freigegebene Änderungen in main übernehmen.',
        duration: '10 Min.',
        text:
          'Nach erfolgreichem Review kann der Pull Request gemerged werden. Danach wird der Feature-Branch häufig gelöscht. Lokal holst du anschliessend den neuen main-Stand.',
        steps: [
          'Offene Review-Kommentare klären.',
          'Checks kontrollieren.',
          'Pull Request mergen.',
          'Feature-Branch auf GitHub löschen.',
          'Lokal auf main wechseln und pull ausführen.',
        ],
        code: 'git switch main\ngit pull\ngit branch -d feature/readme-update',
        task: [
          'Merge deinen Übungs-Pull-Request.',
          'Lösche den Branch auf GitHub.',
          'Aktualisiere deinen lokalen main-Branch.',
        ],
        docsUrl: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request',
        docsLabel: 'Merging a pull request',
      },
    ],
    exercise: {
      title: 'Modul-Challenge',
      tasks: [
        'Erstelle einen vollständigen Pull Request.',
        'Prüfe den Diff.',
        'Simuliere ein Review.',
        'Merge und räume den Branch anschliessend auf.',
      ],
    },
    mistakes: [
      'Pull Requests ohne Beschreibung erstellen.',
      'Sehr grosse Pull Requests mit mehreren Themen.',
      'Mergen, obwohl offene Review-Kommentare bestehen.',
    ],
    docsUrl: 'https://docs.github.com/en/pull-requests',
    docsLabel: 'GitHub Docs: Pull requests',
  },
  {
    id: 6,
    slug: 'zusammenarbeit',
    title: 'Zusammenarbeit mit Issues & Reviews',
    subtitle: 'Aufgaben, Fehler und Änderungen im Team organisieren.',
    duration: '30–35 Min.',
    intro:
      'GitHub kann als gemeinsame Arbeitsplattform genutzt werden. Issues strukturieren Aufgaben, Reviews verbessern Qualität und einfache Regeln sorgen für einen nachvollziehbaren Team-Workflow.',
    goals: [
      'Issues sinnvoll formulieren.',
      'Reviews konstruktiv durchführen.',
      'Issue, Branch und Pull Request miteinander verbinden.',
    ],
    chapters: [
      {
        slug: 'issues',
        title: 'Issues für Aufgaben & Bugs',
        summary: 'Arbeit sichtbar und nachvollziehbar organisieren.',
        duration: '10 Min.',
        text:
          'Ein Issue kann eine Aufgabe, einen Bug oder eine Idee beschreiben. Gute Issues enthalten genug Kontext, ein klares Ziel und falls nötig Schritte zur Reproduktion.',
        bullets: [
          'Kurzer, eindeutiger Titel.',
          'Beschreibung des Problems oder Ziels.',
          'Erwartetes Ergebnis.',
          'Labels, Verantwortliche und Milestones bei Bedarf.',
        ],
        task: [
          'Erstelle ein Issue für eine kleine Verbesserung.',
          'Formuliere Ziel und Akzeptanzkriterium.',
          'Vergib ein sinnvolles Label, falls vorhanden.',
        ],
        docsUrl: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues',
        docsLabel: 'About issues',
      },
      {
        slug: 'reviews-im-team',
        title: 'Gute Reviews im Team',
        summary: 'Qualität verbessern und Wissen teilen.',
        duration: '10 Min.',
        text:
          'Code Reviews sind nicht nur Fehlersuche. Sie helfen dabei, Wissen im Team zu teilen, Standards einzuhalten und Änderungen verständlicher zu machen.',
        bullets: [
          'Sachlich statt persönlich formulieren.',
          'Fragen stellen, wenn die Absicht unklar ist.',
          'Verbesserungsvorschläge begründen.',
          'Kleine Pull Requests sind leichter zu reviewen.',
        ],
        task: [
          'Formuliere einen konstruktiven Review-Kommentar.',
          'Formuliere denselben Hinweis einmal schlecht und einmal gut.',
        ],
        docsUrl: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews',
        docsLabel: 'About pull request reviews',
      },
      {
        slug: 'team-workflow',
        title: 'Vom Issue bis zum Merge',
        summary: 'Alle GitHub-Bausteine zu einem Workflow verbinden.',
        duration: '10–15 Min.',
        text:
          'Ein sauberer Team-Workflow verbindet Planung, Entwicklung und Review. Eine Aufgabe startet als Issue, wird auf einem Branch umgesetzt und endet mit einem überprüften Pull Request.',
        steps: [
          'Issue erstellen und Ziel klären.',
          'Passenden Branch erstellen.',
          'Änderung in kleinen Commits umsetzen.',
          'Branch pushen.',
          'Pull Request öffnen und Issue verlinken.',
          'Review durchführen.',
          'Merge und Issue abschliessen.',
        ],
        code: 'Issue → Branch → Commit → Push → Pull Request → Review → Merge',
        task: [
          'Führe den gesamten Ablauf mit einem kleinen Übungs-Issue durch.',
          'Verknüpfe Pull Request und Issue.',
          'Prüfe nach dem Merge, ob der Ablauf nachvollziehbar dokumentiert ist.',
        ],
        docsUrl: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue',
        docsLabel: 'Linking a pull request to an issue',
      },
    ],
    exercise: {
      title: 'Abschluss-Challenge',
      tasks: [
        'Erstelle ein Issue für eine Verbesserung.',
        'Erstelle einen passenden Branch.',
        'Setze die Änderung um und öffne einen Pull Request.',
        'Reviewe, merge und schliesse die Aufgabe ab.',
      ],
    },
    mistakes: [
      'Aufgaben nur mündlich absprechen.',
      'Reviews persönlich statt sachlich formulieren.',
      'Issue, Branch und Pull Request nicht miteinander verknüpfen.',
    ],
    docsUrl: 'https://docs.github.com/en/issues',
    docsLabel: 'GitHub Docs: Issues',
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
