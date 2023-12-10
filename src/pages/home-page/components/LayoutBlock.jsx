import styled from "styled-components";
import { device } from "utils/breakpoints";

export const LayoutTitleContainer = styled.div`
  display: flex;

  @media ${device.medium} {
    flex: 2;
    margin-bottom: 15px;
  }
  @media ${device.large} {
    justify-content: ${(props) => (props.$reverse ? "flex-end" : "flex-start")};
    flex: 1;
    margin-bottom: 10px;
  }
`;

export const LayoutContentContainer = styled.div`
  @media ${device.small} {
    margin: 60px 20px 65px 20px;
  }

  @media ${device.medium} {
    display: flex;
    flex: 2;
    margin: 30px 0px 30px 0px;
  }
  @media ${device.large} {
    flex: 1;
    margin: 60px 0px 60px 0px;
    justify-content: ${(props) => (props.$reverse ? "flex-end" : "flex-start")};
  }
`;

export const LayoutSpaceContainer = styled.div`
  @media ${device.small} {
    display: none;
  }

  @media ${device.medium} {
    display: flex;
    flex: 1;
  }
`;

export const RowAlignLayoutContainer = styled.div`
  @media ${device.small} {
    width: 100vw;
  }
  @media ${device.medium} {
    display: flex;
    flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
  }
`;
