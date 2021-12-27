import { useState, useEffect } from "react";

// interface IProp {
//   width: number;
//   height: number;
// }

export default function useScreenDimension() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  // console.log(dimension);
  function debounce(fn: () => void, ms: number) {
    let timer: any;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        // @ts-ignore
        fn.apply(this, arguments);
      }, ms);
    };
  }

  function handleResize() {
    setDimension({
      // ...dimension,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    handleResize();
    const debounceHandleResize = debounce(handleResize, 1000);
    window.addEventListener("resize", debounceHandleResize);
    return (_?: null) =>
      window.removeEventListener("resize", debounceHandleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [dimension.width, dimension.height];
}
