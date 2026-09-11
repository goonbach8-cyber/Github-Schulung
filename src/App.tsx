import { useEffect, useMemo, useState } from 'react'
import { HashRouter, Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { lessons, quiz } from './content'

const storageKey = 'github-schulung-progress'

function useProgress() {
  const [done, setDone] = useState<number[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (stored) setDone(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(done))
  }, [done])

  const toggleLesson = (id: number) => {
    setDone(current =>
      current.includes(id) ? current.filter(item => item !== id) : [...current, id],
    )
  }

  return { done, toggleLesson }
}

function Header() {
  return (
    <header className="topbar">
      <Link className="brand" to="/">
        <span className="brandMark">GH</span>
        <span>GitHub Schulung</span>
      </Link>
      <nav>
        <Link to="/">Start</Link>
        <Link to="/module">Module</Link>
        <a href="https://docs.github.com/" target="_blank" rel="noreferrer">GitHub Docs ↗</a>
      </nav>
    </header>
  )
}

function Home({ done, toggleLesson }: { done: number[]; toggleLesson: (id: number) => void }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [step, setStep] = useState(0)

  const progress = Math.round((done.length / lessons.length) * 100)
  const score = useMemo(
    () => Object.entries(answers).filter(([i, answer]) => quiz[Number(i)].correct === answer).length,
    [answers],
  )

  const workflow = [
    ['1', 'Branch', 'Neue Arbeitslinie erstellen'],
    ['2', 'Ändern', 'Dateien bearbeiten'],
    ['3', 'Commit', 'Zwischenstand speichern'],
    ['4', 'Push', 'Zu GitHub hochladen'],
    ['5', 'Pull Request', 'Review und Merge'],
  ]

  return (
    <main>
      <section className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow">Modul 219 · Interaktive Ausbildungssequenz</p>
          <h1>GitHub verstehen, anwenden und im Team nutzen.</h1>
          <p className="lead">
            Sechs richtige Lernmodule mit Erklärungen, Beispielen, Befehlen, Übungen und Links zur offiziellen GitHub-Dokumentation.
          </p>
          <div className="actions">
            <Link className="button primary" to="/module/1">Mit Modul 1 starten</Link>
            <a className="button" href="https://docs.github.com/" target="_blank" rel="noreferrer">GitHub Docs öffnen ↗</a>
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

      <section className="shell section">
        <div className="sectionHead">
          <p className="eyebrow">Lernpfad</p>
          <h2>Die 6 Module</h2>
          <p>Jedes Modul hat jetzt eine eigene Unterseite mit Lernzielen, Erklärungen, Praxisaufgaben und offizieller Dokumentation.</p>
        </div>

        <div className="lessonGrid">
          {lessons.map(lesson => {
            const completed = done.includes(lesson.id)
            return (
              <article className={`panel lesson ${completed ? 'completed' : ''}`} key={lesson.id}>
                <div className="lessonTop">
                  <span className="tag">Modul {lesson.id} · {lesson.duration}</span>
                  <span className={completed ? 'status doneStatus' : 'status'}>{completed ? 'Abgeschlossen ✓' : 'Offen'}</span>
                </div>
                <h3>{lesson.title}</h3>
                <p>{lesson.subtitle}</p>
                <ul>
                  {lesson.goals.slice(0, 3).map(goal => <li key={goal}>{goal}</li>)}
                </ul>
                <div className="lessonActions">
                  <Link className="button primary" to={`/module/${lesson.id}`}>Modul öffnen</Link>
                  <button className="button" onClick={() => toggleLesson(lesson.id)}>
                    {completed ? 'Zurücksetzen' : 'Als erledigt markieren'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="shell section">
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
    </main>
  )
}

function ModuleOverview() {
  return (
    <main className="shell section pageTop">
      <div className="sectionHead">
        <p className="eyebrow">Übersicht</p>
        <h2>Alle Lernmodule</h2>
        <p>Wähle ein Modul aus. Du kannst auch direkt ein bestimmtes Thema wiederholen.</p>
      </div>
      <div className="lessonGrid">
        {lessons.map(lesson => (
          <Link className="panel lesson lessonLink" to={`/module/${lesson.id}`} key={lesson.id}>
            <span className="tag">Modul {lesson.id} · {lesson.duration}</span>
            <h3>{lesson.title}</h3>
            <p>{lesson.subtitle}</p>
            <span className="textLink">Unterseite öffnen →</span>
          </Link>
        ))}
      </div>
    </main>
  )
}

function LessonPage({ done, toggleLesson }: { done: number[]; toggleLesson: (id: number) => void }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = lessons.find(item => item.id === Number(id))

  if (!lesson) return <Navigate to="/" replace />

  const completed = done.includes(lesson.id)
  const previous = lessons.find(item => item.id === lesson.id - 1)
  const next = lessons.find(item => item.id === lesson.id + 1)

  return (
    <main className="shell lessonPage">
      <div className="lessonBreadcrumb">
        <Link to="/">Start</Link>
        <span>/</span>
        <Link to="/module">Module</Link>
        <span>/</span>
        <span>Modul {lesson.id}</span>
      </div>

      <section className="lessonHero">
        <div>
          <p className="eyebrow">Modul {lesson.id} · {lesson.duration}</p>
          <h1>{lesson.title}</h1>
          <p className="lead">{lesson.intro}</p>
          <div className="actions">
            <button className={`button ${completed ? '' : 'primary'}`} onClick={() => toggleLesson(lesson.id)}>
              {completed ? 'Als offen markieren' : 'Modul als abgeschlossen markieren'}
            </button>
            <a className="button docsButton" href={lesson.docsUrl} target="_blank" rel="noreferrer">
              Offizielle GitHub-Dokumentation ↗
            </a>
          </div>
        </div>
      </section>

      <div className="lessonLayout">
        <aside className="panel lessonSidebar">
          <span className="tag">Lernziele</span>
          <ul>
            {lesson.goals.map(goal => <li key={goal}>{goal}</li>)}
          </ul>
          <a className="docsCard" href={lesson.docsUrl} target="_blank" rel="noreferrer">
            <span>Quelle & Vertiefung</span>
            <strong>{lesson.docsLabel}</strong>
            <small>docs.github.com ↗</small>
          </a>
        </aside>

        <div className="lessonContent">
          {lesson.sections.map((section, index) => (
            <article className="panel contentBlock" key={section.title}>
              <span className="number">0{index + 1}</span>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {section.bullets && (
                <ul className="largeList">
                  {section.bullets.map(item => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.code && <pre className="lessonCode">{section.code}</pre>}
            </article>
          ))}

          <article className="panel exerciseBlock">
            <span className="tag">Praxis</span>
            <h2>{lesson.exercise.title}</h2>
            <ol>
              {lesson.exercise.tasks.map(task => <li key={task}>{task}</li>)}
            </ol>
          </article>

          <article className="panel mistakesBlock">
            <span className="tag">Typische Fehler</span>
            <h2>Darauf solltest du achten</h2>
            <ul className="largeList">
              {lesson.mistakes.map(mistake => <li key={mistake}>{mistake}</li>)}
            </ul>
          </article>
        </div>
      </div>

      <div className="moduleNav">
        {previous ? (
          <button className="button" onClick={() => navigate(`/module/${previous.id}`)}>← Modul {previous.id}</button>
        ) : <span />}
        <Link className="button" to="/module">Alle Module</Link>
        {next ? (
          <button className="button primary" onClick={() => navigate(`/module/${next.id}`)}>Modul {next.id} →</button>
        ) : (
          <Link className="button primary" to="/#quiz">Zum Wissens-Check →</Link>
        )}
      </div>
    </main>
  )
}

function App() {
  const { done, toggleLesson } = useProgress()

  return (
    <HashRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home done={done} toggleLesson={toggleLesson} />} />
          <Route path="/module" element={<ModuleOverview />} />
          <Route path="/module/:id" element={<LessonPage done={done} toggleLesson={toggleLesson} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer>
          <div className="shell footerGrid">
            <span>GitHub Schulung · Modul 219 · Interaktive Benutzerdokumentation</span>
            <a href="https://docs.github.com/" target="_blank" rel="noreferrer">Offizielle GitHub Docs ↗</a>
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}

export default App
