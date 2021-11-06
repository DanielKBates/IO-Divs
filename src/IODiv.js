import React from "react";
import useOnScroll from "./useOnScroll";

const IODiv = (props) => {
  const { activeClassName, children, inactiveClassName, threshold } = props;

  const [scrollRef, isVisible] = useOnScroll({
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });

  return (
    <div ref={scrollRef} className={isVisible? `${activeClassName} ` : `${inactiveClassName}`}>
      {children}
    </div>
  );
};

export default IODiv;
