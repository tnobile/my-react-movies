const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.show.image && movie.show.image.medium} alt='movie'></img>
				</div>
			))}
		</>
	);
};

export default MovieList;