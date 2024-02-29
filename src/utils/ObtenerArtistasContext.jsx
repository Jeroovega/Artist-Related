import { createContext, useContext, useEffect, useState } from "react";
import TokenContext from "./TokenContext";

// ! - Creo el contexto
const ObtenerArtistasContext = createContext();

// ! - Creo el provider
const ObtenerArtistasProvider = ({ children }) => {

    // Importo el token
    const { token } = useContext(TokenContext)

    // Creo los estados
    const [busqueda, setBusqueda] = useState('');
    const [artistas, setArtistas] = useState([]);
    const [idArtista, setIdArtista] = useState('');

    

    // Creo la url para buscar al artista por nombre
    const url = `https://api.spotify.com/v1/search?q=${busqueda}&type=artist&limit=15`

    // Creo la función para conseguir el id del artista
    const conseguirIDArtista = async () => {
        if (busqueda.length > 0 && busqueda.length < 30 ) {
            try {

                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })


                if (!res.ok) {
                    throw new Error('No se pudo conseguir el id del artista')
                }

                const respuesta = await res.json()

                setIdArtista(respuesta.artists.items[0].id)
                setArtistas(respuesta.artists.items)


            } catch (error) {
                console.error('[conseguirIDArtista]: No se pudo conseguir el id del artista', error)
            }
        } else {
            setIdArtista('')
            setArtistas([])
        }
    }

    // Creo un efecto para que se ejecute la función cuando cambie la busqueda
    useEffect(() => {
        conseguirIDArtista()
    }, [busqueda])



    // Son los datos que voy a pasar a los componentes. [artistas sirve para mostrar los artistas relacionados, idArtista sirve para mostrar el artista principal, setBusqueda sirve para cambiar el valor de la busqueda]
    const data = {
        artistas: artistas,
        idArtista: idArtista,
        busqueda: busqueda,
        setBusqueda: setBusqueda,
        setArtistas: setArtistas,
        setIdArtista: setIdArtista
    }


    return <ObtenerArtistasContext.Provider value={data}>{children}</ObtenerArtistasContext.Provider>
}

// ! - Exporto el contexto y el provider
export { ObtenerArtistasProvider }
export default ObtenerArtistasContext