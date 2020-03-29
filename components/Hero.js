export default () => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: "75vh"
    }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1527276826904-9c2275f441e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')"
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-75 bg-black"
      />
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="pr-12">
            <h1 className="text-white font-semibold text-5xl">
              Магазин дверей «Орион»
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Немного вдохновляющего текста, который бы объяснял, что даёт этот
              сайт посетителю. Каритинку на задник можно выбрать{" "}
              <a
                href="//unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                вот тут
              </a>
              . И сразу сюда дать контакты: телефон, вотсапп, телеграм, итд.
            </p>
          </div>
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
