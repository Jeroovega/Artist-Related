import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ObtenerArtistasContext from "../../utils/ObtenerArtistasContext"

const ResultadoPrincipal = () => {

  const { artistas, idArtista } = useContext(ObtenerArtistasContext)
  const [artista, setArtista] = useState('');

  useEffect(() => {
    if (artistas.length > 0) {
      setArtista(artistas[0])
    }
  }, [artistas])


  return (
    <div className="mt-10">

      {
        artista ?
          <div>
            <div>
              <div className="flex items-center mb-4 gap-10" > 
                <div className='font-Titulo text-black/60 md:text-white/60'>Artista buscado</div>
                <div className="h-0.5 w-[50%] bg-black/60 md:bg-white/60 md:w-[70%]"></div>

              </div>

              <div className="card w-[70%]  bg-black/40 shadow-2xl flex cursor-default md:w-72 m-auto md:m-0 md:hover:bg-black/60 md:transition-all md: duration-500">
                <figure>
                  <Link to={`/artista/${idArtista}`} onClick={() => {
                    window.scrollTo(0, 0)
                  }}>
                    <img src={
                      artista.images ? artista.images[0].url : 'https://www.eltiempo.com/files/image_640_428/uploads/2019/08/30/5d68f3e3e9b3d.jpeg'
                    } alt="Shoes" className=" h-full w-full object-cover" />
                  </Link>
                </figure>
                <div className="card-body">
                  <h2 className="card-title cursor-pointer font-Subtitulo border-b-2 pb-2 mb-2 border-white/60">{artista.name}</h2>
                  <p className="text-sm font-Subtitulo">seguidores: {artista.followers ? artista.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 'No poseemos datos...'}</p>
                  <p className="text-sm font-Subtitulo">generos: {artista.genres ? artista.genres.join(' | ') : 'No hay genero'}</p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-outline w-full mt-4 font-Subtitulo">
                      <Link to={
                        artista.external_urls ? artista.external_urls.spotify : 'https://www.spotify.com'
                      } target={'_blank'}>spotify</Link>
                    </button>
                    <button className="btn btn-outline w-full mt-4 font-Subtitulo">
                      <Link to={`/artista/${idArtista}`} onClick={() => {
                        window.scrollTo(0, 0)
                      }}>canciones populares</Link>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          <div>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
          </div>
      }




    </div>
  )
}

export default ResultadoPrincipal