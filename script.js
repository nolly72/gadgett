// 1. БАЗА ЗНАНИЙ ИИ (10 ответов)
const aiAnswers = [
    { q: "Как быстро я получу расчет?", a: "Экспресс-оценка занимает 15 минут. Финальный оффер — в день обращения." },
    { q: "Вы выкупаете доли?", a: "Да, мы работаем с долями, комнатами и сложными объектами с обременениями." },
    { q: "Где ваш офис в Сити?", a: "Башня Федерация, 74 этаж. Работаем ежедневно с 09:00 до 21:00." },
    { q: "Какой дисконт при выкупе?", a: "Мы предлагаем до 95% от рыночной стоимости. Всё честно и прозрачно." },
    { q: "Вы гасите долги по ЖКХ?", a: "Да, мы полностью закрываем все задолженности и обременения при сделке." },
    { q: "Нужны ли оригиналы документов?", a: "Для оценки достаточно фото или электронных копий выписок из ЕГРН." },
    { q: "Как происходит оплата?", a: "Через безопасный аккредитив или банковскую ячейку. Деньги сразу." },
    { q: "Вы выкупаете коммерцию?", a: "Да, NOLLY Agency выкупает офисные, торговые и складские площади." },
    { q: "Это безопасно?", a: "Все сделки сопровождаются нашими юристами и заверяются нотариально." },
    { q: "Как записаться на встречу?", a: "Нажмите 'Начать оценку' или позвоните нам по номеру в контактах." }
];

// 2. ЛОГИКА ИИ-ВИДЖЕТА
const aiBtn = document.getElementById('ai-open');
const aiWin = document.getElementById('ai-window');
const aiClose = document.getElementById('ai-close');
const aiOptions = document.getElementById('ai-options');
const aiScroll = document.getElementById('ai-scroll');

// Открытие / Закрытие
aiBtn.onclick = () => aiWin.style.display = aiWin.style.display === 'flex' ? 'none' : 'flex';
aiClose.onclick = () => aiWin.style.display = 'none';

// Генерация кнопок с вопросами
aiAnswers.forEach(item => {
    const b = document.createElement('button');
    b.innerText = item.q;
    b.onclick = () => {
        const a = document.createElement('div');
        a.style.cssText = "font-size:12px; color:#c5a059; background:#1a1a1a; padding:15px; border-radius:12px; margin-top:10px; border-left:2px solid #c5a059;";
        a.innerHTML = `<span style="font-size:9px; opacity:0.5; display:block; margin-bottom:5px;">Ответ ассистента:</span>${item.a}`;
        aiScroll.appendChild(a);
        aiScroll.scrollTop = aiScroll.scrollHeight;
    };
    aiOptions.appendChild(b);
});

// 3. ИНТЕРАКТИВНЫЙ КВИЗ
const cards = document.querySelectorAll('.quiz-card');
const res = document.getElementById('quiz-result');

cards.forEach(c => {
    c.onclick = () => {
        cards.forEach(card => card.style.borderColor = 'rgba(255,255,255,0.08)');
        c.style.borderColor = '#c5a059';
        res.innerHTML = `<div style="margin-top:25px; padding:20px; background:rgba(197,160,89,0.1); border-radius:15px; color:#c5a059; font-weight:800; font-size:12px; text-align:center; text-transform:uppercase;">Сектор "${c.querySelector('h4').innerText}" выбран. Аналитик свяжется с вами через 5 минут.</div>`;
    };
});

// 4. ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.step-card, .quiz-card, .philosophy-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.2, 1)';
    observer.observe(el);
});

// 5. СВЕЧЕНИЕ ЗА КУРСОРОМ
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
});
