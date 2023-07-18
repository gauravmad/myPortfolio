import React, { useRef, useEffect } from 'react';

function CanvasBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function Particle(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      };
    }

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    Particle.prototype.update = function () {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.velocity.x *= -1;
      }
      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.velocity.y *= -1;
      }

      this.draw();
    };

    Particle.prototype.connect = function (otherParticle) {
      const dx = this.x - otherParticle.x;
      const dy = this.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
        ctx.closePath();
      }
    };

    function init() {
      particles = [];

      const numberOfParticles = 100;
      const radius = 2;

      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = generateRandomColor();

        particles.push(new Particle(x, y, radius, color));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();

        particles.forEach((otherParticle) => {
          if (particle !== otherParticle) {
            particle.connect(otherParticle);
          }
        });
      });

      requestAnimationFrame(animate);
    }

    function generateRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';

      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    }

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    }

    function updateMousePosition(event) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    }

    // Initial setup
    resizeCanvas();
    animate();

    // Event listeners for window resize and mouse movement
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', updateMousePosition);

    // Clean up animation and event listeners on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animate);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-background" />;
}

export default CanvasBackground;
