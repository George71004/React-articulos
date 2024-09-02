import React from 'react';
import { PlusIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Home = ({ onSelect }) => {
  return (
    <div className="grid gap-6">
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer" onClick={() => onSelect('agregar')}>
        <div className="flex items-center space-x-4">
          <PlusIcon className="w-6 h-6" />
          <span>Agregar productos</span>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer">
        <div className="flex items-center space-x-4">
          <ChartBarIcon className="w-6 h-6" />
          <span>Productos disponibles</span>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer">
        <div className="flex items-center space-x-4">
          <ChartBarIcon className="w-6 h-6" />
          <span>Estadísticas</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
