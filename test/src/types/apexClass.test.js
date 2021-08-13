const ApexClass = require('../../../src/types/apexClass');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexClass.js', () => {
    test('Testing instance', () => {
        const apexClass = new ApexClass('id', 'name', new Token('type', 'text', 1, 0, false));
        expect(apexClass.getChildOrder('node')).toEqual(0);
        apexClass.addChild({
            type: ApexNodeType.INITIALIZER,
            name: 'initializer'
        });
        expect(apexClass.getChildOrder(ApexNodeType.INITIALIZER)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeType.INITIALIZER)).toEqual({
            type: ApexNodeType.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
        });
        expect(apexClass.getFirstChild(ApexNodeType.INITIALIZER)).toEqual({
            type: ApexNodeType.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
        });
        apexClass.addChild({
            type: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor'
        });
        expect(apexClass.getChildOrder(ApexNodeType.STATIC_CONSTRUCTOR)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeType.STATIC_CONSTRUCTOR)).toEqual({
            type: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 2,
            order: 1,
        });
        expect(apexClass.getFirstChild(ApexNodeType.STATIC_CONSTRUCTOR)).toEqual({
            type: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 2,
            order: 1,
        });
        apexClass.addChild({
            type: ApexNodeType.CLASS,
            name: 'apexClass1'
        });
        apexClass.addChild({
            type: ApexNodeType.CLASS,
            name: 'apexClass2'
        });
        expect(apexClass.getChildOrder(ApexNodeType.CLASS)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.CLASS)).toEqual({
            type: ApexNodeType.CLASS,
            name: 'apexClass2',
            memberOrder: 4,
            order: 2,
        });
        expect(apexClass.getFirstChild(ApexNodeType.CLASS)).toEqual({
            type: ApexNodeType.CLASS,
            name: 'apexClass1',
            memberOrder: 3,
            order: 1,
        });
        apexClass.addChild({
            type: ApexNodeType.INTERFACE,
            name: 'apexInterface1'
        });
        apexClass.addChild({
            type: ApexNodeType.INTERFACE,
            name: 'apexInterface2'
        });
        expect(apexClass.getChildOrder(ApexNodeType.INTERFACE)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.INTERFACE)).toEqual({
            type: ApexNodeType.INTERFACE,
            name: 'apexInterface2',
            memberOrder: 6,
            order: 2,
        });
        expect(apexClass.getFirstChild(ApexNodeType.INTERFACE)).toEqual({
            type: ApexNodeType.INTERFACE,
            name: 'apexInterface1',
            memberOrder: 5,
            order: 1,
        });
        apexClass.addChild({
            type: ApexNodeType.ENUM,
            name: 'apexEnum1'
        });
        apexClass.addChild({
            type: ApexNodeType.ENUM,
            name: 'apexEnum2'
        });
        expect(apexClass.getChildOrder(ApexNodeType.ENUM)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.ENUM)).toEqual({
            type: ApexNodeType.ENUM,
            name: 'apexEnum2',
            memberOrder: 8,
            order: 2,
        });
        expect(apexClass.getFirstChild(ApexNodeType.ENUM)).toEqual({
            type: ApexNodeType.ENUM,
            name: 'apexEnum1',
            memberOrder: 7,
            order: 1,
        });
        apexClass.addChild({
            type: ApexNodeType.VARIABLE,
            name: 'apexVar'
        });
        expect(apexClass.getChildOrder(ApexNodeType.VARIABLE)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeType.VARIABLE)).toEqual({
            type: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
        });
        expect(apexClass.getLastChild(ApexNodeType.PROPERTY)).toEqual({
            type: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
        });
        expect(apexClass.getFirstChild(ApexNodeType.VARIABLE)).toEqual({
            type: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
        });
        expect(apexClass.getFirstChild(ApexNodeType.PROPERTY)).toEqual({
            type: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
        });
        apexClass.addChild({
            type: ApexNodeType.PROPERTY,
            name: 'apexProperty'
        });
        expect(apexClass.getChildOrder(ApexNodeType.PROPERTY)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.PROPERTY)).toEqual({
            type: ApexNodeType.PROPERTY,
            name: 'apexProperty',
            memberOrder: 10,
            order: 2,
        });
        expect(apexClass.getLastChild(ApexNodeType.VARIABLE)).toEqual({
            type: ApexNodeType.PROPERTY,
            name: 'apexProperty',
            memberOrder: 10,
            order: 2,
        });
        expect(apexClass.getFirstChild(ApexNodeType.VARIABLE)).toEqual({
            type: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
        });
        expect(apexClass.getFirstChild(ApexNodeType.PROPERTY)).toEqual({
            type: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
        });
        apexClass.addChild({
            type: ApexNodeType.METHOD,
            name: 'apexMethod1',
            simplifiedSignature: 'apexMethod1()',
        });
        apexClass.addChild({
            type: ApexNodeType.METHOD,
            name: 'apexMethod2',
            simplifiedSignature: 'apexMethod2()',
        });
        expect(apexClass.getChildOrder(ApexNodeType.METHOD)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.METHOD)).toEqual({
            type: ApexNodeType.METHOD,
            name: 'apexMethod2',
            simplifiedSignature: 'apexMethod2()',
            memberOrder: 12,
            order: 2,
        });
        expect(apexClass.getFirstChild(ApexNodeType.METHOD)).toEqual({
            type: ApexNodeType.METHOD,
            name: 'apexMethod1',
            simplifiedSignature: 'apexMethod1()',
            memberOrder: 11,
            order: 1,
        });
        apexClass.addChild({
            type: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass()',
        });
        apexClass.addChild({
            type: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass(String str)',
        });
        expect(apexClass.getChildOrder(ApexNodeType.CONSTRUCTOR)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.CONSTRUCTOR)).toEqual({
            type: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass(String str)',
            memberOrder: 14,
            order: 2,
        });
        expect(apexClass.getFirstChild(ApexNodeType.CONSTRUCTOR)).toEqual({
            type: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass()',
            memberOrder: 13,
            order: 1,
        });
        expect(apexClass.getAbosluteFirstChild()).toEqual({
            type: ApexNodeType.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
        });
        expect(apexClass.getAbsoluteLastChild()).toEqual({
            type: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass(String str)',
            memberOrder: 14,
            order: 2,
        });
        expect(apexClass.id).toMatch('id');
        expect(apexClass.name).toMatch('name');
        expect(apexClass.nodeType).toMatch(ApexNodeType.CLASS);
        const apexClass2 = new ApexClass(apexClass);
        expect(apexClass2.id).toMatch('id');
        expect(apexClass2.name).toMatch('name');
        expect(apexClass2.nodeType).toMatch(ApexNodeType.CLASS);
    });
});
