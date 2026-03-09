import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Asset Import
import logoImg from '../assests/logo.png'; 






const ShreeAnandamHero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    // Toggle Menu Function
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const styles = {
       
        navbar: {
            position: 'absolute',
            top: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 5%',
            zIndex: 100,
        },
        logo: {
            height: '50px',
            cursor: 'pointer',
        },
        // --- Hamburger Icon ---
        hamburger: {
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 101,
        },
        line: {
            width: '30px',
            height: '2px',
            backgroundColor: '#C4A77D',
            transition: '0.3s ease',
        },
        // --- Mobile Menu Overlay ---
        menuOverlay: {
            position: 'fixed',
            top: 0,
            right: isMenuOpen ? '0' : '-100%',
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(26, 26, 26, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '0.5s ease-in-out',
            zIndex: 99,
        },
        navLink: {
            color: '#F4E7D6',
            fontSize: '24px',
            textDecoration: 'none',
            margin: '15px 0',
            fontFamily: "'Cinzel', serif",
            letterSpacing: '2px',
            transition: '0.3s',
        },
        content: {
            position: 'relative',
            zIndex: 5,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '0 20px',
        }
    };

    return (
        <div style={styles.heroContainer}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;500&display=swap');
                .nav-item:hover { color: #C4A77D !important; transform: scale(1.1); }
                .line-top.open { transform: rotate(45deg) translate(5px, 6px); }
                .line-mid.open { opacity: 0; }
                .line-bot.open { transform: rotate(-45deg) translate(5px, -6px); }
            `}</style>

            <div style={styles.overlay} />

            {/* Navbar */}
            <nav style={styles.navbar}>
                <img src={logoImg} alt="Logo" style={styles.logo} />
                
                <div style={styles.hamburger} onClick={toggleMenu}>
                    <div className={`line-top ${isMenuOpen ? 'open' : ''}`} style={styles.line}></div>
                    <div className={`line-mid ${isMenuOpen ? 'open' : ''}`} style={styles.line}></div>
                    <div className={`line-bot ${isMenuOpen ? 'open' : ''}`} style={styles.line}></div>
                </div>
            </nav>

            {/* Hamburger Menu Content */}
            <div style={styles.menuOverlay}>
                {['Home','About', 'Rooms', 'Eventflow', 'Gallery', 'Testimonials','Contact'].map((item) => (
                    <a key={item} href={`#${item}`} onClick={toggleMenu} className="nav-item" style={styles.navLink}>
                        {item}
                    </a>
                ))}
                <button style={{
                    marginTop: '30px',
                    padding: '12px 40px',
                    backgroundColor: '#C4A77D',
                    border: 'none',
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}>BOOK NOW</button>
            </div>

        </div>
    );
};

export default ShreeAnandamHero;