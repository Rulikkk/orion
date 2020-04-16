import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

export default ({ children }) => (
  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
      <FontAwesomeIcon icon={faUserFriends} className="text-xl" />
    </div>
    {children}
  </div>
);
