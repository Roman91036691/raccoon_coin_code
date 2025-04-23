let score = parseInt(localStorage.getItem('score')) || 0; // Завантажуємо score з локального зберігання або встановлюємо 0
let clickPower = parseInt(localStorage.getItem('cP')) || 1; // Завантажуємо clickPower з локального зберігання або встановлюємо 1

// Оновлюємо відображення score при завантаженні сторінки
document.querySelector('.score').textContent = score;

function onClick() {
    score += clickPower; // Додаємо 1 до змінної score
    document.querySelector('.score').textContent = score; // Оновлюємо текст елемента з класом score
    localStorage.setItem('score', score); // Зберігаємо нове значення score у локальному зберіганні
    return score; // Повертаємо нове значення score
}

// Додаємо обробник події для елемента з класом moneta
document.querySelector('.moneta').addEventListener('click', onClick);

// Функція для оновлення clickPower
function updateClickPower() {
    localStorage.setItem('cP', clickPower); // Зберігаємо нове значення clickPower у локальному зберіганні
    document.querySelector('.clickPower').textContent = `СИЛА КЛІКУ: ${clickPower}`; // Оновлюємо текст елемента з класом clickPower
}

