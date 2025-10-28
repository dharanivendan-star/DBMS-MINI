
import React from 'react';
import { Event } from '../types';
import EventCard from './EventCard';

interface EventListProps {
  events: Event[];
  onSelectEvent: (event: Event) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onSelectEvent }) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-serif text-brand-dark tracking-tight">Upcoming Events</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover and register for a diverse range of cultural experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {events.map((event, index) => (
          <EventCard 
            key={event.id} 
            event={event} 
            onSelectEvent={onSelectEvent} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
