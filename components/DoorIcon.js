// import "./DoorIcon.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faDoorClosed } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import useIntersect from "./useIntersect.js";

const defState = false,
  delay = 1000;
let timeoutId, lastEnter;

export default function DoorIcon() {
  const [open, setOpen] = useState(defState),
    // [ref, entry] = useIntersect({ threshold: [0, 0.5, 1] }),
    enter = () => {
      setOpen(!defState);
      lastEnter = Date.now();
      if (!timeoutId) timeoutId = setTimeout(expired, delay);
    },
    expired = () => {
      let now = Date.now();
      if (now - lastEnter >= delay) {
        setOpen(defState);
        timeoutId = null;
      } else timeoutId = setTimeout(expired, delay - now + lastEnter);
    };
  // console.log(entry);
  return (
    <div
      // ref={ref}
      className="funny-door text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
      onMouseEnter={enter}
    >
      <FontAwesomeIcon
        icon={open ? faDoorOpen : faDoorClosed}
        className="text-xl"
      />
      {/* <i className="text-xl fas fa-door-open" /> */}
    </div>
  );
}
