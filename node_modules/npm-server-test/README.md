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