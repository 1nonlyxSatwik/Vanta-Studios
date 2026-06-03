import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type DotGridProps = {
  rows: number;
  cols: number;
  dotColor: string;
  bgColor?: string;
  animationType: 'pyramid' | 'fill' | 'scatter';
};

const DotGrid: React.FC<DotGridProps> = ({
  rows,
  cols,
  dotColor,
  bgColor = '#2e2929',
  animationType,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const total = rows * cols;
  const dots = Array.from({ length: total }, (_, i) => i);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const dotsEl = containerRef.current!.querySelectorAll('.dot-inner');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      const order = Array.from(dotsEl);
      if (animationType === 'pyramid') {
        // Center-out animation: middle dots first
        const midCol = Math.floor(cols / 2);
        const midRow = Math.floor(rows / 2);
        order.sort((a, b) => {
          const ai = Array.from(dotsEl).indexOf(a);
          const bi = Array.from(dotsEl).indexOf(b);
          const aRow = Math.floor(ai / cols);
          const aCol = ai % cols;
          const bRow = Math.floor(bi / cols);
          const bCol = bi % cols;
          const aDist = Math.abs(aRow - midRow) + Math.abs(aCol - midCol);
          const bDist = Math.abs(bRow - midRow) + Math.abs(bCol - midCol);
          return aDist - bDist;
        });
      } else if (animationType === 'scatter') {
        order.sort(() => Math.random() - 0.5);
      }

      tl.fromTo(
        order,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: 'back.out(1.7)',
          stagger: { each: 0.02 },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [rows, cols, animationType]);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: bgColor,
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: '5px',
        width: '100%',
        height: '100%',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {dots.map((i) => (
        <div
          key={i}
          className="dot-inner"
          style={{
            width: '100%',
            aspectRatio: '1.3',
            borderRadius: '6px',
            backgroundColor: dotColor,
            minHeight: 0,
          }}
        />
      ))}
    </div>
  );
};

export default DotGrid;
