import { OpenedCardContainer, CardTitle } from "../styles/styledItems";
import ExtendedSkillsBlock from "../components/ExtendedSkillsBlock";
import BackButton from "../components/BackButton";

const OpenedPokemonCard = ({ data: { pokemon } }) => (
  <OpenedCardContainer>
    <CardTitle>{`${pokemon.number} - ${pokemon.name}`}</CardTitle>
    <p>{`Weaknesses: ${pokemon.weaknesses.join(', ')};`}</p>
    <h1>Special Skills</h1>
    <ExtendedSkillsBlock data={pokemon} />
    <BackButton />
  </OpenedCardContainer>
)

export default OpenedPokemonCard;
