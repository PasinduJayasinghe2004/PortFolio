import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobile = () => {
        setMobileOpen(!mobileOpen);
        document.body.classList.toggle('no-scroll');
    };

    const closeMobile = () => {
        setMobileOpen(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <h1 className="logo">Pasindu<span className="highlight">.</span></h1>
                <button
                    className={`mobile-toggle ${mobileOpen ? 'active' : ''}`}
                    aria-label="Toggle navigation"
                    onClick={toggleMobile}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
                    {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="nav-link"
                                onClick={closeMobile}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
