// Portfolio matnlari shu yerda tahrirlanadi. Maketdagi tajriba va natija
// raqamlari nashrdan oldin egasi tomonidan tasdiqlanishi kerak.
export const profile = {
  name: 'Isroilov Ravshanbek',
  role: 'Backend dasturchi & AI mentori',
  headline: "Katta Backend Dasturchi & Sun’iy Intellekt (AI) Mentori",
  intro: "Yuqori yuklamali taqsimlangan tizimlar, mikroxizmatlar arxitekturasi va zamonaviy LLM/AI yechimlarini ishlab chiqish hamda joriy qilish bo‘yicha mutaxassis. Yangi avlod muhandislariga amaliy murabbiylik qilaman.",
  email: 'isroilovravshan42@gmail.com',
  telegram: 'https://t.me/Ravshanbek_Isroilov',
  telegramLabel: '@Ravshanbek_Isroilov',
  phone: '+998957881803',
  phoneLabel: '+998 95 788 18 03',
  github: 'https://github.com/ravshanbekh',
  portrait: '/assets/portrait.jpg',
  logo: '/assets/monogram.png',
}

export const navigation = [
  { id: 'about', label: 'Men haqimda' },
  { id: 'skills', label: "Ko‘nikmalar" },
  { id: 'experience', label: 'Tajriba' },
  { id: 'projects', label: 'Loyihalar' },
  { id: 'contact', label: "Bog‘lanish" },
]

export const stack = ['Python', 'Go (Golang)', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes', 'LangChain', 'PyTorch']

export const metrics = [
  { label: 'Tajriba', value: '5+', note: 'Yillik professional tajriba', accent: 'cyan' },
  { label: 'Loyihalar', value: '20+', note: 'Backend & AI loyihalari', accent: 'green' },
  { label: 'Mentorlik', value: '150+', note: 'Yetishib chiqqan shogirdlar', accent: 'violet' },
  { label: 'Ishonchlilik', value: '99.9%', note: 'Tizimlar barqarorligi', accent: 'white' },
]

export const skills = [
  {
    title: 'Backend & Arxitektura', eyebrow: 'CORE BACKEND', icon: 'code',
    description: 'Taqsimlangan, kam kechikishli va barqaror servislar yaratish, toza mikroxizmatlar tizimi.',
    tags: ['Python (FastAPI, Django)', 'Go (Golang)', 'REST API & gRPC', 'Microservices', 'Event-driven Architecture'],
  },
  {
    title: 'Sun’iy Intellekt & Data', eyebrow: 'ARTIFICIAL INTELLIGENCE', icon: 'brain',
    description: 'Katta til modellari, korporativ bilimlar bazasiga ulangan RAG tizimlari va neyron tarmoqlar.',
    tags: ['LLM & Fine-tuning', 'LangChain & LlamaIndex', 'RAG tizimlari', 'PyTorch', 'Vector DBs'],
  },
  {
    title: 'Ma’lumotlar Bazalari & Keshlash', eyebrow: 'DATA PERSISTENCE', icon: 'database',
    description: 'Katta hajmli jadvallar optimallashuvi, indekslash, tranzaksiyalar xavfsizligi va tezkor kesh.',
    tags: ['PostgreSQL', 'Redis', 'ClickHouse', 'Elasticsearch', 'Query Optimization'],
  },
  {
    title: 'DevOps, Bulut & Asboblar', eyebrow: 'INFRASTRUCTURE', icon: 'cloud',
    description: 'Konteynerlashtirish, doimiy integratsiya va real vaqtda kuzatish tizimlari.',
    tags: ['Docker & Kubernetes', 'GitHub Actions', 'Linux & Nginx', 'AWS / Cloud', 'Prometheus & Grafana'],
  },
]

export const experience = [
  {
    period: '2023 — hozirgacha', type: 'Faoliyatda', title: 'Senior Backend & AI Solutions Architect',
    place: 'IT kompaniya',
    description: 'LLM asosidagi aqlli qidiruv va tahlil tizimlari backend qismini loyihalash, yuqori yuklamali mikroxizmatlarni boshqarish hamda korporativ xavfsizlik standartlarini tatbiq etish.',
  },
  {
    period: '2022 — hozirgacha', type: 'Mentorlik', title: 'Sun’iy Intellekt va Backend Mentori',
    place: 'IT akademiya / ta’lim markazi',
    description: 'Python, algoritmlar, ma’lumotlar bazasi optimallashuvi, API dizayni va zamonaviy AI vositalari bo‘yicha amaliy murabbiylik.',
  },
  {
    period: '2021 — 2023', type: 'Fintech', title: 'Backend Dasturchi',
    place: 'Fintech / enterprise loyiha',
    description: 'To‘lov tizimlari integratsiyasi, xavfsiz tranzaksiyalar oqimi va ma’lumotlar bazasi so‘rovlarini optimallashtirish.',
  },
  {
    period: '2019 — 2021', type: 'Junior / Middle', title: 'Python Dasturchi',
    place: 'Dasturiy ta’minot kompaniyasi',
    description: 'REST API, avtomatlashtirish skriptlari, webhook mexanizmlari va uchinchi tomon xizmatlari bilan integratsiya.',
  },
]

export const projects = [
  {
    code: '#RAG_ARCHITECTURE', metric: 'LATENCY: 120ms', role: 'Bosh arxitektor & AI backend injener',
    title: 'Enterprise AI Knowledge Engine (RAG)',
    description: 'Tashkilot ichki hujjatlari bo‘yicha semantik qidiruv va avtomatik javob beruvchi korporativ LLM platformasi.',
    tags: ['Python', 'FastAPI', 'LangChain', 'Qdrant', 'Docker'],
  },
  {
    code: '#FINTECH_GATEWAY', metric: '3,000+ TPS', role: 'Lead backend dasturchi',
    title: 'High-Load Fintech Payment Gateway',
    description: 'Taqsimlangan to‘lov shlyuzi, tranzaksiya yaxlitligi va xatoliklarni kompensatsiya qilish mexanizmlari.',
    tags: ['Go', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
  },
  {
    code: '#EDTECH_AI', metric: 'ACTIVE BOT', role: 'Muallif & dasturchi',
    title: 'AI Mentorlik & Ta’lim Boti',
    description: 'Talabalar kodini tahlil qilib, xatolarni tushuntiruvchi va yo‘nalish ko‘rsatuvchi AI platforma.',
    tags: ['Python', 'OpenAI API', 'PostgreSQL', 'Redis', 'Docker'],
  },
]
