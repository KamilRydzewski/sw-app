import { render } from "@testing-library/react";
import GameTemplate  from './GameTemplate'
import { Provider } from "react-redux";
import Store from "src/store/index";

describe("GameTemplate component", () => {
  it("renders GameTemplate element", () => {
    const { getByTestId } = render(
      <Provider store={Store}>
    <GameTemplate />
    </Provider>)
    
    expect(getByTestId("game-template")).toBeInTheDocument();
  });
});
