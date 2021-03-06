// import Navbar from "../components/Navbar.js";
// import SomeForm from "../components/SomeForm.js";
// import BlockOfPoints from "../components/BlockOfPoints.js";
// import HereAreOurHeroes from "../components/HereAreOurHeroes.js"

import {
  faAward,
  faWallet,
  faAlignJustify
} from "@fortawesome/free-solid-svg-icons";

import Head from "next/head";
import Hero from "../components/Hero.js";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";
import BigCard from "../components/BigCard.js";
import Favicon from "../components/Favicon.js";
import FancyList from "../components/FancyList.js";
import PriceTable from "../components/PriceTable.js";
import InfoSection from "../components/InfoSection.js";
import { JustText, CardSection, Phone } from "../components/Util.js";

const title = "Межкомнатные двери «Орион» г. Наб. Челны. Узнать цены и купить.",
  description =
    "В нашем магазине вы можете выбрать и заказать качественные межкомнатные двери недорого. Купить двери из экошпона, ПВХ, шпона. Стеклянные, ламинированные, раздвижные, распашные двери в наличии и под заказ.",
  og_meta = {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    latitude: "55.744382",
    longtitude: "52.431249",
    email: "kamiltuykin@mail.ru",
    url: "https://dveri-orion.ru",
    locality: "г. Набережные Челны",
    phone_number: "+7 (987) 239-06-42",
    country_name: "Российская Федерация",
    site_name: "Магазин межкомнатных дверей «Орион»",
    street_address: "Московский проспект 161, Дом мебели",
    image: "https://dveri-orion.ru" + require("../public/img/og.jpg")
  };

export default function Landing() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {Object.entries(og_meta).map(([og, val]) => (
          <meta name={"og:" + og} key={og} content={val} />
        ))}
        <Favicon />
      </Head>
      {/* <Navbar transparent /> */}

      <Hero>
        <h1 className="text-white text-shadow font-semibold leading-tight text-5xl">
          Ма&shy;га&shy;зин меж&shy;ком&shy;нат&shy;ных две&shy;рей «Орион»
        </h1>
        <p className="mt-4">
          <Phone className="text-xl text-white text-shadow">
            +7 (987) 239-06-42
          </Phone>
        </p>
        <p className="text-lg text-gray-300 text-shadow">
          г. Набережные Челны, Московский проспект 161, Дом мебели
        </p>
      </Hero>
      <main role="main">
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
              header="Широкий выбор и быстрая доставка"
              circleColor="green"
              className="md:pt-6"
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
                  ["С покрытием «экошпон»", "от 2500 руб."],
                  ["С покрытием ПВХ", "от 3000 руб."],
                  ["Шпонированные", "от 5500 руб."],
                  ["С покрытием «эмаль»", "от 10000 руб."]
                ]}
              </PriceTable>
              <p className="text-lg font-light leading-relaxed mt-6 text-gray-700">
                Для разных комнат вы можете заказать разные двери:
              </p>
              <FancyList>
                {[
                  "По наличию стекла: глухие или остеклённые",
                  [
                    "Двери со стеклянными вставками смотрятся красивее в комнатах общего пользования: зал, кухня."
                  ],
                  "По способу крепления:",
                  [
                    "Раздвижные — купе для экономии пространства или для красоты",
                    "Распашные — две створки дверей для широкого проёма",
                    "Обычные — одна открывающаяся створка"
                  ]
                ]}
              </FancyList>
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
          <h3 className="text-3xl font-semibold">Как заказать двери?</h3>

          <FancyList className="mt-6">
            {[
              "Выбрать модель в магазине, заключить договор и внести предоплату в 30%",
              "Наш сотрудник приедет и произведёт замер. После подсчитывается точная сумма, которая вносится в договор",
              "После получения данных замера, идет изготовление дверей",
              [
                "Двери под заказ изготавливаются 30 рабочих дней",
                "Двери со склада могут быть доставлены в тот же день или по желанию заказчика"
              ],
              "При доставке дверей производится окончательная оплата",
              "Наш мастер устанавливает двери"
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
      <Footer />
    </>
  );
}
