import "./Fourthpage.css";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Fourthpage() {

  const [type, setType] = useState("NAV");
  const [range, setRange] = useState("1Y");
  const [mode, setMode] = useState("SIP");
  const [apiData, setApiData] = useState(null);

  const labelsMap = {
    "1Y": ["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb"],
    "2Y": ["2024","2025"],
    "3Y": ["2023","2024","2025"],
    "5Y": ["2021","2022","2023","2024","2025"],
    "7Y": ["2019","2020","2021","2022","2023","2024","2025"],
    "10Y": ["2016","2017","2018","2019","2020","2021","2022","2023","2024","2025"],
    "SI": ["2010","2012","2014","2016","2018","2020","2022","2024"]
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/performance.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to load performance data");
        return res.json();
      })
      .then(data => {
        setApiData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const labels = labelsMap[range === "Since" ? "SI" : range];
const key = range === "Since" ? "SI" : range;

const values =
  apiData && apiData[type] && apiData[type][key]
    ? apiData[type][key]
    : [];

  const chartData = {
    labels,
    datasets: [
      {
        label: type,
        data: values,
        borderColor: "#8E44AD",
        backgroundColor: "#8E44AD",
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        grid: { color: "#eee" }
      },
      x: {
        grid: { display: false }
      }
    }
  };

  const ranges = ["1Y","2Y","3Y","5Y","7Y","10Y","Since"];

  if (loading) return <div className="perf-status">Loading performance data…</div>;
  if (error) return <div className="perf-status perf-error">Error: {error}</div>;

  return (
    <section className="perf">
      <div className="perf-wrap">

        <div className="perf-head">
          <h2 className="perf-title">Performance</h2>
          <div className="perf-underline"></div>
        </div>

        <div className="perf-topbar">

          <div className="perf-switch">
            <button
              className={`perf-pill ${type==="NAV"?"active":""}`}
              onClick={()=>setType("NAV")}
            >
              NAV
            </button>

            <button
              className={`perf-pill ${type==="Cumulative"?"active":""}`}
              onClick={()=>setType("Cumulative")}
            >
              Cumulative
            </button>
          </div>

          <div className="perf-range">
            {ranges.map(r=>(
              <button
                key={r}
                className={`perf-chip ${range===r?"active":""}`}
                onClick={()=>setRange(r)}
              >
                {r==="Since"?"Since Inception":r}
              </button>
            ))}
          </div>

        </div>

        <div className="perf-card">

          <div className="perf-left">

            <div className="perf-metric">
              <div className="perf-value">₹34.36</div>
              <div className="perf-asof">as on 24 Feb 2026</div>
            </div>

            <div className="perf-chart">
              <Line data={chartData} options={options}/>
              <div className="perf-footnote">
                *NAV data shown from 27 Feb 2025 till 24 Feb 2026
              </div>
            </div>

          </div>

          <div className="perf-right">

            <div className="perf-mode">
              <button
                className={`perf-modeBtn ${mode==="SIP"?"active":""}`}
                onClick={()=>setMode("SIP")}
              >
                SIP
              </button>

              <button
                className={`perf-modeBtn ${mode==="Lumpsum"?"active":""}`}
                onClick={()=>setMode("Lumpsum")}
              >
                Lumpsum
              </button>
            </div>

            <div className="perf-form">

              <div className="perf-row">
                <label className="perf-label">
                  {mode==="SIP" ? "SIP Amount" : "Investment Amount"}
                </label>

                <div className="perf-inputWrap">
                  <input className="perf-input" defaultValue="5000"/>
                  <span className="perf-currency">₹</span>
                </div>
              </div>

              {mode==="SIP" && (
                <div className="perf-row">
                  <label className="perf-label">Monthly SIP Date</label>
                  <div className="perf-inputWrap">
                    <input className="perf-input" defaultValue="07/03/2026" />
                    <span className="perf-cal">📅</span>
                  </div>
                </div>
              )}

            </div>

            <button className="perf-cta">
              {mode==="SIP" ? "Start a SIP" : "Invest Now"}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}