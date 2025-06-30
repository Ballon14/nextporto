# Portfolio Next.js - Programmer Gabut

## Fitur

-   Struktur folder modular dan scalable
-   SEO friendly (metadata, semantic HTML, OpenGraph, dsb)
-   Optimasi gambar dengan Next.js `<Image />`
-   Styling modern dengan Tailwind CSS
-   Komponen reusable dan mudah dikembangkan

## Struktur Folder

```
myportfolio/
├── app/
│   ├── page.js
│   ├── about/
│   │   └── page.js
│   ├── skills/
│   │   └── page.js
│   ├── experience/
│   │   └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── sections/
│   │   │   ├── AboutSection.js
│   │   │   ├── SkillsSection.js
│   │   │   ├── ExperienceSection.js
│   │   │   ├── ProjectsSection.js
│   │   │   ├── TestimonialsSection.js
│   │   │   └── ContactSection.js
│   │   └── ui/
│   │       ├── Button.js
│   │       ├── Card.js
│   │       └── ProgressBar.js
│   ├── globals.css
│   └── layout.js
├── lib/
│   └── data.js
├── public/
│   └── images/
│       ├── avatar.jpg
│       ├── projects/
│       └── icons/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## SEO & Optimasi

-   Metadata SEO di setiap halaman (`export const metadata` di setiap `page.js`)
-   OpenGraph & Twitter Card sudah diatur di `app/layout.js`
-   Gunakan semantic tag (`<main>`, `<section>`, `<footer>`, dsb)
-   Gambar dioptimasi dengan Next.js `<Image />`
-   Favicon sudah disiapkan (`/public/favicon.ico`)

## Jalankan Project

```bash
pnpm install
pnpm dev
```

## Customisasi

-   Ubah data di `lib/data.js`
-   Tambah gambar di `public/images/`
-   Tambah/ubah komponen di `app/components/`

---

> Dibuat dengan ❤️ oleh programmer gabut yang lagi belajar coding.
