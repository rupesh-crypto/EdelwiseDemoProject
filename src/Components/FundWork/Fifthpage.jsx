import "./Fifthpage.css";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Research & Analysis",
    desc: [
      "Our fund managers analyze thousands of companies across all market caps to identify the best opportunities.",
      "Deep fundamental research combined with quantitative analysis to find high-quality businesses with sustainable competitive advantages."
    ]
  },
  {
    id: 2,
    title: "Portfolio Construction",
    desc: [
      "Build a diversified portfolio across sectors and market caps.",
      "Strategic allocation across large cap, mid cap and small cap companies."
    ]
  },
  {
    id: 3,
    title: "Active Management",
    desc: [
      "Continuous monitoring of market conditions and company performance.",
      "Portfolio adjustments based on changing market opportunities."
    ]
  },
  {
    id: 4,
    title: "Deliver Returns",
    desc: [
      "Focus on long term wealth creation.",
      "Consistent investment discipline to generate sustainable returns."
    ]
  }
];

export default function Fifthpage() {

  const [active, setActive] = useState(1);

  return (
    <section className="work">
      <div className="work-wrap">

        <h2 className="work-title">How does this fund work?</h2>
        <div className="work-underline"></div>

        <div
          className={`work-grid active-${active}`}
          onMouseLeave={() => setActive(1)}
        >
          {cards.map((card) => {

            const isActive = active === card.id;

            return (
              <article
                key={card.id}
                className={`card ${isActive ? "card-big" : "card-small"}`}
                onMouseEnter={() => setActive(card.id)}
              >

                <div className="small-top">

                  <div className={`badge ${isActive ? "badge-big" : ""}`}>
                    {String(card.id).padStart(2, "0")}
                  </div>

                  {!isActive && <span className="open">↗</span>}

                </div>

                <div className="small-bottom">

                  <h4 className="small-title">
                    {card.title}
                  </h4>

                  {isActive && (
                    <div className="big-content">
                      {card.desc.map((p, i) => (
                        <p key={i} className="big-p">{p}</p>
                      ))}
                    </div>
                  )}

                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
