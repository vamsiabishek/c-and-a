import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
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
};

export const Input = styled.input<Props>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

