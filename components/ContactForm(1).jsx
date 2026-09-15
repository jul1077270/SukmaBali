"use client";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";
export default function ContactForm() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name:"", email:"", arrivee:"", depart:"", message:"" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); const subject = `${t.form.subject} - ${form.name}`; const body = [`${t.form.name} : ${form.name}`,`${t.form.email} : ${form.email}`,form.arrivee ? `${t.form.arrival} : ${form.arrivee}` : "",form.depart ? `${t.form.departure} : ${form.depart}` : "","",form.message].filter(Boolean).join("\n"); window.location.href = `mailto:sukmabali-suite@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; };
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row-double"><div className="form-row"><label htmlFor="cf-name">{t.form.name}</label><input type="text" id="cf-name" name="name" value={form.name} onChange={handleChange} required /></div><div className="form-row"><label htmlFor="cf-email">{t.form.email}</label><input type="email" id="cf-email" name="email" value={form.email} onChange={handleChange} required /></div></div>
    <div className="form-row-double"><div className="form-row"><label htmlFor="cf-arrivee">{t.form.arrival}</label><input type="date" id="cf-arrivee" name="arrivee" value={form.arrivee} onChange={handleChange} /></div><div className="form-row"><label htmlFor="cf-depart">{t.form.departure}</label><input type="date" id="cf-depart" name="depart" value={form.depart} onChange={handleChange} /></div></div>
    <div className="form-row"><label htmlFor="cf-message">{t.form.message}</label><textarea id="cf-message" name="message" value={form.message} onChange={handleChange} placeholder={t.form.placeholder} /></div>
    <button type="submit" className="form-submit">{t.form.send}</button><p className="form-note">{t.form.note}</p>
  </form>;
}
