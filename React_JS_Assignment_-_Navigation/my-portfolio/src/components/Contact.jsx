import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks! for Response, I will get back to you soon.");
    navigate("/");
  }

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Name<br /><input name="name" required /></label></div>
        <div><label>Email<br /><input name="email" type="email" required /></label></div>
        <div><label>Message<br /><textarea name="message" rows={4} /></label></div>
        <button type="submit">Send</button>
      </form>
      <p>Or email: vadherom999@gmail.com</p>
    </section>
  );
}
