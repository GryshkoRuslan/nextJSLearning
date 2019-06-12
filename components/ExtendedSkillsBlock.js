import { ExtendedSkillsBlockContainer } from "../styles/styledItems";

const ExtendedSkillsBlock = ({ data }) => (

  <ExtendedSkillsBlockContainer skillsCount={data.attacks.special.length}>
    {
      data.attacks.special.map(attack => (
        <div>
          <p>{`Name: ${attack.name}`}</p>
          <p>{`Type: ${attack.type}`}</p>
          <p>{`Damage: ${attack.damage}`}</p>
        </div>
      ))
    }
  </ExtendedSkillsBlockContainer>
);

export default ExtendedSkillsBlock;
