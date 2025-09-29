"use client"
import React, { useState } from "react";
import './ContactUs.css'

const ContactUs: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (
      !formData.get("first_name") ||
      !formData.get("last_name") ||
      !formData.get("phone") ||
      !formData.get("email") ||
      !formData.get("city")
    ) {
      setResult("Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը ❌");
      return;
    }

    setIsSubmitting(true);
    setResult("Ուղարկվում է...");

    formData.append("access_key", "6a2297d8-6067-4219-831b-c5dc59170201");
    formData.append("subject", "Նոր հաղորդագրություն կայքից");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

  }catch{

  }};

  return (
    <section className="contact-section" id="contact">
      <h2 className="sections-head red cntct-head">Կապ մեզ հետ</h2>

      <form onSubmit={onSubmit} noValidate className="form-contact">
        

        <label>
          Անուն
          <input
            type="text"
            name="first_name"
            placeholder="Անուն"
            required
            autoComplete="given-name"
          />
        </label>

        <label>
          Ազգանուն
          <input
            type="text"
            name="last_name"
            placeholder="Ազգանուն"
            required
            autoComplete="family-name"
          />
        </label>

        <label>
          Հեռախոսահամար
          <input
            type="tel"
            name="phone"
            placeholder="Համար"
            required
            autoComplete="tel"
            // Simple client-side pattern (optional)
            pattern="^[0-9+\-\s()]{6,}$"
            title="Մուտքագրեք վավեր հեռախոսահամար"
          />
        </label>

        <label>
          Էլ. փոստ
          <input
            type="email"
            name="email"
            placeholder="Մայլ"
            required
            autoComplete="email"
          />
        </label>

        <label>
          Քաղաք
          <select name="city" required defaultValue="">
            <option value="" disabled>Ընտրեք քաղաքը</option>
            <option value="Yerevan">Երևան</option>
            <option value="Vanadzor">Վանաձոր</option>
          </select>
        </label>

        <label>
          Նամակ (ըստ ցանկության)
          <textarea
            name="message"
            placeholder="Գրեք ձեր հարցը կամ մեկնաբանությունը"
            rows={4}
          />
        </label>

        <button type="submit" disabled={isSubmitting} className="cntct-btn">
          {isSubmitting ? 'Ուղարկվում է...' : 'Ուղարկել'}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
