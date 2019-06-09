import {
  SkillsContainer,
  Skill
} from "../styles/styledItems";

const SkillsBlock = ({ specialAttaks }) => (
  <div>
    <p>Specials Attacks:</p>
    <SkillsContainer>
      {specialAttaks.map(skill => (
        <Skill key={skill.name}>{skill.name}</Skill>
      ))}
    </SkillsContainer>
  </div>
);

export default SkillsBlock;
