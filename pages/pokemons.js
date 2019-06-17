import Header from "../components/Header/Header";
import {
  StyledCardsContainer,
  StyledPokemonCardWrapper
} from "../styles/styledItems";
import PokemonCard from "../containers/PokemonCard/PokemonCard";
import { Query } from "react-apollo";
import Link from "next/link";
import { gql } from "apollo-boost";
import { selectedPokemonR } from "../routes";

const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 12) {
      id
      number
      name
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      resistant

      attacks {
        special {
          name
        }
      }
    }
  }
`;

const Pokemons = () => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Query query={GET_POKEMON_INFO}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <StyledCardsContainer>
                {data.pokemons.map(pokemon => (
                  <Link key={pokemon.number}
                    {...selectedPokemonR.linkTo({
                      id: pokemon.id
                    })}
                  >
                    <StyledPokemonCardWrapper>
                      <PokemonCard data={pokemon} />
                    </StyledPokemonCardWrapper>
                  </Link>
                ))}
              </StyledCardsContainer>
            );
          }}
        </Query>
      </div>
    </React.Fragment>
  );
};

export default Pokemons;
