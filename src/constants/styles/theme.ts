import { DefaultTheme } from 'styled-components';

const colors = {
  Text: {
    primary: '#FAFAFA',
    sub: '#F8F9FB',
    click: '#EDEDEF',
    none: '#7E7D85',
  },
  Accent: {
    main: '#6E56CF',
    subWrong: '#E5494D',
    subRight: '#0091FF',
  },
  Darkmode: {
    background: '#030303',
    boxcolor: '#1C1C1E',
    boxshadow: '#141416',
    boxinput: '#232325',
    highlight: '#ECECEE',
    default: '#7D7C81',
  },
};

const fontWeight = {
  light: 200,
  normal: 400,
  semiBold: 600,
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
