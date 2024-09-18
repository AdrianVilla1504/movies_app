import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const RootLayout = () => {
  nowPlayingAction();
  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Text className="text-9xl">LAYOUT</Text>
      </View>
    </QueryClientProvider>
  );
};

export default RootLayout;
