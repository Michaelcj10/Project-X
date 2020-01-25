import * as React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("<Button /> spec", () => {
  it("renders the component", () => {
    const container = render(<Button text="Test" />);
    expect(container).toMatchSnapshot();
  });
});
