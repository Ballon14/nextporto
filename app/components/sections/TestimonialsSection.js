import Card from "../ui/Card"

export default function TestimonialsSection({ testimonials }) {
    const safeTestimonials = Array.isArray(testimonials) ? testimonials : []
    return (
        <section
            id="testimonials"
            className="py-20 bg-dark-800"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Testimonials
                    </h2>
                    <p className="text-dark-300 max-w-2xl mx-auto">
                        Beberapa kata dari teman, mentor, dan rekan kerja
                        tentang perjalanan belajar saya.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {safeTestimonials.map((testimonial, idx) => (
                        <Card
                            key={idx}
                            variant="elevated"
                            className="p-6 flex flex-col items-center text-center"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <div className="w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center text-4xl mb-4">
                                {/* Avatar placeholder, bisa diganti dengan <Image /> jika ada gambar */}
                                <span role="img" aria-label="avatar">
                                    👤
                                </span>
                            </div>
                            <div className="mb-2 text-lg font-bold text-white">
                                {testimonial.name}
                            </div>
                            <div className="text-primary-400 text-sm mb-2">
                                {testimonial.role} @ {testimonial.company}
                            </div>
                            <div className="text-dark-300 mb-4">
                                "{testimonial.content}"
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
