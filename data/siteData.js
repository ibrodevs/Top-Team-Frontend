export const navItems = [
  { label: "Клуб", path: "/club" },
  { label: "Команда", path: "/squad" },
  { label: "Матчи", path: "/fixtures" },
  { label: "Live", path: "/live" },
  { label: "Новости", path: "/news" },
  { label: "Магазин", path: "/shop" },
  { label: "Билеты", path: "/tickets" },
  { label: "Членство", path: "/membership" },
];

export const clubTimeline = [
  { year: "1998", title: "Основание клуба", text: "Группа энтузиастов и бывших игроков создала клуб с амбицией стать лучшим." },
  { year: "2003", title: "Первый трофей", text: "Кубок региона — первый шаг к большой истории Top Team." },
  { year: "2011", title: "Выход в элиту", text: "Клуб пробивается в высший дивизион и заявляет о себе на всю страну." },
  { year: "2017", title: "Открытие стадиона", text: "Современный Top Team Arena принимает 45 000 болельщиков." },
  { year: "2024", title: "Чемпионство", text: "Самый яркий сезон: чемпионский титул и выход в еврокубки." },
  { year: "2026", title: "Новая эра", text: "Молодая команда, амбициозные цели, глобальные горизонты." },
];

export const clubValues = [
  { title: "Победа", text: "Мы играем, чтобы выигрывать. Каждая тренировка, каждый матч — шаг к трофею." },
  { title: "Семья", text: "Игроки, тренеры, болельщики — единое целое. Стадион — наш дом." },
  { title: "Развитие", text: "Академия воспитывает таланты. Мы верим в молодость и рост." },
  { title: "Уважение", text: "Уважение к сопернику, к игре, к болельщикам — фундамент клуба." },
];

export const squadFilters = ["Все", "Вратарь", "Защитник", "Полузащитник", "Нападающий"];

