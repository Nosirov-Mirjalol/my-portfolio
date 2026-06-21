import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"

import { useTranslation } from "react-i18next"
import { i18nViewportAnimation } from "../../lib/i18nAnimation"
import ContactCard from "../ui/ContactCard"

const Contact = () => {
  const { t, i18n } = useTranslation()

  return (
    <section
      id="contact"
      className="relative w-full min-h-[80vh] overflow-hidden bg-[#090611] flex flex-col justify-start items-start px-9 pb-20 md:px-20"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-9 right-9 top-8 h-px origin-left bg-linear-to-r from-transparent via-violet-500/40 to-transparent md:left-20 md:right-20"
      />

      <motion.div
        key={i18n.language + "contact-title"}
        {...i18nViewportAnimation}
        className="relative z-10 w-full lg:max-w-100"
      >
        <SectionTitle
          floor={4}
          title={t("contact.title")}
          description={t("contact.description")}
        />
      </motion.div>
      <ContactCard />
    </section>
  )
}

export default Contact
