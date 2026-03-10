import './Middlepage.css';

export default function Middlepage() {
  return (
    <section className="flexi">
      <div className="flexi-wrap">
        <div className="flexi-top">
          <div className="flexi-left">
            <h2 className="flexi-title">What is a Flexi Cap Fund?</h2>
            <div className="flexi-underline"></div>
            <p className="flexi-desc">
              A Flexi Cap Fund is an open-ended dynamic equity scheme that invests across large,
              mid, and small cap stocks with the flexibility to adjust allocations based on market
              opportunities.
            </p>
          </div>
        </div>

        <div className="flexi-grid">
          <div className="flexi-cards">
            <InfoCard title="Steady returns" description="Experience consistent growth with our Flexi Cap Fund." />
            <InfoCard title="Optimal Gains" description="Maximize your returns with strategic investments." />
            <InfoCard title="Fund Performance" description="Track the performance of our Flexi Cap Fund over time." />
          </div>

          <aside className="flexi-side">
            <h3 className="side-title">
              Why invest in
              <br />
              Edelweiss Flexi Cap
              <br />
              Fund?
            </h3>

            <button className="side-btn" type="button">
              <span>Start your investment journey</span>
              <span className="side-arrow">›</span>
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, description }) {
  return (
    <div className="info-card">
      <h4 className="info-title">{title}</h4>
      <p className="info-desc">
          {description}
        </p>

      <div className="info-footer">
        <button className="info-link" type="button">
          Read More
        </button>

        <button className="info-iconBtn" type="button" aria-label="Open">
          <span className="info-icon">↗</span>
        </button>
      </div>
    </div>
  );
}