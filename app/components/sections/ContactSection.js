"use client"
import Card from "../ui/Card"
import Button from "../ui/Button"

export default function Contact({ profile }) {
    return (
        <section id="contact" className="py-20 bg-dark-800" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Hubungi Saya
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto">
                        Tertarik untuk berkolaborasi atau sekedar ngobrol
                        tentang coding? Jangan ragu untuk menghubungi saya! 😊
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6" data-aos="fade-right">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Informasi Kontak
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium text-white">
                                            Email
                                        </div>
                                        <div className="text-dark-300">
                                            {profile.email}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium text-white">
                                            Location
                                        </div>
                                        <div className="text-dark-300">
                                            {profile.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Social Links */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Social Media
                            </h3>

                            <div className="grid grid-cols-1 gap-4">
                                <Button
                                    variant="outline"
                                    className="justify-start"
                                    onClick={() =>
                                        window.open(profile.github, "_blank")
                                    }
                                >
                                    <svg
                                        className="w-5 h-5 mr-3"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </Button>

                                <Button
                                    variant="outline"
                                    className="justify-start"
                                    onClick={() =>
                                        window.open(profile.linkedin, "_blank")
                                    }
                                >
                                    <svg
                                        className="w-5 h-5 mr-3"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </Button>

                                <Button
                                    variant="outline"
                                    className="justify-start"
                                    onClick={() =>
                                        window.open(profile.twitter, "_blank")
                                    }
                                >
                                    <svg
                                        className="w-5 h-5 mr-3"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                    Twitter
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div data-aos="fade-left">
                        <Card className="p-6">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Kirim Pesan
                            </h3>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500"
                                        placeholder="Masukkan nama Anda"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500"
                                        placeholder="Masukkan email Anda"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Subjek
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500"
                                        placeholder="Subjek pesan"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Pesan
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 resize-none"
                                        placeholder="Tulis pesan Anda di sini..."
                                    ></textarea>
                                </div>

                                <Button variant="primary" className="w-full">
                                    Kirim Pesan
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>

                {/* Fun Message */}
                <div className="mt-16 text-center" data-aos="fade-up">
                    <Card className="p-8 max-w-2xl mx-auto">
                        <div className="text-4xl mb-4">☕</div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            Ngopi Virtual?
                        </h3>
                        <p className="text-dark-300">
                            Kalau lagi di Purworejo, bisa ngopi bareng sambil
                            diskusi coding! Atau kalau jauh, bisa video call
                            sambil ngopi masing-masing 😄
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}
