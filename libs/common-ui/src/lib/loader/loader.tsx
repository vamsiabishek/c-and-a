import styled from 'styled-components';

export function Loader() {
  return(
    <SpinnerContainer data-testid='loading-spinner'>
      <LoadingSpinner>
      </LoadingSpinner>
    </SpinnerContainer>
  )
}

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
