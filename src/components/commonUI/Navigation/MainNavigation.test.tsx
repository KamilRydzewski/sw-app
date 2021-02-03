import { render } from "@testing-library/react";
import MainNavigation from './MainNavigation'
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "src/theme/mainTheme";
import { HashRouter } from "react-router-dom";
import {NavigationSchema} from './NavigationSchema';

describe("MainNavigation component", () => {
  it("renders MainNavigation element", () => {
    
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <HashRouter>
            <MainNavigation/>
            </HashRouter>
        </ThemeProvider>
    );
    expect(getByTestId("main-navigation")).toBeInTheDocument();
  });
  it("renders MainNavigation routes list", () => {
      const {getByText} = render(
          <ThemeProvider theme={theme}>
              <HashRouter>
              <MainNavigation/>
              </HashRouter>
          </ThemeProvider>
      );
     NavigationSchema.map( route => route.name).forEach(routeName=>{
        expect(getByText(routeName)).toBeInTheDocument();
    })
   
  });
});
