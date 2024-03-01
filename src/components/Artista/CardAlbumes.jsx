import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TokenContext from '../../utils/TokenContext';

const CardAlbumes = ({ id }) => {

  const [albumesRender, setAlbumesRender] = useState([])

  const { token } = useContext(TokenContext)

  const pedirAlbumes = async () => {
    const url = `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=AR`

    if (id) {
      try {

        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!res.ok) {
          throw new Error('Hubo un error al tratar de obtener los albumes')
        }

        const respuesta = await res.json()

        setAlbumesRender(respuesta.items)

      } catch (error) {
        console.error('[PedirAlbumes]: Hubo un error al tratar de obtener los albumes', error)
      }
    }

  }

  useEffect(() => {
    pedirAlbumes()
  }, [id])

  albumesRender.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className='w-[100%]'>
      <div className='font-Titulo pb-5 mt-12 text-white/80 border-white/50 border-b-2'>ALBUMES</div>

      <div className='md:flex md:justify-center pt-10 text-white/70'>
        <div className='md:flex'>
          <button onClick={() => {
            document.getElementById('carousel').scrollLeft -= 400
          }} className="hidden md:btn md:btn-square md:btn-outline md:border-none md:bg-white/40 md:relative md:m-auto md:left-6 md:z-10">
            <svg className="w-6 h-6 md:text-neutral md:hover:text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div id='carousel' className="carousel carousel-center p-2 md:p-4 space-x-4 rounded-box  outline outline-1  ">
          <div>
          </div>
          {
            albumesRender.length > 0 ? albumesRender.map((album, index) => {
              return (
                <div id={index} className="carousel-item relative  overflow-hidden" key={index}>
                  <Link to={album.external_urls.spotify} target={'_blank'}>
                    <img src={album.images[0].url} alt="Shoes" className="rounded-lg w-80" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#79849228] to-[#2a2f35] hover:from-transparent hover:to-[#2a2f35a1] transition-all duration-300"></div>

                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="">
                        <div className="stat">
                          <div className="stat-desc font-Subtitulo text-white/70">{
                            // el nombre del artista, en caso de ser dos artistas se separa por un -
                            album.artists.length > 1 ? album.artists[0].name + ' - ' + album.artists[1].name : album.artists[0].name
                          }</div>
                          <div className="stat-value font-Titulo">{
                            // el nombre del album, si es mayor a 20 caracteres se corta y se le agrega ...
                            album.name.length > 13 ? album.name.substring(0, 10) + '...' : album.name
                          }</div>
                          <div className="stat-desc font-Subtitulo text-white/70">{
                            // fecha de lanzamiento del album
                            album.release_date
                          }</div>
                        </div>
                      </div>
                    </div>
                  </Link>

                </div>



              );
            }) :
              <div>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
              </div>
          }
        </div>

        <div className='md:flex'>
          <button onClick={() => {
            document.getElementById('carousel').scrollLeft += 400
          }} className="hidden md:btn md:btn-square md:btn-outline md:border-none md:bg-white/40 md:relative md:m-auto md:right-6 md:z-10">
            <svg className="w-6 h-6 md:text-neutral md:hover:text-[black]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>


    </div>
  );
}

export default CardAlbumes;
