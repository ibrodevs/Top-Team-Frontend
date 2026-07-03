// ============================================================
// Top Team KG — данные сайта
// Все значения легко заменяемы. Поля data_status / internal_note
// служебные: они НЕ выводятся в публичном интерфейсе и нужны
// админу для сверки данных с клубом.
// ============================================================

export const navItems = [
  { label: "О клубе", path: "/club" },
  { label: "Состав", path: "/squad" },
  { label: "Матчи", path: "/fixtures" },
  { label: "Новости", path: "/news" },
  { label: "Медиа", path: "/media" },
  { label: "Партнеры", path: "/partners" },
  { label: "Контакты", path: "/contact" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/topteam.kg/",
    caption: "@topteam.kg",
    description: "Reels, матчдэй и жизнь команды каждый день.",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/playlist?list=PL1McLR5i1MQRosOKJq1Htw8fHx-3l1zzZ",
    caption: "Top Team KG",
    description: "Полные матчи, обзоры и большие форматы.",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@topteam.kg",
    caption: "@topteam.kg",
    description: "Вертикальные моменты, которые расходятся по ленте.",
    data_status: "ссылку подтвердить у клуба",
  },
];

export const homeHero = {
  badge: "Media Football Club — Kyrgyzstan",
  title: "Больше чем игра",
  accent: "Это — Top Team",
  subtitle:
    "Top Team KG — медиа-футбольный клуб Кыргызстана, где футбол, контент и болельщики становятся одной командой. Следи за матчами, игроками и моментами, которые создают историю клуба.",
  primaryCta: { label: "Смотреть матчи", href: "/fixtures" },
  secondaryCta: { label: "Состав команды", href: "/squad" },
  tertiaryCta: { label: "Стать партнером", href: "/partners" },
};

// Плейсхолдер-значения: админ заменяет на подтвержденные цифры клуба
export const homeStats = [
  { value: 3, suffix: "", label: "Трофея", note: "KMFL и медиа-турниры" },
  { value: 4, suffix: ":0", label: "Финал MFL KG 2023", note: "Победа над FC DJO" },
  { value: 20, suffix: "+", label: "Игроков и медиа-лиц", note: "Футбол + контент" },
  { value: 1, suffix: "M+", label: "Медиа-охваты", note: "Instagram, TikTok, YouTube" },
];

export const aboutPillars = [
  {
    title: "Футбол",
    text: "Матчи, турниры и результат. Команда выходит на поле, чтобы побеждать и задавать уровень медиафутбола Кыргызстана.",
    icon: "trophy",
  },
  {
    title: "Медиа",
    text: "Reels, хайлайты, backstage и YouTube. Каждый матч превращается в контент, который живет дольше финального свистка.",
    icon: "play",
  },
  {
    title: "Комьюнити",
    text: "Болельщики, молодежь и город. Top Team — это люди, которые вместе с командой создают новую футбольную культуру.",
    icon: "users",
  },
  {
    title: "Победа",
    text: "Амбиции, дисциплина и характер. Мы не играем, чтобы участвовать — мы играем, чтобы побеждать.",
    icon: "flame",
  },
];

export const clubQuote = {
  text: "Мы не играем, чтобы участвовать. Мы играем, чтобы побеждать.",
  caption: "Top Team KG",
};

export const clubFacts = [
  { label: "Формат", value: "Медиа-футбольный клуб" },
  { label: "База", value: "Бишкек, Кыргызстан", data_status: "адрес уточнить у клуба" },
  { label: "Фокус", value: "Матчи, контент, партнерства, комьюнити" },
];

export const clubTimeline = [
  {
    year: "2022",
    title: "Старт проекта",
    text: "Top Team KG выходит на сцену медиафутбола Кыргызстана — с амбицией объединить спорт, шоу и контент в один бренд.",
    data_status: "год основания подтвердить у клуба",
  },
  {
    year: "2023",
    title: "Сезон MFL KG",
    text: "Команда проходит сезон Media Football League KG и становится одним из самых заметных проектов кыргызского медиафутбола.",
  },
  {
    year: "2023",
    title: "Чемпионский финал",
    text: "30 июня Top Team обыгрывает FC DJO со счетом 4:0 в финале MFL KG. Титул, который вошел в историю клуба.",
  },
  {
    year: "2024",
    title: "Рост медиа-экосистемы",
    text: "Контент, backstage, личные бренды игроков и работа с аудиторией выводят клуб за пределы классического футбола.",
  },
  {
    year: "2025",
    title: "Новые вызовы",
    text: "Матчи против сильных соперников и участие в новых турнирах — включая Кубок Кыргызской Республики.",
  },
  {
    year: "2026",
    title: "Цифровая платформа клуба",
    text: "Запуск официальной платформы Top Team KG: матч-центр, состав, медиа, новости и партнерская программа в одном месте.",
  },
];

