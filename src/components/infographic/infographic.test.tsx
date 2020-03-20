import * as React from "react";
import { render } from "@testing-library/react";
import Infographic from "./infographic";
import { ParallaxProvider } from "react-scroll-parallax";

describe("<Infographic /> spec", () => {
  it("renders the component", () => {
    const container = render(
      <ParallaxProvider>
        <Infographic />
      </ParallaxProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
