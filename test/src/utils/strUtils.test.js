const StrUtils = require('../../../src/utils/strUtils');

describe('Testing ./src/utils/strUtils.js', () => {
    test('Testing replace()', () => {
        const result = StrUtils.replace('Test replace string', 'string', 'str');
        expect(result).toEqual('Test replace str');
    });
    test('Testing count()', () => {
        const result = StrUtils.count('Test string to count string ocurrences', 'string');
        expect(result).toEqual(2);
    });
    test('Testing contains()', () => {
        const result = StrUtils.contains('Test replace string', 'string');
        expect(result).toBeTruthy();
    });
    test('Testing containsIgnorecase()', () => {
        const result = StrUtils.containsIgnorecase('Test replace string', 'STRING');
        expect(result).toBeTruthy();
    });
    test('Testing getStringIndent()', () => {
        expect(StrUtils.getStringIndent('\t\tsdfsaf')).toEqual('\t\t');
        expect(StrUtils.getStringIndent(' \tsafsf')).toEqual(' \t');
    });
    test('Testing getTabs()', () => {
        expect(StrUtils.getTabs(2)).toEqual('\t\t');
    });
    test('Testing getNewLines()', () => {
        expect(StrUtils.getNewLines(2)).toEqual('\n\n');
    });
    test('Testing getWhitespaces()', () => {
        expect(StrUtils.getWhitespaces(2)).toEqual('  ');
    });
    test('Testing countStartWhitespaces()', () => {
        expect(StrUtils.countStartWhitespaces('     hola')).toEqual(5);
    });
    test('Testing countStartTabs()', () => {
        expect(StrUtils.countStartTabs('\t\t\t\t\thola')).toEqual(5);
    });
});