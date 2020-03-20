import * as React from "react";
import { render } from "@testing-library/react";
import InfographicBlock from "./infoBlock";

describe("<InfoBlock /> spec", () => {
  it("renders the component", () => {
    const container = render(
      <InfographicBlock text="Test" heading="Heading" imgSrc={"test"} />
    );
    expect(container).toMatchSnapshot();
  });
});
