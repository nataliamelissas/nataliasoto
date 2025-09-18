// src/components/AboutMe.tsx
import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <div className="intro-container bg-sky-800 p-8 text-slate-200 ">
      <h2 className="text-3xl font-bold mb-4 text-slate-200">About Me</h2>
      <p className="">
      Hey there, thanks for checking out my portfolio! I'm a full-stack engineer who loves to learn through hands-on projects. I graduated from the University of Utah with a B.S. in Computer Science and am pursuing a Master's in Instructional Design and Educational Technology. Through various professional software engineering roles, I've gained valuable experience that spans multiple tech stacks. I'm fascinated by how humans learn and passionate about creating teachable AI systems that enhance human learning. This interest has led me to actively engage with STEM education through teaching a Python Game Development course at the University of Utah and playing a key role in launching Club Ability, a local Utah coding organization. Most recently, I started TaliTech, a computer science summer program where I'm developing custom software to more effectively teach coding skills to K-12 students during summer camps.
       </p>
      <p className="mt-4">
        When I'm not coding, you can find me reading, at the gym, or spending time with loved ones. Feel free to contact me if you'd like to work together.
      </p>
      <p className='mt-4'>Natalia Soto 2025. View the code on <a href="https://github.com/nataliamelissas/nataliasoto" className='text-purple-400'>Github</a>.</p>
    </div>
  );
};

export default IntroSection;