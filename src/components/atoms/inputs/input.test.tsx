import * as React from "react";
import { render } from "@testing-library/react";
import Input from "./input";

describe("<Input /> spec", () => {
  it("renders the component", () => {
    const container = render(<Input label="Test" />);
    expect(container).toMatchSnapshot();
  });
});
