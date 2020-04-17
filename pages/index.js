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
            Магазин межкомнатных дверей «Орион»
          </h1>
          <p className="mt-4 text-lg text-gray-300">
              г. Набережные Челны
              Московский проспект 161, Дом мебели
             +7 (987) 239-06-42
          </p>
        </Hero>

        <CardsSection>
          <div className="flex flex-wrap">
            <Card
              icon={faAward}
              header="15 лет на рынке"
              className="lg:pt-12 pt-6"
            >
              Нам можно доверять!
            </Card>

            <Card icon={faRetweet} header="Низкие Цены" circleColor="blue">
             Мы продаём качественные межкомнатные двери дёшево!
            </Card>

            <Card
              icon={faFingerprint}
              header="Широкий выбор"
              circleColor="green"
              className="pt-6"
            >
              У нас вы найдете двери с различным покрытием: эмаль, шпон, ПВХ, экошпон, ламинат.
            </Card>
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <JustText>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                В Нашем магазине вы можете выбрать двери нескольких типов:
              </h3>
          <FancyList>
            {[
              "Ламинированные, цена за полотно от 1500",
              "С покрытием экошпон, цена за полотно от 2500",
              "С покрытием ПВХ, цена за полотно от 3000",
              "Шпонированные, цена за полотно от 5500 рублей",
              "Шпонированные, цена за полотно от 5500 рублей"
            ]}
          </FancyList>
               <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
               Помимо дверного полотна необходимо заказать коробку, наличники и фурнитуру. 
               Если стены в квартире толще стандартных потребуются доборы.
             </p>
            </JustText>
  
            <BigCard>
              <h4 className="text-xl font-bold text-white">
                Разнообразные фабрики
              </h4>
              <p className="text-md font-light mt-2 text-white">
              В нашем магазине вы можете найти двери разных фабрик, расположенных в Ульяновске, 
                Тольятти, Бугульме, Москве, Набережных Челнах.
              </p>
            </BigCard>
          </div>
        </CardsSection>

        <InfoSection>
          <h3 className="text-3xl font-semibold">Для того, чтобы заказать двери необходимо:</h3>
        
          <FancyList>
            {[
              "Выбрать модель в магазине, заключить договор и внести предоплату в 30% ",
              "Наш сотрудник приедет и произведет замер. После замера подсчитывается точная сумма исходя из данных замера",
              "Срок изготовления дверей: -Двери, изготовленные под заказ - 30 рабочих дней -Складская программа - В тот же день или по желанию заказчика",
             "Производится окончательная оплата",
             "Доставка",
             "Установка"
             
            ]}
          </FancyList>
  
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
           Цена за установку начинается от 1200 рублей за дверь, в зависимости от состава работ.
          </p>
  
           <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Гарантия предоставляется в зависимости от завода производителя по ГОСТу. 
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
