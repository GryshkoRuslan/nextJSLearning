import Link from 'next/link';
import { StyledWrapperHeader, StyledHyperLink } from '../styles/styledItems';

const Header = () => (
  <StyledWrapperHeader>
    <Link href="/">
      <StyledHyperLink>Home</StyledHyperLink>
    </Link>
    <Link href="/users">
      <StyledHyperLink>Users</StyledHyperLink>
    </Link>
  </StyledWrapperHeader>
);

export default Header;
