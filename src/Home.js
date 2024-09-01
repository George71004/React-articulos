import React from 'react';
import { PlusIcon, ClipboardDocumentListIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="ml-24 p-6">
      <h1 className="text-2xl font-bold mb-6">Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <PlusIcon className="w-8 h-8 text-mint-500" />
          <span>Agregar productos</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <ClipboardDocumentListIcon className="w-8 h-8 text-mint-500" />
          <span>Productos disponibles</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <ChartBarIcon className="w-8 h-8 text-mint-500" />
          <span>Estadísticas</span>
        </div>
      </div>
    </div>
  );
};

export default Home;