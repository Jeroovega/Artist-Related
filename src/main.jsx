import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { TokenProvider } from './utils/TokenContext.jsx'
import { ObtenerArtistasProvider } from './utils/ObtenerArtistasContext.jsx'
import { ObtenerSimilitudesProvider } from './utils/ObtenerSimilitudesContext.jsx'
import { ObtenerCancionesProvider } from './utils/ObtenerCanciones.jsx'
import { ObtenerAlbumesProvider } from './utils/ObtenerAlbumesContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <TokenProvider>
    <ObtenerArtistasProvider>
      <ObtenerSimilitudesProvider>
        <ObtenerCancionesProvider>
          <ObtenerAlbumesProvider>

            <App />
          </ObtenerAlbumesProvider>
        </ObtenerCancionesProvider>
      </ObtenerSimilitudesProvider>
    </ObtenerArtistasProvider>
  </TokenProvider>
  </React.StrictMode>
)
