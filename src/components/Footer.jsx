import Calendar from './Calendar';


const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1a1617',
        color: '#e8e2c0',
        fontFamily: "'Nunito', sans-serif",
        overflow: 'hidden',
        padding: '80px 48px 40px',
      }}
    >
      {/* Wordmark row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginBottom: '60px',
          gap: '40px',
        }}
      >
        {/* Massive wordmark */}
        <div style={{ overflow: 'hidden', lineHeight: 0, flex: 1, minWidth: 0 }}>
          <h2
            style={{
              fontWeight: 900,
              fontSize: 'clamp(100px, 20vw, 360px)',
              margin: 0,
              lineHeight: 0.85,
              letterSpacing: '-0.05em',
              color: '#e8e2c0',
              opacity: 0.85,
              whiteSpace: 'nowrap',
            }}
          >
            VANTA
          </h2>
        </div>
<div id="book-call" style={{ flexShrink: 0, marginLeft: '20px' }}>
  <Calendar />
</div>


      </div>

      {/* Bottom info area — 3 columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gap: '40px',
          alignItems: 'start',
        }}
      >
        {/* Left: CTA heading */}
        <div>
          <h3
            style={{
              fontWeight: 900,
              fontSize: 'clamp(24px, 2.5vw, 36px)',
              lineHeight: 1.2,
              margin: 0,
              color: '#e8e2c0',
            }}
          >
            Let's discuss your<br />project together
          </h3>
        </div>

        {/* Middle: Work with us + Connect */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div>
            <p
              style={{
                margin: 0,
                marginBottom: '4px',
                fontSize: '14px',
                color: '#6b6360',
              }}
            >
              Work with us
            </p>
            <a
              href="mailto:hello@vantastudios.com"
              style={{
                color: '#e8e2c0',
                textDecoration: 'none',
                fontSize: '15px',
              }}
            >
              hello@vantastudios.com
            </a>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                marginBottom: '4px',
                fontSize: '14px',
                color: '#6b6360',
              }}
            >
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <a href="#" style={{ color: '#e8e2c0', textDecoration: 'none', fontSize: '15px' }}>
                Linkedin
              </a>
              <a href="#" style={{ color: '#e8e2c0', textDecoration: 'none', fontSize: '15px' }}>
                X
              </a>
            </div>
          </div>
        </div>

        {/* Right: Team */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <p style={{ margin: 0, marginBottom: '2px', fontSize: '14px', color: '#6b6360' }}>
              Founder
            </p>
            <p style={{ margin: 0, fontSize: '15px', color: '#e8e2c0' }}>Satwik Mani Tripathi</p>
          </div>
          <div>
            <p style={{ margin: 0, marginBottom: '2px', fontSize: '14px', color: '#6b6360' }}>
              Creative Developer
            </p>
            <p style={{ margin: 0, fontSize: '15px', color: '#e8e2c0' }}>Satwik Mani Tripathi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
