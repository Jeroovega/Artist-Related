import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TokenContext from '../../utils/TokenContext';

const CardCanciones = ({ id }) => {

  // Pedir canciones desde acá
  const [cancionesRender, setCancionesRender] = useState([]);

  // ! - Creo solicitud para pedir la canción
  const { token } = useContext(TokenContext)

  // Creo el estado para guardar las canciones


  const pedirCanciones = async () => {

    const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=AR`

    if (id) {
      try {

        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!res.ok) {
          throw new Error('Hubo un error al tratar de obtener las canciones')
        }

        const respuesta = await res.json()


        setCancionesRender(respuesta.tracks)

      } catch (error) {
        console.error('[PedirCanciones]: Hubo un error al tratar de obtener las canciones', error)
      }
    }

  }

  useEffect(() => {

    pedirCanciones()

  }, [id])

  cancionesRender.sort((a, b) => b.popularity - a.popularity);


  return (
    <div className='w-[100%] px-5 md:px-0'>
      <div className='font-Titulo pb-5 mt-12 text-white/80 border-white/50 border-b-2 '>RANKING CANCIONES (2024)</div>
      <div className='xl:grid xl:grid-cols-2 xl:gap-x-10  md:px-0  '>


        {
          cancionesRender.length > 0 ? cancionesRender.map((cancion, index) => {

            return (
              <div key={index} className={'mt-6 z-10 text-white/60'}>
                <Link to={cancion.external_urls.spotify} target={'_blank'}>
                  <div className='flex rounded outline outline-1 hover:bg-white/60 hover:outline-none hover:text-black/60 transition-all duration-300 '>
                    <figure>
                      <img src={cancion.album.images[0].url} alt="Shoes" className=" h-full w-20 object-cover rounded-l-md" />
                    </figure>
                    <div className='flex flex-col w-full py-2 justify-between'>
                      <h2 className="card-title cursor-pointer font-Titulo text-md px-2">{cancion.name.length > 15 ? cancion.name.substring(0, 30) + '...' : cancion.name}</h2>
                      <div className='flex justify-between  px-2 '>
                        <p className='font-Subtitulo'>
                          {
                            Math.floor(cancion.duration_ms / 60000) + ':' + ((cancion.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0') + ' | play'
                          }
                        </p>
                        <p className="text-sm font-Subtitulo">popularidad: {cancion.popularity}/100</p>
                      </div>

                    </div>
                  </div>
                </Link>


              </div>
            )
          }) :
            <div>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>

        }
      </div>

    </div>
  )
}

export default CardCanciones
