# 📘 CanvasCo-Pilot – Vollständiges Konzept v2.0
**Version:** 2.0 | **Partner:** Tech Heroes Bad Vilbel | **Format:** Hackathon-Engine

---

## 1. Vision & Kernaussage

CanvasCo-Pilot ist eine **browserbasierte Hackathon-Engine**, die 4–6 Teams gleichzeitig durch den kompletten Prozess führt: von der leeren Gruppe über strukturierte Ideenfindung bis zum fertigen Pitch. Ein Moderator steuert alle Gruppen synchron. Gamification-Mechaniken sorgen dafür, dass jeder Teilnehmer aktiv mitmacht.

> **Kernversprechen:** "Von 0 auf Pitch in 120 Minuten – mit Methode, KI-Coaching und echtem Teamwork."

---

## 2. Gesamtüberblick: Der komplette Hackathon-Flow

```
Phase 0        Phase 1         Phase 2              Phase 3        Phase 4        Phase 5
Setup    →   Gruppen-    →   Ideenfindung    →    BMC-         →  Pitch-      →  Export &
(Mod.)       Bildung         (Methoden)           Workshop        Builder        Präsentation
~10 Min      ~10 Min         ~30 Min              ~70 Min         ~15 Min        ~10 Min
```

**Neu gegenüber v1.0:** Phase 1 (Gruppenbildung) und Phase 2 (Ideenfindung mit Methoden) sind jetzt vollständig ausgearbeitet.

---

## 3. User Rollen & Screens

### 3.1 Moderator (1 Person, Master-Screen / Beamer)
- Legt Session + Gruppen an, generiert QR-Codes
- Schaltet Phasen frei (alle Gruppen wechseln synchron)
- Sieht Echtzeit-Eingaben und Voting-Ergebnisse aller Gruppen
- Kann einzelne Gruppen "spotlighten" (auf Beamer zeigen)
- Export aller Gruppen als ZIP (PDF/PPT)

### 3.2 Teilnehmer (Smartphone via QR-Code)
- **Kein Login** – QR-Scan → Nickname eingeben → drin
- Sieht aktuelle Phase + Methode + Timer
- Gibt Ideen/Antworten ein, stimmt ab
- Sieht eigenen Score + Gruppen-Score in Echtzeit

### 3.3 Gruppen-Screen *(optional, geteilter Bildschirm oder zweites Display)*
- Zeigt aktuellen Gruppenstand + alle Eingaben
- Live-Leaderboard Gruppen-Wettkampf
- Countdown-Timer

> **Wichtig:** Teilnehmer die kein Smartphone haben können sich an einem **gemeinsamen Gruppen-Screen** beteiligen. Der Moderator kann pro Gruppe festlegen: "Shared Screen Modus" (1 Gerät für die ganze Gruppe) oder "Einzelgeräte Modus".

---

## 4. Phasenplan (Detailliert)

---

### 🔧 Phase 0 – Setup *(Moderator, vor Event, ~10 Min)*

- [ ] Session anlegen (Name, Datum, Hackathon-Thema)
- [ ] Anzahl Gruppen konfigurieren (2–6 Gruppen)
- [ ] Gruppen-Namen vergeben oder Teilnehmer selbst wählen lassen
- [ ] **Modus pro Gruppe wählen:**
  - 📱 *Einzelgeräte* – jeder scannt eigenen QR-Code
  - 🖥️ *Shared Screen* – ein QR-Code für die Gruppe, Eingaben am gemeinsamen Gerät
- [ ] Zeitlimits pro Phase einstellen
- [ ] KI-Tiefe wählen (Basic / Standard / Deep)
- [ ] QR-Codes generieren + ausdrucken/anzeigen

---

### 👥 Phase 1 – Gruppenbildung & Onboarding *(~10 Min)*

**Ziel:** Jeder ist in seiner Gruppe drin und hat einen Nickname.

#### Ablauf:
1. Moderator zeigt QR-Codes auf Beamer (1 pro Gruppe)
2. Teilnehmer scannen → Nickname eingeben → beitreten
3. Gruppen-Screen zeigt live wer schon drin ist (Avatare erscheinen)
4. Moderator sieht auf Master-Screen: Gruppe A: 4/5 ✅ Gruppe B: 3/5 ⏳
5. Sobald alle drin: **Moderator startet Phase 2**

#### Gamification:
- +10 Punkte für Beitritt
- Gruppe mit vollständigem Team zuerst: +20 Gruppen-Bonus
- Wer einen kreativen Gruppen-Namen vorschlägt (Gruppe voted): +15

---