export const clubValues = [
  {
    title: "Победа",
    text: "Мы не играем, чтобы участвовать. Мы играем, чтобы побеждать и задавать уровень в медиафутболе Кыргызстана.",
  },
  {
    title: "Команда",
    text: "Игроки, штаб, болельщики и партнеры — одна экосистема, которая движется к общей цели.",
  },
  {
    title: "Медийность",
    text: "Top Team живет не только на поле. Контент, интервью, Reels и эмоции матчей — такая же часть бренда, как счет на табло.",
  },
  {
    title: "Открытость",
    text: "Клуб строит диалог с аудиторией, развивает комьюнити и показывает живую внутреннюю кухню проекта.",
  },
];

export const missionVision = [
  {
    title: "Миссия",
    text: "Развивать медиафутбол в Кыргызстане, объединять людей вокруг футбола и создавать контент, который вдохновляет новое поколение игроков и болельщиков.",
  },
  {
    title: "Видение",
    text: "Стать самым узнаваемым медиа-футбольным клубом Центральной Азии и вывести кыргызский медиафутбол на международный уровень.",
  },
  {
    title: "Характер",
    text: "Уверенный, энергичный, современный. Мы говорим на языке молодежи и играем на уровне профессионалов.",
  },
];

export const achievements = [
  {
    title: "3x Champions KMFL",
    year: "KMFL",
    description: "Три чемпионских титула Кыргызской медиа-футбольной лиги — фундамент победной ДНК клуба.",
    data_status: "перечень сезонов подтвердить у клуба",
  },
  {
    title: "Champions Media Phygital Cup 2",
    year: "Cup",
    description: "Победа на стыке спорта и цифровых форматов — турнире, где решают и ноги, и голова.",
    data_status: "год подтвердить у клуба",
  },
  {
    title: "Чемпион MFL KG",
    year: "2023",
    description: "Финал против FC DJO — 4:0. Самая громкая победа в истории проекта.",
  },
  {
    title: "Международные матчи",
    year: "2023+",
    description: "Top Team выходил на поле против топовых медиа-команд региона, включая SD Family в 1XBET Media Football League.",
  },
];

export const squadFilters = [
  "Все",
  "Вратари",
  "Защитники",
  "Полузащитники",
  "Нападающие",
  "Медиа",
];

