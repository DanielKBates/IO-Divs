import React from "react";
import IODiv from "./IODiv";

function App() {
  return (
    <div className="py-12 w-11/12 md:w-5/6 mx-auto bg-blue-50 flex flex-col space-y-10 items-center">
      <h1 className="text-center text-indigo-600 text-4xl underline">
        Intersection Observer Divs
      </h1>
      <p className="w-2/3">
        Built with Tailwind, although any class CSS will work (styled-components
        coming soon?). <span className="line-through" >I need to implement a class joiner so one needn't rewrite styles
          that apply to both active and inactive styles.</span> Now with 3 class props! Anywho, use these for
        scroll/position-on-a-viewport based animations. Utility class based
        frameworks would probs benefit from this most.
        <a
          className="text-indigo-600 block"
          href="https://github.com/DanielKBates/IO-Divs"
        >
          https://github.com/DanielKBates/IO-Divs
        </a>
      </p>
      <IODiv
        threshold={1}
        activeClass="bg-red-400 "
        inactiveClass="bg-purple-600"
        staticClass="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        Scroll down just a lil bit
      </IODiv>
      <IODiv
        threshold={1}
        activeClass="bg-blue-400"
        inactiveClass="bg-yellow-200"
        staticClass="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        Change rudimentary styles based on if the element is on the
        screens viewport
      </IODiv>{" "}
      <IODiv
        threshold={0.5}
        activeClass="bg-indigo-400"
        inactiveClass="bg-red-600"
        staticClass="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        Set the threshold at which the element will change its style.{" "}
      </IODiv>{" "}
      <IODiv
        threshold={0.75}
        activeClass="bg-red-400"
        inactiveClass="opacity-0 "
        staticClass="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        Boo! Change opacity and visibility styles..
      </IODiv>{" "}
      <h1 className="text-center text-indigo-600 text-4xl underline">
        Transformations and Transitions
      </h1>
      <IODiv
        threshold={1}
        activeClass="bg-green-600 "
        inactiveClass="opacity-0"
        staticClass="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in "
      >
        ...and add transitions between the changes
      </IODiv>
      <IODiv
        threshold={1}
        activeClass="bg-pink-600 "
        inactiveClass="opacity-0 translate-x-14"
        staticClass="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in "

      >
        Combine translations and transitions for opacity for moving fade in
        effects
      </IODiv>
      <IODiv
        threshold={1}
        inactiveClass="rotate-12 scale-75"
        staticClass="bg-purple-500 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in"
      >
        Manipulate seemingly static elements
      </IODiv>
      <IODiv
        threshold={1}
        activeClass="bg-yellow-500 animate-shake"
        inactiveClass="bg-pink-700"
        staticClass="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        Trigger keyframe animations based on if the element is on the screen
      </IODiv>
      <IODiv
        threshold={0.25}
        inactiveClass="-translate-x-14 opacity-0"
        staticClass="flex flex-col space-y-6 bg-gray-300 w-2/3 p-12 items-center justify-center rounded-xl transform transition-all duration-1000 ease-in"
      >
        <p className="mb-12">
          Nest multiple IODivs inside one another. The viewport is
          always the window so the elements do not interact with one another in
          terms of their position on the screen
        </p>
        <IODiv
          threshold={1}
          inactiveClass="opacity-0 -translate-x-14"
          staticClass="bg-green-300 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in"
        >
          Hello
        </IODiv>
        <IODiv
          threshold={1}
          inactiveClass="opacity-0 -translate-y-14"
          staticClass="bg-purple-300 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease "
        >
          World
        </IODiv>
        <IODiv
          threshold={1}
          inactiveClass="opacity-0 translate-x-14"
          staticClass="bg-yellow-400 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transition-all duration-1000 ease-in "
        >
          Sunny day to you!
        </IODiv>
      </IODiv>
    </div>
  );
}

export default App;
