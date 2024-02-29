import { useContext } from "react"
import ObtenerArtistasContext from "../../utils/ObtenerArtistasContext"

const BarraBusqueda = () => {


  const { setBusqueda, busqueda } = useContext(ObtenerArtistasContext)

  // Esto es para obtener los valores del formulario
  const formkit = {
    initialValues: {
      busqueda: ''
    },
    onChange: (e) => {
      if (e.target.value) {
        setBusqueda(e.target.value)
      } else {
        setBusqueda('')
      }
    },
    
    
  }

  return (
    <div className="w-[80%] md:w-[60%] mt-6 m-auto">
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow font-Subtitulo w-full cursor-default" placeholder="Ej: Kanye West, Taylor Swift..." onChange={formkit.onChange} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4  cursor-pointer hover:opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>
      <p className={`${
        busqueda.length > 0 ? 'block text-black/80 text-xs  md:text-white/80 px-1 pt-1' : 'hidden'
      }`}>*Nombre completo para mayor exactitud</p>
    </div>
  )
}

export default BarraBusqueda