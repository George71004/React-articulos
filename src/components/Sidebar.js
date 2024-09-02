import React, { useState } from 'react';
import { HomeIcon, PlusIcon, ChartBarIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`h-screen bg-green-500 text-white fixed top-0 left-0 transition-all duration-300 ease-in-out ${isOpen ? 'w-48' : 'w-20'} flex flex-col justify-between`}
    >
      <div>
        <img src="https://via.placeholder.com/80" alt="User" className="w-16 h-16 rounded-full mx-auto my-6" />
        <ul className="flex-grow">
          <li className="mb-6">
            <button onClick={() => onSelect('home')} className="flex items-center space-x-5 pl-7 justify-center">
              <HomeIcon className="w-6 h-6" />
              {isOpen && <span className="whitespace-nowrap">Home</span>}
            </button>
          </li>
          <li className="mb-6">
            <button onClick={() => onSelect('agregar')} className="flex items-center space-x-5 pl-7 justify-center">
              <PlusIcon className="w-6 h-6" />
              {isOpen && <span className="whitespace-nowrap">Agregar</span>}
            </button>
          </li>
          <li className="mb-6">
            <button onClick={() => onSelect('estadisticas')} className="flex items-center space-x-5 pl-7 justify-center">
              <ChartBarIcon className="w-6 h-6" />
              {isOpen && <span className="whitespace-nowrap">Estadísticas</span>}
            </button>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <button className="flex items-center space-x-4 pl-2 justify-center">
          <ArrowLeftOnRectangleIcon className="w-6 h-6" />
          {isOpen && <span className="whitespace-nowrap">Salir</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;