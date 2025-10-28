import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold font-serif text-brand-dark mb-6 text-center">About Cultural Events Hub</h2>
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          Welcome to the <span className="font-semibold text-brand-primary">Cultural Events Hub</span>, your premier destination for discovering and engaging with the vibrant world of cultural arts and entertainment. Our mission is to connect communities with enriching experiences, from world-class music festivals and art exhibitions to intimate theatre performances and culinary fairs.
        </p>
        <p>
          Founded in 2024, our platform was born from a passion for the arts and a desire to make cultural events more accessible to everyone. We believe that art, in all its forms, has the power to inspire, educate, and bring people together. That's why we've created a curated, easy-to-use portal where you can explore upcoming events, learn about organizers, and seamlessly register for your next adventure.
        </p>
        <p>
          Our team is dedicated to supporting both event organizers and attendees. We provide a robust platform for promoters to showcase their events while offering our users a smooth and secure registration process.
        </p>
        <p>
          Thank you for joining our community. We invite you to explore the diverse array of events we have to offer and find something that sparks your curiosity and passion.
        </p>
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

export default AboutPage;
