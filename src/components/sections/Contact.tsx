import { motion } from "framer-motion"
import SectionTitle from "../SectionTitle"

import i18n from "../../i18n"
import { useTranslation } from "react-i18next"
import { i18nViewportAnimation } from "../../lib/i18nAnimation"

const Contact = () => {
  const {t}=useTranslation()
  return (
      <section
      id="contact"
      className="w-full min-h-[80vh] bg-[#090611] flex flex-col justify-start items-start px-9 md:px-20"
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
      </section>
  )
}

export default Contact
