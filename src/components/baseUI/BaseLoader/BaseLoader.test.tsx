import { render } from "@testing-library/react";
import BaseLoader from "./BaseLoader";

describe("BaseLoader component", () => {
  it("renders BaseLoader element", () => {
    const { getByTestId } = render(<BaseLoader />);
    expect(getByTestId("base-loader")).toBeInTheDocument();
  });
});
