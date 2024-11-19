import React, { useEffect, useRef } from 'react';
import { PROFILE } from '../constants';
import { RiArrowRightUpLine } from '@remixicon/react';
import kavya from '../assets/kavya.jpg';
import { gsap } from 'gsap';
import '../index.css'

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
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6 mt-2 font-roboto-mono"
      ref={profileRef}
    >
      <div className="mt-8 lg:mt-20">
        <h1 className="hero-title text-4xl uppercase lg:text-6xl">{PROFILE.name}</h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-3xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
        {PROFILE.subheading}
      </p>
      <a
        href="/Kavya-Immanni.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter lg:text-xl 
                   hover:bg-stone-300 hover:text-white hover:border-pink-400
                   active:bg-stone-500 active:border-stone-600 active:text-white transition-colors"
      >
        <span>Download Resume</span>
        <RiArrowRightUpLine />
      </a>
      <img
        src={kavya}
        alt={PROFILE.name}
        width={300}
        height="300"
        className="profile-img rounded-full"
      />
    </section>
  );
};

export default Profile;
