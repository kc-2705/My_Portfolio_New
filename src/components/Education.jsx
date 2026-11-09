import React from 'react'
import { EDUCATION, CERTIFICATIONS } from '../constants';
import SectionHeading from './SectionHeading';

const Education = () => (
    <section id='education'>
        <SectionHeading eyebrow='Background' title='Education' />
        <ol className='-mx-4 grid gap-2 sm:-mx-6'>
            {EDUCATION.map((edu) => (
                <li key={edu.id} className='grid gap-2 rounded-2xl p-4 transition-colors hover:bg-white hover:shadow-sm sm:grid-cols-[140px_1fr] sm:gap-6 sm:p-6'>
                    <div>
                        <p className='text-xs font-bold uppercase tracking-wider text-slate-500'>{edu.duration}</p>
                        <p className='text-xs text-slate-400'>{edu.gpa}</p>
                    </div>
                    <div className='min-w-0'>
                        <h3 className='text-lg font-bold'>{edu.degree}</h3>
                        <p className='font-semibold text-indigo-600'>{edu.institution}</p>
                        <ul className='mt-3 flex flex-wrap gap-1.5'>
                            {edu.courses.split(', ').map((c) => <li key={c} className='tag'>{c}</li>)}
                        </ul>
                    </div>
                </li>
            ))}
        </ol>

        <h3 className='mb-4 mt-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-500'>Certifications & recognition</h3>
        <ul className='grid gap-3 sm:grid-cols-3'>
            {CERTIFICATIONS.map((c) => {
                const m = c.match(/^(.*) \((.*)\)$/);
                return (
                    <li key={c} className='card flex gap-3 p-4'>
                        <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm text-indigo-600' aria-hidden='true'>✓</span>
                        <div className='min-w-0'>
                            <p className='text-sm font-semibold leading-snug text-slate-800'>{m ? m[1] : c}</p>
                            {m && <p className='mt-0.5 text-xs text-slate-500'>{m[2]}</p>}
                        </div>
                    </li>
                );
            })}
        </ul>
    </section>
)

export default Education
