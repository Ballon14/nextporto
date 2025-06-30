# MyPortfolio - Next.js + MongoDB

Portfolio web modern dengan Next.js App Router, TailwindCSS, dan MongoDB.

## ✨ Fitur Utama

-   CRUD data Skills, Experience, Projects via halaman admin (dengan autentikasi sederhana)
-   Data dinamis dari MongoDB (bukan hardcoded)
-   UI modern, responsive, dan mudah dikustomisasi
-   Admin dashboard dengan tampilan khusus
-   Deploy-ready (bisa dijalankan di server dengan PM2)

## 🚀 Instalasi & Setup

1. **Clone repo & install dependencies**

    ```bash
    git clone <repo-url>
    cd myportfolio
    npm install
    ```

2. **Buat file `.env.local`**

    ```env
    MONGODB_URI=mongodb://username:password@host:port/?authSource=admin
    ```

3. **Jalankan development**

    ```bash
    npm run dev
    # buka http://localhost:3000
    ```

4. **Akses halaman admin**
    - Buka `/admin`
    - Login: `admin` / `admin123`

## 🏗️ Build & Deploy Production

1. **Build project**
    ```bash
    npm run build
    ```
2. **Jalankan dengan PM2**
    ```bash
    pm2 start npm --name "myportfolio" -- start
    ```

## 🗂️ Struktur Folder

-   `app/` - Source utama Next.js (pages, components, sections)
-   `models/` - Schema Mongoose
-   `lib/` - Koneksi MongoDB
-   `public/` - Asset statis (gambar, icon)

## 📝 Customisasi

-   Edit data profile di `app/page.js` (atau buat dinamis dari database)
-   Tambah/ubah komponen di `app/components/`
-   Ubah style di `app/globals.css` atau `tailwind.config.js`

## 💡 Catatan

-   Pastikan MongoDB bisa diakses dari server/localhost
-   Restart server setiap kali mengubah schema model
-   Untuk fitur lebih lanjut (auth, upload gambar, dsb) bisa dikembangkan sesuai kebutuhan

---

Made with ❤️ by Iqbal
