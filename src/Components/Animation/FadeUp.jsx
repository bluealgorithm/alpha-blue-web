import { useState } from "react";
// Libs
import { Waypoint } from "react-waypoint";
import { useTransition, useSpring, animated } from "react-spring";

const FadeUp = ({ children, delay }) => {
  let size = window.innerWidth
  size = size / 2
  const [inView, setInview] = useState(false);
//   const transition = useSpring({
//     delay: 500,
//     to: {
//       y: !inView ? 24 : 0,
//       opacity: !inView ? 0 : 1,
//     },
//   });
const transition = useSpring({
    delay: delay ? delay : 400,
    to: async (next) => {
        await next({ y: !inView ? -1000 : 0, opacity: !inView ? 0 : 1, })
        await next({ x: !inView ? size : 0})
    },
  });
   
  return (
    <Waypoint onLeave={() => setInview(false)} onEnter={() => setInview(true)}>
      <animated.div style={transition}>
        {children}
      </animated.div>
    </Waypoint>
  );
};

export default FadeUp;