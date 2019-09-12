module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended'
  ],
  "plugins": [
    "@typescript-eslint",
     "react"
    ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
};  
