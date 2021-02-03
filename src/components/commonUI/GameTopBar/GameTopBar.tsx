import styled, { css } from "styled-components";
import { ReactNode } from "react";
const StyledTopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  padding: 20px 10px;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GamePoints = styled.div`
  display: flex;
  align-items: center;
`;

interface IPoints {
  secondary?: boolean;
}
const Points = styled.p<IPoints>`
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 0 40px;

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.red};
    `}
`;

type GameTopBarProps = {
  leftPoints?: number;
  rightPoints?: number;
  children?: ReactNode | React.FC;
};

const GameTopBar: React.FC<GameTopBarProps> = ({
  leftPoints = 0,
  rightPoints = 0,
  children,
}) => (
  <StyledTopBarWrapper data-testid="game-top-bar">
    <GamePoints >
      <Points>{leftPoints}</Points>
      {children}
      <Points secondary>{rightPoints}</Points>
    </GamePoints>
  </StyledTopBarWrapper>
);

export default GameTopBar;
