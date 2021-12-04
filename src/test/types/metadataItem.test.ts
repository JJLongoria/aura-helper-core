import { MetadataItem } from "../../types";

describe('Testing ./src/types/metadataItem.js', () => {
    test('Testing instance', () => {
        let item1 = new MetadataItem('Name', false, 'fields');
        expect(item1.name).toEqual('Name');
        let item2 = new MetadataItem(item1);
        expect(item2.name).toEqual('Name');
    });
});