// Номера и часть позиций — плейсхолдеры до передачи официального
// ростера клубом (см. data_status). Публично выводятся как обычные данные.
export const players = [
  {
    id: "anton-zemlyanukhin",
    name: "Антон Землянухин",
    number: 10,
    position: "Нападающие",
    position_label: "Нападающий",
    nationality: "Кыргызстан",
    role: "Экс-игрок сборной Кыргызстана. Опыт, техника и голы в решающие моменты.",
    bio: "Один из самых узнаваемых футболистов Кыргызстана. За плечами — матчи за национальную сборную и годы на высшем уровне. В Top Team Антон — лидер атаки и человек, который решает эпизоды.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Голы", value: "—" },
      { label: "Ассисты", value: "—" },
    ],
    data_status: "номер и статистику подтвердить у клуба",
  },
  {
    id: "veniamin-shumeiko",
    name: "Вениамин Шумейко",
    number: 4,
    position: "Защитники",
    position_label: "Защитник",
    nationality: "Кыргызстан",
    role: "Экс-игрок сборной. Надежность и порядок в обороне.",
    bio: "Опытный защитник с бэкграундом национальной сборной. Читает игру на шаг вперед и превращает оборону Top Team в стену.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Отборы", value: "—" },
      { label: "Сухие матчи", value: "—" },
    ],
    data_status: "номер и статистику подтвердить у клуба",
  },
  {
    id: "ruslan-amirov",
    name: "Руслан Амиров",
    number: 1,
    position: "Вратари",
    position_label: "Вратарь",
    nationality: "Кыргызстан",
    role: "Экс-вратарь сборной Кыргызстана. Последний рубеж команды.",
    bio: "Вратарь с опытом национальной сборной. Сэйвы Руслана — отдельный жанр контента Top Team и главная страховка команды в решающих матчах.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Сэйвы", value: "—" },
      { label: "Сухие матчи", value: "—" },
    ],
    data_status: "номер и статистику подтвердить у клуба",
  },
  {
    id: "david-tetteh",
    name: "Давид Тетте",
    number: 9,
    position: "Нападающие",
    position_label: "Нападающий",
    nationality: "Гана",
    role: "Скорость и мощь на острие атаки.",
    bio: "Форвард, который держит в напряжении любую оборону. Взрывная скорость, борьба на каждом метре и голевое чутье.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Голы", value: "—" },
      { label: "Ассисты", value: "—" },
    ],
    data_status: "позицию, номер и гражданство подтвердить у клуба",
  },
  {
    id: "daniel-tego",
    name: "Даниэл Тэго",
    number: 7,
    position: "Полузащитники",
    position_label: "Полузащитник",
    nationality: "Кыргызстан",
    role: "Креатив и дриблинг между линиями.",
    bio: "Игрок, который делает игру Top Team зрелищной: обводки, передачи вразрез и моменты, которые попадают в хайлайты.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Голы", value: "—" },
      { label: "Ассисты", value: "—" },
    ],
    data_status: "позицию и номер подтвердить у клуба",
  },
  {
    id: "bektur-talgat-uulu",
    name: "Бектур Талгат уулу",
    number: 8,
    position: "Полузащитники",
    position_label: "Полузащитник",
    nationality: "Кыргызстан",
    role: "Мотор центра поля.",
    bio: "Объем работы, отборы и первый пас. Бектур — игрок, который связывает оборону и атаку Top Team.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Голы", value: "—" },
      { label: "Ассисты", value: "—" },
    ],
    data_status: "позицию и номер подтвердить у клуба",
  },
  {
    id: "zhanadil-salymbekov",
    name: "Жанадил Салымбеков",
    number: 77,
    position: "Медиа",
    position_label: "Медиа-игрок",
    nationality: "Кыргызстан",
    role: "Медиа-игрок и блогер. Голос команды в соцсетях.",
    bio: "Человек, который превращает матчдэй в шоу. Жанадил — часть медийной линии клуба: контент, вовлечение аудитории и энергия на поле и за его пределами.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Контент", value: "Reels" },
      { label: "Аудитория", value: "—" },
    ],
    data_status: "номер и охваты подтвердить у клуба",
  },
  {
    id: "mirlan-malikov",
    name: "Мирлан Маликов",
    number: 99,
    position: "Медиа",
    position_label: "Медиа-игрок",
    nationality: "Кыргызстан",
    role: "Актер, блогер, спортсмен. Лицо клуба за пределами поля.",
    bio: "Мирлан расширяет аудиторию Top Team далеко за пределы футбола: экран, соцсети и харизма, которая делает клуб узнаваемым брендом.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Контент", value: "Shows" },
      { label: "Аудитория", value: "—" },
    ],
    data_status: "номер и охваты подтвердить у клуба",
  },
  {
    id: "chyngyz-kurmankozhoev",
    name: "Чынгыз Курманкожоев",
    number: 17,
    position: "Полузащитники",
    position_label: "Полузащитник",
    nationality: "Кыргызстан",
    role: "Универсал с характером.",
    bio: "Игрок, готовый закрыть несколько позиций и добавить интенсивности в любой отрезок матча.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Голы", value: "—" },
      { label: "Ассисты", value: "—" },
    ],
    data_status: "позицию и номер подтвердить у клуба",
  },
  {
    id: "maksat-alimov",
    name: "Максат Алимов",
    number: 11,
    position: "Нападающие",
    position_label: "Нападающий",
    nationality: "Кыргызстан",
    role: "Новая энергия атаки Top Team.",
    bio: "Свежая кровь в атакующей линии. Скорость, дерзость и голод до голов — то, что нужно клубу, который играет только на победу.",
    stats: [
      { label: "Матчи", value: "—" },
      { label: "Голы", value: "—" },
      { label: "Ассисты", value: "—" },
    ],
    data_status: "позицию, номер и статус подтвердить у клуба",
  },
];

