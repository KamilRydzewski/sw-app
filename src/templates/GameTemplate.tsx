import styled from "styled-components";
import BaseLoader from "src/components/baseUI/BaseLoader/BaseLoader";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStoreType } from "src/store/index";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    flex-direction: column;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    flex-direction: column;
  }
`;
const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const GameTemplate: React.FC = ({ children }) => {
  const starshipsState = useSelector((state: RootStoreType) => state.starships);
  const peopleState = useSelector((state: RootStoreType) => state.people);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      !starshipsState.hasOwnProperty("starships") &&
      !peopleState.hasOwnProperty("people")
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [starshipsState && peopleState]);

  return (
    <StyledSection>
      {loading ? (
        <LoaderWrapper>
          <BaseLoader></BaseLoader>
        </LoaderWrapper>
      ) : (
        <StyledWrapper>{children}</StyledWrapper>
      )}
    </StyledSection>
  );
};

export default GameTemplate;
