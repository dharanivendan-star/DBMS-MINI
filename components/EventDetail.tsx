import React from 'react';
import { Event, Registration } from '../types';
import RegistrationForm from './RegistrationForm';
import { ArrowLeftIcon, CalendarIcon, LocationMarkerIcon, CheckCircleIcon, TicketIcon, UserIcon } from './IconComponents';

interface EventDetailProps {
  event: Event;
  onBack: () => void;
  onRegister: (registration: Omit<Registration, 'registrationDate'>) => void;
  isRegistered: boolean;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onBack, onRegister, isRegistered }) => {
  return (
    <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-2xl animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center text-brand-primary hover:text-brand-dark font-semibold mb-6 transition-colors"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to All Events
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left Column - Image and Details */}
        <div className="lg:col-span-3">
          <img src={event.imageUrl} alt={event.title} className="w-full h-auto object-cover rounded-lg shadow-md mb-6" />
          <h2 className="text-4xl font-bold font-serif text-brand-dark mb-4">{event.title}</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-700 mb-6">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2 text-brand-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <LocationMarkerIcon className="w-5 h-5 mr-2 text-brand-primary" />
              <span>{event.location}</span>
            </div>
             <div className="flex items-center">
              <UserIcon className="w-5 h-5 mr-2 text-brand-primary" />
              <span>Organized by: {event.organizer}</span>
            </div>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed">{event.longDescription}</p>
        </div>

        {/* Right Column - Registration */}
        <div className="lg:col-span-2">
          <div className="bg-brand-light p-6 rounded-lg shadow-inner sticky top-24">
            {isRegistered ? (
              <div className="text-center animate-fade-in">
                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-serif text-brand-dark">Registration Confirmed!</h3>
                <p className="mt-2 text-gray-700">Thank you for registering for {event.title}. A confirmation email has been sent to you.</p>
                <p className="mt-4 text-sm text-gray-500">You will be redirected shortly...</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold font-serif text-brand-dark mb-6 flex items-center">
                  <TicketIcon className="w-6 h-6 mr-3 text-brand-primary"/>
                  Register Now
                </h3>
                <RegistrationForm eventId={event.id} onSubmit={onRegister} />
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default EventDetail;