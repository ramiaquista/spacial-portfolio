import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = [];
    const numStars = 1000; // Increased number of stars
    const maxDepth = 1000;

    // Color palette for stars
    const starColors = ["#ffffff", "#ffe9c4", "#d4fbff"];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * maxDepth,
        size: Math.random() * 2 + 0.5, // Varied star sizes
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Create a trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.z -= 0.5; // Adjust speed of stars moving towards viewer

        if (star.z <= 0) {
          star.z = maxDepth;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        const x =
          (star.x - canvas.width / 2) * (maxDepth / star.z) + canvas.width / 2;
        const y =
          (star.y - canvas.height / 2) * (maxDepth / star.z) +
          canvas.height / 2;
        const size = ((maxDepth - star.z) / maxDepth) * star.size;

        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default StarField;
