
const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={movie.show.id} className='image-container d-flex justify-content-start m-2'>
                    <img src={movie.show.image && movie.show.image.medium} alt='movie'></img>
                    <div className='overlay d-flex align-items-center justify-content-center'>
                        <button onClick={() => props.handleFavouritesClick(movie)}>
                            <FavouriteComponent />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;