import { useEffect, useState } from 'react';

/**
 * Spotlight Component
 * Creates an interactive radial electric-lime glow that tracks the user's cursor.
 * 
 * Beginner React Note:
 * - 'useState' holds the current (x, y) coordinates of the cursor.
 * - 'useEffect' sets up a global event listener on window for 'mousemove'.
 *   It runs once when the component mounts, and cleans itself up when unmounted.
 */
export default function Spotlight() {
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: opacity,
        transition: 'opacity 0.5s ease',
        background: `radial-gradient(650px circle at ${coords.x}px ${coords.y}px, rgba(204, 255, 0, 0.075), transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
}
