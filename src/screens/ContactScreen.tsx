"use client";

import type { FormEvent } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

const contactEmail = "contact@horizon.com";

const contactInfo = [
  {
    label: "Email",
    value: contactEmail,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+82 2-1234-5678",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "123 Digital Ave, Seoul, South Korea",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactScreen() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim() || "Project Inquiry";
    const message = String(formData.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle
            label="Contact"
            title="Let's Start a Conversation"
            description="Have a project in mind? We would love to hear about it."
            center
          />
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="tablet:col-span-2 flex flex-col gap-8">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="p6 text-gray uppercase tracking-wider mb-1">{info.label}</p>
                  <p className="p4 text-deep-gray">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            className="tablet:col-span-3 bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="p4 text-deep-gray" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="border border-gray/20 rounded-lg px-4 py-3 p4 text-black placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="p4 text-deep-gray" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="border border-gray/20 rounded-lg px-4 py-3 p4 text-black placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="p4 text-deep-gray" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry"
                className="border border-gray/20 rounded-lg px-4 py-3 p4 text-black placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="p4 text-deep-gray" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
                className="border border-gray/20 rounded-lg px-4 py-3 p4 text-black placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
