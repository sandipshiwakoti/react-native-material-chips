import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Tick = (props: SvgProps | any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={18}
      height={18}
      {...props}
    >
      <Path d="M20.293 5.293L9 16.586l-4.293-4.293-1.414 1.414L9 19.414 21.707 6.707l-1.414-1.414z" />
    </Svg>
  );
};

export default Tick;
