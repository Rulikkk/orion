import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faDoorClosed } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <div className="funny-door text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
    <FontAwesomeIcon icon={faDoorOpen} className="text-xl" />
    {/* <i className="text-xl fas fa-door-open" /> */}
  </div>
);
