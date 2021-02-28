const XMLUtils = require('../../../src/utils/xmlUtils');
const DataTypes = require('../../../src/values/datatypes');

describe('Testing ./src/utils/utils.js', () => {
    test('Testing createXMLFile()', () => {
        const typeDefinition = {
            field1: {
                datatype: DataTypes.ARRAY
            },
            field2: {
                datatype: DataTypes.OBJECT
            },
            field3: {
                datatype: DataTypes.STRING
            }
        };
        let fileSchema = XMLUtils.createXMLFile(typeDefinition);
        expect(fileSchema.field1).toEqual([]);
        expect(fileSchema.field2).toEqual({});
        expect(fileSchema.field3).toEqual(undefined);
    });
    test('Testing prepareXML()', () => {
        const typeDefinition = {
            classAccesses: {
                datatype: DataTypes.ARRAY,
                fields: {
                    name: {
                        datatype: DataTypes.STRING,
                    },
                    enabled: {
                        datatype: DataTypes.BOOLEAN,
                    }
                }
            },
            description: {
                datatype: DataTypes.STRING
            }
        };
        let source = {
            description: 'Desc',
            classAccesses: [
                {
                    name: 'apexClass',
                    enabled: true
                }
            ],
            '@attrs': {
                attrs1: 'attrsValue'
            }
        };
        let target = XMLUtils.createXMLFile(typeDefinition);
        let result = XMLUtils.prepareXML(source, target);
        expect(result.description).toEqual('Desc');
        expect(result['@attrs']).toEqual({ attrs1: 'attrsValue' });
        delete source['@attrs'];
        target = XMLUtils.createXMLFile(typeDefinition);
        result = XMLUtils.prepareXML(source, target);
        expect(result.description).toEqual('Desc');
        expect(result['@attrs']).toEqual(undefined);
    });
    test('Testing forceArray()', () => {
        let result = XMLUtils.forceArray('hi');
        expect(result).toEqual(['hi']);
        result = XMLUtils.forceArray(['hi']);
        expect(result).toEqual(['hi']);
        result = XMLUtils.forceArray(undefined);
        expect(result).toEqual([]);
    });
    test('Testing sort()', () => {
        let arrayToOrder = ['c', 'b', 'a'];
        XMLUtils.sort(arrayToOrder);
        expect(arrayToOrder).toEqual(['a', 'b', 'c']);
        arrayToOrder = [{ name: 'testC', value: 'valueC' }, { name: 'testB', value: 'valueB' }];
        XMLUtils.sort(arrayToOrder, ['name', 'value']);
        expect(arrayToOrder).toEqual([{ name: 'testB', value: 'valueB' }, { name: 'testC', value: 'valueC' }]);
        arrayToOrder = [{ name: 'testC', value: 'valueC' }, { name: 'testB', value: 'valueB' }];
        XMLUtils.sort(arrayToOrder, ['name', 'values']);
        expect(arrayToOrder).toEqual([{ name: 'testB', value: 'valueB' }, { name: 'testC', value: 'valueC' }]);
        let notArrayToOrder = { name: 'testB', value: 'valueB' };
        XMLUtils.sort(notArrayToOrder);
        expect(notArrayToOrder).toEqual({ name: 'testB', value: 'valueB' });
    });
    test('Testing getAttributes()', () => {
        let obj = {
            '@attrs': {
                name: 'value'
            }
        };
        let result = XMLUtils.getAttributes(obj);
        expect(result).toEqual(['name="value"']);
    });
    test('Testing getText()', () => {
        let obj = {
            '#text': 'value'
        };
        let result = XMLUtils.getText(obj);
        expect(result).toEqual('value');
        delete obj['#text'];
        result = XMLUtils.getText(obj);
        expect(result).toEqual(undefined);
    });
    test('Testing getTabs()', () => {
        let result = XMLUtils.getTabs(2);
        expect(result).toEqual('\t\t');
    });
});