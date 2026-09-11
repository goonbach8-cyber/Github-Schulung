import { useEffect, useMemo, useState } from 'react'
import { HashRouter, Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { lessons, quiz } from './content'

const storageKey = 'github-schulung-chapter-progress'

function useProgress() {
  const [done, setDone] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (stored) setDone(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(done))
  }, [done])

  const toggleChapter = (key: string) => {
    setDone(current =>
      current.includes(key) ? current.filter(item => item !== key) : [...current, key],
    )
  }

  const setLessonComplete = (lessonId: number, complete: boolean) => {
    const lesson = lessons.find(item => item.id === lessonId)
    if (!lesson) return
    const keys = lesson.chapters.map(chapter => `${lesson.id}/${chapter.slug}`)
    setDone(current => {
      const withoutLesson = current.filter(item => !keys.includes(item))
      return complete ? [...withoutLesson, ...keys] : withoutLesson
    })
  }

  return { done, toggleChapter, setLessonComplete }
}

function lessonProgress(lessonId: number, done: string[]) {
  const lesson = lessons.find(item => item.id === lessonId)
  if (!lesson) return { completed: 0, total: 0, percent: 0 }
  const completed = lesson.chapters.filter(chapter => done.includes(`${lesson.id}/${chapter.slug}`)).length
  return {
    completed,
    total: lesson.chapters.length,
    percent: Math.round((completed / lesson.chapters.length) * 100),
  }
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
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

function BranchDiagram() {
  return (
    <div className="branchDemo panel" aria-label="Visualisierung eines Git-Branch-Workflows">
      <div className="branchDemoHead">
        <div>
          <p className="eyebrow">Visualisierung</p>
          <h3>So verzweigt sich ein Feature-Branch</h3>
          <p>main bleibt stabil, während auf einem separaten Branch neue Commits entstehen.</p>
        </div>
        <span className="livePill">animiert</span>
      </div>
      <svg className="branchSvg" viewBox="0 0 900 240" role="img" aria-label="Branch-Verlauf mit main und feature branch">
        <path className="mainLine" d="M70 120 H830" />
        <path className="featureLine" d="M260 120 C310 120 315 55 370 55 H650 C700 55 700 120 755 120" />
        <g className="commit mainCommit"><circle cx="110" cy="120" r="13" /></g>
        <g className="commit mainCommit"><circle cx="230" cy="120" r="13" /></g>
        <g className="commit featureCommit c1"><circle cx="390" cy="55" r="13" /></g>
        <g className="commit featureCommit c2"><circle cx="510" cy="55" r="13" /></g>
        <g className="commit featureCommit c3"><circle cx="630" cy="55" r="13" /></g>
        <g className="commit mergeCommit"><circle cx="760" cy="120" r="15" /></g>
        <text x="72" y="155">main</text>
        <text x="370" y="30">feature/login</text>
        <text x="735" y="158">merge</text>
      </svg>
      <div className="branchLegend">
        <span><i className="dot mainDot" /> main</span>
        <span><i className="dot featureDot" /> Feature-Branch</span>
        <span><i className="dot mergeDot" /> Merge</span>
      </div>
    </div>
  )
}

function Home({ done }: { done: string[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [step, setStep] = useState(0)

  const totalChapters = lessons.reduce((sum, lesson) => sum + lesson.chapters.length, 0)
  const progress = Math.round((done.length / totalChapters) * 100)
  const completedLessons = lessons.filter(lesson => lessonProgress(lesson.id, done).percent === 100).length

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
          <p className="eyebrow">Modul 219 · GitHub Grundlagen</p>
          <h1>GitHub Schritt für Schritt lernen.</h1>
          <p className="lead">
            Eine strukturierte Schulung mit sechs Modulen, 18 Unterlektionen, Übungen, Git-Befehlen und Verweisen auf die offizielle GitHub-Dokumentation.
          </p>
          <div className="actions">
            <Link className="button primary" to="/module/1">Mit Modul 1 starten</Link>
            <Link className="button" to="/module">Lernpfad ansehen</Link>
            <a className="button docsButton" href="https://docs.github.com/" target="_blank" rel="noreferrer">GitHub Docs ↗</a>
          </div>
        </div>

        <aside className="panel progressCard">
          <span className="tag">Gesamtfortschritt</span>
          <strong>{done.length} / {totalChapters} Lektionen</strong>
          <div className="progressTrack">
            <div className="progressFill" style={{ width: `${progress}%` }} />
          </div>
          <span className="muted">{progress}% · {completedLessons} von {lessons.length} Modulen vollständig</span>
        </aside>
      </section>

      <section className="shell section">
        <div className="sectionHead">
          <p className="eyebrow">Lernpfad</p>
          <h2>Die 6 Module</h2>
          <p>Jedes Modul besteht aus drei eigenen Unterlektionen. So kannst du Themen einzeln lernen oder später gezielt wiederholen.</p>
        </div>

        <div className="lessonGrid">
          {lessons.map(lesson => {
            const lp = lessonProgress(lesson.id, done)
            return (
              <article className={`panel lesson ${lp.percent === 100 ? 'completed' : ''}`} key={lesson.id}>
                <div className="lessonTop">
                  <span className="tag">Modul {lesson.id} · {lesson.duration}</span>
                  <span className={lp.percent === 100 ? 'status doneStatus' : 'status'}>{lp.percent}%</span>
                </div>
                <h3>{lesson.title}</h3>
                <p>{lesson.subtitle}</p>
                <div className="miniProgress">
                  <div style={{ width: `${lp.percent}%` }} />
                </div>
                <p className="muted">{lp.completed} von {lp.total} Unterlektionen abgeschlossen</p>
                <div className="chapterPreview">
                  {lesson.chapters.map(chapter => (
                    <Link key={chapter.slug} to={`/module/${lesson.id}/${chapter.slug}`}>
                      {done.includes(`${lesson.id}/${chapter.slug}`) ? '✓ ' : ''}{chapter.title}
                    </Link>
                  ))}
                </div>
                <div className="lessonActions">
                  <Link className="button primary" to={`/module/${lesson.id}`}>Modul öffnen</Link>
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
              {step === 0 && 'git switch -c feature/meine-aenderung'}
              {step === 1 && 'Datei bearbeiten und speichern'}
              {step === 2 && 'git add . && git commit -m "Änderung beschreiben"'}
              {step === 3 && 'git push -u origin feature/meine-aenderung'}
              {step === 4 && 'Pull Request auf GitHub erstellen'}
            </code>
          </div>
        </div>
      </section>

      <section className="shell section">
        <BranchDiagram />
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

function ModuleOverview({ done }: { done: string[] }) {
  return (
    <main className="shell section pageTop">
      <div className="sectionHead">
        <p className="eyebrow">Übersicht</p>
        <h2>Dein GitHub-Lernpfad</h2>
        <p>6 Module · 18 Unterlektionen. Du kannst jedes Thema einzeln öffnen.</p>
      </div>
      <div className="lessonGrid">
        {lessons.map(lesson => {
          const lp = lessonProgress(lesson.id, done)
          return (
            <Link className="panel lesson lessonLink" to={`/module/${lesson.id}`} key={lesson.id}>
              <div className="lessonTop">
                <span className="tag">Modul {lesson.id}</span>
                <span className={lp.percent === 100 ? 'status doneStatus' : 'status'}>{lp.percent}%</span>
              </div>
              <h3>{lesson.title}</h3>
              <p>{lesson.subtitle}</p>
              <div className="miniProgress"><div style={{ width: `${lp.percent}%` }} /></div>
              <span className="textLink">Modul öffnen →</span>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

function LessonPage({
  done,
  setLessonComplete,
}: {
  done: string[]
  setLessonComplete: (lessonId: number, complete: boolean) => void
}) {
  const { id } = useParams()
  const lesson = lessons.find(item => item.id === Number(id))

  if (!lesson) return <Navigate to="/" replace />

  const lp = lessonProgress(lesson.id, done)
  const isComplete = lp.percent === 100

  return (
    <main className="shell lessonPage">
      <div className="lessonBreadcrumb">
        <Link to="/">Start</Link><span>/</span><Link to="/module">Module</Link><span>/</span><span>Modul {lesson.id}</span>
      </div>

      <section className="lessonHero">
        <div>
          <p className="eyebrow">Modul {lesson.id} · {lesson.duration}</p>
          <h1>{lesson.title}</h1>
          <p className="lead">{lesson.intro}</p>
          <div className="moduleProgressCard">
            <div>
              <strong>{lp.completed} / {lp.total} Unterlektionen</strong>
              <span>{lp.percent}% abgeschlossen</span>
            </div>
            <div className="progressTrack"><div className="progressFill" style={{ width: `${lp.percent}%` }} /></div>
          </div>
          <div className="actions">
            <Link className="button primary" to={`/module/${lesson.id}/${lesson.chapters[0].slug}`}>Erste Lektion öffnen</Link>
            <button className="button" onClick={() => setLessonComplete(lesson.id, !isComplete)}>
              {isComplete ? 'Modul zurücksetzen' : 'Ganzes Modul als erledigt markieren'}
            </button>
            <a className="button docsButton" href={lesson.docsUrl} target="_blank" rel="noreferrer">GitHub Docs ↗</a>
          </div>
        </div>
      </section>

      <div className="lessonLayout">
        <aside className="panel lessonSidebar">
          <span className="tag">Lernziele</span>
          <ul>{lesson.goals.map(goal => <li key={goal}>{goal}</li>)}</ul>
          <a className="docsCard" href={lesson.docsUrl} target="_blank" rel="noreferrer">
            <span>Quelle & Vertiefung</span>
            <strong>{lesson.docsLabel}</strong>
            <small>docs.github.com ↗</small>
          </a>
        </aside>

        <div className="lessonContent">
          <div className="chapterCards">
            {lesson.chapters.map((chapter, index) => {
              const key = `${lesson.id}/${chapter.slug}`
              const chapterDone = done.includes(key)
              return (
                <Link className={`panel chapterCard ${chapterDone ? 'chapterDone' : ''}`} to={`/module/${lesson.id}/${chapter.slug}`} key={chapter.slug}>
                  <span className="number">0{index + 1}</span>
                  <div>
                    <span className="tag">{chapter.duration}</span>
                    <h2>{chapter.title}</h2>
                    <p>{chapter.summary}</p>
                    <span className="textLink">{chapterDone ? '✓ Abgeschlossen · erneut öffnen →' : 'Unterlektion öffnen →'}</span>
                  </div>
                </Link>
              )
            })}
          </div>

          {lesson.id === 4 && <BranchDiagram />}

          <article className="panel exerciseBlock">
            <span className="tag">Modul-Challenge</span>
            <h2>{lesson.exercise.title}</h2>
            <ol>{lesson.exercise.tasks.map(task => <li key={task}>{task}</li>)}</ol>
          </article>

          <article className="panel mistakesBlock">
            <span className="tag">Typische Fehler</span>
            <h2>Darauf solltest du achten</h2>
            <ul className="largeList">{lesson.mistakes.map(mistake => <li key={mistake}>{mistake}</li>)}</ul>
          </article>
        </div>
      </div>
    </main>
  )
}

function ChapterPage({
  done,
  toggleChapter,
}: {
  done: string[]
  toggleChapter: (key: string) => void
}) {
  const { id, chapterSlug } = useParams()
  const navigate = useNavigate()
  const lesson = lessons.find(item => item.id === Number(id))
  const chapter = lesson?.chapters.find(item => item.slug === chapterSlug)

  if (!lesson || !chapter) return <Navigate to="/" replace />

  const key = `${lesson.id}/${chapter.slug}`
  const completed = done.includes(key)
  const index = lesson.chapters.findIndex(item => item.slug === chapter.slug)
  const previous = lesson.chapters[index - 1]
  const next = lesson.chapters[index + 1]
  const lp = lessonProgress(lesson.id, done)

  return (
    <main className="shell chapterPage">
      <div className="lessonBreadcrumb">
        <Link to="/">Start</Link><span>/</span>
        <Link to="/module">Module</Link><span>/</span>
        <Link to={`/module/${lesson.id}`}>{lesson.title}</Link><span>/</span>
        <span>{chapter.title}</span>
      </div>

      <div className="chapterTopbar panel">
        <div>
          <span className="tag">Modul {lesson.id} · Lektion {index + 1}/{lesson.chapters.length}</span>
          <strong>{lp.percent}% Modulfortschritt</strong>
        </div>
        <div className="progressTrack"><div className="progressFill" style={{ width: `${lp.percent}%` }} /></div>
      </div>

      <section className="chapterHero">
        <p className="eyebrow">{chapter.duration}</p>
        <h1>{chapter.title}</h1>
        <p className="lead">{chapter.summary}</p>
      </section>

      <div className="chapterLayout">
        <aside className="chapterNav panel">
          <strong>{lesson.title}</strong>
          {lesson.chapters.map((item, i) => {
            const itemKey = `${lesson.id}/${item.slug}`
            const active = item.slug === chapter.slug
            return (
              <Link className={active ? 'activeChapter' : ''} to={`/module/${lesson.id}/${item.slug}`} key={item.slug}>
                <span>{done.includes(itemKey) ? '✓' : i + 1}</span>
                {item.title}
              </Link>
            )
          })}
          <Link className="backModule" to={`/module/${lesson.id}`}>← Modulübersicht</Link>
        </aside>

        <article className="chapterArticle">
          <div className="panel contentBlock">
            <span className="tag">Erklärung</span>
            <p className="chapterText">{chapter.text}</p>

            {chapter.bullets && (
              <ul className="largeList">{chapter.bullets.map(item => <li key={item}>{item}</li>)}</ul>
            )}

            {chapter.steps && (
              <ol className="stepList">{chapter.steps.map((item, i) => <li key={item}><span>{i + 1}</span><div>{item}</div></li>)}</ol>
            )}

            {chapter.code && <pre className="lessonCode">{chapter.code}</pre>}
          </div>

          <div className="panel miniTask">
            <div>
              <span className="tag">Mini-Aufgabe</span>
              <h2>Jetzt selbst machen</h2>
            </div>
            <ol>{chapter.task.map(task => <li key={task}>{task}</li>)}</ol>
          </div>

          <a className="panel docsBanner" href={chapter.docsUrl} target="_blank" rel="noreferrer">
            <div>
              <span className="tag">Offizielle Dokumentation</span>
              <h3>{chapter.docsLabel}</h3>
              <p>Vertiefe dieses Thema direkt in der offiziellen GitHub-Dokumentation.</p>
            </div>
            <span className="docsArrow">↗</span>
          </a>

          <div className={`completeChapter panel ${completed ? 'isDone' : ''}`}>
            <div>
              <span className="tag">{completed ? 'Abgeschlossen' : 'Fortschritt'}</span>
              <h3>{completed ? 'Diese Unterlektion ist erledigt.' : 'Unterlektion abgeschlossen?'}</h3>
              <p>{completed ? 'Du kannst sie jederzeit erneut öffnen oder als offen markieren.' : 'Markiere sie als erledigt, damit dein Fortschritt gespeichert wird.'}</p>
            </div>
            <button className={`button ${completed ? '' : 'primary'}`} onClick={() => toggleChapter(key)}>
              {completed ? 'Als offen markieren' : 'Als abgeschlossen markieren ✓'}
            </button>
          </div>
        </article>
      </div>

      <div className="moduleNav">
        {previous ? (
          <button className="button" onClick={() => navigate(`/module/${lesson.id}/${previous.slug}`)}>← {previous.title}</button>
        ) : (
          <Link className="button" to={`/module/${lesson.id}`}>← Modulübersicht</Link>
        )}
        <Link className="button" to="/module">Alle Module</Link>
        {next ? (
          <button className="button primary" onClick={() => navigate(`/module/${lesson.id}/${next.slug}`)}>{next.title} →</button>
        ) : lesson.id < lessons.length ? (
          <button className="button primary" onClick={() => navigate(`/module/${lesson.id + 1}`)}>Nächstes Modul →</button>
        ) : (
          <Link className="button primary" to="/">Zur Startseite →</Link>
        )}
      </div>
    </main>
  )
}

function App() {
  const { done, toggleChapter, setLessonComplete } = useProgress()

  return (
    <HashRouter>
      <ScrollToTop />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home done={done} />} />
          <Route path="/module" element={<ModuleOverview done={done} />} />
          <Route path="/module/:id" element={<LessonPage done={done} setLessonComplete={setLessonComplete} />} />
          <Route path="/module/:id/:chapterSlug" element={<ChapterPage done={done} toggleChapter={toggleChapter} />} />
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
