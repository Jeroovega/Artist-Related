import { createContext, useContext, useEffect, useState } from "react";
import ObtenerArtistasContext from "./ObtenerArtistasContext";
import TokenContext from "./TokenContext";


// ! 1 - Crear contexto
const ObtenerSimilitudesContext = createContext();

// ! 2 - Crear el Contenedor Provider
const ObtenerSimilitudesProvider = ({ children }) => {

    // * Utilizo un contexto para traer el ID del artista y el token.
    const { idArtista } = useContext(ObtenerArtistasContext)
    const { token } = useContext(TokenContext)

    const [artistsRelated, setArtistsRelated] = useState([]);

    const url = `https://api.spotify.com/v1/artists/${idArtista}/related-artists`
    const buscarArtistasRelacionados = async () => {

        if (idArtista.length > 0) {
            try {

            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!res.ok) {
                throw new Error('Ocurrió un error al realizar la petición', res.status, res.statusText)
            }

            const respuesta = await res.json()

            setArtistsRelated(respuesta.artists)

        } catch (error) {
            console.error('[buscarArtistasRelacionados]: Hubo un error al tratar de encontrar artistas similares', error)
        }
        }
    }

    useEffect(() => {
        buscarArtistasRelacionados()
    }, [idArtista])


    const data = {
        artistsRelated: artistsRelated
    }

    return <ObtenerSimilitudesContext.Provider value={data}>{children}</ObtenerSimilitudesContext.Provider>
}

// ! 3- Exportar los contextos
export { ObtenerSimilitudesProvider }
export default ObtenerSimilitudesContext