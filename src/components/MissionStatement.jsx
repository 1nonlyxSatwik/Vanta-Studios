import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionStatement = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        backgroundColor: '#241E21',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 48px',
      }}
    >
      <p
        ref={textRef}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(24px, 3vw, 36px)',
          color: '#e8e2c0',
          maxWidth: '800px',
          textAlign: 'center',
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        Vanta equips ambitious startups ready to scale
        with the <span style={{ fontFamily: 'monospace', letterSpacing: '0.04em' }}>Brand Operating System</span> they need
        to attract top-tier investors, users, and talent.
      </p>
    </section>
  );
};

export default MissionStatement;
