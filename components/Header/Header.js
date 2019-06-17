import Link from 'next/link';
import { StyledWrapperHeader, StyledHyperLink } from '../../styles/styledItems';
import { indexR, usersR, pokemonsR } from '../../routes';

const Header = () => (
  <StyledWrapperHeader>
    <Link {...indexR.linkTo()}>
      <StyledHyperLink>Home</StyledHyperLink>
    </Link>
    <Link {...usersR.linkTo()}>
      <StyledHyperLink>Users</StyledHyperLink>
    </Link>
    <Link {...pokemonsR.linkTo()}>
      <StyledHyperLink>Pokemons</StyledHyperLink>
    </Link>
  </StyledWrapperHeader>
);

export default Header;
