import React, { useEffect, useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { RiMenuLine, RiCloseLine } from '@remixicon/react';

/** Full-width top bar; highlights the section in view. */
const TopNav = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const els = NAVIGATION_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
            { rootMargin: '-35% 0px -60% 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const go = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="flex h-14 items-center justify-between px-4 sm:px-8">
                <a href="#" className="font-extrabold tracking-tight text-slate-900">Kavya<span className="text-indigo-600">.</span></a>
                <nav className="hidden md:block" aria-label="Sections">
                    <ul className="flex items-center gap-1">
                        {NAVIGATION_LINKS.map((l) => (
                            <li key={l.href}>
                                <a href={l.href} onClick={(e) => go(e, l.href)}
                                    className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${active === l.href ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-slate-900'}`}>
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
                    {open ? <RiCloseLine className="h-6 w-6" /> : <RiMenuLine className="h-6 w-6" />}
                </button>
            </div>
            {open && (
                <ul className="grid gap-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
                    {NAVIGATION_LINKS.map((l) => (
                        <li key={l.href}><a href={l.href} onClick={(e) => go(e, l.href)} className="block rounded-lg px-2 py-2 font-medium text-slate-700 hover:bg-slate-50">{l.label}</a></li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default TopNav;
