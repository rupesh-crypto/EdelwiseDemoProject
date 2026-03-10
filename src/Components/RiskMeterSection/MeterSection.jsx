import { useState } from "react";
import "./MeterSection.css";

export default function MeterSection() {

  const [active, setActive] = useState("scheme");

  return (
    <section className="risk-section">

      <div className="risk-container">

        <div className="risk-left">

          <h2 className="risk-title">
            This product is suitable for investors who are seeking:
          </h2>

          <div className="risk-underline"></div>

          <ul className="risk-list">
            <li>Long Term Capital Growth</li>
            <li>
              Investment in equity and equity-related securities of companies
              across various market capitalisations
            </li>
          </ul>

          <p className="risk-note">
            Investors should consult their financial advisors if in doubt
            about whether the product is suitable for them
          </p>

        </div>

        <div className="risk-right">

          <div className="risk-tabs">

            <button
              className={`risk-tab ${active === "scheme" ? "active" : ""}`}
              onClick={() => setActive("scheme")}
            >
              Scheme Risk-o-meter
            </button>

            <button
              className={`risk-tab ${active === "benchmark" ? "active" : ""}`}
              onClick={() => setActive("benchmark")}
            >
              Benchmark Riskometer
            </button>

          </div>

          <div className="risk-meter">

            <img
              src="/Images/meterimg.png"
              alt="risk meter"
              className="risk-image"
            />

            {active === "scheme" && (
              <p className="risk-desc">
                The risk of the scheme is Very High
              </p>
            )}

            {active === "benchmark" && (
              <>
                <p className="risk-desc">
                  NIFTY 500 TRI
                </p>

                <p className="risk-desc">
                  The risk of the benchmark is Very High
                </p>
              </>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}