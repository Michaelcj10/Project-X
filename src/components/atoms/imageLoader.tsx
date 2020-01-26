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
  count: number;
}

function ImageLoader(props: Props) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const getItems = () => {
    const arr: React.ReactNode[] = [];

    for (let x = 0; x < props.count; x++) {
      arr.push(
        <React.Fragment key={x}>
          <Skeleton width={`${props.width}px`} height={`30px`} /> <br />
        </React.Fragment>
      );
    }

    return arr;
  };

  return (
    <>
      {imgLoaded ? null : (
        <LoaderSkeletonStyle>
          <SkeletonTheme color="#d4d2d2" highlightColor="#efefef">
            {getItems()}
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
