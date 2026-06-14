import { useEffect } from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, useNavigate, useLocation, Routes, Route, Navigate } from 'react-router';
import { GodzillaPage } from './pages/GodzillaPage';
import { JapaneseArtPage } from './pages/JapaneseArtPage';
import { MusabiPage } from './pages/MusabiPage';
import { AboutPage } from './pages/AboutPage';

const sections = [
  { label: 'ゴジラ', path: '/godzilla', available: true },
  { label: '日本美術史', path: '/japanese-art', available: true },
  { label: 'ムサビ通信', path: '/musabi', available: true },
  { label: '東洋美術史', path: '/eastern-art', available: false },
  { label: '文学史', path: '/literature', available: false },
  { label: '建築史', path: '/architecture', available: false },
  { label: '神話', path: '/mythology', available: false },
  { label: '音楽史', path: '/music', available: false },
  { label: '鉱物・宝石図鑑', path: '/minerals', available: false },
  { label: '城&王室図鑑', path: '/castles', available: false },
  { label: 'サブカル史', path: '/subculture', available: false },
];

function NavButton({ section, currentPath }: { section: typeof sections[0]; currentPath: string }) {
  const navigate = useNavigate();
  const isActive = currentPath === section.path;

  if (!section.available) {
    return (
      <span className="px-3 py-1.5 font-bold text-gray-600 border-b-2 border-transparent whitespace-nowrap text-sm opacity-40 cursor-not-allowed select-none">
        {section.label}
      </span>
    );
  }

  return (
    <button
      onClick={() => navigate(section.path)}
      className={`px-3 py-1.5 font-bold transition-colors border-b-2 whitespace-nowrap text-sm ${
        isActive
          ? 'text-white border-white'
          : 'text-gray-400 border-transparent hover:text-gray-200'
      }`}
    >
      {section.label}
    </button>
  );
}

function AppInner() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAbout = location.pathname === '/about';

  useEffect(() => {
    const section = sections.find(s => s.path === location.pathname);
    if (section) {
      document.title = `${section.label} | 文化大図鑑`;
    } else if (isAbout) {
      document.title = 'このサイトについて | 文化大図鑑';
    } else {
      document.title = '文化大図鑑';
    }
  }, [location.pathname, isAbout]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-50 bg-black text-white border-b-2 border-black">
        <Container maxWidth="xl">
          <div className="py-6">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="mb-4">
                <h1 className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  文化大図鑑（仮）
                </h1>
                <p className="text-xs font-mono tracking-widest mt-1 text-gray-400">
                  CULTURE ENCYCLOPEDIA
                </p>
              </div>
              <div className="overflow-x-auto -mx-4 px-4">
                <div className="flex gap-1 min-w-max">
                  {sections.map((section, idx) => (
                    <NavButton key={idx} section={section} currentPath={location.pathname} />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-start justify-between gap-8">
              <div>
                <h1 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  文化大図鑑（仮）
                </h1>
                <p className="text-xs font-mono tracking-widest mt-1 text-gray-400">
                  CULTURE ENCYCLOPEDIA
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  {sections.slice(0, 6).map((section, idx) => (
                    <NavButton key={idx} section={section} currentPath={location.pathname} />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {sections.slice(6).map((section, idx) => (
                    <NavButton key={idx + 6} section={section} currentPath={location.pathname} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container maxWidth="xl" sx={{ py: 6, flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/godzilla" replace />} />
          <Route path="/godzilla" element={<GodzillaPage />} />
          <Route path="/japanese-art" element={<JapaneseArtPage />} />
          <Route path="/musabi" element={<MusabiPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/godzilla" replace />} />
        </Routes>
      </Container>

      <footer className="bg-black text-white border-t-2 border-black mt-auto">
        <Container maxWidth="xl">
          <div className="py-6 flex items-center justify-between">
            <p className="text-sm text-gray-400">
              © 2026 Takenori. All rights reserved.
            </p>
            <button
              onClick={() => navigate('/about')}
              className={`text-sm transition-colors ${isAbout ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              このサイトについて
            </button>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
