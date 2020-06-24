import Boxes from "./boxesBlock";
import * as React from "react";
import { render } from "@testing-library/react";

describe("<TeamInfo /> spec", () => {
  it("renders the component", () => {
    const container = render(<Boxes />);
    expect(container).toMatchSnapshot();
  });
});
