import Logo from "../Logo";
import { NavContainer, LinksWrap, StyledLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <nav>
      <NavContainer>
        <StyledLink href="/">
          <Logo />
        </StyledLink>
        <LinksWrap>
          <StyledLink href="/">About us</StyledLink>
          <StyledLink href="/team">Our team</StyledLink>
          <StyledLink href="/portfolio">Portfolio</StyledLink>
        </LinksWrap>
      </NavContainer>
    </nav>
  );
};
export default NavBar;
