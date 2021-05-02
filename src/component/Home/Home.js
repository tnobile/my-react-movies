import React, { useState, useEffect, useRef } from 'react'
import { getMovies } from '../../service/MovieService'
import MovieList from '../MovieList/MovieList'
import Heading from '../Heading/Heading'
//import styles from './Home.module.css'
import AddFavourite from '../AddFavourite/AddFavourite'
import Movie from '../Movie/Movie'

function debounce(func, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, delay);
    }
}
const Home = () => {
    const [favourites, setFavourites] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selected, setSelected] = useState();
    const [keyWord, setKeyWord] = useState("Japan");
    const [keyQuery, setKeyQuery] = useState("Japan");
    //   const [keyPerson, setKeyPerson] = useState("");
    //const [keyPersonQuery, setKeyPersonQuery] = useState("");

    useEffect(() => {
        (async () => {
            if (!keyQuery) return;
            const data = await getMovies(keyQuery);
            console.log(`${keyQuery} got: `, data);
            setMovies(data);
            setSelected(undefined);
        })();
    }, [keyQuery]);

    // useEffect(() => {
    //     (async () => {
    //         if (!keyPersonQuery) return;
    //         const data = await getMoviesByPerson(keyPersonQuery);
    //         console.log(`${keyPersonQuery} got: `, data);
    //         setMovies(data);
    //     })();
    // }, [keyPersonQuery]);
    const handleChange = e => {
        setKeyWord(e.target.value);
        delayedQuery(e.target.value);
    }
    const addFavouriteMovie = (movie) => {
        setSelected(movie);
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    };
    // const handlePersonChange = e => {
    //     setKeyPerson(e.target.value);
    //     delayedPersonQuery(e.target.value);
    // }
    const delayedQuery = useRef(debounce(q => setKeyQuery(q), 1000), [keyWord]).current;
    //const delayedPersonQuery = useRef(debounce(q => setKeyPersonQuery(q), 1000), [keyWord]).current;
    return (
        <>
            <div className='container-fluid movie-app'>
                <Heading keyWord={keyWord} handleChange={handleChange} />
                <div className='row flex-nowrap'>
                    {movies && movies.length > 0 &&
                        <MovieList movies={movies} selected={selected}
                            handleFavouritesClick={addFavouriteMovie}
                            favouriteComponent={AddFavourite} />}
                </div>
                {selected && <Movie movie={selected} />}
            </div>
        </>
    )
}

export default Home;
