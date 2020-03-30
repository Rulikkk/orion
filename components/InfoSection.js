import DoorIcon from "./DoorIcon.js";

export default () => (
  <section className="relative py-20">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: "80px", transform: "translateZ(0)" }}
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
            <h3 className="text-3xl font-semibold">
              И тут ещё какая-то пепега!
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Кстати, иконка двери должна открываться, если по ней ткнуть или
              провести мышкой.
            </p>
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fas fa-fingerprint" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Можно даже сделать</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="fab fa-html5" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Красивый такой список</h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="far fa-paper-plane" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-gray-600">Всякой полезной шняги</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt="..."
            className="max-w-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
      </div>
    </div>
  </section>
);
