import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<BrowserRouter> arasına App'i koyup routing'i etkinleştir
  //bu bir çeşit provider
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
