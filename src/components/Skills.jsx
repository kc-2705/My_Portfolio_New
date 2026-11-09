import React from 'react';
import { SKILL_GROUPS } from '../constants';
import SectionHeading from './SectionHeading';

const yrsLabel = (y) => (y < 1 ? '<1 yr' : `${y % 1 ? Math.floor(y) + '+' : y} yr${y >= 2 ? 's' : ''}`);

const Skills = () => (
    <section id='skills'>
        <SectionHeading eyebrow='Toolbox' title='Skills' />
        <p className='-mt-5 mb-6 text-sm text-slate-500'>Bars show years of hands-on work with each tool (full bar = 5+ years).</p>
        <div className='grid gap-4 md:grid-cols-2'>
            {SKILL_GROUPS.map((group) => (
                <div key={group.title} className='card p-5'>
                    <h3 className='mb-4 text-base font-bold text-slate-900'>{group.title}</h3>
                    <ul className='grid gap-3'>
                        {group.items.map(({ name, yrs, icon: Icon, color }) => (
                            <li key={name} className='grid grid-cols-[28px_1fr_56px] items-center gap-3'>
                                <span className='flex h-7 w-7 items-center justify-center rounded-md bg-slate-50' aria-hidden='true'>
                                    <Icon style={{ color }} className='h-[18px] w-[18px]' />
                                </span>
                                <div className='min-w-0'>
                                    <p className='truncate text-sm font-semibold text-slate-800'>{name}</p>
                                    <div className='mt-1 h-1.5 rounded-full bg-slate-100'>
                                        <div className='h-1.5 rounded-full bg-indigo-500' style={{ width: `${Math.min(100, (yrs / 5) * 100)}%` }} />
                                    </div>
                                </div>
                                <span className='text-right text-xs font-semibold tabular-nums text-slate-500'>{yrsLabel(yrs)}</span>
                            </li>
                        ))}
                    </ul>
                    {group.also?.length > 0 && (
                        <div className='mt-4 border-t border-slate-100 pt-3'>
                            <p className='mb-2 text-xs font-bold uppercase tracking-wider text-slate-500'>Also worked with</p>
                            <ul className='flex flex-wrap gap-1.5'>
                                {group.also.map((a) => <li key={a} className='rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm font-medium text-slate-700'>{a}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
