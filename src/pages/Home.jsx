import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext.jsx';
import Hero from '../components/Hero.jsx';
import Swoosh from '../components/Swoosh.jsx';
import WorkGrid from '../components/WorkGrid.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Home({ lite }) {
  const { t } = useLang();
  return (
    <main id="main" className="fade">
      <Hero lite={lite} />
      <Swoosh lite={lite} />
      <section className="section" aria-label={t.sections.work}>
        <div className="wrap frame">
          <Reveal>
            <h2 className="sec-title"><span className="em">✨</span> {t.sections.work} <span className="em">🌱</span></h2>
          </Reveal>
          <WorkGrid projects={t.projects} />
        </div>
      </section>
      <Testimonials />
      <section className="section" aria-label={t.sections.sidequests}>
        <div className="wrap">
          <Reveal>
            <Link to="/sidequests" className="banner">{t.sidequestsBanner}</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
