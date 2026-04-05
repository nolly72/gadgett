// 1. ИНТЕРАКТИВНОЕ СВЕЧЕНИЕ (ГЛОУ)
const glow = document.getElementById('cursor-glow');

// Функция отслеживания мыши
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 1024 && glow) {
        requestAnimationFrame(() => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }
});

// 2. АККОРДЕОН (Раскрытие 10 шагов процесса)
document.querySelectorAll('.step-card').forEach(card => {
    card.addEventListener('click', () => {
        // Закрыть другие, если нужно (раскомментируй код ниже)
        /*
        document.querySelectorAll('.step-card').forEach(c => {
            if (c !== card) c.classList.remove('active');
        });
        */
        card.classList.toggle('active');
    });
});

// 3. БАЗА ЗНАНИЙ ИИ (10 ответов)
const aiAnswers = [
    { q: "Как быстро я получу расчет?", a: "Экспресс-анализ занимает 15 минут. Официальный оффер в день обращения." },
    { q: "Вы выкупаете доли?", a: "Да, мы работаем с долями, комнатами и объектами под арестом/ипотекой." },
    { q: "Где ваш офис в Сити?", a: "Башня Федерация, 74 этаж. Мы открыты ежедневно с 09:00 до 21:00." },
    { q: "Какой дисконт при выкупе?", a: "Мы предлагаем до 95% от рыночной стоимости после оценки эксперта." },
    { q: "Вы гасите долги по ЖКХ?", a: "Безусловно. Мы полностью закрываем все задолженности и обременения." },
    { q: "Нужны ли оригиналы документов?", a: "Для первичного анализа достаточно фото документов или выписки из ЕГРН." },
    { q: "Как происходит оплата?", a: "Через безопасный банковский аккредитив или ячейку. Деньги у вас сразу." },
    { q: "Вы выкупаете коммерцию?", a: "Да, NOLLY Agency активно выкупает офисы, склады и стрит-ритейл." },
    { q: "Это безопасно?", a: "Все сделки нотариальные. Юридическое сопровождение NOLLY гарантирует чистоту." },
    { q: "Как оставить заявку?", a: "Нажмите 'Начать оценку' вверху страницы или позвоните нам напрямую." }
];

// 4. ЛОГИКА ИИ-ВИДЖЕТА
const aiBtn = document.getElementById('ai-open');
const aiWin = document.getElementById('ai-window');
const aiClose = document.getElementById('ai-close');
const aiOptions = document.getElementById('ai-options');
const aiScroll = document.getElementById('ai-scroll');

if (aiBtn && aiWin) {
    // Открыть/Закрыть
    aiBtn.onclick = (e) => {
        e.stopPropagation();
        aiWin.style.display = aiWin.style.display === 'flex' ? 'none' : 'flex';
    };

    aiClose.onclick = () => {
        aiWin.style.display = 'none';
    };

    // Генерация кнопок вопросов
    aiAnswers.forEach(item => {
        const b = document.createElement('button');
        b.innerText = item.q;
        b.onclick = (e) => {
            e.stopPropagation();
            const a = document.createElement('div');
            a.style.cssText = "font-size:12px; color:#c5a059; background:#1a1a1a; padding:15px; border-radius:12px; margin-top:10px; border-left:2px solid #c5a059; margin-bottom:10px; animation: fadeIn 0.3s ease;";
            a.innerHTML = `<span style="font-size:9px; opacity:0.5; display:block; margin-bottom:5px;">Ответ ассистента:</span>${item.a}`;
            aiScroll.appendChild(a);
            aiScroll.scrollTop = aiScroll.scrollHeight;
        };
        aiOptions.appendChild(b);
    });
}

// 5. ИНТЕРАКТИВНЫЙ КВИЗ
const quizCards = document.querySelectorAll('.quiz-card');
const quizRes = document.getElementById('quiz-result');

quizCards.forEach(c => {
    c.onclick = () => {
        quizCards.forEach(card => card.style.borderColor = 'rgba(255,255,255,0.08)');
        c.style.borderColor = '#c5a059';
        if (quizRes) {
            quizRes.innerHTML = `<div style="margin-top:25px; padding:20px; background:rgba(197,160,89,0.1); border-radius:15px; color:#c5a059; font-weight:800; font-size:12px; text-align:center; text-transform:uppercase;">Сектор выбран. Наш аналитик свяжется с вами через 5 минут.</div>`;
        }
    };
});

// Закрытие ИИ по клику вне окна
document.addEventListener('click', (e) => {
    if (aiWin && aiWin.style.display === 'flex' && !aiWin.contains(e.target) && e.target !== aiBtn) {
        aiWin.style.display = 'none';
    }
});
