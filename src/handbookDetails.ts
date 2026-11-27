export type DetailBlock = {kind:'paragraph'|'heading'|'callout'|'code';text:string}
export type DetailSection = {chapter:string;id:string;title:string;page:number;blocks:DetailBlock[]}
// Fachliche Grundlage: GitHub-Benutzerdokumentation v1.0, 20.11.2026. Bildplatzhalter nicht als Screenshots ausgeben.
export const details:DetailSection[] = [
  {
    "chapter": "1",
    "id": "1.1",
    "title": "Zweck der Dokumentation",
    "page": 3,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Dieses Handbuch führt ohne Programmierkenntnisse durch die gemeinsame Dateiverwaltung und die Veröffentlichung einer einfachen Website. Die Übungen erfolgen überwiegend im Browser; eine lokale Git-Installation ist nicht erforderlich."
      }
    ]
  },
  {
    "chapter": "1",
    "id": "1.2",
    "title": "Lernziele und Schulungsergebnis",
    "page": 3,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Nach der Schulung können Sie ein Konto absichern, ein Repository erstellen, Dateien hochladen und Änderungen mit Commits dokumentieren. Sie arbeiten auf Branches, lassen Pull Requests prüfen und unterscheiden Freigabe und Veröffentlichung."
      },
      {
        "kind": "paragraph",
        "text": "Das Mini-CRM verbindet Kundenliste, Suche, Erfassung und Statistiken in einem Lernprototyp. Sie testen die Anwendung vor und nach dem Deployment und verfolgen eine Änderung bis zur Live-Version."
      }
    ]
  },
  {
    "chapter": "1",
    "id": "1.3",
    "title": "Einsatzszenarien im Unternehmen",
    "page": 3,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Als beispielhafte Einsatzszenarien eignen sich gemeinsam gepflegte technische Dokumentationen, versionierte Konfigurationsdateien, Prototypen und die Abstimmung kleiner Webprojekte. Ein Business Analyst kann eine Anforderung als Issue formulieren; eine fachliche Prüferin kann im Pull Request Rückfragen stellen. So entsteht eine Verbindung zwischen dem gewünschten Verhalten und der konkreten Änderung. GitHub stellt dafür unter anderem Repositories, Issues und Pull Requests bereit."
      },
      {
        "kind": "heading",
        "text": "Praxistipp und Kontrollpunkt"
      },
      {
        "kind": "paragraph",
        "text": "Vereinbaren Sie vor Beginn, welches Konto, welche Organisation und welche Veröffentlichungsziele für die Schulung erlaubt sind. In diesem Handbuch wird keine unternehmensspezifische Richtlinie vorausgesetzt. Erklären Sie Ihrer Lernpartnerin oder Ihrem Lernpartner anschließend in eigenen Worten, warum ein privates Repository und eine zugriffsgeschützte Website unterschiedliche Dinge sind."
      }
    ]
  },
  {
    "chapter": "2",
    "id": "2.1",
    "title": "Was ist Git?",
    "page": 3,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Git ist ein verteiltes Versionsverwaltungssystem. Es hält Projektstände als nachvollziehbare Historie fest. Eine vollständige lokale Kopie kann neben den aktuellen Dateien auch die Versionsgeschichte enthalten. Deshalb können Teams Änderungen vorbereiten, vergleichen und später zusammenführen, statt Dateinamen wie „final_neu_wirklich-final“ zu verwalten. Git funktioniert auch ohne GitHub; GitHub ist nicht die Voraussetzung für eine lokale Versionsverwaltung."
      }
    ]
  },
  {
    "chapter": "2",
    "id": "2.2",
    "title": "Was ist GitHub?",
    "page": 3,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "GitHub ergänzt Git um eine gemeinsame Online-Plattform. Dort liegen Repositories, und Beteiligte diskutieren Aufgaben, schlagen Änderungen vor und prüfen diese vor der Übernahme. Git verwaltet die Versionen; GitHub organisiert die Zusammenarbeit rund um diese Versionen. Eine Browserbearbeitung auf GitHub erzeugt ebenfalls Commits, ohne dass Sie selbst lokale Git-Befehle ausführen müssen."
      }
    ]
  },
  {
    "chapter": "2",
    "id": "2.3",
    "title": "Vorteile und Nachvollziehbarkeit",
    "page": 4,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein Commit beschreibt einen gespeicherten Stand und trägt eine Nachricht zur Änderung. Damit kann eine andere Person nachvollziehen, was bearbeitet wurde und weshalb. Branches ermöglichen parallele Arbeit; Pull Requests machen Unterschiede vor dem Zusammenführen sichtbar. Ein Team muss daher nicht ungeprüft dieselbe zentrale Datei überschreiben. Versionsverwaltung ersetzt allerdings weder verständliche Beschreibungen noch eine fachliche Prüfung."
      },
      {
        "kind": "heading",
        "text": "Beispiel aus dem Schulungsprojekt"
      },
      {
        "kind": "paragraph",
        "text": "Die Kundenliste funktioniert bereits. Eine Teilnehmerin verbessert auf einem Branch die Suchbeschriftung, während ein anderer Teilnehmer die README ergänzt. Beide Änderungen haben einen eigenen Zweck und können getrennt geprüft werden. Der gemeinsame Hauptstand wird erst nach der vereinbarten Freigabe aktualisiert. Die Namen und Rollen in diesem Beispiel sind rein illustrativ."
      }
    ]
  },
  {
    "chapter": "2",
    "id": "2.4",
    "title": "Das grundlegende Arbeitsmodell",
    "page": 4,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Im Browser lautet die vereinfachte Folge: Repository öffnen, Branch wählen, Datei bearbeiten, Commit erstellen, Pull Request eröffnen, Review durchführen und Änderung übernehmen. Bei lokaler Arbeit kommen das Herunterladen einer Kopie sowie Push und Pull hinzu. Ein lokaler Commit ist noch keine Übertragung auf GitHub; erst ein Push überträgt die lokalen Commits an das entfernte Repository."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Fragen Sie vor jeder Änderung: „In welchem Repository und auf welchem Branch arbeite ich?“ Diese kurze Kontrolle verhindert viele Verwechslungen. Kontrollpunkt: Erklären Sie den Unterschied zwischen Git und GitHub anhand des Mini-CRM-Projekts."
      }
    ]
  },
  {
    "chapter": "3",
    "id": "3.1",
    "title": "Registrierung und E-Mail-Verifizierung",
    "page": 4,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Klären Sie zunächst, ob Sie ein vorhandenes Unternehmenskonto verwenden oder ein persönliches Konto für die Schulung anlegen sollen. Erstellen Sie kein zweites Konto, wenn bereits ein geregelter Zugang vorhanden ist. Die allgemeine GitHub-Einrichtung umfasst Kontoerstellung, Auswahl eines passenden Angebots, E-Mail-Verifizierung und die Einrichtung zusätzlicher Authentifizierung."
      },
      {
        "kind": "callout",
        "text": "Schritt 1: Öffnen Sie die GitHub-Startseite und wählen Sie den Einstieg zur Registrierung. Verwenden Sie die von Ihrer Organisation zugelassene E-Mail-Adresse. Wählen Sie einen dauerhaft geeigneten Benutzernamen und, sofern der Anmeldeweg ein Passwort verlangt, ein starkes, einzigartiges Passwort."
      },
      {
        "kind": "callout",
        "text": "Schritt 2: Folgen Sie den angezeigten Bestätigungs- und Sicherheitsabfragen. Öffnen Sie anschließend die Verifizierungsnachricht in Ihrem Postfach und bestätigen Sie Ihre E-Mail-Adresse. Kontrollieren Sie bei ausbleibender Nachricht auch Spamordner und Schreibweise, statt sofort ein weiteres Konto zu erzeugen. Die Verifizierung ist Bestandteil der vollständigen Kontoeinrichtung."
      }
    ]
  },
  {
    "chapter": "3",
    "id": "3.2",
    "title": "Anmeldung und Sicherheitsoptionen",
    "page": 4,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 3: Melden Sie sich über „Sign in“ mit dem vorgesehenen Konto an. Prüfen Sie im Profilmenü, ob die erwartete Identität angezeigt wird. Öffnen Sie „Settings“ und anschließend „Password and authentication“, um die Sicherheitsoptionen zu prüfen. GitHub empfiehlt Zwei-Faktor-Authentifizierung und unterstützt nach deren Einrichtung auch Passkeys für eine passwortlose Anmeldung."
      },
      {
        "kind": "heading",
        "text": "Multi-Faktor-Authentifizierung einrichten"
      },
      {
        "kind": "callout",
        "text": "Schritt 4: Starten Sie die Einrichtung von 2FA und wählen Sie eine angebotene, unternehmensseitig zulässige Methode. Folgen Sie dem Einrichtungsdialog bis zur Bestätigung. Speichern Sie die Wiederherstellungscodes getrennt vom Schulungsrepository an einem freigegebenen sicheren Ort. Geben Sie weder Einmalcodes noch Wiederherstellungscodes an andere Personen weiter."
      },
      {
        "kind": "callout",
        "text": "Schritt 5: Testen Sie die Anmeldung, solange die eingerichtete Methode und die Wiederherstellungsinformationen verfügbar sind. Der Kontrollpunkt ist erreicht, wenn Ihre E-Mail bestätigt ist und Sie sich mit dem zusätzlichen Sicherheitsfaktor anmelden können. Bei verwalteten Unternehmenszugängen gelten die von der Administration vorgegebenen Schritte."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Zeigen Sie in der Schulung nur den erfolgreichen Sicherheitsstatus. Fotografieren Sie niemals QR-Codes zur Einrichtung, Passkeys, Einmalcodes oder Wiederherstellungscodes."
      }
    ]
  },
  {
    "chapter": "4",
    "id": "4.1",
    "title": "Dashboard, Repositories und Profile",
    "page": 5,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Das Dashboard ist der persönliche Einstieg nach der Anmeldung. Von dort gelangen Sie zu verfügbaren Repositories und sehen Aktivitäten. Es ist keine vollständige Projektakte: Für die Arbeit an einer konkreten Datei öffnen Sie immer das zugehörige Repository. Das Profil beschreibt dagegen Ihre Benutzeridentität und kann unter anderem sichtbare Projekte und Beiträge zeigen. Welche Inhalte sichtbar sind, hängt von Ihren Einstellungen und Zugriffsrechten ab. Ein Repository bündelt die Dateien eines Projekts und ihre Historie. Achten Sie auf die Kombination aus Eigentümer und Projektname. Zwei Repositories können ähnlich heißen und trotzdem unterschiedlichen Konten gehören. Unter „Code“ finden Sie die Dateiliste und die Branch-Auswahl. Eine README wird auf der Repository-Startseite als Einführung angezeigt."
      }
    ]
  },
  {
    "chapter": "4",
    "id": "4.2",
    "title": "Issues und Pull Requests",
    "page": 5,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Issues dienen der Beschreibung von Aufgaben, Fehlern und Verbesserungen. Ein gutes Schulungs-Issue erklärt das Problem, das erwartete Verhalten und ein überprüfbares Ergebnis. Beispiel: „Die Suche soll Kunden nach Firma oder Kontakt finden.“ Pull Requests sind dagegen konkrete Änderungsvorschläge zwischen Branches. Dort bespricht das Team den Unterschied der Dateien und entscheidet über die Übernahme. Ein Issue ist also nicht dasselbe wie die Umsetzung."
      }
    ]
  },
  {
    "chapter": "4",
    "id": "4.3",
    "title": "Actions und Settings",
    "page": 5,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "„Actions“ gehört zu den Automatisierungsfunktionen von GitHub. Bei GitHub Pages können Sie dort den zugehörigen Veröffentlichungsablauf und dessen Verlauf prüfen. „Settings“ enthält Einstellungen des Repositories; für Pages befindet sich dort beispielsweise die Auswahl der Veröffentlichungsquelle. Fehlende Einstellmöglichkeiten können auf unzureichende Rechte hinweisen."
      },
      {
        "kind": "heading",
        "text": "Orientierungsübung"
      },
      {
        "kind": "paragraph",
        "text": "Öffnen Sie ein freigegebenes Schulungsrepository. Lesen Sie die README, suchen Sie die Branch-Auswahl und wechseln Sie zu „Issues“ und „Pull requests“. Gehen Sie danach zurück zur Dateiliste. Verändern Sie zunächst keine Einstellungen. Kontrollpunkt: Sie können erklären, wo eine Anforderung beschrieben, eine Datei geändert und eine Änderung geprüft wird."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Prüfen Sie beim Wechsel zwischen mehreren Browserfenstern stets Eigentümer, Repository und Branch. Eine persönliche Einstellung im Profilmenü ist nicht automatisch eine Projekteinstellung."
      }
    ]
  },
  {
    "chapter": "5",
    "id": "5.1",
    "title": "Name, Eigentümer und Sichtbarkeit",
    "page": 6,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 1: Öffnen Sie „New repository“. Kontrollieren Sie unter „Owner“, wem das Projekt gehören soll. Verwenden Sie für die Übung den Namen „mini-crm-schulung“ und eine Beschreibung wie „Statischer CRM-Lernprototyp mit fiktiven Daten“. Ein kurzer, verständlicher Name erleichtert die spätere Auswahl beim Deployment."
      },
      {
        "kind": "callout",
        "text": "Schritt 2: Wählen Sie „Private“, sofern die Schulungsleitung keine ausdrücklich freigegebene öffentliche Variante vorgesehen hat. „Public“ macht den Inhalt öffentlich sichtbar; „Private“ beschränkt den Zugriff auf Berechtigte. Ein privates Repository ist jedoch keine Freigabe zur Ablage echter Kundendaten und garantiert keinen Schutz einer später veröffentlichten Website."
      }
    ]
  },
  {
    "chapter": "5",
    "id": "5.2",
    "title": "README, .gitignore und Lizenz",
    "page": 6,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 3: Aktivieren Sie das Anlegen einer README. Beschreiben Sie darin Projektzweck, Startanleitung, Testfälle und Einschränkungen. Für dieses Beispiel reicht zunächst: „index.html im Browser öffnen; nur fiktive Daten; Eingaben bleiben bis zum Neuladen im Arbeitsspeicher.“ Eine README ist die erste Orientierung für neue Beteiligte."
      },
      {
        "kind": "callout",
        "text": "Schritt 4: Entscheiden Sie bewusst über die Datei „.gitignore“. Sie beschreibt Dateien und Ordner, die bei der Git-Arbeit nicht neu in die Versionsverwaltung aufgenommen werden sollen, etwa temporäre Dateien. Der einfache Ein-Datei-Prototyp benötigt keine bestimmte Vorlage. Laden Sie Geheimnisse auch dann nicht hoch, wenn Sie eine .gitignore verwenden; insbesondere Browseruploads müssen vorab inhaltlich kontrolliert werden."
      },
      {
        "kind": "callout",
        "text": "Schritt 5: Wählen Sie eine Lizenz nur nach den geltenden Vorgaben. Eine Lizenz beschreibt Nutzungsbedingungen des Codes; sie ist keine Sicherheitsfunktion. Für das interne Lernrepository kann die Auswahl zunächst offenbleiben, bis die zuständige Stelle entschieden hat. Öffentlich sichtbarer Code ist nicht mit einer pauschalen Erlaubnis zur beliebigen Weiterverwendung gleichzusetzen."
      },
      {
        "kind": "heading",
        "text": "Erstellen und Ergebnis prüfen"
      },
      {
        "kind": "callout",
        "text": "Schritt 6: Wählen Sie „Create repository“. Prüfen Sie Name, Eigentümer, Sichtbarkeit und README auf der neuen Projektseite. Notieren Sie in Ihren Schulungsnotizen den tatsächlichen Repository-Namen."
      },
      {
        "kind": "callout",
        "text": "Kontrollpunkt: Die README ist sichtbar und das Projekt gehört zum vorgesehenen Konto."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Legen Sie für die Übungen ein eigenes Repository an. Ändern Sie nicht probeweise Sichtbarkeit, Berechtigungen oder Schutzregeln eines bestehenden Unternehmensprojekts."
      }
    ]
  },
  {
    "chapter": "6",
    "id": "6.1",
    "title": "Projektidee und Nutzen",
    "page": 6,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Eine fiktive KMU nutzt ein Mini-CRM als Lernprototyp: Dashboard, Kundenverwaltung, Suche, Erfassung und Statistiken zeigen typische Funktionen. Das Beispiel ist keinem realen Unternehmen zugeordnet und nicht produktionsreif. Sichtbare Änderungen machen den Lernfortschritt überprüfbar. Fachanwender formulieren Anforderungen und testen Ergebnisse; die Zusammenarbeit über GitHub bleibt der Schwerpunkt."
      }
    ]
  },
  {
    "chapter": "6",
    "id": "6.2",
    "title": "Aufbau und Grenzen",
    "page": 7,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Das Projekt besteht aus einer Datei mit dem Namen „index.html“. HTML beschreibt die Struktur, CSS die Darstellung und JavaScript die Interaktion. Der vollständige Inhalt folgt in Kapitel 6.4 in vier fortlaufenden Teilen. Kopieren Sie alle Teile in ihrer Reihenfolge in dieselbe Datei; Zwischenüberschriften, Erklärungen und die farbliche Legende gehören nicht zum Code. Die Anwendung verwendet bewusst nur flüchtige Daten im Arbeitsspeicher. Sie startet mit erfundenen Unternehmen und Kontaktpersonen. Neu erfasste Einträge verschwinden beim Neuladen der Seite. Die Suchfunktion berücksichtigt Firma und Kontakt; die Kennzahlen zeigen alle Einträge und deren Status, unabhängig vom Suchfilter. Es gibt keinen Server, keine Benutzerkonten, keine Rechteverwaltung und keine Mehrbenutzer-Synchronisierung."
      },
      {
        "kind": "heading",
        "text": "Sicherheitsrahmen"
      },
      {
        "kind": "paragraph",
        "text": "Geben Sie ausschließlich erfundene Daten ein. Das Beispiel sendet über seinen Anwendungscode keine Kundeneingaben an eine Datenbank; die Hostingplattform kann unabhängig davon technische Zugriffsdaten verarbeiten. Eine sichtbare Website ist nicht allein deshalb intern, weil ihr Quellcode privat liegt. Vor einem realen CRM-Einsatz wären unter anderem Authentifizierung, Berechtigungen, zentrale Speicherung, Datenschutzprüfung, Protokollierung und ein Betriebskonzept gesondert zu planen."
      }
    ]
  },
  {
    "chapter": "6",
    "id": "6.3",
    "title": "Vorbereitung und Abnahmetest",
    "page": 7,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Öffnen Sie einen reinen Texteditor, legen Sie „index.html“ in einem eigenen Ordner an und speichern Sie im Zeichensatz UTF-8. Übernehmen Sie den Code ohne typografische Anführungszeichen. Öffnen Sie die gespeicherte Datei im Browser. Prüfen Sie, ob Dashboard, Kundenliste und Formular angezeigt werden. Suchen Sie nach „Alpen“, löschen Sie den Suchtext und fügen Sie „Demo Werkstatt“ mit dem Kontakt „Alex Beispiel“ hinzu. Wählen Sie den Status „Interessent“. Prüfen Sie den neuen Listeneintrag und die aktualisierten Kennzahlen. Suchen Sie nach einem nicht vorhandenen Begriff; dann muss eine verständliche Leermeldung erscheinen. Nach dem Neuladen muss der ergänzte Datensatz wieder verschwunden sein."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Halten Sie das erwartete Verhalten vor der Änderung in einem Issue fest. Der gleiche Test wird später nach dem Deployment wiederholt."
      }
    ]
  },
  {
    "chapter": "6",
    "id": "6.4",
    "title": "Vollständiger HTML-Code – index.html",
    "page": 7,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Der Prototyp besteht aus einer einzigen HTML-Datei. Teil 1 enthält Dokument und Gestaltung (HTML/CSS), Teil 2 die Bedienoberfläche, Teil 3 die Daten und Suche, Teil 4 die Erfassung und den Abschluss. Der vollständige, direkt nutzbare Code steht unten; kopiere alle Bestandteile gemeinsam als index.html und prüfe die Abnahmetests aus 6.3."
      },
      {
        "kind": "heading",
        "text": "Kontrollpunkt vor dem Upload"
      },
      {
        "kind": "paragraph",
        "text": "Öffnen Sie die Datei im Browser und führen Sie die Tests aus Kapitel 6.3 aus. Die Seite muss ohne zusätzliche Installation starten. Wenn Sie nur Quelltext sehen, prüfen Sie, ob der Dateiname versehentlich „index.html.txt“ lautet. Wenn das Formular nicht reagiert, vergleichen Sie vor allem die Übergänge zwischen den vier Codeteilen."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Prüfen Sie im Texteditor normale gerade Anführungszeichen. Die Überschriften dieses Handbuchs und die farbliche Darstellung dürfen nicht als zusätzliche Zeichen in der Datei landen."
      }
    ]
  },
  {
    "chapter": "7",
    "id": "7.1",
    "title": "Upload über den Browser",
    "page": 10,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Beim Browserupload werden ausgewählte Dateien zusammen mit einer Commit-Nachricht in einem Repository gespeichert. Prüfen Sie vorher den lokalen Ordner: Er darf keine Passwörter, Exportdateien mit Echtdaten oder versehentlich enthaltene Unterordner enthalten. GitHub beschreibt für Browseruploads die Auswahl über „Add file“ und „Upload files“ sowie die anschließende Commit-Erstellung."
      },
      {
        "kind": "callout",
        "text": "Schritt 1: Öffnen Sie „mini-crm-schulung“ und kontrollieren Sie den Branch. Für die erste, noch ungeschützte Einrichtung darf die Schulungsleitung einen Upload auf „main“ vorsehen. Für spätere Änderungen verwenden Sie einen neuen Branch und einen Pull Request. Umgehen Sie keine vorhandenen Schutzregeln."
      },
      {
        "kind": "callout",
        "text": "Schritt 2: Wählen Sie „Add file“ und danach „Upload files“. Ziehen Sie die Datei „index.html“ in den Uploadbereich oder wählen Sie sie über die Dateiauswahl. Achten Sie darauf, die Datei und nicht ein ZIP-Archiv des Ordners hochzuladen. Kontrollieren Sie den angezeigten Pfad: Für diese Übung muss „index.html“ auf der obersten Repository-Ebene liegen."
      },
      {
        "kind": "callout",
        "text": "Schritt 3: Tragen Sie als Commit-Nachricht beispielsweise „Add mini CRM training prototype“ ein. Wählen Sie den vorgesehenen Zielbranch beziehungsweise die Option für einen neuen Branch und bestätigen Sie die vorgeschlagene Änderung. Warten Sie auf die Rückkehr zur Repository-Ansicht und prüfen Sie, ob die Datei tatsächlich vorhanden ist."
      }
    ]
  },
  {
    "chapter": "7",
    "id": "7.2",
    "title": "Dateien direkt bearbeiten",
    "page": 11,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Öffnen Sie die README, wählen Sie das Bearbeitungssymbol und ergänzen Sie einen Hinweis zum flüchtigen Datenspeicher. Lesen Sie die Vorschau beziehungsweise die Änderungsansicht, bevor Sie speichern. Bestätigen Sie mit einer passenden Nachricht, etwa „Document temporary CRM session data“. Das Bearbeiten im Browser ist erst nach der Commit-Bestätigung als neue Version festgehalten."
      },
      {
        "kind": "heading",
        "text": "Kontrollpunkt und Grenzen"
      },
      {
        "kind": "paragraph",
        "text": "Öffnen Sie nach dem Upload die Datei im Repository und prüfen Sie den aktuellen Commit. Die Quelltextansicht ist noch keine veröffentlichte Website. Der Live-Aufruf wird erst in Kapitel 12 beziehungsweise 13 eingerichtet. Falls Ihre Datei nicht hochgeladen werden kann, beachten Sie die Browsergrenze von 25 MiB pro Datei und bis zu 100 Dateien gleichzeitig; der hier gezeigte Prototyp benötigt diese Größen nicht."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Laden Sie nur die für das Projekt vorgesehenen Dateien hoch. Prüfen Sie besonders Downloads, lokale Konfigurationsdateien und Tabellenexporte, bevor Sie eine Mehrfachauswahl bestätigen."
      }
    ]
  },
  {
    "chapter": "8",
    "id": "8.1",
    "title": "Was ist ein Commit?",
    "page": 11,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein Commit ist ein festgehaltener Projektstand in der Versionsgeschichte. Er verbindet den gespeicherten Inhalt mit Informationen zur Änderung und einer Commit-Nachricht. Git speichert keine bloße Sammlung unabhängig benannter „Final“-Dateien, sondern eine verknüpfte Historie. Ein neuer Commit verändert nicht den Inhalt eines alten Commits; auch eine umgeschriebene Geschichte arbeitet mit ersetzenden Commits. Für den Alltag können Sie sich einen Commit als bewusst gesetzten Meilenstein vorstellen: „Diese fachlich zusammengehörige Änderung ist beschrieben und kann jetzt geprüft werden.“ Er ist nicht automatisch eine Freigabe und auch nicht automatisch ein Deployment. Bei lokaler Arbeit kann er zunächst ausschließlich auf dem eigenen Gerät liegen."
      }
    ]
  },
  {
    "chapter": "8",
    "id": "8.2",
    "title": "Warum Commits wichtig sind",
    "page": 11,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Eine verständliche Historie hilft, Ursachen einer Verhaltensänderung einzugrenzen. Wer die Suche geändert hat, sollte beschreiben, welcher Aspekt betroffen ist. Im Pull Request lässt sich anschließend der Unterschied zum Zielbranch ansehen. Ohne nachvollziehbare Nachrichten muss das Team den Zweck aus dem Code erraten. GitHubs Einstiegsworkflow betont deshalb Nachrichten, die den Grund der Änderung erklären."
      },
      {
        "kind": "heading",
        "text": "Schlechtes und gutes Beispiel"
      },
      {
        "kind": "paragraph",
        "text": "Schlechter Commit: „Update“. Die Nachricht ist technisch möglich, erklärt aber weder Gegenstand noch Absicht."
      },
      {
        "kind": "paragraph",
        "text": "Guter Commit: „Add customer search functionality“. Die Nachricht benennt eine konkrete Funktion. Eine ergänzende Beschreibung könnte erklären, dass Firma und Kontakt durchsucht werden sollen. Die Beispiele sind Empfehlungen für diese Schulung, keine von Git erzwungene Schreibregel."
      }
    ]
  },
  {
    "chapter": "8",
    "id": "8.3",
    "title": "Best Practices für den Alltag",
    "page": 12,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Fassen Sie jeweils eine zusammenhängende Änderung in einem Commit zusammen. Vermischen Sie die Reparatur eines Suchfehlers nicht unnötig mit einer vollständigen Neugestaltung. Prüfen Sie vor dem Speichern die geänderten Dateien und die Zielbranch-Auswahl. Halten Sie auch Dokumentationsänderungen fest und beschreiben Sie bei nicht offensichtlichen Entscheidungen das Warum. Eine gute Schulungsnachricht besteht aus einer knappen Zusammenfassung und bei Bedarf einer Erläuterung. „Clarify temporary customer storage“ ist hilfreicher als „Small fix“. Verweisen Sie bei vorhandener Aufgabenverwaltung auf die passende Aufgabe, statt vertrauliche Inhalte in die Commit-Nachricht zu kopieren."
      },
      {
        "kind": "heading",
        "text": "Übung: Historie lesen"
      },
      {
        "kind": "paragraph",
        "text": "Öffnen Sie die Commit-Historie des Repositories und wählen Sie Ihren letzten Commit. Lesen Sie die Nachricht, betrachten Sie die betroffene Datei und erklären Sie einer zweiten Person die Änderung."
      },
      {
        "kind": "callout",
        "text": "Kontrollpunkt: Aus der Nachricht und der Änderungsansicht wird verständlich, was beabsichtigt war."
      }
    ]
  },
  {
    "chapter": "9",
    "id": "9.1",
    "title": "Getrennte Arbeitslinien statt Dateikopien",
    "page": 12,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein Branch ist eine benannte Entwicklungslinie innerhalb eines Repositories. Er erlaubt, Änderungen unabhängig vom gemeinsamen Hauptstand vorzubereiten. Beim Erstellen eines Branches beginnen Sie am gewählten Ausgangsstand. Spätere Änderungen bleiben zunächst auf dieser Arbeitslinie, bis sie in eine andere übernommen werden. Die Namen sind Vereinbarungen des Teams, keine fachlichen Garantien durch Git."
      }
    ]
  },
  {
    "chapter": "9",
    "id": "9.2",
    "title": "Feature Branches, Develop Branch und Main Branch",
    "page": 12,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein „Feature Branch“ dient einer überschaubaren Aufgabe. In der Schulung verwenden wir „feature/suchhinweis“ für eine verbesserte Beschriftung der vorhandenen Suche. „main“ ist hier der freizugebende gemeinsame Stand und später der Produktionsbranch für Netlify. GitHub zeigt im Einstieg häufig „main“ als Standardbranch; der tatsächliche Name kann im jeweiligen Projekt anders sein. Ein zusätzlicher „Develop Branch“, häufig „develop“ genannt, kann als gemeinsame Integrationslinie vor einer Veröffentlichung dienen. Er ist eine optionale Teamkonvention, kein Pflichtbestandteil von Git oder GitHub. Für das kleine Schulungsprojekt empfehlen wir den einfacheren Weg von einem Feature Branch per Pull Request direkt nach „main“. Das folgende zweite Schema zeigt nur eine mögliche Erweiterung mit „develop“."
      },
      {
        "kind": "heading",
        "text": "ASCII-Diagramm: einfacher Schulungsablauf"
      },
      {
        "kind": "code",
        "text": "Zeit --------------------------------------->\nmain     A---B----------------M--->\n                          /\nfeature      C---D----------/\n             Änderung + Review"
      },
      {
        "kind": "paragraph",
        "text": "A bis D stehen beispielhaft für Commits. M ist in diesem Schema ein Merge-Commit. Bei anderen Merge-Verfahren sieht die Historie anders aus. Die Arbeitslinie ist keine vollständige zusätzliche Kopie aller Dateien im Browser."
      },
      {
        "kind": "heading",
        "text": "Optionale Teamkonvention:"
      },
      {
        "kind": "code",
        "text": "feature -> Pull Request -> develop\ndevelop -> Freigabe-PR -> main"
      }
    ]
  },
  {
    "chapter": "9",
    "id": "9.3",
    "title": "Branch im Browser anlegen",
    "page": 13,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Öffnen Sie „Code“, wählen Sie im Branch-Menü zunächst „main“ und geben Sie anschließend den neuen Namen „feature/suchhinweis“ ein. Bestätigen Sie „Create branch … from main“. Kontrollieren Sie danach die Branch-Anzeige, bevor Sie eine Datei bearbeiten."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Halten Sie Branches kurzlebig und auf eine Aufgabe beschränkt. Kontrollpunkt: Auf Ihrem Feature Branch ist eine Änderung sichtbar, auf „main“ noch nicht. Branches ersetzen keine Berechtigungen und dürfen nicht als Sicherheitsgrenze für vertrauliche Dateien verstanden werden."
      }
    ]
  },
  {
    "chapter": "10",
    "id": "10.1",
    "title": "Änderung vorbereiten und vorschlagen",
    "page": 13,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein Pull Request bittet darum, Änderungen eines Quellbranches in einen Zielbranch zu übernehmen. Er bündelt Diskussion und Änderungsansicht. Die bloße Erstellung ändert den Zielbranch noch nicht. Der folgende Ablauf verwendet den Branch aus Kapitel 9 und verändert nur den Suchhinweis im Mini-CRM."
      },
      {
        "kind": "callout",
        "text": "Schritt 1 – Branch erstellen: Falls noch nicht vorhanden, erstellen Sie „feature/suchhinweis“ aus „main“. Öffnen Sie dort „index.html“. Ändern Sie den Platzhaltertext des Suchfelds von „Zum Beispiel Alpen“ auf „Firma oder Kontakt eingeben“. Speichern Sie die Änderung als Commit „Clarify customer search hint“."
      },
      {
        "kind": "callout",
        "text": "Schritt 2 – Änderungen hochladen: Bei Browserbearbeitung liegt der bestätigte Commit bereits auf GitHub. Wenn Sie die Datei lokal geändert haben, laden Sie sie gezielt auf denselben Feature Branch hoch. Vergewissern Sie sich, dass keine unbeabsichtigten Dateien enthalten sind."
      },
      {
        "kind": "callout",
        "text": "Schritt 3 – Pull Request erstellen: Öffnen Sie „Pull requests“ und den Einstieg für einen neuen Pull Request beziehungsweise den angebotenen Vergleichslink. Wählen Sie als „base“ den Zielbranch „main“ und als „compare“ Ihren Feature Branch. Prüfen Sie die Unterschiede und erstellen Sie den Pull Request mit einem verständlichen Titel. Beschreiben Sie Ziel, Umfang und Test: „Suchhinweis präzisiert; Suche nach Firma und Kontakt im Browser geprüft.“"
      }
    ]
  },
  {
    "chapter": "10",
    "id": "10.2",
    "title": "Review durchführen und freigeben",
    "page": 13,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 4 – Prüfen: Eine zweite berechtigte Person öffnet den Pull Request, liest die Beschreibung und kontrolliert unter „Files changed“ die Änderung. Sie prüft fachliches Verhalten, unbeabsichtigte Änderungen und die dokumentierten Tests. Rückfragen sollen konkret und sachlich sein. Beispiel: „Bitte bestätige, dass auch Kontaktpersonen gefunden werden.“"
      },
      {
        "kind": "callout",
        "text": "Schritt 5 – Freigeben: Die prüfende Person schließt ihr Review mit Kommentar, Änderungsanforderung oder „Approve“ entsprechend dem Ergebnis ab. Eine Freigabe darf erst erfolgen, wenn offene Fragen geklärt sind. Für eine realistische Übung benötigen Sie eine zweite Person mit passenden Rechten; die Autorin oder der Autor ersetzt keine unabhängige Freigabe durch Selbstbestätigung."
      }
    ]
  },
  {
    "chapter": "10",
    "id": "10.3",
    "title": "Merge und Abschlusskontrolle",
    "page": 13,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 6 – Übernehmen: Nach den erforderlichen Reviews und Prüfungen führt eine berechtigte Person den angebotenen Merge aus und bestätigt ihn. Kontrollieren Sie anschließend die Datei auf „main“. Löschen Sie den erledigten Feature Branch nur nach der Teamregel. Bei Konflikten oder blockierten Prüfungen wird nicht umgangen, sondern zuerst die Ursache behoben."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: In einer Einzelübung können Sie den Ablauf demonstrieren, aber keine unabhängige Prüfung nachweisen. Kontrollpunkt: Pull Request abgeschlossen, Änderung auf „main“ sichtbar und vereinbarte Tests dokumentiert."
      }
    ]
  },
  {
    "chapter": "11",
    "id": "11.1",
    "title": "Was ist GitHub Copilot?",
    "page": 14,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "GitHub Copilot ist ein KI-Assistent zur Unterstützung beim Schreiben, Verstehen und Überarbeiten von Software. Er kann Code vorschlagen, Fragen zu einer Codebasis beantworten und Änderungen prüfen. Welche Funktionen verfügbar sind, hängt vom Tarif, der verwendeten Anwendung und den Richtlinien der Organisation ab. Copilot ist kein Ersatz für die Verantwortung der Personen, die eine Änderung prüfen und freigeben."
      }
    ]
  },
  {
    "chapter": "11",
    "id": "11.2",
    "title": "Einsatzmöglichkeiten und Vorteile",
    "page": 14,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Einsteiger können sich bestehende Funktionen erklären lassen, geeignete Testfälle erarbeiten oder eine kleine, klar abgegrenzte Änderung entwerfen lassen. Im Mini-CRM könnte Copilot erklären, wie das Suchfeld mit der Kundenliste zusammenarbeitet. Ein möglicher Vorteil ist der schnellere Einstieg in unbekannten Code. Die Antwort muss trotzdem am tatsächlichen Programm geprüft werden; plausible Erklärungen können falsch oder unvollständig sein."
      },
      {
        "kind": "heading",
        "text": "Vorbereitung der Übung"
      },
      {
        "kind": "paragraph",
        "text": "Melden Sie sich mit dem freigeschalteten Konto im genehmigten Copilot-Zugang an. Verwenden Sie nur den fiktiven Beispielcode und keinen vertraulichen Projektkontext ohne Freigabe. Wenn Copilot nicht verfügbar ist, führen Sie die folgende Aufgabe als manuelle Codebesprechung durch. Ein fehlender Zugang ist kein Anlass, private Konten oder nicht zugelassene Dienste zu verwenden."
      }
    ]
  },
  {
    "chapter": "11",
    "id": "11.3",
    "title": "Beispiel einer Codegenerierung",
    "page": 14,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Beispielprompt: „Ergänze für das Mini-CRM eine reine JavaScript-Funktion, die Kunden nach ihrem Firmennamen sortiert. Verändere das übergebene Array nicht. Erkläre den Code in einfacher Sprache und nenne Tests für Umlaute und eine leere Liste. Verwende keine externen Bibliotheken.“ Eine mögliche, hier illustrativ ausgearbeitete Antwort lautet:"
      },
      {
        "kind": "code",
        "text": "function sortCustomers(items) {\n  return [...items].sort((a, b) =>\n    a.company.localeCompare(b.company, 'de'));\n}"
      },
      {
        "kind": "paragraph",
        "text": "Die eckigen Klammern mit den drei Punkten erzeugen hier eine neue Array-Struktur. Die Sortierung vergleicht die Firmennamen mit deutscher Sprachkonvention. Dieses Beispiel setzt gültige Kundenobjekte mit einem Textfeld „company“ voraus. Es ist eine optionale Erweiterung und noch nicht Bestandteil des Codes in Kapitel 6.4."
      },
      {
        "kind": "heading",
        "text": "Prüfen statt ungeprüft übernehmen"
      },
      {
        "kind": "paragraph",
        "text": "Lassen Sie sich erklären, an welcher Stelle die Funktion eingebunden werden soll. Testen Sie eine leere Liste, mehrere Firmennamen und Einträge mit Umlauten. Prüfen Sie außerdem, ob das ursprüngliche Array unverändert bleibt. Übernehmen Sie erst danach eine gezielte Änderung auf einem Feature Branch und lassen Sie diese wie jede andere Änderung reviewen. Die menschliche Kontrolle ist ein zentraler Bestandteil des verantwortlichen Einsatzes."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Bitten Sie zunächst um eine Erklärung und einen kleinen Änderungsvorschlag statt um die Neuentwicklung des gesamten Projekts. Kontrollpunkt: Sie können den übernommenen Code ohne Verweis auf „die KI hat es gesagt“ erläutern."
      }
    ]
  },
  {
    "chapter": "12",
    "id": "12.1",
    "title": "Was sind GitHub Pages?",
    "page": 15,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "GitHub Pages veröffentlicht statische Websites aus einem Repository. Es verarbeitet HTML, CSS und JavaScript und kann optional einen Buildprozess verwenden. Es eignet sich damit technisch für die statische Schulungsseite, nicht für die Bereitstellung einer frei ausführbaren serverseitigen CRM-Anwendung. Eine Projektseite ist dem jeweiligen Repository zugeordnet."
      }
    ]
  },
  {
    "chapter": "12",
    "id": "12.2",
    "title": "Einsatz, Vorteile und Grenzen",
    "page": 15,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Für Schulungsseiten und Projektdokumentationen ist die direkte Verbindung zum Repository praktisch: Änderungen können denselben Prüfprozess durchlaufen wie andere Dateien. Die Konfiguration einer einfachen Quelle ist überschaubar. Die Verfügbarkeit für private Repositories hängt vom GitHub-Angebot ab; bei GitHub Free muss das Quellrepository für Pages grundsätzlich öffentlich sein. Machen Sie deshalb niemals ein internes Repository nur zum Ausprobieren öffentlich. Eine private Quelle bedeutet nicht automatisch eine private Website. GitHub warnt ausdrücklich vor öffentlich erreichbaren Pages-Seiten auch bei privaten Quellrepositories, sofern keine passende Zugriffskontrolle greift. Darüber hinaus ist Pages nicht als kostenloses Hosting für einen Online-Geschäftsbetrieb, E-Commerce oder kommerzielles SaaS vorgesehen und soll nicht für sensible Transaktionen wie Passwort- oder Kreditkarteneingaben verwendet werden. Das Mini-CRM bleibt daher ein Lernbeispiel."
      }
    ]
  },
  {
    "chapter": "12",
    "id": "12.3",
    "title": "Optionale Schritt-für-Schritt-Veröffentlichung",
    "page": 15,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 1: Prüfen Sie, ob Pages für Ihr Konto und das freigegebene Repository verfügbar ist und die Veröffentlichung genehmigt wurde. Stellen Sie sicher, dass „index.html“ auf dem gewählten Branch im vorgesehenen Quellordner liegt. Für diese Übung ist das der Hauptordner von „main“."
      },
      {
        "kind": "callout",
        "text": "Schritt 2: Öffnen Sie im Repository „Settings“ und „Pages“. Wählen Sie unter „Build and deployment“ als Quelle „Deploy from a branch“. Wählen Sie „main“ und den Hauptordner „/(root)“ und speichern Sie. Falls eine andere genehmigte Konfiguration vorgegeben ist, verändern Sie diese nicht."
      },
      {
        "kind": "callout",
        "text": "Schritt 3: Verfolgen Sie den zugehörigen Workflow unter „Actions“. Öffnen Sie nach erfolgreicher Veröffentlichung über „Pages“ die Funktion „Visit site“ und verwenden Sie den dort tatsächlich angezeigten Link. Wiederholen Sie die Tests aus Kapitel 6.3. Prüfen Sie bei einem Fehler zunächst Quelle, Dateiname und Workflow, statt mehrfach die Sichtbarkeit zu ändern."
      },
      {
        "kind": "heading",
        "text": "Praxistipp und Kontrollpunkt"
      },
      {
        "kind": "paragraph",
        "text": "Pages und Netlify sind in dieser Schulung alternative Veröffentlichungswege. Für das vollständige End-to-End-Beispiel genügt Netlify. Kontrollpunkt: Sie können den Unterschied zwischen Quellrepository, Veröffentlichungsquelle und erreichbarer Website erklären. Dokumentieren Sie, wer auf die Seite zugreifen darf und ob der tatsächliche Zugriff diesem Ziel entspricht."
      }
    ]
  },
  {
    "chapter": "13",
    "id": "13.1",
    "title": "Netlify Einführung",
    "page": 16,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Netlify ist eine Plattform zum Erstellen und Veröffentlichen von Websites und Webanwendungen. Für dieses Handbuch verwenden wir ausschließlich das Hosting einer bereits fertigen statischen HTML-Datei und die Verbindung zu einem GitHub-Repository. Netlify kann ein Repository einlesen und bei neuen übertragenen Änderungen erneut veröffentlichen. Das ist der Kern des hier geübten Continuous-Deployment-Ablaufs."
      },
      {
        "kind": "heading",
        "text": "Vorteile und Einsatzgebiete"
      },
      {
        "kind": "paragraph",
        "text": "Der praktische Vorteil liegt in der Verbindung zwischen versioniertem Quellstand und bereitgestellter Website. Eine freigegebene Änderung kann ohne erneuten manuellen Dateiupload zur Hostingplattform bereitgestellt werden. Für die Schulung sind Prototypen und statische Informationsseiten geeignete Beispiele. Erweiterte Plattformfunktionen werden nicht benötigt und sollen nicht versehentlich eingerichtet werden."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Prüfen Sie vor der Registrierung freigegebene Tarife, mögliche Nutzungskosten und den erlaubten Veröffentlichungsumfang. Dieses Handbuch trifft keine Preiszusage. Eine technische Bereitstellung ersetzt keine organisatorische Freigabe."
      }
    ]
  },
  {
    "chapter": "13",
    "id": "13.2",
    "title": "Netlify Account erstellen",
    "page": 16,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 1 – Registrierung: Öffnen Sie die offizielle Netlify-Oberfläche über den Registrierungszugang. Wählen Sie eine angebotene, in Ihrer Organisation erlaubte Anmeldemethode und folgen Sie den Bestätigungsschritten. Verwenden Sie für die Schulung das vorgesehene Konto und Team, nicht einen beliebigen privaten Arbeitsbereich. Netlify setzt für den Repository-Import ein Konto voraus."
      },
      {
        "kind": "callout",
        "text": "Schritt 2 – Login: Melden Sie sich an und prüfen Sie im Team-Dashboard die aktive Teamzuordnung. Bevor Sie ein neues Projekt starten, bestätigen Sie, dass Sie in der genehmigten Schulungsumgebung arbeiten. Die Kontoanmeldung und die Berechtigung zum Zugriff auf ein GitHub-Repository sind getrennte Schritte."
      }
    ]
  },
  {
    "chapter": "13",
    "id": "13.3",
    "title": "GitHub Repository verbinden",
    "page": 16,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 1: Wählen Sie im Team-Dashboard den Einstieg für ein neues Projekt. Die aktuelle Dokumentation nennt „Add new project“ und „Import a Git repository“. In anderen Ansichten kann der entsprechende Einstieg „Import Existing Project“ heißen. Wählen Sie den Repository-Import, nicht den KI-Neuaufbau."
      },
      {
        "kind": "callout",
        "text": "Schritt 2: Wählen Sie „GitHub“ als Anbieter. Folgen Sie dem Autorisierungsdialog. Beschränken Sie die Berechtigung, soweit der Dialog dies zulässt, auf das Schulungsrepository. Bestätigen Sie keine weitergehenden Organisationsrechte ohne Freigabe. Falls eine administrative Genehmigung erforderlich ist, warten Sie auf diese."
      },
      {
        "kind": "callout",
        "text": "Schritt 3: Wählen Sie „mini-crm-schulung“ beim korrekten Eigentümer. Kontrollpunkt: Repository, Konto und Team stimmen überein; als zu veröffentlichender Branch ist für die folgende Übung „main“ vorgesehen."
      }
    ]
  },
  {
    "chapter": "13",
    "id": "13.4",
    "title": "Deployment durchführen",
    "page": 16,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Ein Deployment erstellt eine bereitgestellte Version der Website. Bei einem Framework müssten Quelldateien oft erst in auslieferbare Dateien umgewandelt werden. Das Mini-CRM enthält seine auslieferbare Datei bereits. Ein Build-Befehl ist deshalb für dieses Beispiel nicht erforderlich. Netlify unterscheidet insbesondere Basisverzeichnis, Build-Befehl und Veröffentlichungsverzeichnis; veröffentlicht werden nur die Dateien aus dem Publish Directory."
      },
      {
        "kind": "heading",
        "text": "Build Einstellungen für dieses Projekt"
      },
      {
        "kind": "callout",
        "text": "Schritt 1: Prüfen Sie den Produktionsbranch „main“. Das Repository enthält „index.html“ direkt im Hauptverzeichnis, nicht in einem zusätzlichen Unterordner. Lassen Sie das Base Directory für diese Struktur leer beziehungsweise auf der standardmäßigen Repository-Wurzel. Ein Package Directory wird für diesen Ein-Datei-Aufbau nicht benötigt."
      },
      {
        "kind": "callout",
        "text": "Schritt 2: Lassen Sie den Build-Befehl leer. Tragen Sie für das Publish Directory den Punkt „.“ ein, um die Repository-Wurzel relativ zum Basisverzeichnis zu wählen. Falls die Oberfläche die Wurzel bereits gleichwertig vorbelegt, kontrollieren Sie diese Auswahl. Verwenden Sie nicht „dist“, solange kein entsprechender Ausgabeordner existiert. Für das Beispiel ist kein Framework und kein Paketinstallationsschritt nötig."
      },
      {
        "kind": "callout",
        "text": "Schritt 3: Prüfen Sie die Veröffentlichungssichtbarkeit vor der Bestätigung. Netlify beschreibt für neue Teams in bestimmten kreditbasierten Angeboten eine private Voreinstellung. Übernehmen Sie weder „öffentlich“ noch „privat“ ungeprüft als sichere Annahme. Bestätigen Sie anschließend die angebotene Veröffentlichungsaktion; die aktuelle Kurzanleitung nennt sie „Publish“."
      }
    ]
  },
  {
    "chapter": "13",
    "id": "13.5",
    "title": "Erfolgreiches Deployment",
    "page": 17,
    "blocks": [
      {
        "kind": "callout",
        "text": "Schritt 1 – Status und Logs: Öffnen Sie den gestarteten Deploy und lesen Sie Status und Protokoll. Prüfen Sie, welches Repository, welcher Branch und welcher Commit verarbeitet wurden. Ein veröffentlichter Stand muss auf den beabsichtigten Quellstand zurückzuführen sein. Bei einem Fehler korrigieren Sie zuerst die Ursache, etwa ein falsches Ausgabeverzeichnis."
      },
      {
        "kind": "callout",
        "text": "Schritt 2 – Live URL: Öffnen Sie die tatsächlich in Netlify angezeigte Website-Adresse. Übernehmen Sie diese in Ihre Schulungsnotizen; erfinden Sie keinen Projektnamen für die Adresse. Kontrollieren Sie den Zugriff mit einer für den vorgesehenen Nutzerkreis passenden Sitzung. Geben Sie eine private Schulungsseite nicht allein für einen bequemeren Test öffentlich frei."
      },
      {
        "kind": "heading",
        "text": "Live-Prüfung und Abnahme"
      },
      {
        "kind": "paragraph",
        "text": "Wiederholen Sie den Test aus Kapitel 6.3: Suche nach Firma, Suche nach Kontakt, Leermeldung, Hinzufügen eines fiktiven Kunden und Rückkehr zum Ausgangsstand nach Neuladen. Notieren Sie Live-Adresse, Commit-Kennung, Ergebnis und etwaige Abweichungen. Ein erfolgreicher Deployment-Status allein belegt noch nicht das korrekte fachliche Verhalten."
      }
    ]
  },
  {
    "chapter": "13",
    "id": "13.6",
    "title": "Automatische Deployments",
    "page": 17,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Bei Continuous Deployment ist das Repository mit dem Hosting verbunden. Wenn neue Commits an den eingerichteten Git-Anbieter und den passenden Branch übertragen werden, startet Netlify den konfigurierten Veröffentlichungsablauf. Auch eine im Browser bestätigte Änderung auf dem Produktionsbranch kann diesen Ablauf auslösen. Bei lokaler Arbeit muss der Commit zuerst per Push auf GitHub gelangen."
      },
      {
        "kind": "heading",
        "text": "End-to-End-Übung: sichtbare Änderung veröffentlichen"
      },
      {
        "kind": "callout",
        "text": "Schritt 1: Erstellen Sie aus „main“ einen Branch „feature/dashboard-titel“. Ändern Sie im Mini-CRM die sichtbare Überschrift „Dashboard“ in „Kundenübersicht“. Verändern Sie dabei nicht die technischen Kennungen der Elemente. Committen Sie mit „Rename CRM dashboard heading“ und prüfen Sie die Änderungsansicht."
      },
      {
        "kind": "callout",
        "text": "Schritt 2: Eröffnen Sie einen Pull Request nach „main“. Beschreiben Sie, dass ausschließlich eine Überschrift angepasst wurde. Lassen Sie die Änderung reviewen und nach Freigabe mergen. Damit wird bewusst der freigegebene Hauptstand verändert, nicht lediglich ein isolierter Testbranch."
      },
      {
        "kind": "callout",
        "text": "Schritt 3: Öffnen Sie in Netlify den Deployment-Verlauf. Prüfen Sie, ob der neue Deploy den erwarteten Commit auf „main“ verarbeitet. Öffnen Sie anschließend die Live-Seite und kontrollieren Sie die Überschrift sowie weiterhin die Such- und Erfassungsfunktion. Wenn das Ergebnis nicht erscheint, vergleichen Sie zuerst Branch und Commit, dann die aufgerufene Website."
      },
      {
        "kind": "heading",
        "text": "Kompletter Prozessfluss"
      },
      {
        "kind": "code",
        "text": "Entwickler\n   ↓\nGitHub Commit\n   ↓\nGitHub Repository\n   ↓\nNetlify Build\n   ↓\nDeployment\n   ↓\nLive Website"
      },
      {
        "kind": "paragraph",
        "text": "Der Prozessfluss ist vereinfacht: Im vereinbarten Teamablauf liegen Branch, Pull Request und Review vor der Aktualisierung des Produktionsbranches. „Netlify Build“ bezeichnet hier die Verarbeitung des Quellstands; bei unserem reinen HTML-Beispiel wird kein eigener Build-Befehl ausgeführt. Nur der konfigurierte Veröffentlichungsweg entscheidet über den Live-Stand."
      },
      {
        "kind": "heading",
        "text": "Kontrollpunkt und Praxistipp"
      },
      {
        "kind": "paragraph",
        "text": "Dokumentieren Sie eine lückenlose Zuordnung zwischen gewünschter Änderung, Pull Request, Commit und Live-Ergebnis. Automatisierung macht eine fehlende fachliche Freigabe nicht nachträglich korrekt. Für die Schulung reicht eine einfache Abnahme-Notiz: „Überschrift geändert; Suche und Erfassung weiter funktionsfähig; erwarteter Commit veröffentlicht.“"
      }
    ]
  },
  {
    "chapter": "14",
    "id": "14.1",
    "title": "Repository-Namen und Dokumentation",
    "page": 18,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Wählen Sie kurze, verständliche Namen mit einem erkennbaren Projektzweck. „mini-crm-schulung“ erklärt mehr als „test2“. Definieren Sie in der README Ziel, verantwortlichen Kontaktweg, Startanleitung, Testfälle und bekannte Einschränkungen. Kennzeichnen Sie Prototypen ausdrücklich als solche. Die README ist GitHubs etablierter Einstieg zur Projektbeschreibung; ihre Qualität ist eine Teamaufgabe."
      }
    ]
  },
  {
    "chapter": "14",
    "id": "14.2",
    "title": "Branching und Commits",
    "page": 18,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Verwenden Sie für jede überschaubare Aufgabe einen passenden Arbeitsbranch. Legen Sie fest, welcher Branch freigegeben und welcher gegebenenfalls experimentell ist. Ein zusätzlicher „develop“-Branch soll ein konkretes Abstimmungsproblem lösen, nicht nur eine kompliziertere Struktur erzeugen. Das Schulungsmodell mit kurzlebigen Feature Branches ist eine Empfehlung für dieses kleine Projekt. Erstellen Sie fachlich zusammenhängende Commits. Prüfen Sie Dateiliste, Unterschiede und Nachricht vor dem Speichern. Beschreiben Sie Änderungen so, dass eine andere Person ihren Zweck versteht. Vermeiden Sie Sammeländerungen ohne klaren Zusammenhang und Nachrichten wie „Update“ oder „Fix stuff“."
      }
    ]
  },
  {
    "chapter": "14",
    "id": "14.3",
    "title": "Pull Requests und Reviews",
    "page": 19,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Eine gute Pull-Request-Beschreibung erklärt Ausgangslage, Änderung und Test. Machen Sie erwartete sichtbare Auswirkungen deutlich. Kleinere Änderungspakete sind für die Schulung leichter zu prüfen. Rückmeldungen beziehen sich auf das Ergebnis und seine Risiken, nicht auf die Person. Die Freigabe soll bewusst erfolgen und nachvollziehbar sein."
      },
      {
        "kind": "heading",
        "text": "Empfohlenes Review-Schema"
      },
      {
        "kind": "paragraph",
        "text": "Prüfen Sie zuerst den Zweck, dann die Unterschiede und schließlich das beobachtbare Verhalten. Fragen Sie: Passt die Änderung zur Aufgabe? Sind nur notwendige Dateien verändert? Funktionieren bestehende Funktionen weiter? Sind Testdaten fiktiv? Ist eine Dokumentationsanpassung nötig? Dieses Schema ist eine Kursvorlage und keine verbindliche Unternehmensrichtlinie."
      }
    ]
  },
  {
    "chapter": "14",
    "id": "14.4",
    "title": "Sicherheit und kontrollierte Veröffentlichung",
    "page": 19,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Schützen Sie Konten mit der vorgesehenen zusätzlichen Authentifizierung. Laden Sie keine Passwörter, API-Schlüssel oder personenbezogenen Kundendaten in das Schulungsrepository. GitHub warnt ausdrücklich davor, sensible Informationen zu committen oder zu pushen. Eine spätere Löschung der sichtbaren Datei ist nicht mit der Bereinigung aller früheren Stände gleichzusetzen. Prüfen Sie Berechtigungen bei externen Integrationen und beschränken Sie diese auf den benötigten Umfang. Kontrollieren Sie die tatsächliche Erreichbarkeit der Live-Seite getrennt von der Repository-Sichtbarkeit. Behalten Sie auch Logs im Blick: Netlify erlaubt bei öffentlichen Repositories eine eigene Einstellung zur Sichtbarkeit der Deploy-Logs."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Nutzen Sie vor jedem Merge die kurze Frage: „Könnte ich diese Änderung einer neu hinzukommenden Person erklären und anhand eines Tests belegen?“"
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.0",
    "title": "Überblick",
    "page": 19,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Die folgenden Fälle sind typische, für die Schulung formulierte Diagnosesituationen. Prüfen Sie immer zuerst Konto, Repository, Branch und den letzten bestätigten Stand. Ändern Sie nicht gleichzeitig mehrere Einstellungen; sonst lässt sich die wirksame Korrektur nur schwer erkennen."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.1",
    "title": "Anmeldung scheitert nach dem Kontowechsel",
    "page": 19,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Im Browser ist ein anderes Konto aktiv oder der zusätzliche Faktor gehört zu einer anderen Identität. Lösung: Prüfen Sie das Profil und den vorgesehenen Anmeldeweg. Verwenden Sie Ihre eingerichtete Authentifizierung beziehungsweise den freigegebenen Wiederherstellungsweg. Geben Sie Wiederherstellungscodes nicht an Schulungsteilnehmende weiter. Kontrollpunkt ist die Anmeldung mit der richtigen Identität."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.2",
    "title": "Verifizierungsnachricht fehlt",
    "page": 19,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Schreibfehler in der E-Mail-Adresse, Spamfilter oder verzögerte Zustellung. Lösung: Prüfen Sie Postfach und gespeicherte Adresse und veranlassen Sie gegebenenfalls eine neue Bestätigung über den Kontodialog. Legen Sie nicht vorschnell ein weiteres Konto an. GitHub sieht die E-Mail-Verifizierung als Teil der vollständigen Kontoeinrichtung vor."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.3",
    "title": "Upload oder Bearbeitung wird verweigert",
    "page": 19,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Der Branch ist geschützt oder eine Repository-Regel blockiert die Änderung. Lösung: Arbeiten Sie auf einem erlaubten Feature Branch und reichen Sie einen Pull Request ein. Fehlen auch dort Rechte, lassen Sie den vorgesehenen Zugriff klären. Entfernen Sie keine Schutzregeln für die Übung. Kontrollpunkt ist ein regelkonform erstellter Commit."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.4",
    "title": "Datei ist für den Browserupload zu groß",
    "page": 20,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Statt der benötigten Projektdatei wurde beispielsweise ein umfangreiches Archiv gewählt. Lösung: Prüfen Sie die Auswahl und laden Sie nur die vorgesehenen Dateien hoch. Die offizielle Browsergrenze liegt bei 25 MiB je Datei. Für echte große Projektdateien ist eine gesondert abgestimmte Strategie erforderlich; das Mini-CRM benötigt sie nicht."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.5",
    "title": "Die Änderung ist auf „main“ nicht sichtbar",
    "page": 20,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Sie haben korrekt auf einem Feature Branch gearbeitet, aber noch nicht gemergt. Lösung: Vergleichen Sie die Branch-Anzeige und öffnen Sie den Pull Request. Prüfen Sie Review- und Merge-Status. Kontrollieren Sie nach der genehmigten Übernahme erneut die Datei auf „main“. Ein Commit auf einem Arbeitsbranch aktualisiert den Zielbranch nicht von selbst."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.6",
    "title": "Pull Request zeigt unerwartete Unterschiede",
    "page": 20,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Quell- und Zielbranch wurden verwechselt oder die Änderung enthält zusätzliche Dateien. Lösung: Prüfen Sie „base“, „compare“ und die vollständige Änderungsansicht. Korrigieren Sie den Vorschlag, bevor Sie ein Review anfordern. Kontrollpunkt ist ein Vergleich, der ausschließlich die beabsichtigte Änderung enthält."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.7",
    "title": "Merge ist wegen eines Konflikts blockiert",
    "page": 20,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Änderungen auf unterschiedlichen Branches lassen sich nicht automatisch zusammenführen. Lösung: Lassen Sie die betroffene Stelle gemeinsam mit einer erfahrenen Person prüfen und klären Sie den fachlich korrekten Endstand. Vermeiden Sie ein pauschales Übernehmen nur einer Seite. Testen Sie den aufgelösten Stand vor dem Merge erneut. Git unterstützt parallele Arbeit, aber die Entscheidung über widersprüchliche Inhalte braucht eine bewusste Auflösung."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.8",
    "title": "Website liefert eine Fehlerseite statt des CRM",
    "page": 20,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Die Startdatei liegt nicht im tatsächlich veröffentlichten Ordner. Lösung: Prüfen Sie bei Netlify das Publish Directory und bei Pages den gewählten Branch samt Quellordner. In dieser Schulung muss „index.html“ direkt in der ausgewählten Wurzel liegen. Kontrollpunkt ist der erfolgreiche Aufruf über den angezeigten Live-Link."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.9",
    "title": "Netlify meldet einen Buildfehler",
    "page": 20,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Ein unpassender Framework-Befehl oder ein nicht vorhandener Ausgabeordner wurde eingetragen. Lösung: Lesen Sie die erste aussagekräftige Fehlerstelle im Deploy-Protokoll. Prüfen Sie für dieses Beispiel den leeren Build-Befehl und das Publish Directory „.“. Kopieren Sie nicht ungeprüft Einstellungen eines anderen Frameworks. Nur Dateien im Publish Directory werden ausgeliefert."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.10",
    "title": "Automatisches Deployment startet nicht",
    "page": 20,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Der Commit befindet sich nicht auf dem konfigurierten Veröffentlichungsbranch, wurde lokal noch nicht gepusht oder die Repository-Verknüpfung ist nicht wirksam. Lösung: Prüfen Sie den Commit auf GitHub, den Produktionsbranch und die eingerichtete Verbindung. Ändern Sie nicht die Sichtbarkeit als vermeintliche Reparatur. Kontrollpunkt ist ein neuer Deploy mit dem erwarteten Quellstand."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.11",
    "title": "Neu angelegte Kunden verschwinden",
    "page": 21,
    "blocks": [
      {
        "kind": "callout",
        "text": "Ursache in diesem Beispiel: Das Mini-CRM speichert nur im Arbeitsspeicher der Seite. Lösung: Das Verhalten ist beabsichtigt und kein GitHub-Fehler. Wiederholen Sie den Test mit erfundenen Daten und dokumentieren Sie die Grenze. Eine dauerhafte, gemeinsame Kundenverwaltung wäre ein eigenständiges Entwicklungsprojekt mit Datenschutz- und Sicherheitsanforderungen."
      }
    ]
  },
  {
    "chapter": "15",
    "id": "15.12",
    "title": "Formular oder Suche reagiert nicht",
    "page": 21,
    "blocks": [
      {
        "kind": "callout",
        "text": "Mögliche Ursache: Beim Kopieren fehlen Zeilen oder technische Kennungen wurden verändert. Lösung: Vergleichen Sie alle vier Codeteile aus Kapitel 6.4 in ihrer Reihenfolge. Prüfen Sie gerade Anführungszeichen und den echten Dateinamen „index.html“. Beginnen Sie bei den Übergängen der Codeteile. Kontrollpunkt ist der vollständige lokale Test vor einem erneuten Upload."
      },
      {
        "kind": "heading",
        "text": "Praxistipp: Fehler nachvollziehbar melden"
      },
      {
        "kind": "paragraph",
        "text": "Beschreiben Sie erwartetes und tatsächliches Verhalten, die betroffene Seite und die zuletzt ausgeführte Aktion. Ergänzen Sie einen bereinigten Screenshot ohne geheime Daten. Veröffentlichen Sie keine Zugangscodes oder vollständigen vertraulichen Logs in einem Issue."
      }
    ]
  },
  {
    "chapter": "16",
    "id": "16.1",
    "title": "Grundlagen und Versionsverwaltung",
    "page": 21,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Die Grundlagenbegriffe beschreiben Projektablage, Versionsgeschichte, Arbeitslinien und lokale Git-Arbeit. Die interaktive Begriffsreferenz unterhalb der Kapitel enthält die Erklärungen."
      }
    ]
  },
  {
    "chapter": "16",
    "id": "16.2",
    "title": "Zusammenarbeit, Sicherheit und Veröffentlichung",
    "page": 22,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Issue, Pull Request, Diff, Review, Approve, Merge und Deployment beschreiben unterschiedliche Schritte. Ein erfolgreicher Merge und eine erfolgreiche Veröffentlichung sind zwei verschiedene Ereignisse."
      }
    ]
  },
  {
    "chapter": "17",
    "id": "17.1",
    "title": "Wichtigste Erkenntnisse",
    "page": 24,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sie haben einen vollständigen Lernweg vom abgesicherten Konto bis zur erreichbaren Website durchlaufen. Git hält Versionen fest; GitHub organisiert die Zusammenarbeit um Repositories und Änderungsvorschläge. Ein Commit beschreibt einen gespeicherten Stand, ein Branch trennt Arbeitslinien und ein Pull Request schafft Raum für Prüfung und Diskussion. Erst der Merge übernimmt die Änderung in den vereinbarten Zielbranch. Die Veröffentlichung ist ein eigener Schritt. GitHub Pages stellt statische Inhalte aus einer festgelegten Quelle bereit. Netlify kann ein Repository einlesen und mit Continuous Deployment auf neue übertragene Änderungen reagieren. Die Sichtbarkeit des Quellrepositories und die Erreichbarkeit der Website müssen getrennt geprüft werden."
      }
    ]
  },
  {
    "chapter": "17",
    "id": "17.2",
    "title": "Empfehlungen für den Alltag",
    "page": 24,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Arbeiten Sie mit kleinen Änderungspaketen, verständlichen Commit-Nachrichten und dokumentierten Tests. Lassen Sie Änderungen unabhängig prüfen und kontrollieren Sie nach dem Deployment das sichtbare Verhalten."
      },
      {
        "kind": "paragraph",
        "text": "Arbeiten Sie mit freigegebenen Konten und Integrationen. Halten Sie geheime Informationen aus Quellcode, Commit-Nachrichten, Issues und Screenshots heraus. Kennzeichnen Sie Grenzen eines Prototyps deutlich. Das in dieser Schulung erstellte Mini-CRM zeigt einen Lernablauf; es ist keine Empfehlung, reale Kundenbeziehungen ohne geeignete Schutzmaßnahmen zu verwalten."
      }
    ]
  },
  {
    "chapter": "17",
    "id": "17.3",
    "title": "Nächste Lernschritte",
    "page": 24,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Vertiefen Sie Markdown und Issues, üben Sie Pull Requests zu zweit und lernen Sie anschließend lokale Git-Arbeit kennen. Automatisierte Tests, Schutzregeln und Betriebskonzepte sind weiterführende Themen."
      },
      {
        "kind": "heading",
        "text": "Abschlussübung und Lernerfolg"
      },
      {
        "kind": "paragraph",
        "text": "Führen Sie ohne Anleitung eine kleine Textänderung am Mini-CRM durch. Erstellen Sie einen Branch, schreiben Sie einen aussagekräftigen Commit, eröffnen Sie einen Pull Request und lassen Sie das Ergebnis prüfen. Verfolgen Sie nach der Freigabe den veröffentlichten Commit bis zur Live-Seite. Erläutern Sie anschließend, warum neue Kundeneinträge nach dem Neuladen verschwinden und weshalb diese Demo nicht für Echtdaten geeignet ist. Die Abschlussübung ist bestanden, wenn Ihre Lernpartnerin oder Ihr Lernpartner Zweck, Änderung, Test und Veröffentlichung nachvollziehen kann. Halten Sie offene Fragen fest, bevor Sie mit dem nächsten Thema beginnen."
      },
      {
        "kind": "callout",
        "text": "Praxistipp: Bewahren Sie das Schulungsrepository als bereinigtes Lernbeispiel auf, sofern die geltenden Vorgaben dies erlauben. Entfernen Sie keine Konten, Integrationen oder Projekte ohne die dafür erforderliche Zustimmung."
      }
    ]
  },
  {
    "chapter": "17",
    "id": "17.4",
    "title": "Quellen und Pflegehinweise",
    "page": 24,
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Offizielle Quellen der Produktanleitungen; Abrufdatum: 20. November 2026. CRM-Code, Übungen und Praxistipps sind Schulungsbeispiele."
      },
      {
        "kind": "paragraph",
        "text": "1. Hello World – GitHub-Einstieg mit Branches und Pull Requests"
      },
      {
        "kind": "paragraph",
        "text": "2. GitHub for Beginners – Überblick und Zusammenarbeit"
      },
      {
        "kind": "paragraph",
        "text": "3. Git Guide – Versionsverwaltung und Git-Arbeitsweise"
      },
      {
        "kind": "paragraph",
        "text": "4. Getting started with your GitHub account – Konto und Sicherheit"
      },
      {
        "kind": "paragraph",
        "text": "5. Creating a GitHub Pages site – Veröffentlichung und Sichtbarkeit"
      },
      {
        "kind": "paragraph",
        "text": "6. Configuring a publishing source – Pages-Quelle einrichten"
      },
      {
        "kind": "paragraph",
        "text": "7. Adding a file to a repository – Browserupload und Grenzen"
      },
      {
        "kind": "paragraph",
        "text": "8. About GitHub Copilot – Funktionsumfang und Verfügbarkeit"
      },
      {
        "kind": "paragraph",
        "text": "9. Application card: GitHub Copilot Agents – Verantwortung und Grenzen"
      },
      {
        "kind": "paragraph",
        "text": "10. What is GitHub Pages? – Statisches Hosting"
      },
      {
        "kind": "paragraph",
        "text": "11. GitHub Pages limits – Nutzungseinschränkungen"
      },
      {
        "kind": "paragraph",
        "text": "12. Netlify Build configuration overview – Verzeichnisse und Builds"
      },
      {
        "kind": "paragraph",
        "text": "13. Netlify Create deploys – Repository-Deployment"
      },
      {
        "kind": "paragraph",
        "text": "14. Netlify Deploy from your repository – Import und Sichtbarkeit"
      },
      {
        "kind": "paragraph",
        "text": "15. GitHub glossary – Englische Begriffsreferenz"
      },
      {
        "kind": "paragraph",
        "text": "16. GitHub Glossar – Deutsche Begriffsreferenz"
      },
      {
        "kind": "heading",
        "text": "Pflege vor dem nächsten Schulungstermin"
      },
      {
        "kind": "paragraph",
        "text": "Prüfen Sie vor jeder Schulung Menübezeichnungen, Berechtigungen und Veröffentlichungssichtbarkeit. Testen Sie CRM und Deployment erneut und aktualisieren Sie bei Bedarf die bereinigten Screenshots."
      }
    ]
  }
]
export const crmCode = "<!doctype html>\n<html lang=\"de\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>Mini CRM – Schulung</title>\n<style>\n:root { font-family: system-ui, sans-serif; color: #17324d; }\n* { box-sizing: border-box; }\nbody { margin: 0; background: #edf3f8; line-height: 1.5; }\nheader { background: #17324d; color: white; padding: 1.5rem; }\nmain { max-width: 1000px; margin: auto; padding: 1rem; }\nh1, h2 { margin-top: 0; }\nsection { background: white; padding: 1.2rem; margin-bottom: 1rem; border-radius: .6rem; }\n.stats { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }\n.stat { background: #e7f1f5; padding: 1rem; border-radius: .4rem; }\n.stat strong { display: block; font-size: 1.8rem; }\nlabel { display: block; font-weight: 600; margin-top: .6rem; }\ninput, select, button { font: inherit; padding: .6rem; border: 1px solid #71869b; border-radius: .3rem; }\ninput, select { width: 100%; }\nbutton { margin-top: 1rem; background: #176275; color: white; cursor: pointer; }\n:focus-visible { outline: 3px solid #bd6400; outline-offset: 3px; }\n.table-wrap { overflow-x: auto; }\ntable { width: 100%; border-collapse: collapse; }\nth, td { padding: .7rem; text-align: left; border-bottom: 1px solid #d5e0e8; }\ncaption { text-align: left; font-weight: 600; }\n.note { border-left: 4px solid #bd6400; padding-left: 1rem; }\n#message { min-height: 1.5rem; }\n</style>\n</head>\n<body>\n<header><h1>Mini CRM</h1><p>Schulungsprojekt für eine fiktive KMU</p></header>\n<main>\n<p class=\"note\">Nur fiktive Daten! Neue Einträge verschwinden beim Neuladen. Keine Anmeldung, keine zentrale Speicherung, kein produktives CRM.</p>\n<section aria-labelledby=\"dashboard\">\n<h2 id=\"dashboard\">Dashboard</h2>\n<div class=\"stats\">\n<div class=\"stat\">Kunden gesamt<strong id=\"total\">0</strong></div>\n<div class=\"stat\">Aktive Kunden<strong id=\"active\">0</strong></div>\n<div class=\"stat\">Interessenten<strong id=\"leads\">0</strong></div>\n</div>\n<p>Die Kennzahlen beziehen sich auf alle gespeicherten Sitzungseinträge.</p>\n</section>\n<section aria-labelledby=\"customers\">\n<h2 id=\"customers\">Kundenverwaltung</h2>\n<label for=\"search\">Nach Firma oder Kontakt suchen</label>\n<input id=\"search\" type=\"search\" placeholder=\"Zum Beispiel Alpen\">\n<p id=\"result\" role=\"status\"></p>\n<div class=\"table-wrap\">\n<table><caption>Kundenliste</caption>\n<thead><tr><th scope=\"col\">Firma</th><th scope=\"col\">Kontakt</th><th scope=\"col\">Status</th></tr></thead>\n<tbody id=\"rows\"></tbody></table>\n</div></section>\n<section aria-labelledby=\"add\">\n<h2 id=\"add\">Kunden hinzufügen</h2>\n<form id=\"customer-form\">\n<label for=\"company\">Firma</label><input id=\"company\" required maxlength=\"80\" autocomplete=\"off\">\n<label for=\"contact\">Kontaktperson</label><input id=\"contact\" required maxlength=\"80\" autocomplete=\"off\">\n<label for=\"status\">Status</label><select id=\"status\"><option>Aktiv</option><option>Interessent</option></select>\n<button type=\"submit\">Kunden hinzufügen</button>\n</form><p id=\"message\" role=\"status\"></p>\n</section></main>\n<script>\n'use strict';\nconst customers = [\n { company: 'Alpen Demo AG', contact: 'Kim Muster', status: 'Aktiv' },\n { company: 'Seeblick Beispiel GmbH', contact: 'Sam Demo', status: 'Interessent' },\n { company: 'Waldtal Testbetrieb', contact: 'Robin Beispiel', status: 'Aktiv' }\n];\nconst byId = id => document.getElementById(id);\nconst search = byId('search');\nconst rows = byId('rows');\nconst form = byId('customer-form');\nfunction render() {\n const query = search.value.trim().toLocaleLowerCase('de');\n const visible = customers.filter(customer => (customer.company + ' ' + customer.contact).toLocaleLowerCase('de').includes(query));\n rows.replaceChildren();\n for (const customer of visible) {\n  const row = document.createElement('tr');\n  for (const field of ['company', 'contact', 'status']) {\n   const cell = document.createElement('td');\n   cell.textContent = customer[field];\n   row.appendChild(cell);\n  }\n  rows.appendChild(row);\n }\n if (!visible.length) {\n  const row = document.createElement('tr');\n  const cell = document.createElement('td');\n  cell.colSpan = 3;\n  cell.textContent = 'Keine passenden Kunden gefunden.';\n  row.appendChild(cell);\n  rows.appendChild(row);\n }\n byId('result').textContent = visible.length + ' Treffer';\n byId('total').textContent = customers.length;\n byId('active').textContent = customers.filter(customer => customer.status === 'Aktiv').length;\n byId('leads').textContent = customers.filter(customer => customer.status === 'Interessent').length;\n}\nsearch.addEventListener('input', render);\nform.addEventListener('submit', event => {\n event.preventDefault();\n const company = byId('company').value.trim();\n const contact = byId('contact').value.trim();\n const status = byId('status').value;\n if (!company || !contact) { byId('message').textContent = 'Bitte Firma und Kontakt ausfüllen.'; return; }\n if (!['Aktiv', 'Interessent'].includes(status)) { byId('message').textContent = 'Bitte einen gültigen Status wählen.'; return; }\n customers.push({ company, contact, status });\n form.reset();\n search.value = '';\n render();\n byId('message').textContent = 'Kunde für diese Sitzung hinzugefügt. Nicht dauerhaft gespeichert.';\n byId('company').focus();\n});\nrender();\n</script>\n</body></html>\n"
