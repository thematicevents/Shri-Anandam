import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faOm,  faMusic, faRing, 
  faChampagneGlasses, 
} from '@fortawesome/free-solid-svg-icons';

const EventFlow = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const flow = [
    {
      day: "Day 01 - Morning",
      event: "Spiritual Start & Haldi",
      venue: "Pooja Room & Chota Lawn",
      desc: "Begin your journey with blessings in our sacred Pooja rooms, followed by a vibrant Haldi by the lawn.",
      icon: faOm,
      size: "8,000 Sq. Ft. Area"
    },
    {
      day: "Day 01 - Evening",
      event: "Sangeet & Ring Ceremony",
      venue: "AC Banquet Hall",
      desc: "Celebrate with music and dance in our fully soundproofed, pillarless luxury banquet hall.",
      icon: faMusic,
      size: "8,000 Sq. Ft. AC Space"
    },
    {
      day: "Day 02 - Morning",
      event: "The Grand Wedding",
      venue: "Bada Lawn (Main Stage)",
      desc: "Exchange vows under the open sky in our massive 30,000 sq. ft. lawn with hilly bypass vibes.",
      icon: faRing,
      size: "30,000 Sq. Ft. Grand Space"
    },
    {
      day: "Day 02 - Night",
      event: "Grand Reception",
      venue: "Podium & Multi-Purpose Hall",
      desc: "A royal feast for your guests with premium catering setup in the 8,000 sq. ft. MPF hall.",
      icon: faChampagneGlasses,
      size: "Combined 16,000 Sq. Ft."
    }
  ];

  return (
    <section id="Eventflow" style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
        .flow-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: rgba(196, 167, 125, 0.2); transform: translateX(-50%); }
        .flow-dot { width: 20px; height: 20px; background: #000; border: 2px solid #C4A77D; border-radius: 50%; position: absolute; left: 50%; transform: translateX(-50%); z-index: 2; }
        @media (max-width: 768px) {
          .flow-line { left: 30px; }
          .flow-dot { left: 30px; }
          .flow-item { padding-left: 60px !important; text-align: left !important; width: 100% !important; }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.header} data-aos="fade-up">
          <span style={styles.goldTag}>The Experience</span>
          <h2 style={styles.mainTitle}>YOUR CELEBRATION JOURNEY</h2>
          <p style={styles.subText}>How a typical 2-day destination wedding unfolds at Shree Anandam.</p>
        </div>

        <div style={styles.timelineWrapper}>
          <div className="flow-line"></div>
          
          {flow.map((item, i) => (
            <div 
              key={i} 
              style={{...styles.flowItem, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'}} 
              className="flow-item"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div style={styles.contentBox}>
                <span style={styles.dayText}>{item.day}</span>
                <h4 style={styles.eventTitle}>{item.event}</h4>
                <p style={styles.venueName}><FontAwesomeIcon icon={item.icon} style={{marginRight: '10px'}} /> {item.venue}</p>
                <p style={styles.descText}>{item.desc}</p>
                <span style={styles.sizeBadge}>{item.size}</span>
              </div>
              
              <div className="flow-dot"></div>
              
              <div style={styles.emptySpace}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 0', backgroundColor: '#080808', color: '#fff', overflow: 'hidden' },
  container: { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' },
  header: { textAlign: 'center', marginBottom: '80px' },
  goldTag: { color: '#C4A77D', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '13px' },
  mainTitle: { fontFamily: 'Cinzel', fontSize: '42px', margin: '10px 0' },
  subText: { color: '#888', fontFamily: 'Montserrat' },
  
  timelineWrapper: { position: 'relative', padding: '40px 0' },
  flowItem: { display: 'flex', alignItems: 'center', marginBottom: '80px', width: '100%' },
  contentBox: { 
    width: '45%', 
    padding: '30px', 
    background: '#111', 
    borderRadius: '15px', 
    border: '1px solid #222',
    position: 'relative'
  },
  emptySpace: { width: '45%' },
  
  dayText: { color: '#C4A77D', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', display: 'block', marginBottom: '10px' },
  eventTitle: { fontFamily: 'Cinzel', fontSize: '24px', marginBottom: '10px' },
  venueName: { color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '15px' },
  descText: { color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' },
  sizeBadge: { fontSize: '11px', color: '#C4A77D', border: '1px solid #C4A77D', padding: '4px 10px', borderRadius: '4px' }
};

export default EventFlow;