import { useQuery } from 'react-query';
import { getTopRated} from "../api/movies-api";

const TopRatedPage = () => {
    const { data, error, isLoading, isError } = useQuery('top rated movies', getTopRated)
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const topRated = data;
    const moviesDisplay = (
        <div>
            {topRated.map(movie => { return <li key={movie.id}>{movie.id},{movie.title}<br /></li> })}
        </div>
    )
    return <div><h2>Top Rated Movies</h2>{moviesDisplay}</div>
}

export default TopRatedPage;