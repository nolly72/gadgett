// 1. Умное слежение фона за курсором (Glow Effect)
const glow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Используем requestAnimationFrame для производительности
    requestAnimationFrame(() => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
});

// 2. Интерактивные кнопки (Эффект притяжения)
const buttons = document.querySelectorAll('.cta-button, .secondary-btn');

buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});

// 3. Плавное появление блоков при скролле (Scroll Reveal)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target); // Анимация только один раз
        }
    });
}, observerOptions);

// Применяем наблюдатель к карточкам и заголовкам
document.querySelectorAll('.feature-card, .hero-content, .section-label').forEach(el => {
    el.classList.add('reveal-init'); // Начальное состояние
    revealObserver.observe(el);
});

// 4. Логика для кнопок (имитация работы)
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Система оценки объекта запущена. Пожалуйста, ожидайте звонка специалиста NOLLY Agency.');
});
