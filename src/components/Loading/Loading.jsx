import { LoadingAnimation, LoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <div>Aguardando cidade...</div>
      <LoadingAnimation>
        <div className="loader"></div>
      </LoadingAnimation>
    </LoadingContainer>
  );
};
