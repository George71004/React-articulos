import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`flex transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-48' : 'ml-20'}`}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <Sidebar onSelect={setSelectedSection} />
      <div className="flex-1 p-6">
        {selectedSection === 'home' && <Home />}
        {/* Puedes agregar más secciones aquí */}
      </div>
    </div>
  );
};

export default App;
