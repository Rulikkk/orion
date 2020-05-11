import Pic from "./Pic.js";
import DoorIcon from "./DoorIcon.js";
import MoreDoorsJpg from "../public/img/d4.jpg";
import MoreDoorsWebp from "../public/img/d4.jpg?webp";
import MoreDoorsLqip from "../public/img/d4.jpg?lqip";

export default ({ children }) => (
  <section className="relative py-20">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: "81px", transform: "translateZ(0)" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-white fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>

    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap flex-row-reverse">
        <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <DoorIcon />
            {children}
          </div>
        </div>
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <Pic
            className="max-w-full relative"
            imgClassName="rounded-lg shadow-lg"
            loading="lazy"
            placeholder={MoreDoorsLqip}
            jpeg={MoreDoorsJpg}
            webp={MoreDoorsWebp}
          />
        </div>
      </div>
    </div>
  </section>
);
