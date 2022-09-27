import styled from "styled-components";

export const LoadingAnimation = styled.div`
  .loader {
    border: 7px solid #f3f3f3; /* Light grey */
    border-top: 7px solid #0098da; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
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

export const LoadingContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
