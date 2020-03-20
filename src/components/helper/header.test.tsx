import Header from "./header";
import * as React from "react";
import { render } from "@testing-library/react";

describe("<Header /> spec", () => {
  it("renders the component", () => {
    const container = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
