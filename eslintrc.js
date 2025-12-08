export default {
  env: {
    browser: true,
    es2021: true,
  },

  // Suporte ao React + JSX
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],

  // Interpretador moderno
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },

  plugins: ["react"],

  rules: {
    // Desativa warnings desnecessários
    "react/prop-types": "off",   // << remove o aviso "'title' is missing in props validation"
    "react/react-in-jsx-scope": "off", // React 17+ não precisa mais de import React

    // Regras recomendadas para manter o código limpo
    "no-unused-vars": "warn",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "warn",
  },

  settings: {
    react: { version: "detect" },
  },
};
