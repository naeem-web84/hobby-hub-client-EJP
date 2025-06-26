import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import { router } from './routes/Router.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import './index.css';
import AOSProvider from './components/AOSProvider.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist-all'>
      <AuthProvider>
        <AOSProvider>
          <RouterProvider router={router} />
        </AOSProvider>
      </AuthProvider>
    </div>
  </StrictMode>,
)
