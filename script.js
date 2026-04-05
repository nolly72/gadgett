// 1. ДАННЫЕ ИИ-АССИСТЕНТА (10 Вопросов и Ответов)
const aiData = [
    { q: "Как быстро я получу деньги?", a: "Мы выходим на сделку за 24 часа. Выплата наличными или переводом в день регистрации." },
    { q: "Вы покупаете квартиры с долгами?", a: "Да, выкупаем объекты с долгами ЖКХ, ипотекой, арестами и долями." },
    { q: "Где находится ваш офис?", a: "Наш офис: Москва-Сити, Башня Федерация, 74 этаж. Ждем вас на чашку кофе." },
    { q: "Какой % от стоимости вы платите?", a: "Мы предлагаем до 95% от честной рыночной цены после экспресс-оценки." },
    { q: "Какие документы нужны для начала?", a: "Для первичного анализа достаточно только адреса или выписки из ЕГРН." },
    { q: "Вы работаете с коммерческой недвижимостью?", a: "Да, NOLLY Agency выкупает офисы, торговые площади и склады." },
    { q: "Есть ли скрытые комиссии?", a: "Никаких комиссий. Мы прямой покупатель, все расходы на юристов берем на себя." },
    { q: "Как проходит осмотр?", a: "Наш эксперт приедет в течение 2-3 часов. Осмотр занимает не более 20 минут." },
    { q: "Работаете ли вы с загородными домами?", a: "Да, выкупаем коттеджи и земельные активы в радиусе 100 км от МКАД." },
    { q: "Как оставить заявку?", a: "Просто выберите тип объекта в Квизе на сайте или позвоните нам напрямую." }
];

// 2. ЛОГИКА ИИ-АССИСТЕНТА
const aiToggle = document.getElementById('ai-toggle');
const aiWindow = document.getElementById('ai-window');
const aiClose = document.getElementById('ai-close');
const aiMessages = document.getElementById('ai-messages');
const aiQuestionsBox = document.getElementById('ai-questions-box');

// Открыть/закрыть окно
aiToggle.addEventListener('click', () => {
    aiWindow.style.display = aiWindow.style.display === 'flex' ? 'none' : 'flex';
});
aiClose.addEventListener('click', () => { aiWindow.style.display = 'none'; });

// Генерация вопросов в чате
aiData.forEach(item => {
    const btn = document.createElement('button');
    btn.innerText = item.q;
    btn.onclick = () => {
        const msg = document.createElement('div');
        msg.className = 'ai-user-msg';
        msg.innerHTML = `<p style="color: #666; font-size: 10px; margin-bottom: 5px;">Ответ системы:</p>${item.a}`;
        aiMessages.appendChild(msg);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    };
    aiQuestionsBox.appendChild(btn);
});

// 3. ЛОГИКА КВИЗА (ИНТЕРАКТИВНЫЙ ОПРОС)
const quizOpts = document.querySelectorAll('.quiz-opt');
const quizResult = document.getElementById('quiz-result');

quizOpts.forEach(opt => {
    opt.addEventListener('click', () => {
        quizOpts.forEach(o => o.style.borderColor = '#333');
        opt.style.borderColor = '#c5a059';
        quizResult.innerHTML = `<p style="color: #c5a059; margin-top: 20px; font-weight: 700;">Анализ сектора "${opt.innerText}" запущен. Специалист свяжется с вами через 15 минут.</p>`;
    });
});

// 4. ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.step-item, .feature-card, .philosophy-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// 5. ДВИЖЕНИЕ СВЕЧЕНИЯ ЗА МЫШКОЙ
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
});
