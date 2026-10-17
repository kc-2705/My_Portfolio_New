import React, { useEffect, useRef } from 'react';
import { EXPERIENCES } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, experienceRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="work" ref={experienceRef}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-medium lg:text-4xl">Experience</h2>
        <div className="relative flex flex-col space-y-12 border-l-2 border-indigo-200 pl-6 md:pl-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="experience-item relative flex flex-col items-start justify-between md:flex-row before:absolute before:-left-[33px] md:before:-left-[41px] before:top-1.5 before:h-4 before:w-4 before:rounded-full before:border-4 before:border-indigo-600 before:bg-white"
            >
              <div className="w-full text-sm font-semibold text-slate-500 md:w-1/4 lg:text-lg">
                {exp.yearRange}
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="mb-2 text-lg lg:text-2xl">
                  <span className="bg-gradient-to-b from-indigo-700 to-indigo-500 bg-clip-text text-transparent font-semibold">
                    {exp.role}, {exp.company}
                  </span>
                </h3>
                {exp.location && <p className="mb-3 text-sm text-slate-500">{exp.location}</p>}

                <ul className="mb-4 list-disc pl-5 text-sm lg:text-base">
                  {exp.description.map((point, id) => (
                    <li key={id}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, id) => (
                    <span
                      key={id}
                      className="rounded-full border-2 border-slate-300 px-3 py-1 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
