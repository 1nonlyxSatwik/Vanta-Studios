import React from 'react';
import DotGrid from './DotGrid';

const border = '1px solid rgba(255,255,255,0.08)';

const ValueProps = () => {
  return (
    <section style={{ backgroundColor: '#241E21' }}>
      {/* ─── Row 1: Full-width cream banner ─── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          backgroundColor: '#e8e2c0',
          borderBottom: border,
        }}
      >
        {/* Left: Heading */}
        <div
          style={{
            padding: '48px 40px',
            borderRight: border,
          }}
        >
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(28px, 3vw, 40px)',
              color: '#241E21',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Scale your digital presence
          </h2>
        </div>
        {/* Right: Description */}
        <div style={{ padding: '48px 40px', display: 'flex', alignItems: 'center' }}>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              color: '#241E21',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            A high-impact web presence isn't just recognition. It builds customer trust, reduces churn, and creates competitive advantage.
          </p>
        </div>
      </div>

      {/* ─── Row 2: Text left + Dot grid right (cream/dark dots with blue highlights) ─── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          borderBottom: border,
          minHeight: '340px',
        }}
      >
        {/* Left: text panel */}
        <div
          style={{
            padding: '40px',
            borderRight: border,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: '22px',
              color: '#e8e2c0',
              margin: 0,
              marginBottom: '12px',
              lineHeight: 1.2,
            }}
          >
            Secure investor<br />conviction
          </h3>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              color: '#6b6360',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Walk into every pitch with a brand that
            shifts the room in your favour.
          </p>
        </div>
        {/* Right: dot grid (cream dots on dark, pyramid animation) */}
        <div style={{ backgroundColor: '#241E21', overflow: 'hidden' }}>
          <DotGrid rows={8} cols={16} dotColor="#3a3535" animationType="pyramid" />
        </div>
      </div>

      {/* ─── Row 3: Dot grid left (blue dots) + Text right ─── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          borderBottom: border,
          minHeight: '340px',
        }}
      >
        {/* Left: dot grid (blue dots) */}
        <div style={{ backgroundColor: '#241E21', borderRight: border, overflow: 'hidden' }}>
          <DotGrid rows={8} cols={16} dotColor="#3b3bff" animationType="fill" />
        </div>
        {/* Right: text panel */}
        <div
          style={{
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: '22px',
              color: '#e8e2c0',
              margin: 0,
              marginBottom: '12px',
              lineHeight: 1.2,
            }}
          >
            Turn users into ambassadors
          </h3>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              color: '#6b6360',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            A distinctive brand turns early adopters
            into advocates no airdrop can buy.
          </p>
        </div>
      </div>

      {/* ─── Row 4: Text left + Dot grid right (lavender dots) ─── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          borderBottom: border,
          minHeight: '340px',
        }}
      >
        {/* Left: text panel */}
        <div
          style={{
            padding: '40px',
            borderRight: border,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: '22px',
              color: '#e8e2c0',
              margin: 0,
              marginBottom: '12px',
              lineHeight: 1.2,
            }}
          >
            Attract elite talent
          </h3>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: '15px',
              color: '#6b6360',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            The best builders have options. A charismatic brand
            makes yours the obvious choice.
          </p>
        </div>
        {/* Right: dot grid (lavender/blue mixed) */}
        <div style={{ backgroundColor: '#241E21', overflow: 'hidden' }}>
          <DotGrid rows={8} cols={16} dotColor="#9b96cc" animationType="scatter" />
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
