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
    - ```npm i --save react react-dom```
    - ```npm i --save-dev babel-core```

- add package.json scripts
```json
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}
```

- creat storybook config in .storybook folder
```javascript
import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
```