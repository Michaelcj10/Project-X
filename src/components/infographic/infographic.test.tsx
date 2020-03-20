import * as React from "react";
import { render } from "@testing-library/react";
import Infographic from "./infographic";

describe("<Infographic /> spec", () => {
  it("renders the component", () => {
    const container = render(<Infographic />);
    expect(container).toMatchSnapshot();
  });
});
