const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string input', () => {
        expect(isRealString(123)).toBe(false);
    });
    it('should reject only spaces input', () => {
        expect(isRealString('     ')).toBe(false);
    });
    it('should allow string with non white characters', () => {
        expect(isRealString('  Test ')).toBe(true);
    });
});