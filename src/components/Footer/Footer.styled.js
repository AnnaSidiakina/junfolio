import styled from "styled-components";
import { LinksWrap } from "../NavBar/NavBar.styled";

export const FooterSection = styled.footer`
  position: relative;
  bottom: 0;
  padding: 30px 0;
  border-top: 1px solid #ccc;
`;

export const FooterLinks = styled(LinksWrap)`
  flex-direction: column;
  align-items: center;
`;
