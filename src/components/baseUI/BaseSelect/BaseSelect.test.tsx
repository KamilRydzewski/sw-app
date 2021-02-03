import { render } from "@testing-library/react";
import BaseSelect from "./BaseSelect";

describe("BaseSelect component", () => {
  it("renders BaseSelect element", () => {
    const initialValue = "Value 1";
    const selectValues = ["Value 1", "Value 2", "Value 3"];
    const label = "Some Values";
    const handleSelect = (value: any) => {
      if (value === "Value 1") {
        console.log("something is 'not yes' xD");
      } else {
        console.log(value);
      }
    };
    const { getByTestId, rerender } = render(
      <BaseSelect
        values={selectValues}
        label={label}
        initialValue={initialValue}
        handleSelect={handleSelect}
      />
    );
    expect(getByTestId("base-select")).toBeInTheDocument();
  });
  it("displays default BaseSelect element", () => {
    const { getByText } = render(<BaseSelect />);
    expect(getByText(/label/i)).toBeInTheDocument();
  });
});
