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
            <Card icon={faAward} header="Awarded Agency" className="pt-6">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </Card>

            <Card icon={faRetweet} header="Free Revisions" circleColor="blue">
              Keep you user engaged by providing meaningful information.
              Remember that by this time, the user is curious.
            </Card>

            <Card
              icon={faFingerprint}
              header="Verified Company"
              circleColor="green"
              className="pt-6"
            >
              Write a few lines about each one. A paragraph describing a feature
              will be enough. Keep you user engaged!
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
