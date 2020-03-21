import * as React from "react";
import { render } from "@testing-library/react";
import ButtonSecondary from "./buttonSecondary";

describe("<ButtonSecondary /> spec", () => {
  it("renders the component", () => {
    const container = render(<ButtonSecondary text="Test" />);
    expect(container).toMatchSnapshot();
  });
});
