import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from '@/context/ShopContext.js'
const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <BrowserRouter>
  <ShopContextProvider>
  <App />
  </ShopContextProvider>
  </BrowserRouter>
)
