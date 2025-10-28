
import React from 'react';
import { Event } from '../types';
import { CalendarIcon, LocationMarkerIcon } from './IconComponents';

interface EventCardProps {
  event: Event;
  onSelectEvent: (event: Event) => void;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, onSelectEvent, index }) => {
  const animationDelay = `${index * 100}ms`;
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col animate-fade-in-up"
      style={{ animationDelay }}
    >
      <img className="w-full h-56 object-cover" src={event.imageUrl} alt={event.title} />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide">{event.category}</p>
        <h3 className="text-xl font-bold font-serif text-brand-dark mt-2 mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <CalendarIcon className="w-4 h-4 mr-2 text-brand-primary" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <LocationMarkerIcon className="w-4 h-4 mr-2 text-brand-primary" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-700 flex-grow mb-4">{event.description}</p>
        <button
          onClick={() => onSelectEvent(event)}
          className="mt-auto w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-md hover:bg-brand-dark transition-colors duration-300"
        >
          View Details & Register
        </button>
      </div>
       <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EventCard;
