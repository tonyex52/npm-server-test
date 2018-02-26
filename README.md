# npm-server-test

- create a npm registry server with sinopia
    - ```npm install -g sinopia```
    - ```yarn global add sinopia```

- set registry url
    - ```npm config edit```
    - set registry to ```https://IP:PORT```

- initially, add user to the npm registry server
    - ```npm adduser --registry https://IP:PORT```

- reset the registry url
    - ```https://registry.npmjs.org/```

### storybook
- npm install or use yarn
    - ```npm i --save-dev @storybook/react```
    - ```npm i --save react react-dom webpack style-loader css-loader sass-loader less-loader```
    - ```npm i --save-dev babel-core```

- add package.json scripts
```json
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}
```

- create storybook config in .storybook folder
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
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader", "less-loader"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
```