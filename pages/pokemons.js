import Header from "../components/Header";
import { GlobalStyle, StyledCardsContainer } from "../styles/styledItems";
import PokemonCard from "../components/PokemonCard";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 12) {
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

const Pokemons = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>
      <Header />
      <Query query={GET_POKEMON_INFO}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <StyledCardsContainer>
              {data.pokemons.map(pokemon => (
                <PokemonCard data={pokemon} />
              ))}
            </StyledCardsContainer>
          );
        }}
      </Query>
    </div>
  </React.Fragment>
);

export default Pokemons;
