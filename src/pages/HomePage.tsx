import React from 'react';
import ContactBanner from '../components/ContactBanner';
import ProfileImage from '../components/ProfileImage';
import Image from '../components/Image';
import img from '../assets/mission-profile-2.jpg'
import ScreenSection from '../components/ScreenSection';
import CollapsibleMenu from '../components/CollapsableMenu';
import proofpointImg from '../assets/s67VT62Z_400x400.png';
import utesImg from '../assets/utes.png';
import ivantiImg from '../assets/ivanti-logo.gif';
import pluralsightImg from '../assets/pluralsight.webp';

const softwareExpMenuItems = [
  { title: 'Full-time Software Engineer', date: 'Feb 2023 - Present', description: 'During my experience as a full-time Software Engineer, I have: \n• Developed and launched a new e-commerce checkout experience using React and Apollo GraphQL at Pluralsight \n• Debugged C# and C++ code in Visual Studio at Ivanti \n• Worked closely with senior engineers to fix difficult defects in Ivanti\'s flagship product', site: 'https://www.ivanti.com/products/endpoint-security-for-endpoint-manager'},
  { title: 'Software Engineer Internships', date: 'May 2019 - Aug 2020, May 2022 - August 2022', description: '• Successfully managed high-profile tasks and collaborated with cross-functional teams, effectively communicating ideas\n• Developed and maintained Cloud App Security Broker SaaS using Scala and Apollo GraphQL to provide visibility into user-granted access for Third Party Apps, unwanted network traffic, and policy controls for administrators\n• Skillfully built a highly useful AWS cost optimization tool in a short period of time using Go', site: 'https://www.proofpoint.com/us/products/cloud-security/cloud-app-security-broker'},
  { title: 'Summer Coding Camp Instructor', date: 'May - Jul 2018', description: '• Executed and created new Python Game Development lessons to high-school students in the University of Utah Summer GREAT Camp \n• Speedily troubleshooted code errors and provided creative advice to students \n• Motivated students to think metacognitively about their problem-solving approach \n• Coordinated with another instructor to form lesson plans. Advanced high school levels were taught in five one-week intervals', site: 'https://users.cs.utah.edu/~dejohnso/GREAT/' },
  {title: 'Projects', date: 'Various', description: '• Arete: a collaborative time-management app for college students. This was my University of Utah Capstone Project. Tech stack: Typescript, React, AWS, Go, GraphQL. \n• Earthquake Data Visualization: Used Javascript and the D3.js UI library to create a visualization of earthquake magnitudes in San Francisco. I took ownership of all the D3 code on the homepage. https://nataliamelissas.github.io/earthquake-damage-visualization/ \n• This portfolio site: Using React, Tailwind CSS, and Vite to create a clean and responsive webpage.'}
];

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Section 1 */}
      <section className="bg-purple-950 text-white h-screen flex items-center">
        <div className="flex-row justify-left text-left ml-10">
          <p className="text-2xl">Hi, I'm</p>
          <h1 className="text-6xl font-bold mb-4">Natalia Soto.</h1>
          <h1 className="text-5xl mb-4"><span className='opacity-50'>I'm a Software Engineer at </span><span className='opacity-100 text-yellow-300'>Ivanti.</span></h1>
          <p className="text-2xl opacity-50">I'm currently focusing on C#/C++ development and learning how to improve computer science instruction.</p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white text-slate-800 h-screen flex items-center justify-center">
        <div className="flex-row justify-left text-center m-10">
          <h2 className="text-4xl font-bold mb-4">Quick Facts</h2>
          <h2 className="text-2xl mb-4">I am...</h2>
          <p className="text-lg">a Computer Science and EdTech enthusiast</p>
          <p className="text-lg">an Associate Software Engineer at Ivanti</p>
          <p className="text-lg">an Instructional Design and Educational Technology Master's student at the University of Utah</p>
          <p className="text-lg">training for a Half-Marathon and reading Malcom Gladwell books</p>
        </div>
      </section>
      
      
      {/* Section 3 */}
      <ScreenSection mode='dark' header='Software Experience' subheader='From full-time work to making this site.'>
        <div className='my-10'>
          <div className='columns-12'>
            <Image alt='utes' imageUrl={utesImg} />
            <Image alt='proofpoint' imageUrl={proofpointImg} />
            <Image alt='pluralsight' imageUrl={pluralsightImg} />
            <Image alt='ivanti' imageUrl={ivantiImg} />
          </div>
          <CollapsibleMenu items={softwareExpMenuItems}/>
        </div>
      </ScreenSection>

      {/* Section 4 */}
      <section className="bg-white text-slate-800 h-screen flex items-top">
        <div className="flex-row justify-left text-left m-10">
          <h2 className="text-4xl font-bold mb-4">Educational Technology Experience</h2>
          <p className="text-lg">Volnuteering with local clubs to obtaining an <a href="https://ed-psych.utah.edu/instructional-design/" className='text-purple-600'>IDET M.Ed.</a></p>
          {/* MeD */}
          <div className='pt-10'>
            <span className='text-2xl'>
              <line className='border border-slate-400 mr-5'/>
              Instructional Design and Educational Technology (IDET) M.Ed.
            </span>
          </div>
          <div>
            <p className='text-xl pt-5' >
              Currently working towards the M.Ed. for the IDET program at the University of Utah.
            </p>
            <p className='text-xl' >
              Courses taken: Foundations of Instructional Design, Foundations of Learning, Human-Computer Interaction, Multimedia Design
            </p>
            <button className='bg-sky-600 mt-2'><a href='https://nataliamelissasdev.wixsite.com/natalia-soto-idet' className='text-white'>Visit site</a></button>
          </div>         
          {/* Projects */}
          <div className='pt-10'>
            <span className='text-2xl'>
              <line className='border border-slate-400 mr-5'/>
              Projects 
            </span>
          </div>
          <div>
            <p className='text-xl pt-5' >
              Macros4U - a mobile app created to help learn to count their macros and stay at a healthy weight. 
            </p>
            <button className='bg-sky-600 mt-2'><a href='https://nataliamelissasdev.wixsite.com/natalia-soto-idet' className='text-white'>Visit site</a></button>
          </div>
          {/* Volunteer */}
          <div className='pt-10'>
            <span className='text-2xl'>
              <line className='border border-slate-400 mr-5'/>
              Volunteer 
            </span>
          </div>
          <div>
            <p className='text-xl pt-5' >
              ClubAbility - Taught free coding classes to children of diverse backgrounds with the mission of increasing the number of women and people with disabilities that will major in Computer Science. Used Scratch, which was developed by MIT, to allow users to learn the basics of computer science with a wide variety of animations, stories, games that can be made ranging from easy to advanced. Collected laptop machines and other equipment for this cause. 
            </p>
            <button className='bg-sky-600 mt-2'><a href='https://www.clubability.org/' className='text-white'>Visit site</a></button>
          </div>
        </div>
      </section>
      
      {/* Section 5 */}
      <section id='contact' className="bg-purple-950 text-white h-screen flex items-center justify-center">
        <div className="text-left m-10">
          <div>
            <ProfileImage imageUrl={img}/>
          </div>
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg">If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you!</p>
          <div className='contact-info-container my-5'>
            <p className="text-lg">(801)649-7843</p>
            <p className="text-lg">nataliamelissas@gmail.com</p>
          </div>
          <div className='flex pt-10'>
            <ContactBanner/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;