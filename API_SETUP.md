# API Experience Setup Guide

## 1. Environment Variables

Buat file `.env.local` di root project dengan konfigurasi berikut:

```env
# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/myportfolio

# Untuk MongoDB Atlas, gunakan format:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myportfolio?retryWrites=true&w=majority
```

## 2. MongoDB Setup

### Local MongoDB

1. Install MongoDB di komputer Anda
2. Jalankan MongoDB service
3. Buat database `myportfolio`

### MongoDB Atlas (Cloud)

1. Daftar di [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Buat cluster baru
3. Dapatkan connection string
4. Update `MONGODB_URI` di `.env.local`

## 3. Testing API

### Manual Test

1. Jalankan development server:

    ```bash
    npm run dev
    ```

2. Test dengan Postman atau curl:

**POST /api/experiences** (String Period Format)

```bash
curl -X POST http://localhost:3000/api/experiences \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Junior Developer",
    "company": "Startup Gabut",
    "period": "2023 - Sekarang",
    "description": "Belajar coding sambil ngopi dan bikin error yang kreatif.",
    "technologies": ["React", "Laravel", "JavaScript"],
    "icon": "💼"
  }'
```

**POST /api/experiences** (Object Period Format)

```bash
curl -X POST http://localhost:3000/api/experiences \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Software Developer",
    "company": "Tech Company",
    "location": "Jakarta, Indonesia",
    "period": {
      "start": "2023-01",
      "end": "Present"
    },
    "description": "Mengembangkan aplikasi web menggunakan React dan Node.js",
    "technologies": ["React", "Node.js", "MongoDB"],
    "achievements": ["Meningkatkan performa 40%"],
    "order": 1
  }'
```

**GET /api/experiences**

```bash
curl http://localhost:3000/api/experiences
```

### Automated Test

Jalankan test script:

```bash
# Test dengan data minimal
node debug-experience.js

# Test dengan data dari lib/data.js
node test-with-data.js

# Test dengan data lengkap
node test-experience-api.js
```

## 4. Troubleshooting

### Error 500 - MongoDB Connection

-   Pastikan MongoDB berjalan
-   Periksa `MONGODB_URI` di `.env.local`
-   Pastikan network connection ke MongoDB

### Error 400 - Validation

-   Pastikan semua field required terisi:
    -   `title` (required)
    -   `company` (required)
    -   `description` (required)
    -   `period` (required) - bisa string atau object

### Error 409 - Duplicate

-   Experience dengan title dan company yang sama sudah ada

## 5. API Endpoints

### GET /api/experiences

Mengambil semua experiences, diurutkan berdasarkan order dan createdAt.

### POST /api/experiences

Membuat experience baru.

**Request Body:**

```json
{
  "title": "string (required)",
  "company": "string (required)",
  "location": "string (optional)",
  "period": "string | object (required)",
  "description": "string (required)",
  "technologies": ["string"] (optional),
  "achievements": ["string"] (optional),
  "icon": "string (optional)",
  "order": "number (optional, default: 0)"
}
```

**Period Format:**

-   **String format**: `"2023 - Sekarang"` atau `"2022 - 2023"`
-   **Object format**: `{"start": "2023-01", "end": "Present"}`

## 6. Improvements Made

1. **Flexible Period Handling**: Mendukung format string dan object untuk field period
2. **Better Error Handling**: Menambahkan error logging dan specific error messages
3. **Enhanced Validation**: Validasi yang lebih ketat untuk semua field
4. **Robust Data Processing**: Handling untuk array dan string input
5. **MongoDB Connection**: Improved connection options dan error handling
6. **Test Scripts**: Multiple test scripts untuk berbagai skenario
7. **Icon Field**: Menambahkan field icon yang digunakan di data.js
8. **Pre-save Middleware**: Otomatis konversi period string ke object format

## 7. Data Format Compatibility

API sekarang mendukung format data yang sama dengan `lib/data.js`:

```javascript
// Format yang didukung:
{
  title: "Junior Developer",
  company: "Startup Gabut",
  period: "2023 - Sekarang", // String format
  description: "Description...",
  technologies: ["React", "Laravel"],
  icon: "💼"
}
```
