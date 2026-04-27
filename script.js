// 1. Словник перекладів
const translations = {
    ua: {
        title: "Вітаю! Сайт працює",
        description: "Домен pmg.pp.ua успішно підключено.",
        status: "Це мій перший крок у веб-розробці."
    },
    en: {
        title: "Welcome! Site is live",
        description: "Domain pmg.pp.ua connected successfully.",
        status: "This is my first step in web development."
    },
    it: {
        title: "Benvenuti! Il sito è attivo",
        description: "Dominio pmg.pp.ua collegato con successo.",
        status: "Questo è il mio primo passo nello sviluppo web."
    }
};

// 2. Функція перекладу (зробимо її глобальною)
window.changeLanguage = function(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
};

// 3. Код для перетягування картки
const card = document.querySelector('.card');
let isDragging = false;
let offsetX, offsetY;

card.onmousedown = function(e) {
    // Не починати перетягування, якщо ми клікнули по кнопці
    if (e.target.tagName === 'BUTTON') return;

    isDragging = true;
    offsetX = e.clientX - card.getBoundingClientRect().left;
    offsetY = e.clientY - card.getBoundingClientRect().top;
    card.style.cursor = 'grabbing';
};

document.onmousemove = function(e) {
    if (!isDragging) return;
    card.style.position = 'absolute';
    card.style.margin = '0';
    card.style.left = (e.clientX - offsetX) + 'px';
    card.style.top = (e.clientY - offsetY) + 'px';
};

document.onmouseup = function() {
    isDragging = false;
    card.style.cursor = 'grab';
};