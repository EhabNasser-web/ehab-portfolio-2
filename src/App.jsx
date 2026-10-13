import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './i18n/LangContext.jsx';
import { useLiteMode, usePaused, useReducedMotion } from './hooks/useModes.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';
import Cursor from './components/Cursor.jsx';
import Toggles from './components/Toggles.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Sidequests = lazy(() => import('./pages/Sidequests.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'));

function Shell() {
  const lite = useLiteMode();
  const [paused, setPaused] = usePaused();
  const reduced = useReducedMotion();
  const motionOff = lite || paused;
  return (
    <BrowserRouter>
      <Preloader lite={lite} />
      <Cursor paused={paused} reduced={reduced} />
      <Header />
      <Suspense fallback={<main id="main"><div className="wrap section"><p className="mono">…</p></div></main>}>
        <Routes>
          <Route path="/" element={<Home lite={motionOff} />} />
          <Route path="/sidequests" element={<Sidequests />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Home lite={motionOff} />} />
        </Routes>
      </Suspense>
      <Footer />
      <Toggles paused={paused} setPaused={setPaused} lite={lite} />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  );
}
