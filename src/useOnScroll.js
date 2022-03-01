import { useRef, useState, useEffect } from "react"

const useOnScroll = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);
 
  const handleScroll = (events) => {
    const [event] = events;
    setIsVisible(event.isIntersecting);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, options);
    let currentRef = scrollRef.current
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [scrollRef, options]);
  return [scrollRef, isVisible]
}

export default useOnScroll;
