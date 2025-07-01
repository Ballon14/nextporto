import "./globals.css"
import { Inter } from "next/font/google"
import ProgrammerBackground from "./components/layout/ProgrammerBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: {
        default: "Portfolio - Programmer Gabut yang Lagi Belajar",
        template: "%s | Portfolio",
    },
    description:
        "Portfolio website dengan tema programmer yang sedang belajar, dibuat menggunakan Next.js",
    keywords: [
        "portfolio",
        "programmer",
        "developer",
        "nextjs",
        "react",
        "web developer",
        "frontend",
        "backend",
        "fullstack",
        "tailwindcss",
    ],
    authors: [{ name: "Programmer Gabut" }],
    openGraph: {
        title: "Portfolio - Programmer Gabut yang Lagi Belajar",
        description:
            "Portfolio website dengan tema programmer yang sedang belajar, dibuat menggunakan Next.js",
        url: "https://your-portfolio-url.com",
        siteName: "Portfolio Gabut",
        images: [
            {
                url: "/images/avatar.jpg",
                width: 400,
                height: 400,
                alt: "Avatar Programmer Gabut",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio - Programmer Gabut yang Lagi Belajar",
        description:
            "Portfolio website dengan tema programmer yang sedang belajar, dibuat menggunakan Next.js",
        images: ["/images/avatar.jpg"],
        creator: "@gabut_programmer",
    },
    icons: {
        icon: "/favicon.ico",
    },
}

export const viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <meta name="theme-color" content="#1e293b" />
            </head>
            <body
                className={inter.className}
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    overflowX: "hidden",
                }}
            >
                <ProgrammerBackground />
                <main style={{ position: "relative", zIndex: 1 }}>
                    {children}
                </main>
            </body>
        </html>
    )
}
