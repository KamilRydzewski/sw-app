import { render } from "@testing-library/react";
import GameTopBar from './GameTopBar'
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "src/theme/mainTheme";
import BaseButton from "src/components/baseUI/BaseButton/BaseButton";

describe("GameTopBar component", () => {
  it("renders GameTopBar element", () => {
      const param1=2;
      const param2= 2;
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <GameTopBar leftPoints={param1} rightPoints={param2} children={<BaseButton/>}/>
      </ThemeProvider>
    );
    expect(getByTestId("game-top-bar")).toBeInTheDocument();
  });
  it("renders GameTopBar element without props", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <GameTopBar  />
    </ThemeProvider>
  );
  expect(getByTestId("game-top-bar")).toBeInTheDocument();
});
});
