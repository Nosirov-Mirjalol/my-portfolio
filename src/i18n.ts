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
        about: {
          title: "Men Haqimda",
          intro: "15 yoshli Frontend Dasturchi",
          desc: "2 yillik tajribam davomida tez ishlaydigan, pikselgacha aniq veb-interfeyslar va React-asosidagi dashboardlar yaratib kelaman. React-dan tashqari, yozilgan kod sifati, samarali holat boshqaruvi va AI vositalarini ish jarayoniga tatbiq etishga alohida e'tibor qarataman.",
          typedCode: "yozilgan kod sifati",
          aiTools: "AI vositalari",
          workflow: "ish jarayonini takomillashtirish",
          highlights: "ASOSIY YUTUQLAR",
          highlight1: "Haqiqiy API bilan ishlaydigan production dashboard",
          highlight2: "Mustahkam TypeScript va React arxitekturasi",
          highlight3: "Ko'p rollik autentifikatsiya va RBAC tizimi",
          highlight4: "Toza, qayta ishlatiladigan dizayn tizimlar",
        },
        projects: {
          title: "Loyihalar",
          description: "Biror Project serverda ishlamayotgan bo'lishi mumkin",
        },
        skills: {
          title: "Ko'nikmalar",
          description: "Har bir loyihada ishlatadigan texnologiyalarim",
          core: "Asosiy",
          styling: "dizayn",
          state: "Ma'lumot boshqaruvi",
          tools: "Dasturlar",
        },
        contact: {
          title: "Bog'lanish",
          description:
            "Hamkorlik yoki salomlashish uchun bemalol murojaat qiling!",
          email: "Elektron pochta",
          telegram: "Telegram",
          github: "GitHub",
          location: "Joylashuv",
          sendEmail: "Email yuborish",
          formTitle: "Xabar qoldiring",
          namePlaceholder: "Ismingiz",
          emailPlaceholder: "Email manzilingiz",
          subjectPlaceholder: "Mavzu",
          messagePlaceholder: "Xabaringizni yozing...",
          send: "Yuborish",
          successMessage: "Xabaringiz yuborildi! Tez orada javob beraman.",
          errorMessage: "Xatolik yuz berdi. Qayta urinib ko'ring.",
          sending: "Yuborilmoqda...",
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
        about: {
          title: "About me",
          intro: "15 year old Frontend Developer",
          desc: "with 2 years of experience. I build fast, pixel-honest web interfaces and React-based dashboards. Moving beyond basic React, I focus on typed code, smart state management, and leveraging AI tools to optimize my development workflow.",
          typedCode: "typed code",
          aiTools: "AI tools",
          workflow: "optimize my development workflow",
          highlights: "HIGHLIGHTS",
          highlight1: "Production dashboards with real APIs",
          highlight2: "Strong TypeScript & React patterns",
          highlight3: "Multi-role auth and RBAC flows",
          highlight4: "Clean, reusable design systems",
        },
        projects: {
          title: "Projects",
          description: "Some projects may not be working on the server",
        },
        skills: {
          title: "Skills",
          description: "The stack I can (will) use every Project",
          core: "Core",
          styling: "Styling",
          state: "State Management",
          tools: "Tools",
        },
        contact: {
          title: "Contact",
          description:
            "Feel free to reach out for collaborations or just a friendly hello!",
          email: "Email",
          telegram: "Telegram",
          github: "GitHub",
          location: "Location",
          sendEmail: "Send Email",
          formTitle: "Send a message",
          namePlaceholder: "Your name",
          emailPlaceholder: "Your email",
          subjectPlaceholder: "Subject",
          messagePlaceholder: "Write your message...",
          send: "Send",
          successMessage: "Message sent! I'll get back to you soon.",
          errorMessage: "Something went wrong. Please try again.",
          sending: "Sending...",
        },
      },
    },
  },
});

export default i18n;
