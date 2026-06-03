import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotMatrixNumber from './DotMatrixNumber';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    digit: 1,
    title: 'Strategy & Positioning',
    description: 'Positioning and messaging that opens doors you couldn\'t before.',
    tags: [
      { label: 'Competitive Landscape', filled: true },
      { label: 'ICP', filled: false },
      { label: 'Category Design', filled: false },
      { label: 'Brand Positioning', filled: true },
      { label: 'GTM Strategy', filled: true },
      { label: 'Investor Narrative', filled: true },
      { label: 'Messaging Architecture', filled: false },
    ],
  },
  {
    digit: 2,
    title: 'Web Design & Development',
    description: 'A visual identity that wins the room before you say a word.',
    tags: [
      { label: 'Logomark', filled: true },
      { label: 'Logotype', filled: true },
      { label: 'Color Palette', filled: false },
      { label: 'Typography', filled: false },
      { label: 'Iconography', filled: true },
      { label: 'Imagery', filled: true },
      { label: 'Brand Guidelines', filled: false },
      { label: 'Texture', filled: false },
      { label: "Do's & Don'ts", filled: false },
    ],
  },
  {
    digit: 3,
    title: 'Marketing & Launch',
    description: 'Ship your brand across every touchpoint and build brand equity.',
    tags: [
      { label: 'Pitch Deck Template', filled: true },
      { label: 'Investor Brief', filled: false },
      { label: 'Media Kit', filled: false },
      { label: 'Website Design & Development', filled: true },
      { label: 'Explainer Video', filled: false },
      { label: 'Motion System', filled: true },
    ],
  },
  {
    digit: 4,
    title: 'Brand Stewardship',
    description: 'Ongoing partnership that compounds your brand equity over time.',
    tags: [
      { label: 'Continuous Brand Advisory', filled: true },
      { label: 'Community & Comms Manager', filled: false },
    ],
  },
];

const Services = ({ onBookCall }) => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Animate progress line height
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 0.5,
          },
        }
      );

      // Stagger service rows
      const rows = sectionRef.current.querySelectorAll('.service-row');
      rows.forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#241E21',
        padding: '100px 48px',
        position: 'relative',
        /* Graph-paper grid background */
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Section header */}
      <div style={{ maxWidth: '700px', marginBottom: '64px' }}>
        <h2
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#e8e2c0',
            margin: 0,
            marginBottom: '16px',
            lineHeight: 1.1,
          }}
        >
          The Brand Operating System
        </h2>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            color: '#6b6360',
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          A charismatic brand shown consistently to the world doesn't just build
          recognition. It builds equity, the kind competitors can't buy, copy, or destroy.
        </p>
      </div>

      {/* Service rows — 3-column layout */}
      <div style={{ position: 'relative' }}>
        {/* Vertical progress line (center column) */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            transform: 'translateX(-50%)',
            width: '4px',
            backgroundColor: 'rgba(255,255,255,0.08)',
          }}
        >
          {/* Animated blue fill */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#3b3bff',
              transformOrigin: 'top center',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Rows */}
        {services.map((s, idx) => (
          <div
            key={idx}
            className="service-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 60px 1fr',
              alignItems: 'center',
              marginBottom: idx < services.length - 1 ? '48px' : 0,
              minHeight: '180px',
            }}
          >
            {/* Left column: number card + text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingRight: '24px' }}>
              <DotMatrixNumber digit={s.digit} />
              <div>
                <h3
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 900,
                    fontSize: '20px',
                    color: '#e8e2c0',
                    margin: 0,
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#6b6360',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {s.description}
                </p>
              </div>
            </div>

            {/* Center column: timeline dot */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#3b3bff',
                  border: '3px solid #241E21',
                  boxShadow: '0 0 0 2px #3b3bff',
                  zIndex: 2,
                }}
              />
            </div>

            {/* Right column: tag pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingLeft: '24px' }}>
              {s.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    backgroundColor: tag.filled ? '#3b3bff' : 'transparent',
                    color: tag.filled ? '#fff' : '#e8e2c0',
                    border: tag.filled ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Book a call button at bottom center */}
      <div style={{ textAlign: 'center', marginTop: '64px' }}>
        <button
          style={{
            backgroundColor: 'transparent',
            color: '#e8e2c0',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '14px 36px',
            borderRadius: '8px',
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: '15px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onClick={() => onBookCall?.()}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e8e2c0';
            e.currentTarget.style.color = '#241E21';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#e8e2c0';
          }}
        >
          Book a call
        </button>
      </div>
    </section>
  );
};

export default Services;
