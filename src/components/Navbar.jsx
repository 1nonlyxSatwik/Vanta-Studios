import React from 'react';

const Navbar = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '60px',
    background: 'rgba(36, 30, 33, 0.85)',
    backdropFilter: 'blur(10px)',
    color: '#e8e2c0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'height 0.3s ease, background 0.3s ease',
    zIndex: 1000,
    overflow: 'hidden',
  };

  const hoverStyle = {
    height: '200px',
    background: 'rgba(36, 30, 33, 0.95)',
  };

  // Simple CSS‑only hover handling – we use a wrapper <div> with a className.
  // The style object below will be combined with the hover class via a <style> tag.

  return (
    <div className="navbar-wrapper" style={containerStyle}>
      <style>{`
        .navbar-wrapper:hover {
          height: ${hoverStyle.height};
          background: ${hoverStyle.background};
        }
        .navbar-content {
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .navbar-wrapper:hover .navbar-content {
          opacity: 1;
        }
      `}</style>
      <span>Vanta Studios</span>
      <div className="navbar-content" style={{ marginTop: '12px', textAlign: 'center' }}>
        <a href="#" style={{ color: '#e8e2c0', textDecoration: 'none', margin: '0 12px' }}>Home</a>
        <a href="#services" style={{ color: '#e8e2c0', textDecoration: 'none', margin: '0 12px' }}>Services</a>
        <a href="#mission" style={{ color: '#e8e2c0', textDecoration: 'none', margin: '0 12px' }}>Mission</a>
        <a href="#contact" style={{ color: '#e8e2c0', textDecoration: 'none', margin: '0 12px' }}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
