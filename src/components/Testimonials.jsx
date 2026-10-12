import { useLang } from '../i18n/LangContext.jsx';
import Reveal from './Reveal.jsx';

export default function Testimonials() {
  const { t } = useLang();
  if (!t.testimonials || t.testimonials.length === 0) return null;
  return (
    <section className="section" aria-label={t.sections.testimonials}>
      <div className="wrap">
        <h2 className="sec-title"><span className="em">💬</span> {t.sections.testimonials} <span className="em">💬</span></h2>
        <div className="grid2">
          {t.testimonials.map((x, i) => (
            <Reveal key={i}>
              <article className="pcard" style={{ padding: 18 }}>
                <p>{x.quote}</p>
                <p className="mono">{x.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
