import styled from "styled-components";

export const Container = styled.div<{ $handType: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: ${(handType) =>
    handType.$handType === "rock"
      ? "#DD4345 "
      : handType.$handType === "paper"
      ? "#516DF4"
      : "#EAA212"};
  box-shadow: inset 0px -2.5px #24242424;
`;

export const Border = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  background-color: white;
  box-shadow: inset 0px 2.5px 1px 0px #0000002e;
`;

export const Icon = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;

  svg {
    transform: scale(0.65);
    transform-origin: center;
  }
`;
