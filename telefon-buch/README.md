# Kontaktverwaltung React-Anwendung

Eine einfache und benutzerfreundliche Kontaktverwaltungsanwendung, entwickelt mit React.js.

## 🚀 Funktionen

- Kontakte hinzufügen mit Name und Telefonnummer
- Kontaktliste in Echtzeit filtern
- Responsive Design
- Automatische Formularrückstellung nach dem Hinzufügen
- Gesamtanzahl der Kontakte anzeigen

## 💻 Technologien

- React.js
- CSS3
- useState und useEffect Hooks
- Komponenten-basierte Architektur
- Bun als JavaScript Runtime und Paketmanager

## 🛠️ Installation

1. Stellen Sie sicher, dass Bun installiert ist:

```bash
curl -fsSL https://bun.sh/install | bash
```

1.2 Klonen Sie das Repository:

```bash
git clone [git@github.com:AliRamazanYildirim/telefon-buch.git]
```

1.3 Installieren Sie die Abhängigkeiten:

```bash
cd telefon-buch
bun install
```

1. Starten Sie die Entwicklungsumgebung:

```bash
bun run dev
```

## 📁 Projektstruktur

```path
src/
├── components/
│   ├── Contacts/
│   │   ├── Contacts.jsx
│   │   ├── styles.css
│   │   ├── Form/
│   │   │   └── Form.jsx
│   │   └── List/
│   │       └── List.jsx
├── App.jsx
└── App.css
```

## 🔍 Komponenten

### Contacts

Die Hauptkomponente, die den Zustand der Kontakte verwaltet und die Form- und List-Komponenten enthält.

### Form

Verwaltet die Eingabe neuer Kontakte mit:

- Namenseingabe
- Telefonnummereingabe
- Automatische Formularrückstellung

### List

Zeigt die Kontaktliste an und bietet:

- Echtzeit-Filterung
- Übersichtliche Darstellung
- Anzeige der Gesamtanzahl

## 🎨 Styling

Die Anwendung verwendet ein benutzerfreundliches Design mit:

- Heller, angenehmer Farbpalette
- Responsive Eingabefelder
- Klare visuelle Hierarchie
- Abgerundete Ecken für moderne Optik

## 🤝 Beitrag

Beiträge sind willkommen! Bitte folgen Sie diesen Schritten:

1. Fork des Repositories
2. Erstellen Sie einen Feature-Branch
3. Commit Sie Ihre Änderungen
4. Push zum Branch
5. Öffnen Sie einen Pull Request

## 📝 Lizenz

🎓 MIT License

Copyright (c) [2024] [Ali Ramazan Yildirim]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
