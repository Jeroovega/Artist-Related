import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ObtenerArtistasContext from '../../utils/ObtenerArtistasContext'

const Footer = () => {

    const { artistas, setArtistas, setBusqueda } = useContext(ObtenerArtistasContext)

    return (
        <footer>
            {
                artistas.length > 0 || window.location.pathname.length > 2 ? <footer className="footer footer-center p-10 text-base-content rounded bottom-0 relative pt-10 bg-[#1d232a]">
                    <div className="grid grid-flow-col gap-4 ">
                        <Link to={'/'} onClick={() => { setArtistas(''); setBusqueda(''); }} className="link link-hover">inicio</Link>
                        <Link to={'/about'} className="link link-hover" onClick={() => {
                            window.scrollTo(0, 0)
                        }}>about us</Link>
                    </div>
                    <div>
                        <div className="grid grid-flow-col gap-4">
                            <Link to={'https://www.linkedin.com/in/jeronimo-vega-42375b196/'} target={'_blank'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50"
                                    className='fill-current'>
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </Link>

                            <Link to={'mailto:jerovega2001@gmail.com'} target={'_blank'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50"
                                    className="fill-current">
                                    <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                                </svg>
                            </Link>

                            <Link to={'https://github.com/Jeroovega'} target={'_blank'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50"
                                    className="fill-current">
                                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <aside className='pb-16 md:pb-0'>
                        <div className='flex gap-10 '>
                            <img src="/img/logo.png" alt="logo" className="w-14 h-14 m-auto" />
                            <img src="/img/logo3.png" alt="logo" className="w-14 h-14 m-auto" />
                            <img src="/img/logo4.png" alt="logo" className="w-14 h-14 m-auto" />
                        </div>
                        <p className='mt-10'>Copyright © 2024 - Derechos reservados por Jerónimo Vega</p>
                        <p>Esta aplicación utiliza la API de Spotify para obtener datos de artistas. Todos los datos son propiedad de Spotify. Consulta los <a href="https://developer.spotify.com/terms/">términos de servicio</a> de Spotify para obtener más información.</p>
                    </aside>
                </footer> : null
            }
        </footer>
    )
}

export default Footer