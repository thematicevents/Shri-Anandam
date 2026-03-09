import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, faPhone, faEnvelope, faClock, 
  faArrowRight, faHeart 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, faInstagram, faWhatsapp, faYoutube 
} from '@fortawesome/free-brands-svg-icons';

// Assets
import logoImg from '../assests/logo.png';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer id="footer" style={styles.footer}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap');
        .footer-link:hover { color: #C4A77D !important; transform: translateX(8px); }
        .social-icon:hover { background: #C4A77D !important; color: #1a1a1a !important; transform: translateY(-5px); }
        .map-container iframe { width: 100% !important; height: 250px !important; border-radius: 12px; filter: grayscale(1) invert(1) contrast(1.2); }
        .map-container iframe:hover { filter: grayscale(0) invert(0); transition: 0.5s ease; }
      `}</style>

      <div style={styles.container}>
        
        {/* --- COLUMN 1: BRAND IDENTITY --- */}
        <div style={styles.column} data-aos="fade-up">
          <img src={logoImg} alt="Shree Anandam" style={styles.logo} />
          <p style={styles.brandDesc}>
            Managed by <b>Shri Maheshwari Jankalyan Trust</b>. A premier destination 
            offering 86,000 sq. ft. of luxury, heritage, and spiritual tranquility 
            at Indore Bypass.
          </p>
          <div style={styles.socialRow}>
            <a href="/" style={styles.socialIcon} className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="/" style={styles.socialIcon} className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="/" style={styles.socialIcon} className="social-icon"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="/" style={styles.socialIcon} className="social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>

        {/* --- COLUMN 2: QUICK NAVIGATION --- */}
        <div style={styles.column} data-aos="fade-up" data-aos-delay="100">
          <h4 style={styles.colTitle}>Quick Links</h4>
          <div style={styles.linkList}>
            {['Home','About', 'Rooms', 'Eventflow', 'Gallery', 'Testimonials','Contact'].map((link) => (
              <a key={link} href={`#${link.replace('#')}`} style={styles.footerLink} className="footer-link">
                <FontAwesomeIcon icon={faArrowRight} style={styles.arrow} /> {link}
              </a>
            ))}
          </div>
        </div>

        {/* --- COLUMN 3: CONTACT DETAILS --- */}
        <div style={styles.column} data-aos="fade-up" data-aos-delay="200">
          <h4 style={styles.colTitle}>Reach Us</h4>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faLocationDot} style={styles.contactIcon} />
            <p style={styles.contactText}>
              34/35, Gram Mirjapur, Near Tejaji Nagar, Bypass Road, Indore - 452020
            </p>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} style={styles.contactIcon} />
            <p style={styles.contactText}>9111115444</p>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.contactIcon} />
            <p style={styles.contactText}>thethematicevent@gmail.com</p>
          </div>
          <div style={styles.contactItem}>
            <FontAwesomeIcon icon={faClock} style={styles.contactIcon} />
            <p style={styles.contactText}>Available 24/7 for Guest Support</p>
          </div>
        </div>

        {/* --- COLUMN 4: LOCATION MAP --- */}
        <div style={styles.column} data-aos="fade-up" data-aos-delay="300">
          <h4 style={styles.colTitle}>Our Location</h4>
          <div className="map-container" style={styles.mapWrapper}>
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58917.044791491106!2d75.8216738486328!3d22.642029999999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fb1e3f28ceff%3A0x16945c477d0fa625!2sShri%20Anandam%20Pro.%20Shri%20Maheshwari%20Jankalyan%20Trust!5e0!3m2!1sen!2sin!4v1772721030904!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Anandam Location"
             ></iframe>
          </div>
        </div>

      </div>

      {/* --- COPYRIGHT BAR --- */}
      <div style={styles.copyrightBar}>
        <div style={styles.copyContainer}>
          <p>© {new Date().getFullYear()} Shree Anandam. All Rights Reserved.</p>
          <p style={styles.devBy}>
            Designed with <FontAwesomeIcon icon={faHeart} style={{color: '#C4A77D'}} /> By Prince
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: '#0A0A0A', color: '#fff', paddingTop: '80px', borderTop: '1px solid rgba(196, 167, 125, 0.2)', fontFamily: 'Montserrat' },
  container: { maxWidth: '1240px', margin: '0 auto', padding: '0 25px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' },
  
  column: { display: 'flex', flexDirection: 'column', gap: '20px' },
  logo: { height: '60px', width: 'fit-content', marginBottom: '10px' },
  brandDesc: { fontSize: '14px', lineHeight: '1.7', color: '#AAA', maxWidth: '300px' },
  
  socialRow: { display: 'flex', gap: '12px', marginTop: '10px' },
  socialIcon: { width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#1A1A1A', color: '#C4A77D', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.4s', textDecoration: 'none', border: '1px solid rgba(196,167,125,0.2)' },
  
  colTitle: { fontFamily: 'Cinzel', fontSize: '18px', color: '#C4A77D', marginBottom: '10px', letterSpacing: '2px' },
  linkList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  footerLink: { textDecoration: 'none', color: '#BBB', fontSize: '14px', transition: '0.3s', display: 'flex', alignItems: 'center', gap: '10px' },
  arrow: { fontSize: '10px', color: '#C4A77D' },
  
  contactItem: { display: 'flex', gap: '15px', alignItems: 'flex-start' },
  contactIcon: { color: '#C4A77D', marginTop: '4px', fontSize: '16px' },
  contactText: { fontSize: '14px', color: '#BBB', margin: 0, lineHeight: '1.5' },
  
  mapWrapper: { width: '100%', borderRadius: '12px', overflow: 'hidden' },

  copyrightBar: { borderTop: '1px solid #1A1A1A', padding: '25px 0', marginTop: '20px' },
  copyContainer: { maxWidth: '1240px', margin: '0 auto', padding: '0 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '13px', color: '#888' },
  devBy: { letterSpacing: '1px' }
};

export default Footer;