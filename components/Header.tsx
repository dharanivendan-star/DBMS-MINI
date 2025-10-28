import React from 'react';
import { CalendarIcon } from './IconComponents';

interface HeaderProps {
    onNavigate: (page: 'home' | 'about' | 'contact' | 'registrations') => void;
    currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const navLinkClasses = (page: string) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
      currentPage === page 
      ? 'text-white bg-brand-primary/50' 
      : 'text-gray-300 hover:text-white'
    }`;

  return (
    <header className="bg-brand-dark shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary rounded-lg p-1">
            <CalendarIcon className="h-8 w-8 text-brand-secondary" />
            <h1 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-tight">
              Cultural Events Hub
            </h1>
          </button>
          <nav className="flex items-center space-x-2">
            <button onClick={() => onNavigate('home')} className={navLinkClasses('home')}>Home</button>
            <button onClick={() => onNavigate('about')} className={navLinkClasses('about')}>About</button>
            <button onClick={() => onNavigate('contact')} className={navLinkClasses('contact')}>Contact</button>
            <button onClick={() => onNavigate('registrations')} className={navLinkClasses('registrations')}>Registrations</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;