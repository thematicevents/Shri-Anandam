import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


// Import your hero image from assets
import heroImage from '../assests/hero2.jpg'; 

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const styles = {
    heroSection: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
      zIndex: 1,
    },
    container: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      color: '#fff',
      padding: '0 20px',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: 'rgba(196, 167, 125, 0.2)',
      border: '1px solid #C4A77D',
      padding: '8px 20px',
      borderRadius: '50px',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '20px',
      color: '#C4A77D',
    },
    title: {
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(40px, 8vw, 90px)',
      lineHeight: '1.1',
      marginBottom: '20px',
      textShadow: '2px 4px 10px rgba(0,0,0,0.3)',
    },
    subtitle: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 'clamp(16px, 2vw, 22px)',
      fontWeight: '300',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: '#F4E7D6',
      marginBottom: '40px',
    },
    btnContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    primaryBtn: {
      padding: '18px 40px',
      backgroundColor: '#C4A77D',
      color: '#1a1a1a',
      border: 'none',
      fontSize: '14px',
      fontWeight: '700',
      letterSpacing: '2px',
      cursor: 'pointer',
      transition: '0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    secondaryBtn: {
      padding: '18px 40px',
      backgroundColor: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.5)',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '2px',
      cursor: 'pointer',
      transition: '0.3s',
    }
  };

  return (
    <section style={styles.heroSection} id='Home'>
      {/* Google Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;600&display=swap');
        .hero-btn:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        .btn-outline:hover { background: #fff !important; color: #1a1a1a !important; }
      `}</style>

      <div style={styles.overlay} />

      <div style={styles.container}>
       

        {/* Main Heading */}
        <h1 style={styles.title} data-aos="zoom-out" data-aos-delay="200">
          WELCOME TO <br />
          <span style={{ color: '#C4A77D' }}>SHREE ANANDAM</span>
        </h1>

        {/* Tagline */}
        <p style={styles.subtitle} data-aos="fade-up" data-aos-delay="400">
          Where Heritage Meets Modern Luxury
        </p>

      
      </div>
    </section>
  );
};

export default Hero;