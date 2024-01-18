import React from 'react';
import ContactBanner from './ContactBanner';


const QuickFacts: React.FC = () => {
  return (
    <div className='quick-facts-container container'>
        <header className="bg-slate-200 text-slate-800 p-10">
            <h1 className="text-2xl font-bold mb-2">Natalia Soto</h1>
            <p className='italic hover:not-italic mb-5'>I'm a Computer Science and EdTech Enthusiast</p>
            <div className="experience-container mb-5">
                <h2 className="text-2x font-bold mb-2">What I'm Doing Lately</h2>
                <ul className="list-none">
                    <li key="0" className="text-md pb-2">
                        Associate Software Engineer at Ivanti
                    </li>
                    <li key="1" className="text-md pb-2">
                        Instructional Design and Educational Technology Master's student at the University of Utah
                    </li>
                    <li key="1" className="text-md pb-2">
                        Training for a Half-Marathon and reading Malcom Gladwell books
                    </li>
                </ul>
            </div>
            <div className='contact-container'>
                <h2 className="text-2x font-bold mb-5">Contact Me</h2>
                <ContactBanner />
            </div>
        </header>
    </div>
  );
};

export default QuickFacts;