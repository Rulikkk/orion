import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ icon, header, className, circleColor = "red", children }) => (
  <div className={className + " lg:pt-12 w-full md:w-4/12 px-4 text-center"}>
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
      <div className="px-4 py-5 flex-auto">
        <div
          className={`bg-${circleColor}-400 text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full`}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <h6 className="text-xl font-semibold">{header}</h6>
        <p className="mt-2 mb-4 text-gray-600">{children}</p>
      </div>
    </div>
  </div>
);
