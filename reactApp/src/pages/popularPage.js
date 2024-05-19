import { useQuery } from 'react-query';
import { getPopularMovies } from "../api/movies-api";

const PopularMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('popular movies', getPopularMovies)
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const popular = data;
    const moviesDisplay = (
        <div>
            {popular.map(movie => { return <li key={movie.id}>{movie.id},{movie.title}<br /></li> })}
        </div>
    )
    return <div><h2>Popular Movies</h2>{moviesDisplay}</div>
}

export default PopularMoviesPage;