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
    host: require( 'os' ).hostname(),
    version: require( '../package.json' ).version,
    platform: 'test-platform',
    information: 'test-information',
    custom: 'custom-value',
    capabilities: {
      my_cap: true
    }
  }
});

