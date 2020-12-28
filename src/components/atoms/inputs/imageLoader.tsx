/** @jsx createElement */
import { createElement } from "react";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  imgSrc: string;
  imgAlt: string;
  width: string;
  height: string;
}

const First = styled.div`
  background: #bbbbbb38;
  width: 80%;
  height: 40px;
  margin: auto;
  border-radius: 40px 31px 48px 51px;
  padding-top: 20px;
  margin-top: 20px;
`;

const Second = styled.div`
  background: #bbbbbb38;
  margin-top: 50px;
  width: 50%;
  height: 40px;
  margin: auto;
  border-radius: 40px 31px 48px 51px;
  margin-top: 20px;
`;

const Third = styled.div`
  background: #bbbbbb38;
  width: 30%;
  height: 30px;
  margin: auto;
  border-radius: 40px 31px 48px 51px;
  margin-top: 20px;
`;

function ImageLoader(props: Props) {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div>
      {!loaded && (
        <div
          style={{
            height: "300px",
            width: props.width,
            background: "#f1f1f1",
            borderRadius: "40px 31px 48px 51px",
            paddingTop: "20px",
            marginTop: "20px",
          }}
        >
          <First />
          <Second />
          <Third />
        </div>
      )}
      <img
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => {
          setLoaded(true);
        }}
        src={props.imgSrc}
        alt={props.imgAlt}
      />
    </div>
  );
}

export default ImageLoader;
