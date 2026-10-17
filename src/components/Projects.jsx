import React, { useEffect, useRef } from 'react'
import { PROJECTS } from '../constants'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectRef = useRef(null)

    useEffect(() => {
        const ctx=gsap.context(() => {
            gsap.from(".project-card", {
                opacity: 0,
                y: 50,
                duration:1,
                ease: 'power3.out',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            })
        }, projectRef);
        return ()=> ctx.revert();
    },[])

    return (
        <section className='pt-16' id='projects' ref={projectRef}>
            <div className='px-4'>
                <h2 className='mb-8 text-center text-3xl font-medium lg:text-4xl'>Projects</h2>
                <div className='flex flex-wrap justify-center'>
                    {PROJECTS.map((project) => {
                        return (
                            <div key={project.id} className='flex w-full flex-col p-4 md:w-1/2 lg:w-1/3'>
                                <div className=' flex-grow overflow-hidden rounded-xl border border-white/20'>
                                    <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                        <img
                                            src={project.imgSrc}
                                            alt={project.title}
                                            loading='lazy'
                                            className={`h-60 w-full ${project.imgContain ? 'object-contain bg-white/10 p-6' : 'object-cover object-top'}`}
                                        />
                                    </a>
                                    <div className='p-6'>
                                        <h3 className='mb-2 text-lg font-medium lg:text-2xl'>{project.title}</h3>
                                        <p className='mb-4'>{project.description}</p>
                                        <div className='mb-4 flex flex-wrap gap-4 text-sm font-semibold'>
                                            {project.live && (
                                                <a href={project.live} target='_blank' rel='noopener noreferrer' className='rounded-full bg-[#f2c9b4] px-3 py-1 text-stone-900 hover:bg-[#f7ddd0]'>Live demo ↗</a>
                                            )}
                                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='py-1 text-[#ffd9c7] hover:underline'>View on GitHub →</a>
                                        </div>
                                        <div className='mb-4'>
                                            <strong>Tech Stack: </strong>
                                            <ul>
                                                {project.techStack.map((tech, index) => (
                                                    <li
                                                        key={index}
                                                        className='mb-1 mr-2 inline-block rounded-full border-2 border-white/30 px-3 py-1 text-sm font-semibold'
                                                    >
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Projects