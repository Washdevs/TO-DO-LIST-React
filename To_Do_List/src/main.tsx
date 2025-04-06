import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

createRoot(document.getElementById('root')!).render(
  // Ponto de ! para falar que sim, este objeto existe então não se importe com ele existir ou não
  <StrictMode>
    <App />
  </StrictMode>
);
