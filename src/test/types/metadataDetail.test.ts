import { MetadataDetail } from "../../types";

describe('Testing ./src/types/metadataDetail.js', () => {
    test('Testing instance', () => {
        let detail1 = new MetadataDetail('CustomObject', 'objects', 'object', true, true);
        expect(detail1.xmlName).toEqual('CustomObject');
        let detail2 = new MetadataDetail(detail1);
        expect(detail2.xmlName).toEqual('CustomObject');
    });
});