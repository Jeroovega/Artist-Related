
const CardArtista = ({ artista, artistasRelated }) => {

    return (
        <div>
            {
                artista
                    ?
                    <div className='xl:w-[100%] '>

                        <div className="card w-80 m-auto bg-base-100 shadow-xl image-full xl:w-[88%]">
                            <figure><img src={artista.images ? artista.images[0].url : ''} alt="Shoes" /></figure>
                            <div className="card-body xl:h-full xl:min-h-[28.5rem] ">
                                <h2 className="card-title font-Subtitulo text-4xl justify-center m-auto">{artista.name}</h2>
                                <div className="card-actions justify-end">
                                    <div className="flex flex-col m-auto text-center">
                                        <div className="stat-title whitespace-normal font-Subtitulo ">{artista.genres ? artista.genres.join(' | ') : 'No hay genero'}</div>
                                        <div className="stat-value">{artista.followers ? artista.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 'No poseemos datos...'}</div>
                                        <div className="stat-desc font-Subtitulo text-sm">seguidores</div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="w-96 stat-desc font-Subtitulo flex justify-center pt-4 text-lg xl:w-[88%] text-white/60">reconocimiento mundial: {artista.popularity}/100</div>
                    </div>
                    :
                    <div className='xl:w-[100%]'>
                        <div className="card w-96 bg-base-100 shadow-xl image-full xl:w-[90%]">
                            <figure><img src={artistasRelated.images ? artistasRelated.images[0].url : ''} alt="Shoes" /></figure>
                            <div className="card-body xl:h-full xl:min-h-[28.5rem]">
                                <h2 className="card-title font-Titulo text-4xl justify-center m-auto">{artistasRelated.name}</h2>
                                <div className="card-actions justify-end">
                                    <div className="flex flex-col m-auto text-center">
                                        <div className="stat-title whitespace-normal font-Subtitulo ">{artistasRelated.genres ? artistasRelated.genres.join(' | ') : 'No hay genero'}</div>
                                        <div className="stat-value">{artistasRelated.followers ? artistasRelated.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 'No poseemos datos...'}</div>
                                        <div className="stat-desc font-Subtitulo">Total de seguidores</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-96 stat-desc font-Subtitulo flex justify-center pt-4 text-lg xl:w-[88%] text-white/60">reconocimiento mundial: {artistasRelated.popularity}/100</div>
                    </div>
            }





        </div>
    )
}

export default CardArtista