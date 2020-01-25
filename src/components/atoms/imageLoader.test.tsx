import * as React from "react";
import { render } from "@testing-library/react";
import ImageLoader from "./imageLoader";

describe("<ImageLoader /> spec", () => {
  it("renders the component", () => {
    const container = render(
      <ImageLoader
        width={"200px"}
        imgAlt={"Fake alt"}
        imgSrc={"Fake Src"}
        height={"200px"}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
