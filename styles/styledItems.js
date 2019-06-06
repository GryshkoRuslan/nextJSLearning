import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

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
    font-size: 24px;
    font-weight: 700;
  }
`;
