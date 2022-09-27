import { LoadingAnimation } from "./styles";

export const Loading = () => {
  return (
    <div className="loaderContainer">
      <div>Aguardando cidade...</div>
      <LoadingAnimation>
        <div className="loader"></div>
      </LoadingAnimation>
    </div>
  );
};
