import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | GIMS India',
  description: 'The page you are looking for could not be found. Browse our waterjet cutting machines and industrial solutions.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-200 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-[#293241] mb-4">Page Not Found</h1>
        <p className="text-[#293241] mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="inline-block bg-[#1890d5] text-white px-6 py-3 rounded-lg 
            hover:bg-[#1890d5]/90 transition-colors duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}