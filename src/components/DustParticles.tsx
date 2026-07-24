import { useEffect, useRef } from 'react';

export default function DustParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      maxOpacity: number;
    }

    const particles: Particle[] = [];
    const maxParticles = 60;

    function createParticle(initial = false): Particle {
      const size = Math.random() * 1.5 + 0.5;
      const x = Math.random() * width;
      const y = initial ? Math.random() * height : height + 10;
      const maxOpacity = Math.random() * 0.4 + 0.1;
      
      return {
        x,
        y,
        size,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -(Math.random() * 0.3 + 0.1),
        opacity: initial ? Math.random() * maxOpacity : 0,
        fadeSpeed: 0.005 + Math.random() * 0.005,
        maxOpacity,
      };
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Draw and update
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Slow float up
        p.y += p.speedY;
        p.x += p.speedX;

        // Opacity fade in/out
        if (p.opacity < p.maxOpacity && p.y > 50) {
          p.opacity += p.fadeSpeed;
        } else if (p.y <= 50) {
          p.opacity -= p.fadeSpeed;
        }

        // Draw particle (Golden glow)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0, p.opacity)})`;
        ctx.shadowBlur = p.size * 2;
        ctx.shadowColor = '#d4af37';
        ctx.fill();

        // Recycle if out of bounds or invisible
        if (p.y < -10 || p.opacity <= 0) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
