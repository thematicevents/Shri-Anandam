import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reviews = [
    {
      name: "Amogh Asawa",
      role: "Local Guide",
      text: "Amazing property, 5 star rooms and superb banquets halls. Must visit property and good social cause. The building is a masterpiece and idolizes Lord Shivji.",
      type: "Visionary Trust"
    },
    {
      name: "M.L. Kasat",
      role: "Verified Guest",
      text: "Feeling like a 4 star hotel. Spacious rooms & suite rooms are very pleasant. Banquet hall is soundproof and decorative. Lawn and parking area is very wide.",
      type: "Luxury Stay"
    },
    {
      name: "Amod Pahadiya CA",
      role: "Local Guide",
      text: "This is called social service, kudos to Maheshwari Samaj Leadership vision. Excellent location and grand parking space with elegant rooms.",
      type: "Community Praise"
    },
    {
      name: "Charu Sharma",
      role: "Event Guest",
      text: "I was here for 3 days for a friend's wedding. It has really great lounges, space for all the ceremonies, and rooms were also nice. Huge parking space.",
      type: "Destination Wedding"
    },
    {
      name: "Jay Sharma",
      role: "Local Guide",
      text: "Excellent place to organise wedding and parties, away from the hectic city life in hilly vibes. Superb Ambience.",
      type: "Ambiance"
    },
    {
        name: "Yusuf Pitha",
        role: "Long-stay Guest",
        text: "I stayed at this hotel for 10 days, and it truly felt like a home away from home. The staff was extremely polite and professional.",
        type: "Service Quality"
    }
  ];

  return (
    <section id="Testimonials" style={styles.section}>
      <style>{`
        .swiper-pagination-bullet { background: #C4A77D !important; }
        .swiper-button-next, .swiper-button-prev { color: #C4A77D !important; }
        .testimonial-card:hover { border-color: #C4A77D !important; transform: translateY(-5px); }
      `}</style>

      <div style={styles.container}>
        <div style={styles.header} data-aos="fade-up">
          <span style={styles.goldTag}>Guest Experiences</span>
          <h2 style={styles.mainTitle}>VOICES OF ANANDAM</h2>
          <div style={styles.underline}></div>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          style={styles.swiper}
          data-aos="zoom-in"
        >
          {reviews.map((rev, i) => (
            <SwiperSlide key={i}>
              <div style={styles.card} className="testimonial-card">
                <div style={styles.cardHeader}>
                  <FontAwesomeIcon icon={faQuoteLeft} style={styles.quoteIcon} />
                  <div style={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} style={{color: '#C4A77D', fontSize: '12px'}} />
                    ))}
                  </div>
                </div>
                
                <p style={styles.reviewText}>"{rev.text}"</p>
                
                <div style={styles.footer}>
                  <div style={styles.userInfo}>
                    <h4 style={styles.userName}>{rev.name}</h4>
                    <span style={styles.userRole}>{rev.role}</span>
                  </div>
                  <div style={styles.typeBadge}>
                    <FontAwesomeIcon icon={faCircleCheck} style={{marginRight: '5px'}} />
                    {rev.type}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '100px 0', backgroundColor: '#050505', color: '#fff', overflow: 'hidden' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  header: { textAlign: 'center', marginBottom: '60px' },
  goldTag: { color: '#C4A77D', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '13px' },
  mainTitle: { fontFamily: 'Cinzel', fontSize: '42px', margin: '10px 0' },
  underline: { width: '60px', height: '2px', background: '#C4A77D', margin: '0 auto' },
  
  swiper: { padding: '40px 10px 60px 10px' },
  card: { 
    background: 'rgba(255, 255, 255, 0.03)', 
    border: '1px solid rgba(196, 167, 125, 0.1)', 
    borderRadius: '20px', 
    padding: '40px', 
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    transition: '0.4s ease',
    backdropFilter: 'blur(10px)'
  },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' },
  quoteIcon: { color: '#C4A77D', fontSize: '30px', opacity: '0.5' },
  
  reviewText: { 
    fontFamily: 'Montserrat', 
    fontSize: '16px', 
    lineHeight: '1.8', 
    color: '#ccc', 
    fontStyle: 'italic', 
    marginBottom: '30px' 
  },
  
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' },
  userName: { fontFamily: 'Cinzel', fontSize: '18px', color: '#fff', margin: 0 },
  userRole: { fontSize: '12px', color: '#C4A77D', textTransform: 'uppercase', letterSpacing: '1px' },
  
  typeBadge: { 
    backgroundColor: 'rgba(196, 167, 125, 0.1)', 
    color: '#C4A77D', 
    padding: '5px 12px', 
    borderRadius: '20px', 
    fontSize: '11px', 
    fontWeight: '600' 
  }
};

export default Testimonials;