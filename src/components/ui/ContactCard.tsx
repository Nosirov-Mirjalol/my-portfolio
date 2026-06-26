import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Send, CodeXml, MapPin, ExternalLink, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { i18nViewportAnimation } from "../../lib/i18nAnimation";
import Button from "./Button";

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

export default function ContactCard() {
  const { t, i18n } = useTranslation();

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
      // Kalitlar to'g'ridan-to'g'ri funksiya ichida xatolarsiz yuboriladi
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error details:", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      <motion.div
        key={i18n.language + "contact-info"}
        {...i18nViewportAnimation}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-3">
          {contactLinks.map(({ icon: Icon, labelKey, value, href }, index) => (
            <motion.div
              key={i18n.language + labelKey}
              {...i18nViewportAnimation}
              transition={{
                ...i18nViewportAnimation.transition,
                delay: index * 0.06,
              }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-violet-500/40 hover:bg-white/10 transition-colors duration-300"
            >
              <span className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-violet-400/0 via-violet-400/60 to-violet-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
            </motion.div>
          ))}
        </div>

        <motion.div
          key={i18n.language + "contact-actions"}
          {...i18nViewportAnimation}
          transition={{ ...i18nViewportAnimation.transition, delay: 0.18 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Button
            href="mailto:nosirovmirjalol869@gmail.com"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors no-underline"
          >
            <Mail size={16} />
            {t("contact.sendEmail")}
          </Button>
          <Button
            href="https://t.me/aelrow"
            variant="dark"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-white/15 hover:border-violet-500/50 hover:bg-white/5 text-white text-sm font-medium transition-all no-underline"
          >
            <Send size={16} />
            Telegram
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        key={i18n.language + "contact-form"}
        {...i18nViewportAnimation}
        transition={{ ...i18nViewportAnimation.transition, delay: 0.12 }}
        className="relative overflow-hidden flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <motion.div
          aria-hidden="true"
          className="absolute -top-px left-6 right-6 h-px bg-linear-to-r from-transparent via-violet-400/60 to-transparent opacity-70"
          initial={{ x: "-30%", opacity: 0 }}
          whileInView={{ x: "30%", opacity: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <AnimatePresence mode="wait">
          <motion.h3
            key={i18n.language + "contact-form-title"}
            {...i18nViewportAnimation}
            className="text-white text-base font-semibold m-0"
          >
            {t("contact.formTitle")}
          </motion.h3>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key={i18n.language + "contact-success"}
              {...i18nViewportAnimation}
              className="flex flex-col items-center justify-center gap-3 py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center"
              >
                <Mail size={22} className="text-green-400" />
              </motion.div>
              <p className="text-white/80 text-sm">{t("contact.successMessage")}</p>
            </motion.div>
          ) : (
            <motion.div
              key={i18n.language + "contact-fields"}
              {...i18nViewportAnimation}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  key={i18n.language + "name"}
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.namePlaceholder")}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
                />
                <input
                  key={i18n.language + "email"}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
                />
              </div>

              <input
                key={i18n.language + "subject"}
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder={t("contact.subjectPlaceholder")}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
              />

              <textarea
                key={i18n.language + "message"}
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.messagePlaceholder")}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all resize-none"
              />

              <AnimatePresence mode="wait">
                {status === "error" && (
                  <motion.p
                    key={i18n.language + "contact-error"}
                    {...i18nViewportAnimation}
                    className="text-red-400 text-xs"
                  >
                    {t("contact.errorMessage")}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                whileHover={status === "loading" ? undefined : { y: -2 }}
                whileTap={status === "loading" ? undefined : { scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "loading" ? (
                    <motion.span
                      key={i18n.language + "sending"}
                      {...i18nViewportAnimation}
                      className="flex items-center justify-center gap-2"
                    >
                      <Loader2 size={16} className="animate-spin" />
                      {t("contact.sending")}
                    </motion.span>
                  ) : (
                    <motion.span key={i18n.language + "send"} {...i18nViewportAnimation}>
                      {t("contact.send")}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}