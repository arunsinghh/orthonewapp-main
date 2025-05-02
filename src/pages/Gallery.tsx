import React from 'react';

function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Photo Gallery</h1>
      <p className="text-lg text-gray-600 mt-4">Coming Soon...</p>

      {/* 
      const images = [
        {
          url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1920',
          title: 'Prosthetic Fitting',
          description: 'Advanced prosthetic fitting session'
        },
        {
          url: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=1920',
          title: 'Orthotic Care',
          description: 'Custom orthotic device fitting'
        },
        {
          url: 'https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=1920',
          title: 'Clinical Care',
          description: 'Professional clinical assessment'
        },
        {
          url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920',
          title: 'Diabetic Care',
          description: 'Specialized diabetic foot care'
        }
      ];

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-600">{image.title}</h3>
              <p className="text-gray-600 mt-2">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      */}
    </div>
  );
}

export default Gallery;
