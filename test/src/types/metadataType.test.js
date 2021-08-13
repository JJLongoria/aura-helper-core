const MetadataType = require('../../../src/types/metadataType');

describe('Testing ./src/types/metadataType.js', () => {
    test('Testing instance', () => {
        let type1 = new MetadataType('CustomObject', false, 'objects', 'object');
        expect(type1.name).toEqual('CustomObject');
        const object = {
            name: 'Layout',
            checked: false,
            path: 'layouts',
            suffix: 'layout',
            childs: {},
        };
        let type2 = new MetadataType(object);
        expect(type2.name).toEqual('Layout');
        type2.addChild('name', 'test');
        expect(type2.getChild('name').name).toEqual('test');
        expect(type2.childsCount()).toEqual(1);
        expect(type2.haveChilds()).toBeTruthy();
        expect(type2.allChildsChecked()).toBeFalsy();
    });
});