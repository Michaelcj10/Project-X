import * as React from "react";

interface Props {
  imgSrc: string;
  imgAlt: string;
  width: string;
}

function ImageLoader(props: Props) {
  return (
    <>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </>
  );
}

export default ImageLoader;
