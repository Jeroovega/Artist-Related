import React, { useContext, useEffect, useState } from 'react';
import CardAlbumes from '../components/Artista/CardAlbumes';
import CardArtista from '../components/Artista/CardArtista';
import CardCanciones from '../components/Artista/CardCanciones';
import ObtenerArtistasContext from '../utils/ObtenerArtistasContext';
import './Artista.css'; // Importa tus estilos CSS

const Artista = () => {
    const { artistas } = useContext(ObtenerArtistasContext);
    const [artistaUnico, setArtistaUnico] = useState({});
    const id = window.location.pathname.split('/')[2];

    useEffect(() => {
        if (artistas.length > 0) {
            sessionStorage.setItem('artista', JSON.stringify(artistas[0]));
            setArtistaUnico(artistas[0]);
        } else {
            setArtistaUnico(JSON.parse(sessionStorage.getItem('artista')));
        }
    }, [artistas]);

    const backgroundImageUrl = artistaUnico.images && artistaUnico.images.length > 0 ? artistaUnico.images[0].url : '';

    return (
        <div>
            <div className={`md:px-24 px-4  m-auto flex flex-col items-center justify-center pt-24 xl:gap-10 bg-repeat-round relative pb-20`}
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                }}>
                <div className='overlay'></div>
                <div className='xl:flex xl:w-full z-20'>
                    <div className='xl:w-[30%] xl:flex xl:items-end'>
                        <CardArtista artista={artistaUnico} />
                    </div>
                    <div className='w-[100%] xl:w-[70%]'>
                        <CardCanciones id={id} />
                    </div>
                </div>

                <div className='w-[100%] z-20'>
                    <CardAlbumes id={id} />
                </div>
            </div>
        </div>
    );
}

export default Artista;
