import React, { useEffect } from 'react'

const AboutUs = () => {

 // necesito mostrar el footer y el navbar cuando hago click en aboutus

  return (
    <div className='pt-28 mb-12  px-4 xl:px-20'>
      <div className="mockup-window border bg-base-300 pb-10">

        <div>
          <img src="/img/logo3.png" alt="logo" className="w-14 h-14 m-auto mb-4" />
          <h1 className="text-4xl font-bold text-center font-Titulo mt-2 border-b-2 border-white/60 mx-10 pb-4 xl:mt-0">Información general</h1>
        </div>

        <div className='xl:mx-10'>
          <div className='border-b border-white/60'>
            <div className="flex justify-center px-4 py-6 bg-base-200 flex-col">
              <h1 className='text-xl font-Titulo '>I. <span className='text-[#008000]'>Artista buscado</span></h1>
              <p className='pt-2 font-Subtitulo'>
                Sección que obtiene el parámetro introducido por el usuario en la barra de busqueda para realizar una petición a la API de Spotify y obtener los artistas que coincidan con el parámetro introducido.
              </p>
              <p className='pt-2 font-Subtitulo'>Constántemente actualizándose a fin de que el usuario no tenga que recargar la página para ver los resultados.</p>
              <p className='pt-2 text-white/'>
                <span className='text-[#008000]'>*</span>para mayor exactitud se recomienda buscar el nombre completo del artista
              </p>
              <p>
                <span className='text-[#008000]'>*</span>en caso de no coincider el nombre del artista con la foto del artista, se recomienda borrar la busqueda y volver a ingresarla
              </p>

              <div className="mockup-code mt-10 max-w-1 hidden ">
                <pre data-prefix="$"><code>npm i daisyui</code></pre>
                <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
              </div>


            </div>
          </div>

          <div className='border-b border-white/60'>
            <div className="flex justify-center px-4 py-6 bg-base-200 flex-col  xl:justify-between">
              <div>
                <h1 className='text-xl font-Titulo '>II. <span className='text-[#008000]'>Artista similar</span></h1>
                <p className='pt-2 font-Subtitulo'>
                  Sección que a raíz de la ID obtenida logra realizar un filtrado de artistas con <span className='text-[#008000]'>géneros similes</span>  al artista principal.
                </p>
                <p className='pt-2 font-Subtitulo'>Además, se realiza un posicionamiento de artistas recomendados basado en la <span className='text-[#008000]'>coincidencia</span> con el artista principal.</p>
                <p className='pt-2 text-white/'>
                  <span className='text-[#008000]'>*</span> se filtran varios artistas mostrando en pantalla aquellos que tengan mayor exactitud en cuanto a género. se arrojan 20 artistas.
                </p>
                <p className='pt-2 text-white/'>
                  <span className='text-[#008000]'>*</span> solo se muestran los generos más representativos para la muestra, detrás se encuentran más generos que ayudan al filtrado.
                </p>
              </div>

              <div className='xl:flex xl:justify-around xl:mt-10 hidden font-Subtitulo'>
                <div>
                  <h1 className='pb-2'>generos similares</h1>
                  <div className="mockup-code hidden xl:block ">
                    <pre data-prefix="$"><code>Miley Cyrus: ['pop']</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>Katy Perry: ['pop'], Eminem: ['rap']</code></pre>
                    <pre data-prefix=">" className="text-success"><code>Artista similar: [Katy Perry]</code></pre>
                  </div>
                </div>

                <div>
                  <h1 className='pb-2'>% coincidencia</h1>
                  <div className="mockup-code hidden xl:block ">
                    <pre data-prefix="$"><code>Billie Eilish: ['art pop' | 'pop']</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>Lana Del Rey: ['art pop' | 'pop'], Ariana Grande: ['pop']</code></pre>
                    <pre data-prefix=">" className="text-success"><code>%[Lana Del Rey] >  %[Ariana Grande]</code></pre>
                  </div>
                </div>
              </div>




            </div>
          </div>

          <div>
            <div className="flex justify-center px-4 py-6 bg-base-200 flex-col xl:flex-row-reverse xl:justify-between">

              <div className='xl:w-[70%]'>
                <h1 className='text-xl font-Titulo '>III. <span className='text-[#008000]'>Perfil artistas</span></h1>
                <p className='pt-2 font-Subtitulo'>
                  Perfil personalizado del artista <span className='text-[#008000]'>principal/similar</span>  en el cual se van a encontrar los siguientes datos:
                </p>
                <p className='pt-2 font-Subtitulo'><span className='text-[#008000]'>Apartado personal</span>, información del artista (nombre, generos, seguidores, popularidad mundial).

                  la <span className='text-[#008000]'>popularidad</span> se mide en una escala de 0 a 100, siendo 100 los artistas más populares en el mundo (actualmente) e IMPORTANTE: basado en las reproducciones de Spotify.</p>


                <p className='pt-2 font-Subtitulo'><span className='text-[#008000]'>Ranking Canciones 2024</span>, las canciones más escuchadas del artista en la actualidad (se actualiza constantemente), realizando el mismo filtrado en base a la popularidad de la canción en una escala del 0/100.
                </p>

                <p className='pt-2 font-Subtitulo'><span className='text-[#008000]'>Albumes</span>, discografía del artista, ordenada desde lo más reciente a lo más antigüo (solo se incluyen albumes propios, no colaboraciones en otros albumes).
                </p>
              </div>
              
              <div className="mockup-code mt-10  hidden xl:block xl:m-auto ">
                <pre data-prefix="$"><code>Taylor Swift: 100/100 </code></pre>
                <pre data-prefix=">" className="text-warning"><code>Cruel Summer: 99/100</code></pre>
                <pre data-prefix=">" className="text-success"><code>1989 (Taylor's Version)</code></pre>
              </div>


            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default AboutUs