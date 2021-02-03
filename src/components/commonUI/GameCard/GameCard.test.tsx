import { render } from "@testing-library/react";
import GameCard from "./GameCard";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "src/theme/mainTheme";

describe("GameCard component", () => {
  it("renders GameCard element", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <GameCard />
      </ThemeProvider>
    );
    expect(getByTestId("game-card")).toBeInTheDocument();
  });
});
