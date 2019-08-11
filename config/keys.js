//keys.js - figure out what set of credentials is required based on the type of build
if(process.env.NODE_ENV === 'production')   {
  //we are in production - return production set of keys
  module.exports = require('./prod')
}
else    {
  //we are in development - return dev keys
  module.exports = require('./dev')
}