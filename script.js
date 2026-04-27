const card = document.querySelector('.card');
let isDragging = false;
let offsetX, offsetY;

// Коли ми натискаємо на картку
card.onmousedown = function(e) {
    isDragging = true;
    // Рахуємо відступ курсора від краю картки
    offsetX = e.clientX - card.getBoundingClientRect().left;
    offsetY = e.clientY - card.getBoundingClientRect().top;
    card.style.cursor = 'grabbing';
};

// Коли ми рухаємо мишкою
document.onmousemove = function(e) {
    if (!isDragging) return;
    
    // Встановлюємо нові координати (прибираємо центрування CSS)
    card.style.position = 'absolute';
    card.style.margin = '0';
    card.style.left = (e.clientX - offsetX) + 'px';
    card.style.top = (e.clientY - offsetY) + 'px';
};

// Коли ми відпускаємо мишку
document.onmouseup = function() {
    isDragging = false;
    card.style.cursor = 'grab';
};