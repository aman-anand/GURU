const argv = require('./argv');

module.exports = parseInt(argv.port || process.env.PORT || '1990', 10);
