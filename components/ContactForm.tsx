"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  sessionType: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  sessionType: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
        <div className="w-16 h-16 rounded-full border border-terracotta flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#B8704D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-playfair text-3xl text-espresso">Message received</h3>
        <p className="font-lato text-sm text-taupe leading-7 max-w-sm">
          Thank you, {form.name}. I&apos;ll be in touch within 48 hours.
          Looking forward to hearing your story.
        </p>
        <button
          onClick={() => { setForm(initialForm); setSubmitted(false); }}
          className="btn-secondary mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="section-label" htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border-b border-cream-border bg-transparent py-3 font-lato text-sm text-espresso placeholder:text-taupe/50 focus:outline-none focus:border-terracotta transition-colors duration-200"
          />
        </div>
        <div className="space-y-2">
          <label className="section-label" htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border-b border-cream-border bg-transparent py-3 font-lato text-sm text-espresso placeholder:text-taupe/50 focus:outline-none focus:border-terracotta transition-colors duration-200"
          />
        </div>
      </div>

      {/* Phone + Date */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="section-label" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (000) 000-0000"
            className="w-full border-b border-cream-border bg-transparent py-3 font-lato text-sm text-espresso placeholder:text-taupe/50 focus:outline-none focus:border-terracotta transition-colors duration-200"
          />
        </div>
        <div className="space-y-2">
          <label className="section-label" htmlFor="eventDate">Event / Session Date</label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            value={form.eventDate}
            onChange={handleChange}
            className="w-full border-b border-cream-border bg-transparent py-3 font-lato text-sm text-espresso placeholder:text-taupe/50 focus:outline-none focus:border-terracotta transition-colors duration-200"
          />
        </div>
      </div>

      {/* Session Type */}
      <div className="space-y-2">
        <label className="section-label" htmlFor="sessionType">Type of Session *</label>
        <select
          id="sessionType"
          name="sessionType"
          required
          value={form.sessionType}
          onChange={handleChange}
          className="w-full border-b border-cream-border bg-transparent py-3 font-lato text-sm text-espresso focus:outline-none focus:border-terracotta transition-colors duration-200 cursor-pointer"
        >
          <option value="" disabled>Select a session type</option>
          <option value="wedding">Wedding Photography</option>
          <option value="portrait">Portrait Session</option>
          <option value="engagement">Engagement Session</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="section-label" htmlFor="message">Tell me about your vision *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Share the story you want to tell — the venue, the vibe, what matters most to you..."
          className="w-full border-b border-cream-border bg-transparent py-3 font-lato text-sm text-espresso placeholder:text-taupe/50 focus:outline-none focus:border-terracotta transition-colors duration-200 resize-none"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="font-lato text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
