import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledWrapperHeader = styled.div`
  height: 100px;
  background: rgb(223, 3, 3);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledHyperLink = styled.a`
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 10px;
  color: rgb(255, 255, 255);
  font-size: 2em;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  :hover {
    border-bottom: 3px solid rgb(255, 255, 255);
  }
  :active {
    color: rgb(0, 0, 0);
    border-bottom: 3px solid rgb(0, 0, 0);
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 14px;
    font-weight: 700;
    margin: 10px;
  }
`;

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px 0;
  justify-items: center;
  margin-bottom: 10px;
`;

export const StyledPokemonCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px,
              rgba(0, 0, 0, 0.23) 0px 3px 10px;
  background: rgb(255, 255, 255);
  min-height: 300px;
  width: 90%;
`;

export const CardTitle = styled.div`
  min-height: 70px;
  background:rgba(0, 0, 0, 0.7);
  color: white;
  font-weight: 700;
  font-size: 2em;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Skill = styled.div`
  min-width: 70px;
  border-radius: 25px;
  background: rgb(199, 196, 196);
  text-align: center;
  margin: 5px;
  padding: 0 10px;
  box-sizing: border-box;
`;
