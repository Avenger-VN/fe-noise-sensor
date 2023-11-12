module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0
  },
  // **`0`** = off, **`1`** = warn, **`2`** = error
}
