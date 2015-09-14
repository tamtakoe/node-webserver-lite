# node-webserver-lite [![NPM version](https://badge.fury.io/js/webserver-lite.svg)](http://badge.fury.io/js/webserver-lite)

> Plugin to run a local webserver with LiveReload based on [gulp-webserver](https://github.com/schickling/gulp-webserver)

## Install with [npm](npmjs.org)

```sh
npm install webserver-lite
```

## Usage
```js
var WebServer = require('./lib/webserver-lite');

var mainWebServer = new WebServer({
    fallback: 'index.html',
    root: path.resolve(__dirname, 'public')
});

var adminWebServer = new WebServer({
    fallback: 'index.html',
    proxies: true,
    root: path.resolve(__dirname, 'public/build')
}, 'admin');

mainWebServer.start();
adminWebServer.start();
```

## API
### WebServer(params)

Server constructor

#### params

See [gulp-webserver options](https://github.com/schickling/gulp-webserver#options)

Extras

##### livereload: &lt;port&gt;

Type: `Number`

Shortcut for
```js
livereload: {
    enable: true,
    port: <port>
};
```

##### proxies: true

Shortcut for
```js
params.proxies = [{
    source: '/' + params.segment,
    target: 'http://localhost:' + params.port + '/'
}];
```

##### segment

Type: `String`

Path segment. F.e. if `segment: 'admin', proxies: true, fallback: 'index.html'` server will be use `index.html` from admin directory if you get `localhost:8000/admin/`
```js
serverDir
 └──admin
      └──index.html
```


## License

© Oleg Istomin 2015.
Released under the MIT license