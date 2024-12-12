'use client'
import { useState } from 'react';
import Image from 'next/image';
import { industrialApplications, mediaItems } from '../constants';

// Define material gallery items using existing media items
const galleryData = {
  materials: mediaItems.filter(item => item.type === 'image').map(item => ({
    src: item.src,
    title: item.title,
    description: 'High-precision cutting capabilities'
  })),
  industries: industrialApplications.map(app => ({
    src: app.image,
    title: app.title,
    description: app.description
  }))
};

export default function MaterialsGallery() {
  const [activeTab, setActiveTab] = useState<'materials' | 'industries'>('materials');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'materials' 
                  ? 'bg-[#0a4165] text-white' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Materials
            </button>
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'industries' 
                  ? 'bg-[#0a4165] text-white' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Industries
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData[activeTab].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}