"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactInfo } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof ContactForm, string>>;

const initialForm: ContactForm = { name: "", email: "", subject: "", message: "" };
const inputClass = "w-full rounded-[var(--radius-lg)] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle outline-none transition-colors focus:border-primary";

function SocialIcon({ type }: { type: string }) {
  if (type === "linkedin") {
    return <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" /></svg>;
  }
  if (type === "twitter") {
    return <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>;
}

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name as keyof ContactForm];
      return next;
    });
    setStatusMessage("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FieldErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = "Nama minimal 2 karakter.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Masukkan alamat email yang valid.";
    if (form.subject.trim().length < 3) nextErrors.subject = "Subjek minimal 3 karakter.";
    if (form.message.trim().length < 10) nextErrors.message = "Pesan minimal 10 karakter.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatusMessage("Periksa kembali isian formulir.");
      return;
    }

    const href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(`Nama: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`)}`;
    window.location.href = href;
    setStatusMessage("Aplikasi email terbuka dengan pesan siap dikirim. Kirim pesan dari aplikasi email Anda.");
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-[var(--container-max)]">
        <SectionHeading title={contactInfo.title} subtitle={contactInfo.subtitle} />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="flex flex-col gap-4">
            <a href={`mailto:${contactInfo.email}`} className="block rounded-[var(--radius-xl)] border border-border bg-surface p-5 transition-colors hover:border-border-hover">
              <span className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Email</span>
              <span className="mt-2 block break-all text-sm font-medium text-primary">{contactInfo.email}</span>
            </a>
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-5">
              <span className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Lokasi</span>
              <span className="mt-2 block text-sm font-medium text-foreground">{contactInfo.location}</span>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-5">
              <span className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Waktu respons</span>
              <span className="mt-2 block text-sm font-medium text-foreground">{contactInfo.responseTime}</span>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-foreground-subtle">Temukan saya</p>
              <div className="mt-3 flex gap-2">
                {contactInfo.socials.map(({ label, href, type }) =>
                  href ? (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border text-foreground-muted transition-colors hover:bg-surface-hover hover:text-foreground">
                      <SocialIcon type={type} />
                    </a>
                  ) : (
                    <span key={label} aria-disabled="true" title="Segera hadir" className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-border text-foreground-subtle cursor-not-allowed opacity-50">
                      <SocialIcon type={type} />
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-[var(--radius-2xl)] border border-border bg-surface p-6 md:p-8">
            {(["name", "email", "subject"] as const).map((field) => {
              const labels = { name: "Nama", email: "Email", subject: "Subjek" };
              const placeholders = { name: "Nama lengkap Anda", email: "nama@email.com", subject: "Topik yang ingin dibahas" };
              return (
                <div key={field}>
                  <label htmlFor={`contact-${field}`} className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground-subtle">{labels[field]}</label>
                  <input id={`contact-${field}`} name={field} type={field === "email" ? "email" : "text"} value={form[field]} onChange={handleChange} autoComplete={field === "name" ? "name" : field === "email" ? "email" : "off"} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `contact-${field}-error` : undefined} className={cn(inputClass, errors[field] && "border-error")} placeholder={placeholders[field]} />
                  {errors[field] && <p id={`contact-${field}-error`} className="mt-1.5 text-xs text-error">{errors[field]}</p>}
                </div>
              );
            })}
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-foreground-subtle">Pesan</label>
              <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} className={cn(inputClass, "resize-y", errors.message && "border-error")} placeholder="Ceritakan proyek atau ide Anda..." />
              {errors.message && <p id="contact-message-error" className="mt-1.5 text-xs text-error">{errors.message}</p>}
            </div>
            <button type="submit" className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-lg)] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              Kirim Pesan
            </button>
            <p role="status" aria-live="polite" className={cn("min-h-5 text-sm", Object.keys(errors).length ? "text-error" : "text-foreground-muted")}>{statusMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
