import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <div className="flex flex-wrap items-center mt-32">
    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
        <FontAwesomeIcon icon={faUserFriends} className="text-xl" />
      </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Working with us is a pleasure
      </h3>
      <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
        Don't let your uses guess by attaching tooltips and popoves to any
        element. Just make sure you enable them first via JavaScript.
      </p>
      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
        The kit comes with three pre-built pages to help you get started faster.
        You can change the text and images and you're good to go. Just make sure
        you enable them first via JavaScript.
      </p>
      <a
        href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
        className="font-bold text-gray-800 mt-8"
      >
        Check Tailwind Starter Kit!
      </a>
    </div>

    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
        <img
          alt="..."
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          className="w-full align-middle rounded-t-lg"
        />
        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block"
            style={{
              height: "95px",
              top: "-94px"
            }}
          >
            <polygon
              points="-30,95 583,95 583,65"
              className="text-pink-600 fill-current"
            />
          </svg>
          <h4 className="text-xl font-bold text-white">Top Notch Services</h4>
          <p className="text-md font-light mt-2 text-white">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens.
          </p>
        </blockquote>
      </div>
    </div>
  </div>
);
