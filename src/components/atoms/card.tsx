import * as React from "react";
import styled from "styled-components";
const mobile = require("../../images/blob-shape.svg");

const CardStyle = styled.div`
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  min-height: 400px;
  img {
    height: 210px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`;

function Card() {
  return (
    <CardStyle>
      <div>
        <img src={mobile} />
      </div>
    </CardStyle>
  );
}

export default Card;
