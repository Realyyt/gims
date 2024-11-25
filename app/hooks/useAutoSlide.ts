import { useState, useCallback, useEffect } from 'react';

export function useAutoSlide(length: number, interval = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return { currentIndex, next, prev, setCurrentIndex };
} 