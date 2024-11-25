import { ProgressIndicatorsProps } from '../../types';

export function ProgressIndicators({ total, currentIndex, onChange }: ProgressIndicatorsProps) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-12 h-1 rounded-full transition-all duration-300 
            ${currentIndex === index ? 'bg-white w-20' : 'bg-white/50'}`}
        />
      ))}
    </div>
  );
} 