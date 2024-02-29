import { createContext, useContext, useEffect, useState } from "react";
import ObtenerArtistasContext from "./ObtenerArtistasContext";
import TokenContext from "./TokenContext";

// ! - Creo el contexto
const ObtenerAlbumesContext = createContext();

// ! - Creo el Contenedor Provider
const ObtenerAlbumesProvider = ({ children }) => {

    // Traigo información de otros contextos
    const { token } = useContext(TokenContext)
    const { idArtista, artistas } = useContext(ObtenerArtistasContext)




    // Creo el estado para guardar las albumes
    const [albumes, setAlbumes] = useState([])

    const url = `https://api.spotify.com/v1/artists/${idArtista}/albums?include_groups=album`

    const pedirAlbumes = async () => {

        if (artistas.length > 0) {
            try {

                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
/* 
                if (!res.ok) {
                    throw new Error('Hubo un error al tratar de obtener las albumes')
                } */

                const respuesta = await res.json()

                setAlbumes(respuesta.items)

            } catch (error) {/* 
                console.error('[pedirAlbumes]: Hubo un error al tratar de obtener las albumes', error) */
            }
        }
    }



    useEffect(() => {
        pedirAlbumes()
    }, [artistas])


    const data = {
        albumes: albumes
    }

    return <ObtenerAlbumesContext.Provider value={data}>{children}</ObtenerAlbumesContext.Provider>
}

// ! - Exporto los contextos
export { ObtenerAlbumesProvider }
export default ObtenerAlbumesContext