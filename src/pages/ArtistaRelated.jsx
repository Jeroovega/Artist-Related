import React, { useContext, useEffect, useState } from 'react'

import CardAlbumes from '../components/Artista/CardAlbumes'
import CardArtista from '../components/Artista/CardArtista'
import CardCanciones from '../components/Artista/CardCanciones'
import ObtenerSimilitudesContext from '../utils/ObtenerSimilitudesContext'

const ArtistaRelated = () => {

    const { artistsRelated } = useContext(ObtenerSimilitudesContext)

    const [artistasRelated, setArtistas] = useState('');

    const id = window.location.pathname.split('/')[2]

    // Para guardar el artista en el sessionStorage y utilizarlo aunque se recargue la página o se vaya a otra página y se regrese a esta misma página debo hacer lo siguiente


    useEffect(() => {
        if (artistsRelated) {
            const artistaBuscado = artistsRelated.filter(artista => artista.id === window.location.pathname.split('/')[2])
            setArtistas(artistaBuscado[0])

            if (artistaBuscado.length > 0) {
                sessionStorage.setItem('artista-buscado', JSON.stringify(artistaBuscado[0]))
            } else {
                setArtistas(JSON.parse(sessionStorage.getItem('artista-buscado')))
            }
        }

    }, [artistsRelated])

    const backgroundImageUrl = artistasRelated.images && artistasRelated.images.length > 0 ? artistasRelated.images[0].url : '';


    return (
        <div>
            <div className={`md:px-24 px-4  m-auto flex flex-col items-center justify-center pt-24 xl:gap-10 bg-repeat-round relative pb-20`}
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                }}>

                <div className='overlay'></div>
                <div className='xl:flex xl:w-full z-20'>
                    <div className='xl:w-[30%] xl:flex xl:items-end'>
                        <CardArtista artistasRelated={artistasRelated} />
                    </div>
                    <div className='xl:w-[70%]'>
                        <CardCanciones id={id} />
                    </div>
                </div>
                <div className='w-[100%] z-20'>
                    <CardAlbumes id={id} />
                </div>
            </div>
        </div>
    )
}

export default ArtistaRelated