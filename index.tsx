:root {
  --background-color: #121212;
  --surface-color: #1e1e1e;
  --primary-color: #bb86fc;
  --primary-variant-color: #3700b3;
  --secondary-color: #03dac6;
  --error-color: #cf6679; /* Hinzugefügt für negative/Abzugswerte */
  --text-color: #e0e0e0;
  --text-color-secondary: #a0a0a0;
  --border-color: #333333;
  --header-background: #2a2a2a;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
}

#root {
    display: flex;
    justify-content: center;
    padding: 2rem;
    min-height: 100vh;
}

.container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--surface-color);
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

h1 {
    font-size: 1.75rem;
    color: var(--text-color);
}

.version-tag {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--text-color-secondary);
    background-color: var(--background-color);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--border-color);
    vertical-align: middle;
    margin-left: 0.75rem;
}

.month-navigation {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.current-year {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-color);
    width: 100px; /* Fixed width to prevent layout shifts */
    text-align: center;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    background-color: var(--background-color);
    border: 1px solid #000;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5), 
                inset -1px -1px 2px rgba(255, 255, 255, 0.05);
}

.month-select {
    background-color: var(--background-color);
    border: 1px solid #000;
    color: var(--text-color);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-family: inherit;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5), 
                inset -1px -1px 2px rgba(255, 255, 255, 0.05);
    -webkit-appearance: none; /* Removes default browser styling */
    -moz-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23e0e0e0%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    padding-right: 2em; /* Make space for the arrow */
    min-width: 180px;
}

.month-select:hover {
    border-color: var(--primary-color);
}

.month-nav-btn {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    padding: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.month-nav-btn:hover {
    background-color: var(--primary-color);
    color: #000;
}

button {
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

/* Sheet Navigation */
.sheet-nav {
    display: flex;
    gap: 0.5rem;
    background-color: var(--surface-color);
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.sheet-nav-btn {
    flex-grow: 1;
    text-align: center;
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-color-secondary);
    font-weight: 700;
    font-size: 1.2rem;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5), -1px -1px 2px rgba(255,255,255,0.05);
    position: relative;
    transition: all 0.1s ease-out;
}

.sheet-nav-btn:hover {
    background-color: var(--header-background);
}

.sheet-nav-btn:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5), -0.5px -0.5px 1px rgba(255,255,255,0.05), inset 2px 2px 4px rgba(0,0,0,0.5);
}

.sheet-nav-btn.active {
    background-color: var(--primary-variant-color);
    color: var(--text-color);
    border-color: #000;
    box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.7);
}

main {
}

.table-wrapper {
    overflow-x: auto;
    background-color: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    table-layout: fixed;
}

th, td {
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
    white-space: nowrap;
    text-align: center;
}

table th:first-child,
table td:first-child {
    text-align: left;
    padding-right: 10mm;
}

table td:first-child input {
    text-align: left;
}


/* Spaltenbreiten */
th:nth-child(1) { width: 15%; } /* Datum */
th:nth-child(2) { width: 8%; }  /* Tag */
th:nth-child(3),
th:nth-child(4),
th:nth-child(5),
th:nth-child(6) { width: 13.25%; } /* VM/NM Zeiten */
th:nth-child(7),
th:nth-child(8) { width: 12%; } /* Pause, Stunden */

thead {
    background-color: var(--header-background);
}

th {
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--text-color-secondary);
}

tbody tr:last-child td {
    border-bottom: none;
}

tbody tr:hover {
    background-color: #252525;
}

.active-row td,
.active-row td input {
    font-weight: 700;
}

td {
    color: var(--text-color);
    font-weight: 500;
    font-size: 1.1rem;
}

td input {
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    padding: 0.5rem;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
}

td input:disabled,
td input[readOnly] {
    background-color: var(--header-background);
    color: var(--text-color-secondary);
    cursor: not-allowed;
    font-style: italic;
    border-color: var(--border-color);
}

tfoot {
    background-color: var(--header-background);
}

tfoot tr {
    border-top: 6px solid var(--background-color);
}

tfoot td {
    padding: 1rem;
    border-bottom: none;
    font-weight: 700;
    vertical-align: middle;
}

.total-label {
    text-align: right;
    font-size: 1.1rem;
    color: var(--text-color-secondary);
}

.total-value {
    font-size: 1.5rem;
    color: var(--secondary-color);
}

.footer-actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-align: left;
}

