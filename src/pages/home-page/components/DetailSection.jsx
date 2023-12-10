import styled from "styled-components";
import {
  LayoutContentContainer,
  LayoutSpaceContainer,
  RowAlignLayoutContainer,
} from "./LayoutBlock";
import { device } from "utils/breakpoints";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.medium} {
    width: 100%;
    padding-right: ${(props) => (props.$reverse ? "0px" : "30px")};
    margin-right: -4.114vw;
    padding-left: ${(props) => (props.$reverse ? "30px" : "35px")};
    max-width: 447px;
  }
  @media ${device.large} {
    padding-left: ${(props) => (props.$reverse ? "0px" : "48px")};
    max-width: 717px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NumberContainer = styled.div`
  color: ${(props) => (props.$contrast ? "#8F6BE8" : "black")};
  font-weight: 400;
  letter-spacing: 1.5px;

  @media ${device.small} {
    font-size: 14px;
  }
  @media ${device.medium} {
    font-size: 18px;
  }
`;

const NumberUnderline = styled.div`
  border-radius: 2.5px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.$contrast ? "white" : "#603ebe")};

  @media ${device.small} {
    width: 17.75px;
    margin-top: 1px;
    font-size: 14px;
    border-bottom-width: 4px;
    border-radius: 2.5px;
  }
  @media ${device.medium} {
    width: 22px;
    margin-top: 4px;
    font-size: 18px;
    border-bottom-width: 5px;
  }
`;

const TitleText = styled.div`
  color: #c2c2c2;
  font-weight: 400;
  padding-left: 10px;
  letter-spacing: 1.5px;

  @media ${device.small} {
    font-size: 28px;
  }
  @media ${device.medium} {
    font-size: 36px;
    line-height: 42.19px;
  }
`;

const DetailText = styled.div`
  @media ${device.small} {
    font-size: 15px;
  }
  @media ${device.medium} {
    font-size: 18px;
  }
  @media ${device.large} {
    font-size: 20px;
  }

  color: ${(props) => (props.$contrast ? "white" : "black")};
  font-weight: 400;
  line-height: 28px;
  margin-top: 20px;
`;

const BackgroundCard = styled.div`
  background-color: ${(props) => props.$bgcolor ?? "white"};
`;

function DetailSection({
  numberStr,
  title,
  detailText,
  bgcolor,
  colorContrast = false,
  alternateDisplay = false,
}) {
  return (
    <BackgroundCard $bgcolor={bgcolor}>
      <RowAlignLayoutContainer $reverse={alternateDisplay}>
        <LayoutSpaceContainer />
        <LayoutContentContainer $reverse={alternateDisplay}>
          <DetailContainer $reverse={alternateDisplay}>
            <TitleContainer>
              <NumberContainer $contrast={colorContrast && alternateDisplay}>
                {numberStr}
                <NumberUnderline $contrast={colorContrast} />
              </NumberContainer>
              <TitleText>{title}</TitleText>
            </TitleContainer>
            <DetailText $contrast={colorContrast}>{detailText}</DetailText>
          </DetailContainer>
        </LayoutContentContainer>
      </RowAlignLayoutContainer>
    </BackgroundCard>
  );
}

export default DetailSection;
