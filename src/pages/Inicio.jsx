import React, { useContext } from 'react'
import BarraBusqueda from '../components/Inicio/BarraBusqueda'
import ResultadoPrincipal from '../components/Inicio/ResultadoPrincipal'
import ResultadoRelacionado from '../components/Inicio/ResultadoRelacionado'
import TituloPrincipal from '../components/Inicio/TituloPrincipal'
import ObtenerArtistasContext from '../utils/ObtenerArtistasContext'

const Inicio = () => {

  const { artistas } = useContext(ObtenerArtistasContext)

  return (
    <div className='w-[90%] md:w-[60%] m-auto'>
      {
        // A continuación vamos a centrar el Titulo Principal y La barra de busqueda cuando los artistas no aparezcan todavía, es decir renderizamos estos dos elementos en el medio de la página. Luego cuando se obtengan los artistas, estos dos elementos se van a desplazar hacia arriba para dar lugar a los resultados gracias a una animación. Para hacer esto vamos a utilizar el hook useContext para obtener el estado de artistas y luego vamos a utilizar un operador ternario para renderizar los elementos en el medio de la página o en la parte superior de la página.
        artistas.length == '' ? (
          <div className=' translate-y-52 transition-all duration-500 '>
            <TituloPrincipal />
            <BarraBusqueda />
          </div>
        ) : <div className='transition-all translate-y-[-5rem] max-md:translate-y-[5rem] duration-500 mt-12 sm:mt-[-2rem] md:mt-32 '>
          <TituloPrincipal />
          <BarraBusqueda />
          <ResultadoPrincipal />
          <ResultadoRelacionado />
        </div>
      }

    </div>
  )
}

export default Inicio