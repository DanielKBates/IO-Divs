import React from "react";
import useOnScroll from "./useOnScroll";

const IODiv = ({ activeClass, children, inactiveClass, threshold, staticClass }) => {

  const [scrollRef, isVisible] = useOnScroll({
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });

  function classConcat(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div ref={scrollRef} className={classConcat(isVisible ? `${activeClass} ` : `${inactiveClass}`, staticClass)}>
      {children}
    </div>
  );
};

export default IODiv;
