import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  'We watched centralised systems fail the people who trusted them most — freezing lifework and erasing value overnight. The world needs an alternative that is permissionless and self-sovereign.',
  "But humans don't fall in love with protocols. They fall in love with brands.",
  'In a space defined by volatility, a brand must be an anchor of coherence. We reject the clichés that treat onchain finance as a get-rich-quick scheme rather than a sovereign necessity.',
  "Vanta builds the Brand Operating System that bridges the gap between complex code and human aspiration. We create charismatic brands that secure investor conviction, turn early adopters into ambassadors, and attract elite talent.",
];

const Manifesto = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const paraEls = containerRef.current.querySelectorAll('.manifesto-para');
      paraEls.forEach((el) => {
        // Split into words and animate each word's opacity
        gsap.fromTo(
          el,
          { color: '#3a3535' },
          {
            color: '#e8e2c0',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: '#241E21',
        padding: '140px 48px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '800px' }}>
        {paragraphs.map((text, idx) => (
          <p
            key={idx}
            className="manifesto-para"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(18px, 2.2vw, 26px)',
              lineHeight: 1.6,
              marginBottom: '40px',
              color: '#3a3535',
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Manifesto;
