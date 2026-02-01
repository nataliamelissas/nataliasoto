import React from 'react';
import ContactBanner from '../components/ContactBanner';
import ProfileImage from '../components/ProfileImage';
import Image from '../components/Image';
import img from '../assets/mission-profile-2.jpg'
import CollapsibleMenu from '../components/CollapsableMenu';
import proofpointImg from '../assets/s67VT62Z_400x400.png';
import utesImg from '../assets/utes.png';
import ivantiImg from '../assets/ivanti-logo.gif';
import pluralsightImg from '../assets/pluralsight.webp';
import resume from '../../public/resume.pdf';

const softwareExpMenuItems = [
  { 
    title: 'Software Engineer II at Ivanti', 
    date: '2023 - Present', 
    description: '• Own features end-to-end across Angular/TypeScript frontend and C#/Azure backend microservices in large-scale distributed systems\n• Pioneer AI-assisted development as primary adopter; invited to Engineering AI Guild to drive AI innovation across teams\n• Built AI-powered RAG troubleshooting system using Azure AI Foundry and C# for real-time IT support\n• Optimized production performance: 40% MongoDB query speed gains via compound indexing\n• Delivered brownbag session on Azure DevOps MCP integration with VS Code', 
    site: 'https://www.ivanti.com/products/neurons'
  },
  { 
    title: 'Software Engineer at Pluralsight', 
    date: '2023', 
    description: '• Developed cloud-native checkout system using AWS event-driven architecture with React, NodeJS, TypeScript, and NewRelic monitoring\n• Designed responsive UI leveraging React and Apollo GraphQL to deliver fast, scalable customer experiences', 
    site: 'https://www.pluralsight.com'
  },
  { 
    title: 'Software Engineer Intern at Proofpoint', 
    date: '2019 - 2020, 2022', 
    description: '• Built automated AWS cost monitoring platform using Python, AWS Cost Explorer API, and MS Teams webhooks to drive cloud efficiency\n• Developed ShadowIT UI features in ReactJS and TypeScript, migrating from legacy JavaScript\n• Engineered cloud security capabilities in Scala and GraphQL with access controls and traffic monitoring', 
    site: 'https://www.proofpoint.com/us/products/cloud-security/cloud-app-security-broker'
  },
  { 
    title: 'Coding Camp Instructor', 
    date: '2018', 
    description: '• Created Python Game Development lessons for high-school students at University of Utah Summer GREAT Camp\n• Mentored students on computational thinking and metacognitive problem-solving approaches\n• Coordinated with instructors to develop curriculum for advanced levels', 
    site: 'https://users.cs.utah.edu/~dejohnso/GREAT/GREATCampVideo2015.mp4' 
  }
];

interface HomePageProps {
  contactSectionRef: React.LegacyRef<HTMLElement>
}

