import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email:{" "}
          <a
            href="mailto:i.kavyachowdary@gmail.com"
            className="border-b"
          >
            i.kavyachowdary@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/kavya-chowdary-immanni-b094030a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/kc-2705"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            aria-label="Visit my Github profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
