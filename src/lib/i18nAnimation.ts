export const i18nAnimation = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3, ease: "easeInOut" as const },
};

export const i18nViewportAnimation = {
  initial: i18nAnimation.initial,
  whileInView: i18nAnimation.animate,
  exit: i18nAnimation.exit,
  viewport: { once: false, amount: 0.3 },
  transition: i18nAnimation.transition,
};
