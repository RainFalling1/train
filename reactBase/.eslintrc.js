/**
 * 0检查 1警告 2 错误 默认是2
 * @type {{parser: string, extends: [string, string], rules: {"react/destructuring-assignment": number, "react/button-has-type": number, "react/prefer-stateless-function": number, "react/react-in-jsx-scope": number, "react/prop-types": number, "no-console": number, "react/no-array-index-key": number, "react/jsx-filename-extension": [number, {extensions: [string]}], "jsx-a11y/anchor-is-valid": number}, env: {browser: boolean, es6: boolean}}}
 */
module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb","prettier"],
    "env": { browser: true, es6: true, },
    "rules": {
        'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
        'react/no-array-index-key': 0,
        'no-console': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/destructuring-assignment': 0,
        "react/react-in-jsx-scope":0,
        'react/jsx-one-expression-per-line': 0,
        'react/button-has-type':0,
        'jsx-a11y/no-noninteractive-element-interactions':0,
        'jsx-a11y/click-events-have-key-events':0,
    }
}
