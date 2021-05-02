import styles from './Movie.module.css'

const RawHTML = ({ children, className = "" }) =>
    <div className={className}
        dangerouslySetInnerHTML={{ __html: children && children.replace(/\n/g, '<br />') }} />

const Movie = ({ movie }) => {
    return (
        <>
            {movie && movie.show &&
                <div className="row">
                    <div className="col-md-2">
                        <img src={movie.show.image && movie.show.image.medium} alt={movie.show.name}></img>
                    </div>
                    <div className="col-auto col-md-3 justify-content-start m-1">
                        <div className={styles.title}> {movie.show.name}</div>
                        <RawHTML children={movie.show.summary} className={styles.summary} />
                    </div>
                    <div className="col-auto col-md-3 justify-content-start">
                        <ul className="list-unstyled">
                            <li> {movie.show.language}</li>
                            <li> {movie.show.genres}</li>
                            <li> {movie.show.type}</li>
                            <li> {movie.show.status}</li>
                            <li> {movie.show.score}</li>
                            <li> <a href={movie.show.url}>{movie.show.url}</a></li>
                            <li> <a href={movie.show.officialSite}>{movie.show.officialSite}</a></li>
                        </ul>
                    </div>
                </div>
                // <tr key={movie.show.id}>
                //     <td><img src={movie.show.image && movie.show.image.medium} alt={movie.show.name}></img></td>
                //     <td>{movie.show.name}</td>
                //     <td>{movie.show.language}</td>
                //     <td>{movie.show.type}</td>
                //     <td>{movie.show.status}</td>
                //     <td>{movie.show.genres}</td>
                //     <td>{movie.show.externals.imdb}</td>
                //     <td>{movie.show.externals.thetvdb}</td>
                //     <td>{movie.show.externals.tvrage}</td>
                //     <td>{movie.show.id}</td>
                //     <td>{movie.show.network && movie.show.network.country.name}</td>
                //     <td>{movie.show.network && movie.show.network.country.code}</td>
                //     <td>{movie.show.network && movie.show.network.country.countryZone}</td>
                //     <td>{movie.show.rating.average}</td>
                //     <td>{movie.show.schedule.days}</td>
                //     <td>{movie.show.schedule.time}</td>
                //     <td>{movie.score}</td>
                //     <td>{movie.show.url}</td>
                //     <td>{movie.show.officialSite}</td>
                //                </tr>}
            }
            { !movie && "nothing"}
        </>
    )
}

export default Movie;
