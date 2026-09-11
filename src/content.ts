export type Lesson = {
  id: number
  title: string
  subtitle: string
  points: string[]
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Git & GitHub verstehen',
    subtitle: 'Die Grundlage für alles Weitere.',
    points: [
      'Git speichert Versionen eines Projekts.',
      'GitHub hostet Git-Repositories und unterstützt Zusammenarbeit.',
      'Änderungen bleiben nachvollziehbar und können verglichen werden.',
    ],
  },
  {
    id: 2,
    title: 'Repository erstellen',
    subtitle: 'Der zentrale Projektort.',
    points: [
      'Ein Repository enthält Dateien und Versionsverlauf.',
      'README erklärt Zweck, Setup und Nutzung.',
      'Repositories können öffentlich oder privat sein.',
    ],
  },
  {
    id: 3,
    title: 'Commit & Push',
    subtitle: 'Änderungen sauber speichern und hochladen.',
    points: [
      'Ein Commit speichert einen definierten Zwischenstand.',
      'Commit-Messages sollen kurz und eindeutig sein.',
      'Push lädt lokale Commits zum Remote-Repository hoch.',
    ],
  },
  {
    id: 4,
    title: 'Branches',
    subtitle: 'Parallel arbeiten ohne den Hauptstand zu gefährden.',
    points: [
      'Branches trennen neue Arbeiten vom main-Branch.',
      'Features lassen sich unabhängig entwickeln und testen.',
      'Nach Abschluss werden Änderungen wieder zusammengeführt.',
    ],
  },
  {
    id: 5,
    title: 'Pull Requests',
    subtitle: 'Änderungen sichtbar prüfen und zusammenführen.',
    points: [
      'Ein Pull Request beschreibt die geplante Änderung.',
      'Andere Personen können Code reviewen und kommentieren.',
      'Nach Freigabe wird der Branch gemerged.',
    ],
  },
  {
    id: 6,
    title: 'Zusammenarbeit',
    subtitle: 'GitHub als Team-Werkzeug einsetzen.',
    points: [
      'Issues dokumentieren Aufgaben, Ideen oder Fehler.',
      'Reviews verbessern Qualität und Wissenstransfer.',
      'Eine klare Struktur reduziert Missverständnisse im Team.',
    ],
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
