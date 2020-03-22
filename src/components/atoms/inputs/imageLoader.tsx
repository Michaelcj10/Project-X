import * as React from "react";

interface Props {
  imgSrc: string;
  imgAlt: string;
  width: string;
  height: string;
}

function ImageLoader(props: Props) {
  return (
    <div>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </div>
  );
}

export default ImageLoader;
