import styled from "styled-components";
import { theme } from "@component/styles/Theme";

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 320px;
  padding-right: 20px;
  padding-left: 20px;
  ${theme.mq.tablet} {
    width: ${({ theme }) => theme.breakpoints[md]};
    max-width: 100%;
    padding-right: ${({ theme }) => theme.space[6]};
    padding-left: ${({ theme }) => theme.space[6]};
  }
  ${theme.mq.desktop} {
    width: ${({ theme }) => theme.breakpoints[lg]};
    max-width: 100%;
    padding-right: ${({ theme }) => theme.space[3]};
    padding-left: ${({ theme }) => theme.space[3]};
  }
`;
