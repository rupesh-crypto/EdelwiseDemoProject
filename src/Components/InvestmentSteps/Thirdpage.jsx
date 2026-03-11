import "./Thirdpage.css";

export default function Thirdpage() {
  return (
    <section className="inv">
      <div className="inv-wrap">
        <div className="inv-card">
          <h3 className="inv-title">How to invest in Edelweiss Flexi Cap Fund?</h3>
          <div className="inv-underline"></div>

          <div className="inv-track">
            <svg className="inv-line" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M110 95 L350 150 L610 90 L890 150"
                fill="none"
                stroke="#0f56a6"
                strokeWidth="3"
                strokeDasharray="8 10"
                strokeLinecap="round"
              />
            </svg>

            <Node
              n="01"
              className="n1"
              text="Register and create a folio by completing KYC verification and bank account authentication"
            />

            <Node
              n="02"
              className="n2"
              flip
              text="Select the mutual fund you wish to invest in, enter the amount you want to invest"
            />

            <Node n="03" className="n3" text="Make the payment" />
            <Node
              n="04"
              className="n4"
              flip
              text="Receive a confirmation of your investment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Node({ n, text, className, flip }) {
  return (
    <div className={`inv-node ${className}${flip ? " flip" : ""}`}>
      {flip && <div className="inv-text inv-text-above">{text}</div>}
      <div className="inv-dot">
        <span className="inv-num">{n}</span>
      </div>
      {!flip && <div className="inv-text">{text}</div>}
    </div>
  );
}