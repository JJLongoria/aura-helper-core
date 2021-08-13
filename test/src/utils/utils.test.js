const Utils = require('../../../src/utils/utils');

describe('Testing ./src/utils/utils.js', () => {
    test('Testing forceArray()', () => {
        let result = Utils.forceArray('hi');
        expect(result).toEqual(['hi']);
        result = Utils.forceArray(['hi']);
        expect(result).toEqual(['hi']);
        result = Utils.forceArray(undefined);
        expect(result).toEqual(undefined);
    });
    test('Testing clone()', () => {
        expect(Utils.clone({ key: 'value' })).toEqual({ key: 'value' });
    });
    test('Testing isObject()', () => {
        expect(Utils.isObject({ key: 'value' })).toBeTruthy();
        expect(Utils.isObject([])).toBeFalsy();
        expect(Utils.isObject(undefined)).toBeFalsy();
    });
    test('Testing isString()', () => {
        expect(Utils.isString('test')).toBeTruthy();
        expect(Utils.isString({ key: 'value' })).toBeFalsy();
        expect(Utils.isString([])).toBeFalsy();
        expect(Utils.isString(undefined)).toBeFalsy();
    });
    test('Testing isNumber()', () => {
        expect(Utils.isNumber(5)).toBeTruthy();
        expect(Utils.isNumber({ key: 'value' })).toBeFalsy();
        expect(Utils.isNumber([])).toBeFalsy();
        expect(Utils.isNumber(undefined)).toBeFalsy();
    });
    test('Testing isBigInt()', () => {
        expect(Utils.isBigInt(BigInt(5))).toBeTruthy();
        expect(Utils.isBigInt({ key: 'value' })).toBeFalsy();
        expect(Utils.isBigInt([])).toBeFalsy();
        expect(Utils.isBigInt(undefined)).toBeFalsy();
    });
    test('Testing isSymbol()', () => {
        expect(Utils.isSymbol(Symbol('text'))).toBeTruthy();
        expect(Utils.isSymbol({ key: 'value' })).toBeFalsy();
        expect(Utils.isSymbol([])).toBeFalsy();
        expect(Utils.isSymbol(undefined)).toBeFalsy();
    });
    test('Testing isBoolean()', () => {
        expect(Utils.isBoolean(false)).toBeTruthy();
        expect(Utils.isBoolean({ key: 'value' })).toBeFalsy();
        expect(Utils.isBoolean([])).toBeFalsy();
        expect(Utils.isBoolean(undefined)).toBeFalsy();
    });
    test('Testing isFunction()', () => {
        expect(Utils.isFunction(function () { })).toBeTruthy();
        expect(Utils.isFunction({ key: 'value' })).toBeFalsy();
        expect(Utils.isFunction([])).toBeFalsy();
        expect(Utils.isFunction(undefined)).toBeFalsy();
    });
    test('Testing isArray()', () => {
        expect(Utils.isArray([])).toBeTruthy();
        expect(Utils.isArray({ key: 'value' })).toBeFalsy();
        expect(Utils.isArray('string')).toBeFalsy();
        expect(Utils.isArray(undefined)).toBeFalsy();
    });
    test('Testing isNull()', () => {
        expect(Utils.isNull(undefined)).toBeTruthy();
        expect(Utils.isNull(null)).toBeTruthy();
        expect(Utils.isNull({ key: 'value' })).toBeFalsy();
        expect(Utils.isNull('string')).toBeFalsy();
        expect(Utils.isNull([])).toBeFalsy();
    });
    test('Testing hasKeys()', () => {
        expect(Utils.hasKeys(undefined)).toBeFalsy();
        expect(Utils.hasKeys(null)).toBeFalsy();
        expect(Utils.hasKeys({ key: 'value' })).toBeTruthy();
        expect(Utils.hasKeys('string')).toBeFalsy();
        expect(Utils.hasKeys([])).toBeFalsy();
    });
    test('Testing countKeys()', () => {
        expect(Utils.countKeys({ key: 'value' })).toEqual(1);
    });
    test('Testing getFirstElement()', () => {
        expect(Utils.getFirstElement({ key: 'value' })).toEqual('value');
    });
    test('Testing getLastElement()', () => {
        expect(Utils.getLastElement({ key: 'value' })).toEqual('value');
    });
    test('Testing getCallbackFunction()', () => {
        const func = function () {

        };
        expect(Utils.getCallbackFunction()).toEqual(undefined);
        expect(Utils.getCallbackFunction([func])).toEqual(func);
    });
    test('Testing sort()', () => {
        const data = [
            {
                key: 'value2',
            },
            {
                key: 'value1',
            },
            {
                key: 'Value1',
            }
        ];
        expect(Utils.sort(data, ['key'], false)).toEqual([
            {
                key: 'value1',
            },
            {
                key: 'Value1',
            },
            {
                key: 'value2',
            }
        ]);
        expect(Utils.sort(data, ['key'], true)).toEqual([
            {
                key: 'value1',
            },
            {
                key: 'Value1',
            },
            {
                key: 'value2',
            },
        ]);
        expect(Utils.sort(['2', '3', '1'], undefined, true)).toEqual(['1', '2', '3']);
        expect(Utils.sort(['2', '3', '1'], undefined, false)).toEqual(['1', '2', '3']);
    });
});