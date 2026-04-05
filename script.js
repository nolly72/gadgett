// 1. Интерактивное свечение (Glow Effect)
const glow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Плавно перемещаем центр свечения под курсор
    // Используем requestAnimationFrame для идеальной плавности
    requestAnimationFrame(() => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
});

// 2. 3D Параллакс для заголовка (эффект наклона)
const hero = document.getElementById('hero-section');
const title = document.querySelector('.hero-content');

hero.addEventListener('mousemove', (e) => {
    // Вычисляем положение мыши относительно центра экрана
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Применяем вращение к контенту
    title.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Сброс наклона, когда мышь уходит с главного экрана
hero.addEventListener('mouseleave', () => {
    title.style.transition = 'all 0.5s ease';
    title.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

hero.addEventListener('mouseenter', () => {
    title.style.transition = 'none';
});

// 3. Плавное появление карточек при скролле (Reveal on Scroll)
const observerOptions = {
    threshold: 0.15 // Элемент появится, когда будет виден на 15%
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Если карточка появилась, больше её не скрываем
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Инициализируем карточки для наблюдения
document.querySelectorAll('.feature-card').forEach((card, index) => {
    // Добавляем небольшую задержку для каждой следующей карточки
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});
