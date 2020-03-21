import * as React from "react";
import { render } from "@testing-library/react";
import Banner from "./banner";

describe("<Banner /> spec", () => {
  it("renders the component", () => {
    const container = render(<Banner />);
    expect(container).toMatchSnapshot();
  });
});
