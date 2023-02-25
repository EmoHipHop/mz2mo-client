import 'styled-components';
import type { ColorType, DeviceType, FontType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: FontType;
    colors: ColorType;
    devices: DeviceType;
  }
}
