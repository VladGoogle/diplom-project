const path = require('path');

module.exports = {
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'client/src/index.js');
    paths.appHtml = path.resolve(__dirname, 'client/public/index.html');
    paths.appSrc = path.resolve(__dirname, 'client/src');
    return paths;
  },
};
