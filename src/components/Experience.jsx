import React from 'react';
import { EXPERIENCES, INTERNSHIPS } from '../constants';
import SectionHeading from './SectionHeading';

const JobCard = ({ exp }) => (
  <li className="card p-5 sm:p-6">
    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
      <div className="min-w-0">
        <h3 className="text-lg font-bold leading-snug">{exp.role}</h3>
        <p className="font-semibold text-indigo-600">{exp.company}</p>
      </div>
      <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tabular-nums text-slate-600">
        {exp.yearRange} · {exp.location}
      </p>
    </div>

    <div className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
      {exp.groups.map((g) => (
        <div key={g.title} className="min-w-0">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-indigo-500">{g.title}</h4>
          <ul className="space-y-1.5 text-sm text-slate-700">
            {g.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
      {exp.techStack.map((tech) => <li key={tech} className="tag !bg-indigo-50 !text-indigo-700">{tech}</li>)}
    </ul>
  </li>
);

const Experience = () => (
  <section id="work">
    <SectionHeading eyebrow="5 years" title="Experience" />
    <ol className="grid gap-6">
      {EXPERIENCES.map((exp) => <JobCard key={exp.company} exp={exp} />)}
    </ol>

    <h3 className="mb-4 mt-12 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Internships</h3>
    <ol className="grid gap-6">
      {INTERNSHIPS.map((exp) => <JobCard key={exp.company} exp={exp} />)}
    </ol>
  </section>
);

export default Experience;
