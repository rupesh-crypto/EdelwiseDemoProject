import "./Details.css";

export default function FundDetails() {
  return (
    <section className="fund-details-section">

      <div className="fund-details-container">

        <h2 className="section-title">Fund Details</h2>
        <p className="section-subtitle">
          Everything you need to know about the fund
        </p>

        <div className="fund-details-card">

          <div className="fund-info">

            <h3>Fund Information</h3>

            <div className="info-row">
              <span>Fund Type</span>
              <span>Open-ended</span>
            </div>

            <div className="info-row">
              <span>Category</span>
              <span>Flexi Cap Fund</span>
            </div>

            <div className="info-row">
              <span>Benchmark</span>
              <span>NIFTY 500 TRI</span>
            </div>

            <div className="info-row">
              <span>Launch Date</span>
              <span>15-Jan-2018</span>
            </div>

            <div className="info-row">
              <span>NAV (as of Feb 24, 2026)</span>
              <span>₹24.8</span>
            </div>

            <div className="info-row">
              <span>AUM</span>
              <span>₹15,234 Cr</span>
            </div>

          </div>


          <div className="investment-info">

            <h3>Investment Details</h3>
         

            <div className="info-row">
              <span>Min Investment (SIP)</span>
              <span>₹500</span>
            </div>

            <div className="info-row">
              <span>Min Investment (Lumpsum)</span>
              <span>₹5000</span>
            </div>

            <div className="info-row">
              <span>Expense Ratio</span>
              <span>0.85%</span>
            </div>

            <div className="info-row">
              <span>Exit Load</span>
              <span>1% (if redeemed within 1 year)</span>
            </div>

            <div className="info-row">
              <span>Risk Level</span>
              <span>Moderately High</span>
            </div>

            <div className="info-row">
              <span>Lock-in Period</span>
              <span>Nil</span>
            </div>

          </div>

        </div>


        <div className="investment-objective">

          <div className="objective-left">

            <h3>Investment Objective</h3>
            <div className="objective-line"></div>
            <p>
              The primary investment objective of the scheme is to generate
              long term capital appreciation by investing in an actively
              managed portfolio predominantly consisting of Equity &
              equity related securities diversified over various sectors.
            </p>

          </div>

          <div className="objective-right">
            <img
              src="/Images/funddetails.png"
              alt="investment"
            />
          </div>

        </div>

      </div>

    </section>
  );
}