import Heading from "../components/Heading";
import NavBar from "../components/NavBar/NavBar";
import { HeaderSection } from "./Header.styled";
import { Container } from "@component/components/Container.styled";

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <NavBar />
      </Container>
    </HeaderSection>
  );
};
export default Header;
