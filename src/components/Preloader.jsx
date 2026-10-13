import { useEffect, useState } from 'react';

export default function Preloader({ lite }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (lite) { setShow(false); return; }
    let done = false;
    try { done = sessionStorage.getItem('ehab-pre') === '1'; } catch {}
    if (done) return;
    setShow(true);
    const t1 = setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem('ehab-pre', '1'); } catch {}
    }, 900);
    const t2 = setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem('ehab-pre', '1'); } catch {}
    }, 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [lite]);
  const skip = () => {
    setShow(false);
    try { sessionStorage.setItem('ehab-pre', '1'); } catch {}
  };
  if (!show) return null;
  return (
    <div className="pre" role="status" aria-label="Loading" onClick={skip}>
      <div className="mark">E</div>
    </div>
  );
}
