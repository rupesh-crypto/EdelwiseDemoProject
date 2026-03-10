import "./TopHoldingslist.css";

export default function TopHoldingslist() {

  const holdings = [
    {
      name: "HDFC BANK LTD",
      sector: "Financial Services",
      value: 6.51,
      color: "#f36f21"
    },
    {
      name: "ICICI BANK LTD",
      sector: "Financial Services",
      value: 4.87,
      color: "#f36f21"
    },
    {
      name: "RELIANCE INDUSTRIES LTD",
      sector: "Oil, Gas & Consumable Fuels",
      value: 3.55,
      color: "#9b59b6"
    },
    {
      name: "STATE BANK OF INDIA",
      sector: "Financial Services",
      value: 3.19,
      color: "#f36f21"
    },
    {
      name: "LARSEN & TOUBRO LTD",
      sector: "Construction",
      value: 3.04,
      color: "#1abc9c"
    },
    {
      name: "INFOSYS LTD",
      sector: "Information Technology",
      value: 2.8,
      color: "#7ed321"
    }
  ];

  return (
    <section className="holdings-section">

      <div className="container">

        <h2 className="section-title">
          Top Holdings
        </h2>

        <div className="holdings-card">

          <div className="table-header">
            <span>Name</span>
            <span>Sector</span>
            <span>Assets</span>
          </div>

          {holdings.map((item, index) => (
            <div className="table-row" key={index}>

              <span className="holding-name">
                {item.name}
              </span>

              <span className="holding-sector">
                {item.sector}
              </span>

              <div className="holding-assets">

                <span className="asset-value">
                  {item.value}%
                </span>

                <div className="asset-bar">
                  <div
                    className="asset-fill"
                    style={{
                      width: `${item.value * 10}%`,
                      background: item.color
                    }}
                  ></div>
                </div>

              </div>

            </div>
          ))}

          <div className="view-link">
            View all holdings →
          </div>

        </div>

      </div>

    </section>
  );
}