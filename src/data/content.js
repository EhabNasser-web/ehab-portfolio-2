// Single source of truth. Fake items have demo:true and show a DEMO badge.
// Videos/posters/portrait gracefully fall back when files are missing.
export const VIDEOS = {
  short1: { src: '/videos/short-1.mp4', poster: '/videos/short-1.jpg' },
  short2: { src: '/videos/short-2.mp4', poster: '/videos/short-2.jpg' }
};

const projectsEn = [
  {
    slug: 'restaurant-automation',
    title: 'AI Restaurant Order Automation',
    category: 'AUTOMATION',
    status: 'AUTOMATION - 2025',
    statusColor: 'green',
    year: '2025',
    demo: true,
    cover: '/images/projects/restaurant-automation.svg',
    coverAlt: '/images/projects/restaurant-automation-alt.svg',
    summary: 'Orders from chat straight to the kitchen, checked by an AI agent.',
    role: 'Automation builder',
    tools: ['n8n', 'OpenAI', 'Google Sheets', 'WhatsApp API'],
    problem: 'Manual WhatsApp and phone orders cause delays and mistakes during rush hours.',
    solution: 'An n8n workflow receives each order, validates it with an AI agent, updates a sheet, and notifies the kitchen channel.',
    result: 'Demo: cut order handling time by ~60% in a test setup.'
  },
  {
    slug: 'support-chatbot',
    title: 'Customer Support AI Chatbot',
    category: 'AGENTIC SYSTEM',
    status: 'AGENTIC SYSTEM - 2025',
    statusColor: 'blue',
    year: '2025',
    demo: true,
    cover: '/images/projects/support-chatbot.svg',
    coverAlt: '/images/projects/support-chatbot-alt.svg',
    summary: 'A polite bot that answers FAQs and hands off to a human when stuck.',
    role: 'Agent designer',
    tools: ['n8n', 'OpenAI', 'Webhooks'],
    problem: 'Small shops answer the same questions all day and reply late at night.',
    solution: 'An AI agent grounded on a short FAQ doc, with escalation to a human and a conversation log.',
    result: 'Demo: instant first reply on common questions in a test inbox.'
  },
  {
    slug: 'life-tracker',
    title: 'AI Tasks, Expenses & Habits Tracker',
    category: 'PERSONAL AGENT',
    status: 'PERSONAL AGENT - 2026',
    statusColor: 'green',
    year: '2026',
    demo: true,
    cover: '/images/projects/life-tracker.svg',
    coverAlt: '/images/projects/life-tracker-alt.svg',
    summary: 'One chat to log tasks, money, and daily habits with a weekly recap.',
    role: 'Builder',
    tools: ['n8n', 'OpenAI', 'Google Sheets'],
    problem: 'Tasks, spending, and habits live in three apps and none of them gets opened.',
    solution: 'A chat-first tracker: quick-add via message, weekly AI summary, simple streak view.',
    result: 'Demo: daily logging takes under a minute in the prototype.'
  },
  {
    slug: 'allegro-listing-automation',
    title: 'Marketplace Listing Automation',
    category: 'EXPERIENCE STORY',
    status: 'EXPERIENCE STORY - 2024',
    statusColor: 'blue',
    year: '2024',
    demo: false,
    cover: '/images/projects/allegro-listing-automation.svg',
    coverAlt: '/images/projects/allegro-listing-automation-alt.svg',
    summary: 'How an Allegro seller Specialist job became my first step into automation.',
    role: 'Marketplace Seller Specialist (Allegro)',
    tools: ['Listing tools', 'Sheets', 'Basic automation'],
    problem: 'Dozens of product listings needed uploading, photos, and per-item customization.',
    solution: 'I used an advanced automation tool on the company seller account to upload and customize listings faster and more consistently.',
    result: 'Real work: steadier listings and my first taste of automation thinking.'
  },
  {
    slug: 'motion-short-1',
    title: 'Motion Graphics Short #1',
    category: 'VIDEO',
    status: 'VIDEO - 2026',
    statusColor: 'blue',
    year: '2026',
    demo: false,
    realVideo: 'short1',
    cover: '/images/projects/motion-short-1.svg',
    coverAlt: '/images/projects/motion-short-1-alt.svg',
    summary: 'A real vertical short cut and animated by Ehab.',
    role: 'Editor + motion design',
    tools: ['Video editing', 'AI motion graphics'],
    problem: 'Short-form needs a hook in the first second.',
    solution: 'Tight hook, kinetic captions, and sound-synced cuts in 9:16.',
    result: 'Real video — watch it on the Sidequests page.'
  },
  {
    slug: 'motion-short-2',
    title: 'Motion Graphics Short #2',
    category: 'VIDEO',
    status: 'VIDEO - 2026',
    statusColor: 'blue',
    year: '2026',
    demo: false,
    realVideo: 'short2',
    cover: '/images/projects/motion-short-2.svg',
    coverAlt: '/images/projects/motion-short-2-alt.svg',
    summary: 'A second real vertical short with AI-assisted motion graphics.',
    role: 'Editor + motion design',
    tools: ['Video editing', 'AI motion graphics'],
    problem: 'Keeping retention past second three.',
    solution: 'Pattern interrupts, zoom play, and captioned beats.',
    result: 'Real video — watch it on the Sidequests page.'
  }
];

