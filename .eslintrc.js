const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-unused-vars": WARNING,
    "@typescript-eslint/no-inferrable-types": WARNING,

    "react-hooks/exhaustive-deps": ERROR,
  },
};
