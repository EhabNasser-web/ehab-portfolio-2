import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';
import { VIDEOS } from '../data/content.js';
import VideoPhone, { Lightbox } from './VideoPhone.jsx';
import Reveal from './Reveal.jsx';

export default function ShortsSection() {
  const { t } = useLang();
  const [lb, setLb] = useState(null);
  return (
    <>
      <h2 className="sec-title"><span className="em">🎬</span> {t.misc.shortsTitle} <span className="em">🎬</span></h2>
      <div className="phones">
        {[0, 1].map((i) => {
          const key = i === 0 ? 'short1' : 'short2';
          const proj = t.projects.find((p) => p.realVideo === key);
          return (
            <Reveal key={key}>
              <VideoPhone
                entry={VIDEOS[key]}
                title={proj ? proj.title : `Short #${i + 1}`}
                onOpen={(entry, title) => setLb({ entry, title })}
              />
              <p className="mono" style={{ textAlign: 'center', marginTop: 8 }}>
                <Link to={`/project/${proj ? proj.slug : 'motion-short-1'}`}>{proj ? proj.title : ''}</Link>
              </p>
            </Reveal>
          );
        })}
      </div>
      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="nav-cell" to="/sidequests">{t.sidequestsBanner}</Link>
      </p>
      {lb && <Lightbox entry={lb.entry} title={lb.title} onClose={() => setLb(null)} />}
    </>
  );
}
