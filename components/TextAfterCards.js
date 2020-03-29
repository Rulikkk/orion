import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <div className="flex flex-wrap items-center mt-32">
    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
        <FontAwesomeIcon icon={faUserFriends} className="text-xl" />
      </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Описать алгоритм покупки?
      </h3>
      <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
        Сначала мы присылаем волшебных единорогов, которые не входя в квартиру
        делают нужные замеры и всё такое. На это как правило уходит 10-15 минут.
      </p>
      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
        Затем вы прислыаете нам деньги (сбер/альфа/тинька) и мы присылаем двери,
        вместе с человеком, который эти двери установит.
      </p>
    </div>

    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
        <img
          alt="..."
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
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
          <h4 className="text-xl font-bold text-white">
            Какая-то ещё полезная инфа
          </h4>
          <p className="text-md font-light mt-2 text-white">
            Может быть про то, как мы принимаем деньги, или что за двери, хз,
            тут надо думать.
          </p>
        </blockquote>
      </div>
    </div>
  </div>
);