### 💡 Phase 2 – Ideenfindung mit Methoden *(~30 Min)*

**Ziel:** Aus einem Thema entsteht eine scharf formulierte, gewählte Gruppen-Idee.

Der Moderator wählt **2–3 Methoden** aus dem Methoden-Pool. Das Tool führt jede Gruppe Schritt für Schritt durch die gewählte Methode.

---

#### 📦 Methoden-Pool (KI-gestützt)

Jede Methode folgt demselben Struktur-Prinzip:
1. **Erklärung** – Was ist diese Methode? (animierte Karte, 30 Sek)
2. **Arbeitszeit** – Timer läuft, Eingaben werden gesammelt
3. **Voting** – Gruppe priorisiert
4. **KI-Reflexion** – Eine Folgefrage schärft das Ergebnis

---

##### 🌩️ Brainstorming *(5 Min)*
**Einsatz:** Erster Einstieg, Ideenflut ohne Filter
- Jeder gibt beliebig viele Ideen ein (140 Zeichen, unbegrenzt viele)
- Alle Ideen erscheinen live auf dem Gruppen-Screen
- Voting: Jeder vergibt 3 Punkte frei verteilt
- KI-Impuls: "Welche dieser Ideen löst ein echtes Problem?"

---

##### ✍️ Brainwriting 6-3-5 *(8 Min)*
**Einsatz:** Gleichberechtigte Beteiligung, niemand dominiert
- Jeder gibt 3 Ideen ein → nach 2,5 Min werden alle Ideen weitergereicht (rotiert)
- Teilnehmer sehen die Ideen der anderen und können darauf aufbauen (2 Runden)
- Ergebnis: bis zu 18 × Gruppen-Anzahl Ideen
- KI-Impuls: "Welche Kombination aus zwei Ideen wäre spannend?"

---

##### ⚡ Crazy 8s *(8 Min)*
**Einsatz:** Schnelle, visuelle Ideenentwicklung unter Zeitdruck
- 8 Ideen in 8 Minuten (je 1 Min pro Idee, Timer tickt)
- Nach jeder Minute: kurzes Ping, nächste Idee
- Alle 8 Ideen werden gesammelt und gevoted
- KI-Impuls: "Welche dieser 8 Ideen hättest du ohne Zeitdruck nie gedacht?"

---

##### 🔄 SCAMPER *(10 Min)*
**Einsatz:** Bestehende Ideen weiterentwickeln
- KI generiert auf Basis der bisherigen Idee 7 Impulse:
  - **S**ubstitute – Was könntet ihr ersetzen?
  - **C**ombine – Was könntet ihr kombinieren?
  - **A**dapt – Was könntet ihr anpassen?
  - **M**odify – Was könntet ihr verändern/vergrößern?
  - **P**ut to other use – Für wen else könnte das nützlich sein?
  - **E**liminate – Was könntet ihr weglassen?
  - **R**everse – Was wäre das Gegenteil davon?
- Gruppe wählt die stärksten 2–3 SCAMPER-Ergebnisse

---

##### 🗺️ Mind Mapping *(8 Min)*
**Einsatz:** Zusammenhänge erkennen, Themen clustern
- Kernbegriff steht in der Mitte (z.B. "KI im Krankenhaus")
- Jeder gibt Äste/Unterthemen ein
- Tool visualisiert als einfaches Mind-Map auf dem Gruppen-Screen
- KI clustert ähnliche Begriffe automatisch
- Voting auf das stärkste Cluster

---

##### 🎩 Six Thinking Hats *(10 Min)*
**Einsatz:** Ideen aus 6 Perspektiven betrachten
- KI weist jedem Teilnehmer (oder Subteam) einen Hut zu:
  - ⚪ Weiß: Welche Fakten kennen wir?
  - 🔴 Rot: Was fühlt ihr bei dieser Idee?
  - ⚫ Schwarz: Was könnte schiefgehen?
  - 🟡 Gelb: Was ist das Beste daran?
  - 🟢 Grün: Welche neue Variante fällt euch ein?
  - 🔵 Blau: Was ist unser nächster Schritt?
- Jeder gibt Antwort aus seiner Perspektive ein
- Gruppe diskutiert, Moderator leitet

---

##### 🔁 Reverse Brainstorming *(6 Min)*
**Einsatz:** Blockaden lösen, neue Blickwinkel finden
- KI dreht die Frage um: "Wie könntet ihr das Problem SCHLIMMER machen?"
- Alle geben "schlechte" Ideen ein
- KI dreht die Antworten automatisch um → neue Lösungsansätze entstehen
- Überraschungseffekt: oft die kreativsten Ergebnisse

