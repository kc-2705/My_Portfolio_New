import React from 'react';

/** Small eyebrow label plus a section title, left-aligned. */
const SectionHeading = ({ eyebrow, title }) => (
  <div className='mb-8'>
    <p className='mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600'>{eyebrow}</p>
    <h2 className='text-2xl font-bold sm:text-3xl'>{title}</h2>
  </div>
);

export default SectionHeading;
