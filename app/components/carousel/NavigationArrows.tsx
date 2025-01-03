import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavigationArrowsProps } from '../../types';

export function NavigationArrows({ onNext, onPrev }: NavigationArrowsProps) {
  return (
    <>
      <button 
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[#3d5a80]/20 hover:bg-[#3d5a80]/40 
          p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-[#e0fbfc]" />
      </button>
      <button 
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-[#3d5a80]/20 hover:bg-[#3d5a80]/40 
          p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-[#e0fbfc]" />
      </button>
    </>
  );
} 