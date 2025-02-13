import * as S from "./styles";

import { RockIcon, PaperIcon, ScissorsIcon } from "../../assets/index";

type HandComponentProps = {
  handType: "rock" | "paper" | "scissor";
};

const HandComponent = ({ handType }: HandComponentProps) => {

  const getIcon = () => {
    switch (handType) {
      case "rock":
        return <RockIcon />;
      case "paper":
        return <PaperIcon />;
      case "scissor":
        return <ScissorsIcon />;
      default:
        return null;
    }
  };

  return (
    <S.Container $handType={handType}>
      <S.Border>
        <S.Icon>
          {getIcon()}
        </S.Icon>
      </S.Border>
    </S.Container>
  );
};

export default HandComponent;
