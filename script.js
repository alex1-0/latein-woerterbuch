// Elemente
const searchInput = document.getElementById('search');
const vocabularyList = document.getElementById('vocabularyList');
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

let vocabulary = [];

// Dark Mode
const isDarkMode = localStorage.getItem('darkMode') === 'true';
document.body.classList.toggle('dark-mode', isDarkMode);
toggleDarkModeButton.textContent = isDarkMode ? '🌞' : '🌙';

toggleDarkModeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    toggleDarkModeButton.textContent = isDark ? '🌞' : '🌙';
    localStorage.setItem('darkMode', isDark);
});

// Vokabeln laden
function loadVocabulary() {
    // Vokabeln aus der vocabulary.js-Datei verwenden
    vocabulary = window.vocabulary || [];
    renderVocabulary(vocabulary);
}

// Suche in Echtzeit
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = vocabulary.filter(word => 
        word.latin.toLowerCase().includes(query) || 
        word.stem.toLowerCase().includes(query) || 
        word.translation.toLowerCase().includes(query)
    );
    renderVocabulary(filtered);
});

// Vokabeln anzeigen
function renderVocabulary(filteredVocabulary = vocabulary) {
    vocabularyList.innerHTML = '';
    filteredVocabulary.forEach((word) => {
        const item = document.createElement('div');
        item.className = 'vocabulary-item';
        item.innerHTML = `
            <span>${word.latin} - ${word.stem} - ${word.translation}</span>
            <div class="actions">
                <button class="edit" onclick="editWord('${word.id}')">Bearbeiten</button>
                <button onclick="deleteWord('${word.id}')">Löschen</button>
            </div>
        `;
        vocabularyList.appendChild(item);
    });
}

// Vokabel bearbeiten
function editWord(id) {
    const word = vocabulary.find((w) => w.id === id);
    const newLatin = prompt('Neues lateinisches Wort:', word.latin);
    const newStem = prompt('Neue Stammformen:', word.stem);
    const newTranslation = prompt('Neue Übersetzung:', word.translation);
    if (newLatin && newStem && newTranslation) {
        word.latin = newLatin;
        word.stem = newStem;
        word.translation = newTranslation;
        renderVocabulary(vocabulary);
    }
}

// Vokabel löschen
function deleteWord(id) {
    vocabulary = vocabulary.filter((word) => word.id !== id);
    renderVocabulary(vocabulary);
}

// Initialisierung
loadVocabulary();
