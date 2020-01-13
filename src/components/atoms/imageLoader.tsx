import * as React from "react";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled from "styled-components";

const LoaderSkeletonStyle = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
`;

interface Props {
  imgSrc: string;
  imgAlt: string;
  width: string;
  height: string;
  isCircle?: boolean;
}

function ImageLoader(props: Props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      {imgLoaded ? null : (
        <LoaderSkeletonStyle>
          <SkeletonTheme color="#d4d2d2" highlightColor="#efefef">
            <Skeleton
              circle={props.isCircle}
              width={`${props.width}px`}
              height={`${props.height}px`}
            />
          </SkeletonTheme>
        </LoaderSkeletonStyle>
      )}

      <img
        style={{ visibility: imgLoaded ? "visible" : "hidden" }}
        onLoad={() => {
          setImgLoaded(true);
        }}
        src={props.imgSrc}
        alt={props.imgAlt}
      />
    </>
  );
}

export default ImageLoader;
