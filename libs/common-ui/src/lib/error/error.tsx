import styled from 'styled-components';
import { FallbackProps } from 'react-error-boundary';


const StyledError = styled.div`
  color: blue;
`;

export function Error({ error }: FallbackProps) {
  return (
    <StyledError>
      <h1>An error occurred: {error.message}</h1>
    </StyledError>
  );
};

export default Error;
