import { render } from "@testing-library/react";
import GalaxyBackground from "./GalaxyBackground";

describe("GalaxyBackground component", () => {
  it("renders GalaxyBackground element", () => {
    const { getByTestId } = render(<GalaxyBackground />);
    expect(getByTestId("galaxy-background")).toBeInTheDocument();
  });
});
