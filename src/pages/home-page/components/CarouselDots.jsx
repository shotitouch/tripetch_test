import styled from "styled-components";

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? "#5C3CAF" : "#D8D8D8")};
  margin-left: ${(props) => (props.$index === 0 ? "0px" : "8px")};
`;

const CarouselDots = ({ currentSlideIndex, length }) => {
  return (
    <div style={{ display: "flex" }}>
      {[...Array(length)].map((x, index) => (
        <Dot key={index} $index={index} $active={currentSlideIndex === index} />
      ))}
    </div>
  );
};

export default CarouselDots;
