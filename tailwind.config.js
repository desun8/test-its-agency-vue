module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "2-px": "2px",
      },
      colors: {
        black: "#1f2020",
        green: "#7bb899",
      },
      spacing: {
        5.5: "22px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      animation: {
        "fade-in-down": "fpFadeInDown 0.3s cubic-bezier(.23,1,.32,1) forwards",
      },
      gridTemplateColumns: {
        list: "minmax(300px, 448px) 1fr",
        card: "auto 1fr",
        "card-lg": "auto auto 1fr auto",
        "picker-header": "auto 1fr auto",
      },
      boxShadow: {
        "border-hack": "inset 1px 0 #e5e7eb",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