---

##### ❓ Was-wäre-wenn-Fragen *(6 Min)*
**Einsatz:** Disruptive Ideen fördern
- KI generiert 5 radikale Szenarien basierend auf dem Hackathon-Thema:
  - "Was wenn es keine Ärzte mehr gäbe?"
  - "Was wenn Internet kostenlos und überall wäre?"
  - "Was wenn Zeit käuflich wäre?"
- Gruppe wählt 1 Szenario, entwickelt Idee dazu
- Voting auf die spannendste Antwort

---

##### 👤 Personas & Empathy Map *(10 Min)*
**Einsatz:** Nutzerzentrierte Lösungen entwickeln
- KI generiert 2 fiktive Personas basierend auf der Idee
- Gruppe befüllt für jede Persona:
  - Was denkt/fühlt sie? Was sieht sie? Was hört sie? Was tut sie?
  - Schmerzen & Ziele
- Ergebnis: klares Nutzerbild für den BMC

---

##### 🗺️ Customer Journey Mapping *(10 Min)*
**Einsatz:** Problem-Reise des Nutzers verstehen
- 5 Schritte: Bewusstsein → Suche → Entscheidung → Nutzung → Nachher
- Gruppe beschreibt Schmerz/Erlebnis an jedem Schritt
- KI markiert: Wo ist der größte Schmerzpunkt? → Das ist eure Chance

---

#### Empfohlene Methoden-Kombination pro Hackathon-Format

| Hackathon-Typ | Empfohlene Kombination | Dauer |
|---|---|---|
| **Kurz (2h)** | Brainstorming → Dot Voting | 15 Min |
| **Standard (4h)** | Brainstorming → SCAMPER → Personas | 30 Min |
| **Intensiv (ganztags)** | Crazy 8s → Six Hats → Customer Journey → SCAMPER | 50 Min |

---

#### Abschluss Phase 2: Ideen-Finale

Nach den gewählten Methoden läuft das **Ideen-Finale**:
1. Jede Gruppe hat eine Shortlist (3–5 Ideen aus dem Voting)
2. **Finales Grupps-Voting:** Welche Idee geht in den BMC?
3. Gewinner-Idee wird als **"Gruppen-Idee"** gespeichert
4. KI formuliert die Idee als 1-Satz-Pitch-Template: "Wir helfen [Zielgruppe] [Problem zu lösen] durch [Lösung]"
5. Gruppe bestätigt oder passt an

**Gamification:** Gruppe die zuerst eine bestätigte Idee hat: +50 Gruppen-Punkte

---

### 📊 Phase 3 – BMC-Workshop *(~70 Min, 9 Runden)*

Für jedes der 9 BMC-Felder läuft dieselbe Struktur:

#### Schritt 1: Erklärung (1–2 Min)
- Animierte Erklärkarte auf allen Geräten
- Einfache Sprache + Beispiel aus bekanntem Startup
- Leitfrage für diese Runde

#### Schritt 2: Sub-Team-Recherche (3–5 Min)
- Gruppe teilt sich in 2er-Teams (konfigurierbar)
- Jedes Sub-Team erarbeitet 1–2 Antworten
- KI-Impuls-Button: gibt Analogien und Recherche-Hinweise, KEINE Antworten
- Timer auf allen Screens sichtbar

#### Schritt 3: Eingabe & Sammlung (1 Min)
- Sub-Teams submitten Antworten
- Alle Eingaben anonym gesammelt
- Moderator sieht Fortschritt live

#### Schritt 4: Voting *(Kahoot-Moment)* (2 Min)
- Alle Eingaben der Gruppe erscheinen auf dem Screen
- Jeder vergibt 2 Punkte (Dot-Voting)
- Animierte Auswertung, Gewinner-Antwort hervorgehoben
- Punkte → Individual-Score + Gruppen-Score

#### Schritt 5: KI-Reflexion (30 Sek)
- Provokante Folgefrage zur Gewinner-Antwort
- Kein Zwang – Denkanstoß für den Pitch

---

#### Die 9 BMC-Felder

