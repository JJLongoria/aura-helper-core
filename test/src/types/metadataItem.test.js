const MetadataItem = require('../../../src/types/metadataItem');

describe('Testing ./src/types/metadataItem.js', () => {
    test('Testing instance', () => {
        let item1 = new MetadataItem('Name', false, 'fields');
        expect(item1.name).toEqual('Name');
        const object = {
            name: 'Subject',
            checked: false,
            path: 'fields',
        };
        let item2 = new MetadataItem(object);
        expect(item2.name).toEqual('Subject');
    });
});