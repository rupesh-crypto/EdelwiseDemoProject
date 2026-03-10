import './Entry.css';


export default function Entry() {


  return (
    <section className="hero">
      <div className="hero-top">
        <div className="logo">
          <img src="/Images/edelweiss-logo.png" alt="Edelweiss Logo" />

        </div>
      </div>

      <div className="hero-content">
        <div className="tag-row">
          <span className="tag tag-light">Equity</span>  
        </div>
        <div className="title-second">
        <span className="hero-title">Edelweiss Flexi Cap Fund</span>
        <span className="tag tag-green">Direct</span>
        </div>
        <div>
        <button className="invest-btn">Invest Now</button>
        </div>
      </div>

      <div className="fund-card">
        <div className="fund-item">
          <div>
          <img src="/Images/Frame 1.png" alt="" />
          </div>
          <div>
          <p className="fund-label">Fund Size (AUM)</p>
          <p className="fund-value">₹995.91 Cr</p>
          <p className="fund-date">as on 08 Feb 2026</p>
          </div>
        </div>

        <div className="fund-item">
          <div>
           <img src="/Images/Frame 2.png" alt="" />
           </div>
           <div>
          <p className="fund-label">CAGR 1 Year</p>
          <p className="fund-value">222.87%</p>
          <p className="fund-date">as on 31 Jan 2026</p>
          </div>
        </div>

        <div className="fund-item">
          <div>
           <img src="/Images/Frame 3.png" alt="" />
           </div>
           <div>
          <p className="fund-label">Benchmark</p>
          <p className="fund-value">NIFTY 500 TRI</p>
          </div>
        </div>

        <div className="fund-item">
          <div>
           <img src="/Images/Frame 4.png" alt="" />
           </div>
           <div>
          <p className="fund-label">Expense Ratio</p>
          <p className="fund-value">0.85%</p>
          </div>  
        </div>

        <div className="fund-item">
          <div>
           <img src="/Images/Frame 5.png" alt="" />
           </div>
           <div>
          <p className="fund-label">NAV</p>
          <p className="fund-value">$24.8</p>
          <p className="fund-date">as on 24 Feb 2026</p>
          </div>
        </div>

        <div className="fund-item">
          <div>
           <img src="/Images/Frame 6.png" alt="" />
          </div>
          <div>
          <p className="fund-label">Risk Level</p>
          <p className="fund-value">Moderately High</p>
          </div>
        </div>
      </div>

    </section>
  );
}