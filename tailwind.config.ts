export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/public/**/*.{html, js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        headers: ["var(--font-montserrat)"],
        sans: ["var(--font-geist-sans)", "ui-sans-serif"],
      },
      colors: {
        background: "var(--background)",
        disabled: "var(--disabled)",
        overlay: "var(--overlay)",
        container: {
          DEFAULT: "var(--container)",
          high: "var(--container-high)",
        },
        inverse: {
          DEFAULT: "var(--inverse)",
        },
        on: {
          inverse: "var(--on-inverse)",
          disabled: "var(--on-disabled)",
          primary: "var(--on-primary)",
          "primary-container": "var(--on-primary-container)",
          "primary-hover": "var(--on-primary-hover)",
          "primary-pressed": "var(--on-primary-pressed)",
          neutral: "var(--on-neutral)",
          "neutral-container": "var(--on-neutral-container)",
          "neutral-hover": "var(--on-neutral-hover)",
          "neutral-pressed": "var(--on-neutral-pressed)",
          success: "var(--on-success)",
          "success-container": "var(--on-success-container)",
          "success-hover": "var(--on-success-hover)",
          "success-pressed": "var(--on-success-pressed)",
          warning: "var(--on-warning)",
          "warning-container": "var(--on-warning-container)",
          "warning-hover": "var(--on-warning-hover)",
          "warning-pressed": "var(--on-warning-pressed)",
          danger: "var(--on-danger)",
          "danger-container": "var(--on-danger-container)",
          "danger-hover": "var(--on-danger-hover)",
          "danger-pressed": "var(--on-danger-pressed)",
          info: "var(--on-info)",
          "info-container": "var(--on-info-container)",
          "info-hover": "var(--on-info-hover)",
          "info-pressed": "var(--on-info-pressed)",
        },
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        subtle: "var(--subtle)",
        stroke: {
          DEFAULT: "var(--stroke)",
          strong: "var(--stroke-strong)",
          subtle: "var(--stroke-subtle)",
          disabled: "var(--stroke-disabled)",
          inverse: "var(--stroke-inverse)",
          primary: "var(--stroke-primary)",
          success: "var(--stroke-success)",
          warning: "var(--stroke-warning)",
          danger: "var(--stroke-danger)",
          info: "var(--stroke-info)",
        },
        primary: {
          accent: "var(--primary-accent)",
          container: "var(--primary-container)",
          DEFAULT: "var(--primary)",
          strong: "var(--primary-strong)",
          hover: "var(--primary-hover)",
          pressed: "var(--primary-pressed)",
        },
        neutral: {
          accent: "var(--neutral-accent)",
          container: "var(--neutral-container)",
          stroke: "var(--neutral-stroke)",
          DEFAULT: "var(--neutral)",
          hover: "var(--neutral-hover)",
          pressed: "var(--neutral-pressed)",
        },
        success: {
          accent: "var(--success-accent)",
          container: "var(--success-container)",
          DEFAULT: "var(--success)",
          strong: "var(--success-strong)",
          hover: "var(--success-hover)",
          pressed: "var(--success-pressed)",
        },
        warning: {
          accent: "var(--warning-accent)",
          container: "var(--warning-container)",
          DEFAULT: "var(--warning)",
          status: "var(--warning-status)",
          hover: "var(--warning-hover)",
          pressed: "var(--warning-pressed)",
        },
        danger: {
          accent: "var(--danger-accent)",
          container: "var(--danger-container)",
          DEFAULT: "var(--danger)",
          strong: "var(--danger-strong)",
          hover: "var(--danger-hover)",
          pressed: "var(--danger-pressed)",
        },
        info: {
          accent: "var(--info-accent)",
          container: "var(--info-container)",
          DEFAULT: "var(--info)",
          strong: "var(--info-strong)",
          hover: "var(--info-hover)",
          pressed: "var(--info-pressed)",
        },
        shadow: {
          weak: "var(--shadow-weak)",
          DEFAULT: "var(--shadow)",
          strong: "var(--shadow-strong)",
        },
        tremor: {
          brand: {
            faint: "var(--primary-accent)",
            muted: "var(--primary-container)",
            subtle: "var(--primary-stroke)",
            DEFAULT: "var(--primary)",
            emphasis: "var(--primary-pressed)",
            inverted: "var(--on-primary)",
          },
          background: {
            muted: "var(--disabled)",
            subtle: "var(--container)",
            DEFAULT: "var(--background)",
            emphasis: "var(--container-high)",
          },
          border: {
            DEFAULT: "var(--stroke)",
          },
          ring: {
            DEFAULT: "var(--primary)",
          },
          content: {
            subtle: "var(--on-disabled)",
            DEFAULT: "var(--subtle)",
            emphasis: "var(--secondary)",
            strong: "var(--foreground)",
            inverted: "var(--background)",
          },
        },
      },
      borderRadius: {
        "radius-xs": "var(--radius-xs)",
        "radius-sm": "var(--radius-sm)",
        radius: "var(--radius)",
        "radius-md": "var(--radius-md)",
        "radius-lg": "var(--radius-lg)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        "tremor-label": [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        "tremor-default": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        "tremor-title": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "tremor-metric": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
      },
      boxShadow: {
        low: "0px 1px 8px 0px var(--shadow-weak)",
        medium: "0px 4px 20px 0px var(--shadow-weak)",
        high: "0px 1px 8px 0px var(--shadow), 0px 16px 40px 0px var(--shadow-strong)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
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
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(border)-(stroke)(?:-primary|-neutral|-danger|-info|-warning|-success)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(border)-(stroke)(?:-primary|-neutral|-danger|-info|-warning|-success)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(border)-(stroke)(?:-primary|-neutral|-danger|-info|-warning|-success)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(border)-(stroke)(?:-primary|-neutral|-danger|-info|-warning|-success)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(border)-(stroke)(?:-primary|-neutral|-danger|-info|-warning|-success)$/,
      variants: ["hover", "ui-selected", "active"],
    },
  ],
};
