import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBed, faExpand, faWifi, faTv, faWind, 
  faCoffee, faVrCardboard, faImage 
} from '@fortawesome/free-solid-svg-icons';

// Assets
import suiteImg from '../assests/suite.jpg';
import luxuryImg from '../assests/luxury2.jpg';

const Rooms = () => {
  const [show360, setShow360] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const roomFeatures = [
    { icon: faExpand, text: "Spacious Layout" },
    { icon: faWind, text: "Fully AC" },
    { icon: faWifi, text: "High-Speed WiFi" },
    { icon: faTv, text: "Smart TV" },
    { icon: faCoffee, text: "Tea/Coffee Maker" },
    { icon: faBed, text: "Premium Linen" },
  ];

  return (
    <section id="Rooms" style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
        .room-card { border: 1px solid #222; transition: 0.4s ease; }
        .room-card:hover { border-color: #C4A77D; }
        .img-zoom { transition: 0.6s ease; }
        .room-card:hover .img-zoom { transform: scale(1.05); }
        .view-toggle-btn:hover { background: #fff !important; color: #000 !important; }
      `}</style>

      <div style={styles.container}>
        <div style={styles.header} data-aos="fade-up">
          <span style={styles.goldTag}>Royal Accommodations</span>
          <h2 style={styles.mainTitle}>STAY IN LUXURY</h2>
          <p style={styles.subText}>58 Premium rooms designed for ultimate comfort and elegance.</p>
        </div>

        <div style={styles.grid}>
          {/* VIP SUITE ROOMS */}
          <div style={styles.roomCard} className="room-card" data-aos="fade-right">
            <div style={styles.imgWrapper}>
              {!show360 ? (
                <img src={suiteImg} alt="Royal Suite" style={styles.roomImg} className="img-zoom" />
              ) : (
                <iframe 
                  title="Suite Room 360 Virtual Tour"
                  src="https://www.google.com/maps/embed?pb=!4v1772781895056!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFBqcENybWdF!2m2!1d22.64125800058884!2d75.89817513980692!3f66.6657988264624!4f-19.912692671581823!5f0.7820865974627469"
                  style={{ width: '100%', height: '100%', border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              )}
              
              <div style={styles.badge}>8 SUITES AVAILABLE</div>
              
              <button 
                onClick={() => setShow360(!show360)}
                style={styles.toggleBtn}
                className="view-toggle-btn"
              >
                <FontAwesomeIcon icon={show360 ? faImage : faVrCardboard} style={{marginRight: '8px'}} />
                {show360 ? "Show Photo" : "View in 360°"}
              </button>
            </div>

            <div style={styles.cardContent}>
              <h3 style={styles.roomName}>Royal Suite Room</h3>
              <p style={styles.roomSize}>1,000 SQ. FT. | VIP LUXURY</p>
              <p style={styles.roomDesc}>
                Our expansive suites offer a separate living area, king-sized beds, 
                and high-end decor, perfect for the bride, groom, or VIP dignitaries.
              </p>
              <div style={styles.iconGrid}>
                {roomFeatures.map((f, i) => (
                  <div key={i} style={styles.iconItem}>
                    <FontAwesomeIcon icon={f.icon} style={styles.icon} />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LUXURY DOUBLE ROOMS */}
          <div style={styles.roomCard} className="room-card" data-aos="fade-left">
            <div style={styles.imgWrapper}>
              <img src={luxuryImg} alt="Luxury Room" style={styles.roomImg} className="img-zoom" />
              <div style={styles.badge}>50 ROOMS AVAILABLE</div>
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.roomName}>Luxury Double Room</h3>
              <p style={styles.roomSize}>300 SQ. FT. | MODERN COMFORT</p>
              <p style={styles.roomDesc}>
                Elegant and functional rooms designed for guest comfort, featuring 
                modern en-suite bathrooms and premium amenities for a relaxing stay.
              </p>
              <div style={styles.iconGrid}>
                {roomFeatures.map((f, i) => (
                  <div key={i} style={styles.iconItem}>
                    <FontAwesomeIcon icon={f.icon} style={styles.icon} />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 0', backgroundColor: '#080808', color: '#fff' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  header: { textAlign: 'center', marginBottom: '60px' },
  goldTag: { color: '#C4A77D', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '13px' },
  mainTitle: { fontFamily: 'Cinzel', fontSize: '42px', margin: '10px 0' },
  subText: { color: '#888', fontFamily: 'Montserrat' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' },
  roomCard: { background: '#111', borderRadius: '15px', overflow: 'hidden' },
  imgWrapper: { position: 'relative', height: '350px', overflow: 'hidden', backgroundColor: '#000' },
  roomImg: { width: '100%', height: '100%', objectFit: 'cover' },
  badge: { position: 'absolute', top: '20px', left: '20px', background: '#C4A77D', color: '#000', padding: '6px 12px', fontSize: '11px', fontWeight: 'bold', borderRadius: '4px', zIndex: 10 },
  toggleBtn: { position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff', border: '1px solid #C4A77D', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', fontFamily: 'Montserrat', fontSize: '12px', fontWeight: '600', zIndex: 10, display: 'flex', alignItems: 'center', transition: '0.3s' },
  cardContent: { padding: '30px' },
  roomName: { fontFamily: 'Cinzel', fontSize: '24px', marginBottom: '5px' },
  roomSize: { color: '#C4A77D', fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '15px', display: 'block' },
  roomDesc: { color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' },
  iconGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', borderTop: '1px solid #222', paddingTop: '20px' },
  iconItem: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#888', textAlign: 'center' },
  icon: { color: '#C4A77D', fontSize: '16px' }
};

export default Rooms;