.backup-btn {
    background-color: var(--primary-variant-color);
    color: var(--text-color);
    border: 1px solid var(--primary-color);
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.backup-btn:hover {
    background-color: var(--primary-color);
    color: #000;
}

/* Sheet Content Styles */
.sheet-content {
    background-color: var(--surface-color);
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.sheet-content h2 {
    font-size: 1.5rem;
    color: var(--text-color);
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
}

.sheet-content p {
    color: var(--text-color-secondary);
}

.sheet-content em {
    color: var(--primary-color);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-weight: 700;
    color: var(--text-color-secondary);
}

.rate-input {
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    padding: 0.75rem;
    border-radius: 6px;
    font-family: inherit;
    font-size: 1.2rem;
    max-width: 200px;
}

/* Lohn Table Specific Styles */
.lohn-table-wrapper {
    margin-top: 0.5rem;
}

.ansatz-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
}

.ansatz-wrapper input {
    min-width: 0;
}

.percent-sign {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-color-secondary);
}

.currency-sign {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-color-secondary);
}

.lohn-table th:nth-child(1) { width: 45%; } /* Beschreibung */
.lohn-table th:nth-child(2) { width: 15%; } /* Stunden */
.lohn-table th:nth-child(3) { width: 20%; } /* Ansatz */
.lohn-table th:nth-child(4) { width: 20%; } /* Total */

.lohn-table td {
    vertical-align: middle;
}

.lohn-table td:first-child {
    position: relative;
}

.beschreibung-unit {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: var(--surface-color);
    padding: 0 0.25em;
    color: var(--text-color-secondary);
    white-space: nowrap;
    z-index: 1;
}

.calculated-total {
    font-weight: 700;
    color: var(--secondary-color);
}

.bruttolohn-row input {
    font-weight: 700;
}

/* Farben für Lohnberechnungstotale */
/* Grundlohn & Anzahlung (blau) */
.lohn-row-0 .calculated-total,
.lohn-row-7 .calculated-total {
    color: #8ab4f8; /* Google Blue 300 */
}

/* Abzüge (rot) */
.lohn-row-4 .calculated-total,
.lohn-row-5 .calculated-total,
.lohn-row-6 .calculated-total {
    color: var(--error-color);
}

/* Inset-Effekt für Nettolohn (Zeile 10, ID 9) */
.lohn-row-9 .calculated-total {
    font-weight: bold;
    font-size: 1.3rem; /* Etwas größer zur Betonung */
    text-shadow: 
        1px 1px 2px rgba(0, 0, 0, 0.9), /* Dunkler Schatten unten rechts für Tiefe */
        -1px -1px 2px rgba(255, 255, 255, 0.1); /* Heller Schein oben links für den Glanz */
}

.lohn-row-4 td:first-child input {
  padding-right: 10mm;
}

/* Jahres-Bilanz Styles */
.year-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    width: 100%;
}

.month-container {
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0.75rem; /* Reduziertes Padding */
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5), 
                inset -1px -1px 2px rgba(255,255,255,0.05);
}

.month-container h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem; /* Reduzierter Abstand */
    font-size: 1rem;
}

.month-data {
    margin-top: 0.25rem; /* Reduzierter Abstand */
    width: 100%;
    font-size: 0.85rem; /* Kleinere Schrift */
    text-align: left;
}

.month-data p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem; /* Reduzierter Abstand */
    padding-bottom: 0.25rem;
    border-bottom: 1px solid var(--border-color);
}

.month-data p:last-child {
    margin-bottom: 0;
    border-bottom: none;
}

.month-data p span:first-child {
    color: var(--text-color-secondary);
}

.month-data p span:last-child {
    font-weight: 700;
    color: var(--secondary-color);
}

/* Chart Styles */
.chart-container {
    margin-top: 2rem;
    background-color: var(--background-color);
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid var(--border-color);
    box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5), 
                inset -1px -1px 2px rgba(255,255,255,0.05);
}

.chart-container svg {
    width: 100%;
    height: auto;
}

.axis-line {
    stroke: var(--border-color);
    stroke-width: 2;
}

.grid-line {
    stroke: var(--border-color);
    stroke-width: 1;
    stroke-dasharray: 2, 2;
}

.axis-label {
    fill: var(--text-color-secondary);
    font-size: 12px;
    text-anchor: middle;
}

.axis-label.y-label {
    text-anchor: end;
}

.data-line {
    stroke: var(--secondary-color);
    stroke-width: 2;
}

.data-dot {
    fill: var(--secondary-color);
    stroke: var(--background-color);
    stroke-width: 2;
}

/* Sperrt die Interaktion auf der Jahres-Bilanz Seite */
.yearly-summary-locked {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none; /* For Safari */
    -moz-user-select: none;    /* For Firefox */
    -ms-user-select: none;     /* For IE/Edge */
}