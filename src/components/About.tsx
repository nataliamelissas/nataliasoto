// src/components/AboutMe.tsx
import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <div className="intro-container bg-sky-800 p-8 text-slate-200 ">
      <h2 className="text-3xl font-bold mb-4 text-slate-200">About Me</h2>
      <p className="">
        Hey there, thanks for checking out my portfolio! I'm a full-stack engineer with a deep interest in improving Computer Science education. I graduated from the University of Utah with a B.S. in Computer Science and have had various professional software engineer roles that have given me valuable experience. I'm also working toward an M.Ed. in Instructional Design and Educational Technology to learn how to design beautiful and effective learning solutions. I have enjoyed being involved with STEM education organizations and expect future opportunities in this area. In 2018, I taught and developed a Python Game Development course at the University of Utah's K-12 summer coding camp. Additionally, I organized networking events, hosted technical workshops, and maintained the Society of Women Engineers WordPress website for an academic year. In 2019, I played a key role in launching Club Ability, a local Utah organization that fosters diversity in STEM and provides coding education to K-12 students. 
      </p>
      <p className="mt-4">
        When I'm not coding, you can find me reading, at the gym, or spending time with loved ones. Feel free to contact me if you'd like to work together.
      </p>
      <p className='mt-4'>Natalia Soto 2024. View the code on <a href="https://github.com/nataliamelissas/nataliasoto" className='text-purple-400'>Github</a>.</p>
    </div>
  );
};

export default IntroSection;