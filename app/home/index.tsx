import { View, Text, ActivityIndicator } from "react-native";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />
      <MovieHorizontalList
        title="Populares"
        movies={popularQuery.data ?? []}
        className="mb-5"
      />
    </View>
  );
};

export default HomeScreen;
