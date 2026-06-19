// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "uz",
  fallbackLng: "uz",
  resources: {
    uz: {
      translation: {
        nav: {
          home: "Bosh sahifa",
          about: "Men Haqimda",
          projects: "Loyihalar",
          skills: "Ko'nikmalar",
          contact: "Bog'lanish",
        },
        hero: {
          badge: "Ishga tayyor",
          title: "Junior Frontend Developer",
          desc: "Zamonaviy admin panel va Landing pagelar yarataman. Uzbekistan Qarshi",
          cta1: "Loyihalar",
          cta2: "CV yuklash",
        },
      },
    },
    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About",
          projects: "Projects",
          skills: "Skills",
          contact: "Contact",
        },
        hero: {
          badge: "Available for hire",
          title: "Junior Frontend Developer",
          desc: "I build modern admin panels and high-converting landing pages. Based in Karshi, Uzbekistan.",
          cta1: "View Projects",
          cta2: "CV Download",
        },
      },
    },
  },
});

export default i18n;
