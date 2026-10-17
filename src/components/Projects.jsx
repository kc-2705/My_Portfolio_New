import React, { useEffect, useRef, useState } from 'react'
import { PROJECTS } from '../constants'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectRef = useRef(null)
    const [filter, setFilter] = useState('All')
    const cats = ['All', ...new Set(PROJECTS.slice(1).map((p) => p.category))]
    const shown = PROJECTS.slice(1).filter((p) => filter === 'All' || p.category === filter)

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
                {/* Featured project: full width, image beside the text */}
                {(() => {
                    const f = PROJECTS[0];
                    return (
                        <div className='project-card mx-auto mb-4 max-w-6xl overflow-hidden rounded-xl border border-slate-200 lg:grid lg:grid-cols-2'>
                            <a href={f.live || f.link} target='_blank' rel='noopener noreferrer'>
                                <img src={f.imgSrc} alt={f.title} loading='lazy' className='h-64 w-full object-cover lg:h-full' />
                            </a>
                            <div className='p-6 lg:p-8'>
                                <p className='mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600'>Featured project</p>
                                <h3 className='mb-3 text-2xl font-semibold lg:text-3xl'>{f.title}</h3>
                                <p className='mb-4'>{f.description}</p>
                                <div className='mb-4 flex flex-wrap gap-4 text-sm font-semibold'>
                                    {f.live && <a href={f.live} target='_blank' rel='noopener noreferrer' className='rounded-full bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500'>Live demo ↗</a>}
                                    <a href={f.link} target='_blank' rel='noopener noreferrer' className='py-1 text-indigo-600 hover:underline'>View on GitHub →</a>
                                </div>
                                <ul>
                                    {f.techStack.map((tech) => (
                                        <li key={tech} className='mb-1 mr-2 inline-block rounded-full border-2 border-slate-300 px-3 py-1 text-sm font-semibold'>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })()}
                <div className='mb-2 mt-8 flex flex-wrap justify-center gap-2' role='tablist' aria-label='Filter projects'>
                    {cats.map((c) => (
                        <button key={c} role='tab' aria-selected={filter === c} onClick={() => setFilter(c)}
                            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${filter === c ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-indigo-400'}`}>
                            {c}
                        </button>
                    ))}
                </div>
                <div className='mx-auto flex max-w-6xl flex-wrap justify-center'>
                    {shown.map((project) => {
                        return (
                            <div key={project.id} className='flex w-full flex-col p-4 md:w-1/2 lg:w-1/3'>
                                <div className=' flex-grow overflow-hidden rounded-xl border border-slate-200'>
                                    <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                        <img
                                            src={project.imgSrc}
                                            alt={project.title}
                                            loading='lazy'
                                            className={`h-60 w-full ${project.imgContain ? 'object-contain bg-slate-50 p-6' : 'object-cover object-top'}`}
                                        />
                                    </a>
                                    <div className='p-6'>
                                        <h3 className='mb-2 text-lg font-medium lg:text-2xl'>{project.title}</h3>
                                        <p className='mb-4'>{project.description}</p>
                                        <div className='mb-4 flex flex-wrap gap-4 text-sm font-semibold'>
                                            {project.live && (
                                                <a href={project.live} target='_blank' rel='noopener noreferrer' className='rounded-full bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500'>Live demo ↗</a>
                                            )}
                                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='py-1 text-indigo-600 hover:underline'>View on GitHub →</a>
                                        </div>
                                        <div className='mb-4'>
                                            <strong>Tech Stack: </strong>
                                            <ul>
                                                {project.techStack.map((tech, index) => (
                                                    <li
                                                        key={index}
                                                        className='mb-1 mr-2 inline-block rounded-full border-2 border-slate-300 px-3 py-1 text-sm font-semibold'
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