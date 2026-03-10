import "./Footer.css";

export default function FooterSection() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-grid">

          <div className="footer-col">

            <h3>Edelweiss Cap Fund</h3>

            <p>
              Invest in growth across market capitalizations with
              professional fund management.
            </p>

          </div>


          <div className="footer-col">

            <h4>Quick Links</h4>

            <ul>
              <li>About us</li>
              <li>All Funds</li>
              <li>Download Forms</li>
              <li>FAQs</li>
            </ul>

          </div>


          <div className="footer-col">

            <h4>Resources</h4>

            <ul>
              <li>Investment Guide</li>
              <li>Tax Benefits</li>
              <li>Fund Performance</li>
              <li>Regulatory Disclosures</li>
            </ul>

          </div>


          <div className="footer-col">

            <h4>Contact Us</h4>

            <ul>
              <li>1800-123-4567</li>
              <li>info@edelweissmf.com</li>
              <li>
                Edelweiss House, Off CST Road,
                Kalina, Mumbai 400098
              </li>
            </ul>

          </div>

        </div>


        <div className="footer-divider"></div>


        <div className="footer-bottom">

          <p>
            © 2026 Edelweiss Mutual Fund. All rights reserved.
          </p>

          <p className="risk">
            Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns.
          </p>

        </div>

      </div>

    </footer>
  );
}