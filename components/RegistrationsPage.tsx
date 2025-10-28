import React from 'react';
import { Registration, Event } from '../types';
import { TicketIcon, UserIcon } from './IconComponents';

interface RegistrationsPageProps {
  registrations: Registration[];
  events: Event[];
}

const RegistrationsPage: React.FC<RegistrationsPageProps> = ({ registrations, events }) => {
  const totalTickets = registrations.reduce((sum, reg) => sum + reg.tickets, 0);

  const getEventTitle = (eventId: number) => {
    return events.find(event => event.id === eventId)?.title || 'Unknown Event';
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold font-serif text-brand-dark mb-8 text-center">Event Registrations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <UserIcon className="w-12 h-12 text-brand-primary" />
          <div>
            <p className="text-gray-600 text-sm">Total Registrations</p>
            <p className="text-3xl font-bold text-brand-dark">{registrations.length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <TicketIcon className="w-12 h-12 text-brand-secondary" />
          <div>
            <p className="text-gray-600 text-sm">Total Tickets Sold</p>
            <p className="text-3xl font-bold text-brand-dark">{totalTickets}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-xl overflow-x-auto">
        {registrations.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No registrations have been made yet.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registrant Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tickets</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {registrations.map((reg, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{reg.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reg.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{getEventTitle(reg.eventId)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reg.tickets}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(reg.registrationDate).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default RegistrationsPage;
