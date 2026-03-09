import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faCalendarCheck, 
  faCheckCircle, faSpinner, faTimes, faUser, faUsers 
} from '@fortawesome/free-solid-svg-icons';

const Inquiry = () => {
  // Your provided Google Apps Script URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZtD1z2ACxtUXvVPxCchK-Srj1nOLUUa3Ao6tVoMCxwEihP6rZ7IFqOmLIuKGWKonJng/exec";

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    eventType: 'Destination Wedding',
    guests: '',
    requirements: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using fetch with no-cors for Google Apps Script compatibility
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      // Delay slightly to let the user see the "Sending" state before success
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', phone: '', date: '', eventType: 'Destination Wedding', guests: '', requirements: '' });
      }, 1500);

    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="Contact" style={styles.section}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
        .input-field:focus { border-color: #C4A77D !important; outline: none; box-shadow: 0 0 10px rgba(196, 167, 125, 0.2); }
        .submit-btn:hover { background: #fff !important; color: #000 !important; transform: translateY(-3px); }
        .blur-overlay { backdrop-filter: blur(12px); background: rgba(0,0,0,0.8); transition: 0.5s ease; }
        .modal-card { animation: modalPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        @keyframes modalPop { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>

      <div style={styles.container}>
        <div style={styles.grid}>
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <div style={styles.infoCol} data-aos="fade-right">
            <span style={styles.goldTag}>Contact Us</span>
            <h2 style={styles.mainTitle}>START YOUR <br/> CELEBRATION</h2>
            <p style={styles.subText}>
              Reach out to our hospitality team at <b>Shri Anandam</b> to discuss your event requirements and room availability.
            </p>

            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <div style={styles.iconCircle}><FontAwesomeIcon icon={faPhone} /></div>
                <div>
                  <p style={styles.labelSmall}>Call for Booking</p>
                  <p style={styles.contactValue}>+91 98260 22XXX</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.iconCircle}><FontAwesomeIcon icon={faEnvelope} /></div>
                <div>
                  <p style={styles.labelSmall}>Email Inquiries</p>
                  <p style={styles.contactValue}>shrianandamresort@gmail.com</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <div style={styles.iconCircle}><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                <div>
                  <p style={styles.labelSmall}>Our Location</p>
                  <p style={styles.contactValue}>Bypass Road, Simrol, Indore</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <div style={styles.formCol} data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div style={styles.formGrid}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}><FontAwesomeIcon icon={faUser} /> Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={styles.input} className="input-field" placeholder="John Doe" required />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}><FontAwesomeIcon icon={faPhone} /> Phone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={styles.input} className="input-field" placeholder="+91 00000 00000" required />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Event Date</label>
                  <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} style={styles.input} className="input-field" required />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Event Type</label>
                  <select value={formData.eventType} onChange={(e) => setFormData({...formData, eventType: e.target.value})} style={styles.input} className="input-field">
                    <option>Destination Wedding</option>
                    <option>Corporate Event</option>
                    <option>Social Gathering</option>
                    <option>Other Ceremony</option>
                  </select>
                </div>
              </div>
              <div style={{...styles.inputGroup, marginTop: '20px'}}>
                <label style={styles.label}><FontAwesomeIcon icon={faUsers} /> Expected Guests</label>
                <input type="number" value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} style={styles.input} className="input-field" placeholder="Approx number of guests" />
              </div>
              <div style={{...styles.inputGroup, marginTop: '20px'}}>
                <label style={styles.label}>Additional Requirements</label>
                <textarea rows="4" value={formData.requirements} onChange={(e) => setFormData({...formData, requirements: e.target.value})} style={{...styles.input, resize: 'none'}} className="input-field" placeholder="Tell us more..."></textarea>
              </div>

              <button type="submit" style={styles.submitBtn} className="submit-btn">
                <FontAwesomeIcon icon={faCalendarCheck} style={{marginRight: '10px'}} />
                SEND BOOKING INQUIRY
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* POPUP STATUS MODAL */}
      {status !== 'idle' && (
        <div style={styles.modalOverlay} className="blur-overlay">
          <div style={styles.modalBox} className="modal-card">
            {status === 'sending' && (
              <div style={styles.statusInner}>
                <FontAwesomeIcon icon={faSpinner} spin style={{fontSize: '50px', color: '#C4A77D'}} />
                <h3 style={styles.modalTitle}>Processing...</h3>
                <p style={styles.modalText}>Sending your request to the trust office.</p>
              </div>
            )}
            {status === 'success' && (
              <div style={styles.statusInner}>
                <FontAwesomeIcon icon={faCheckCircle} style={{fontSize: '60px', color: '#4BB543'}} />
                <h3 style={styles.modalTitle}>Inquiry Sent!</h3>
                <p style={styles.modalText}>Thank you! We will get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} style={styles.closeBtn}>Back to Site</button>
              </div>
            )}
            {status === 'error' && (
              <div style={styles.statusInner}>
                <FontAwesomeIcon icon={faTimes} style={{fontSize: '60px', color: '#FF3333'}} />
                <h3 style={styles.modalTitle}>Submission Error</h3>
                <p style={styles.modalText}>Please check your connection and try again.</p>
                <button onClick={() => setStatus('idle')} style={styles.closeBtn}>Try Again</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: { padding: '120px 0', backgroundColor: '#050505', color: '#fff', position: 'relative' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'flex-start' },
  
  infoCol: { display: 'flex', flexDirection: 'column', gap: '20px' },
  goldTag: { color: '#C4A77D', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '13px', fontWeight: 'bold' },
  mainTitle: { fontFamily: 'Cinzel', fontSize: '48px', margin: '10px 0', lineHeight: '1.2' },
  subText: { color: '#999', fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '1.8' },
  
  contactList: { marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '30px' },
  contactItem: { display: 'flex', alignItems: 'center', gap: '20px' },
  iconCircle: { width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #C4A77D', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#C4A77D', fontSize: '18px' },
  labelSmall: { margin: 0, fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' },
  contactValue: { margin: 0, fontSize: '18px', color: '#fff', fontWeight: '500' },

  formCol: { background: '#0D0D0D', padding: '50px', borderRadius: '25px', border: '1px solid #1a1a1a', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' },
  formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
  label: { fontSize: '12px', color: '#C4A77D', textTransform: 'uppercase', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' },
  input: { background: '#000', border: '1px solid #222', padding: '14px', borderRadius: '8px', color: '#fff', fontFamily: 'Montserrat' },
  submitBtn: { marginTop: '30px', width: '100%', padding: '18px', backgroundColor: '#C4A77D', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: '0.4s', fontSize: '14px', letterSpacing: '1px' },

  // Modal Styles
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' },
  modalBox: { background: '#111', padding: '60px 40px', borderRadius: '30px', border: '1px solid rgba(196, 167, 125, 0.3)', textAlign: 'center', maxWidth: '450px', width: '100%', boxShadow: '0 0 50px rgba(0,0,0,0.8)' },
  statusInner: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' },
  modalTitle: { fontFamily: 'Cinzel', fontSize: '28px', color: '#fff', margin: 0 },
  modalText: { color: '#888', fontFamily: 'Montserrat', fontSize: '15px', lineHeight: '1.6' },
  closeBtn: { background: '#C4A77D', border: 'none', color: '#000', padding: '12px 40px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' }
};

export default Inquiry;