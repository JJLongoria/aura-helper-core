const ApexClass = require('../../../src/types/apexClass');
const Token = require('../../../src/types/token');
const ApexNodeType = require('../../../src/values/apexNodeTypes');

describe('Testing ./src/types/apexClass.js', () => {
    test('Testing instance', () => {
        const apexClass = new ApexClass('id', 'name', new Token('nodeType', 'text', 1, 0, false));
        expect(apexClass.getChildOrder('node')).toEqual(0);
        apexClass.addChild({
            nodeType: ApexNodeType.INITIALIZER,
            name: 'initializer'
        });
        expect(apexClass.getChildOrder(ApexNodeType.INITIALIZER)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeType.INITIALIZER)).toEqual({
            nodeType: ApexNodeType.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.INITIALIZER)).toEqual({
            nodeType: ApexNodeType.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild({
            nodeType: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor'
        });
        expect(apexClass.getChildOrder(ApexNodeType.STATIC_CONSTRUCTOR)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeType.STATIC_CONSTRUCTOR)).toEqual({
            nodeType: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 2,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.STATIC_CONSTRUCTOR)).toEqual({
            nodeType: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 2,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild({
            nodeType: ApexNodeType.CLASS,
            name: 'apexClass1'
        });
        apexClass.addChild({
            nodeType: ApexNodeType.CLASS,
            name: 'apexClass2'
        });
        expect(apexClass.getChildOrder(ApexNodeType.CLASS)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.CLASS)).toEqual({
            nodeType: ApexNodeType.CLASS,
            name: 'apexClass2',
            memberOrder: 4,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.CLASS)).toEqual({
            nodeType: ApexNodeType.CLASS,
            name: 'apexClass1',
            memberOrder: 3,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild({
            nodeType: ApexNodeType.INTERFACE,
            name: 'apexInterface1'
        });
        apexClass.addChild({
            nodeType: ApexNodeType.INTERFACE,
            name: 'apexInterface2'
        });
        expect(apexClass.getChildOrder(ApexNodeType.INTERFACE)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.INTERFACE)).toEqual({
            nodeType: ApexNodeType.INTERFACE,
            name: 'apexInterface2',
            memberOrder: 6,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.INTERFACE)).toEqual({
            nodeType: ApexNodeType.INTERFACE,
            name: 'apexInterface1',
            memberOrder: 5,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild({
            nodeType: ApexNodeType.ENUM,
            name: 'apexEnum1'
        });
        apexClass.addChild({
            nodeType: ApexNodeType.ENUM,
            name: 'apexEnum2'
        });
        expect(apexClass.getChildOrder(ApexNodeType.ENUM)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.ENUM)).toEqual({
            nodeType: ApexNodeType.ENUM,
            name: 'apexEnum2',
            memberOrder: 8,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.ENUM)).toEqual({
            nodeType: ApexNodeType.ENUM,
            name: 'apexEnum1',
            memberOrder: 7,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar'
        });
        expect(apexClass.getChildOrder(ApexNodeType.VARIABLE)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeType.VARIABLE)).toEqual({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getLastChild(ApexNodeType.PROPERTY)).toEqual({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.VARIABLE)).toEqual({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.PROPERTY)).toEqual({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild({
            nodeType: ApexNodeType.PROPERTY,
            name: 'apexProperty'
        });
        expect(apexClass.getChildOrder(ApexNodeType.PROPERTY)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.PROPERTY)).toEqual({
            nodeType: ApexNodeType.PROPERTY,
            name: 'apexProperty',
            memberOrder: 10,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getLastChild(ApexNodeType.VARIABLE)).toEqual({
            nodeType: ApexNodeType.PROPERTY,
            name: 'apexProperty',
            memberOrder: 10,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.VARIABLE)).toEqual({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.PROPERTY)).toEqual({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild({
            nodeType: ApexNodeType.METHOD,
            name: 'apexMethod1',
            simplifiedSignature: 'apexMethod1()',
        });
        apexClass.addChild({
            nodeType: ApexNodeType.METHOD,
            name: 'apexMethod2',
            simplifiedSignature: 'apexMethod2()',
        });
        expect(apexClass.getChildOrder(ApexNodeType.METHOD)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.METHOD)).toEqual({
            nodeType: ApexNodeType.METHOD,
            name: 'apexMethod2',
            simplifiedSignature: 'apexMethod2()',
            memberOrder: 12,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.METHOD)).toEqual({
            nodeType: ApexNodeType.METHOD,
            name: 'apexMethod1',
            simplifiedSignature: 'apexMethod1()',
            memberOrder: 11,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild({
            nodeType: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass()',
        });
        apexClass.addChild({
            nodeType: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass(String str)',
        });
        expect(apexClass.getChildOrder(ApexNodeType.CONSTRUCTOR)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.CONSTRUCTOR)).toEqual({
            nodeType: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass(String str)',
            memberOrder: 14,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.CONSTRUCTOR)).toEqual({
            nodeType: ApexNodeType.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass()',
            memberOrder: 13,
            order: 1,
            parentName: "name"
        });

        apexClass.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'query1',
        });
        apexClass.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'query2',
        });
        expect(apexClass.getChildOrder(ApexNodeType.SOQL)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeType.SOQL)).toEqual({
            nodeType: ApexNodeType.SOQL,
            name: 'query2',
            memberOrder: 16,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeType.SOQL)).toEqual({
            nodeType: ApexNodeType.SOQL,
            name: 'query1',
            memberOrder: 15,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.SOQL,
            name: 'query2',
            memberOrder: 16,
            order: 2,
            parentName: "name"
        });
        apexClass.getOrderedChilds(ApexNodeType.INITIALIZER);
        apexClass.getOrderedChilds(ApexNodeType.STATIC_CONSTRUCTOR);
        apexClass.getOrderedChilds(ApexNodeType.CLASS);
        apexClass.getOrderedChilds(ApexNodeType.INTERFACE);
        apexClass.getOrderedChilds(ApexNodeType.ENUM);
        apexClass.getOrderedChilds(ApexNodeType.VARIABLE);
        apexClass.getOrderedChilds(ApexNodeType.METHOD);
        apexClass.getOrderedChilds(ApexNodeType.CONSTRUCTOR);
        apexClass.getOrderedChilds(ApexNodeType.SOQL);
        expect(apexClass.id).toMatch('id');
        expect(apexClass.name).toMatch('name');
        expect(apexClass.nodeType).toMatch(ApexNodeType.CLASS);
        const apexClass2 = new ApexClass(apexClass);
        expect(apexClass2.id).toMatch('id');
        expect(apexClass2.name).toMatch('name');
        expect(apexClass2.nodeType).toMatch(ApexNodeType.CLASS);

        const apexClass3 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass3.addChild({
            nodeType: ApexNodeType.INITIALIZER,
            name: 'initializer'
        });
        expect(apexClass3.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass3.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        const apexClass4 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass4.addChild({
            nodeType: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor'
        });
        expect(apexClass4.getLastChild(ApexNodeType.STATIC_CONSTRUCTOR)).toEqual({
            nodeType: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass4.getFirstChild(ApexNodeType.STATIC_CONSTRUCTOR)).toEqual({
            nodeType: ApexNodeType.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        
        const apexClass5 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass5.addChild();
        apexClass5.addChild({
            nodeType: ApexNodeType.CLASS,
            name: 'apexClass1'
        });
        apexClass5.addChild({
            nodeType: ApexNodeType.CLASS,
            name: 'apexClass2'
        });
        expect(apexClass5.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.CLASS,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass5.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.CLASS,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass6 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass6.addChild({
            nodeType: ApexNodeType.INTERFACE,
            name: 'apexClass1'
        });
        apexClass6.addChild({
            nodeType: ApexNodeType.INTERFACE,
            name: 'apexClass2'
        });
        expect(apexClass6.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.INTERFACE,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass6.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.INTERFACE,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass7 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass7.addChild({
            nodeType: ApexNodeType.ENUM,
            name: 'apexClass1'
        });
        apexClass7.addChild({
            nodeType: ApexNodeType.ENUM,
            name: 'apexClass2'
        });
        expect(apexClass7.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.ENUM,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass7.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.ENUM,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass8 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass8.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexClass1'
        });
        apexClass8.addChild({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexClass2'
        });
        expect(apexClass8.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass8.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.VARIABLE,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass9 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass9.addChild({
            nodeType: ApexNodeType.PROPERTY,
            name: 'apexClass1'
        });
        apexClass9.addChild({
            nodeType: ApexNodeType.PROPERTY,
            name: 'apexClass2'
        });
        expect(apexClass9.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.PROPERTY,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass9.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.PROPERTY,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass10 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass10.addChild({
            nodeType: ApexNodeType.METHOD,
            name: 'apexClass1',
            simplifiedSignature: 'signature1()'
        });
        apexClass10.addChild({
            nodeType: ApexNodeType.METHOD,
            name: 'apexClass2',
            simplifiedSignature: 'signature2()'
        });
        expect(apexClass10.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.METHOD,
            name: 'apexClass1',
            simplifiedSignature: 'signature1()',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass10.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.METHOD,
            name: 'apexClass2',
            simplifiedSignature: 'signature2()',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass11 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass11.addChild({
            nodeType: ApexNodeType.CONSTRUCTOR,
            name: 'apexClass1',
            simplifiedSignature: 'signature1()'
        });
        apexClass11.addChild({
            nodeType: ApexNodeType.CONSTRUCTOR,
            name: 'apexClass2',
            simplifiedSignature: 'signature2()'
        });
        expect(apexClass11.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.CONSTRUCTOR,
            name: 'apexClass1',
            simplifiedSignature: 'signature1()',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass11.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.CONSTRUCTOR,
            name: 'apexClass2',
            simplifiedSignature: 'signature2()',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass12 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass12.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'apexClass1'
        });
        apexClass12.addChild({
            nodeType: ApexNodeType.SOQL,
            name: 'apexClass2'
        });
        expect(apexClass12.getAbosluteFirstChild()).toEqual({
            nodeType: ApexNodeType.SOQL,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass12.getAbsoluteLastChild()).toEqual({
            nodeType: ApexNodeType.SOQL,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
    });
});
