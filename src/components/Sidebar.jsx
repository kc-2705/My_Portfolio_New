import React from 'react';
import resume from '../assets/Kavya_Immanni_Resume.pdf';
import kavya from '../assets/kavya-headshot.webp';
import { PROFILE } from '../constants';
import { RiArrowRightUpLine, RiGithubFill, RiLinkedinBoxFill, RiMailLine } from '@remixicon/react';

/**
 * Dark profile panel. On desktop it sticks below the top bar and always fits the window:
 * spacing and sizes shrink on shorter screens, and it scrolls on its own only as a last resort.
 */
const short = '[@media(max-height:760px)]';

const Sidebar = () => (
  <aside className="bg-slate-900 text-slate-300 lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:overflow-y-auto">
    <div className={`flex min-h-full flex-col justify-center gap-5 px-6 py-10 sm:px-10 lg:py-8 ${short}:gap-3 ${short}:lg:py-5`}>
      <img src={kavya} alt={PROFILE.name} width={160} height={160}
        className={`h-36 w-36 rounded-full border-4 border-slate-700 object-cover object-top sm:h-40 sm:w-40 ${short}:lg:h-28 ${short}:lg:w-28`} />

      <div>
        <h1 className={`text-3xl font-extrabold leading-tight !text-white ${short}:lg:text-2xl`}>{PROFILE.name}</h1>
        <p className="mt-1.5 font-semibold text-indigo-300">Full Stack Engineer</p>
        <p className="text-sm text-slate-400">React · Node.js · TypeScript · Java</p>
      </div>

      <p className={`max-w-sm text-[15px] leading-relaxed text-slate-400 ${short}:lg:text-sm`}>{PROFILE.subheading}</p>

      <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
        <span className="status-dot" aria-hidden="true" /> Open to full stack roles in the US
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a href={resume} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400">
          View resume <RiArrowRightUpLine className="h-4 w-4" />
        </a>
        <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white"><RiGithubFill className="h-5 w-5" /></a>
        <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white"><RiLinkedinBoxFill className="h-5 w-5" /></a>
        <a href={`mailto:${PROFILE.links.email}`} aria-label="Email" className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white"><RiMailLine className="h-5 w-5" /></a>
      </div>
    </div>
  </aside>
);

export default Sidebar;
