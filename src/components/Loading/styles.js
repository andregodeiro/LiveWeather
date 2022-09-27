import styled from "styled-components";

export const LoadingAnimation = styled.div`
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #0098da; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
    margin-top: 20%;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
