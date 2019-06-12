import { defR, defRP, T, stringT, defRPQ } from "next-flexible-routes";

export const indexR = defR({
  page: "index",
  pattern: "/"
});

export const selectedPokemonR = defRP({
  page: "pokemon",
  pattern: "/pokemons/:id",
  params: T.required({
    id: stringT
  })
});

export const backToPokemonsPage = defR({
  page: "pokemons",
  pattern: "/pokemons"
});
