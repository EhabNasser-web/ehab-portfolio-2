import { useLang } from '../i18n/LangContext.jsx';

export default function Toggles({ paused, setPaused, lite }) {
  const { lang, setLang, t } = useLang();
  return (
    <div className="fab" role="group" aria-label="Display settings">
      <button className="lang" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} aria-label="Switch language">
        {t.toggle.lang}
      </button>
      <button
        className="pill"
        onClick={() => setPaused(!paused)}
        aria-pressed={!paused}
        title={lite ? 'Lite mode is on (effects reduced)' : 'Toggle animations'}
      >
        {paused ? t.toggle.off : t.toggle.on}
      </button>
    </div>
  );
}
