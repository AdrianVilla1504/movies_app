import { View, Text, FlatList } from "react-native";
import {} from "react-native";
import MoviePoster from "./MoviePoster";
import { Movie } from "@/infraestructure/interfaces/movie.interface";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}

const MovieHorizontalList = ({ title, movies, className }: Props) => {
  return (
    <View className={`${className} h-[500px] w-full`}>
      {title && <Text className="text-3xl font-bold px-4">{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