export const players = [
  { id: "arsen-kalinin", name: "Арсен Калинин", number: 1, position: "Вратарь", nationality: "Россия", age: 28, appearances: 31, goals: 0, assists: 0, rating: 8.1, bio: "Хладнокровный лидер штрафной площади и один из лучших вратарей лиги по игре на линии.", photo_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80&auto=format&fit=crop" },
  { id: "nikita-orlov", name: "Никита Орлов", number: 4, position: "Защитник", nationality: "Россия", age: 25, appearances: 29, goals: 2, assists: 3, rating: 7.8, bio: "Центральный защитник с сильной первой передачей и отличным выбором позиции.", photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80&auto=format&fit=crop" },
  { id: "daniil-sokolov", name: "Даниил Соколов", number: 22, position: "Защитник", nationality: "Россия", age: 23, appearances: 27, goals: 1, assists: 5, rating: 7.5, bio: "Энергичный фланговый защитник, который даёт ширину в атаке и не проигрывает в скорости.", photo_url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1200&q=80&auto=format&fit=crop" },
  { id: "roman-belov", name: "Роман Белов", number: 6, position: "Полузащитник", nationality: "Россия", age: 29, appearances: 32, goals: 4, assists: 8, rating: 8.4, bio: "Мозг команды в центре поля. Управляет темпом игры и задаёт ритм прессингу.", photo_url: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=1200&q=80&auto=format&fit=crop" },
  { id: "ilias-hadji", name: "Илиас Хаджи", number: 10, position: "Полузащитник", nationality: "Марокко", age: 24, appearances: 30, goals: 9, assists: 11, rating: 8.8, bio: "Креативный плеймейкер, который видит линии передачи на полсекунды раньше остальных.", photo_url: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=1200&q=80&auto=format&fit=crop" },
  { id: "egor-antonov", name: "Егор Антонов", number: 8, position: "Полузащитник", nationality: "Россия", age: 21, appearances: 24, goals: 3, assists: 6, rating: 7.7, bio: "Выпускник академии, уже ставший важной частью ротации первой команды.", photo_url: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=1200&q=80&auto=format&fit=crop" },
  { id: "leonid-zharkov", name: "Леонид Жарков", number: 9, position: "Нападающий", nationality: "Россия", age: 27, appearances: 31, goals: 18, assists: 4, rating: 8.6, bio: "Классический форвард штрафной площади, который превращает полумоменты в голы.", photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop" },
  { id: "tiago-mendes", name: "Тиаго Мендес", number: 11, position: "Нападающий", nationality: "Португалия", age: 26, appearances: 28, goals: 13, assists: 9, rating: 8.3, bio: "Скоростной инсайд, который любит смещаться в центр и завершать эпизоды ударом с левой.", photo_url: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=1200&q=80&auto=format&fit=crop" },
];

export const matches = [
  { id: "match-zenit", date: "2026-07-18T18:30:00+06:00", competition: "Премьер-лига", venue: "home", status: "upcoming", opponent: "Zenit City", stadium: "Top Team Arena", home_score: 0, away_score: 0 },
  { id: "match-dynamo", date: "2026-07-25T20:00:00+06:00", competition: "Премьер-лига", venue: "away", status: "upcoming", opponent: "Dynamo North", stadium: "North Park", home_score: 0, away_score: 0 },
  { id: "match-ural", date: "2026-08-02T19:00:00+06:00", competition: "Кубок страны", venue: "home", status: "upcoming", opponent: "Ural Forge", stadium: "Top Team Arena", home_score: 0, away_score: 0 },
  { id: "match-rubin-live", date: "2026-07-02T20:00:00+06:00", competition: "Премьер-лига", venue: "home", status: "live", opponent: "Rubin East", stadium: "Top Team Arena", home_score: 2, away_score: 1 },
  { id: "match-baltika", date: "2026-06-24T18:30:00+06:00", competition: "Премьер-лига", venue: "away", status: "finished", opponent: "Baltika", stadium: "Baltika Park", home_score: 1, away_score: 3 },
  { id: "match-spartak", date: "2026-06-15T21:00:00+06:00", competition: "Премьер-лига", venue: "home", status: "finished", opponent: "Spartak South", stadium: "Top Team Arena", home_score: 2, away_score: 2 },
];

export const liveEvents = [
  { minute: 45, type: "goal", team: "home", text: "ГОЛ! Top Team выходит вперёд после мощного удара из-за штрафной." },
  { minute: 52, type: "yellow", team: "away", text: "Жёлтая карточка. Грубый фол в центре поля." },
  { minute: 67, type: "sub", team: "home", text: "Замена. Свежие силы на поле — атакующий полузащитник выходит." },
  { minute: 78, type: "goal", team: "away", text: "Гол соперника. Сравняли счёт после быстрой контратаки." },
  { minute: 88, type: "info", team: "home", text: "Опасный момент! Штанга спасает соперника." },
];

export const newsCategories = ["Все", "Матч", "Трансфер", "Клуб", "Академия", "Интервью"];

export const news = [
  { id: "captain-interview", title: "Капитан: «Мы хотим, чтобы этот сезон запомнили надолго»", subtitle: "Перед стартом решающего отрезка чемпионата капитан Top Team рассказал о раздевалке, целях и давлении.", category: "Интервью", featured: true, author: "Редакция клуба", created_date: "2026-07-01T10:00:00+06:00", cover_image_url: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1600&q=80&auto=format&fit=crop", body: "## Команда готова к рывку\n\nTop Team подходит к июльскому отрезку сезона в отличной форме. Капитан команды подчёркивает, что атмосфера внутри коллектива стала ещё сильнее после последних матчей.\n\n- Мы стали смелее в прессинге.\n- Молодые игроки добавили интенсивности.\n- Болельщики дают энергию на каждом домашнем матче.\n\n### О давлении\n\nПо словам капитана, в клубе привыкли к высоким ожиданиям. Здесь играют не ради процесса, а ради победы и трофеев.\n\n> «Когда надеваешь эту футболку, ты понимаешь, что должен быть лучше в каждом эпизоде»." },
  { id: "academy-open-day", title: "Академия Top Team проведёт открытый день отбора", subtitle: "Юные футболисты смогут пройти тестирование и познакомиться с тренерским штабом.", category: "Академия", author: "Academy Desk", created_date: "2026-06-29T14:30:00+06:00", cover_image_url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600&q=80&auto=format&fit=crop", body: "## Новый набор\n\nВ академии клуба стартует летний просмотр для игроков 8-14 лет. Участников ждут игровые упражнения, координационные тесты и встреча с тренерами.\n\n### Что взять с собой\n\n- спортивную форму\n- бутсы\n- медицинскую справку" },
  { id: "new-winger", title: "Top Team усилил атаку: подписан фланговый нападающий", subtitle: "Клуб завершил сделку по трансферу скоростного инсайда, который присоединится к команде уже на этой неделе.", category: "Трансфер", author: "Transfer Desk", created_date: "2026-06-27T12:15:00+06:00", cover_image_url: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1600&q=80&auto=format&fit=crop", body: "## Усиление фланга\n\nНовичок добавит скорости и вариативности в переходных фазах. Штаб рассчитывает использовать его как в схеме с двумя инсайдами, так и в роли второго форварда." },
  { id: "matchday-atmosphere", title: "Как Top Team Arena превращается в один большой голос", subtitle: "Репортаж изнутри домашнего матча: трибуны, перформансы и ритуалы болельщиков.", category: "Клуб", author: "Media Team", created_date: "2026-06-22T09:45:00+06:00", cover_image_url: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1600&q=80&auto=format&fit=crop", body: "## Дом, который слышно за пределами города\n\nВ день матча район вокруг арены меняется. Люди собираются за несколько часов до стартового свистка, а клубные цвета видны в каждом квартале." },
  { id: "cup-win", title: "Top Team прошёл в следующий раунд кубка после яркой победы", subtitle: "Команда выиграла на характере и перевернула ход матча во втором тайме.", category: "Матч", author: "Match Center", created_date: "2026-06-20T23:10:00+06:00", cover_image_url: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=1600&q=80&auto=format&fit=crop", body: "## Камбэк вечера\n\nПосле непростого первого тайма команда прибавила в интенсивности и агрессии без мяча. Два точных удара после перерыва решили исход встречи." },
  { id: "coach-notes", title: "Главный тренер: «Мы строим команду, которая умеет терпеть»", subtitle: "Большой разговор о тактике, характере состава и развитии молодых игроков.", category: "Интервью", author: "Редакция клуба", created_date: "2026-06-18T18:00:00+06:00", cover_image_url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&q=80&auto=format&fit=crop", body: "## О характере\n\nТренерский штаб делает ставку на интенсивность, дисциплину и эмоциональную устойчивость. Именно эти качества, по мнению тренера, и определят лицо команды в концовке сезона." },
];

export const academyJourney = [
  { stage: "8-10 лет", title: "Первый шаг", text: "Открытый набор. Дети знакомятся с футболом и основами дисциплины." },
  { stage: "11-14 лет", title: "Школа мастерства", text: "Тактика, техника, физика. Тренеры работают с каждым индивидуально." },
  { stage: "15-17 лет", title: "Юношеская команда", text: "Соревнования на региональном и федеральном уровне. Скауты следят за талантами." },
  { stage: "18+ лет", title: "Первая команда", text: "Лучшие выпускники получают шанс проявить себя в основном составе Top Team." },
];

export const stadiumZones = [
  { id: "vip", name: "VIP-ложи", capacity: 800, color: "#C8A84B" },
  { id: "west", name: "Западная трибуна", capacity: 12000, color: "#5A5A5A" },
  { id: "east", name: "Восточная трибуна", capacity: 12000, color: "#3A3A3A" },
  { id: "north", name: "Северная трибуна", capacity: 10000, color: "#2A2A2A" },
  { id: "south", name: "Южная трибуна", capacity: 10000, color: "#1E1E1E" },
];

export const ticketZones = [
  { id: "vip", name: "VIP-ложа", price: 8000, desc: "Лучшие места с панорамой, бар и обслуживание" },
  { id: "west", name: "Западная трибуна", price: 3500, desc: "Центральная трибуна, отличный обзор" },
  { id: "east", name: "Восточная трибуна", price: 2500, desc: "Активная поддержка, атмосфера фан-сектора" },
  { id: "north", name: "Северная трибуна", price: 1500, desc: "Семейная трибуна, комфортно с детьми" },
];

export const products = [
  { id: "home-kit-2026", name: "Домашняя форма 2026", category: "Форма", price: 6990, badge: "Новинка", sizes: ["S", "M", "L", "XL"], image_url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1200&q=80&auto=format&fit=crop", description: "Основная игровая футболка сезона 2026. Лёгкая ткань, дышащая структура и клубные детали в премиальном исполнении." },
  { id: "black-hoodie", name: "Худи Matchday Black", category: "Одежда", price: 5490, badge: "Sale", sizes: ["M", "L", "XL"], image_url: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=80&auto=format&fit=crop", description: "Тёплое худи для прохладных матчевых вечеров. Минималистичный крой и золотой акцент клуба." },
  { id: "club-scarf", name: "Шарф Top Team", category: "Аксессуары", price: 1990, badge: "Хит", sizes: [], image_url: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80&auto=format&fit=crop", description: "Классический двусторонний шарф с клубной символикой и плотной вязкой." },
  { id: "capsule-jacket", name: "Куртка Capsule Gold", category: "Коллекция", price: 11990, badge: "Новинка", sizes: ["S", "M", "L"], image_url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80&auto=format&fit=crop", description: "Лимитированная куртка из капсульной коллекции клуба. Лаконичный силуэт и фирменная подкладка." },
  { id: "training-top", name: "Тренировочный лонгслив", category: "Одежда", price: 4290, badge: "", sizes: ["S", "M", "L", "XL"], image_url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80&auto=format&fit=crop", description: "Лёгкий тренировочный слой для интенсивных занятий и повседневного образа." },
  { id: "stadium-cap", name: "Кепка Stadium", category: "Аксессуары", price: 2490, badge: "", sizes: [], image_url: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=1200&q=80&auto=format&fit=crop", description: "Универсальная кепка с вышитым логотипом клуба и регулируемой посадкой." },
];

export const productCategories = ["Все", "Форма", "Одежда", "Аксессуары", "Коллекция"];
export const memberships = [
  { name: "Supporter", price: "1 500", period: "год", features: ["Доступ к контенту клуба", "10% скидка в магазине", "Приоритет на билеты", "Членская карточка"], featured: false },
  { name: "Member", price: "5 000", period: "год", features: ["Всё из Supporter", "Гарантированный абонемент", "Эксклюзивные мероприятия", "Доступ в фан-клуб", "20% скидка в магазине"], featured: true },
  { name: "VIP Member", price: "25 000", period: "год", features: ["Всё из Member", "VIP-ложа на 3 матча", "Встреча с игроками", "Именная табличка на стадионе", "Персональный менеджер"], featured: false },
];

export const partners = [
  { name: "AeroJet", category: "Авиаперевозки", tier: "Главный партнёр" },
  { name: "NordBank", category: "Финансы", tier: "Главный партнёр" },
  { name: "PowerFuel", category: "Энергетика", tier: "Премиум" },
  { name: "Sportek", category: "Спортивная экипировка", tier: "Премиум" },
  { name: "MediaGroup", category: "Медиа", tier: "Премиум" },
  { name: "AutoDrive", category: "Авто", tier: "Партнёр" },
  { name: "FreshFit", category: "Питание", tier: "Партнёр" },
  { name: "TechCloud", category: "IT", tier: "Партнёр" },
  { name: "BuildCorp", category: "Строительство", tier: "Партнёр" },
  { name: "LifeInsure", category: "Страхование", tier: "Партнёр" },
];

export const partnerTiers = ["Все", "Главный партнёр", "Премиум", "Партнёр"];
export const getUpcomingMatches = () => matches.filter((match) => match.status === "upcoming");
export const getLatestNews = (limit) => [...news].sort((a, b) => new Date(b.created_date) - new Date(a.created_date)).slice(0, limit);
export const getPlayerById = (id) => players.find((player) => player.id === id);
export const getNewsById = (id) => news.find((article) => article.id === id);
export const getProductById = (id) => products.find((product) => product.id === id);
