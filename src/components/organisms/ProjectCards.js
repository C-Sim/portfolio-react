import Stack from "@mui/material/Stack";

import { useBasket } from "../App";

import { MovieCard } from "./MovieCard";

export const MovieCards = () => {
  const { movies } = useBasket();

  return (
    <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
      {movies.map((movie) => {
        return <MovieCard {...movie} />;
      })}
    </Stack>
  );
};
