import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
 faWind, faLandmark, faParking, faUserTie, 
   faUtensils, faMagic, faShieldHalved, 
  faWheelchair,  faOm, faLeaf, faLocationDot,
  faRing, faPray, faBriefcase, faChampagneGlasses, 
} from '@fortawesome/free-solid-svg-icons';

// Assets from your folder
import mpfHallImg from '../assests/mpf-hall.jpg'; 
import banquetImg from '../assests/banquet.jpg';
import lawnImg from '../assests/lawn-4000.jpg'; 


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const venueDetails = [
    { title: "MPF Hall", size: "8,000 Sq. Ft.", desc: "Multi-Purpose AC Space", icon: faLandmark, img: mpfHallImg },
    { title: "AC Banquet", size: "8,000 Sq. Ft.", desc: "Luxury Indoor Celebrations", icon: faWind, img: banquetImg },
    { title: "Big Lawn", size: "30,000 Sq. Ft.", desc: "Grand Destination Weddings", icon: faLeaf, img: lawnImg },
 
  ];

  const featureIcons = [
    { icon: faParking, text: "82k Sq. Ft. Parking" },
    { icon: faUserTie, text: "Elite Bridal Rooms" },
    { icon: faUtensils, text: "Premium Catering" },
    { icon: faMagic, text: "Themed Decoration" },
    { icon: faShieldHalved, text: "High-End Security" },
    { icon: faWheelchair, text: "Fully Accessible" }
  ];

  return (
    <section id="About" style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;500;600&display=swap');
        .glass-card:hover { transform: translateY(-10px); background: rgba(196, 167, 125, 0.1); border-color: #C4A77D; }
        .glass-card:hover img { transform: scale(1.1); }
        .feature-item:hover { color: #C4A77D; transform: translateX(5px); }
      `}</style>

      <div style={styles.container}>
        
        {/* --- SECTION 1: THE BRAND STORY --- */}
        <div style={styles.heroIntro} data-aos="fade-up">
          <span style={styles.goldTag}>Managed by Shri Maheshwari Jankalyan Trust </span>
          <h2 style={styles.mainTitle}>A LANDMARK OF LUXURY <br/>SPREAD OVER 86,000 SQ. FT. </h2>
          <p style={styles.mainDesc}>
            Located at Indore’s prime bypass, <b>Shree Anandam</b> is an ethically managed sanctuary. 
            We provide an all-in-one infrastructure  where 86,000 sq. ft. of grand celebrations, 
            premium suites, and spiritual tranquility converge.
          </p>
        </div>

        {/* --- SECTION 2: THE VENUE & STAY GRID (All Images Used Here) --- */}
        <div style={styles.grid}>
          {venueDetails.map((venue, i) => (
            <div key={i} style={styles.glassCard} className="glass-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <div style={styles.cardImgContainer}>
                <img src={venue.img} alt={venue.title} style={styles.cardImg} />
              </div>
              <div style={styles.cardContent}>
                <FontAwesomeIcon icon={venue.icon} style={styles.cardIcon} />
                <h4 style={styles.cardTitle}>{venue.title} </h4>
                <h5 style={styles.cardSize}>{venue.size} </h5>
                <p style={styles.cardDesc}>{venue.desc} </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 3: AMENITIES & HIGHLIGHTS (All Icons Used Here) --- */}
        <div style={styles.flexSection}>
          <div style={styles.textCol} data-aos="fade-right">
            <h3 style={styles.sideHeading}>Why Choose Shree Anandam? </h3>
            <div style={styles.featureGrid}>
              {featureIcons.map((f, i) => (
                <div key={i} style={styles.featureItem} className="feature-item">
                  <FontAwesomeIcon icon={f.icon} style={styles.listIcon}/>
                  <span>{f.text} </span>
                </div>
              ))}
            </div>
            
            <div style={styles.trustBox}>
              <FontAwesomeIcon icon={faOm} style={{fontSize: '24px', marginRight: '15px'}} />
              <p><b>2 Sacred Pooja Rooms:</b> Peaceful spaces for all rituals.</p>
            </div>
          </div>

          <div style={styles.highlightCol} data-aos="fade-left">
            <div style={styles.perfectForBox}>
              <h4 style={{fontFamily: 'Cinzel', marginBottom: '20px', color: '#C4A77D'}}>Perfect For: </h4>
              <div style={styles.tagGrid}>
                {[ 
                  {i: faRing, t: "Weddings"}, {i: faPray, t: "Spirituals"}, 
                  {i: faBriefcase, t: "Corporate"}, {i: faChampagneGlasses, t: "Socials"} 
                ].map((item, idx) => (
                  <div key={idx} style={styles.tagItem}>
                    <FontAwesomeIcon icon={item.i} /> {item.t} 
                  </div>
                ))}
              </div>
              <div style={styles.locationDetail}>
                <FontAwesomeIcon icon={faLocationDot} style={{color: '#C4A77D', marginRight: '10px'}} />
                <span>Prime Bypass Location, Indore </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 0', backgroundColor: '#080808', color: '#fff', overflow: 'hidden' },
  container: { maxWidth: '1240px', margin: '0 auto', padding: '0 25px' },
  heroIntro: { textAlign: 'center', marginBottom: '80px' },
  goldTag: { color: '#C4A77D', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '13px', display: 'block', marginBottom: '15px' },
  mainTitle: { fontFamily: 'Cinzel', fontSize: 'clamp(28px, 4.5vw, 48px)', lineHeight: '1.2', marginBottom: '25px' },
  mainDesc: { maxWidth: '850px', margin: '0 auto', fontSize: '17px', color: '#bbb', lineHeight: '1.8', fontFamily: 'Montserrat' },
  
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '100px' },
  glassCard: { background: '#111', borderRadius: '15px', overflow: 'hidden', border: '1px solid rgba(196, 167, 125, 0.1)', transition: '0.4s' },
  cardImgContainer: { height: '200px', overflow: 'hidden' },
  cardImg: { width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s' },
  cardContent: { padding: '25px', textAlign: 'center' },
  cardIcon: { fontSize: '28px', color: '#C4A77D', marginBottom: '15px' },
  cardTitle: { fontFamily: 'Cinzel', fontSize: '20px', marginBottom: '8px' },
  cardSize: { color: '#C4A77D', fontSize: '15px', fontWeight: '600', marginBottom: '10px', display: 'block' },
  cardDesc: { fontSize: '13px', color: '#888' },

  flexSection: { display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'center' },
  textCol: { flex: '1.5', minWidth: '320px' },
  sideHeading: { fontFamily: 'Cinzel', fontSize: '32px', marginBottom: '35px' },
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' },
  featureItem: { display: 'flex', alignItems: 'center', gap: '15px', fontFamily: 'Montserrat', fontSize: '15px', transition: '0.3s' },
  listIcon: { color: '#C4A77D', fontSize: '18px', width: '20px' },
  trustBox: { display: 'flex', alignItems: 'center', background: 'rgba(196,167,125,0.05)', padding: '20px', borderRadius: '10px', borderLeft: '3px solid #C4A77D' },

  highlightCol: { flex: '1', minWidth: '320px' },
  perfectForBox: { background: '#161616', padding: '40px', borderRadius: '20px', border: '1px solid #333' },
  tagGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' },
  tagItem: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#ccc' },
  locationDetail: { paddingTop: '20px', borderTop: '1px solid #333', display: 'flex', alignItems: 'center', fontSize: '14px', color: '#C4A77D' }
};

export default About;