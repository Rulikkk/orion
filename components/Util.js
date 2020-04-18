import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const JustText = ({ children }) => (
  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
      <FontAwesomeIcon icon={faUserFriends} className="text-xl" />
    </div>
    {children}
  </div>
);

const CardSection = ({ children }) => (
  <section className="pb-20 bg-gray-300 -mt-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">{children}</div>
    </div>
  </section>
);

const Phone = ({ children }) => (
  <p className="mt-4">
    <a className="text-xl text-gray-300 " href={`tel:${children}`}>
      {children}
    </a>
  </p>
);

export { JustText, CardSection, Phone };
