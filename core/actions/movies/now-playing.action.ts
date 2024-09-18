import { movieApi } from "@/core/api/movie-api"
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mappers";

export const nowPlayingAction = async() => {
    try{
        const {data} = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie)
        return movies;
    }catch(error){
        console.error(error)
    }
}