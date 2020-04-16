// import Navbar from "../components/Navbar.js";
// import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";
import Card from "../components/Card.js";
import CardsSection from "../components/CardsSection.js";
// import BlockOfPoints from "../components/BlockOfPoints.js";
// import SomeForm from "../components/SomeForm.js";
// import HereAreOurHeroes from "../components/HereAreOurHeroes.js"

import {
  faAward,
  faRetweet,
  faFingerprint
} from "@fortawesome/free-solid-svg-icons";
import JustText from "../components/JustText.js";
import InfoSection from "../components/InfoSection.js";
import BigCard from "../components/BigCard.js";
import FancyList from "../components/FancyList.js";

export default function Landing() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <Hero>
          <h1 className="text-white font-semibold leading-tight text-5xl ">
            Магазин дверей «Орион»
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Немного вдохновляющего текста, который бы объяснял, что даёт этот
            сайт посетителю. Каритинку на задник можно выбрать{" "}
            <a href="//unsplash.com" target="_blank" rel="noopener noreferrer">
              вот тут
            </a>
            . И сразу сюда дать контакты: телефон, вотсапп, телеграм, итд.
          </p>
        </Hero>

        <CardsSection>
          <div className="flex flex-wrap">
            <Card
              icon={faAward}
              header="Сказать что мы 20 лет на рынке"
              className="lg:pt-12 pt-6"
            >
              У нас самые тёплые отношения со всем поставщиками и т.д.
            </Card>

            <Card icon={faRetweet} header="Доставка" circleColor="blue">
              Коротко объяснить как и почём происходит доставка. Иконки в
              кружочки можно выбирать{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//fontawesome.com/icons?d=gallery&m=free"
              >
                вот тут
              </a>
              .
            </Card>

            <Card
              icon={faFingerprint}
              header="Может быть, что-то про широкий выбор"
              circleColor="green"
              className="pt-6"
            >
              Какие вообще есть двери, какие лучше выбирать и как мы в этом
              помогаем.
            </Card>
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <JustText>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Описать алгоритм покупки?
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Сначала мы присылаем волшебных единорогов, которые не входя в
                квартиру делают нужные замеры и всё такое. На это как правило
                уходит 10-15 минут.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                Затем вы прислыаете нам деньги (сбер/альфа/тинька) и мы
                присылаем двери, вместе с человеком, который эти двери
                установит.
              </p>
            </JustText>
            <BigCard>
              <h4 className="text-xl font-bold text-white">
                Какая-то ещё полезная инфа
              </h4>
              <p className="text-md font-light mt-2 text-white">
                Может быть про то, как мы принимаем деньги, или что за двери,
                хз, тут надо думать.
              </p>
            </BigCard>
          </div>
        </CardsSection>

        <InfoSection>
          <h3 className="text-3xl font-semibold">И тут ещё какая-то пепега!</h3>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Кстати, иконка двери должна открываться, если по ней ткнуть или
            провести мышкой.
          </p>
          <FancyList>
            {[
              "Можно даже сделать",
              "Красивый такой список",
              "Всякой полезной шняги"
            ]}
          </FancyList>
        </InfoSection>
        {/* <HereAreOurHeroes /> */}

        {/* <BlockOfPoints /> */}

        {/* <SomeForm /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
