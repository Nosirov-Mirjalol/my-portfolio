import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Send, CodeXml, MapPin, ExternalLink, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    icon: Mail,
    labelKey: "contact.email",
    value: "nosirovmirjalol869@gmail.com",
    href: "mailto:nosirovmirjalol869@gmail.com",
  },
  {
    icon: Send,
    labelKey: "contact.telegram",
    value: "@aelrow",
    href: "https://t.me/aelrow",
  },
  {
    icon: CodeXml,
    labelKey: "contact.github",
    value: "Nosirov-Mirjalol",
    href: "https://github.com/Nosirov-Mirjalol",
  },
  {
    icon: MapPin,
    labelKey: "contact.location",
    value: "Karshi, O'zbekiston",
    href: null,
  },
];

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactCard() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      {/* Left — info */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          {contactLinks.map(({ icon: Icon, labelKey, value, href }) => (
            <div
              key={labelKey}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-violet-500/40 hover:bg-white/10 transition-all duration-300"
            >
              <span className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/30 transition-colors">
                <Icon size={18} className="text-violet-400" />
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  {t(labelKey)}
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-sm text-white/80 hover:text-violet-400 transition-colors truncate no-underline"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-white/80">{value}</span>
                )}
              </div>
              {href && (
                <ExternalLink
                  size={14}
                  className="text-white/20 group-hover:text-violet-400 transition-colors ml-auto shrink-0"
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:nosirovmirjalol869@gmail.com"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors no-underline"
          >
            <Mail size={16} />
            {t("contact.sendEmail")}
          </a>
          <a
            href="https://t.me/aelrow"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-white/15 hover:border-violet-500/50 hover:bg-white/5 text-white text-sm font-medium transition-all no-underline"
          >
            <Send size={16} />
            Telegram
          </a>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <h3 className="text-white text-base font-semibold m-0">
          {t("contact.formTitle")}
        </h3>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Mail size={22} className="text-green-400" />
            </div>
            <p className="text-white/80 text-sm">{t("contact.successMessage")}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.emailPlaceholder")}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
              />
            </div>

            <input
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder={t("contact.subjectPlaceholder")}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
            />

            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder")}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all resize-none"
            />

            {status === "error" && (
              <p className="text-red-400 text-xs">{t("contact.errorMessage")}</p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-all flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {t("contact.sending")}
                </>
              ) : (
                t("contact.send")
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}