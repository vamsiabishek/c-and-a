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
};

export const Button = styled.button<Props>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${textAlign}
  cursor: pointer;
`;

