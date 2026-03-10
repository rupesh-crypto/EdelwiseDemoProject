import { useRef, useEffect } from "react";
import Middlepage from './Components/FlexiInfoSection/Middlepage';
import Fifthpage from './Components/FundWork/Fifthpage';
import Entry from './Components/Hero/Entry';
import Thirdpage from './Components/InvestmentSteps/Thirdpage';
import Fourthpage from './Components/PerformanceSection/Fourthpage';
import CalculatorPage from './Components/ReturnsCalculator/Calculator';
import FundTabs from './Components/Tabs/FundTabs';
import MeterSection from "./Components/RiskMeterSection/MeterSection";
import FundDetails from "./Components/FundDetailsSection/Details";
import FundManagers from "./Components/FundManagersSection/FundManagers";
import Portfolio from "./Components/PortfolioSection/Portfolio";
import TopHoldingslist from "./Components/TopHoldingsSection/TopHoldingslist";

import InvestorAndFaq from "./Components/InvestorTestimonials/InvestorAndFaq";
import FlexiSection from "./Components/FlexiCapCTASection/FlexiSection";
import FooterSection from "./Components/FooterSection/Footer";
import Lenis from "@studio-freight/lenis";

function App() {
const overviewRef = useRef(null);
const detailsRef = useRef(null);
const portfolioRef = useRef(null);
const faqsRef = useRef(null);
const downloadsRef = useRef(null);

useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

const scrollToSection = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

  return (
    <>
      <div ref={overviewRef}>
      <Entry />
      </div>
      <FundTabs
      scrollToSection={scrollToSection}
      overviewRef={overviewRef}
      detailsRef={detailsRef}
      portfolioRef={portfolioRef}
      faqsRef={faqsRef}
      downloadsRef={downloadsRef}
      />
      <Middlepage />
      
      
      <Thirdpage />
      <Fourthpage />
      <Fifthpage />
      <CalculatorPage />
      <MeterSection />
      <div ref={detailsRef}>
      <FundDetails />
      </div>
      <FundManagers />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <TopHoldingslist />
      <div ref={faqsRef}>
       <InvestorAndFaq />
      </div>
      <div ref={downloadsRef}>
        <FlexiSection />
      </div>  
      <FooterSection />
    </>
  );
}

export default App;
