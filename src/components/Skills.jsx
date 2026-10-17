import React, { useEffect, useRef } from 'react';
import { SKILL_GROUPS } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-group", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });
        }, skillsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className='py-16' id='skills' ref={skillsRef}>
            <div className='mx-auto max-w-6xl px-4'>
                <h2 className='mb-10 text-center text-3xl font-medium lg:text-4xl'>Skills</h2>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {SKILL_GROUPS.map((group) => (
                        <div
                            key={group.title}
                            className='skill-group rounded-xl border border-slate-200 bg-white p-5'
                        >
                            <h3 className='mb-4 bg-gradient-to-b from-indigo-700 to-indigo-500 bg-clip-text text-lg font-semibold text-transparent'>
                                {group.title}
                            </h3>
                            <ul className='space-y-3'>
                                {group.skills.map((skill) => (
                                    <li key={skill.name} className='flex items-center gap-3'>
                                        <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xl'>
                                            {skill.icon}
                                        </span>
                                        <span className='text-sm lg:text-base'>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
