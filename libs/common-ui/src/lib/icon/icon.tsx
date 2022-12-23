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
};

export const Icon = styled.img<Props>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`;

