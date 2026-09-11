import { useEffect, useMemo, useState } from 'react'
import { lessons, quiz } from './content'

const storageKey = 'github-schulung-progress'

function App() {
  const [done, setDone] = useState<number[]>([])
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [step, setStep] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (stored) setDone(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(done))
  }, [done])

  const progress = Math.round((done.length / lessons.length) * 100)
  const score = useMemo(
    () => Object.entries(answers).filter(([i, answer]) => quiz[Number(i)].correct === answer).length,
    [answers],
  )

  const toggleLesson = (id: number) => {
    setDone(current =>
      current.includes(id) ? current.filter(item => item !== id) : [...current, id],
    )
  }

  const workflow = [
    ['1', 'Branch', 'Neue Arbeitslinie erstellen'],
    ['2', 'Ändern', 'Dateien bearbeiten'],
    ['3', 'Commit', 'Zwischenstand speichern'],
    ['4', 'Push', 'Zu GitHub hochladen'],
    ['5', 'Pull Request', 'Review und Merge'],
  ]

  return (
    <div>
      <header className="topbar">
        <a className="brand" href="#top">
          <span className="brandMark">GH</span>
          <span>GitHub Schulung</span>
        </a>
        <nav>
          <a href="#lernziele">Lernziele</a>
          <a href="#module">Module</a>
          <a href="#praxis">Praxis</a>
          <a href="#quiz">Quiz</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="heroCopy">
            <p className="eyebrow">Modul 219 · Interaktive Ausbildungssequenz</p>
            <h1>GitHub verstehen, anwenden und im Team nutzen.</h1>
            <p className="lead">
              Eine praxisnahe Einführung für Lernende und neue Mitarbeitende – von Repository und Commit
              bis Branch und Pull Request.
            </p>
            <div className="actions">
              <a className="button primary" href="#module">Schulung starten</a>
              <a className="button" href="#quiz">Wissen testen</a>
            </div>
          </div>

          <aside className="panel progressCard">
            <span className="tag">Dein Fortschritt</span>
            <strong>{done.length} / {lessons.length} Module</strong>
            <div className="progressTrack">
              <div className="progressFill" style={{ width: `${progress}%` }} />
            </div>
            <span className="muted">{progress}% abgeschlossen</span>
          </aside>
        </section>

        <section id="lernziele" className="shell section">
          <div className="sectionHead">
            <p className="eyebrow">Was du lernst</p>
            <h2>Lernziele</h2>
            <p>Nach der Schulung kannst du einen einfachen GitHub-Workflow selbstständig durchführen.</p>
          </div>
          <div className="three">
            <article className="panel">
              <span className="number">01</span>
              <h3>Grundbegriffe verstehen</h3>
              <p>Repository, Commit, Branch, Push, Pull und Pull Request unterscheiden.</p>
            </article>
            <article className="panel">
              <span className="number">02</span>
              <h3>Änderungen versionieren</h3>
              <p>Änderungen nachvollziehbar speichern und sinnvoll dokumentieren.</p>
            </article>
            <article className="panel">
              <span className="number">03</span>
              <h3>Im Team arbeiten</h3>
              <p>Branches, Pull Requests und Reviews für Zusammenarbeit einsetzen.</p>
            </article>
          </div>
        </section>

        <section id="module" className="shell section">
          <div className="sectionHead">
            <p className="eyebrow">Schritt für Schritt</p>
            <h2>6 Lernmodule</h2>
            <p>Bearbeite die Module der Reihe nach und markiere sie als abgeschlossen.</p>
          </div>
          <div className="lessonGrid">
            {lessons.map(lesson => {
              const completed = done.includes(lesson.id)
              return (
                <article className={`panel lesson ${completed ? 'completed' : ''}`} key={lesson.id}>
                  <div className="lessonTop">
                    <span className="tag">Modul {lesson.id}</span>
                    <button
                      className="completeButton"
                      onClick={() => toggleLesson(lesson.id)}
                      aria-pressed={completed}
                    >
                      {completed ? 'Erledigt ✓' : 'Als erledigt markieren'}
                    </button>
                  </div>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.subtitle}</p>
                  <ul>
                    {lesson.points.map(point => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              )
            })}
          </div>
        </section>

        <section id="praxis" className="shell section">
          <div className="sectionHead">
            <p className="eyebrow">Interaktiv</p>
            <h2>GitHub-Workflow Simulator</h2>
            <p>Klicke dich durch einen typischen Ablauf einer kleinen Änderung.</p>
          </div>

          <div className="panel simulator">
            <div className="workflow">
              {workflow.map(([n, title, desc], index) => (
                <button
                  key={title}
                  className={`workflowStep ${index <= step ? 'active' : ''}`}
                  onClick={() => setStep(index)}
                >
                  <span>{n}</span>
                  <strong>{title}</strong>
                  <small>{desc}</small>
                </button>
              ))}
            </div>
            <div className="simulatorInfo">
              <span className="tag">Aktueller Schritt</span>
              <h3>{workflow[step][1]}</h3>
              <p>{workflow[step][2]}</p>
              <code>
                {step === 0 && 'git checkout -b feature/meine-aenderung'}
                {step === 1 && 'Datei bearbeiten und speichern'}
                {step === 2 && 'git add . && git commit -m "Änderung beschreiben"'}
                {step === 3 && 'git push -u origin feature/meine-aenderung'}
                {step === 4 && 'Pull Request auf GitHub erstellen'}
              </code>
            </div>
          </div>
        </section>

        <section className="shell section">
          <div className="sectionHead">
            <p className="eyebrow">Cheat-Sheet</p>
            <h2>Die wichtigsten Befehle</h2>
          </div>
          <div className="two">
            <div className="panel codePanel">
              <pre>{`git clone <URL>
git status
git checkout -b feature/meine-aenderung
git add .
git commit -m "Kurze klare Nachricht"
git push -u origin feature/meine-aenderung
git pull`}</pre>
            </div>
            <div className="panel">
              <h3>Merksätze</h3>
              <ul className="largeList">
                <li><b>Commit:</b> speichert einen Zwischenstand.</li>
                <li><b>Push:</b> lädt Commits zu GitHub hoch.</li>
                <li><b>Pull:</b> holt aktuelle Änderungen herunter.</li>
                <li><b>Branch:</b> trennt Arbeiten voneinander.</li>
                <li><b>Pull Request:</b> ermöglicht Review und Merge.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="quiz" className="shell section">
          <div className="sectionHead">
            <p className="eyebrow">Gamification</p>
            <h2>Wissens-Check</h2>
            <p>5 Fragen · 1 Punkt pro richtige Antwort</p>
          </div>
          <div className="quizGrid">
            {quiz.map((item, qIndex) => (
              <article className="panel quizCard" key={item.question}>
                <span className="tag">Frage {qIndex + 1}</span>
                <h3>{item.question}</h3>
                <div className="answerList">
                  {item.answers.map((answer, aIndex) => {
                    const selected = answers[qIndex] === aIndex
                    const answered = qIndex in answers
                    const correct = answered && aIndex === item.correct
                    const wrong = selected && aIndex !== item.correct
                    return (
                      <button
                        key={answer}
                        className={`answer ${correct ? 'correct' : ''} ${wrong ? 'wrong' : ''}`}
                        onClick={() => !answered && setAnswers(current => ({ ...current, [qIndex]: aIndex }))}
                        disabled={answered}
                      >
                        {answer}
                      </button>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>

          <div className="panel result">
            <span className="tag">Ergebnis</span>
            <strong>{score} / {quiz.length} Punkte</strong>
            <p>
              {Object.keys(answers).length < quiz.length
                ? 'Beantworte alle Fragen, um dein Endergebnis zu sehen.'
                : score >= 4
                  ? 'Sehr gut. Du hast die wichtigsten GitHub-Grundlagen verstanden.'
                  : 'Wiederhole die Module kurz und versuche den Workflow danach praktisch.'}
            </p>
          </div>
        </section>

        <section className="shell section">
          <div className="challenge">
            <div>
              <p className="eyebrow">Praxis-Challenge</p>
              <h2>Jetzt selbst ausprobieren</h2>
              <p>
                Erstelle ein Test-Repository, lege einen Branch an, ändere die README, committe und pushe
                die Änderung und erstelle danach einen Pull Request.
              </p>
            </div>
            <span className="challengeBadge">+100 XP</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell">GitHub Schulung · Modul 219 · Interaktive Benutzerdokumentation</div>
      </footer>
    </div>
  )
}

export default App
