export type PokemonResourceListItem = {
  name: string;
  url: string;
};

export type PokemonResourceList = PokemonListItem[];

export type PokemonListItem = PokemonResourceListItem & {
  id: number;
};

export type PokemonList = PokemonListItem[];

export type PokemonType = {
  name: string;
  url: string;
};

export type PokemonTypeListItem = {
  slot: number;
  type: PokemonType;
};

export type PokemonTypes = PokemonTypeListItem[];

export type PokemonFetchResult = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  },
  types: PokemonTypes;
};

export type PokemonDisplayDetails = {
  name: string;
  height: number;
  weight: number;
  imageUrl: string;
  types: string[];
};
