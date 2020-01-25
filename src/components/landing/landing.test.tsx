import Landing from "./landing";
import * as React from "react";
import { render } from "@testing-library/react";

describe("<Landing /> spec", () => {
  it("renders the component", () => {
    const container = render(<Landing />);
    expect(container).toMatchSnapshot();
  });
});
