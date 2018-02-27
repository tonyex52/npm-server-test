# npm-server-test

- create a npm registry server with sinopia
    - ```npm install -g sinopia```
    - ```yarn global add sinopia```

- run the npm registry server with your url
    - ```sinopia -l http://IP:PORT```

- set registry url(it's not nessasary, you just use ```yarn add --registry http://IP:PORT PACKAGE_NAME```)
    - ```npm config edit```
    - set registry to ```http://IP:PORT```

- initially, add user to the npm registry server
    - ```npm adduser --registry http://IP:PORT```

- set the package.json
```json
{
  "publishConfig": {
    "registry": "http://IP:PORT"
  }
}
```

- reset the registry url
    - ```https://registry.npmjs.org/```

# storybook
- npm install or use yarn
    - ```npm i --save-dev @storybook/react @storybook/addon-actions @storybook/addon-knobs @storybook/addon-links @storybook/addon-options babel-core```
    - ```npm i --save react react-dom webpack style-loader css-loader sass-loader less-loader```

- add package.json scripts
```json
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}
```

- create storybook configuration config.js in .storybook folder
```javascript
import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../modules', true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
```

- create webpack.config.js in .storybook
```javascript
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.[scss|less]$/,
        loaders: ["style-loader", "css-loader", "sass-loader", "less-loader"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
```

# export React Component module with webpack and babel
```
my file structure
  -> .storybook*
    -> webpack.config.js
  -> modules*
    -> test*
      -> index.js
      -> test.stories.js
    -> test2*
      -> index.js
      -> test2.stories.js
  -> src*
    -> index.js
  -> dist*
    -> index.js (made from webpack)
-> package.json
```
## initial session
### install package
```
yarn add -D webpack babel-loader babel-preset-env webpack-cli
```

## package.json
### modify the main path to the dist folder
for my example folder
```dist/index.js```
### add two script to build the transpile file
```javascript
  "scripts": {
    "build": "webpack --mode production --config ./.storybook/webpack.config.js",
    "prepublish": "npm run build"
  }
```

## webpack.config.js
```javascript
{
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../'),
        exclude: [/bower_components/, /node_modules/, /styles/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react']
          }
        }
      }
    ]
  }
}
```

## create src entry
### use module.exports to include the React Component Module(Object)

## build the module and creact the symbolic link node_module
- enter the following command
``` bash
yarn prepublish
npm link
```

## now, you can publish it & enjoy it!
```npm publish```