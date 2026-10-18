import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LocaleProvider } from './i18n/Locale.jsx';
import App from './App.jsx';
import './styles.css';
import './refinements.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><MotionConfig reducedMotion="user"><LocaleProvider><App /></LocaleProvider></MotionConfig></BrowserRouter></React.StrictMode>);
