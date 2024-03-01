import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ObtenerArtistasContext from "../../utils/ObtenerArtistasContext"

import ObtenerSimilitudesContext from "../../utils/ObtenerSimilitudesContext"


const ResultadoRelacionado = () => {

  const { artistsRelated } = useContext(ObtenerSimilitudesContext)
  const { setIdArtista } = useContext(ObtenerArtistasContext)


  // Ordenar los artistas por popularidad
  artistsRelated.sort((a, b) => b.popularity - a.popularity)

  return (
    <div className="mt-10 pb-32 md:pb-0">

      <div className="flex items-center mb-4 gap-10" >
        <div className='font-Titulo text-white/70'>Artista similar</div>
        <div className="h-0.5 w-[50%] bg-white/60 md:w-[70%]"></div>
      </div>

      <div className="flex flex-wrap justify-start gap-10  md:gap-28">


        {
          artistsRelated ?


            artistsRelated.map((artista, key) => {

              return <div key={key} className="card w-[70%] bg-black/40 shadow-xl flex cursor-default m-auto md:w-72 md:m-0 md:hover:bg-black/50 md:transition-all md:duration-500 text-white/70 ">
                <figure className="h-[240px] object-cover  ">
                  <Link to={`/artista-related/${artista.id}`} onClick={() => {
                    window.scrollTo(0, 0)
                  }}>
                    <img src={
                      artista.images[0] ? artista.images[0].url : '/img/profilepicture.jpeg'
                    } alt={artista.name} className="w-[full] h-full object-cover" />
                  </Link>
                </figure>
                <div className="card-body">
                  <h2 className="card-title cursor-pointer font-Subtitulo border-b-2 pb-2 mb-2 border-white/60">{artista.name}</h2>
                  <p className="text-sm font-Titulo text-white/90">reconocimiento: {artista.popularity}%</p>
                  {/* <p className="text-sm font-Subtitulo">seguidores: {artista.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p> */}
                  <p className="text-sm font-Subtitulo">generos: {artista.genres ? artista.genres.slice(0, 3).join(' | ') : 'No hay genero'}</p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-outline  w-full mt-4 font-Subtitulo text-white/70">
                      <Link to={
                        artista.external_urls ? artista.external_urls.spotify : 'https://www.spotify.com'
                      } target={'_blank'}>spotify</Link>
                    </button>
                    <button className="btn btn-outline  w-full mt-4 font-Subtitulo text-white/70">
                      <Link to={`/artista-related/${artista.id}`} onClick={() => {
                        window.scrollTo(0, 0)
                      }}>canciones populares</Link>
                    </button>
                  </div>
                </div>
              </div>
            })
            : <div>
              <span className="loading loading-ball loading-sm"></span>
              <span className="loading loading-ball loading-md"></span>
              <span className="loading loading-ball loading-lg"></span>
            </div>

        }
      </div>

    </div>
  )
}

export default ResultadoRelacionado


