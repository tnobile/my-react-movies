import React, { useState, useEffect, useRef } from 'react'
import { getMovies } from '../../service/MovieService'
import styles from './Home.module.css'

function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, delay);
    }
}
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [keyWord, setKeyWord] = useState("Japan");
    const [keyQuery, setKeyQuery] = useState("Japan");

    useEffect(() => {
        (async () => {
            if (!keyQuery) return;
            const data = await getMovies(keyQuery);
            console.log(`${keyQuery} got: `, data);
            setMovies(data);
        })();
    }, [keyQuery]);
    const handleChange = (e) => {
        setKeyWord(e.target.value)
        delayedQuery(e.target.value);
    }
    const delayedQuery = useRef(debounce(q => setKeyQuery(q), 1000), [keyWord]).current;
    return (
        <>
            <input type='text' value={keyWord} onChange={handleChange}>
            </input>
            <table>
                <tbody>
                    {movies && movies.length > 0 && movies.map(m =>
                        <tr>
                            <td><img src={m.show.image && m.show.image.medium} alt={m.show.name}></img></td>
                            <td>{m.show.name}</td>
                            <td>{m.show.language}</td>
                            <td>{m.show.type}</td>
                            <td>{m.show.status}</td>
                            <td>{m.show.genres}</td>
                            <td>{m.show.externals.imdb}</td>
                            <td>{m.show.externals.thetvdb}</td>
                            <td>{m.show.externals.tvrage}</td>
                            <td>{m.show.id}</td>
                            <td>{m.show.network && m.show.network.country.name}</td>
                            <td>{m.show.network && m.show.network.country.code}</td>
                            <td>{m.show.network && m.show.network.country.countryZone}</td>
                            <td>{m.show.rating.average}</td>
                            <td>{m.show.schedule.days}</td>
                            <td>{m.show.schedule.time}</td>
                            <td>{m.score}</td>
                            <td>{m.show.url}</td>
                            <td>{m.show.officialSite}</td>
                        </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default Home;
