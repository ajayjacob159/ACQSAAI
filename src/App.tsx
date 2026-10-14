import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CountryProvider } from './context/CountryContext';
import { HomePage } from './pages/HomePage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogDetailPage } from './pages/BlogDetailPage';

export function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<HomePage />} />

          {/* Blogs Directory / Index */}
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blogs" element={<BlogIndexPage />} />

          {/* Individual Shareable Blog Post Pages */}
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          {/* Catch-all fallback redirect to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
