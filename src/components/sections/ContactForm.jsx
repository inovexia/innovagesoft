"use client";

import { useState } from "react";
import { submitEnquiry } from "@/lib/contact";
import { budgets, projectTypes } from "@/lib/site";

const fieldClass =
  "w-full rounded-xl border border-hairline bg-bg px-4 py-3 text-[0.97rem] text-text transition-colors duration-200 placeholder:text-muted hover:border-[color-mix(in_srgb,var(--text)_22%,transparent)] focus:border-accent";

const labelClass = "block text-[0.85rem] font-bold text-text";

export function ContactForm() {
  const [status, setStatus] = useState("idle");

  const onSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = submitEnquiry(data);
    setStatus(result.ok ? "sent" : "error");
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Name" name="name" required autoComplete="name" />
      <Field label="Company" name="company" autoComplete="organization" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" />

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="projectType">
          What are you looking to build?
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          className={`${fieldClass} select-field mt-2`}
        >
          <option value="" disabled>
            Select one
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Tell us a bit about it
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} mt-2 resize-y`}
          placeholder="What's the problem you're trying to solve?"
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="budget">
          Rough budget
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className={`${fieldClass} select-field mt-2`}
        >
          <option value="" disabled>
            Select one
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-accent px-7 py-4 font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px sm:w-auto"
        >
          Send message
        </button>

        <p
          role="status"
          aria-live="polite"
          className="mt-4 text-[0.9rem] text-muted empty:mt-0"
        >
          {status === "sent"
            ? "Opening your email app with the message ready to send."
            : ""}
        </p>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, autoComplete }) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
        {required ? null : (
          <span className="ml-1.5 font-medium text-muted">(optional)</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`${fieldClass} mt-2`}
      />
    </div>
  );
}
