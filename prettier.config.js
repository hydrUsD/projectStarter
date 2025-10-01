/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheets: ["styles/tailwind.css"],
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 120,
  semi: false,
}
