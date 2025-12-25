import React, { useEffect, useRef } from 'react';

interface FractalBackgroundProps {
  opacity?: number;
  speed?: number;
}

const FractalBackground: React.FC<FractalBackgroundProps> = ({ 
  opacity = 0.08, 
  speed = 20 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (svgRef.current) {
        const time = Date.now() * 0.001;
        const transform = `translate(${Math.sin(time * 0.5) * 10}px, ${Math.cos(time * 0.3) * 10}px) rotate(${time * 2}deg)`;
        svgRef.current.style.transform = transform;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Generate Mandelbrot-like fractal pattern
  const generateFractalPath = (iterations: number, scale: number): string => {
    const points: string[] = [];
    for (let i = 0; i < iterations; i++) {
      const angle = (i / iterations) * Math.PI * 2;
      const radius = scale * (1 + 0.3 * Math.sin(angle * 3));
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    return points.join(' ') + ' Z';
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ opacity }}>
      {/* Multiple fractal layers for depth */}
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ 
          transition: 'transform 0.1s ease-out',
          filter: 'blur(0.5px)'
        }}
      >
        <defs>
          <radialGradient id="fractalGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fractalSlate" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#708090" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#708090" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#708090" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Mandelbrot-inspired patterns */}
        <g transform="translate(20, 20)">
          <path
            d={generateFractalPath(50, 15)}
            fill="none"
            stroke="url(#fractalGold)"
            strokeWidth="0.3"
            opacity="0.6"
          />
        </g>
        <g transform="translate(80, 30)">
          <path
            d={generateFractalPath(40, 12)}
            fill="none"
            stroke="url(#fractalSlate)"
            strokeWidth="0.25"
            opacity="0.5"
          />
        </g>
        <g transform="translate(50, 70)">
          <path
            d={generateFractalPath(60, 18)}
            fill="none"
            stroke="url(#fractalGold)"
            strokeWidth="0.35"
            opacity="0.4"
          />
        </g>
        
        {/* Julia set-inspired spirals */}
        <g transform="translate(30, 60)">
          <circle cx="0" cy="0" r="8" fill="none" stroke="url(#fractalGold)" strokeWidth="0.2" opacity="0.5" />
          <circle cx="0" cy="0" r="5" fill="none" stroke="url(#fractalSlate)" strokeWidth="0.15" opacity="0.4" />
          <circle cx="0" cy="0" r="3" fill="none" stroke="url(#fractalGold)" strokeWidth="0.1" opacity="0.3" />
        </g>
        <g transform="translate(70, 80)">
          <circle cx="0" cy="0" r="6" fill="none" stroke="url(#fractalSlate)" strokeWidth="0.2" opacity="0.4" />
          <circle cx="0" cy="0" r="4" fill="none" stroke="url(#fractalGold)" strokeWidth="0.15" opacity="0.3" />
        </g>
      </svg>
      
      {/* Additional parallax layers */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(112, 128, 144, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)
          `,
          animation: `fractalParallax ${speed}s ease-in-out infinite alternate`
        }}
      />
    </div>
  );
};

export default FractalBackground;

