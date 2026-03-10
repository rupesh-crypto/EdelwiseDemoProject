import { useState } from "react";
import "./InvestorAndFaq.css";

export default function InvestorAndFaq() {

  const testimonials = [
    {
      text: "I've been investing in this flexi cap fund for the past 3 years and the returns have been exceptional. The fund manager's ability to navigate market volatility is impressive.",
      img: "/Images/investor1.png",
      name: "Priya Sharma",
      detail: "Mumbai, Investor for 5+ years"
    },
    {
      text: "As a long-term investor, I appreciate the flexibility and diversification this fund offers. It's become a core holding in my portfolio.",
      img: "/Images/investor2.png",
      name: "Arun Verma",   
      detail: "Bangalore, Investor for 10+ years"
    },
    {
      text: "The consistent performance and transparent communication from the fund house give me confidence in my investment decisions.",
      img: "/Images/investor3.png",
      name: "Sneha Patel",
      detail: "Delhi, Investor for 2+ years"
    }
  ];

  const faqs = [
    {
      q: "What is a Flexi Cap Fund?",
      a: "Flexi cap funds invest across large, mid, and small cap companies."
    },
    {
      q: "Who should invest in Flexi Cap Funds?",
      a: "Investors seeking diversified equity exposure with long term horizon."
    },
    {
      q: "What is the minimum investment amount?",
      a: "Minimum SIP amount usually starts from ₹500."
    },
    {
      q: "What are the tax implications?",
      a: "Equity taxation rules apply. LTCG above ₹1 lakh taxed at 10%."
    },
    {
      q: "How is a Flexi Cap Fund different from a Multi Cap Fund?",
      a: "Flexi cap funds have no strict allocation rules across market caps."
    },
    {
      q: "What is the expense ratio and what does it include?",
      a: "Expense ratio covers fund management and operational costs."
    },
    {
      q: "Can I withdraw my investment anytime?",
      a: "Yes. Redemption is allowed subject to exit load if applicable."
    },
    {
      q: "What is SIP and how does it work?",
      a: "SIP allows periodic investment in mutual funds."
    },
    {
      q: "Is my investment safe?",
      a: "Mutual funds carry market risk but are regulated by SEBI."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  function toggleFAQ(index) {
    setOpenFAQ(openFAQ === index ? null : index);
  }

  return (
    <section className="investor-feedback">

      <div className="container">

        {/* Testimonials */}

        <div className="testimonial-header">

          <div>
            <h2>What Our Investors Say</h2>
            <p>Join thousands of satisfied investors who trust us with their wealth</p>
          </div>

          <button className="share-btn">
            Share your thoughts →
          </button>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, i) => (
            <div className="testimonial-card" key={i}>

              
              <img src={item.img} alt={item.name} />
              <div className="quote">“</div>
              <p className="testimonial-text">
                {item.text}
              </p>

              <div className="investor-info">

                <span className="investor-name">
                  {item.name}
                </span>

                <span className="investor-detail">
                  {item.detail}
                </span>

              </div>

            </div>
          ))}

        </div>

        {/* FAQ */}

        <div className="faq-section">

  <h2 className="faq-title">
    Frequently Asked Questions (FAQs)
  </h2>

  {faqs.map((item, i) => (

    <div className={`faq-item ${openFAQ === i ? "active" : ""}`} key={i}>

      <div
        className="faq-question"
        onClick={() => toggleFAQ(i)}
      >
        {item.q}

        <span className="faq-icon">
          {openFAQ === i ? "^" : "⌄"}
        </span>
      </div>

      <div className="faq-answer">
        {item.a}
       </div>

           </div>

               ))}

           </div> 

      </div>

    </section>
  );
}