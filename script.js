// Elemente
const dictionarySection = document.getElementById('dictionarySection');
const querySection = document.getElementById('querySection');
const toggleDictionaryButton = document.getElementById('toggleDictionary');
const toggleQueryButton = document.getElementById('toggleQuery');
const latinWordInput = document.getElementById('latinWord');
const stemFormsInput = document.getElementById('stemForms');
const translationsInput = document.getElementById('translations');
const saveWordButton = document.getElementById('saveWord');
const searchInput = document.getElementById('search');
const vocabularyList = document.getElementById('vocabularyList');
const queryLatinWordInput = document.getElementById('queryLatinWord');
const queryStemFormsInput = document.getElementById('queryStemForms');
const queryTranslationsInput = document.getElementById('queryTranslations');
const checkAnswerButton = document.getElementById('checkAnswer');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

let vocabulary = [];
let currentWord = null;
let correctAnswers = 0;
let wrongAnswers = 0;

// Dark Mode
const isDarkMode = localStorage.getItem('darkMode') === 'true';
document.body.classList.toggle('dark-mode', isDarkMode);
toggleDarkModeButton.textContent = isDarkMode ? '🌞' : '🌙';

toggleDarkModeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    toggleDarkModeButton.textContent = isDark ? '🌞' : '🌙';
    localStorage.setItem('darkMode', isDark);
});

// Navigation
toggleDictionaryButton.addEventListener('click', () => {
    dictionarySection.classList.remove('hidden');
    querySection.classList.add('hidden');
    toggleQueryButton.style.order = '1';
    toggleDictionaryButton.style.order = '0';
});

toggleQueryButton.addEventListener('click', () => {
    if (vocabulary.length === 0) {
        alert('Bitte füge zuerst Vokabeln im Wörterbuch hinzu.');
        return;
    }
    dictionarySection.classList.add('hidden');
    querySection.classList.remove('hidden');
    toggleQueryButton.style.order = '0';
    toggleDictionaryButton.style.order = '1';
    generateQuery();
});

// Enter-Navigation
latinWordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') stemFormsInput.focus();
});

stemFormsInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') translationsInput.focus();
});

translationsInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        saveWord();
        latinWordInput.focus();
    }
});

queryStemFormsInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') queryTranslationsInput.focus();
});

queryTranslationsInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (resultDiv.textContent === '') {
            checkAnswer();
        } else {
            generateQuery();
            queryStemFormsInput.focus();
        }
    }
});

// Suche
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = vocabulary.filter(word => 
        word.latin.toLowerCase().includes(query) || 
        word.stem.toLowerCase().includes(query) || 
        word.translation.toLowerCase().includes(query)
    );
    renderVocabulary(filtered);
});

// Vokabeln laden
function loadVocabulary() {
    // Vokabeln aus der vocabulary.js-Datei verwenden
    vocabulary = window.vocabulary || [];
    renderVocabulary(vocabulary);
}

// Vokabel speichern
function saveWord() {
    const latin = latinWordInput.value.trim();
    const stem = stemFormsInput.value.trim();
    const translation = translationsInput.value.trim();
    if (latin && stem && translation) {
        const newWord = {
            id: vocabulary.length + 1, // Einfache ID-Generierung
            latin,
            stem,
            translation
        };
        vocabulary.push(newWord);
        latinWordInput.value = '';
        stemFormsInput.value = '';
        translationsInput.value = '';
        renderVocabulary(vocabulary);
    }
}

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
    latinWordInput.value = word.latin;
    stemFormsInput.value = word.stem;
    translationsInput.value = word.translation;
    deleteWord(id);
}

// Vokabel löschen
function deleteWord(id) {
    vocabulary = vocabulary.filter((word) => word.id !== id);
    renderVocabulary(vocabulary);
}

// Abfrage generieren
function generateQuery() {
    currentWord = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    queryLatinWordInput.value = currentWord.latin;
    queryStemFormsInput.value = '';
    queryTranslationsInput.value = '';
    resultDiv.textContent = '';
}

// Antwort überprüfen
function checkAnswer() {
    const stem = queryStemFormsInput.value.trim();
    const translation = queryTranslationsInput.value.trim();
    if (currentWord && currentWord.stem === stem && currentWord.translation === translation) {
        resultDiv.textContent = 'Richtig!';
        resultDiv.style.color = 'green';
        correctAnswers++;
    } else {
        resultDiv.textContent = 'Falsch!';
        resultDiv.style.color = 'red';
        wrongAnswers++;
    }
    updateScore();
}

// Score aktualisieren
function updateScore() {
    scoreDiv.textContent = `Richtig: ${correctAnswers} | Falsch: ${wrongAnswers}`;
}

// Event-Listener
saveWordButton.addEventListener('click', saveWord);
checkAnswerButton.addEventListener('click', checkAnswer);

// Initialisierung
loadVocabulary();
