import Pic from "./Pic.js";
// import addTwSupport from "./rewind";

const Hero = ({ children }) => (
  <header
    pt-16
    className="relative pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: "75vh"
    }}
  >
    <Pic
      webp={require("../public/img/bg.jpg?webp")}
      jpeg={require("../public/img/bg.jpg")}
      className="w-full h-full object-cover object-center pointer-events-none absolute top-0"
      style={{ filter: "brightness(50%)" }}
    />
    <div className="container relative mx-auto items-center flex flex-wrap">
      <div className="mx-auto w-full lg:w-8/12 px-4 text-center">
        {children}
      </div>
    </div>
    <div
      className="absolute w-full left-0"
      style={{ bottom: "-1px", height: "75px" }}
    >
      <svg
        className="absolute w-full left-0 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100 0 97"
        />
      </svg>
    </div>
  </header>
);

export default Hero;