const projectsAr = [
  {
    slug: 'restaurant-automation',
    title: 'أتمتة طلبات مطعم بالذكاء الاصطناعي',
    category: 'أتمتة',
    status: 'أتمتة - 2025',
    statusColor: 'green',
    year: '2025',
    demo: true,
    cover: '/images/projects/restaurant-automation.svg',
    coverAlt: '/images/projects/restaurant-automation-alt.svg',
    summary: 'من الشات للمطبخ مباشرة، بمراجعة وكيل ذكاء اصطناعي.',
    role: 'باني الأتمتة',
    tools: ['n8n', 'OpenAI', 'Google Sheets', 'WhatsApp API'],
    problem: 'طلبات واتساب والتليفون اليدوية بتسبب تأخير وأخطاء وقت الزحمة.',
    solution: 'سير عمل n8n يستقبل الطلب، يتحقق منه وكيل AI، يحدّث شيت، وينبّه المطبخ.',
    result: 'تجريبي: تقليل وقت معالجة الطلب ~60% في بيئة اختبار.'
  },
  {
    slug: 'support-chatbot',
    title: 'شات بوت دعم عملاء ذكي',
    category: 'نظام وكلاء',
    status: 'نظام وكلاء - 2025',
    statusColor: 'blue',
    year: '2025',
    demo: true,
    cover: '/images/projects/support-chatbot.svg',
    coverAlt: '/images/projects/support-chatbot-alt.svg',
    summary: 'بوت مهذب يرد على الأسئلة الشائعة ويحوّل للبشر عند الحاجة.',
    role: 'مصمم الوكيل',
    tools: ['n8n', 'OpenAI', 'Webhooks'],
    problem: 'المحلات الصغيرة بترد على نفس الأسئلة طول اليوم وبتتأخر بالليل.',
    solution: 'وكيل AI مربوط بملف أسئلة شائعة، مع تحويل لموظف وسجل محادثات.',
    result: 'تجريبي: رد فوري على الأسئلة الشائعة في صندوق اختبار.'
  },
  {
    slug: 'life-tracker',
    title: 'متتبع المهام والمصاريف والعادات',
    category: 'وكيل شخصي',
    status: 'وكيل شخصي - 2026',
    statusColor: 'green',
    year: '2026',
    demo: true,
    cover: '/images/projects/life-tracker.svg',
    coverAlt: '/images/projects/life-tracker-alt.svg',
    summary: 'شات واحد لتسجيل المهام والفلوس والعادات مع ملخص أسبوعي.',
    role: 'المنفذ',
    tools: ['n8n', 'OpenAI', 'Google Sheets'],
    problem: 'المهام والمصاريف والعادات في 3 تطبيقات ومحدش بيفتحهم.',
    solution: 'متتبع بالشات: إضافة سريعة برسالة، ملخص AI أسبوعي، وعرض streaks بسيط.',
    result: 'تجريبي: التسجيل اليومي ياخد أقل من دقيقة في النموذج.'
  },
  {
    slug: 'allegro-listing-automation',
    title: 'أتمتة قوائم الماركت بليس',
    category: 'قصة خبرة',
    status: 'قصة خبرة - 2024',
    statusColor: 'blue',
    year: '2024',
    demo: false,
    cover: '/images/projects/allegro-listing-automation.svg',
    coverAlt: '/images/projects/allegro-listing-automation-alt.svg',
    summary: 'إزاي شغل Allegro كان أول خطوة ليا في الأتمتة.',
    role: 'أخصائي بائع (Allegro)',
    tools: ['أدوات القوائم', 'Sheets', 'أتمتة أساسية'],
    problem: 'عشرات المنتجات محتاجة رفع وصور وتخصيص لكل قطعة.',
    solution: 'استخدمت أداة أتمتة متقدمة على حساب البائع لرفع القوائم وتخصيصها بشكل أسرع وثابت.',
    result: 'شغل حقيقي: قوائم منتظمة وأول احتكاك بتفكير الأتمتة.'
  },
  {
    slug: 'motion-short-1',
    title: 'موشن شورت #1',
    category: 'فيديو',
    status: 'فيديو - 2026',
    statusColor: 'blue',
    year: '2026',
    demo: false,
    realVideo: 'short1',
    cover: '/images/projects/motion-short-1.svg',
    coverAlt: '/images/projects/motion-short-1-alt.svg',
    summary: 'شورت رأسي حقيقي مونتاج وتحريك إيهاب.',
    role: 'مونتاج + موشن',
    tools: ['مونتاج', 'موشن بالذكاء الاصطناعي'],
    problem: 'الفيديو القصير محتاج خطاف في أول ثانية.',
    solution: 'خطاف سريع، كابشن حركي، وقص متزامن مع الصوت بمقاس 9:16.',
    result: 'فيديو حقيقي — شاهده في صفحة Sidequests.'
  },
  {
    slug: 'motion-short-2',
    title: 'موشن شورت #2',
    category: 'فيديو',
    status: 'فيديو - 2026',
    statusColor: 'blue',
    year: '2026',
    demo: false,
    realVideo: 'short2',
    cover: '/images/projects/motion-short-2.svg',
    coverAlt: '/images/projects/motion-short-2-alt.svg',
    summary: 'شورت رأسي ثانٍ بموشن جرافيك بمساعدة AI.',
    role: 'مونتاج + موشن',
    tools: ['مونتاج', 'موشن بالذكاء الاصطناعي'],
    problem: 'الحفاظ على المشاهدة بعد الثانية الثالثة.',
    solution: 'فواصل بصرية، لعب بالزوم، وإيقاعات مكتوبة على الشاشة.',
    result: 'فيديو حقيقي — شاهده في صفحة Sidequests.'
  }
];

