# Portfolio Next.js - Struktur Folder

```
myportfolio/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route Groups untuk halaman-halaman
│   │   ├── about/                # Halaman About
│   │   │   └── page.js
│   │   ├── skills/               # Halaman Skills
│   │   │   └── page.js
│   │   ├── experience/           # Halaman Experience
│   │   │   └── page.js
│   │   ├── projects/             # Halaman Projects
│   │   │   └── page.js
│   │   └── contact/              # Halaman Contact
│   │       └── page.js
│   ├── components/               # Komponen-komponen yang dapat digunakan ulang
│   │   ├── ui/                   # Komponen UI dasar
│   │   │   ├── Button.js
│   │   │   ├── Card.js
│   │   │   └── ProgressBar.js
│   │   ├── layout/               # Komponen layout
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navigation.js
│   │   └── sections/             # Komponen section halaman
│   │       ├── About.js
│   │       ├── Skills.js
│   │       ├── Experience.js
│   │       ├── Projects.js
│   │       ├── Testimonials.js
│   │       └── Contact.js
│   ├── globals.css               # Global CSS
│   ├── layout.js                 # Root layout
│   └── page.js                   # Halaman utama (Home)
├── lib/                          # Utility functions dan data
│   ├── data.js                   # Data portfolio
│   └── utils.js                  # Helper functions
├── public/                       # Static assets
│   ├── images/                   # Gambar-gambar
│   │   ├── avatar.jpg
│   │   ├── projects/             # Gambar project
│   │   └── icons/                # Icon-icon
│   └── favicon.ico
├── styles/                       # Additional styles
│   └── components.css            # Component-specific styles
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies
└── README.md                     # Documentation
```

## Penjelasan Struktur:

### 1. **app/** - Next.js App Router

-   **`(pages)/`** - Route groups untuk mengelompokkan halaman-halaman
-   **`components/`** - Komponen React yang dapat digunakan ulang
    -   **`ui/`** - Komponen UI dasar (Button, Card, dll)
    -   **`layout/`** - Komponen layout (Header, Footer, Navigation)
    -   **`sections/`** - Komponen section untuk setiap bagian halaman

### 2. **lib/** - Library dan Utilities

-   **`data.js`** - Data portfolio (menggantikan database Laravel)
-   **`utils.js`** - Helper functions

### 3. **public/** - Static Assets

-   **`images/`** - Gambar-gambar portfolio
-   **`projects/`** - Screenshot project-project
-   **`icons/`** - Icon-icon yang digunakan

### 4. **styles/** - Additional Styles

-   File CSS tambahan jika diperlukan

## Keuntungan Struktur Ini:

1. **Terorganisir** - Setiap jenis file memiliki tempatnya sendiri
2. **Scalable** - Mudah menambah komponen atau halaman baru
3. **Maintainable** - Mudah menemukan dan mengubah file
4. **Next.js Best Practices** - Mengikuti konvensi Next.js 13+
5. **Component Reusability** - Komponen dapat digunakan di berbagai halaman
