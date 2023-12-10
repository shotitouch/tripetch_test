import DiagonalLine from "./DiagonalLine";
import PlusIcon from "./PlusIcon";
import PlusOutlinedIcon from "./PlusOutlinedIcon";

const { default: styled } = require("styled-components");
const { device } = require("utils/breakpoints");

const BigImage = styled.img`
  position: absolute;
  @media ${device.small} {
    width: 200px;
    height: 281px;
    margin-left: 9px;
    top: 15px;
  }
  @media ${device.medium} {
    width: 518px;
    height: 699px;
    left: -161px;
    top: 90px;
  }
  @media ${device.large} {
    left: calc((50vw - 518px) / 2 + 56px);
    top: 50px;
  }

  @media ${device.xLarge} {
    width: 35vw;
    height: 49.479vw;
    left: 11.5vw;
  }
`;

const StyledDiagonalLine = styled(DiagonalLine)`
  position: absolute;

  @media ${device.small} {
    width: 179px;
    height: 197px;
    top: 28px;
    margin-left: -93px;
    stroke-width: 3px;
  }
  @media ${device.medium} {
    width: 218px;
    height: 234px;
    top: 109px;
    left: 37px;
    margin-left: 0%;
    stroke-width: 5px;
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  position: absolute;
  width: 15px;
  height: 15px;

  @media ${device.small} {
    margin-left: -87px;
    top: 35px;
  }
  @media ${device.medium} {
    margin-left: 0px;
    left: 56px;
    top: 80px;
  }
`;

const StyledPlusOutlinedIcon = styled(PlusOutlinedIcon)`
  position: absolute;
  width: 15px;
  height: 15px;

  @media ${device.small} {
    margin-left: -109px;
    top: 26px;
  }

  @media ${device.medium} {
    margin-left: 0;
    left: 37px;
    top: 71px;
  }
`;

const HiddenContainer = styled.div`
  @media ${device.large} {
    display: none;
  }
`;

function RugbyManImageSection() {
  return (
    <>
      <HiddenContainer>
        <StyledPlusIcon />
        <StyledPlusOutlinedIcon />
        <StyledDiagonalLine />
      </HiddenContainer>
      <BigImage src="/images/rugbyman.png" alt="rugbyman" />
    </>
  );
}

export default RugbyManImageSection;
