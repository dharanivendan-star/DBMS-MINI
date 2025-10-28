import React, { useState, useEffect } from 'react';
import { Event, Registration } from './types';
import { MOCK_EVENTS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import RegistrationsPage from './components/RegistrationsPage';

type Page = 'home' | 'about' | 'contact' | 'registrations';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedEvent(null);
    setIsRegistered(false);
  };
  
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedEvent(null);
    setIsRegistered(false);
  }

  const handleRegister = (registration: Omit<Registration, 'registrationDate'>) => {
    console.log('New Registration:', registration);
    // Simulate API call
    setTimeout(() => {
      const newRegistration: Registration = {
        ...registration,
        registrationDate: new Date().toISOString(),
      };
      setRegistrations(prev => [...prev, newRegistration]);
      setIsRegistered(true);
    }, 1000);
  };
  
  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => {
        handleBackToList();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  const renderContent = () => {
    switch(currentPage) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'registrations':
        return <RegistrationsPage registrations={registrations} events={MOCK_EVENTS} />;
      case 'home':
      default:
        return !selectedEvent ? (
          <EventList events={MOCK_EVENTS} onSelectEvent={handleSelectEvent} />
        ) : (
          <EventDetail 
            event={selectedEvent} 
            onBack={handleBackToList} 
            onRegister={handleRegister}
            isRegistered={isRegistered}
          />
        );
    }
  }


  return (
    <div className="bg-brand-light min-h-screen flex flex-col font-sans text-brand-text">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="transition-opacity duration-500 ease-in-out">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;