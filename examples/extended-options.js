/**
 * Extended Options Example
 *
 * Example with extended options AMQP client options being set.
 *
 * @author potanin@UD
 * @type {exports}
 */
var amqp  = require('../');
var fs    = require('fs');

var connection = amqp.connect( 'amqp://guest:qoszeubbegzwqlrj@localhost', {
  port: 5672,
  virtualHost: 'test',
  clientProperties: {
    product: 'test-product',
    version: '999',
    platform: 'test-platform',
    information: 'test-information',
    capabilities: {
      my_cap: true
    }
  }
});

//connection