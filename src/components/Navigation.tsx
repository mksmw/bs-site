'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <div className={`site-logo ${isScrolled ? 'scrolled' : ''}`}>
                <Link href="/">Breezy Samudra</Link>
            </div>

            {/* Desktop Navigation */}
            <header className={`nav-header ${isScrolled || pathname !== '/' ? 'nav-scrolled' : ''}`}>
                <nav className="nav-links">
                    {navItems.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={pathname === item.href ? 'nav-active' : ''}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Mobile Hamburger Toggle */}
            <button
                className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''} ${isScrolled || pathname !== '/' ? 'scrolled' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </button>

            {/* Full Screen Mobile Menu */}
            <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}>
                <nav className="mobile-nav-links">
                    {navItems.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
