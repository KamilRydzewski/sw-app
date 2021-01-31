import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/theme/GlobalStyle";
import { theme } from "src/theme/mainTheme";
import { useEffect } from "react";
import GalaxyBackground from "src/components/commonUI/GalaxyBackground/GalaxyBackground";
import { getKeyPressed } from "src/utils/keyboardUtils";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreType } from "src/store/index";
import { GetStarships } from "src/actions/starship/StarshipActions";
import { GetPeoples } from "src/actions/people/PeopleActions";

const MainTemplate: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const starshipsState = useSelector((state: RootStoreType) => state.starships);
  const peoplesState = useSelector((state: RootStoreType) => state.peoples);
  useEffect(() => {
    dispatch(GetStarships());
    dispatch(GetPeoples());
  }, []);
  const escPress = getKeyPressed("Escape");
  let history = useHistory();
  useEffect(() => {
    if (location.pathname !== "/menu") {
      // history.goBack();
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
