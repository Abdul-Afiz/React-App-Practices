import { useState, useEffect } from "react";

export default function ScreenDimension() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

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

  useEffect(() => {
    const debounceHandleResize = debounce(function handleResize() {
      setDimension({
        ...dimension,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);

    window.addEventListener("resize", debounceHandleResize);

    return (_?: null) =>
      window.removeEventListener("resize", debounceHandleResize);
  });

  //   if (dimension.width === 800) {
  //     return dimension;
  //   }

  return dimension;
}
