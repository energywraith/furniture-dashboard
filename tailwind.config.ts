import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    screens: {
      md: "1024px",
      xl: "1601px",
    },
    fontSize: {
      "display-l": ["4rem", { lineHeight: "4.25rem" }],
      "display-m": ["3.25rem", { lineHeight: "4rem" }],
      "headline-xl": ["2.5rem", { lineHeight: "3rem" }],
      "headline-l": ["2.25rem", { lineHeight: "2.75rem" }],
      "headline-m": ["2rem", { lineHeight: "2.5rem" }],
      "headline-s": ["1.75rem", { lineHeight: "2.375rem" }],
      "headline-xs": ["1.375rem", { lineHeight: "1.875rem" }],
      "headline-xxs": ["1.25rem", { lineHeight: "1.75rem" }],
      "body-xl": ["1.125rem", { lineHeight: "1.75rem" }],
      "body-l": ["1rem", { lineHeight: "1.5rem" }],
      "body-m": ["0.9375rem", { lineHeight: "1.375rem" }],
      "body-s": ["0.875rem", { lineHeight: "1.25rem" }],
      "body-xs": ["0.8125rem", { lineHeight: "1.125rem" }],
      "paragraph-1": ["1rem", { lineHeight: "1.5rem" }],
      "paragraph-2": ["0.875rem", { lineHeight: "1.5rem" }],
    },
    extend: {
      colors: {
        // light mode
        transparent: "transparent",
        base: {
          white: "#FFFFFF",
          black: "#000000",
        },
        blue: {
          500: "#3694EB",
        },
        primary: {
          300: "#386876",
          400: "#1F5565",
          500: "#064254",
          600: "#053543",
        },
        secondary: {
          200: "#ECF1F8",
        },
        neutral: {
          25: "#FCFCFD",
          50: "#FAFBFC",
          100: "#F8F9FB",
          200: "#F9F9F9",
          300: "#F7F7F8",
          400: "#F5F5F5",
          500: "#EFEFF1",
          600: "#EAECF0",
          700: "#DDDFE4",
          800: "#A5ACBA",
          900: "#878D97",
          950: "#6B7B8F",
        },
        gray: {
          25: "#919BA7",
          50: "#5F6D7E",
          100: "#49556D",
          200: "#384255",
          300: "#2E3545",
          400: "#333B48",
          500: "#2E3646",
          600: "#2C3444",
          700: "#272D37",
          800: "#252D3C",
          900: "#1C2534",
          950: "#151B28",
        },
        info: {
          25: "#F5FAFF",
          50: "#F5F8FE",
          100: "#E8EFFD",
          200: "#B1CCFB",
          300: "#AEC9FE",
          400: "#648EF7",
          500: "#5390F8",
          600: "#437EF7",
          700: "#3971E7",
          800: "#3E67E3",
          900: "#2B63D9",
          950: "#1B4397",
        },
        error: {
          25: "#FEF6F6",
          50: "#FEF6F6",
          100: "#FFF2F0",
          200: "#FFDBD7",
          300: "#FEB8AE",
          400: "#FD5E49",
          450: "#F15146",
          500: "#F04438",
          600: "#E2341D",
          700: "#B02817",
          900: "#3E2026",
          950: "#3E2026",
        },
        warning: {
          25: "#FFF8EB",
          50: "#FFF8EB",
          100: "#FFE4C0",
          200: "#FFDDA1",
          300: "#FFD08A",
          400: "#FFC772",
          500: "#FFAE43",
          600: "#EEA23E",
          700: "#D78100",
          800: "#A15C00",
          900: "#6B3D00",
          950: "#6B3D00",
        },
        success: {
          25: "#F0FAF0",
          50: "#F0FAF0",
          100: "#C9EBCB",
          200: "#A6E1A8",
          300: "#93D698",
          400: "#7FD184",
          500: "#5DC264",
          600: "#41AE49",
          700: "#2D8A39",
          800: "#27682C",
          900: "#1A451D",
          950: "#1A451D",
        },
        purple: {
          25: "#ECEBFF",
          50: "#ECEBFF",
          100: "#C7C4FD",
          200: "#ABA7FD",
          300: "#8F89FC",
          400: "#736CFB",
          500: "#5D55F6",
          600: "#574EFA",
          700: "#463EE3",
          800: "#352DC8",
          900: "#33059F",
          950: "#33059F",
        },
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3694EB", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#fff", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#EAECF0", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#5F6D7E", // gray-50
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
      },
      boxShadow: {
        // light
        xs: "0 1px 2px 0 #1018280A",
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [
    require("@headlessui/tailwindcss"),
    // @ts-ignore
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          width: "100%",
          "@screen md": {
            maxWidth: "1248px",
          },
          "@screen xl": {
            maxWidth: "1409px",
          },
        },
      });
    },
  ],
};

export default config;
