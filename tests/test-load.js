/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');

describe('express generator', function () {
  it('can be imported without blowing up', function () {
    var app = require('../src/app');
    assert(app !== undefined);
  });
});