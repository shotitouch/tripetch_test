import DiagonalLine from "./DiagonalLine";
import PlusIcon from "./PlusIcon";
import PlusOutlinedIcon from "./PlusOutlinedIcon";

const { default: styled } = require("styled-components");
const { device } = require("utils/breakpoints");

const BigImage = styled.img`
  position: absolute;

  @media ${device.small} {
    width: 302px;
    height: 249px;
    top: 15px;
  }
  @media ${device.medium} {
    width: 691px;
    height: 568px;
    left: -181px;
    top: 31px;
  }
  @media ${device.large} {
    left: -108px;
    top: 10px;
  }

  @media ${device.xLarge} {
    width: 51.615vw;
    height: 42.448vw;
    left: -8.125vw;
  }
`;

const StyledDiagonalLine1 = styled(DiagonalLine)`
  position: absolute;

  @media ${device.small} {
    width: 106px;
    height: 123px;
    left: calc(50vw - 102px);
    top: 125px;
    stroke-width: 3px;
  }
  @media ${device.medium} {
    width: 179px;
    height: 207px;
    top: 295px;
    left: -22px;
    stroke-width: 5px;
  }
  @media ${device.large} {
    width: 183px;
    height: 212px;
    left: 20px;
    top: 321px;
    stroke-width: 6px;
  }

  @media ${device.xLarge} {
    width: 13.698vw;
    height: 15.84vw;
    left: 1.517vw;
    top: 24vw;
  }
`;

const StyledDiagonalLine2 = styled(DiagonalLine)`
  position: absolute;

  @media ${device.small} {
    width: 77px;
    height: 90px;
    left: calc(50vw + 46px);
    top: 39px;
    stroke-width: 3px;
  }
  @media ${device.medium} {
    display: none;
  }
  @media ${device.large} {
    display: block;
    width: 185px;
    height: 217px;
    left: 352px;
    top: 63px;
    stroke-width: 6px;
  }

  @media ${device.xLarge} {
    width: 13.834vw;
    height: 16.206vw;
    left: 26.297vw;
    top: 4.74vw;
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  position: absolute;
  width: 15px;
  height: 15px;

  @media ${device.small} {
    left: calc(50vw - 80px);
    top: 24px;
  }

  @media ${device.medium} {
    left: 21px;
    top: 103px;
  }

  @media ${device.large} {
    left: 96px;
    top: 98px;
  }

  @media ${device.xLarge} {
    left: 7.188vw;
    top: 7.344vw;
  }
`;

const StyledPlusIcon2 = styled(PlusIcon)`
  position: absolute;
  width: 15px;
  height: 15px;

  @media ${device.small} {
    left: calc(50vw + 115px);
    top: 165px;
  }

  @media ${device.medium} {
    display: none;
  }

  @media ${device.large} {
    display: block;
    left: 431px;
    top: 287px;
  }
  @media ${device.xLarge} {
    left: 32.188vw;
    top: 21.406vw;
  }
`;

const StyledPlusOutlinedIcon = styled(PlusOutlinedIcon)`
  position: absolute;
  width: 15px;
  height: 15px;

  @media ${device.small} {
    left: calc(50vw - 102px);
    top: 15px;
  }

  @media ${device.medium} {
    left: 43px;
    top: 120px;
  }
  @media ${device.large} {
    left: 112px;
    top: 110px;
  }
  @media ${device.xLarge} {
    left: 8.333vw;
    top: 8.23vw;
  }
`;

function BasketBallImageSection() {
  return (
    <>
      <StyledPlusIcon />
      <StyledPlusIcon2 />
      <StyledPlusOutlinedIcon />
      <StyledDiagonalLine1 />
      <StyledDiagonalLine2 />
      <BigImage src="/images/basketball.png" alt="basketball" />
    </>
  );
}

export default BasketBallImageSection;
