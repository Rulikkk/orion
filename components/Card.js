import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const bg = {
  red: "bg-red-400",
  green: "bg-green-400",
  blue: "bg-blue-400"
};

const t = x => (x ? x + " " : "");

export default ({ icon, header, className, circleColor = "red", children }) => (
  <div className={`${t(className)}w-full md:w-4/12 px-4 text-center`}>
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
      <div className="px-4 py-5 flex-auto">
        <div
          className={`${
            bg[circleColor]
          } text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full`}
        >
          <FontAwesomeIcon icon={icon} />
        </div>
        <h6 className="text-xl font-semibold">{header}</h6>
        <p className="mt-2 mb-4 text-gray-600">{children}</p>
      </div>
    </div>
  </div>
);
