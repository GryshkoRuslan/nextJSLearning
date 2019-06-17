import { selectedPokemonR } from "../routes";
import OpenedPokemonCard from
  "../containers/OpenedPokemonCard/OpenedPokemonCard";
import { Query } from "react-apollo";
import Link from "next/link";
import { gql } from "apollo-boost";

const PokemonPage = () => (
  <selectedPokemonR.Match>
    {({ id }) => {
      const GET_ADDITIONAL_INF = gql`
        query Pokemon($id: String!) {
          pokemon(id: $id) {
            number
            name
            weaknesses
            attacks {
              special {
                name
                type
                damage
              }
            }
          }
        }
      `;
      return (
        <Query query={GET_ADDITIONAL_INF} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return (
              <OpenedPokemonCard data={data} />
            )
          }}
        </Query>
      );
    }}
  </selectedPokemonR.Match>
);

export default PokemonPage;
