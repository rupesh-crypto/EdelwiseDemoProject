import './FundTabs.css';

export default function FundTabs({ scrollToSection,
  overviewRef,
  detailsRef,
  portfolioRef,
  faqsRef,
  downloadsRef }) {

  return (
    <div className="tabs-section">

      <div className="tabs">

        <button onClick={() => scrollToSection(overviewRef)} className="tab active">
          Overview
        </button>

        <button onClick={() => scrollToSection(detailsRef)} className="tab">
          Fund Details
        </button>

        <button onClick={() => scrollToSection(portfolioRef)} className="tab">
          Portfolio
        </button>

        <button onClick={() => scrollToSection(faqsRef)} className="tab">
          FAQs
        </button>

        <button onClick={() => scrollToSection(downloadsRef)} className="tab">
          Downloads
        </button>

      </div>

      <button className="sip-btn">
        Start a SIP
      </button>

    </div>
  );
}