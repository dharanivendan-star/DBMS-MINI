import React, { useState } from 'react';
import { Registration } from '../types';

interface RegistrationFormProps {
  eventId: number;
  onSubmit: (registration: Omit<Registration, 'registrationDate'>) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ eventId, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState('1');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    const numTickets = parseInt(tickets, 10);
    if (isNaN(numTickets) || numTickets < 1) newErrors.tickets = 'At least one ticket is required';
    if (numTickets > 10) newErrors.tickets = 'Maximum of 10 tickets per registration';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      onSubmit({ eventId, name, email, tickets: parseInt(tickets, 10) });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border bg-white ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary`}
            required
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 block w-full px-3 py-2 border bg-white ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary`}
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="tickets" className="block text-sm font-medium text-gray-700">Number of Tickets</label>
          <input
            type="number"
            id="tickets"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
            min="1"
            max="10"
            className={`mt-1 block w-full px-3 py-2 border bg-white ${errors.tickets ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary`}
            required
          />
          {errors.tickets && <p className="mt-1 text-sm text-red-500">{errors.tickets}</p>}
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-brand-secondary hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary disabled:bg-gray-400 transition-colors"
      >
        {isSubmitting ? 'Processing...' : 'Complete Registration'}
      </button>
    </form>
  );
};

export default RegistrationForm;