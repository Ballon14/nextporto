export default function About({ profile, stats }) {
    // Debug log
    if (typeof window !== "undefined") {
        console.log("AboutSection stats:", stats)
    }
    return (
        <section id="about" className="py-20 bg-dark-800" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Tentang Saya
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto">
                        Programmer gabut yang sedang dalam perjalanan belajar
                        coding. Meskipun masih banyak yang belum tahu, tapi
                        semangat belajar tetap tinggi! 🚀
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Info */}
                    <div className="space-y-6" data-aos="fade-right">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {profile.name}
                            </h3>
                            <p className="text-dark-300 mb-4 leading-relaxed">
                                {profile.description}
                            </p>
                            <div className="flex items-center text-dark-400 mb-4">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {profile.location}
                            </div>
                            <div className="flex items-center text-dark-400">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                {profile.email}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="card text-center">
                                <div className="text-2xl font-bold text-primary-400 mb-2">
                                    {typeof stats.projects === "number"
                                        ? stats.projects
                                        : typeof stats.projects === "string"
                                        ? stats.projects
                                        : 0}
                                </div>
                                <div className="text-sm text-dark-300">
                                    Projects
                                </div>
                            </div>
                            <div className="card text-center">
                                <div className="text-2xl font-bold text-primary-400 mb-2">
                                    {typeof stats.experience === "number"
                                        ? stats.experience
                                        : typeof stats.experiences === "number"
                                        ? stats.experiences
                                        : typeof stats.experiences === "string"
                                        ? stats.experiences
                                        : 0}
                                </div>
                                <div className="text-sm text-dark-300">
                                    Experience
                                </div>
                            </div>
                            <div className="card text-center">
                                <div className="text-2xl font-bold text-primary-400 mb-2">
                                    {typeof stats.clients === "number"
                                        ? stats.clients
                                        : typeof stats.clients === "string"
                                        ? stats.clients
                                        : 0}
                                </div>
                                <div className="text-sm text-dark-300">
                                    Clients
                                </div>
                            </div>
                            <div className="card text-center">
                                <div className="text-2xl font-bold text-primary-400 mb-2">
                                    {typeof stats.coffee === "number"
                                        ? stats.coffee
                                        : typeof stats.coffee === "string"
                                        ? stats.coffee
                                        : 0}
                                </div>
                                <div className="text-sm text-dark-300">
                                    Coffee
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Avatar & Fun Facts */}
                    <div className="space-y-6" data-aos="fade-left">
                        <div className="card text-center">
                            <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-6xl">
                                👨‍💻
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">
                                Fun Facts About Me
                            </h4>
                            <div className="space-y-3 text-left">
                                <div className="flex items-start">
                                    <span className="text-2xl mr-3">☕</span>
                                    <div>
                                        <div className="font-medium text-white">
                                            Coffee Addict
                                        </div>
                                        <div className="text-sm text-dark-300">
                                            Tidak bisa coding tanpa kopi
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-2xl mr-3">🐛</span>
                                    <div>
                                        <div className="font-medium text-white">
                                            Bug Hunter
                                        </div>
                                        <div className="text-sm text-dark-300">
                                            Spesialis menemukan bug yang tidak
                                            sengaja
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-2xl mr-3">🎯</span>
                                    <div>
                                        <div className="font-medium text-white">
                                            Stack Overflow Lover
                                        </div>
                                        <div className="text-sm text-dark-300">
                                            Teman terbaik saat debugging
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-2xl mr-3">🚀</span>
                                    <div>
                                        <div className="font-medium text-white">
                                            Continuous Learner
                                        </div>
                                        <div className="text-sm text-dark-300">
                                            Selalu ingin belajar hal baru
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Current Status */}
                        <div className="card">
                            <h4 className="text-xl font-bold text-white mb-4">
                                Status Saat Ini
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-dark-300">
                                        Mood Coding
                                    </span>
                                    <span className="text-primary-400">
                                        🔥 Semangat!
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-dark-300">
                                        Level Error
                                    </span>
                                    <span className="text-yellow-400">
                                        😅 Masih tinggi
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-dark-300">
                                        Kopi Tersisa
                                    </span>
                                    <span className="text-green-400">
                                        ☕ Selalu ada
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-dark-300">
                                        Motivasi
                                    </span>
                                    <span className="text-primary-400">
                                        💪 Keep Learning!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
