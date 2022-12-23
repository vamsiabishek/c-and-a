import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  textAlign,
  SpaceProps,
  BorderProps,
  LayoutProps,
  BoxShadowProps,
  BackgroundProps
} from 'styled-system';

type Props = SpaceProps & BorderProps & LayoutProps & BoxShadowProps & BackgroundProps & {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  boxSizing?: string;
  flexWrap?: string;
};

export const Box = styled.div<Props>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${textAlign}
  box-sizing: ${p => p.boxSizing};
`;

