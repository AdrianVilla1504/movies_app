import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Movie } from "@/infraestructure/interfaces/movie.interface";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  MoviePoster?: string;
}

const MoviePoster = ({
  id,
  poster,
  smallPoster = false,
  MoviePoster,
}: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${MoviePoster}`}>
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
