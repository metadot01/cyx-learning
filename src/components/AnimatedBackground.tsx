import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      pulseOffset: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Add wave motion
        this.x += Math.sin(time * 0.001 + this.pulseOffset) * 0.2;
        this.y += Math.cos(time * 0.0015 + this.pulseOffset) * 0.15;

        if (this.x > canvas!.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas!.width + 50;
        if (this.y > canvas!.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas!.height + 50;
      }

      draw(time: number) {
        const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.3 + 0.7;
        const currentOpacity = this.opacity * pulse;
        const currentSize = this.size * (0.8 + pulse * 0.4);

        // Glow effect
        const gradient = ctx!.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentSize * 3
        );
        gradient.addColorStop(0, `rgba(0, 217, 255, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(0, 217, 255, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, `rgba(0, 217, 255, 0)`);

        ctx!.beginPath();
        ctx!.arc(this.x, this.y, currentSize * 3, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();

        // Core particle
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 217, 255, ${currentOpacity})`;
        ctx!.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = (time: number) => {
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const baseOpacity = (1 - distance / maxDistance) * 0.2;
            const pulse = Math.sin(time * 0.002 + i * 0.1) * 0.5 + 0.5;
            const opacity = baseOpacity * (0.5 + pulse * 0.5);
            
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    };

    // Floating orbs
    const orbs = [
      { x: 0.2, y: 0.3, radius: 200, color: "0, 200, 150", speed: 0.0005 },
      { x: 0.8, y: 0.6, radius: 250, color: "0, 217, 255", speed: 0.0007 },
      { x: 0.5, y: 0.8, radius: 180, color: "255, 183, 3", speed: 0.0004 },
    ];

    const drawOrbs = (time: number) => {
      orbs.forEach((orb, i) => {
        const x = canvas!.width * orb.x + Math.sin(time * orb.speed + i) * 50;
        const y = canvas!.height * orb.y + Math.cos(time * orb.speed * 1.3 + i) * 30;
        const pulse = Math.sin(time * 0.001 + i) * 0.2 + 0.8;
        
        const gradient = ctx!.createRadialGradient(x, y, 0, x, y, orb.radius * pulse);
        gradient.addColorStop(0, `rgba(${orb.color}, 0.08)`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.03)`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);
        
        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(x, y, orb.radius * pulse, 0, Math.PI * 2);
        ctx!.fill();
      });
    };

    const animate = () => {
      time += 16;
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Draw floating orbs first (behind particles)
      drawOrbs(time);

      particles.forEach((particle) => {
        particle.update(time);
        particle.draw(time);
      });

      connectParticles(time);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default AnimatedBackground;
