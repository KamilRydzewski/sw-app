import styled, { css, keyframes } from "styled-components";
import { ReactComponent as People } from "src/assets/images/darth-vader.svg";
import { ReactComponent as StarShip } from "src/assets/images/smallship.svg";
interface ICardTypes {
  redCard?: boolean;
  blueCard?: boolean;
  winner?: boolean;
}
interface CardParameterType {
  redCard?: boolean;
  blueCard?: boolean;
}

interface ICardSideTypes {
  faceUp?: boolean;
}
const animatedgradient = keyframes`
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
`;

const shake = keyframes`{
  10%,
  90% {
    transform: translate3d(-5px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(10px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-20px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(20px, 0, 0);
  }
}
;`;
const flyaround = keyframes`
  0% {
		top: 50%;
    left: -20%;
    z-index: 3;
    transform: scale(1.2)
	}
  40%{
    transform: scale(1.2)
  }
  45%{
    transform: scale(1)
  }
  49%{
    z-index: 3;
    
  }
  50%{
    left: 110%;
    top: 60%;
    z-index: -1;
  }
  92%{
    transform: scale(1)
  }
  97%{
    transform: scale(1.2)
  }
  99%{
    z-index: -1;
  }
	100% { 
	top: 50%;
  left: -20%;
  z-index: 3;
	}
`;

export const PeopleIcon = styled(People)`
  position: absolute;
  width: 20px;
  height: 20px;
  animation-delay: 1s;
  transition: all 0.3s ease;
  animation: ${flyaround} 5s linear infinite;
  & * {
    fill: white;
  }
`;

export const StarshipIcon = styled(StarShip)`
  position: absolute;
  z-index: 0;
  width: 30px;
  transition: all 0.3s ease;
  height: 30px;
  animation: ${flyaround} 5s linear infinite;
  & * {
    fill: white;
  }
`;
export const Wrapper = styled.div<ICardTypes>`
  position: relative;
  padding: 15px;
  border-radius: 5px;
  width: 300px;
  height: 400px;
  box-shadow: 0 0 5px ${({ theme }) => theme.white};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.white};
    transform: scale(1.02);
  }
  ${({ blueCard }) =>
    blueCard &&
    css`
      border: 6px solid ${({ theme }) => theme.blueTransparent};
      box-shadow: 0 0 5px ${({ theme }) => theme.blue};

      &:hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.blue};
        transform: scale(1.02);
      }
    `}
  ${({ redCard }) =>
    redCard &&
    css`
      border: 6px solid ${({ theme }) => theme.redTransparent};
      box-shadow: 0 0 5px ${({ theme }) => theme.red};
      &:hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.red};
        transform: scale(1.02);
      }
    `}

    ${({ winner }) =>
    winner &&
    css`
      animation: ${shake} 0.8s linear;
      position: relative;
      &::after {
        content: "";
        border-radius: 5px;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          60deg,
          #f79533,
          #f37055,
          #ef4e7b,
          #a166ab,
          #5073b8,
          #1098ad,
          #07b39b,
          #6fba82
        );
        z-index: -1;
        animation: ${animatedgradient} 1.5s ease alternate infinite;
        background-size: 300% 300%;
      }
    `}

  @media all and (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 225px;
    height: 300px;
  }

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    width: 160px;
    height: 220px;
    padding: 7px;
  }
`;

export const Container = styled.div<ICardSideTypes>`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ faceUp }) =>
    faceUp &&
    css`
      background: #040808;
    `}
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    padding: 0;
  }
`;

export const CardBackground = styled.div`
  height: 100%;
  width: 100%;
  background: #222222;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const CardTitle = styled.h3`
  padding: 10px 20px;
  text-align: center;
  color: ${({ theme }) => theme.white};
  word-break: break-all;
  min-height: 70px;
  height: 70px;

  @media all and (max-width: ${({ theme }) => theme.bpTablet}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    height: 35px;
    min-height: 35px;
    padding: 5px 10px;
  }
`;

export const CardParameter = styled.div`
  color: ${({ theme }) => theme.white};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;
export const CardParameterContainer = styled.div<CardParameterType>`
  border: 10px solid ${({ theme }) => theme.redTransparent};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px;
  width: 150px;
  height: 150px;
  text-align: center;

  ${({ redCard }) =>
    redCard &&
    css`
      border: 10px solid ${({ theme }) => theme.redTransparent};
      @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
        border: 5px solid ${({ theme }) => theme.redTransparent};
      }
    `}

  ${({ blueCard }) =>
    blueCard &&
    css`
      border: 10px solid ${({ theme }) => theme.blueTransparent};
      @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
        border: 5px solid ${({ theme }) => theme.blueTransparent};
      }
    `}  

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    width: 70px;
    height: 70px;

    word-break: break-all;
  }
`;
export const CardActions = styled.div`
  align-self: flex-end;
  margin-top: auto;
`;