const HomePage: React.FC<HomePageProps> = ({contactSectionRef}) => {
  return (
    <div className="font-sans">
      {/* Section 1 - Hero */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white min-h-screen flex items-center relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-800/10 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-20 py-20 relative z-10">
          {/* Greeting */}
          <p className="text-lg tracking-widest uppercase text-purple-300 mb-4">Hi, I'm</p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">
            Natalia <span className="font-semibold">Soto</span>
          </h1>
          
          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-light mb-10">
            <span className="text-white/60">Software Engineer at </span>
            <span className="text-amber-400 font-medium">Ivanti</span>
          </h2>
          
          {/* Bio */}
          <p className="text-lg leading-relaxed text-white/70 max-w-2xl mb-8">
            This website was built using Typescript, React, Vite, and Tailwind CSS. For work, I develop fullstack cloud microservices in C# and Typescript with Angular. With backgrounds in both computer science and educational technology, I bring a unique perspective on how humans think and learn - fueling my development work and drive to teach programming.
          </p>
          
          {/* TaliTech Callout */}
          <div className="mb-12">
            <a 
              href="https://talitech.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-purple-500/10 border border-amber-400/40 hover:border-amber-400/70 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400 font-semibold text-lg">TaliTech</span>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full">New Project</span>
              </div>
              <p className="flex text-white/80 mb-2">
                Check out my website for TaliTech, a startup I'm building to teach kids how to code
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/50">Next.js · TypeScript · React · AWS</span>
                <span className="text-amber-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Visit site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={() => window.open(resume, '_blank')}
            className="group bg-transparent border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-full font-medium hover:bg-amber-400 hover:text-purple-950 transition-all duration-300"
          >
            View Resume
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Section 2 - Quick Facts */}
      <section className="bg-slate-50 text-slate-800 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-purple-600 mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-light text-slate-800">
              Quick <span className="font-semibold">Facts</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Full-Stack Engineer</h3>
              <p className="text-slate-600 text-sm">3+ years building distributed systems with C#, TypeScript, React, Angular, AWS, and Azure</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Development Adopter</h3>
              <p className="text-slate-600 text-sm">Primary adopter of AI tools at work, invited to Engineering AI Guild, experience building RAG systems using Azure AI Foundry</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">EdTech Background</h3>
              <p className="text-slate-600 text-sm">M.Ed. in Instructional Design, bridging human cognition research with technology</p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Coding Educator</h3>
              <p className="text-slate-600 text-sm">Teaching K-12 students computational thinking through TaliTech and summer camps</p>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Startup Founder</h3>
              <p className="text-slate-600 text-sm">Building TaliTech.org - camps and software teaching kids to code using Next.js, React, and AWS</p>
            </div>
            
            {/* Card 6 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Lifelong Learner</h3>
              <p className="text-slate-600 text-sm">Passionate about continuous growth, tinkering with AI tools, and staying on the cutting edge</p>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Section 3 - Software Engineering Experience */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-purple-300 mb-3">Career</p>
            <h2 className="text-4xl md:text-5xl font-light">
              Software Engineering <span className="font-semibold">Experience</span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">Building scalable systems and pioneering AI-assisted development workflows</p>
          </div>
          
          {/* Company Logos */}
          <div className="flex justify-center items-center gap-8 md:gap-12 mb-16 opacity-70">
            <Image alt='ivanti' imageUrl={ivantiImg} />
            <Image alt='pluralsight' imageUrl={pluralsightImg} />
            <Image alt='proofpoint' imageUrl={proofpointImg} />
            <Image alt='utes' imageUrl={utesImg} />
          </div>
          
          <CollapsibleMenu items={softwareExpMenuItems}/>
        </div>
      </section>

      {/* Section 4 - Educational Technology Experience */}
      <section className="bg-slate-50 text-slate-800 py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-purple-600 mb-3">Education</p>
            <h2 className="text-4xl md:text-5xl font-light text-slate-800">
              Educational Technology <span className="font-semibold">Experience</span>
            </h2>
            <p className="text-slate-600 mt-4">Volunteering work and obtaining an <a href="https://ed-psych.utah.edu/instructional-design/" className='text-purple-600 hover:text-purple-700 underline underline-offset-2'>IDET M.Ed. degree</a></p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* M.Ed Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">IDET M.Ed.</h3>
              <p className="text-slate-600 text-sm mb-4">
                Master's in Instructional Design and Educational Technology from the University of Utah.
              </p>
              <p className="text-slate-500 text-xs mb-4">
                Human-Computer Interaction · Multimedia Design · Advanced Instructional Design
              </p>
              <a 
                href='https://talitech.org' 
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium'
              >
                Visit TaliTech →
              </a>
            </div>
            
            {/* Projects Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Macros4U</h3>
              <p className="text-slate-600 text-sm mb-4">
                A mobile app designed to help users learn to count their macros and maintain a healthy weight.
              </p>
              <a 
                href='https://nataliamelissasdev.wixsite.com/natalia-soto-idet' 
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium'
              >
                Learn more →
              </a>
            </div>
            
            {/* Volunteer Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 mb-4 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center p-2.5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">ClubAbility</h3>
              <p className="text-slate-600 text-sm mb-4">
                Taught free coding classes to children of diverse backgrounds, using MIT's Scratch to increase representation in Computer Science.
              </p>
              <a 
                href='https://www.clubability.org/' 
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center text-purple-600 hover:text-purple-700 text-sm font-medium'
              >
                Visit ClubAbility →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 5 - Let's Connect */}
      <section id='contact-section' ref={contactSectionRef} className="bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            {/* Profile Image - Left */}
            <div className="flex justify-center md:justify-start">
              <ProfileImage imageUrl={img}/>
            </div>
            
            {/* Content - Right */}
            <div className="text-center md:text-left">
              <p className="text-sm tracking-widest uppercase text-purple-300 mb-3">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Let's <span className="font-semibold">Connect</span>
              </h2>
              <p className="text-lg text-white/70 mb-8">
                If you want to know more about me or my work, or just want to say hello, I'd love to hear from you!
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
                <a href="tel:8016497843" className="inline-flex items-center gap-2 text-white/80 hover:text-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>(801) 649-7843</span>
                </a>
                <a href="mailto:nataliamelissas@gmail.com" className="inline-flex items-center gap-2 text-white/80 hover:text-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>nataliamelissas@gmail.com</span>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start">
                <ContactBanner linkedInBlack={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;