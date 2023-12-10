const size = {
  small: "0px",
  medium: "750px",
  large: "1200px",
  xLarge: "1600px",
};

export const device = {
  small: `screen and (min-width: ${size.small})`,
  medium: `screen and (min-width: ${size.medium})`,
  large: `screen and (min-width: ${size.large})`,
  xLarge: `screen and (min-width: ${size.xLarge})`,
};
