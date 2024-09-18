import { movieApi } from "@/core/api/movie-api"
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";

export const nowPlayingAction = async() => {
    try{
        const {data} = await movieApi.get<MovieDBMoviesResponse>('/now_playing');
        console.log("data => ", JSON.stringify(data, null, 2));
        return [];
    }catch(error){
        console.error(error)
    }
}