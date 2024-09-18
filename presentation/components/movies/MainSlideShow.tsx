import { View, Text, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Movie } from "@/infraestructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;
  return (
    <View className="h-[500px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => {
          return <MoviePoster id={item.id} poster={item.poster} />;
        }}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 50,
          parallaxScrollingScale: 0.9,
        }}
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSlideShow;
