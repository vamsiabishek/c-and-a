import styled from 'styled-components';
import { typography, color, space, TypographyProps, SpaceProps } from 'styled-system';

type Props = TypographyProps & SpaceProps & {
  textTransform?: string;
}

export const Text = styled.span<Props>`
  ${typography};
  ${color};
  ${space};
  ${p => p.textTransform && `text-transform: ${p.textTransform}`}
`

export default Text;

