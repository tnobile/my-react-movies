import 'bootstrap/dist/css/bootstrap.min.css';

const Movie = ({ movie }) => {

    return (
        <tr key={movie.show.id}>
            <td><img src={movie.show.image && movie.show.image.medium} alt={movie.show.name}></img></td>
            <td>{movie.show.name}</td>
            <td>{movie.show.language}</td>
            <td>{movie.show.type}</td>
            <td>{movie.show.status}</td>
            <td>{movie.show.genres}</td>
            <td>{movie.show.externals.imdb}</td>
            <td>{movie.show.externals.thetvdb}</td>
            <td>{movie.show.externals.tvrage}</td>
            <td>{movie.show.id}</td>
            <td>{movie.show.network && movie.show.network.country.name}</td>
            <td>{movie.show.network && movie.show.network.country.code}</td>
            <td>{movie.show.network && movie.show.network.country.countryZone}</td>
            <td>{movie.show.rating.average}</td>
            <td>{movie.show.schedule.days}</td>
            <td>{movie.show.schedule.time}</td>
            <td>{movie.score}</td>
            <td>{movie.show.url}</td>
            <td>{movie.show.officialSite}</td>
        </tr>)
}

export default Movie;
