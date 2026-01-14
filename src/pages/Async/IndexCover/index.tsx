import React from "react";
import styles from "./index.module.less";
import { animated, useSpring } from "react-spring";

const DURATION = 200;
const DELAY = 5000;

function useAnimatedPath({
  toggle,
  delay,
}: {
  toggle: boolean;
  delay: number;
}) {
  const [length, setLength] = React.useState(Number);
  const animatedStyle = useSpring({
    from: {
      strokeDasharray: length,
      strokeDashoffset: length,
    },
    to: {
      strokeDasharray: length,
      strokeDashoffset: toggle ? 0 : length,
    },
    delay,
    config: {
      duration: DURATION,
    },
    pause: !toggle,
    // loop: true,
    // reverse: true,
  });

  return {
    style: animatedStyle,
    ref: (ref: { getTotalLength: () => number }) => {
      // The ref is `null` on component unmount
      if (ref) {
        setLength(ref.getTotalLength());
      }
    },
  };
}

function SvgPathAnim({
  color,
  d,
  toggle,
  delay,
}: {
  color: string;
  d: string;
  toggle: boolean;
  delay: number;
}) {
  const animationStrokeProps = useAnimatedPath({ toggle, delay: delay });
  const animationFillStyle = useSpring({
    fill: "#00000000",
    delay: 0,
  });
  const animationStrokeWidth = useSpring({
    from: { v: 0 },
    to: { v: 2.5 },
    delay,
    config: {
      duration: DURATION,
    },
    pause: !toggle,
  });
  const colorFrom =
    Math.random() <= 0.5 ? "rgb(19, 234, 244)" : "rgb(225, 26, 157)";
  const animationStrokeColor = useSpring({
    from: { v: colorFrom },
    to: { v: color },
    delay,
    config: {
      duration: DURATION + 100,
    },
    pause: !toggle,
  });

  return (
    <animated.path
      // @ts-ignore
      ref={animationStrokeProps.ref}
      // {...animationStrokeProps}
      style={{
        ...animationStrokeProps.style,
        ...animationFillStyle,
      }}
      // className={styles.anim_svg_path}
      stroke={animationStrokeColor.v}
      strokeWidth={animationStrokeWidth.v}
      d={d}
    />
  );
}

export default function SvgCover({
  svgPath,
  imgFile,
  showSvg,
  showImg,
}: {
  svgPath: string[];
  imgFile: string;
  showSvg: boolean;
  showImg: boolean;
}) {
  return (
    <div
      style={{
        width: "100%",
      }}
      className={showImg ? styles.cover_bg_fade_in : styles.cover_bg}
    >
      {/* container */}
      <div className={styles.container}>
        <svg
          width="900"
          height="1200"
          version="1.1"
          viewBox="0 0 900 1200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cover}
          style={{
            display: showSvg && !showImg ? "block" : "none",
          }}
        >
          {svgPath.map((path, index) => {
            return (
              <SvgPathAnim
                toggle={showSvg}
                d={path}
                color="#fff"
                delay={(index + 1) * (DELAY / svgPath.length)}
                key={"cover_svg_path" + index}
              />
            );
          })}
        </svg>
        <img
          src={imgFile}
          className={
            styles.cover + " " + (showImg ? styles.cover_fade_in : styles.hide)
          }
        ></img>
      </div>
    </div>
  );
}
