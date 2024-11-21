# stylelint-detect-unused-selectors-plugin-jsx

This is a built-in plugin of `stylelint-detect-unused-selector`.

It parses React files using [@babel/parser](https://babeljs.io/docs/en/babel-parser) and extracts `class`es and `id`s from them.

## Features and Limitations

- Only single [class selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) and [id selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) are supported.
  - OK: `.foo`, `.foo-bar`, `#foo`, `.foo, .bar`, `.foo, #bar`, `.foo::before`\*, `.foo:hover`\*
  - NG: `.foo .bar`, `foo > .bar`, `.foo:first-child`\*
  - \*: [Pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) that require user interactions and all [pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) are [removed before being processed with this plugin](https://github.com/dmitiiv/stylelint-detect-unused-selectors/blob/main/src/utils/remove-unassertive-selector.ts). Thus, `.foo::before` is treated like `.foo` and assertable by the plugin while `.foo:first-child` is not because `:first-child` doesn't depend on user interactions and will not be removed.
- [CSS Modules](https://github.com/css-modules/css-modules) is supported.
  - Accessing to a classname like `styles.foo` in a React file will be considered that `.foo` is used.
- [`classnames`](https://github.com/JedWatson/classnames) package is supported.
- Without CSS Modules, only setting classname using a simple string literal at a `className` attribute or a [`classnames`](https://github.com/JedWatson/classnames) function call is detectable.

## Options

The options are passed through [`@babel/parser`](https://babeljs.io/docs/en/babel-parser). If your project uses [optional chaining proposal](https://github.com/tc39/proposal-optional-chaining), for example, you can tell that to the plugin by specifying

```json
{
  "test": "\\.jsx?$",
  "plugin": "stylelint-detect-unused-selectors-plugin-jsx",
  "options": {
    "sourceType": "module",
    "plugins": ["jsx", "optionalChaining"]
  }
},
```

in the configuration.

The list of `@babel/parser`'s options is available at [their online document](https://babeljs.io/docs/en/babel-parser#options).
