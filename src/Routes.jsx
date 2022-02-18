import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/partials/Header';
import Profile from './pages/Profile';
import Repository from './pages/Repository';
import Footer from './components/partials/Footer';
import GlobalStyles from './styles/GlobalStyles';
import themes from './styles/Themes';

export default function AppRoutes() {
  const [themeName, setThemeName] = useState('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <Header
          setThemeName={setThemeName}
          themeName={themeName}
        />

        <Routes>
          <Route element={<Profile />} path="/" />
          <Route element={<Profile />} path="/:username" />
          <Route element={<Repository />} path="/:username/:repository" />
        </Routes>

        <Footer />

        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}
