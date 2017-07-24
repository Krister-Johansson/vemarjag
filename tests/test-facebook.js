'use strict';

var expect = require('chai').expect;
var mongoose = require('mongoose');
var bbl = require('../src/business/app.business');
mongoose.Promise = global.Promise;
process.env.NODE_ENV = 'test';

describe('test facebook business layer', function () {
    it('can be imported without blowing up', function () {
        expect(bbl).to.be.a('object');
    });

    it('can access addGroup', function () {
        expect(bbl.addGroup).to.be.a('function');
    });

    it('can access getGroup', function () {
        expect(bbl.getGroup).to.be.a('function');
    });

    it('can access addImage', function () {
        expect(bbl.addImage).to.be.a('function');
    });

    it('can access removeGroup', function () {
        expect(bbl.removeGroup).to.be.a('function');
    });

    it('can access removeImage', function () {
        expect(bbl.removeImage).to.be.a('function');
    });

    it('can access getImage', function () {
        expect(bbl.getImage).to.be.a('function');
    });

    it('can access randomImage', function () {
        expect(bbl.randomImage).to.be.a('function');
    });
});

describe('test facebook functions', function () {
    describe('group', function () {
        describe('add', function () {
            it('should save without error', function () {
                bbl.addGroup({
                    group: 'test1'
                }, function (result) {
                    expect(result.group).to.equal('test11');
                });
            });
        });

        describe('get', function () {
            it('should get without error', function () {
                bbl.getGroup({
                    group: 'test1'
                }, function (result) {
                    expect(result.group).to.equal('test1');
                });
            });
        });

        describe('remove', function () {
            it('should remove without error', function () {
                bbl.removeGroup({
                    group: 'test1'
                }, function (result) {
                    expect(result).to.be.true;
                });
            });
        });
    });

    describe('image', function () {
        describe('add', function () {
            it('should save without error', function () {
                bbl.addImage({
                    group: 'test1'
                }, function (result) {
                    expect(result.group).to.equal('test1');
                });
            });
        });

        describe('get', function () {
            it('should get without error', function () {
                bbl.getImage({
                    group: 'test1'
                }, function (result) {
                    expect(result.group).to.equal('test1');
                });
            });
        });

        describe('remove', function () {
            it('should remove without error', function () {
                bbl.removeImage({
                    group: 'test1'
                }, function (result) {
                    expect(result).to.be.true;
                });
            });
        });
    });
});