'use client';
import { useEffect, useRef, useState } from 'react';

export default function ContactPage() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-up');
                        entry.target.classList.remove('hidden-down');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = contentRef.current?.querySelectorAll('.animate-in');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:breezysamudra@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
    };

    return (
        <main className="contact-page" ref={contentRef}>
            <div className="container">
                <h1 className="page-header serif animate-in hidden-down">Get in Touch</h1>
                <p className="contact-subtitle animate-in hidden-down">
                    Have a project in mind? Let&apos;s bring your vision to life.
                </p>

                <div className="contact-layout">
                    {/* Email Form */}
                    <form className="contact-form animate-in hidden-down" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact-name">Your Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Full name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">Your Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-subject">Subject</label>
                            <input
                                id="contact-subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Project inquiry"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button type="submit" className="btn btn-send">Send Message</button>
                    </form>

                    {/* Side Panel */}
                    <div className="contact-side animate-in hidden-down">
                        <div className="contact-option">
                            <h3 className="contact-option-label">Prefer a Direct Chat?</h3>
                            <a
                                href="https://wa.me/6285712684377"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                WhatsApp Me
                            </a>
                        </div>

                        <div className="contact-socials">
                            <h3 className="contact-option-label">Follow Along</h3>
                            <div className="social-icons">
                                {/* Behance */}
                                <a href="https://www.behance.net/breezysmith" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h5.025c-.154-1.545-1.108-2.2-2.477-2.2-1.453 0-2.352.771-2.548 2.2zM9.2 15.711c0 1.306-1.021 1.728-2.182 1.728h-4.018v-3.506h3.918c1.262 0 2.282.463 2.282 1.778zm-6.2-10.711v14h7.218c3.17 0 4.782-1.629 4.782-3.794 0-2.276-1.686-3.098-2.869-3.359v-.04c1.014-.309 2.232-1.318 2.232-3.145 0-2.412-1.936-3.662-4.582-3.662h-6.781zm2 2h3.918c1.382 0 2.282.561 2.282 1.777 0 1.263-.97 1.823-2.282 1.823h-3.918v-3.6z" />
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/breezysamudra" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                {/* TikTok */}
                                <a href="https://www.tiktok.com/@breezysamudra" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-link">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.6z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
