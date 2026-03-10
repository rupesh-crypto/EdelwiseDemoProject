import "./Calculator.css";
import { useState, useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AMOUNT_MIN = 500;
const AMOUNT_MAX = 100000;
const YEARS_MIN = 1;
const YEARS_MAX = 20;
const RATE = 12;

function calculateSIP(p, r, y) {
  const i = r / 100 / 12;
  const months = y * 12;
  return p * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
}

function calculateLumpsum(p, r, y) {
  return p * Math.pow(1 + r / 100, y);
}

function sliderStyle(value, min, max) {
  const fill = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, #0f56a6 0%, #0f56a6 ${fill}%, #e2e8f0 ${fill}%, #e2e8f0 100%)`
  };
}

const TABS = [
  { id: "sip",      label: "SIP",       amountLabel: "Monthly Investment Amount" },
  { id: "lumpsum",  label: "Lumpsum",   amountLabel: "Investment Amount"         },
  { id: "goal",     label: "Goal SIP",  amountLabel: "Monthly SIP Amount"        },
];

export default function CalculatorPage() {

  const [tab, setTab] = useState("sip");
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(10);

  const currentTab = TABS.find(t => t.id === tab);

  function handleAmountChange(val) {
    const clamped = Math.min(AMOUNT_MAX, Math.max(AMOUNT_MIN, Number(val) || AMOUNT_MIN));
    setAmount(clamped);
  }

  function handleYearsChange(val) {
    const clamped = Math.min(YEARS_MAX, Math.max(YEARS_MIN, Number(val) || YEARS_MIN));
    setYears(clamped);
  }

  const result = useMemo(() => {
    let invested = 0;
    let total = 0;

    if (tab === "sip") {
      invested = amount * 12 * years;
      total = calculateSIP(amount, RATE, years);
    } else if (tab === "lumpsum") {
      invested = amount;
      total = calculateLumpsum(amount, RATE, years);
    } else if (tab === "goal") {
      invested = amount * 12 * years;
      total = calculateSIP(amount, RATE, years);
    }

    return {
      invested,
      returns: Math.max(0, total - invested),
      total: Math.max(invested, total)
    };
  }, [tab, amount, years]);

  const chartData = useMemo(() => ({
    labels: ["Invested", "Returns"],
    datasets: [
      {
        data: [result.invested, result.returns],
        backgroundColor: ["#A154A1", "#32BCAD"],
        borderWidth: 0
      }
    ]
  }), [result.invested, result.returns]);

  return (
    <section className="rc">
      <div className="rc-wrap">

        <h2 className="rc-title">Returns Calculator</h2>
        <div className="rc-underline"></div>

        <div className="rc-card">

          <div className="rc-tabs">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`rc-tab ${tab === t.id ? "active" : ""}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="rc-grid">

            <div className="rc-left">

              <div className="rc-row">
                <div className="rc-label">{currentTab.amountLabel}</div>
                <div className="rc-inputWrap">
                  <input
                    className="rc-input"
                    type="number"
                    min={AMOUNT_MIN}
                    max={AMOUNT_MAX}
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    onBlur={(e) => handleAmountChange(e.target.value)}
                  />
                  <span className="rc-suffix">₹</span>
                </div>
              </div>

              <div className="rc-sliderRow">
                <input
                  type="range"
                  min={AMOUNT_MIN}
                  max={AMOUNT_MAX}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="rc-slider"
                  style={sliderStyle(amount, AMOUNT_MIN, AMOUNT_MAX)}
                />
                <div className="rc-minmax">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              <div className="rc-row rc-row-3">
                <div className="rc-label">Investment Period (Years)</div>
                <div className="rc-midInput">
                  <input
                    className="rc-input small"
                    type="number"
                    min={YEARS_MIN}
                    max={YEARS_MAX}
                    value={years}
                    onChange={(e) => handleYearsChange(e.target.value)}
                    onBlur={(e) => handleYearsChange(e.target.value)}
                  />
                </div>
                <div className="rc-unit">Years</div>
              </div>

              <div className="rc-sliderRow">
                <input
                  type="range"
                  min={YEARS_MIN}
                  max={YEARS_MAX}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="rc-slider"
                  style={sliderStyle(years, YEARS_MIN, YEARS_MAX)}
                />
                <div className="rc-minmax">
                  <span>1 year</span>
                  <span>20 years</span>
                </div>
              </div>

              <div className="rc-bottom">
                <div className="rc-rate">
                  <div className="rc-rateLabel">Expected Return Rate</div>
                  <div className="rc-rateValue">{RATE}% p.a.</div>
                </div>
                <button className="rc-cta">Start a SIP</button>
              </div>

            </div>

            <div className="rc-right">

              <div className="rc-summary">

                <div className="rc-sTitle">Investment Summary</div>

                <div className="rc-sRow">
                  <div className="rc-sLabel">Total Value</div>
                  <div className="rc-sValue">
                    ₹{Math.round(result.total).toLocaleString()}
                  </div>
                </div>

                <div className="rc-visual">
                  <Doughnut
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      cutout: "0%",
                      rotation: -90,
                      plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                      }
                    }}
                  />
                </div>

                <div className="rc-legend">
                  <div className="rc-legItem">
                    <span className="rc-dot purple"></span>
                    <span>Invested</span>
                  </div>
                  <div className="rc-legItem">
                    <span className="rc-dot teal"></span>
                    <span>Returns</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
