import Link from "next/link";
import { backToPokemonsPage } from "../../../routes";
import { StyledBackButton } from "../../../styles/styledItems";

const BackButton = () => (
  <Link {...backToPokemonsPage.linkTo()}>
    <StyledBackButton>Back</StyledBackButton>
  </Link>
)

export default BackButton;
