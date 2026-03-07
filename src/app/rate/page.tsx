'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Image from 'next/image';

function RateCardContent() {
    const searchParams = useSearchParams();
    const key = searchParams.get('key');

    if (key !== 'ilovemcr') {
        return (
            <main className="rate-page rate-denied">
                <p>This page is private.</p>
            </main>
        );
    }

    return (
        <main className="rate-page">
            <div className="container rate-container">

                {/* ─── Header ─── */}
                <header className="rate-card-header">
                    <h1 className="rate-title serif">Breezy Samudra <span className="rate-slash">/</span> Model</h1>
                </header>

                {/* ─── Measurements ─── */}
                <section className="rate-stats">
                    <div className="stat-pair">
                        <span className="stat-label">Height</span>
                        <span className="stat-value">165 cm</span>
                    </div>
                    <div className="stat-pair">
                        <span className="stat-label">Shoes</span>
                        <span className="stat-value">40</span>
                    </div>
                    <div className="stat-pair">
                        <span className="stat-label">Bust</span>
                        <span className="stat-value">85 cm</span>
                    </div>
                    <div className="stat-pair">
                        <span className="stat-label">Hair</span>
                        <span className="stat-value">Brown</span>
                    </div>
                    <div className="stat-pair">
                        <span className="stat-label">Waist</span>
                        <span className="stat-value">65 cm</span>
                    </div>
                    <div className="stat-pair">
                        <span className="stat-label">Eyes</span>
                        <span className="stat-value">Dark Brown</span>
                    </div>
                    <div className="stat-pair">
                        <span className="stat-label">Hips</span>
                        <span className="stat-value">72 cm</span>
                    </div>
                </section>

                {/* ─── Photo Grid ─── */}
                <section className="rate-photos">
                    <div className="rate-photo-item">
                        <Image
                            src="/resource/pages/about/model-bare/AYAA0290.JPEG"
                            alt="Model reference — front"
                            width={600}
                            height={800}
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                    <div className="rate-photo-item">
                        <Image
                            src="/resource/pages/about/model-bare/AYAA0310.JPEG"
                            alt="Model reference — profile"
                            width={600}
                            height={800}
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                    <div className="rate-photo-item">
                        <Image
                            src="/resource/pages/about/model-bare/AYAA0315.JPEG"
                            alt="Model reference — three-quarter"
                            width={600}
                            height={800}
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                    <div className="rate-photo-item">
                        <Image
                            src="/resource/pages/about/model-bare/AYAA0361.JPEG"
                            alt="Model reference — full body"
                            width={600}
                            height={800}
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                </section>

                {/* ─── Professional Modeling Rates ─── */}
                <section className="rate-section">
                    <h2 className="rate-section-title serif">Professional Modeling</h2>
                    <div className="rate-table">
                        <div className="rate-row">
                            <span className="rate-item">Full Day (8 Hours)</span>
                            <span className="rate-dots"></span>
                            <span className="rate-price">IDR 3.000.000</span>
                        </div>
                        <div className="rate-row">
                            <span className="rate-item">Half Day (4 Hours)</span>
                            <span className="rate-dots"></span>
                            <span className="rate-price">IDR 1.500.000</span>
                        </div>
                        <div className="rate-row">
                            <span className="rate-item">Overtime (Per Hour)</span>
                            <span className="rate-dots"></span>
                            <span className="rate-price">IDR 400.000</span>
                        </div>
                    </div>
                    <p className="rate-note">*Hours include time needed for hair, makeup, wardrobe, and break</p>
                </section>

                {/* ─── UGC Content Creation Rates ─── */}
                <section className="rate-section">
                    <h2 className="rate-section-title serif">UGC Content Creation</h2>
                    <div className="rate-table">
                        <div className="rate-row">
                            <span className="rate-item">1 UGC Video (15–30 sec)</span>
                            <span className="rate-dots"></span>
                            <span className="rate-price">IDR 300.000</span>
                        </div>
                        <div className="rate-row">
                            <span className="rate-item">1 UGC Video (30–60 sec)</span>
                            <span className="rate-dots"></span>
                            <span className="rate-price">IDR 450.000</span>
                        </div>
                        <div className="rate-row">
                            <span className="rate-item">3 Video Bundle</span>
                            <span className="rate-dots"></span>
                            <span className="rate-price">IDR 1.100.000</span>
                        </div>
                        <div className="rate-row">
                            <span className="rate-item">5 Video Bundle</span>
                            <span className="rate-dots"></span>
                            <span className="rate-price">IDR 1.500.000</span>
                        </div>
                    </div>
                    <p className="rate-note">*Turnaround time per video is 2 days after receiving the product</p>
                </section>

                {/* ─── Footer Contact ─── */}
                <footer className="rate-footer">
                    <div className="rate-footer-left">
                        <span>@breezysamudra</span>
                        <span>behance.net/breezysamudra</span>
                    </div>
                    <div className="rate-footer-right">
                        <span>breezysamudra@gmail.com</span>
                        <span>+62 857-1268-4377</span>
                    </div>
                </footer>

            </div>
        </main>
    );
}

export default function RatePage() {
    return (
        <Suspense fallback={
            <main className="rate-page rate-denied">
                <p>Loading…</p>
            </main>
        }>
            <RateCardContent />
        </Suspense>
    );
}
