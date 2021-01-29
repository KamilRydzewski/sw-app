import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/theme/GlobalStyle";
import { theme } from "src/theme/mainTheme";
import { useEffect } from "react";
import GalaxyBackground from "src/components/commonUI/GalaxyBackground/GalaxyBackground";
import { getKeyPressed } from "src/utils/keyboardUtils";
import { useHistory } from "react-router-dom";

const MainTemplate: React.FC = ({ children }) => {
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
