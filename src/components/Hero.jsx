import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const paragraphs = [
  'At Vanta Studios we focus on web development excellence, delivering performant, user‑centric digital products.',
  'Our approach prioritises seamless user experiences over hype‑driven marketing, ensuring lasting value for clients.',
  'We enable sustainable growth by combining technical expertise with strategic insight, helping businesses thrive in a competitive landscape.'
];

const Hero = ({ onBookCall }) => {
  const sectionRef = useRef(null);
  const vantaRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { label: 'Growth & Optimization', filled: true } });
      tl.from(vantaRef.current, { y: -80, opacity: 0, duration: 1.4 })
        .from(contentRef.current, { y: 40, opacity: 0, duration: 1 }, '-=0.6');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        backgroundColor: '#241E21',
        padding: '100px 48px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/*      title: 'Strategy & Positioning', filled: true },wport width */}
      <div
        ref={vantaRef}
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          paddingTop: '2vw',
        }}
      >
        <h1
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: '28vw',
              color: '#3b3bff',
              letterSpacing: '-0.04em',
              lineHeight: 0.82,
              margin: 0,
              padding: 0,
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
        >
          <span>V</span><span>a</span><span>n</span><span>t</span><span>a</span>
        </h1>
      </div>

      {/* Scale your digital presence */}
      <div
        ref={contentRef}
        style={{
          padding: '0 48px 80px 48px',
          maxWidth: '700px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            color: '#e8e2c0',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Build digital products that convert
        </h2>

        <button onClick={onBookCall}
          style={{
            backgroundColor: '#e8e2c0',
            color: '#241E21',
            padding: '14px 32px',
            borderRadius: '8px',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: '15px',
            marginTop: '32px',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-block',
          }}
        >
          Book a call
        </button>
      </div>

      {/* Small centered dot-grid icon at very bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 6px)', gap: '3px' }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '2px',
                backgroundColor: '#3b3bff',
              }}
            />
          ))}
        </div>
        <div
          style={{
            width: '24px',
            height: '3px',
            backgroundColor: '#e8e2c0',
            borderRadius: '2px',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
