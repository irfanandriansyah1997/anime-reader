import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Global } from '@emotion/react';

import { styGlobal } from './styles/global.style.ts';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={styGlobal} />

    <App />
  </StrictMode>
);
