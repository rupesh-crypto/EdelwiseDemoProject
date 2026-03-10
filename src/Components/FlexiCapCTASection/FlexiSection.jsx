import { useState } from "react";
import "./FlexiSection.css";

export default function FlexiSection() {

  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    return e;
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  }

  const downloads = [
    "Fund Factsheet February 2026",
    "SIP",
    "Product Note January 2026",
    "Fund Presentation 2025",
    "Scheme Summary",
    "Application Form"
  ];

  return (
    <section className="flexicap-section">

      <div className="container">

        <div className="cta-box">

          <div className="cta-left">

            <h2>
              Want to learn more about Flexi Cap Funds?
            </h2>

            <p>
              Our investment advisors are here to help you make informed decisions
            </p>

            {submitted ? (
              <p className="form-success">Thank you! We'll be in touch soon.</p>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate>

                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={e => handleChange("name", e.target.value)}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}

                <div className="row">

                  <div>
                    <input
                      type="text"
                      placeholder="Mobile number"
                      value={form.mobile}
                      onChange={e => handleChange("mobile", e.target.value)}
                    />
                    {errors.mobile && <span className="form-error">{errors.mobile}</span>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Id"
                      value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>

                </div>

                <div className="cta-buttons">

                  <button type="submit" className="primary">
                    Start a SIP
                  </button>

                  <button type="submit" className="secondary">
                    Invest Now
                  </button>

                </div>

              </form>
            )}

          </div>

          <div className="cta-right">

            <img
              src="/Images/image 114.png"
              alt="investment illustration"
            />

          </div>

        </div>


        <div className="downloads">

          <h2 className="downloads-title">
            Downloads
          </h2>

          <div className="downloads-grid">

            {downloads.map((item, index) => (
              <div className="download-card" key={index}>

                <div className="icon">
                <img src="/Images/doc.png" alt="Doc" />
                </div>
                
                <span>
                  {item}
                </span>

              <div className="corner-download">
               <img src="/Images/download.png" alt="Download" />
               
              </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}