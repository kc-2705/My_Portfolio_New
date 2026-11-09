import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from '@remixicon/react';
import React from 'react';
import { PROFILE } from '../constants';

const Contact = () => (
  <section id="contact" className="rounded-2xl bg-slate-900 px-6 py-10 text-center sm:px-10">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Contact</p>
    <h2 className="mt-1 text-2xl font-extrabold !text-white sm:text-3xl">Let&apos;s talk about your team</h2>
    <p className="mx-auto mt-3 max-w-xl text-slate-400">I&apos;m open to full stack roles in the US. The quickest way to reach me is email.</p>
    <p className="mt-5 select-all text-lg font-semibold text-white">{PROFILE.links.email}</p>
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <a href={`mailto:${PROFILE.links.email}`} className="btn-primary"><RiMailLine className="h-4 w-4" /> Email me</a>
      <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost"><RiLinkedinBoxFill className="h-4 w-4" /> LinkedIn</a>
      <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><RiGithubFill className="h-4 w-4" /> GitHub</a>
    </div>
  </section>
);

export default Contact;
