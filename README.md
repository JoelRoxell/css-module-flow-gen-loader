# css-module-flow-gen-loader
Webpack loader used to auto generate css-module token exports, in order to allow flow to check that you're using correct properties on the generated style object.

## TL;DR
Generates type definitions for imported style files, which allows flow to type-check "against" the imported style object.

![usage](https://raw.githubusercontent.com/JoelRoxell/css-module-flow-gen-loader/master/in-action.gif)

## Install
```
npm install css-module-flow-gen-loader
```

## Usage
This can be used with any CSS module format such as .styl, .scss, .sass, or .pcss. All that's required is that css-module-flow-gen-loader is placed after the css-loader.

### Add Webpack conf rules
```javascript
[
  ...,
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-module-flow-gen-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          localIdentName: '[name]_[local]_[hash:base64:5]'
        },
      },
      {
        loader: 'sass-loader'
      }
    ]
  }
]
```

### Add .flowconfig
Define allowed file import for flow.
```
[options]
module.file_ext=.js
module.file_ext=.json
module.file_ext=.scss
```
