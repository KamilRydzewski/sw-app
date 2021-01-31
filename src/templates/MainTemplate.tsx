import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/theme/GlobalStyle";
import { theme } from "src/theme/mainTheme";
import { useEffect, useRef } from "react";
import GalaxyBackground from "src/components/commonUI/GalaxyBackground/GalaxyBackground";
import { getKeyPressed } from "src/utils/keyboardUtils";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetStarships } from "src/actions/starship/StarshipActions";
import { GetPeople } from "src/actions/people/PeopleActions";

const MainTemplate: React.FC = ({ children }) => {
  const dispatch = useDispatch();
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
      location.hash !== "#/menu" &&
      location.hash !== "/"
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
