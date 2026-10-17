import React, { useEffect, useRef, useState } from 'react';
import resume from '../assets/Kavya_Immanni_Resume.pdf';
import { PROFILE } from '../constants';
import { RiArrowRightUpLine, RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';
import kavya from '../assets/kavya-headshot.webp';
import { gsap } from 'gsap';
import '../index.css'

/** Types out each role in turn. */
function TypedRole({ roles }) {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0, n = 0, del = false, t;
    const tick = () => {
      const w = roles[i];
      n += del ? -1 : 1;
      setText(w.slice(0, n));
      if (!del && n === w.length) { del = true; t = setTimeout(tick, 1400); return; }
      if (del && n === 0) { del = false; i = (i + 1) % roles.length; }
      t = setTimeout(tick, del ? 40 : 85);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [roles]);
  return <span className="type-caret">{text}</span>;
}

/** Counts a stat like "15+" or "~5 yrs" up from zero. */
function CountUp({ value }) {
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!m) return;
    const to = Number(m[2]);
    let k = 0;
    const id = setInterval(() => { k += 1; setN(k); if (k >= to) clearInterval(id); }, Math.max(40, 1100 / to));
    return () => clearInterval(id);
  }, [value]);
  return m ? <>{m[1]}{n}{m[3]}</> : value;
}

const Profile = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.6 },
      });

      tl.from('.hero-title', {
        opacity: 0,
        y: -50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
      })
        .from(
          '.hero-subheading',
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
          },
          '-=0.4',
        )
        .from(
          '.hero-text',
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          '-=0.4',
        )
        .from(
          '.hero-btn',
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
          },
          '-=0.3',
        )
        .from(
          '.profile-img',
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
          },
          '-=0.5',
        );
    }, profileRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen items-center px-4 pt-28 pb-12 lg:pt-24"
      ref={profileRef}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
        {/* Portrait */}
        <div className="profile-img relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-md">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-indigo-200/70 to-sky-100/40 blur-xl" aria-hidden="true" />
          <img
            src={kavya}
            alt={PROFILE.name}
            width={700}
            height={834}
            className="relative w-full rounded-[2rem] border border-slate-200 object-cover shadow-2xl"
          />
        </div>

        {/* Intro */}
        <div className="text-center lg:text-left">
          <p className="hero-subheading mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800">
            <span className="status-dot" aria-hidden="true" />
            {PROFILE.status}
          </p>
          <p className="hero-subheading mb-1 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Hi, I&apos;m</p>
          <h1 className="hero-title text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{PROFILE.name}</h1>
          <h2 className="hero-subheading mt-3 text-xl text-slate-700 sm:text-2xl">
            <TypedRole roles={PROFILE.roles} />
          </h2>
          <p className="hero-text mt-5 max-w-2xl text-lg text-slate-600 lg:text-xl">{PROFILE.subheading}</p>
          <ul className="hero-text mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PROFILE.highlights.map((h) => (
              <li key={h.label} className="rounded-2xl border border-slate-200 px-3 py-3 text-center">
                <span className="block text-2xl font-bold text-indigo-600 lg:text-3xl"><CountUp value={h.value} /></span>
                <span className="text-xs text-slate-500 sm:text-sm">{h.label}</span>
              </li>
            ))}
          </ul>
          <div className="hero-btn mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-1 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
            >
              <span>Download Resume</span>
              <RiArrowRightUpLine />
            </a>
            <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-slate-300 p-3 hover:border-indigo-400">
              <RiGithubFill />
            </a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-300 p-3 hover:border-indigo-400">
              <RiLinkedinBoxFill />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
