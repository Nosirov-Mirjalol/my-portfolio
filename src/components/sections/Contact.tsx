import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"

import i18n from "../../i18n"
import { useTranslation } from "react-i18next"
import { i18nViewportAnimation } from "../../lib/i18nAnimation"
import ContactCard from "../ui/ContactCard"

const Contact = () => {
  const {t}=useTranslation()
  return (
      <section
      id="contact"
      className="w-full min-h-[80vh] bg-[#090611] flex flex-col justify-start items-start px-9 pb-20 md:px-20"
    >
      <motion.div
        key={i18n.language + "contact-title"}
        {...i18nViewportAnimation}
        className="w-full lg:max-w-100"
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
