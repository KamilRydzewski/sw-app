import styled, { css } from "styled-components";

interface ICardTypes {
  redCard?: boolean;
  blueCard?: boolean;
}

export const Wrapper = styled.div<ICardTypes>`
  border: 6px solid transparent;
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

  @media all and (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 225px;
    height: 300px;
  }

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    width: 150px;
    height: 200px;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
`;

export const CardParameter = styled.div`
  color: ${({ theme }) => theme.white};
`;

export const CardActions = styled.div`
  align-self: flex-end;
  margin-top: auto;
`;
