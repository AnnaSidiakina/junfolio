import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100% - 100px);
  }
`;
