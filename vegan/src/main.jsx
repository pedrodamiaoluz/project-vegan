import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import MinhasCategorias from './pages/minhascategorias.jsx';
import SobreNos from './pages/sobrenos.jsx';
import Login from './components/Login/login.jsx';
import EscrevaSe from './components/Login/escrevase.jsx';
import EsqueceuSenha from './components/Login/esqueceusenha.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "minhascategorias",
        element: <MinhasCategorias />,
      },
      {
        path: "sobrenos",
        element: <SobreNos />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "escrevase",
        element: <EscrevaSe />,
      },
      {
        path: "esqueceusenha",
        element: <EsqueceuSenha />,
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
