import {
  GlobalStyle,
  StyledPokemonCard,
  CardTitle
} from "../styles/styledItems";
import SkillsBlock from "./SkillsBlock";

const PokemonCard = ({ data }) => (
  <StyledPokemonCard>
    <CardTitle>{`${data.number} - ${data.name}`}</CardTitle>
    <SkillsBlock specialAttaks={data.attacks.special} />
    <p>{`Classification: ${data.classification}`}</p>
    <p>{`Height: min - ${data.height.minimum}; max - ${
      data.height.maximum
    }`}</p>
    <p>{`Weight: min - ${data.weight.minimum}; max - ${
      data.weight.maximum
    }`}</p>
    <p>{`Resistant: ${data.resistant.join(", ")}`}</p>
  </StyledPokemonCard>
);

export default PokemonCard;
