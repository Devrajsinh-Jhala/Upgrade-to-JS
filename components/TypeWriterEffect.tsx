"use client";
import { TypeAnimation } from "react-type-animation";

type Props = {};
const TypeWriterEffect = (props: Props) => {
  return (
    <div>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          "Upgrade your PHP", // initially rendered starting point
          1000,
          "Upgrade your Laravel",
          1000,
          "Upgrade your HTML",
          500,
        ]}
        speed={25}
        repeat={Infinity}
      />
    </div>
    
  );
};
export default TypeWriterEffect;
