import { useState } from "react";

const films = [
  {
    id: 1,
    emoji: "😤",
    problem: "«Не хочу! Надоело!»",
    title: "В стране невыученных уроков",
    duration: "3 мин",
    videoUrl: "https://yandex.ru/video/preview/3196128270546991426",
    questions: [
      "Почему Витя не хотел учиться?",
      "Что случилось из‑за его незнания?",
      "Что изменилось в конце?",
    ],
    color: "from-orange-400 to-red-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    id: 2,
    emoji: "😏",
    problem: "«И так сойдёт!»",
    title: "Вовка в Тридевятом царстве",
    duration: "3 мин",
    videoUrl: "https://yandex.ru/video/preview/11496731049295764739",
    questions: [
      "Что Вовка хотел получить без труда?",
      "Почему у Вовки ничего не получалось?",
      "Что помогло ему в итоге?",
    ],
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    id: 3,
    emoji: "😰",
    problem: "«Боюсь ошибки»",
    title: "История с единицей",
    duration: "2 мин",
    videoUrl: "https://yandex.ru/video/preview/9872089415251568780",
    questions: [
      "Почему единица стала преследовать героя?",
      "Что помогло избавиться от страха?",
      "Как избавиться от страха ошибки?",
    ],
    color: "from-blue-400 to-indigo-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
];

const strategies = [
  {
    num: "01",
    title: "Сместить фокус с оценки на процесс",
    bad: "«Какую оценку получил?»",
    good: "«Какое открытие ты сегодня сделал?» / «Что было самым интересным?»",
    icon: "🎯",
  },
  {
    num: "02",
    title: "Дать право на ошибку",
    bad: "«Опять ошиблась!»",
    good: "«Ошибка — это опыт. Давай разберёмся, почему так получилось»",
    icon: "💪",
  },
  {
    num: "03",
    title: "Предоставить выбор",
    bad: "«Садись за уроки!»",
    good: "«Что сделаем первым — русский или математику?»",
    icon: "🔀",
  },
  {
    num: "04",
    title: "Оставить время для игры",
    bad: "Кружки сразу после школы",
    good: "После школы обязательно 1,5–2 часа свободной игры без кружков и заданий",
    icon: "🎮",
  },
  {
    num: "05",
    title: "Не сравнивать с другими",
    bad: "«А Петя уже читает»",
    good: "«У тебя сегодня получилось лучше, чем вчера»",
    icon: "⭐",
  },
];

const playlist = [
  { title: "Зелёная пилюля", duration: "10 мин", emoji: "💊", videoUrl: "https://yandex.ru/video/preview/14581553249314319943" },
  { title: "В стране невыученных уроков", duration: "20 мин", emoji: "📚", videoUrl: "https://yandex.ru/video/preview/3196128270546991426" },
  { title: "Вовка в Тридевятом царстве", duration: "15 мин", emoji: "👑", videoUrl: "https://yandex.ru/video/preview/11496731049295764739" },
  { title: "История с единицей", duration: "9 мин", emoji: "✏️", videoUrl: "https://yandex.ru/video/preview/9872089415251568780" },
  { title: "Баранкин, будь человеком!", duration: "21 мин", emoji: "🐦", videoUrl: "https://yandex.ru/video/preview/8536890593982645653" },
];



const quizQuestions = [
  {
    question: "Как ребёнок реагирует на слово «школа» по утрам?",
    answers: [
      { text: "Встаёт без проблем, в целом спокойно", score: 0 },
      { text: "Иногда ворчит, но идёт", score: 1 },
      { text: "Часто жалуется на живот/голову, ищет повод остаться дома", score: 2 },
      { text: "Устраивает истерики, категорически отказывается", score: 3 },
    ],
  },
  {
    question: "Как ребёнок относится к домашним заданиям?",
    answers: [
      { text: "Садится сам или с небольшим напоминанием", score: 0 },
      { text: "Нужно несколько раз напомнить, но делает", score: 1 },
      { text: "Каждый раз конфликт, плачет или тянет до ночи", score: 2 },
      { text: "Отказывается, задания остаются невыполненными", score: 3 },
    ],
  },
  {
    question: "Рассказывает ли ребёнок о том, что было в школе?",
    answers: [
      { text: "Да, охотно делится, что понравилось", score: 0 },
      { text: "Иногда, если спросить прямой вопрос", score: 1 },
      { text: "Редко, чаще отмахивается «всё нормально»", score: 2 },
      { text: "Никогда, закрывается или говорит только плохое", score: 3 },
    ],
  },
  {
    question: "Есть ли у ребёнка друзья в классе или интерес к одноклассникам?",
    answers: [
      { text: "Да, есть приятели, говорит о них", score: 0 },
      { text: "Есть один-два человека, общается немного", score: 1 },
      { text: "Почти не общается, предпочитает быть один", score: 2 },
      { text: "Говорит, что его не любят / обижают", score: 3 },
    ],
  },
  {
    question: "Как ребёнок воспринимает ошибки в учёбе?",
    answers: [
      { text: "Спокойно, пробует исправить", score: 0 },
      { text: "Расстраивается, но быстро успокаивается", score: 1 },
      { text: "Долго переживает, боится снова ошибиться", score: 2 },
      { text: "Отказывается пробовать, чтобы не ошибиться", score: 3 },
    ],
  },
  {
    question: "Замечаете ли вы у ребёнка интерес к чему-то, связанному с познанием?",
    answers: [
      { text: "Да, задаёт много вопросов «почему» и «как»", score: 0 },
      { text: "Иногда интересуется, если тема нравится", score: 1 },
      { text: "Редко, в основном только игры / мультики", score: 2 },
      { text: "Не проявляет интереса ни к чему познавательному", score: 3 },
    ],
  },
];

const quizZones = [
  {
    min: 0,
    max: 5,
    zone: "🟢 Зелёная зона",
    title: "Мотивация в порядке",
    description: "Ребёнок в целом позитивно воспринимает учёбу. Небольшие капризы — норма адаптации первоклассника. Главное — поддерживать атмосферу безопасности и интереса.",
    advice: ["Продолжайте задавать вопросы о школе с интересом, а не с тревогой", "Отмечайте успехи, даже маленькие", "Читайте вместе и играйте в познавательные игры"],
    bg: "from-green-400 to-teal-500",
    light: "bg-green-50 border-green-200 text-green-800",
  },
  {
    min: 6,
    max: 11,
    zone: "🟡 Жёлтая зона",
    title: "Есть признаки снижения мотивации",
    description: "Ребёнок ещё справляется, но уже чувствует напряжение. Самое время скорректировать подход — пока ситуация не стала критической.",
    advice: ["Смените фокус с оценок на сам процесс познания", "Дайте больше свободного времени — минимум 1,5 часа игры после школы", "Используйте стратегии из раздела 4 этой страницы"],
    bg: "from-yellow-400 to-orange-400",
    light: "bg-yellow-50 border-yellow-200 text-yellow-800",
  },
  {
    min: 12,
    max: 18,
    zone: "🔴 Красная зона",
    title: "Мотивация значительно снижена",
    description: "Ребёнок переживает серьёзные трудности с учёбой или общением. Ситуация требует внимания — чем раньше, тем лучше.",
    advice: ["Обратитесь к школьному психологу для очной консультации", "Снизьте нагрузку: временно откажитесь от дополнительных кружков", "Не давите на оценки — восстановите доверие и безопасность дома"],
    bg: "from-red-400 to-rose-500",
    light: "bg-red-50 border-red-200 text-red-800",
  },
];

export default function Index() {
  const [openStrategy, setOpenStrategy] = useState<number | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizScore = Object.values(quizAnswers).reduce((a, b) => a + b, 0);
  const quizAnsweredCount = Object.keys(quizAnswers).length;
  const quizResult = quizZones.find((z) => quizScore >= z.min && quizScore <= z.max);

  const handleQuizSelect = (qIdx: number, score: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: score }));
  };

  const handleQuizReset = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const toggleCheck = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen font-golos bg-white">

      {/* НАВИГАЦИЯ */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
          <div className="flex items-center gap-1 py-3 min-w-max">
            {[
              { label: "Почему не хочет", href: "#section1" },
              { label: "3 признака", href: "#section2" },
              { label: "Диагностика", href: "#section3" },
              { label: "Стратегии", href: "#section4" },
              { label: "Чек-лист", href: "#section5" },
              { label: "Мультфильмы", href: "#section6" },
              { label: "Баранкин", href: "#section7" },
              { label: "Красные флаги", href: "#section8" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-500 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#F7931E] to-[#FFD23F]" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF3CAC 0%, transparent 40%)`
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white font-semibold text-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            🎓 Для родителей первоклассников
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            Не будь воробьём!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            Помощь родителям первоклассников:<br />
            <span className="text-white font-bold">как вернуть желание учиться</span>
          </p>

          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-6 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg leading-relaxed">
              Если ваш ребёнок говорит «не хочу в школу» — вы не одни. Давайте разберёмся, что происходит и что делать. Всё, что нужно, собрано на этой странице.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
          clipPath: "ellipse(55% 100% at 50% 100%)"
        }} />
      </header>

      {/* SECTION 1 — Почему */}
      <section id="section1" className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-oswald font-bold">1</div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
            Почему ребёнок говорит «не хочу»?
          </h2>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100 rounded-2xl p-6 md:p-8 mb-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            <strong>Первоклассник переживает кризис 7 лет.</strong> Это не лень, а перестройка всего организма и психики. Учёба сменяет игру, но ребёнок к этому не всегда готов.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-orange-100 mb-6">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 px-6 py-4">
            <p className="text-white font-semibold">🎬 Мультфильм «Зелёная пилюля» — фрагмент 2 минуты</p>
          </div>
          <a
            href="https://yandex.ru/video/preview/14581553249314319943"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                <span className="text-white text-4xl ml-1">▶</span>
              </div>
              <p className="text-white/80 text-sm font-medium">Смотреть на Яндекс.Видео</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </a>
        </div>

        <details className="group bg-white border-2 border-orange-200 rounded-2xl overflow-hidden">
          <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-orange-50 transition-colors list-none">
            <span>💬 Что обсудить с ребёнком после просмотра</span>
            <span className="text-orange-500 group-open:rotate-180 transition-transform text-xl">▼</span>
          </summary>
          <div className="px-6 pb-6 pt-2 space-y-3">
            {["Почему мальчик не хотел идти в школу?", "Что ему приснилось?", "Что он понял в конце?"].map((q, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-orange-400 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
          </div>
        </details>
      </section>

      {/* SECTION 2 — Три признака */}
      <section id="section2" className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-oswald font-bold">2</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
              Три признака снижения мотивации
            </h2>
          </div>
          <p className="text-gray-600 mb-10 text-lg">
            Посмотрите с ребёнком короткие фрагменты и обсудите. Каждый мультфильм показывает одну из проблем.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {films.map((film) => (
              <div key={film.id} className={`${film.bg} border-2 ${film.border} rounded-2xl overflow-hidden`}>
                <div className={`bg-gradient-to-r ${film.color} p-4 text-white`}>
                  <div className="text-3xl mb-2">{film.emoji}</div>
                  <p className="font-bold text-lg leading-tight">{film.problem}</p>
                  <p className="text-white/80 text-sm mt-1">{film.title}</p>
                </div>

                <div className="p-4">
                  <a
                    href={film.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${film.color} text-white rounded-xl py-2.5 px-4 font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                  >
                    ▶ Смотреть фрагмент ({film.duration})
                  </a>

                  <div className="mt-4">
                    <p className="font-semibold text-gray-700 text-sm mb-2">Вопросы для обсуждения:</p>
                    <ul className="space-y-1.5">
                      {film.questions.map((q, i) => (
                        <li key={i} className="text-gray-600 text-sm flex gap-2">
                          <span className="text-gray-400">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Диагностика */}
      <section id="section3" className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-oswald font-bold">3</div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
            Диагностика за 5 минут
          </h2>
        </div>

        <p className="text-gray-600 text-lg mb-8">
          Ответьте честно на 6 вопросов — и узнаете, в какой зоне сейчас ваш ребёнок.
        </p>

        {!quizSubmitted ? (
          <div className="space-y-6">
            {quizQuestions.map((q, qIdx) => (
              <div key={qIdx} className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm">
                <p className="font-semibold text-gray-800 mb-4 text-base">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-teal-500 text-white text-xs font-bold mr-2">{qIdx + 1}</span>
                  {q.question}
                </p>
                <div className="space-y-2">
                  {q.answers.map((a, aIdx) => {
                    const selected = quizAnswers[qIdx] === a.score;
                    return (
                      <button
                        key={aIdx}
                        onClick={() => handleQuizSelect(qIdx, a.score)}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                          selected
                            ? "border-teal-500 bg-teal-50 text-teal-800"
                            : "border-gray-100 bg-gray-50 text-gray-700 hover:border-teal-300 hover:bg-teal-50/50"
                        }`}
                      >
                        <span className={`inline-block w-4 h-4 rounded-full border-2 mr-3 flex-shrink-0 align-middle transition-all ${selected ? "border-teal-500 bg-teal-500" : "border-gray-300"}`} />
                        {a.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between bg-gray-50 rounded-2xl px-6 py-4">
              <p className="text-gray-500 text-sm">
                Отвечено: <span className="font-bold text-gray-800">{quizAnsweredCount}</span> из {quizQuestions.length}
              </p>
              <button
                onClick={() => setQuizSubmitted(true)}
                disabled={quizAnsweredCount < quizQuestions.length}
                className={`px-8 py-3 rounded-xl font-bold text-white transition-all ${
                  quizAnsweredCount === quizQuestions.length
                    ? "bg-gradient-to-r from-green-400 to-teal-500 hover:opacity-90 shadow-md"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Узнать результат →
              </button>
            </div>
          </div>
        ) : quizResult ? (
          <div className="space-y-6">
            <div className={`bg-gradient-to-br ${quizResult.bg} rounded-2xl p-8 text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">
                  {quizResult.zone.split(" ")[0]}
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium uppercase tracking-wide">Ваш результат — {quizScore} из 18 баллов</p>
                  <p className="font-oswald text-3xl font-bold">{quizResult.title}</p>
                </div>
              </div>
              <p className="text-white/90 text-base leading-relaxed">{quizResult.description}</p>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm">
              <p className="font-oswald text-xl font-bold text-gray-800 mb-4">Что делать прямо сейчас:</p>
              <ul className="space-y-3">
                {quizResult.advice.map((tip, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-teal-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {quizZones.map((z, i) => (
                <div key={i} className={`border-2 rounded-xl p-4 ${quizResult === z ? z.light + " border-current" : "bg-gray-50 border-gray-100"}`}>
                  <p className="font-bold text-sm mb-1">{z.zone}</p>
                  <p className="text-xs text-gray-500">{z.min}–{z.max} баллов</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleQuizReset}
                className="text-sm text-gray-400 hover:text-gray-600 underline transition-colors"
              >
                Пройти тест заново
              </button>
            </div>
          </div>
        ) : null}
      </section>

      {/* SECTION 4 — Стратегии */}
      <section id="section4" className="bg-gradient-to-br from-violet-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-oswald font-bold">4</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
              5 родительских стратегий
            </h2>
          </div>

          <div className="space-y-3">
            {strategies.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-violet-100 overflow-hidden">
                <button
                  onClick={() => setOpenStrategy(openStrategy === i ? null : i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-violet-50 transition-colors"
                >
                  <span className="font-oswald text-3xl font-bold text-violet-200">{s.num}</span>
                  <span className="text-2xl">{s.icon}</span>
                  <span className="font-semibold text-gray-800 text-lg flex-1">{s.title}</span>
                  <span className={`text-violet-500 text-xl transition-transform ${openStrategy === i ? "rotate-180" : ""}`}>▼</span>
                </button>
                {openStrategy === i && (
                  <div className="px-6 pb-6 grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-red-500 font-semibold text-sm mb-1">❌ Вместо:</p>
                      <p className="text-gray-700 italic">«{s.bad}»</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-green-600 font-semibold text-sm mb-1">✅ Скажите:</p>
                      <p className="text-gray-700">«{s.good}»</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Чек-лист */}
      <section id="section5" className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-oswald font-bold">5</div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
            Чек-лист для родителей
          </h2>
        </div>
        <p className="text-gray-600 text-lg mb-8">Отметьте, что вы уже делаете. Чем больше галочек — тем лучше почва для мотивации.</p>

        <div className="space-y-3">
          {[
            { text: "Я спрашиваю «что сегодня было интересного?» вместо «какие оценки?»", category: "Общение" },
            { text: "Я не сравниваю ребёнка с другими детьми", category: "Общение" },
            { text: "После школы у ребёнка есть 1,5–2 часа свободного времени без заданий", category: "Режим" },
            { text: "Я даю ребёнку выбор: «Что сделаем первым — русский или математику?»", category: "Автономия" },
            { text: "Когда ребёнок ошибся, я говорю «давай разберёмся» вместо «опять ошибся»", category: "Ошибки" },
            { text: "Я замечаю и называю конкретные успехи, а не только промахи", category: "Поддержка" },
            { text: "Я сам(а) рассказываю ребёнку о том, что мне интересно узнавать", category: "Пример" },
            { text: "Я стараюсь оставаться спокойным(ой) во время уроков, не кричу", category: "Атмосфера" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => toggleCheck(`p-${i}`)}
              className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all duration-150 ${
                checked[`p-${i}`]
                  ? "border-pink-400 bg-pink-50"
                  : "border-gray-100 bg-white hover:border-pink-200 hover:bg-pink-50/40"
              }`}
            >
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                checked[`p-${i}`]
                  ? "bg-gradient-to-br from-pink-400 to-rose-500 border-pink-400 text-white"
                  : "border-gray-300"
              }`}>
                {checked[`p-${i}`] && <span className="text-xs font-bold">✓</span>}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium leading-snug ${checked[`p-${i}`] ? "text-pink-800" : "text-gray-700"}`}>{item.text}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${checked[`p-${i}`] ? "bg-pink-200 text-pink-700" : "bg-gray-100 text-gray-400"}`}>{item.category}</span>
            </button>
          ))}
        </div>

        {Object.values(checked).filter(Boolean).length > 0 && (
          <div className="mt-6 bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-100 rounded-2xl px-6 py-4 flex items-center gap-4">
            <div className="text-3xl">
              {Object.keys(checked).filter(k => k.startsWith("p-") && checked[k]).length >= 6 ? "🌟" :
               Object.keys(checked).filter(k => k.startsWith("p-") && checked[k]).length >= 3 ? "💪" : "🌱"}
            </div>
            <div>
              <p className="font-bold text-pink-800">
                {Object.keys(checked).filter(k => k.startsWith("p-") && checked[k]).length} из 8 пунктов
              </p>
              <p className="text-pink-600 text-sm">
                {Object.keys(checked).filter(k => k.startsWith("p-") && checked[k]).length >= 6
                  ? "Отличная атмосфера — продолжайте в том же духе!"
                  : Object.keys(checked).filter(k => k.startsWith("p-") && checked[k]).length >= 3
                  ? "Хороший старт. Добавьте ещё пару пунктов — и будет заметный результат"
                  : "Начало положено. Попробуйте добавить по одному пункту в неделю"}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 6 — Плейлист */}
      <section id="section6" className="bg-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-oswald font-bold">6</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white">
              Все мультфильмы целиком
            </h2>
          </div>
          <p className="text-gray-400 mb-8 text-lg">Советские мультфильмы на Яндекс.Видео — смотрите целиком всей семьёй.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {playlist.map((film, i) => (
              <a
                key={i}
                href={film.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-yellow-500 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200"
              >
                <div className="text-4xl">{film.emoji}</div>
                <div className="flex-1">
                  <p className="font-semibold text-white group-hover:text-yellow-400 transition-colors leading-snug">{film.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{film.duration}</p>
                </div>
                <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
                  <span>▶</span>
                  <span>Смотреть на Яндекс.Видео</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Баранкин */}
      <section id="section7" className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-oswald font-bold">7</div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
            «Баранкин, будь человеком!»
          </h2>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-100 rounded-2xl p-6 mb-6">
          <p className="text-gray-700 text-lg mb-4">
            Это <strong>главный мультфильм про школьную мотивацию.</strong> Посмотрите его всей семьёй.
          </p>
          <a
            href="https://yandex.ru/video/preview/8536890593982645653"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-emerald-900 to-cyan-900 relative mb-6"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                <span className="text-white text-4xl ml-1">▶</span>
              </div>
              <p className="text-white/80 text-sm font-medium">Смотреть на Яндекс.Видео · 21 мин</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </a>
          <div className="bg-white border border-emerald-100 rounded-xl p-4 mb-4">
            <p className="text-emerald-600 font-semibold italic text-center text-lg">
              «Быть человеком — это трудно, но интересно»
            </p>
          </div>
          <p className="font-semibold text-gray-700 mb-3">Вопросы для обсуждения после просмотра:</p>
          <div className="space-y-2">
            {[
              "Почему Юра мечтал сбежать от школы и обязанностей?",
              "Что его заставило вернуться к людям?",
              "Что значит «быть человеком» для школьника?",
            ].map((q, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-emerald-400 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i + 1}</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Красные флаги */}
      <section id="section8" className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-oswald font-bold">8</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
              Когда обращаться к специалисту
            </h2>
          </div>

          <div className="bg-white border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-8">
            <p className="font-bold text-red-600 text-lg mb-4">🚩 Красные флаги:</p>
            <ul className="space-y-3">
              {[
                "Ребёнок плачет каждое утро перед школой более 2 месяцев",
                "Симулирует болезни (живот, голова) регулярно",
                "Появились тики, заикание, энурез",
                "Отказывается от любых разговоров о школе",
              ].map((flag, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-red-500 text-lg flex-shrink-0">⚠️</span>
                  <span className="text-gray-700">{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-orange-100 rounded-xl p-6">
            <p className="font-bold text-gray-800 mb-3">💬 Как говорить с ребёнком, если вы заметили красный флаг:</p>
            <ul className="space-y-2">
              {[
                "Не задавайте вопрос «почему ты не хочешь в школу?» — он вызывает защиту",
                "Скажите: «Я вижу, тебе сейчас тяжело. Я рядом»",
                "Не сравнивайте с другими детьми и не обесценивайте переживания",
                "Обратитесь к школьному психологу — это нормальный и правильный шаг",
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 items-start text-gray-700 text-sm">
                  <span className="text-orange-400 flex-shrink-0 mt-0.5">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-[#FF6B35] via-[#F7931E] to-[#FFD23F] py-16 text-center px-6">
        <blockquote className="font-oswald text-4xl md:text-5xl font-bold text-white mb-8 max-w-2xl mx-auto leading-tight drop-shadow-lg">
          «Быть человеком — это трудно, но интересно»
        </blockquote>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#section3"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors"
          >
            📋 Пройти диагностику снова
          </a>
          <a
            href="#section4"
            className="inline-flex items-center gap-2 bg-white/20 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/30 transition-colors"
          >
            💡 5 стратегий для родителей
          </a>
        </div>

        <div className="border-t border-white/30 pt-6">
          <p className="text-white/70 text-base mb-1">Помните: ваше спокойствие — лучшая поддержка для ребёнка.</p>
          <p className="text-white/50 text-sm">Обновлено: март 2026</p>
        </div>
      </footer>
    </div>
  );
}