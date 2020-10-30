import * as React from "react";
import ImageLoader from "../atoms/inputs/imageLoader";
import styled from "styled-components";

const InfoBlockStyle = styled.div`
  margin-top: 75px;
  p {
    margin-top: 50px;
  }
  .dn-break {
    width: 60%;
    margin: auto;
    height: 4px;
    background: rgb(34 34 34);
  }
`;

interface Props {
  imgSrc: string;
  text: string;
  heading: string;
  reverse?: boolean;
}

function InfographicBlock(props: Props) {
  const textContent = (
    <div className="one-half column centered">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <div className="dn-break" />
    </div>
  );
  const imgContent = (
    <div className="one-half column centered">
      <div className="img-block greyed-on-touch">
        <ImageLoader
          width="350"
          imgSrc={props.imgSrc}
          imgAlt={"Mobile"}
          height="300"
        />
      </div>
    </div>
  );
  return (
    <InfoBlockStyle>
      <div className="row">
        {props.reverse ? (
          <React.Fragment>
            {textContent} {imgContent}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {imgContent} {textContent}
          </React.Fragment>
        )}
      </div>
    </InfoBlockStyle>
  );
}

export default InfographicBlock;
