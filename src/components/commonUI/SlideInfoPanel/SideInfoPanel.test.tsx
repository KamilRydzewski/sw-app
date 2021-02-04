import { render } from "@testing-library/react";
import SlideInfoPanel from "./SlideInfoPanel";

describe("SlideInfoPanel component", () => {
  it("renders SlideInfoPanel element", () => {
    const { getByTestId } = render(<SlideInfoPanel text="Some text"/>);
    expect(getByTestId("slide-info-panel")).toBeInTheDocument();
  });
  it("renders SlideInfoPanel without prop", () => {
    const { getByText } = render(<SlideInfoPanel />);
    expect(getByText("Wrtie your info")).toBeInTheDocument();
  });
});
