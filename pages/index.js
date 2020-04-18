// import Navbar from "../components/Navbar.js";
// import Footer from "../components/Footer.js";
// import SomeForm from "../components/SomeForm.js";
// import BlockOfPoints from "../components/BlockOfPoints.js";
// import HereAreOurHeroes from "../components/HereAreOurHeroes.js"

import {
  faAward,
  faWallet,
  faAlignJustify
} from "@fortawesome/free-solid-svg-icons";
import Hero from "../components/Hero.js";
import Card from "../components/Card.js";
import BigCard from "../components/BigCard.js";
import FancyList from "../components/FancyList.js";
import PriceTable from "../components/PriceTable.js";
import InfoSection from "../components/InfoSection.js";
import { JustText, CardSection, Phone } from "../components/Util.js";

export default function Landing() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <Hero>
          <h1 className="text-white font-semibold leading-tight text-5xl ">
            Магазин межкомнатных дверей «Орион»
          </h1>
          <Phone>+7 (987) 239-06-42</Phone>
          <p className="text-lg text-gray-300">
            г. Набережные Челны, Московский проспект 161, Дом мебели
          </p>
        </Hero>

        <CardSection>
          <div className="flex flex-wrap">
            <Card
              icon={faAward}
              header="15 лет на рынке"
              className="lg:pt-12 pt-6"
            >
              Нам можно доверять!
            </Card>

            <Card icon={faWallet} header="Низкие цены" circleColor="blue">
              Мы продаём качественные межкомнатные двери дёшево!
            </Card>

            <Card
              icon={faAlignJustify}
              header="Широкий выбор в кратчайшие сроки"
              circleColor="green"
              className="pt-6"
            >
              Двери всех цветов и с различным покрытием: эмаль, шпон, ПВХ,
              экошпон, ламинат.
            </Card>
          </div>
          <div className="flex flex-wrap items-center">
            <JustText>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                В нашем магазине вы можете выбрать двери нескольких типов:
              </h3>
              <PriceTable headers={["Покрытие", "Цена за полотно"]}>
                {[
                  ["Ламинированные", "от 1500 руб."],
                  ["С покрытием экошпон", "от 2500 руб."],
                  ["С покрытием ПВХ", "от 3000 руб."],
                  ["Шпонированные", "от 5500 руб."],
                  ["С покрытием эмаль", "от 10000 руб."]
                ]}
              </PriceTable>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Помимо дверного полотна необходимо заказать коробку, наличники и
                фурнитуру. Если стены в квартире толще стандартных потребуются
                доборы.
              </p>
            </JustText>

            <BigCard>
              <h4 className="text-xl font-bold text-white">
                Разнообразные фабрики
              </h4>
              <p className="text-md font-light mt-2 text-white">
                В нашем магазине вы можете найти двери разных фабрик,
                расположенных в Ульяновске, Тольятти, Бугульме, Москве,
                Набережных Челнах.
              </p>
            </BigCard>
          </div>
        </CardSection>

        <InfoSection>
          <h3 className="text-3xl font-semibold">
            Для того, чтобы заказать двери необходимо:
          </h3>

          <FancyList>
            {[
              "Выбрать модель в магазине, заключить договор и внести предоплату в 30% ",
              "Наш сотрудник приедет и произведет замер. После замера подсчитывается точная сумма исходя из данных замера",
              "Срок изготовления дверей:",
              [
                "Двери, изготовленные под заказ: 30 рабочих дней",
                "Складская программа: в тот же день или по желанию заказчика"
              ],
              "Производится окончательная оплата",
              "Доставка",
              "Установка"
            ]}
          </FancyList>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Цена за установку начинается от 1200 рублей за дверь, в зависимости
            от состава работ.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Гарантия предоставляется в зависимости от завода производителя по
            ГОСТу.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Возможна рассрочка.
          </p>
        </InfoSection>
        {/* <HereAreOurHeroes /> */}

        {/* <BlockOfPoints /> */}

        {/* <SomeForm /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
