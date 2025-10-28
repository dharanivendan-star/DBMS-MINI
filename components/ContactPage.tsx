import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactEmail || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const recipientEmail = "dvsamshana29@gmail.com";
    const subject = `Message from ${name} via Cultural Events Hub`;
    const body = `You have received a new message from:\n\nName: ${name}\nEmail: ${contactEmail}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    setSubmitted(true);
    setName('');
    setContactEmail('');
    setMessage('');

    setTimeout(() => setSubmitted(false), 5000); // Hide message after 5 seconds
  };


  return (
    <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold font-serif text-brand-dark mb-8 text-center">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 text-gray-700">
            <h3 className="text-2xl font-serif text-brand-dark font-semibold">Contact Information</h3>
            <p>
                We'd love to hear from you! Whether you have a question about an event, need assistance with registration, or are an organizer looking to partner with us, please don't hesitate to reach out.
            </p>
            <p><strong>Email:</strong> <a href="mailto:dvsamshana29@gmail.com" className="text-brand-primary hover:underline">dvsamshana29@gmail.com</a></p>
            <p><strong>Phone:</strong> 9677904485</p>
            <p><strong>Address:</strong> No.6,vivekandhar street, Dubai kuruku sandhu, Dubai main road, Dubai.</p>
        </div>

        <div>
           <h3 className="text-2xl font-serif text-brand-dark font-semibold mb-4">Send us a Message</h3>
            {submitted && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                <p className="font-bold">Thank You!</p>
                <p>Your email client should now be open to send your message.</p>
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
                      required
                    />
                </div>
                 <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Your Email</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
                      required
                    />
                </div>
                 <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                      id="contact-message" 
                      rows={4} 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
                      required
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-md hover:bg-brand-dark transition-colors duration-300">
                    Submit
                </button>
            </form>
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

export default ContactPage;