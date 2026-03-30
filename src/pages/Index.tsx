import { useState } from "react";

const films = [
  {
    id: 1,
    emoji: "😤",
    problem: "«Не хочу! Надоело!»",
    title: "В стране невыученных уроков",
    duration: "3 мин",
    videoId: "F2DnNJgkiKg",
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
    videoId: "7eGT_bXFGbA",
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
    videoId: "5DnPVmNQoOA",
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
  { title: "Зелёная пилюля", duration: "10 мин", videoId: "F2DnNJgkiKg" },
  { title: "В стране невыученных уроков", duration: "20 мин", videoId: "F2DnNJgkiKg" },
  { title: "Вовка в Тридевятом царстве", duration: "15 мин", videoId: "7eGT_bXFGbA" },
  { title: "История с единицей", duration: "9 мин", videoId: "5DnPVmNQoOA" },
  { title: "Баранкин, будь человеком!", duration: "21 мин", videoId: "k5o1JHHcHVs" },
];

const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ"];

export default function Index() {
  const [openFilm, setOpenFilm] = useState<number | null>(null);
  const [openStrategy, setOpenStrategy] = useState<number | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activePlaylist, setActivePlaylist] = useState(0);

  const toggleCheck = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen font-golos bg-white">
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
      <section className="max-w-4xl mx-auto px-6 py-16">
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
          <div className="aspect-video bg-gray-900 flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/F2DnNJgkiKg"
              className="w-full h-full"
              allowFullScreen
              title="Зелёная пилюля"
            />
          </div>
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
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
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
                  <button
                    onClick={() => setOpenFilm(openFilm === film.id ? null : film.id)}
                    className={`w-full bg-gradient-to-r ${film.color} text-white rounded-xl py-2.5 px-4 font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                  >
                    ▶ Смотреть фрагмент ({film.duration})
                  </button>

                  {openFilm === film.id && (
                    <div className="mt-4 rounded-xl overflow-hidden aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${film.videoId}`}
                        className="w-full h-full"
                        allowFullScreen
                        title={film.title}
                      />
                    </div>
                  )}

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
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white font-oswald font-bold">3</div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
            Диагностика за 5 минут
          </h2>
        </div>

        <p className="text-gray-600 text-lg mb-8">
          Пройдите короткий опрос, чтобы понять уровень мотивации вашего ребёнка прямо сейчас.
        </p>

        <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl p-8 text-white text-center mb-8">
          <div className="text-5xl mb-4">📋</div>
          <p className="text-xl font-semibold mb-6">5 вопросов — готово за 2 минуты</p>
          <a
            href="#"
            className="inline-block bg-white text-teal-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-teal-50 transition-colors"
          >
            Пройти диагностику →
          </a>
          <p className="text-white/70 text-sm mt-3">Вставьте ссылку на Google Forms</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { zone: "🟢 Зелёная зона", meaning: "Мотивация в порядке", action: "Поддерживайте текущий стиль общения", bg: "bg-green-50 border-green-200" },
            { zone: "🟡 Жёлтая зона", meaning: "Есть признаки снижения", action: "Примените рекомендации из раздела 4", bg: "bg-yellow-50 border-yellow-200" },
            { zone: "🔴 Красная зона", meaning: "Мотивация значительно снижена", action: "Обратитесь к школьному психологу + рекомендации", bg: "bg-red-50 border-red-200" },
          ].map((item, i) => (
            <div key={i} className={`${item.bg} border-2 rounded-xl p-4`}>
              <p className="font-bold text-gray-800 mb-1">{item.zone}</p>
              <p className="text-gray-600 text-sm mb-2">{item.meaning}</p>
              <p className="text-gray-700 text-sm">{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Стратегии */}
      <section className="bg-gradient-to-br from-violet-50 to-indigo-50 py-16">
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
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-oswald font-bold">5</div>
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900">
            Чек-лист для ребёнка на неделю
          </h2>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-100 rounded-2xl p-6 md:p-8 mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 font-oswald text-gray-500 font-semibold text-sm">День</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">Я спросил «почему?»</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">Я сделал, что не хотелось</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700 text-sm">Школа — не враг</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <tr key={day} className="border-t border-pink-100">
                    <td className="py-3 px-4 font-oswald font-bold text-gray-800">{day}</td>
                    {[0, 1, 2].map((col) => (
                      <td key={col} className="py-3 px-4 text-center">
                        <button
                          onClick={() => toggleCheck(`${day}-${col}`)}
                          className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center mx-auto transition-all ${
                            checked[`${day}-${col}`]
                              ? "bg-gradient-to-br from-pink-400 to-rose-500 border-pink-400 text-white"
                              : "border-pink-300 hover:border-pink-400"
                          }`}
                        >
                          {checked[`${day}-${col}`] && "✓"}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          📄 Скачать чек-лист для печати (PDF)
        </a>
      </section>

      {/* SECTION 6 — Плейлист */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-oswald font-bold">6</div>
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white">
              Все мультфильмы целиком
            </h2>
          </div>
          <p className="text-gray-400 mb-8 text-lg">Если хотите посмотреть мультфильмы полностью — вот плейлист.</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2 rounded-2xl overflow-hidden aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${playlist[activePlaylist].videoId}`}
                className="w-full h-full"
                allowFullScreen
                title={playlist[activePlaylist].title}
              />
            </div>
            <div className="space-y-2">
              {playlist.map((film, i) => (
                <button
                  key={i}
                  onClick={() => setActivePlaylist(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm ${
                    activePlaylist === i
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span className="block font-medium">{film.title}</span>
                  <span className={`text-xs ${activePlaylist === i ? "text-white/80" : "text-gray-500"}`}>{film.duration}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Баранкин */}
      <section className="max-w-4xl mx-auto px-6 py-16">
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
          <div className="rounded-xl overflow-hidden aspect-video mb-6">
            <iframe
              src="https://www.youtube.com/embed/k5o1JHHcHVs"
              className="w-full h-full"
              allowFullScreen
              title="Баранкин, будь человеком!"
            />
          </div>
          <div className="bg-white border border-emerald-100 rounded-xl p-4 mb-4">
            <p className="text-emerald-600 font-semibold italic text-center text-lg">
              «Быть человеком — это трудно, но интересно»
            </p>
          </div>
          <p className="font-semibold text-gray-700 mb-3">Вопросы для обсуждения после просмотра:</p>
          <div className="space-y-2">
            {[
              "Почему Юра хотел стать воробьём?",
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
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16">
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

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-orange-100 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">🏫 Школьный психолог</p>
              <p className="text-gray-500 text-sm italic">[Вписать контакты]</p>
            </div>
            <div className="bg-white border-2 border-orange-100 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2">👩‍🏫 Классный руководитель</p>
              <p className="text-gray-500 text-sm italic">[Вписать контакты]</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-[#FF6B35] via-[#F7931E] to-[#FFD23F] py-16 text-center px-6">
        <blockquote className="font-oswald text-4xl md:text-5xl font-bold text-white mb-8 max-w-2xl mx-auto leading-tight drop-shadow-lg">
          «Быть человеком — это трудно, но интересно»
        </blockquote>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors mb-8"
        >
          📦 Скачать все материалы одним PDF
        </a>

        <div className="border-t border-white/30 pt-6 mt-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 max-w-sm mx-auto mb-4">
            <p className="text-white/80 text-sm">🏫 Контакты школы</p>
            <p className="text-white/60 text-xs italic mt-1">[Вписать контакты]</p>
          </div>
          <p className="text-white/60 text-sm">Обновлено: март 2026</p>
        </div>
      </footer>
    </div>
  );
}