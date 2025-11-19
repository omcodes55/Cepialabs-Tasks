// src/components/Contact.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mldzjjle", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        alert("Thanks for your message! I will get back to you soon.");
        form.reset();
        navigate("/");
      } else {
        alert("⚠️ Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  }

  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <p className="section-intro">
        Have an opportunity, project idea, or just want to say hi?  
        Fill out the form or reach me directly.
      </p>

      <div className="contact-layout">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="hidden"
            name="_subject"
            value="New message from Portfolio Contact Form"
          />

          <div className="field">
            <label>
              Name
              <input name="name" required />
            </label>
          </div>

          <div className="field">
            <label>
              Email
              <input name="email" type="email" required />
            </label>
          </div>

          <div className="field">
            <label>
              Phone
              <input name="phone" type="tel"  />
            </label>
          </div>

          <div className="field">
            <label>
              Message
              <textarea name="message" rows={4} required />
            </label>
          </div>

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Reach me directly</h3>
          <p>
            📧 <strong>Email:</strong> <br />
            <a href="mailto:vadherom999@gmail.com">vadherom999@gmail.com</a>
          </p>
          <p>
            📱 <strong>Phone:</strong> <br />
            <a href="tel:+917486928889">+91 74869 28889</a>
          </p>
          <p className="contact-note">
            I usually reply within 1–2 days.  
            Thank You for reaching out.
          </p>
        </div>
      </div>
    </section>
  );
}
