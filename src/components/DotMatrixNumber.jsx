import React from 'react';

// Dot matrix patterns for digits 1-4 (7 rows × 5 cols) — matches kerna.studio style
const patterns = {
  1: [
    '00100',
    '01100',
    '10100',
    '00100',
    '00100',
    '00100',
    '11111',
  ],
  2: [
    '01110',
    '10001',
    '00001',
    '00110',
    '01000',
    '10000',
    '11111',
  ],
  3: [
    '11110',
    '00001',
    '00001',
    '01110',
    '00001',
    '00001',
    '11110',
  ],
  4: [
    '10001',
    '10001',
    '10001',
    '11111',
    '00001',
    '00001',
    '00001',
  ],
};

/**
 * Renders a dot-matrix number inside a cream-colored square card.
 * Matches the kerna.studio service number tiles.
 */
const DotMatrixNumber = ({ digit }) => {
  const pattern = patterns[digit] || [];
  const dotSize = 12;
  const gap = 5;

  return (
    <div
      style={{
        width: '160px',
        height: '160px',
        backgroundColor: '#e8e2c0',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(5, ${dotSize}px)`,
          gap: `${gap}px`,
        }}
      >
        {pattern.map((row, rowIndex) =>
          row.split('').map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                borderRadius: '50%',
                backgroundColor: cell === '1' ? '#3b3bff' : 'transparent',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DotMatrixNumber;
