import React from "react";
import IODiv from "./IODiv";

function App() {
  return (
    <div className="py-12 w-11/12 md:w-5/6 mx-auto bg-gray-200 flex flex-col space-y-10 items-center">
      <h1 className="text-center text-indigo-600 text-4xl underline">
        Intersection Observer Divs
      </h1>
      <p className="w-2/3">
        Built with Tailwind, although any class CSS will work (styled-components
        coming soon?). Need to make a class joiner so one needn't rewrite styles
        that apply to both active and inactive styles. Anywho, use these for
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
        activeClassName="bg-red-400 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
        inactiveClassName="bg-purple-600 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        Scroll down just a lil bit
      </IODiv>
      <IODiv
        threshold={1}
        activeClassName="bg-blue-400 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
        inactiveClassName="bg-yellow-200 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        We can change rudimentary styles based on if the element is on the
        screens viewport.
      </IODiv>{" "}
      <IODiv
        threshold={0.5}
        activeClassName="bg-indigo-400 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
        inactiveClassName="bg-red-600 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        We can change the threshold at which the element will change its style.{" "}
      </IODiv>{" "}
      <IODiv
        threshold={0.75}
        activeClassName="bg-red-400 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
        inactiveClassName="opacity-0  h-96"
      >
        Boo! We can change opacity and visibility styles..
      </IODiv>{" "}
      <h1 className="text-center text-indigo-600 text-4xl underline">
        Transformations and Transitions
      </h1>
      <IODiv
        threshold={1}
        activeClassName="bg-green-600 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in "
        inactiveClassName="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in opacity-0"
      >
        ...and we can add transitions between the changes
      </IODiv>
      <IODiv
        threshold={1}
        activeClassName="bg-pink-600 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in "
        inactiveClassName="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in opacity-0 translate-x-14"
      >
        Combine translations and transitions for opacity for moving fade in
        effects!
      </IODiv>
      <IODiv
        threshold={1}
        activeClassName="bg-purple-500 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in"
        inactiveClassName="bg-purple-500 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in rotate-12 scale-75"
      >
        Manipulate seemingly static elements.
      </IODiv>
      <IODiv
        threshold={1}
        activeClassName="bg-yellow-500 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl animate-shake"
        inactiveClassName="bg-pink-700 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl"
      >
        Trigger animations based on if the element is on the screen
      </IODiv>
      <IODiv
        threshold={0.25}
        activeClassName="flex flex-col space-y-6 bg-gray-300 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in "
        inactiveClassName=" flex flex-col w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all  duration-1000 ease-in opacity-0 -translate-x-14"
      >
        <p className="mb-12">
          We can even nest multiple IODiv's inside one another. The viewport is
          always the window so the elements do not interact with one another in
          terms of their position on the screen.
        </p>
        <IODiv
          threshold={1}
          activeClassName="bg-green-300 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease-in "
          inactiveClassName="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all  duration-1000 ease-in opacity-0 -translate-x-14"
        >
          Hello
        </IODiv>
        <IODiv
          threshold={1}
          activeClassName="bg-purple-300 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all duration-1000 ease "
          inactiveClassName="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl transform transition-all  duration-1000 ease opacity-0 -translate-y-14"
        >
          World
        </IODiv>
        <IODiv
          threshold={1}
          activeClassName="bg-yellow-400 h-96 w-2/3 p-12 flex items-center justify-center rounded-xl  transition-all duration-1000 ease-in "
          inactiveClassName="h-96 w-2/3 p-12 flex items-center justify-center rounded-xl  transition-all  duration-1000 ease-in opacity-0 "
        >
          Sunny day to you!
        </IODiv>
      </IODiv>
    </div>
  );
}

export default App;
