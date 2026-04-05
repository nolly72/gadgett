// 1. ДАННЫЕ ИИ-АССИСТЕНТА (10 ответов на ключевые вопросы)
const aiDatabase = [
    { q: "Как быстро я получу расчет?", a: "Экспресс-оценка занимает 15 минут. Финальный оффер — после осмотра в тот же день." },
    { q: "Вы выкупаете доли?", a: "Да, мы работаем с долями, комнатами и сложными объектами с обременениями." },
    { q: "Где ваш офис в Сити?", a: "Башня Федерация, 74 этаж. Мы работаем ежедневно с 09:00 до 21:00." },
    { q: "Какой дисконт при выкупе?", a: "Мы предлагаем до 95% от рыночной стоимости. Минимум бюрократии — максимум выгоды." },
    { q: "Вы гасите долги по ЖКХ?", a: "Да, мы полностью закрываем долги по коммунальным платежам и налогам при сделке." },
    { q: "Нужны ли оригиналы документов?", a: "Для первичного анализа достаточно фото или электронных копий выписок." },
    { q: "Как происходит оплата?", a: "Через безопасный аккредитив или банковскую ячейку. Вы получаете деньги сразу." },
    { q: "Вы выкупаете коммерцию?", a: "Да, NOLLY Agency активно инвестирует в офисные и торговые площади." },
    { q: "Это безопасно?", a: "Все сделки сопровождаются нашими юристами и заверяются нотариально." },
    { q: "Как записаться на встречу?", a: "Нажмите на кнопку 'Начать оценку' или позвоните по номеру в разделе контактов." }
];

// 2. ЛОГИКА ИИ-АССИСТЕНТА
const aiTrigger = document.getElementById('ai-open-btn');
const aiPanel = document.getElementById('ai-panel');
const aiClose = document.getElementById('ai-close-btn');
const aiOptions = document.getElementById('ai-options');
const aiFlow = document.getElementById('ai-chat-flow');

// Открытие/Закрытие
aiTrigger.onclick = () => aiPanel.style.display = aiPanel.style.display === 'flex' ? 'none' : 'flex';
aiClose.onclick = () => aiPanel.style.display = 'none';

// Генерация вопросов
aiDatabase.forEach(item => {
    const btn = document.createElement('button');
    btn.innerText = item.q;
    btn.onclick = () => {
        const answer = document.createElement('div');
        answer.className = 'ans';
        answer.innerHTML = `<span style="display:block;font-size:9px;opacity:0.5;margin-bottom:5px;">Ответ NOLLY AI:</span>${item.a}`;
        aiFlow.appendChild(answer);
        aiFlow.scrollTop = aiFlow.scrollHeight;
    };
    aiOptions.appendChild(btn);
});

// 3. ИНТЕРАКТИВНЫЙ КВИЗ
const quizCards = document.querySelectorAll('.quiz-card');
const quizFeedback = document.getElementById('quiz-feedback');

quizCards.forEach(card => {
    card.onclick = () => {
        quizCards.forEach(c => c.style.borderColor = 'rgba(255,255,255,0.08)');
        card.style.borderColor = '#c5a059';
        quizFeedback.innerHTML = `<div style="padding:20px;background:rgba(197,160,89,0.1);border-radius:4px;margin-top:20px;color:#c5a059;font-weight:700;font-size:12px;text-transform:uppercase;">Сектор "${card.querySelector('h4').innerText}" выбран. Наш аналитик свяжется с вами в течение 5 минут.</div>`;
    };
});

// 4. ДИНАМИЧЕСКОЕ СВЕЧЕНИЕ КУРСОРA (только для ПК)
const glow = document.getElementById('cursor-glow');
if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    });
}

// 5. АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.step-card, .quiz-card, .ph-main').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});
