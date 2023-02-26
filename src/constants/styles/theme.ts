import { DefaultTheme } from 'styled-components';

const colors = {
  mono: {
    white: '#FFFFFF',
    gray1: '#F5F5F5',
    gray2: '#EDEDED',
    gray3: '#E0E0E0',
    gray4: '#C2C2C2',
    gray5: '#9E9E9E',
    gray6: '#757575',
    gray7: '#616161',
    gray8: '#424242',
  },
  black: {
    opacity30: '#1D1D1D33',
    opacity60: '#1D1D1D66',
    black: '#1D1D1D',
  },
};

const fontWeight = {
  light: 200,
  normal: 400,
  bold: 700,
};

const fontSize = {
  buttonSmall: '12px',
  buttonMedium: '14px',
  buttonLarge: '16px',
  body3: '18px',
  body2: '20px',
  body1: '22px',
  Heading5: '26px',
  Heading4: '34px',
  Heading3: '42px',
  Heading2: '50px',
  Heading1: '66px',
};

const fonts = {
  weight: fontWeight,
  size: fontSize,
};

const devices = {
  mobile: `@media only screen and (max-width: 425px)`,
  tablet: `@media only screen and (max-width: 768px)`,
  desktop: `@media only screen and (max-width: 1440px)`,
};

export type ColorType = typeof colors;
export type FontType = typeof fonts;
export type DeviceType = typeof devices;

export const theme: DefaultTheme = {
  colors,
  fonts,
  devices,
};
