import "./Portfolio.css";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement
);

export default function Portfolio() {

  const [returnType, setReturnType] = useState("years");
  const [period, setPeriod] = useState("1Y");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/portfolio.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load portfolio data");
        return res.json();
      })
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container">Loading…</div>;
  if (error) return <div className="container" style={{ color: "red" }}>Error: {error}</div>;

const current =
  apiData?.returns?.[period] ||
  apiData?.returns?.["1Y"] || {
    labels: [],
    fund: [],
    nifty: []
  };

  const lineData = {
    labels: current.labels,
    datasets: [
      {
        label: "Edelweiss Flexi Cap Fund",
        data: current.fund,
        borderColor: "#6CC24A",
        backgroundColor: "#6CC24A",
        tension: 0.4
      },
      {
        label: "NIFTY 500 TRI",
        data: current.nifty,
        borderColor: "#F26419",
        backgroundColor: "#F26419",
        tension: 0.4
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  };

  const doughnutData = {
    labels: apiData.marketCap?.labels || [],
    datasets: [
      {
        data: apiData.marketCap?.values || [],
        backgroundColor: [
          "#8E44AD",
          "#2BBBAD",
          "#7ED321"
        ]
      }
    ]
  };

  return (
    <section className="portfolio-section">

      <div className="container">

        <h2 className="section-title">
          Portfolio
        </h2>

        <div className="portfolio-header">

          <div className="return-tabs">

            <button
              className={returnType === "years" ? "active" : ""}
              onClick={() => setReturnType("years")}
            >
              Returns over the years
            </button>

            <button
              className={returnType === "rolling" ? "active" : ""}
              onClick={() => setReturnType("rolling")}
            >
              Rolling Returns
            </button>

          </div>

          <div className="period-tabs">

            {["1Y","2Y","3Y","5Y","7Y","10Y"].map((p)=>(
              <button
                key={p}
                className={period === p ? "active" : ""}
                onClick={() => setPeriod(p)}
              >
                {p}
              </button>
            ))}

          </div>

        </div>

        <div className="chart-card">

          <Line
            key={period}
            data={lineData}
            options={lineOptions}
          />

          <p className="chart-note">
            Performance as on 24 Feb 2026. Past performance may or may not be sustained in the future.
          </p>

        </div>

        <div className="allocation-grid">

          <div className="sector-card">

            <h3>Sector Allocations</h3>

            <div className="sector-row">
              <span>Financial Services</span>
              <span>36.12%</span>
            </div>

            <div className="sector-row">
              <span>Information Technology</span>
              <span>7.8%</span>
            </div>

            <div className="sector-row">
              <span>Automobile and Auto Components</span>
              <span>6.55%</span>
            </div>

            <div className="sector-row">
              <span>Healthcare</span>
              <span>6.11%</span>
            </div>

            <div className="sector-row">
              <span>Fast Moving Consumer Goods</span>
              <span>6.03%</span>
            </div>

            <button type="button" className="view-link">
              View all sectors →
            </button>

          </div>

          <div className="marketcap-card">

            <h3>Market Cap Allocations</h3>

            <div className="doughnut-wrapper">
              <div className="doughnut-container">
                <Doughnut
                  data={doughnutData}
                  options={{
                    cutout: "0%",
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: "right",
                        labels: {
                          boxWidth: 14,
                          padding: 16,
                          font: { size: 13 }
                        }
                      }
                    }
                  }}
                />
              </div>
              <p className="marketcap-label">Market Cap</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}