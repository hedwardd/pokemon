import { PokemonResourceListItem, PokemonResourceList, PokemonListItem, PokemonList, PokemonFetchResult, PokemonDisplayDetails } from "./types";

export const toTitleCase = (str: string): string => {
  return str.replace(/\w*\S/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const resourceToListItem = (pokemonResource: PokemonResourceListItem): PokemonListItem => ({
  name: toTitleCase(pokemonResource.name),
  id: parseInt(pokemonResource.url.split("/")[6]),
  url: pokemonResource.url,
});

export const getListFromResourceList = (pokemonResourceList: PokemonResourceList): PokemonList =>
  pokemonResourceList.map(resourceToListItem);

export const getDisplayDetailsFromFetchResult = (pokemonFetchResult: PokemonFetchResult): PokemonDisplayDetails => ({
  name: toTitleCase(pokemonFetchResult.name),
  height: pokemonFetchResult.height,
  weight: pokemonFetchResult.weight,
  imageUrl: pokemonFetchResult.sprites.front_default,
  types: pokemonFetchResult.types.map((type) => toTitleCase(type.type.name)),
});
  