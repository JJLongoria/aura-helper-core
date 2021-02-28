const MetadataDetail = require('../../../src/types/metadataDetail');

describe('Testing ./src/types/metadataDetail.js', () => {
    test('Testing instance', () => {
        const object = {
            directoryName: 'layouts',
            inFolder: true,
            metaFile: true,
            suffix: 'layout',
            xmlName: 'Layout',
        };
        let detail1 = new MetadataDetail('CustomObject', 'objects', 'object', true, true);
        expect(detail1.xmlName).toEqual('CustomObject');
        let detail2 = new MetadataDetail(object);
        expect(detail2.xmlName).toEqual('Layout');
    });
});