'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);

  return (
    <>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <Image
            src="/resource/pages/hero/main-hero-shot.jpeg"
            alt="Breezy Samudra Modeling Portrait"
            fill
            className="hero-bg"
            priority
          />
          <div className="container hero-content">
            <h1 className="hero-title">Breezy<br />Samudra</h1>
            <p className="hero-subtitle">
              Versatile editorial model & video talent<br />
              Based in Yogyakarta, Indonesia
            </p>
          </div>
        </section>

        {/* Value Props Section */}
        <section ref={aboutRef} id="about" className="container value-props">
          <div className="prop-card">
            <span className="prop-number">01</span>
            <h2 className="prop-title serif">Versatile Editorial Look</h2>
            <p className="prop-desc">
              Adapting to high-fashion atelier shoots, conceptual artistry, and commercial beauty with absolute precision.
            </p>
          </div>
          <div className="prop-card">
            <span className="prop-number">02</span>
            <h2 className="prop-title serif">Diverse Capabilities</h2>
            <p className="prop-desc">
              From delicate jewelry showcases to dynamic clothing brand campaigns, delivering exactly what the project demands.
            </p>
          </div>
          <div className="prop-card">
            <span className="prop-number">03</span>
            <h2 className="prop-title serif">Video Modeling</h2>
            <p className="prop-desc">
              Bringing products to life through motion. Experiential video modeling that captures the essence of your brand&apos;s narrative.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="portfolio" className="gallery-section container">
          <h2 className="section-title serif">Selected Works</h2>
          <div className="gallery-grid">
            <div className="gallery-item g-large">
              <Image src="/resource/archives/2024/Pusaka_-_Flower_Universe-4673.jpeg" alt="Editorial Jewelry" fill sizes="(max-width: 768px) 100vw, 66vw" />
            </div>
            <div className="gallery-item g-small">
              <Image src="/resource/archives/2024/Pusaka_-_Flower_Universe-4725.jpeg" alt="Editorial Jewelry" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="gallery-item g-small">
              <Image src="/resource/archives/2024/Pusaka_-_Flower_Universe-4755.jpeg" alt="Editorial Jewelry" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="gallery-item g-large">
              <Image src="/resource/archives/2024/Pusaka_-_Flower_Universe-4891.jpeg" alt="Editorial Jewelry" fill sizes="(max-width: 768px) 100vw, 66vw" />
            </div>
            <div className="gallery-item g-medium">
              <Image src="/resource/archives/2024/Pusaka_-_Flower_Universe-4906.jpeg" alt="Editorial Jewelry" fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="gallery-item g-medium">
              <Image src="/resource/archives/2024/Pusaka_-_Flower_Universe-4927.jpeg" alt="Editorial Jewelry" fill sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="gallery-item g-large">
              <Image src="/resource/archives/2024/Pusaka_-_Flower_Universe-4980.jpeg" alt="Editorial Jewelry" fill sizes="(max-width: 768px) 100vw, 66vw" />
            </div>
            <div className="gallery-item g-small">
              <Image src="/resource/archives/2024/Pusaka_-_Flower_Universe-5039.jpeg" alt="Editorial Jewelry" fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="cta-section">
          <h2 className="cta-title serif">Book a Shoot!</h2>
          <div className="cta-buttons">
            <a href="mailto:breezysamudra@gmail.com" className="btn btn-primary">
              Email Me
            </a>
            <a href="https://wa.me/6285712684377" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              WhatsApp Chat
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>© 2026 Breezy Samudra. All rights reserved.</div>
        <div>Yogyakarta, ID</div>
      </footer>
    </>
  );
}