export const content = {
  en: {
    dir: 'ltr',
    person: {
      name: 'Ehab Nasser Ibrahim Ali',
      display: 'Ehab Nasser',
      headline: 'Junior AI Automation & Agentic Engineer',
      location: 'Alexandria, Egypt',
      bio: 'I build automation systems and AI agents with n8n, and ship software with AI-assisted (vibe) coding. I also make high-quality motion-graphics shorts with AI. Before tech I worked in online sales and community management, so I build things that actually help businesses.',
      email: 'ehabnasserwork@gmail.com',
      links: {
        linkedin: 'https://www.linkedin.com/in/ehab-nasser-ebrahim-82285a336/',
        facebook: 'https://www.facebook.com/ehab.nasser.134673/'
      }
    },
    nav: { work: 'WORK', sidequests: 'SIDEQUESTS', about: 'ABOUT', contact: 'CONTACT', menu: 'Menu', close: 'Close' },
    hero: {
      line1: "Hi, I'm Ehab",
      line2a: 'a',
      highlight1: 'Junior AI Automation & Agentic Engineer',
      line2b: 'who',
      highlight2: 'builds with n8n',
      line3: "and here's everything I know about",
      cards: ['Building Automations', 'Designing AI Agents', 'Motion + Play']
    },
    sections: {
      work: 'Work',
      sidequests: 'Sidequests',
      about: 'About',
      testimonials: 'Kind words',
      contact: 'Contact'
    },
    cardLabel: { view: 'VIEW', play: 'PLAY' },
    sidequestsBanner: "Take a look at my lil' Sidequests <3",
    projects: projectsEn,
    skills: [
      { group: 'Automation', items: ['n8n', 'Agentic workflows', 'API integrations', 'Webhooks'] },
      { group: 'Vibe coding', items: ['Open Code', 'Codex', 'Antigravity'] },
      { group: 'Creative', items: ['Video editing', 'AI motion graphics', 'Short-form content'] },
      { group: 'Soft', items: ['Sales', 'Communication', 'Pressure handling', 'Persistence'] }
    ],
    experience: [
      { title: 'Online Sales Manager', note: 'Ran day-to-day online sales and customer chat.' },
      { title: 'Marketplace Seller Specialist (Allegro)', note: 'Uploaded and customized listings on the company seller account with an advanced automation tool. My first step into automation.' },
      { title: 'Community Moderator & Content Creator', note: '2 years of moderating and making content people actually read.' }
    ],
    education: {
      school: 'Industrial Technical Institute, Alexandria',
      dept: 'Refrigeration & Air Conditioning — graduating 2027',
      now: 'Learning AI Agentic Engineering with n8n. Planning to study Computer Science, specializing in AI.',
      courses: ['AI Agentic Engineering with n8n', 'n8n with Karim']
    },
    testimonials: [],
    footer: { cta: "Let's build something useful.", note: 'Alexandria, Egypt — open to internships & freelance automation work.' },
    toggle: { on: 'animations: on', off: 'animations: paused', lang: 'عربي' },
    projectPage: { problem: 'Problem', built: 'What I built', how: 'How it works', result: 'Result', next: 'Next project', back: 'All work', meta: { role: 'Role', year: 'Year', tools: 'Tools' } },
    misc: { demo: 'DEMO', skip: 'Skip to content', lightboxClose: 'Close video', portraitAlt: 'Portrait placeholder for Ehab Nasser', videoFallback: 'Video file not added yet — drop it in /public/videos/', expTitle: 'Experience', eduTitle: 'Education', skillsTitle: 'What I do', learningTitle: 'Learning now', contactTitle: 'Say hi', shortsTitle: 'Motion shorts', experimentsTitle: 'Experiments', tapToPlay: 'Tap to play', shatterHint: 'psst — click the photo' }
  },
  ar: {
    dir: 'rtl',
    person: {
      name: 'إيهاب ناصر إبراهيم علي',
      display: 'إيهاب ناصر',
      headline: 'مهندس أتمتة ووكلاء ذكاء اصطناعي مبتدئ',
      location: 'الإسكندرية، مصر',
      bio: 'ببني أنظمة أتمتة ووكلاء ذكاء اصطناعي بـ n8n، وبنفذ مشاريع برمجية بالبرمجة بمساعدة الذكاء الاصطناعي. وبعمل شورتس موشن جرافيك بجودة عالية. قبل التقنية اشتغلت في المبيعات الأونلاين وإدارة المجتمعات، فببني حاجات تنفع البيزنس فعلًا.',
      email: 'ehabnasserwork@gmail.com',
      links: {
        linkedin: 'https://www.linkedin.com/in/ehab-nasser-ebrahim-82285a336/',
        facebook: 'https://www.facebook.com/ehab.nasser.134673/'
      }
    },
    nav: { work: 'شغلي', sidequests: 'تجارب', about: 'عني', contact: 'تواصل', menu: 'القائمة', close: 'إغلاق' },
    hero: {
      line1: 'أهلًا، أنا إيهاب',
      line2a: '',
      highlight1: 'مهندس أتمتة ووكلاء AI مبتدئ',
      line2b: '',
      highlight2: 'ببني بـ n8n',
      line3: 'و دي كل حاجة أعرفها عن',
      cards: ['بناء الأتمتة', 'تصميم وكلاء AI', 'موشن + لعب']
    },
    sections: {
      work: 'شغلي',
      sidequests: 'تجارب',
      about: 'عني',
      testimonials: 'كلام حلو',
      contact: 'تواصل'
    },
    cardLabel: { view: 'عرض', play: 'تشغيل' },
    sidequestsBanner: 'بص على تجاربي الصغيرة <3',
    projects: projectsAr,
    skills: [
      { group: 'أتمتة', items: ['n8n', 'Agentic workflows', 'API integrations', 'Webhooks'] },
      { group: 'برمجة بالـ AI', items: ['Open Code', 'Codex', 'Antigravity'] },
      { group: 'إبداعي', items: ['مونتاج', 'موشن بالذكاء الاصطناعي', 'محتوى قصير'] },
      { group: 'مهارات ناعمة', items: ['مبيعات', 'تواصل', 'تحمل الضغط', 'إصرار'] }
    ],
    experience: [
      { title: 'مدير مبيعات أونلاين', note: 'إدارة المبيعات اليومية وشات العملاء.' },
      { title: 'أخصائي بائع (Allegro)', note: 'رفع وتخصيص القوائم على حساب الشركة بأداة أتمتة متقدمة. أول خطوة ليا في الأتمتة.' },
      { title: 'مشرف مجتمع وصانع محتوى', note: 'سنتان من الإشراف وصناعة محتوى الناس بتقراه فعلًا.' }
    ],
    education: {
      school: 'المعهد الفني الصناعي، الإسكندرية',
      dept: 'تبريد وتكييف — تخرج 2027',
      now: 'أتعلم هندسة الوكلاء بـ n8n. وناوي أدرس Computer Science وأتخصص AI.',
      courses: ['AI Agentic Engineering with n8n', 'n8n with Karim']
    },
    testimonials: [],
    footer: { cta: 'يلا نبني حاجة مفيدة.', note: 'الإسكندرية، مصر — متاح لتدريب وشغل أتمتة حر.' },
    toggle: { on: 'الأنيميشن: شغال', off: 'الأنيميشن: واقف', lang: 'EN' },
    projectPage: { problem: 'المشكلة', built: 'اللي بنيته', how: 'إزاي شغال', result: 'النتيجة', next: 'المشروع التالي', back: 'كل الشغل', meta: { role: 'الدور', year: 'السنة', tools: 'الأدوات' } },
    misc: { demo: 'تجريبي', skip: 'تخطَّ إلى المحتوى', lightboxClose: 'إغلاق الفيديو', portraitAlt: 'صورة placeholder لإيهاب ناصر', videoFallback: 'ملف الفيديو لسه متضافش — حطه في /public/videos/', expTitle: 'الخبرة', eduTitle: 'التعليم', skillsTitle: 'بعمل إيه', learningTitle: 'أتعلم دلوقتي', contactTitle: 'قول أهلًا', shortsTitle: 'موشن شورتس', experimentsTitle: 'تجارب', tapToPlay: 'دوس للتشغيل', shatterHint: 'دوس على الصورة' }
  }
};
