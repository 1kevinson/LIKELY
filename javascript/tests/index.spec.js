"use strict";
var getLanguage = require('../src/index');
describe('TEST JEST TYPESCRIPT', function () {
    test('should returns JAVA for answer = java', function () {
        expect(getLanguage('java'))
            .toBe('Your favourite language is JAVA');
    });
    test('should returns JAVASCRIPT for answer = javascript', function () {
        expect(getLanguage('javascript'))
            .toBe('Your favourite language is JAVASCRIPT');
    });
    test('should returns Wrong language for answer different to java | javascript', function () {
        expect(getLanguage('python'))
            .toBe('wrong language mf...');
    });
});
