import { createContext, useEffect, useState } from "react";

// ! - Inicializo el contexto
const TokenContext = createContext()

// ! - Creo el proveedor del contexto
// Para recibir el token que pasamos desde el backend en la ruta /api/search tenemos que hacer una solicitud GET a esa ruta y guardar el token en un estado. Luego, pasamos el token a través del contexto a los componentes que lo necesiten.
const TokenProvider = ({ children }) => {
    const [token, setToken] = useState('');

    const url = 'https://artistasrelated.onrender.com/api/search'

    const obtenerToken = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('No se pudo obtener el token');
            }

            const data = await response.json();
            setToken(data.token);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        obtenerToken();
    }, []);

    const data = {
        token: token
    }

    return <TokenContext.Provider value={data}>{children}</TokenContext.Provider>
}

// ! - Exporto el contexto y el proveedor
export { TokenProvider }
export default TokenContext