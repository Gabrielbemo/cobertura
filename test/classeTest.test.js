const ClasseTest = require("../lib/classeTest");
const { test, expect } = require("@jest/globals");

const classeTest = new ClasseTest();


describe('ClasseTest', () => {
    test('test', () => {
        expect(classeTest.teste(true, 10)).toBeFalsy();
    });

    test('test2', () => {
        expect(classeTest.teste(false, 10)).toBeFalsy();
    });
});