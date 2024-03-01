import { useContext } from "react"

import ObtenerArtistasContext from "../../utils/ObtenerArtistasContext"

const TituloPrincipal = () => {
  
  const { artistas } = useContext(ObtenerArtistasContext)
  
  return (
    <div className="">
      {
        artistas == '' ? ( <img src="/img/fondomusic.svg" className="m-auto h-[50%] w-[50%] object-cover transition-all duration-700 max-sm:hidden " /> ) : (<img src="/img/fondomusic.svg" className=" translate-y-[-80rem] m-auto h-[50%] w-[50%] transition-all duration-500 max-sm:hidden " />)
      }
      <h1 className="text-5xl  text-center pb-2 font-Nuevo leading-[3.5rem] text-black/70 xl:text-white/60">Descubre tu nuevo <span className="text-[#00a96e]">artista</span> favorito</h1>
      <p className="text-xl text-center font-Titulo text-white/70">¡Encontrá artistas similares a tus favoritos. Ampliá tu repetorio musical hallando esa misma esencia en sus canciones!</p>
    </div>
  )
}

export default TituloPrincipal