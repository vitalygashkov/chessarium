import { App } from '@/components/app';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.scss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
