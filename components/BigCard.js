import Pic from "./Pic.js";
import FabricImage from "../public/img/fab2.jpg?trace";
import FabricImageWebp from "../public/img/fab2.jpg?webp";

export default ({ children }) => (
  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
    <div
      className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
      style={{
        background:
          "linear-gradient(0deg, rgba(213,63,140,1) 80%, rgba(226,232,240,1) 80%)"
      }}
    >
      <Pic
        className="w-full align-middle relative"
        imgClassName="rounded-t-lg"
        loading="lazy"
        trace={FabricImage.trace}
        webp={FabricImageWebp}
        jpeg={FabricImage.src}
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
        {children}
      </blockquote>
    </div>
  </div>
);
