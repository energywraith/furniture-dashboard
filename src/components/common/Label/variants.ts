const variants = {
  neutral: {
    box: "bg-neutral-300 text-gray-700",
    circle: "bg-gray-700",
  },
  "neutral-light": {
    box: "bg-neutral-700 text-base-white",
    circle: "bg-base-white",
  },
  "info-light": {
    box: "bg-info-25 text-info-600",
    circle: "bg-info-600",
  },
  "info-dark": {
    box: "bg-info-500 text-base-white",
    circle: "bg-base-white",
  },
  success: {
    box: "bg-success-50 text-success-700",
    circle: "bg-success-700",
  },
  warning: {
    box: "bg-warning-50 text-warning-700",
    circle: "bg-warning-700",
  },
  error: {
    box: "bg-error-100 text-error-600",
    circle: "bg-error-600",
  },
  purple: {
    box: "bg-purple-50 text-purple-600",
    circle: "bg-purple-600",
  },
};

const getRandomLabelVariant = () => {
  const keys = Object.keys(variants);
  const randomKey = keys[(keys.length * Math.random()) << 0];
  return randomKey as keyof typeof variants;
};

export { variants, getRandomLabelVariant };
