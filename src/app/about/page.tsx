'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutPage() {
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
        <main className="about-page" ref={contentRef}>
            <div className="container">
                <h1 className="page-header serif animate-in hidden-down">About</h1>

                <div className="about-layout">
                    <div className="about-image-col animate-in hidden-down">
                        <div className="about-image-wrapper">
                            <Image
                                src="/resource/pages/about/pfp.png"
                                alt="Breezy Samudra — Professional Model"
                                width={800}
                                height={1000}
                                style={{ width: '100%', height: 'auto' }}
                                priority
                            />
                        </div>
                    </div>

                    <div className="about-text-col">
                        <p className="about-greeting serif animate-in hidden-down">Hi, I&apos;m Breezy!</p>

                        <p className="about-body animate-in hidden-down">
                            Welcome to my world of modeling. I am a professional model based in the vibrant city of Yogyakarta, Indonesia, bringing over 10 years of rich and diverse experience in the fashion and commercial industry.
                        </p>

                        <p className="about-body animate-in hidden-down">
                            My journey has taken me across the cities of Indonesia, allowing me to gain extensive knowledge and expertise that I bring to every project.
                        </p>

                        <p className="about-body animate-in hidden-down">
                            With a deep passion for skincare, I understand the importance of maintaining a healthy and radiant appearance — both on and off the camera. My love for cooking &amp; baking keeps me grounded and fuels my creativity, while my enthusiasm for traveling adds a splash of excitement and adventure to my life.
                        </p>

                        <p className="about-body animate-in hidden-down">
                            As a dedicated professional, I am committed to delivering exceptional results for brands, ensuring that every shoot is a seamless and enjoyable experience. Whether it&apos;s a high-fashion editorial, a commercial campaign, or a brand collaboration, I bring my unique blend of experience, passion, and energy to create stunning visuals that resonate with audiences.
                        </p>

                        <p className="about-body animate-in hidden-down">
                            Your satisfaction is my validation — and nothing makes me happier than seeing clients express their contentment when I help make their vision a reality.
                        </p>

                        <p className="about-cta serif animate-in hidden-down">
                            Let&apos;s create something beautiful together.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
