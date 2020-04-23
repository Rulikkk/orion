import { Phone } from "./Util.js";

export default () => (
  <footer className="relative bg-gray-300 pt-8 pb-6">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: "80px", marginTop: "-79px", transform: "translateZ(0)" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 110"
        x="0"
        y="0"
      >
        <polygon
          className="text-gray-300 fill-current"
          points="2560 0 2560 110 0 110 0 100"
        />
      </svg>
    </div>
    <div className="container mx-auto px-4">
      <div className="px-4 text-center">
        <h4 className="text-3xl font-semibold">
          Ма&shy;га&shy;зин меж&shy;ком&shy;нат&shy;ных две&shy;рей «Орион»
        </h4>
        <h5 className="text-lg mt-1 text-gray-700">
          <Phone>+7 (987) 239-06-42</Phone>
        </h5>
        <h5 className="text-lg text-gray-700">
          г. Набережные Челны, Московский проспект 161, Дом мебели
        </h5>
        {/* <div className="mt-6">
            <button
              className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-twitter" />
            </button>
            <button
              className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-facebook-square" />
            </button>
            <button
              className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-dribbble" />
            </button>
            <button
              className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-github" />
            </button>
          </div> */}
        {/* <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                Useful Links
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free"
                  >
                    Free Products
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                Other Resources
              </span>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                  >
                    MIT License
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>*/}
      </div>
      <hr className="my-6 border-gray-400" />
      <div className="w-full px-4 mx-auto text-center text-sm text-gray-600 font-semibold py-1">
        © «Орион» {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);
