module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",

    "react-hooks/exhaustive-deps": "error",
  },
};
