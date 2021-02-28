const MetadataObject = require('../../../src/types/metadataObject');

describe('Testing ./src/types/metadataObject.js', () => {
    test('Testing instance', () => {
        let obj1 = new MetadataObject('CustomField', false, 'objects');
        expect(obj1.name).toEqual('CustomField');
        const object = {
            name: 'Account',
            checked: false,
            path: 'Account',
            childs: {},
        };
        let obj2 = new MetadataObject(object);
        expect(obj2.name).toEqual('Account');
        obj2.addChild('name', 'test');
        expect(obj2.getChild('name').name).toEqual('test');
        expect(obj2.childsCount()).toEqual(1);
        expect(obj2.haveChilds()).toBeTruthy();
    });
});