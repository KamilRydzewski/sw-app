import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/theme/GlobalStyle";
import { theme } from "src/theme/mainTheme";
import { useEffect, useRef } from "react";
import GalaxyBackground from "src/components/commonUI/GalaxyBackground/GalaxyBackground";
import { getKeyPressed } from "src/utils/keyboardUtils";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreType } from "src/store/index";
import { GetStarships } from "src/actions/starship/StarshipActions";
import { GetPeople } from "src/actions/people/PeopleActions";
import BaseButton from "src/components/baseUI/BaseButton/BaseButton";
const MainTemplate: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const starshipsState = useSelector((state: RootStoreType) => state.starships);
  const peopleState = useSelector((state: RootStoreType) => state.people);
  const isMounted = useRef(false);

  useEffect(() => {
    dispatch(GetStarships());
    dispatch(GetPeople());
  }, []);
  const escPress = getKeyPressed("Escape");
  let history = useHistory();
  useEffect(() => {
    if (
      isMounted.current &&
      location.pathname !== "/menu" &&
      location.pathname !== "/"
    ) {
      history.goBack();
    } else {
      isMounted.current = true;
    }
  }, [escPress]);
  return (
    <main>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GalaxyBackground />
        {children}
      </ThemeProvider>
    </main>
  );
};

export default MainTemplate;
