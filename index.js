var path      = require('path');
var gulp      = require('gulp');
var webserver = require('gulp-webserver');

function WebServer(params) {
    this.params = params;
}

WebServer.prototype.start = function() {
    var params = this.params;
    var segment  = params.segment || '';

    if (typeof params.livereload === 'number') {
        params.livereload = {
            enable: true,
            port: params.livereload
        };
    }

    if (params.proxies === true) {
        params.proxies = [{
            source: '/' + segment,
            target: 'http://localhost:' + params.port + '/'
        }];
    } else {
        segment = '';
    }

    return gulp.src(path.join(params.root, segment))
        .pipe(webserver(params));
};

module.exports = WebServer;