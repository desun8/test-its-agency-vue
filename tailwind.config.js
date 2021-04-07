module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fpFadeInDown 0.3s cubic-bezier(.23,1,.32,1) forwards"
      },
      gridTemplateColumns: {
        list: "minmax(300px, 448px) 1fr",
        card: "auto 1fr",
        "card-lg": "auto auto 1fr auto",
        "picker-header": "auto 1fr auto"
      },
      boxShadow: {
        "border-hack": "inset 1px 0 #e5e7eb"
      }
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"]
    }
  },
  plugins: []
};
