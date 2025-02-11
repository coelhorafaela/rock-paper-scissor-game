import styled from "styled-components";

export const Container = styled.div<{ $handType: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${(handType) =>
    handType.$handType === "rock"
      ? "#DD4345 "
      : handType.$handType === "paper"
      ? "#516DF4"
      : "#EAA212"};
  box-shadow: inset 0px -2px #24242424;
`;

export const Border = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: inset 0px 2px 1px 0px #0000002e;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: scale(0.45);
    transform-origin: center;
  }
`;
