const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // sveltekit app content
    `src/**/*.{html,js,svelte,ts}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#16213e',
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};