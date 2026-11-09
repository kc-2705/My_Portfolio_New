import React from 'react'
import { PROJECTS } from '../constants'
import SectionHeading from './SectionHeading'

const Links = ({ p, small }) => (
    <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        {p.live && <a href={p.live} target='_blank' rel='noopener noreferrer' className={small ? 'link !text-[13px]' : 'btn-primary !px-4 !py-1.5'}>Live demo ↗</a>}
        <a href={p.link} target='_blank' rel='noopener noreferrer' className={`link ${small ? '!text-[13px]' : ''}`}>GitHub →</a>
        {p.article && <a href={p.article} target='_blank' rel='noopener noreferrer' className={`link ${small ? '!text-[13px]' : ''}`}>Article →</a>}
    </div>
)

const Projects = () => {
    const showcase = PROJECTS.slice(0, 4)
    const more = PROJECTS.slice(4)

    return (
        <section id='projects'>
            <SectionHeading eyebrow='What I have built' title='Projects' />

            <div className='grid gap-12'>
                {showcase.map((p, i) => (
                    <article key={p.id} className='grid items-center gap-6 md:grid-cols-2 md:gap-8'>
                        <a href={p.live || p.link} target='_blank' rel='noopener noreferrer'
                            className={`block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.10)] transition-transform hover:-translate-y-1 ${i % 2 ? 'md:order-2' : ''}`}>
                            <img src={p.imgSrc} alt={p.title} loading='lazy' className='aspect-[16/10] w-full object-cover object-top' />
                        </a>
                        <div className='min-w-0'>
                            <p className='text-xs font-bold uppercase tracking-[0.15em] text-indigo-600'>{p.category}{p.live ? ' · Live' : ''}</p>
                            <h3 className='mt-1 text-xl font-extrabold'>{p.title}</h3>
                            <p className='mt-2 text-[15px] text-slate-600'>{p.description}</p>
                            <ul className='mt-3 flex flex-wrap gap-1.5'>
                                {p.techStack.map((tech) => <li key={tech} className='tag'>{tech}</li>)}
                            </ul>
                            <div className='mt-4'><Links p={p} /></div>
                        </div>
                    </article>
                ))}
            </div>

            <h3 className='mb-4 mt-14 text-xs font-bold uppercase tracking-[0.2em] text-slate-500'>More projects</h3>
            <div className='grid gap-4 sm:grid-cols-2'>
                {more.map((p) => (
                    <article key={p.id} className='card flex gap-4 p-4'>
                        <img src={p.imgSrc} alt='' loading='lazy'
                            className={`h-20 w-28 shrink-0 rounded-lg border border-slate-200 bg-slate-50 ${p.imgContain ? 'object-contain p-2' : 'object-cover object-top'}`} />
                        <div className='min-w-0'>
                            <h4 className='font-bold leading-snug'>{p.title}</h4>
                            <p className='mt-1 line-clamp-2 text-[13px] text-slate-600'>{p.description}</p>
                            <div className='mt-2'><Links p={p} small /></div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects
