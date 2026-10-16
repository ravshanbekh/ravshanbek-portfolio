# Isroilov Ravshanbek portfolio

Stitch ZIP maketidagi desktop va mobil dizayn asosida yozilgan React + Vite portfolio. Statik sayt bo‘lgani uchun Vercel’da server yoki maxfiy kalit talab qilmaydi.

## Ishga tushirish

Node.js 24 o‘rnating, so‘ng:

```bash
npm ci
npm run dev
```

`http://localhost:5173` ni oching. Ishlab chiqarish uchun:

```bash
npm test
npm run build
npm run preview
```

## Vercel’ga joylash

1. GitHub repozitoriyasini Vercel’ga **Add New → Project** orqali ulang.
2. **Framework Preset: Vite** va **Root Directory: `./`** ni tanlang. `vercel.json` build buyrug‘i va `dist` chiqish papkasini belgilaydi.
3. **Deploy** tugmasini bosing. `main` branch’ga keyingi pushlar production versiyasini yangilaydi.

Maxfiy kalit yoki environment variable kerak emas. Domenni Vercel Project Settings → Domains bo‘limidan ulang.

## Kontentni yangilash

- Ism, aloqa, tajriba, ko‘nikma va loyihalar: [`src/content.js`](src/content.js)
- Rang va responsive ko‘rinish: [`src/styles.css`](src/styles.css)
- Bo‘lim komponentlari: [`src/App.jsx`](src/App.jsx)
- Portret va logotip: `public/assets/`

ZIPdagi portret va logotip maket aktivlari sifatida lokal saqlandi. Portret haqiqiy shaxsiy surat bo‘lmasa, uni o‘z fotosuratingizga almashtiring. Maketdan olingan **5+ yil, 20+ loyiha, 150+ bitiruvchi, 99.9%, 120ms va 3,000+ TPS** kabi raqamlarni ham nashrdan oldin tasdiqlang yoki tahrirlang.

LinkedIn va CV havolalari berilmagani uchun saytda ko‘rsatilmaydi. Kontakt formasi xabarni serverga yubormaydi: tashrif buyuruvchining email ilovasida to‘ldirilgan xatni ochadi; yuborishni tashrif buyuruvchi o‘zi tasdiqlaydi.

## Tuzilma

```text
src/
  App.jsx          React bo‘limlari va navigatsiya
  content.js       Tahrirlanadigan portfolio kontenti
  contact.js       Email xati yaratish funksiyasi
  contact.test.js  Kontakt oqimi va havolalar testi
  styles.css       Desktop, planshet va mobil stillar
public/assets/     ZIP maketidan lokal aktivlar
vercel.json        Vercel build sozlamasi
```
