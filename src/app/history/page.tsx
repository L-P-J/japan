import React from 'react';
import Header from '../../components/Header';
import Footer from "@/components/Footer";
import { attractions } from '@/attractions/attractionsData';

const HistoryPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8 text-black">歷史景點介紹</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={attraction.imageUrl} alt={attraction.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-black">{attraction.name}</h2>
                <p className="text-gray-700">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
