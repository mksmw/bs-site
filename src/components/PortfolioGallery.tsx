'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export interface PortfolioImage {
    id: string;
    src: string;
    alt: string;
    year: string;
}

export default function PortfolioGallery({ initialImages }: { initialImages: PortfolioImage[] }) {
    const [filter, setFilter] = useState('All');
    const [images, setImages] = useState<PortfolioImage[]>(initialImages);

    // Create a unique array of years derived from the metadata
    const years = ['All', ...Array.from(new Set(initialImages.map(img => img.year)))].sort((a, b) => {
        if (a === 'All') return -1;
        if (b === 'All') return 1;
        return b.localeCompare(a); // Newest years first
    });

    useEffect(() => {
        if (filter === 'All') {
            setImages(initialImages);
        } else {
            setImages(initialImages.filter(img => img.year === filter));
        }
    }, [filter, initialImages]);
    // Determine responsive column count
    const [colCount, setColCount] = useState(3);

    useEffect(() => {
        const updateCols = () => {
            if (window.innerWidth <= 768) setColCount(1);
            else if (window.innerWidth <= 1024) setColCount(2);
            else setColCount(3);
        };
        updateCols();
        window.addEventListener('resize', updateCols);
        return () => window.removeEventListener('resize', updateCols);
    }, []);

    // Distribute images round-robin into columns (row-order visual loading)
    const columns: PortfolioImage[][] = Array.from({ length: colCount }, () => []);
    images.forEach((img, i) => {
        columns[i % colCount].push(img);
    });

    return (
        <div className="portfolio-wrapper">
            {/* Filters */}
            <div className="filter-bar">
                {years.map(year => (
                    <button
                        key={year}
                        onClick={() => setFilter(year)}
                        className={`filter-btn ${filter === year ? 'active' : ''}`}
                    >
                        {year}
                    </button>
                ))}
            </div>

            {/* Masonry columns with round-robin distribution */}
            <div className="gallery-masonry">
                {columns.map((col, colIndex) => (
                    <div className="masonry-column" key={colIndex}>
                        {col.map((img, imgIndex) => (
                            <FadeInImage key={img.id} image={img} index={colIndex + imgIndex * colCount} />
                        ))}
                    </div>
                ))}
                {images.length === 0 && (
                    <div className="empty-state">No images found for this category.</div>
                )}
            </div>
        </div>
    );
}

function FadeInImage({ image, index }: { image: PortfolioImage; index: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Unobserve once it fires
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`masonry-item ${isVisible ? 'reveal-up' : 'hidden-down'}`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            <div className="image-container">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={2400}
                    style={{ width: '100%', height: 'auto' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="portfolio-img"
                />
            </div>
        </div>
    );
}
