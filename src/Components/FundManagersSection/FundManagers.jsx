import "./FundManagers.css";

export default function FundManagers() {
  const managers = [
    {
      name: "Trideep Bhattacharya",
      image: "/Images/manager1.png",
      aum: "32,537 Cr.",
      experience: "20 years",
      funds: "6"
    },
    {
      name: "Ashwani Kumar Agarwalla",
      image: "/Images/manager2.png",
      aum: "3,550 Cr.",
      experience: "20 years",
      funds: "6"
    },
    {
      name: "Raj Koradia",
      image: "/Images/manager3.png",
      aum: "32,056 Cr.",
      experience: "20 years",
      funds: "6"
    }
  ];

  return (
    <section className="fund-managers-section">

      <div className="container">

        <h2 className="section-title">
          Fund Managers
        </h2>

        <div className="manager-grid">

          {managers.map((manager, index) => (
            <div className="manager-card" key={index}>

              <img
                src={manager.image}
                alt={manager.name}
                className="manager-image"
              />

              <h3 className="manager-name">
                {manager.name}
              </h3>

              <p className="manager-aum-label">
                Total AUM managed across schemes
              </p>

              <p className="manager-aum">
                {manager.aum}
              </p>

              <div className="manager-stats">

                <div>
                  <p className="stat-label">Work Experience</p>
                  <p className="stat-value">{manager.experience}</p>
                </div>

                <div>
                  <p className="stat-label">Funds Managed</p>
                  <p className="stat-value">{manager.funds}</p>
                </div>

              </div>

              <button type="button" className="manager-link">
                View more details →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}