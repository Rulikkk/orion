// import styles from "./Hero.module.css";

export default ({ children }) => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: "75vh"
    }}
  >
    <div
      className={`absolute overflow-hidden top-0 w-full h-full bg-center bg-cover`}
      // style={{ backgroundImage: `url(${require("../public/bg.jpg")})` }}
    >
      <picture>
        <source srcSet={require("../public/bg.jpg?webp")} type="image/webp" />
        <source srcSet={require("../public/bg.jpg")} type="image/jpeg" />
        <img
          className="w-full h-full object-cover object-center pointer-events-none absolute"
          src={require("../public/bg.jpg")}
          alt=""
        />
      </picture>
      <span className="w-full h-full absolute opacity-50 bg-black" />
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
          {children}
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: "70px", transform: "translateZ(0)" }}
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
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
  </div>
);
