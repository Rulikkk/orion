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
import TextAfterCards from "../components/TextAfterCards.js";
import InfoSection from "../components/InfoSection.js";

export default function Landing() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <Hero />

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

          <TextAfterCards />
        </CardsSection>

        <InfoSection />
        {/* <HereAreOurHeroes /> */}

        {/* <BlockOfPoints /> */}

        {/* <SomeForm /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
