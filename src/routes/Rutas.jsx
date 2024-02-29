import { useRoutes } from "react-router"
import { NotFound } from "../pages/NotFound"

import Inicio from "../pages/Inicio"
import AboutUs from "../pages/AboutUs"
import Artista from "../pages/Artista"
import ArtistaRelated from "../pages/ArtistaRelated"

export const Rutas = () => {
    
    return useRoutes([
        {
            path: '/',
            element: <Inicio />
        },
        {
            path: '/about',
            element: <AboutUs />
        },
        {
            path: '/artista/:id',
            element: <Artista />
        },
        {
            path: '/artista-related/:id',
            element: <ArtistaRelated />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]);
};
