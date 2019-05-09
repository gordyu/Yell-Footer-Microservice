const request = require('request');
const config = require('../config.js');

let getReposByUsername = (/* TODO */) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'FILL ME IN',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

}

module.exports.getReposByUsername = getReposByUsername;