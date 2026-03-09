import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your assets here
import mpfImg from '../assests/mpf-hall.jpg';
import banquetImg from '../assests/banquet.jpg';
import lawnImg from '../assests/lawn-4000.jpg';
import suiteImg from '../assests/suite.jpg';
import poojaImg from '../assests/luxury2.jpg';
import chotaLawnImg from '../assests/Chota.png';


const Gallery = () => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryData = [
    { id: 1, category: 'Indoor', img: mpfImg, title: 'MPF Hall', size: '8,000 Sq. Ft.' },
    { id: 2, category: 'Lawns', img: lawnImg, title: 'Bada Lawn', size: '30,000 Sq. Ft.' },
    { id: 3, category: 'Rooms', img: suiteImg , title: 'Royal Suite', size: '1,000 Sq. Ft.' },
    { id: 4, category: 'Indoor', img: banquetImg, title: 'AC Banquet', size: '8,000 Sq. Ft.' },
    { id: 5, category: 'Spiritual', img: poojaImg, title: 'Pooja Room', size: 'Sacred Space' },
    { id: 6, category: 'Lawns', img: chotaLawnImg, title: 'Chota Lawn', size: '8,000 Sq. Ft.' },
  ];

  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <section id="Gallery" style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
        .filter-btn { transition: all 0.3s ease; border-bottom: 2px solid transparent; }
        .filter-btn.active { color: #C4A77D; border-bottom: 2px solid #C4A77D; }
        .gallery-item:hover .overlay { opacity: 1; transform: translateY(0); }
        .gallery-item:hover img { transform: scale(1.1); }
      `}</style>

      <div style={styles.container}>
        {/* Header */}
        <div data-aos="fade-up" style={styles.header}>
          <span style={styles.goldTag}>Visual Grandeur</span>
          <h2 style={styles.mainTitle}>OUR GALLERY</h2>
          <div style={styles.underline}></div>
        </div>

        {/* Filter Navigation */}
        <div style={styles.filterNav} data-aos="fade-up">
          {['All', 'Lawns', 'Indoor', 'Rooms'].map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              style={styles.navBtn}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div style={styles.grid}>
          {filteredImages.map((item) => (
            <div 
              key={item.id} 
              style={styles.galleryItem} 
              className="gallery-item"
              data-aos="zoom-in"
            >
              <img src={item.img} alt={item.title} style={styles.image} />
              <div style={styles.overlay} className="overlay">
                <h4 style={styles.itemTitle}>{item.title}</h4>
                <p style={styles.itemSize}>{item.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 0', backgroundColor: '#0A0A0A', color: '#fff' },
  container: { maxWidth: '1300px', margin: '0 auto', padding: '0 20px' },
  header: { textAlign: 'center', marginBottom: '50px' },
  goldTag: { color: '#C4A77D', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '13px' },
  mainTitle: { fontFamily: 'Cinzel', fontSize: '42px', marginTop: '10px' },
  underline: { width: '60px', height: '2px', background: '#C4A77D', margin: '20px auto' },
  
  filterNav: { display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '50px', flexWrap: 'wrap' },
  navBtn: { 
    background: 'none', border: 'none', color: '#888', 
    fontFamily: 'Montserrat', fontWeight: '600', cursor: 'pointer',
    fontSize: '15px', padding: '10px 5px', textTransform: 'uppercase', letterSpacing: '1px'
  },

  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
    gap: '20px',
    minHeight: '600px' // Prevents layout jump when filtering
  },
  galleryItem: { 
    position: 'relative', height: '300px', borderRadius: '12px', 
    overflow: 'hidden', cursor: 'pointer', background: '#111' 
  },
  image: { width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s ease' },
  overlay: { 
    position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', 
    display: 'flex', flexDirection: 'column', justifyContent: 'center', 
    alignItems: 'center', opacity: 0, transform: 'translateY(20px)', 
    transition: 'all 0.4s ease' 
  },
  itemTitle: { fontFamily: 'Cinzel', fontSize: '22px', marginBottom: '5px' },
  itemSize: { fontFamily: 'Montserrat', fontSize: '14px', color: '#C4A77D', letterSpacing: '1px' }
};

export default Gallery;