import * as S from "./styles";

import { RockIcon } from "../../assets/index";

const HandComponent = () => {
  return (
    <S.Container $handType="scissor">
      <S.Border>
        <S.Icon>
          <RockIcon />
        </S.Icon>
      </S.Border>
    </S.Container>
  );
};

export default HandComponent;
