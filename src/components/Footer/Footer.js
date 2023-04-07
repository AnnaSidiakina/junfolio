import { FooterSection, FooterLinks } from "./Footer.styled";
import { Container } from "../Container.styled";
import { StyledLink } from "../NavBar/NavBar.styled";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <nav>
          <FooterLinks>
            <StyledLink href="/">About us</StyledLink>
            <StyledLink href="/team">Our team</StyledLink>
            <StyledLink href="/portfolio">Portfolio</StyledLink>
            <StyledLink href="/">Be a client</StyledLink>
            <StyledLink href="/team">Join to team</StyledLink>
            <StyledLink href="mailto:junfolio@mail.com">Email</StyledLink>
            <StyledLink href="/">Privacy policy</StyledLink>
          </FooterLinks>
        </nav>
      </Container>
    </FooterSection>
  );
};
export default Footer;
