import * as React from "react";
import { render } from "@testing-library/react";
import AboutInfo from "./aboutInfo";

describe("<AboutInfo /> spec", () => {
  it("renders the component", () => {
    const container = render(<AboutInfo />);
    expect(container).toMatchSnapshot();
  });
});
