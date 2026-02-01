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
import resume from '../../public/resume.pdf';

const softwareExpMenuItems = [
  { title: 'Full-time Software Engineer', date: 'Feb 2023 - Present', description: 'During my experience as a full-time Software Engineer, I have: \n• Launched a new, snappy, and responsive e-commerce checkout experience using React, Typescript, New Relic, and Apollo GraphQL at Pluralsight \n• Led efforts to build backend services from the ground-up at Ivanti for highly requested features such as an App Portal, a native app for end-users to manage, download, and install available apps onto their machine \n• Worked closely with senior engineers to optimize Ivanti\'s flagship product (Neurons) while building new event-driven architecture', site: 'https://www.ivanti.com/products/endpoint-security-for-endpoint-manager'},
  { title: 'Software Engineer Internships', date: 'May 2019 - Aug 2020, May 2022 - August 2022', description: '• Successfully managed high-profile tasks and collaborated with cross-functional teams, effectively communicating ideas\n• Developed and maintained Cloud App Security Broker SaaS using Scala and Apollo GraphQL to provide visibility into user-granted access for Third Party Apps, unwanted network traffic, and policy controls for administrators\n• Skillfully built a highly useful AWS cost optimization tool in a short period of time using Go', site: 'https://www.proofpoint.com/us/products/cloud-security/cloud-app-security-broker'},
  { title: 'Summer Coding Camp Instructor', date: 'May - Jul 2018', description: '• Executed and created new Python Game Development lessons to high-school students in the University of Utah Summer GREAT Camp \n• Speedily troubleshooted code errors and provided creative advice to students \n• Motivated students to think metacognitively about their problem-solving approach \n• Coordinated with another instructor to form lesson plans. Advanced high school levels were taught in five one-week intervals', site: 'https://users.cs.utah.edu/~dejohnso/GREAT/' },
  { title: 'Projects', date: 'Various', description: '• Arete: a collaborative time-management app for college students. This was my University of Utah Capstone Project. Tech stack: Typescript, React, AWS, Go, GraphQL. \n• Earthquake Data Visualization: Used Javascript and the D3.js UI library to create a visualization of earthquake magnitudes in San Francisco. I took ownership of all the D3 code on the homepage. \n• This portfolio site: Using React, Tailwind CSS, and Vite to create a clean and responsive webpage.'}
];

interface HomePageProps {
  contactSectionRef: React.LegacyRef<HTMLElement>
}

const HomePage: React.FC<HomePageProps> = ({contactSectionRef}) => {
  return (
    <div className="font-sans">
      {/* Section 1 */}
      <section className="bg-purple-950 text-white min-h-screen flex items-center">
        <div className="flex-row justify-left text-left ml-10">
          <p className="text-2xl">Hi, I'm</p>
          <h1 className="text-6xl font-bold mb-4">Natalia Soto.</h1>
          <h1 className="text-5xl mb-4"><span className='opacity-50'>I'm a Software Engineer at </span><span className='opacity-100 text-yellow-300'>Ivanti.</span></h1>
          <p className="text-2xl opacity-50">This website was built using Typescript, React, Vite, and Tailwind CSS and is hosted on a GitHub page that is connected to my domain. For work, I develop fullstack cloud microservices primarily in C# and Typescript with Angular. Drawing from both computer science and educational technology backgrounds, I approach software engineering with a unique perspective on how humans think and learn. This human-centered understanding fuels my current development work and drives my desire to learn and teach programming to others.</p>
          
          {/* TaliTech Callout */}
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-lg border border-yellow-300/50 backdrop-blur-sm">
            <p className="text-lg">
              <span className="text-yellow-300 font-semibold">✨ Check out my website for </span>
              <a 
                href="https://talitech.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 font-bold hover:text-yellow-200 underline underline-offset-4 decoration-2 transition-colors"
              >
                TaliTech
              </a>
              <span className="text-yellow-300 font-semibold">, a small startup in Bountiful, UT teaching kids how to code</span>
              <span className="opacity-70 text-sm ml-2">(built with Next.js, TypeScript, React, and AWS)</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-10">
          <button 
            onClick={() => window.open(resume, '_blank')}
            className="bg-yellow-300 text-purple-950 px-6 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors"
          >
            View Resume
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white text-slate-800 min-h-screen flex items-center justify-center">
      <div className="flex-row justify-left text-center m-10">
        <h2 className="text-4xl font-bold mb-4">Quick Facts</h2>
        <h2 className="text-2xl mb-4">I am...</h2>
        <p className="text-lg">a full-stack software engineer with 3+ years of professional experience</p>
        <p className="text-lg">skilled in C#/C++, TypeScript, React, Angular, AWS, Scala, and Python across multiple tech companies</p>
        <p className="text-lg">bridging human cognition research with AI/ML through my EdTech Master's degree</p>
        <p className="text-lg">teaching K-12 students computational thinking and programming in summer camps</p>
        <p className='text-lg'>currently buliding a website at TaliTech.org and an AI chat bot with Azure AI Foundry</p>
        <p className="text-lg">passionate about lifelong learning</p>
      </div>
    </section>
      
      
      {/* Section 3 */}
      <ScreenSection mode='dark' header='Software Engineering Experience' subheader='Some of my recent software engineering experience.'>
        <div className='my-12'>
          <div className='columns-8 gap-4 mb-10'>
            <Image alt='utes' imageUrl={utesImg} />
            <Image alt='proofpoint' imageUrl={proofpointImg} />
            <Image alt='pluralsight' imageUrl={pluralsightImg} />
            <Image alt='ivanti' imageUrl={ivantiImg} />
          </div>
          <CollapsibleMenu items={softwareExpMenuItems}/>
        </div>
      </ScreenSection>

      {/* Section 4 */}
      <section className="bg-white text-slate-800 min-h-screen flex items-top">
        <div className="flex-row justify-left text-left m-10">
          <h2 className="text-4xl font-bold mb-4">Educational Technology Experience</h2>
          <p className="text-lg">Volnuteering work and obtaining an <a href="https://ed-psych.utah.edu/instructional-design/" className='text-purple-600'>IDET M.Ed. degree</a></p>
          {/* MeD */}
          <div className='pt-10'>
            <span className='text-2xl'>
              <line className='border border-slate-400 mr-5'/>
              Instructional Design and Educational Technology (IDET) M.Ed.
            </span>
          </div>
          <div>
            <p className='text-xl pt-5' >
              M.Ed. for the IDET program at the University of Utah.
            </p>
            <p className='text-xl' >
              Courses taken: Human-Computer Interaction, Multimedia Design, Advanced Instructional Design
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
      <section id='contact-section' ref={contactSectionRef} className="bg-purple-950 text-white min-h-screen flex items-center justify-left">
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
            <ContactBanner linkedInBlack={false} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;