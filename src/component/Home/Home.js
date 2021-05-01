import React, { useState, useEffect, useRef } from 'react'
import { getMovies, getMoviesByPerson } from '../../service/MovieService'
import MovieList from '../MovieList/MovieList'
import Heading from '../Heading/Heading'
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
    const [keyPerson, setKeyPerson] = useState("");
    const [keyPersonQuery, setKeyPersonQuery] = useState("");

    useEffect(() => {
        (async () => {
            if (!keyQuery) return;
            const data = await getMovies(keyQuery);
            console.log(`${keyQuery} got: `, data);
            setMovies(data);
        })();
    }, [keyQuery]);

    useEffect(() => {
        (async () => {
            if (!keyPersonQuery) return;
            const data = await getMoviesByPerson(keyPersonQuery);
            console.log(`${keyPersonQuery} got: `, data);
            setMovies(data);
        })();
    }, [keyPersonQuery]);
    const handleChange = e => {
        setKeyWord(e.target.value);
        delayedQuery(e.target.value);
    }

    const handlePersonChange= e=>{
        setKeyPerson(e.target.value);
        delayedPersonQuery(e.target.value);
    }
    const delayedQuery = useRef(debounce(q => setKeyQuery(q), 1000), [keyWord]).current;
    const delayedPersonQuery = useRef(debounce(q => setKeyPersonQuery(q), 1000), [keyWord]).current;
    return (
        <>
            <div className='container-fluid movie-app'>
                <Heading keyWord={keyWord} handleChange={handleChange}/>
                <div className='row'>
                    {movies && movies.length > 0 && <MovieList movies={movies} />}
                </div>
            </div>
        </>
    )
}

export default Home;
