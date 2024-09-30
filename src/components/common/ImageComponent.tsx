import Image, { ImageProps } from "next/image";
import React from "react";

const ImageComponent = ({
  width = 350,
  height = 150,
  alt = "image component",
  ...rest
}: ImageProps) => {
  return (
    <div>
      <Image alt={alt} width={width} height={height} {...rest} />
    </div>
  );
};

export default ImageComponent;
