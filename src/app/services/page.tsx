'use client';
import { useEffect, useRef } from 'react';

export default function ServicesPage() {
    const contentRef = useRef<HTMLDivElement>(null);

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

    return (
        <main className="services-page" ref={contentRef}>
            <div className="container">
                <h1 className="page-header serif animate-in hidden-down">Services</h1>

                {/* Service 1: UGC */}
                <section className="service-block animate-in hidden-down">
                    <div className="service-header">
                        <span className="service-number">01</span>
                        <h2 className="service-title serif">User Generated Content Creation</h2>
                    </div>
                    <div className="service-content">
                        <p className="service-desc">
                            In an era where authenticity drives engagement, User Generated Content bridges the gap between your brand and its audience. I craft compelling, brand-centric content tailored for social media channels, advertising platforms, websites, and email marketing — all designed to feel genuinely human while elevating your brand narrative.
                        </p>
                        <div className="service-details">
                            <div className="service-detail-group">
                                <h3 className="detail-label">Package Includes</h3>
                                <ul className="detail-list">
                                    <li>Concept &amp; Hook</li>
                                    <li>Professional Filming &amp; Editing</li>
                                    <li>Captions/Text overlay</li>
                                    <li>1 Revision</li>
                                    <li>Platform-Optimized Deliverables</li>
                                </ul>
                            </div>
                            <div className="service-detail-group">
                                <h3 className="detail-label"></h3>
                                <ul className="detail-list">
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="service-divider"></div>

                {/* Service 2: Professional Modeling */}
                <section className="service-block animate-in hidden-down">
                    <div className="service-header">
                        <span className="service-number">02</span>
                        <h2 className="service-title serif">Professional Modeling Services</h2>
                    </div>
                    <div className="service-content">
                        <p className="service-desc">
                            With over a decade of experience across high-fashion editorials, commercial campaigns, and brand collaborations, I bring a refined versatility to every project. Whether captured through the stillness of photography or the dynamism of videography, my work is defined by precision, adaptability, and an unwavering commitment to bringing your creative vision to life.
                        </p>
                        <div className="service-details">
                            <div className="service-detail-group">
                                <h3 className="detail-label">Photography</h3>
                                <ul className="detail-list">
                                    <li>Editorial &amp; High-Fashion</li>
                                    <li>Commercial &amp; Advertising</li>
                                    <li>Lookbook &amp; Catalog</li>
                                    <li>Beauty &amp; Skincare</li>
                                </ul>
                            </div>
                            <div className="service-detail-group">
                                <h3 className="detail-label">Videography</h3>
                                <ul className="detail-list">
                                    <li>Brand Campaign Films</li>
                                    <li>Social Media Video Content</li>
                                    <li>Product Showcase &amp; Demonstrations</li>
                                    <li>Motion Editorial</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
