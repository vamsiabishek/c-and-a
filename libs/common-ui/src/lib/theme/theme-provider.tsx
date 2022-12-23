import { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import {FontType, FontSizes, FontWeights, Spaces, BorderWidths, BorderRadius} from '@c-and-a/shared-types';

const colors = {
  black: '#202125',
  white: '#FFFFFF',
  green: '#5BCB02',
  grey_1: '#F8F8F8',
  grey_2: '#EEEEEE',
  grey_3: '#A1A2A4',
  svg_grey_3: 'invert(74%) sepia(8%) saturate(62%) hue-rotate(182deg) brightness(88%) contrast(83%)'
}

const fonts: FontType = [
  'Montserrat, Verdana, Geneva, sans-serif',
  "'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif",
];
fonts.primary = fonts[0];
fonts.secondary = fonts[1];

const fontSizes: FontSizes = [14, 16, 20, 24, 32];
fontSizes.sm = fontSizes[0];
fontSizes.md = fontSizes[1];
fontSizes.lg = fontSizes[2];
fontSizes.xl = fontSizes[3];
fontSizes.xxl = fontSizes[4];

const fontWeights: FontWeights = [400, 600, 700];
fontWeights.regular = fontWeights[0];
fontWeights.bold = fontWeights[1];
fontWeights.extraBold = fontWeights[2];

const space: Spaces = [0, 4, 8, 16, 24, 32, 40, 56];
space.xxs = space[1];
space.xs = space[2];
space.sm = space[3];
space.md = space[4];
space.lg = space[5];
space.xl = space[6];
space.xxl = space[7];

const radii: BorderRadius = [2, 4, 8, 15];
radii.sm = radii[0];
radii.md = radii[1];
radii.lg = radii[2];
radii.xl = radii[3];

const borderWidths: BorderWidths = ['1px', '2px'];
borderWidths.sm = borderWidths[0];
borderWidths.md = borderWidths[1];

export const theme = {
  colors,
  fontSizes,
  fontWeights,
  space,
  borderWidths,
  radii
}


export const ThemeProvider = ({ children } : { children: ReactNode }) => (
  <StyledComponentsProvider theme={theme}>
    {children}
  </StyledComponentsProvider>
);

export default ThemeProvider;
