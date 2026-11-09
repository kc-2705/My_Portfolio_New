import React from 'react';
import { PROFILE } from '../constants';

/** Key numbers at the top of the page. */
const Career = () => (
  <section id="about">
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {PROFILE.highlights.map((h) => (
        <div key={h.label} className="card px-4 py-4">
          <dd className="text-2xl font-extrabold tabular-nums text-slate-900">{h.value}</dd>
          <dt className="text-sm text-slate-500">{h.label}</dt>
        </div>
      ))}
    </dl>
  </section>
);

export default Career;
