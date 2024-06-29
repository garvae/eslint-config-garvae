# ESLint config by [@Garvae][garvae]

<br/>

Massive and optimized [ESLint][eslint] config for the main front-end environments

<br/>

---

<p align="center">
    <img src="https://github.com/garvae/eslint-config-garvae/blob/master/assets/images/gh-cover.svg?raw=true" alt="eslint-config-garvae cover" width="100%" height="auto">
</p>

---

## 💪 Benefits

<br/>

✔️ You don't have to configure everything yourself, just add this config and enjoy rigorous testing and development assistance. <br/>


<br/>

## 📦 Configurations

<br/>

> ⌛ This section is under development and will be available soon

<br/>

This package provides settings and best practices for:

🌟 JavaScript <br/>
🌟 TypeScript <br/>
🌟 React.js <br/>
🌟 Redux <br/>
🌟 HTML <br/>
🌟 Jest <br/>
🌟 JSON <br/>
🌟 Markdown <br/>

<br/>

## 🛠 Installation

<br/>

⚠️ ⚠️ ⚠️ **This config was designed for use with [ESLint][eslint] version `>=8.0.0 <=8.22.0` and has not been tested with the new [flat config ESLint 9](https://eslint.org/docs/latest/use/configure/migration-guide)**

<br/>

### 1. Install [ESLint][eslint] if you haven't already

<br/>

npm:

```sh
npm i eslint@8.22.0 --save-dev
```

yarn:

```sh
yarn add eslint@8.22.0 -D
```

<br/>

### 2. Install package

<br/>

npm:

```sh
npm -i --save-dev @garvae/eslint-config-garvae eslint-plugin-typescript-sort-keys@3.2.0 eslint-plugin-unused-imports@3.2.0
```

yarn:

```sh
yarn add -D @garvae/eslint-config-garvae eslint-plugin-typescript-sort-keys@3.2.0 eslint-plugin-unused-imports@3.2.0
```

<br/>

### 3. Add the [eslint-config-garvae](https://www.npmjs.com/package/@garvae/eslint-config-garvae) to the `ESLint config`

<br/>

```json
{
  "extends": [ "@garvae/eslint-config-garvae" ]
}
```

<br/>

If you don't have a babel config, then add the path to the on included in this library the `ESLint config`:

```json
{
  "overrides": [
    {
      "files": [ "*.js", "*.jsx" ],
      "parserOptions": {
        "babelOptions": {
          "configFile": "./node_modules/@garvae/eslint-config-garvae/babel.config.js"
        }
      }
    }
  ]
}
```

<br/>

If you already have your own babel config, then check it includes (and you have installed) presets:

```js
// your babel.config.js
module.exports = {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
    ]
}
```

<br/>

It's also required to add the path to your `tsconfig.json` into next sections:

```json
{
  "overrides": [
    {
      "files": [ "*.ts", "*.tsx" ],
      "parserOptions": {
        "project": "tsconfig.json"
      },
      "settings": {
        "import/resolver": {
          "typescript": {
            "project": "tsconfig.json"
          }
        }
      }
    }
  ]
}
```

<br/>

## ⚠️ 🛠 Known installation issues

<br/>

It is challenging to combine the work of many libraries with different versions.
Today ESLint version 9 has an updated [flat config](https://eslint.org/docs/latest/use/configure/migration-guide) and many plugins have already changed their configuration to support this update.
However, the [eslint-config-garvae](https://www.npmjs.com/package/@garvae/eslint-config-garvae) library dependencies have been tested in the exact combination of versions listed in below.
If you have newer versions of these libraries installed, the functionality of ESLint is not guaranteed.

<br/>

Tested package versions:

```json
{
    "@babel/core": "7.24.7",
    "@babel/eslint-parser": "7.24.7",
    "@babel/preset-env": "7.24.7",
    "@babel/preset-react": "7.24.7",
    "@babel/preset-typescript": "7.24.7",
    "@getify/eslint-plugin-proper-arrows": "11.0.3",
    "@getify/eslint-plugin-proper-ternary": "3.1.1",
    "@html-eslint/eslint-plugin": "0.25.0",
    "@html-eslint/parser": "0.25.0",
    "@stylistic/eslint-plugin-js": "2.3.0",
    "@types/eslint-plugin-security": "3.0.0",
    "@types/jest": "29.5.12",
    "@types/node": "20",
    "@typescript-eslint/eslint-plugin": "5.0.0",
    "@typescript-eslint/parser": "5.0.0",
    "babel-preset-next": "1.4.0",
    "eslint": "8.22.0",
    "eslint-config-airbnb": "19.0.4",
    "eslint-config-airbnb-typescript": "18.0.0",
    "eslint-config-next": "15.0.0-rc.0",
    "eslint-config-prettier": "9.1.0",
    "eslint-import-resolver-typescript": "3.6.1",
    "eslint-plugin-array-func": "4.0.0",
    "eslint-plugin-better-styled-components": "1.1.2",
    "eslint-plugin-destructuring": "2.2.1",
    "eslint-plugin-eslint-comments": "3.2.0",
    "eslint-plugin-html": "8.1.1",
    "eslint-plugin-import": "2.29.1",
    "eslint-plugin-jest": "27.2.1",
    "eslint-plugin-jsdoc": "48.5.0",
    "eslint-plugin-jsonc": "2.16.0",
    "eslint-plugin-jsx-a11y": "6.9.0",
    "eslint-plugin-markdownlint": "0.6.0",
    "eslint-plugin-modules-newline": "0.0.6",
    "eslint-plugin-newline-destructuring": "1.2.2",
    "eslint-plugin-no-unsanitized": "4.0.2",
    "eslint-plugin-perfectionist": "2.3.0",
    "eslint-plugin-pii": "1.0.2",
    "eslint-plugin-prefer-type-alias": "0.1.0",
    "eslint-plugin-prettier": "5.1.3",
    "eslint-plugin-react": "7.34.3",
    "eslint-plugin-react-hooks": "4.6.2",
    "eslint-plugin-react-redux": "4.1.0",
    "eslint-plugin-security": "3.0.1",
    "eslint-plugin-sort-destructure-keys": "2.0.0",
    "eslint-plugin-sort-keys-fix": "1.1.2",
    "eslint-plugin-styled-components-a11y": "2.1.34",
    "eslint-plugin-typescript-sort-keys": "3.2.0",
    "eslint-plugin-unicorn": "41.0.0",
    "eslint-plugin-unused-imports": "3.2.0",
    "eslint-plugin-write-good-comments": "0.2.0",
    "eslint-plugin-you-dont-need-lodash-underscore": "6.14.0",
    "jsonc-eslint-parser": "2.4.0",
    "prettier": "3.3.2",
    "typescript": "5.5.2"
  }
```

<br/>

There is already [known issue](https://github.com/vercel/next.js/issues/52890) with popular libraries:

```json
{
  "@typescript-eslint/eslint-plugin": "^6.14.0",
  "@typescript-eslint/parser": "^6.14.0"
}
```

Working versions:

```json
{
  "@typescript-eslint/eslint-plugin": "5.0.0",
  "@typescript-eslint/parser": "5.0.0"
}
```

And maybe up to

```json
{
  "@typescript-eslint/eslint-plugin": "5.62.0",
  "@typescript-eslint/parser": "5.62.0"
}
```

So if you have versions newer than listed above, the possible solution:
1. Uninstall newer versions and [eslint-config-garvae](https://www.npmjs.com/package/@garvae/eslint-config-garvae) library using CLI
2. Reinstall [eslint-config-garvae](https://www.npmjs.com/package/@garvae/eslint-config-garvae) library



<br/>



## ⚡ Examples

<br/>

> ⌛ This section is under development and will be available soon

<br/>

## 💎 Recommendations

<br/>

> ⌛ This section is under development and will be available soon

<br/>

## 🤝 Contributions

🤝 Contributions, issues and feature requests are welcome! <br/>
Feel free to check [issues page][issue] and [pull request page][pr].

❤️ **Give a** ⭐ **if you like this project!**

<br/>

## 📞 Contact me

### 🌐 [Contact page][garvae]

### 🔳 QR code

<div style="background-color: white; display: inline-block; margin-top: 2em; margin-bottom: 2em">
    <img src="https://github.com/garvae/assets/blob/master/assets/img/garvae-contacts.png?raw=true" alt="contact me" width="300px" height="300px">
</div>

## 🚀 Mentoring

**If you want to grow** 🚀 **fast in front-end development - [contact me!][garvae]** 🙋‍♂

<br/>

## 📄 License

[See license in the "**LICENCE**" file][license]

[//]: # "------------------------------------------------------------------"
[//]: # "------------------------- Document links -------------------------"
[//]: # "------------------------------------------------------------------"
[//]: # "--------------------------- repo links ---------------------------"
[eslint]: https://eslint.org
[//]: # "-------------------------- common links --------------------------"
[issue]: https://github.com/garvae/eslint-config-garvae/issues
[pr]: https://github.com/garvae/eslint-config-garvae/pulls
[repo]: https://github.com/garvae/eslint-config-garvae
[license]: https://github.com/garvae/eslint-config-garvae/blob/master/LICENSE?raw=true
[//]: # "---------------------------- contacts ----------------------------"
[garvae]: https://sprd.li/4wr38watys
[//]: # "------------------------------------------------------------------"
[//]: # "------------------------------------------------------------------"
