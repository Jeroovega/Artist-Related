import { createContext, useContext, useEffect, useState } from "react";
import ObtenerArtistasContext from "./ObtenerArtistasContext";
import TokenContext from "./TokenContext";

// ! - Creo el contexto
const ObtenerCancionesContext = createContext();

// ! - Creo el Contenedor Provider
const ObtenerCancionesProvider = ({ children }) => {

    // Traigo información de otros contextos
    const { token } = useContext(TokenContext)
    const { idArtista, artistas } = useContext(ObtenerArtistasContext)




    // Creo el estado para guardar las canciones
    const [canciones, setCanciones] = useState([])

    const url = `https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=AR`

    const pedirCanciones = async () => {

        if ( artistas.length > 0 ) {
            try {

                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
/* 
                if (!res.ok) {
                    throw new Error('Hubo un error al tratar de obtener las canciones')
                } */

                const respuesta = await res.json()

                setCanciones(respuesta.tracks)

            } catch (error) {/* 
                console.error('[PedirCanciones]: Hubo un error al tratar de obtener las canciones', error) */
            }
        }

    }

    useEffect(() => {
        pedirCanciones()
    }, [artistas])

    const data = {
        canciones: canciones
    }

    return <ObtenerCancionesContext.Provider value={data}>{children}</ObtenerCancionesContext.Provider>
}

// ! - Exporto los contextos
export { ObtenerCancionesProvider }
export default ObtenerCancionesContext