var assert = require('assert');
var App = require('../src/bundles/app/App.js');

describe('app', function(){
  it('should get a message', function(){
    var app = new App( );
    assert.equal( app.getMsg(), 'Ciaooo !!! AAA !!');
  });
});