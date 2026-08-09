"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    arrivee: "",
    depart: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Demande de réservation - ${form.name}`;
    const bodyLines = [
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      form.arrivee ? `Arrivée souhaitée : ${form.arrivee}` : "",
      form.depart ? `Départ souhaité : ${form.depart}` : "",
      "",
      form.message,
    ].filter(Boolean);

    const mailto = `mailto:sukmabali-suite@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row-double">
        <div className="form-row">
          <label htmlFor="cf-name">Nom</label>
          <input type="text" id="cf-name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label htmlFor="cf-email">Email</label>
          <input type="email" id="cf-email" name="email" value={form.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row-double">
        <div className="form-row">
          <label htmlFor="cf-arrivee">Arrivée souhaitée</label>
          <input type="date" id="cf-arrivee" name="arrivee" value={form.arrivee} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="cf-depart">Départ souhaité</label>
          <input type="date" id="cf-depart" name="depart" value={form.depart} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Nombre de personnes, occasion particulière, questions..."
        />
      </div>
      <button type="submit" className="form-submit">Envoyer la demande</button>
      <p className="form-note">Votre message ouvrira votre application email habituelle, déjà pré-rempli.</p>
    </form>
  );
}
