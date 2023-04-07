import Link from "next/link";
import styled from "styled-components";

export const LinksWrap = styled.div`
  display: flex;
  gap: 15px;
  margin: auto;
`;

export const NavContainer = styled.div`
  display: flex;
`;

export const StyledLink = styled(Link)`
  &:hover,
  :focus {
    color: ${({ theme }) => theme.color.link};
    transition: all 0.3s;
  }
`;