| # | Feld | Leitfrage | KI-Methoden-Verbindung |
|---|------|-----------|------------------------|
| 1 | Customer Segments | Wer hat das Problem am schlimmsten? | → Personas aus Phase 2 |
| 2 | Value Proposition | Was ändert sich im Leben des Kunden? | → Customer Journey aus Phase 2 |
| 3 | Channels | Wie erfährt der Kunde von euch? | → Brainstorming-Ergebnis |
| 4 | Customer Relationships | Wie bleibt ihr in Kontakt? | → Empathy Map |
| 5 | Revenue Streams | Wofür zahlt der Kunde wirklich? | → SCAMPER "Put to other use" |
| 6 | Key Resources | Was braucht ihr unbedingt? | → Six Hats Gelb/Schwarz |
| 7 | Key Activities | Was tut ihr täglich? | → Reverse Brainstorming |
| 8 | Key Partners | Wer muss mitmachen? | → Was-wäre-wenn |
| 9 | Cost Structure | Was kostet am meisten? | → Six Hats Schwarz |

> **KI-Vorteil:** Wenn in Phase 2 Methoden durchgeführt wurden, schlägt die KI im BMC automatisch relevante Ergebnisse daraus als Kontext vor – aber die Gruppe entscheidet selbst.

---

### 🎤 Phase 4 – Pitch-Builder *(~15 Min)*

Aus den Voting-Gewinnern aller 9 Felder entsteht automatisch ein Draft:

```
[Gruppenname] präsentiert:

🎯 Idee: [Gruppen-Idee aus Phase 2]

❗ Problem: [aus Value Proposition]
💡 Lösung: [aus Value Proposition]
👥 Für wen: [aus Customer Segments]
💶 Einnahmen: [aus Revenue Streams]
🤝 Partner: [aus Key Partners]
⚡ Warum wir: [Freitext, Gruppe ergänzt]
```

Gruppe kann:
- Antworten anpassen
- Reihenfolge ändern
- "Warum wir"-Satz manuell hinzufügen

---

### 📤 Phase 5 – Export & Präsentation *(~10 Min + Pitch)*

**Pro Gruppe:**
- 5-Slide Deck automatisch generiert
- PDF + PPT Export
- QR-Code zum digitalen Teilen

**Moderator-Übersicht:**
- Alle Gruppen nebeneinander
- Gesamt-Leaderboard Individual + Gruppe
- ZIP-Export aller Gruppen
- **Sieger-Zeremonie** mit Confetti 🎉

---

## 5. Gamification-System (Komplett)

### Individual-Punkte

| Aktion | Punkte |
|--------|--------|
| Gruppe beigetreten | +10 |
| Idee in Methoden-Phase submitted | +15 |
| Idee gewinnt Voting (Methoden) | +40 |
| BMC-Antwort submitted | +20 |
| BMC-Antwort gewinnt Voting | +50 |
| Schnellste Eingabe in Runde | +15 |
| Alle 9 BMC-Felder contributed | +100 Bonus |
| Pitch-Builder Freitext ausgefüllt | +25 |

### Gruppen-Punkte

| Aktion | Punkte |
|--------|--------|
| Team vollständig (alle drin) | +20 |
| Ideen-Finale abgeschlossen | +50 |
| Phase rechtzeitig abgeschlossen | +30 |
| 100% Voting-Participation | +25 |
| Alle Sub-Teams contributed | +40 |
| Pitch vollständig ausgefüllt | +80 |

### Anzeige-Konzept
- 📱 **Smartphone:** Mein Score + Gruppen-Rang
- 🖥️ **Gruppen-Screen:** Live-Leaderboard alle Gruppen
- 📺 **Beamer (Moderator):** Spotlights auf führende Gruppe oder spannendste Antwort

---

## 6. KI-Konzept

### Prinzip: Coach, nicht Antworter
Die KI gibt niemals fertige Antworten. Sie liefert:
- Methoden-Erklärungen (verständlich, kurz)
- Analoge Beispiele aus bekannten Startups
- Recherche-Strings ("Suche nach: X")
- Provokante Folgefragen
- Verbindungen zwischen Phase 2 (Ideenfindung) und Phase 3 (BMC)

### KI-Tiefe (Moderator wählt)
| Level | Was die KI macht |
|---|---|
| 🟢 Basic | Nur Methoden- und Felderklärungen |
| 🟡 Standard | + 1 Analogie + 1 Folgefrage pro Runde |
| 🔴 Deep | + Recherche-Prompts + Branchen-Beispiele + Phase2→BMC-Verknüpfung |

### KI auf Deutsch
Alle KI-Outputs sind auf Deutsch (Zielgruppe: DE-Schüler/Studenten). Moderator kann auf Englisch umschalten.

---

## 7. Technischer Stack (Golden Path)

