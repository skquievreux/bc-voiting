# Projektkonzept: CanvasCo-Pilot
**Interaktive BMC-Workshopplattform mit KI-Recherche-Assistenz**

## 1. Vision & Kernidee
Ein digitales Tool, das eine Gruppe von 5 Personen durch den Prozess des *Business Model Canvas (BMC)* führt. Statt vorgefertigter Lösungen liefert die App **gezielte Recherche-Impulse** und **KI-Prompts**, um das Team zum eigenen kritischen Denken anzuregen. Die Bedienung erfolgt hürdenfrei über QR-Codes und Echtzeit-Synchronisation.

---

## 2. Der Workshop-Ablauf (User Journey)

### Phase 1: Initialisierung (Moderator)
* Der Moderator gibt eine **Ursprungsidee** ein (z.B. „Nachhaltiges Car-Sharing für Senioren“).
* Das System generiert im Hintergrund für alle 9 BMC-Felder spezifische **Recherche-Kits** (Suchbegriffe, Foren-Links, KI-Prompts).
* Ein zentrales Dashboard (Beamer/Tablet) zeigt einen **QR-Code** für den Session-Beitritt.

### Phase 2: Iterative Erarbeitung (9 Felder)
Für jedes Feld des BMC (z.B. Value Proposition, Customer Segments) durchläuft die Gruppe drei Schritte:
1.  **Recherche & Input:** Teilnehmer scannen den QR-Code des Feldes. Sie erhalten die KI-Recherche-Impulse auf ihr Handy, suchen Informationen und senden ihre eigenen Ideen/Ergebnisse (max. 140 Zeichen) ein.
2.  **Voting:** Alle 5 Teilnehmer sehen die gesammelten anonymen Vorschläge auf ihrem Handy und vergeben 3 Stimmen (Dot-Voting).
3.  **Reflexion:** Das Dashboard zeigt die Top-Ergebnisse. Die KI blendet eine **„Critical Challenge“** ein – eine provokante Gegenfrage, um die gewählte Idee zu prüfen.

### Phase 3: Finale & Export
* Das fertige Canvas wird visualisiert.
* Export als PDF oder interaktives Board für die weitere Ausarbeitung.

---

## 3. Screen-Design & Rollenkonzepte

### A. Teilnehmer-App (Smartphone)
* **Minimalistisches Interface:** Fokus auf die aktuelle Aufgabe.
* **Recherche-Widget:** Buttons zum Kopieren von Suchbegriffen oder Prompts („Copy to Clipboard“).
* **Eingabemaske:** Einfaches Textfeld mit Charakter-Counter.
* **Voting-Modul:** Klickbare Kacheln zur Stimmenvergabe.

### B. Moderator-Dashboard (Zentral-Screen)
* **Progress-Bar:** Zeigt an, in welchem der 9 Felder sich die Gruppe befindet.
* **Live-Wall:** Eingehende Teilnehmer-Antworten erscheinen in Echtzeit als Kacheln.
* **Result-View:** Highlight-Ansicht der Gewinner-Ideen mit KI-Kommentar.

---

## 4. Technische Anforderungen (Stitch / MongoDB Integration)

### Datenmodell (Backend)
* **Collection `Sessions`:** Speichert die `initial_idea` und den `current_step` (Feld 1-9).
* **Collection `ResearchKits`:** Enthält die KI-generierten Prompts und Suchlinks pro Feld.
* **Collection `Contributions`:** Verknüpft `user_id`, `field_id` und den `text_content`.
* **Collection `Votes`:** Speichert die Stimmenverteilung pro Beitrag.

### Logik & Schnittstellen
* **Real-time Trigger:** Bei Statusänderung der Session (Moderator klickt auf „Nächstes Feld“) müssen alle verbundenen Clients (Teilnehmer) per **Change Streams** (Stitch/App Services) sofort die Ansicht wechseln.
* **KI-Anbindung:** Integration einer API (z.B. GPT-4), um aus der Ursprungsidee die Recherche-Pfade zu extrahieren (ohne die Lösung vorwegzunehmen).

---

## 5. UI/UX Styleguide
* **Modern & Clean:** Viel Weißraum, klare Typografie (z.B. Inter oder Roboto).
* **Farbkodierung:** Jedes BMC-Feld erhält eine dezente Kennfarbe (z.B. Blau für Kunden-Themen, Gelb für Value Prop, Grün für Finanzen).
* **Gamification:** Fortschrittsbalken und Bestätigungs-Animationen bei erfolgreichem Absenden oder Voten.
