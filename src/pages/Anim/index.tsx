import React from "react";
import "./anim.less";

// --- end ---
export function Anim(ele: React.ReactElement) {
  return <div className="_onload_animation">{ele}</div>;
}
