import axios from "axios";
import { IMovies } from "../models/IMovies";
import { IMovieExtented } from "../models/IMoviesExtended";
import { IOmdbResponse } from "../models/IOmdbResponse";

export async function searchMovies(
  searchText: string,
  currentPage: number
): Promise<IMovies[]> {
  let response = await axios.get<IOmdbResponse>(
    `https://omdbapi.com?s=${searchText}&apikey=515662d0&page=${currentPage}`
  );

  if (response.data.Search.length > 0) return response.data.Search;
  else {
    return [];
  }
}

export async function moreAboutMovies(movie: string): Promise<IMovieExtented> {
  let response = await axios.get<IMovieExtented>(
    `https://www.omdbapi.com/?apikey=515662d0&i=${movie}`
  );

  return response.data;
}