export const matches = [
  {
    id: "next-match-tba",
    date: "2026-08-01T19:00:00+06:00",
    date_label: "Скоро объявим",
    competition: "Сезон 2026",
    stage: "Следующий матч",
    venue: "home",
    status: "upcoming",
    tba: true,
    opponent: "Соперник объявляется",
    stadium: "Бишкек",
    team_score: null,
    opponent_score: null,
    summary: "Анонс ближайшего матча выйдет в Instagram и на сайте. Подпишись, чтобы не пропустить.",
    cta_label: "Следить за анонсами",
    cta_href: "https://www.instagram.com/topteam.kg/",
    data_status: "заменить на реальный матч после подтверждения календаря",
  },
  {
    id: "cup-dordoi",
    date: "2025-04-15T18:00:00+06:00",
    date_label: "2025",
    competition: "Кубок Кыргызской Республики",
    stage: "Кубковый матч",
    venue: "home",
    status: "finished",
    opponent: "Dordoi",
    stadium: "Бишкек",
    team_score: 1,
    opponent_score: 3,
    summary: "Top Team дал бой одному из грандов профессионального футбола страны — опыт, который делает команду сильнее.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
    data_status: "дату и площадку подтвердить у клуба",
  },
  {
    id: "mfl-final-2023",
    date: "2023-06-30T20:00:00+06:00",
    date_label: "30 июня 2023",
    competition: "MFL KG",
    stage: "Финал",
    venue: "away",
    status: "finished",
    opponent: "FC DJO",
    stadium: "Бишкек",
    team_score: 4,
    opponent_score: 0,
    highlight: true,
    summary: "4:0 в финале. Top Team уничтожил FC DJO и забрал титул чемпиона MFL KG.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "mfl-semifinal-inazuma",
    date: "2023-06-21T19:00:00+06:00",
    date_label: "21 июня 2023",
    competition: "MFL KG",
    stage: "Плей-офф",
    venue: "home",
    status: "finished",
    opponent: "INAZUMA ELEVEN",
    stadium: "Бишкек",
    team_score: 3,
    opponent_score: 1,
    summary: "Уверенная победа в плей-офф — и путевка в финал турнира.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "mfl-group-djo",
    date: "2023-06-13T19:00:00+06:00",
    date_label: "13 июня 2023",
    competition: "MFL KG",
    stage: "Групповой этап",
    venue: "away",
    status: "finished",
    opponent: "FC DJO",
    stadium: "Бишкек",
    team_score: 5,
    opponent_score: 0,
    summary: "5:0 на групповом этапе против будущего соперника по финалу. Заявка на титул.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "mfl-group-osh-city",
    date: "2023-06-07T19:00:00+06:00",
    date_label: "7 июня 2023",
    competition: "MFL KG",
    stage: "Групповой этап",
    venue: "home",
    status: "finished",
    opponent: "OSH CITY",
    stadium: "Бишкек",
    team_score: 1,
    opponent_score: 0,
    summary: "Плотный матч, характер и три очка при минимальном счете.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "mfl-group-alash",
    date: "2023-05-30T19:00:00+06:00",
    date_label: "30 мая 2023",
    competition: "MFL KG",
    stage: "Групповой этап",
    venue: "home",
    status: "finished",
    opponent: "ALASH",
    stadium: "Бишкек",
    team_score: 2,
    opponent_score: 2,
    summary: "Результативная ничья в открытом футболе группового этапа.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
  {
    id: "international-sd-family",
    date: "2023-03-01T12:00:00+06:00",
    date_label: "2023",
    competition: "1XBET Media Football League",
    stage: "Международный матч",
    venue: "away",
    status: "finished",
    opponent: "SD Family",
    stadium: "Выезд",
    team_score: 1,
    opponent_score: 4,
    summary: "Матч против одного из сильнейших медиа-клубов региона. Уровень, к которому идет Top Team.",
    cta_label: "Матч-центр",
    cta_href: "/fixtures",
  },
];

export const tournaments = [
  {
    name: "KMFL",
    season: "Несколько сезонов",
    description: "Кыргызская медиа-футбольная лига — домашний турнир и три чемпионских титула клуба.",
  },
  {
    name: "MFL KG",
    season: "2023",
    description: "Сезон с чемпионским финалом против FC DJO — 4:0 и золото турнира.",
  },
  {
    name: "Media Phygital Cup 2",
    season: "Cup",
    description: "Трофей на стыке спорта и цифровых форматов в копилке клуба.",
  },
  {
    name: "1XBET Media Football League",
    season: "2023",
    description: "Международная арена медиафутбола: матчи против сильнейших клубов региона.",
  },
];

export const newsCategories = [
  "Все",
  "Матчи",
  "Клуб",
  "Игроки",
  "Партнеры",
  "Медиа",
];

export const news = [
  {
    id: "mfl-final-win",
    title: "4:0 в финале. Top Team — чемпион MFL KG",
    subtitle: "Финал против FC DJO превратился в бенефис Top Team: четыре безответных мяча и первый большой титул сезона.",
    category: "Матчи",
    featured: true,
    author: "Пресс-служба Top Team KG",
    created_date: "2023-06-30T22:00:00+06:00",
    cover_image_url: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1600&q=80&auto=format&fit=crop",
    body: `## Вечер, который вошел в историю клуба

30 июня 2023 года Top Team KG обыграл FC DJO со счетом 4:0 в финале MFL KG. Команда провела матч на своих условиях: контроль, прессинг и хладнокровная реализация.

### Как это было

- быстрый гол задал тон матчу
- оборона не оставила сопернику ни одного шанса
- четвертый мяч поставил точку в чемпионском сезоне

### Что дальше

Титул MFL KG — не финиш, а точка отсчета. Впереди новые турниры, новые соперники и новые вершины, к которым идет клуб.`,
  },
  {
    id: "media-football-identity",
    title: "Футбол. Медиа. Комьюнити. Как устроен Top Team KG",
    subtitle: "Top Team — это команда, которая превращает матч в событие, а событие — в контент.",
    category: "Клуб",
    author: "Пресс-служба Top Team KG",
    created_date: "2026-07-02T10:00:00+06:00",
    cover_image_url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80&auto=format&fit=crop",
    body: `## Три роли одного бренда

Top Team KG живет в трех измерениях одновременно:

- **футбольная команда** — матчи, турниры и трофеи
- **медиа-проект** — Reels, хайлайты, интервью и backstage
- **комьюнити** — болельщики, молодежь и город

### Почему это работает

Матч заканчивается за 90 минут, а контент живет неделями. Каждая игра Top Team продолжается в ленте: голы становятся Reels, эмоции — историями, а болельщики — частью команды.`,
  },
  {
    id: "international-match-sd-family",
    title: "Уровень, к которому мы идем: матч против SD Family",
    subtitle: "Top Team вышел на поле против одного из самых сильных медиа-клубов региона.",
    category: "Матчи",
    author: "Пресс-служба Top Team KG",
    created_date: "2023-03-02T12:00:00+06:00",
    cover_image_url: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1600&q=80&auto=format&fit=crop",
    body: `## Международная арена

В рамках 1XBET Media Football League Top Team встретился с SD Family — командой, которую знает весь медиафутбол региона.

### Что дал этот матч

- опыт игры против топ-уровня
- узнаваемость за пределами Кыргызстана
- четкое понимание, куда расти дальше

Большие матчи делают большие команды. Top Team продолжает путь на международную сцену.`,
  },
  {
    id: "media-platform-launch",
    title: "Reels, хайлайты и backstage: медиа-платформа Top Team",
    subtitle: "Контент — вторая игра Top Team. Рассказываем, что смотреть и где следить за клубом.",
    category: "Медиа",
    author: "Media Team",
    created_date: "2026-07-02T09:00:00+06:00",
    cover_image_url: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1600&q=80&auto=format&fit=crop",
    body: `## Не только 90 минут

Top Team KG рассказывает о себе через короткие видео, эмоции матчей, интервью и вертикальный контент.

### Форматы клуба

- **Reels** — голы и эмоции в вертикальном формате
- **Highlights** — лучшие моменты матчей на YouTube
- **Backstage** — раздевалка, тренировки и поездки
- **Interviews** — игроки и штаб от первого лица

Подписывайся на Instagram и YouTube клуба — самое важное всегда выходит там первым.`,
  },
  {
    id: "partners-call",
    title: "Top Team KG открывает партнерскую программу для брендов",
    subtitle: "Футбол, молодежная аудитория и живой контент — площадка для брендов, которые хотят быть ближе к новой спортивной культуре.",
    category: "Партнеры",
    author: "Commercial Team",
    created_date: "2026-07-02T08:30:00+06:00",
    cover_image_url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop",
    body: `## Что получает бренд

Top Team KG объединяет спорт, digital-контент и активную молодую аудиторию — и умеет упаковывать это в форматы, которые работают.

### Форматы сотрудничества

- логотип на игровой форме
- интеграции в Reels и YouTube
- матчевые партнерства
- event- и турнирные проекты
- кампании в социальных сетях

Напиши клубу — соберем предложение под задачи бренда.`,
  },
  {
    id: "new-season-preparation",
    title: "Команда готовится к новому сезону",
    subtitle: "Тренировки, сборы и работа над составом: Top Team выходит на новый сезон за новыми трофеями.",
    category: "Игроки",
    author: "Пресс-служба Top Team KG",
    created_date: "2026-06-20T07:45:00+06:00",
    cover_image_url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1600&q=80&auto=format&fit=crop",
    body: `## Подготовка идет полным ходом

Top Team продолжает подготовку к новому игровому сезону: команда работает на тренировках, штаб — над составом и календарем.

### Что впереди

- новые турниры и большие матчи
- усиление состава
- еще больше контента с полей и из раздевалки

Анонсы матчей и новости состава — в Instagram клуба и в этом разделе.`,
  },
];

export const mediaCategories = [
  "Все",
  "Reels",
  "Highlights",
  "Interviews",
  "Backstage",
  "Matchday",
  "Фото",
];

export const mediaItems = [
  {
    id: "reels-goals",
    title: "Голы и эмоции",
    type: "Reels",
    format: "vertical",
    description: "Вертикальные нарезки лучших моментов — голы, сэйвы и празднования.",
    image_url: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1200&q=80&auto=format&fit=crop",
    href: "https://www.instagram.com/topteam.kg/",
    link_label: "Смотреть в Instagram",
  },
  {
    id: "highlights-final",
    title: "Финал MFL KG: 4:0",
    type: "Highlights",
    format: "horizontal",
    description: "Полный обзор чемпионского финала против FC DJO.",
    image_url: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=1600&q=80&auto=format&fit=crop",
    href: "https://www.youtube.com/playlist?list=PL1McLR5i1MQRosOKJq1Htw8fHx-3l1zzZ",
    link_label: "Смотреть на YouTube",
  },
  {
    id: "backstage-life",
    title: "Backstage: изнутри клуба",
    type: "Backstage",
    format: "vertical",
    description: "Раздевалка, тренировки, поездки и все, что остается за кадром матчей.",
    image_url: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1200&q=80&auto=format&fit=crop",
    href: "https://www.instagram.com/topteam.kg/",
    link_label: "Смотреть в Instagram",
  },
  {
    id: "interviews",
    title: "Интервью с игроками",
    type: "Interviews",
    format: "horizontal",
    description: "Игроки и штаб от первого лица: о матчах, амбициях и жизни клуба.",
    image_url: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1600&q=80&auto=format&fit=crop",
    href: "https://www.youtube.com/playlist?list=PL1McLR5i1MQRosOKJq1Htw8fHx-3l1zzZ",
    link_label: "Смотреть на YouTube",
  },
  {
    id: "matchday",
    title: "Matchday: день игры",
    type: "Matchday",
    format: "vertical",
    description: "От прибытия на стадион до финального свистка — атмосфера игрового дня.",
    image_url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80&auto=format&fit=crop",
    href: "https://www.instagram.com/topteam.kg/",
    link_label: "Смотреть в Instagram",
  },
  {
    id: "photo-gallery",
    title: "Фотоархив матчей",
    type: "Фото",
    format: "horizontal",
    description: "Матчевые серии, командные кадры и эмоции сезона в одном месте.",
    image_url: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1600&q=80&auto=format&fit=crop",
    href: "https://www.instagram.com/topteam.kg/",
    link_label: "Открыть галерею",
  },
];

export const partnerBenefits = [
  {
    title: "Спорт + медиа",
    text: "Не просто размещение логотипа, а живые контентные интеграции вокруг матчей и команды.",
  },
  {
    title: "Молодая аудитория",
    text: "Мобильная, социальная и вовлеченная аудитория, которая живет в Instagram, TikTok и YouTube.",
  },
  {
    title: "Гибкие форматы",
    text: "От партнерства сезона до отдельных матчевых и digital-кампаний с быстрым продакшеном.",
  },
  {
    title: "Измеримый эффект",
    text: "Охваты, вовлечение и упоминания — прозрачная отчетность по каждой интеграции.",
  },
];

export const partnerFormats = [
  {
    title: "Логотип на форме",
    text: "Бренд на игровой экипировке — в каждом матче, каждом фото и каждом видео клуба.",
    icon: "shirt",
  },
  {
    title: "Интеграции в Reels",
    text: "Нативные появления бренда в самом виральном формате клуба.",
    icon: "clapperboard",
  },
  {
    title: "Матчевые партнерства",
    text: "Партнер матча: афиши, анонсы, брендинг игрового дня и спецконтент.",
    icon: "calendar",
  },
  {
    title: "YouTube / Highlights",
    text: "Спонсорство обзоров и больших форматов с долгим сроком жизни контента.",
    icon: "play",
  },
  {
    title: "Event и турниры",
    text: "Совместные события, турниры и активации с участием команды и медиа-лиц.",
    icon: "trophy",
  },
  {
    title: "Social media кампании",
    text: "Кампании под ключ с игроками и медиа-персонами клуба.",
    icon: "megaphone",
  },
];

// Слоты под логотипы партнеров: заменить на реальные логотипы
export const partnerSlots = [
  { title: "Ваш бренд", status: "Слот открыт" },
  { title: "Ваш бренд", status: "Слот открыт" },
  { title: "Ваш бренд", status: "Слот открыт" },
  { title: "Ваш бренд", status: "Слот открыт" },
];

export const communityBlock = {
  badge: "Комьюнити",
  title: "Стань частью команды",
  text: "Топ-моменты, анонсы матчей, закулисье и жизнь клуба — каждый день в наших соцсетях. Подписывайся и будь ближе к команде.",
  cta: { label: "Следить за клубом", href: "https://www.instagram.com/topteam.kg/" },
};

export const contactCards = [
  {
    label: "Instagram",
    value: "@topteam.kg",
    href: "https://www.instagram.com/topteam.kg/",
  },
  {
    label: "YouTube",
    value: "Top Team KG",
    href: "https://www.youtube.com/playlist?list=PL1McLR5i1MQRosOKJq1Htw8fHx-3l1zzZ",
  },
  {
    label: "Email",
    value: "info@topteam.kg",
    href: "mailto:info@topteam.kg",
    data_status: "плейсхолдер — заменить на официальный email клуба",
  },
  {
    label: "Партнерства",
    value: "Написать в Direct",
    href: "https://www.instagram.com/topteam.kg/",
  },
];

export const contactTopics = [
  "Сотрудничество",
  "Матчи и турниры",
  "СМИ и интервью",
  "Игроки и состав",
  "Другое",
];

// ---------- Хелперы ----------

export const getUpcomingMatches = () =>
  matches.filter((match) => match.status === "upcoming");

export const getFinishedMatches = () =>
  [...matches]
    .filter((match) => match.status === "finished")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getLatestFinishedMatch = () => getFinishedMatches()[0];

export const getNextMatch = () => getUpcomingMatches()[0] || null;

export const getFeaturedMatch = () => getNextMatch() || getLatestFinishedMatch();

export const getLatestNews = (limit) =>
  [...news]
    .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
    .slice(0, limit);

export const getPlayerById = (id) => players.find((player) => player.id === id);

export const getNewsById = (id) => news.find((article) => article.id === id);

export const getRelatedNews = (id, limit = 3) =>
  news.filter((article) => article.id !== id).slice(0, limit);
