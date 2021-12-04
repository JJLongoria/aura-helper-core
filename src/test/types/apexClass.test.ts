import { ApexClass, ApexConstructor, ApexEnum, ApexInitializer, ApexInterface, ApexMethod, ApexProperty, ApexStaticConstructor, ApexVariable, SOQLQuery, Token } from '../../types';
import { ApexNodeTypes } from '../../values';

describe('Testing ./src/types/apexClass.js', () => {
    test('Testing instance', () => {
        const apexClass = new ApexClass('id', 'name', new Token('nodeType', 'text', 1, 0, false));
        expect(apexClass.getChildOrder('node')).toEqual(0);
        apexClass.addChild(new ApexInitializer('id', 'initializer'));
        expect(apexClass.getChildOrder(ApexNodeTypes.INITIALIZER)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeTypes.INITIALIZER)).toMatchObject({
            nodeType: ApexNodeTypes.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.INITIALIZER)).toMatchObject({
            nodeType: ApexNodeTypes.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild(new ApexStaticConstructor('id', 'staticConstructor'));
        expect(apexClass.getChildOrder(ApexNodeTypes.STATIC_CONSTRUCTOR)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeTypes.STATIC_CONSTRUCTOR)).toMatchObject({
            nodeType: ApexNodeTypes.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 2,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.STATIC_CONSTRUCTOR)).toMatchObject({
            nodeType: ApexNodeTypes.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 2,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild(new ApexClass('id', 'apexClass1'));
        apexClass.addChild(new ApexClass('id', 'apexClass2'));
        expect(apexClass.getChildOrder(ApexNodeTypes.CLASS)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeTypes.CLASS)).toMatchObject({
            nodeType: ApexNodeTypes.CLASS,
            name: 'apexClass2',
            memberOrder: 4,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.CLASS)).toMatchObject({
            nodeType: ApexNodeTypes.CLASS,
            name: 'apexClass1',
            memberOrder: 3,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild(new ApexInterface('id', 'apexInterface1'));
        apexClass.addChild(new ApexInterface('id', 'apexInterface2'));
        expect(apexClass.getChildOrder(ApexNodeTypes.INTERFACE)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeTypes.INTERFACE)).toMatchObject({
            nodeType: ApexNodeTypes.INTERFACE,
            name: 'apexInterface2',
            memberOrder: 6,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.INTERFACE)).toMatchObject({
            nodeType: ApexNodeTypes.INTERFACE,
            name: 'apexInterface1',
            memberOrder: 5,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild(new ApexEnum('id', 'apexEnum1'));
        apexClass.addChild(new ApexEnum('id', 'apexEnum2'));
        expect(apexClass.getChildOrder(ApexNodeTypes.ENUM)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeTypes.ENUM)).toMatchObject({
            nodeType: ApexNodeTypes.ENUM,
            name: 'apexEnum2',
            memberOrder: 8,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.ENUM)).toMatchObject({
            nodeType: ApexNodeTypes.ENUM,
            name: 'apexEnum1',
            memberOrder: 7,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild(new ApexVariable('id', 'apexVar'));
        expect(apexClass.getChildOrder(ApexNodeTypes.VARIABLE)).toEqual(1);
        expect(apexClass.getLastChild(ApexNodeTypes.VARIABLE)).toMatchObject({
            nodeType: ApexNodeTypes.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getLastChild(ApexNodeTypes.PROPERTY)).toMatchObject({
            nodeType: ApexNodeTypes.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.VARIABLE)).toMatchObject({
            nodeType: ApexNodeTypes.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.PROPERTY)).toMatchObject({
            nodeType: ApexNodeTypes.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        apexClass.addChild(new ApexProperty('id', 'apexProperty'));
        expect(apexClass.getChildOrder(ApexNodeTypes.PROPERTY)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeTypes.PROPERTY)).toMatchObject({
            nodeType: ApexNodeTypes.PROPERTY,
            name: 'apexProperty',
            memberOrder: 10,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getLastChild(ApexNodeTypes.VARIABLE)).toMatchObject({
            nodeType: ApexNodeTypes.PROPERTY,
            name: 'apexProperty',
            memberOrder: 10,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.VARIABLE)).toMatchObject({
            nodeType: ApexNodeTypes.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.PROPERTY)).toMatchObject({
            nodeType: ApexNodeTypes.VARIABLE,
            name: 'apexVar',
            memberOrder: 9,
            order: 1,
            parentName: "name"
        });
        const method1 = new ApexMethod('id', 'apexMethod1');
        method1.simplifiedSignature = 'apexMethod1()';
        const method2 = new ApexMethod('id', 'apexMethod2');
        method2.simplifiedSignature = 'apexMethod2()';
        apexClass.addChild(method1);
        apexClass.addChild(method2);
        expect(apexClass.getChildOrder(ApexNodeTypes.METHOD)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeTypes.METHOD)).toMatchObject({
            nodeType: ApexNodeTypes.METHOD,
            name: 'apexMethod2',
            simplifiedSignature: 'apexMethod2()',
            memberOrder: 12,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.METHOD)).toMatchObject({
            nodeType: ApexNodeTypes.METHOD,
            name: 'apexMethod1',
            simplifiedSignature: 'apexMethod1()',
            memberOrder: 11,
            order: 1,
            parentName: "name"
        });
        const constructor1 = new ApexConstructor('id', 'apexConstructor');
        constructor1.simplifiedSignature = 'apexClass()';
        const constructor2 = new ApexConstructor('id', 'apexConstructor');
        constructor2.simplifiedSignature = 'apexClass(String str)';
        apexClass.addChild(constructor1);
        apexClass.addChild(constructor2);
        expect(apexClass.getChildOrder(ApexNodeTypes.CONSTRUCTOR)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeTypes.CONSTRUCTOR)).toMatchObject({
            nodeType: ApexNodeTypes.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass(String str)',
            memberOrder: 14,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.CONSTRUCTOR)).toMatchObject({
            nodeType: ApexNodeTypes.CONSTRUCTOR,
            name: 'apexConstructor',
            simplifiedSignature: 'apexClass()',
            memberOrder: 13,
            order: 1,
            parentName: "name"
        });

        apexClass.addChild(new SOQLQuery('id', 'query1'));
        apexClass.addChild(new SOQLQuery('id', 'query2'));
        expect(apexClass.getChildOrder(ApexNodeTypes.SOQL)).toEqual(2);
        expect(apexClass.getLastChild(ApexNodeTypes.SOQL)).toMatchObject({
            nodeType: ApexNodeTypes.SOQL,
            name: 'query2',
            memberOrder: 16,
            order: 2,
            parentName: "name"
        });
        expect(apexClass.getFirstChild(ApexNodeTypes.SOQL)).toMatchObject({
            nodeType: ApexNodeTypes.SOQL,
            name: 'query1',
            memberOrder: 15,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "name"
        });
        expect(apexClass.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.SOQL,
            name: 'query2',
            memberOrder: 16,
            order: 2,
            parentName: "name"
        });
        apexClass.getOrderedChilds(ApexNodeTypes.INITIALIZER);
        apexClass.getOrderedChilds(ApexNodeTypes.STATIC_CONSTRUCTOR);
        apexClass.getOrderedChilds(ApexNodeTypes.CLASS);
        apexClass.getOrderedChilds(ApexNodeTypes.INTERFACE);
        apexClass.getOrderedChilds(ApexNodeTypes.ENUM);
        apexClass.getOrderedChilds(ApexNodeTypes.VARIABLE);
        apexClass.getOrderedChilds(ApexNodeTypes.METHOD);
        apexClass.getOrderedChilds(ApexNodeTypes.CONSTRUCTOR);
        apexClass.getOrderedChilds(ApexNodeTypes.SOQL);
        expect(apexClass.id).toMatch('id');
        expect(apexClass.name).toMatch('name');
        expect(apexClass.nodeType).toMatch(ApexNodeTypes.CLASS);
        const apexClass2 = new ApexClass(apexClass);
        expect(apexClass2.id).toMatch('id');
        expect(apexClass2.name).toMatch('name');
        expect(apexClass2.nodeType).toMatch(ApexNodeTypes.CLASS);

        const apexClass3 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass3.addChild(new ApexInitializer('id', 'initializer'));
        expect(apexClass3.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass3.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.INITIALIZER,
            name: 'initializer',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        const apexClass4 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass4.addChild(new ApexStaticConstructor('id', 'staticConstructor'));
        expect(apexClass4.getLastChild(ApexNodeTypes.STATIC_CONSTRUCTOR)).toMatchObject({
            nodeType: ApexNodeTypes.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass4.getFirstChild(ApexNodeTypes.STATIC_CONSTRUCTOR)).toMatchObject({
            nodeType: ApexNodeTypes.STATIC_CONSTRUCTOR,
            name: 'staticConstructor',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        
        const apexClass5 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass5.addChild(new ApexClass('id', 'apexClass1'));
        apexClass5.addChild(new ApexClass('id', 'apexClass2'));
        expect(apexClass5.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.CLASS,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass5.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.CLASS,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass6 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass6.addChild(new ApexInterface('id', 'apexClass1'));
        apexClass6.addChild(new ApexInterface('id', 'apexClass2'));
        expect(apexClass6.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.INTERFACE,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass6.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.INTERFACE,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass7 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass7.addChild(new ApexEnum('id', 'apexClass1'));
        apexClass7.addChild(new ApexEnum('id', 'apexClass2'));
        expect(apexClass7.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.ENUM,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass7.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.ENUM,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass8 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass8.addChild(new ApexVariable('id', 'apexClass1'));
        apexClass8.addChild(new ApexVariable('id', 'apexClass2'));
        expect(apexClass8.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.VARIABLE,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass8.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.VARIABLE,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass9 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass9.addChild(new ApexProperty('id', 'apexClass1'));
        apexClass9.addChild(new ApexProperty('id', 'apexClass2'));
        expect(apexClass9.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.PROPERTY,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass9.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.PROPERTY,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass10 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        const method3 = new ApexMethod('id', 'apexClass1');
        method3.simplifiedSignature = 'signature1()';
        const method4 = new ApexMethod('id', 'apexClass2');
        method4.simplifiedSignature = 'signature2()';
        apexClass10.addChild(method3);
        apexClass10.addChild(method4);
        expect(apexClass10.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.METHOD,
            name: 'apexClass1',
            simplifiedSignature: 'signature1()',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass10.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.METHOD,
            name: 'apexClass2',
            simplifiedSignature: 'signature2()',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass11 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        const constructor3 = new ApexConstructor('id', 'apexClass1');
        constructor3.simplifiedSignature = 'signature1()';
        const constructor4 = new ApexConstructor('id', 'apexClass2');
        constructor4.simplifiedSignature = 'signature2()';
        apexClass11.addChild(constructor3);
        apexClass11.addChild(constructor4);
        expect(apexClass11.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.CONSTRUCTOR,
            name: 'apexClass1',
            simplifiedSignature: 'signature1()',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass11.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.CONSTRUCTOR,
            name: 'apexClass2',
            simplifiedSignature: 'signature2()',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
        const apexClass12 = new ApexClass('apexClassId', 'ApexClass', new Token('nodeType', 'text', 1, 0, false));
        apexClass12.addChild(new SOQLQuery('id', 'apexClass1'));
        apexClass12.addChild(new SOQLQuery('id', 'apexClass2'));
        expect(apexClass12.getAbosluteFirstChild()).toMatchObject({
            nodeType: ApexNodeTypes.SOQL,
            name: 'apexClass1',
            memberOrder: 1,
            order: 1,
            parentName: "ApexClass"
        });
        expect(apexClass12.getAbsoluteLastChild()).toMatchObject({
            nodeType: ApexNodeTypes.SOQL,
            name: 'apexClass2',
            memberOrder: 2,
            order: 2,
            parentName: "ApexClass"
        });
    });
});
