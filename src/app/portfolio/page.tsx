import React from 'react';
import fs from 'fs';
import path from 'path';
import PortfolioGallery, { PortfolioImage } from '../../components/PortfolioGallery';

export const metadata = {
    title: 'Portfolio | Breezy Samudra',
    description: 'Selected modeling works and projects by Breezy Samudra sorted by year.',
};

export default async function PortfolioPage() {
    const archivesDir = path.join(process.cwd(), 'public', 'resource', 'archives');
    let imageFiles: { filename: string, year: string, relPath: string }[] = [];

    try {
        const yearDirs = fs.readdirSync(archivesDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        for (const year of yearDirs) {
            const yearDirPath = path.join(archivesDir, year);
            const files = fs.readdirSync(yearDirPath).filter(file =>
                file.match(/\.(jpg|jpeg|png|webp|avif)$/i)
            );
            for (const file of files) {
                imageFiles.push({
                    filename: file,
                    year: year,
                    relPath: `/resource/archives/${year}/${file}`
                });
            }
        }
    } catch (error) {
        console.error('Error reading archives directory:', error);
    }

    // Sort newest year first, then prioritize "Pusaka" images, then alphanumerically
    imageFiles.sort((a, b) => {
        if (a.year !== b.year) {
            return b.year.localeCompare(a.year); // Descending year
        }
        const aIsPusaka = a.filename.toLowerCase().includes('pusaka');
        const bIsPusaka = b.filename.toLowerCase().includes('pusaka');
        if (aIsPusaka && !bIsPusaka) return -1;
        if (!aIsPusaka && bIsPusaka) return 1;
        return a.filename.localeCompare(b.filename); // Ascending within group
    });

    const imagesData: PortfolioImage[] = imageFiles.map((fileInfo) => ({
        id: fileInfo.relPath,
        src: fileInfo.relPath,
        alt: `Modeling Portfolio ${fileInfo.year}`,
        year: fileInfo.year
    }));

    return (
        <main className="portfolio-page">
            <div className="container">
                <h1 className="section-title serif archive-title">The Archive</h1>
                <PortfolioGallery initialImages={imagesData} />
            </div>
        </main>
    );
}
