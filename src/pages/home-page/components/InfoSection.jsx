import styled from "styled-components";
import DetailSection from "./DetailSection";
import { device } from "utils/breakpoints";
import {
  LayoutSpaceContainer,
  LayoutTitleContainer,
  RowAlignLayoutContainer,
} from "./LayoutBlock";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "@uidotdev/usehooks";
import CarouselDots from "./CarouselDots";

const Container = styled.div`
  position: relative;

  @media ${device.small} {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
  }
  @media ${device.medium} {
    padding-top: 50px;
  }
  @media ${device.large} {
    padding-top: 100px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;

  @media ${device.small} {
    padding-left: 20px;
  }

  @media ${device.medium} {
    padding-left: ${(props) => (props.$reverse ? "30px" : "35px")};
    max-width: 447px;
  }
  @media ${device.large} {
    margin-right: -4.114vw;
    padding-left: ${(props) => (props.$reverse ? "0px" : "48px")};
    max-width: 717px;
  }
`;

const Title = styled.div`
  color: #e7e7e7;
  font-weight: 400;

  @media ${device.small} {
    font-size: 50px;
  }

  @media ${device.medium} {
    font-size: 90px;
  }
`;

const ImageContainer = styled.div`
  @media ${device.small} {
    width: 100%;
    height: 251px;
  }

  @media ${device.medium} {
    width: 33.33vw;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0px;
    ${(props) => (props.$reverse ? { right: 0 } : { left: 0 })}
  }
  @media ${device.large} {
    width: 50vw;
  }
`;

const ImageRelativeContainer = styled.div`
  position: relative;
  width: 100%;
  @media ${device.small} {
    display: flex;
    justify-content: center;
  }
  @media ${device.medium} {
    display: block;
  }
`;

const CarouselDotsContainer = styled.div`
  @media ${device.small} {
    position: absolute;
    left: calc((100vw - 46px) / 2);
    bottom: 25px;
  }
  @media ${device.medium} {
    display: none;
  }
`;

const SwipeContainer = styled.div`
  display: flex;

  @media ${device.small} {
    flex-direction: row;
    transition: margin-left 1s;
    margin-left: ${(props) => props.$currentSlideIndex * -100}vw;
  }

  @media ${device.medium} {
    flex-direction: column;
    transition: none;
    margin-left: 0px;
  }
`;

function InfoSection({ sectionData }) {
  const isMobile = !useMediaQuery(device.medium);
  const { title, details, imageSection, alternateDisplay } = sectionData;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      // backward
      if (currentSlideIndex > 0 && isMobile) {
        setCurrentSlideIndex(currentSlideIndex - 1);
      }
    },
    onSwipedLeft: () => {
      //forward
      if (currentSlideIndex < 2 && isMobile) {
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    },
  });

  return (
    <Container>
      <RowAlignLayoutContainer $reverse={alternateDisplay}>
        <LayoutSpaceContainer />
        <LayoutTitleContainer $reverse={alternateDisplay}>
          <TitleContainer $reverse={alternateDisplay}>
            <Title>{title}</Title>
          </TitleContainer>
        </LayoutTitleContainer>
      </RowAlignLayoutContainer>
      <ImageContainer $reverse={alternateDisplay}>
        <ImageRelativeContainer>{imageSection}</ImageRelativeContainer>
      </ImageContainer>

      <SwipeContainer $currentSlideIndex={currentSlideIndex} {...swipeHandlers}>
        {details.map((detail, index) => (
          <DetailSection
            key={detail.title}
            {...detail}
            colorContrast={index === 2}
            alternateDisplay={alternateDisplay}
          />
        ))}
      </SwipeContainer>
      <CarouselDotsContainer>
        <CarouselDots
          currentSlideIndex={currentSlideIndex}
          length={details.length}
        />
      </CarouselDotsContainer>
    </Container>
  );
}

export default InfoSection;