| Bereich | Tool | Begründung |
|---|---|---|
| Framework | Next.js 16 App Router | Golden Path |
| Datenbank | Supabase (PostgreSQL) | Real-Time built-in |
| Real-Time | Supabase Realtime Channels | Moderator → alle Screens |
| Auth | Kein Login (Teilnehmer) / Magic Link (Moderator) | Friktionslos |
| KI | OpenAI GPT-4o-mini | Günstig, schnell, DE-Support |
| Export | react-pdf + pptxgenjs | PDF + PPT |
| Styling | Tailwind CSS v4 | Golden Path |
| Hosting | Vercel | Golden Path |
| QR | qrcode.react | Lightweight |

### Erweitertes Datenmodell

```prisma
model Session {
  id              String   @id @default(cuid())
  name            String
  theme           String?  // Hackathon-Thema (z.B. "KI im Gesundheitswesen")
  current_phase   Int      @default(0)
  current_field   Int      @default(0)
  ai_depth        String   @default("standard")
  status          String   @default("waiting")
  created_at      DateTime @default(now())
  groups          Group[]
  methods_config  Json     // Welche Methoden in welcher Reihenfolge
}

model Group {
  id           String       @id @default(cuid())
  session_id   String
  name         String
  mode         String       @default("individual") // "individual" | "shared"
  final_idea   String?      // Ergebnis aus Phase 2
  total_score  Int          @default(0)
  members      Member[]
  submissions  Submission[]
  idea_votes   IdeaVote[]
}

model Member {
  id          String @id @default(cuid())
  group_id    String
  nickname    String
  total_score Int    @default(0)
}

model Submission {
  id          String   @id @default(cuid())
  group_id    String
  member_id   String
  phase       String   // "ideation" | "bmc"
  method_key  String?  // "brainstorming" | "scamper" etc.
  field_key   String?  // "customer_segments" etc.
  content     String
  votes       Int      @default(0)
  is_winner   Boolean  @default(false)
  created_at  DateTime @default(now())
}
```

---

## 8. MVP-Scope

### P0 – Pilot mit Tech Heroes
- [ ] Session + Gruppen anlegen, QR-Code-Generierung
- [ ] Teilnehmer-Join (QR, Nickname, kein Login)
- [ ] Shared Screen Modus (1 Gerät pro Gruppe)
- [ ] Brainstorming + Dot Voting (erste Methode)
- [ ] Ideen-Finale (Gruppen-Idee bestätigen)
- [ ] BMC-Felder (alle 9, Eingabe + Voting)
- [ ] Synchrones Phasen-Switching durch Moderator
- [ ] Individual + Gruppen-Score
- [ ] Einfacher Pitch-Draft + PDF-Export

### P1 – Nach erstem Pilot
- [ ] Alle 10 Methoden implementiert
- [ ] KI-Impulsfragen (GPT-4o-mini)
- [ ] Animiertes Leaderboard
- [ ] Moderator-Übersicht alle Gruppen
- [ ] PPT-Export, Timer mit Warnung
- [ ] Phase2→BMC KI-Verknüpfung

### P2 – Skalierung
- [ ] White-Label (Tech Heroes Branding)
- [ ] Methoden-Kombinations-Empfehlung durch KI
- [ ] Session-Analytics für Veranstalter
- [ ] Offline-PWA Fallback

---

## 9. Go-to-Market

### Validierungs-Plan
1. **Woche 1–2:** Klick-Dummy (Figma oder HTML-Prototype)
2. **Woche 3:** Pilot beim nächsten Tech Heroes Hackathon (gratis)
3. **Woche 4:** Feedback → MVP-Scope final

### Preismodell
| Tier | Beschreibung | Preis |
|---|---|---|
| Per Event | Einmalig pro Hackathon | 99–199€ |
| Monats-Lizenz | Unbegrenzte Events | 299€/Monat |
| White-Label | Tech Heroes Branding | 499€/Monat |

### 1-Jahres-Ziel
> **5 Hackathon-Veranstalter × 299€/Monat = 1.495€ MRR** – mit Tech Heroes als validiertem Beta-Partner.

---

## 10. Offene Fragen

- [ ] Max. Teilnehmerzahl gleichzeitig? (Supabase Real-Time Limits prüfen)
- [ ] Tech Heroes Branding direkt einbauen?
- [ ] Wann nächster Hackathon? (Pilot-Termin festlegen)
- [ ] Welche 2–3 Methoden für ersten Pilot priorisieren?
- [ ] Wer entwickelt: Steffen solo, Team oder Outsource?

---

**Version:** 2.0 | **Erstellt:** März 2026
**Änderungen zu v1.0:** Gruppenbildungs-Flow, kompletter Methoden-Pool (10 Methoden), Shared-Screen-Modus, KI-Verknüpfung Phase2→BMC, erweitertes Datenmodell
