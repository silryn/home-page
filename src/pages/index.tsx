import React from "react";
import styles from "./index.less";
import "./override.less";
import IndexCover from "./Async/IndexCover";

import CoverImg1 from "../img/cover_98698741_p0.jpg?url";
import CoverSvg1 from "../img/cover_98698741_p0.svg?url";
import CoverImg2 from "../img/cover_98637054_p0.jpg?url";
import CoverSvg2 from "../img/cover_98637054_p0.svg?url";
import CoverImg3 from "../img/cover_98661655_p0.jpg?url";
import CoverSvg3 from "../img/cover_98661655_p0.svg?url";
import CoverImg4 from "../img/rimochan_1.jpg?url";
import CoverSvg4 from "../img/rimochan_1.svg?url";

const WIREFRAME_DURATION = 5500;
const IMAGE_DURATION = 1500;

export default function IndexPage() {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [paths, setPaths] = React.useState([]);
  const [imgFile, setImgFile] = React.useState("");
  const [showWireframe, setShowWireframe] = React.useState(false);
  const [showImage, setShowImage] = React.useState(false);
  const imgList = [
    {
      svg: CoverSvg1,
      img: CoverImg1,
    },
    {
      svg: CoverSvg2,
      img: CoverImg2,
    },
    {
      svg: CoverSvg3,
      img: CoverImg3,
    },
    {
      svg: CoverSvg4,
      img: CoverImg4,
    },
  ];
  const imgListLength = imgList.length;
  const nextImage = React.useCallback(() => {
    setPaths([]);
    setImgIndex((index) => {
      if (index + 1 === imgListLength) {
        return 0;
      }
      return index + 1;
    });
  }, []);
  // fetch data
  React.useEffect(() => {
    const fetchData = async () => {
      fetch(imgList[imgIndex].svg)
        .then((response) => response.text())
        .then((text) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, "image/svg+xml");
          const paths = doc.getElementsByTagName("path");
          const pathData: string[] = [];
          for (let i = 0; i < paths.length; i++) {
            pathData.push(paths[i].getAttribute("d")!);
          }
          // @ts-ignore
          setPaths(shuffle(pathData));
        })
        .catch((error) => {
          console.error(error);
        });
    };
    const shuffle = (array: string[]) => {
      let currentIndex = array.length;
      let temporaryValue: string;
      let randomIndex: number;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };
    if (paths.length === 0) {
      fetchData();
    }
  }, [paths, imgIndex]);
  // wireframe timer
  React.useEffect(() => {
    setShowWireframe(true);
    const wireframeTimer = setTimeout(() => {
      setShowWireframe(false);
      setShowImage(true);
    }, WIREFRAME_DURATION);
    return () => {
      clearTimeout(wireframeTimer);
    };
  }, [paths]);
  // image timer
  React.useEffect(() => {
    let imageTimer: ReturnType<typeof setTimeout>;
    if (showImage) {
      imageTimer = setTimeout(() => {
        setShowImage(false);
        nextImage();
      }, IMAGE_DURATION);
    }
    return () => {
      clearTimeout(imageTimer);
    };
  }, [showImage]);
  // set image file
  React.useEffect(() => {
    setImgFile(imgList[imgIndex].img);
  }, [imgIndex]);

  return (
    <div>
      <IndexCover
        imgFile={imgFile}
        svgPath={paths}
        showSvg={showWireframe}
        showImg={showImage}
      ></IndexCover>
    </div>
  );
}
