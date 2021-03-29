// module.exports = {
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };

const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
    process.env.NODE_ENV === "production"
      ? cssnano({ preset: "default" })
      : null,
    purgecss({
      content: ["./public/**/*.html"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};