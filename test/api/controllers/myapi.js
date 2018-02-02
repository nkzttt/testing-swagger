'use strict';

const respond = require('../helpers/respond');

module.exports = {
  test: respond.json.bind({
    result: 'success',
    message: 'request is successful'
  })
};
