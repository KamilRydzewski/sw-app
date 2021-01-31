import styled, { css } from "styled-components";

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
  children?: any;
};

const GameTopBar: React.FC<GameTopBarProps> = ({
  leftPoints,
  rightPoints,
  children,
}) => (
  <StyledTopBarWrapper>
    <GamePoints>
      <Points>{leftPoints}</Points>
      <Points secondary>{rightPoints}</Points>
    </GamePoints>
  </StyledTopBarWrapper>
);

export default GameTopBar;
