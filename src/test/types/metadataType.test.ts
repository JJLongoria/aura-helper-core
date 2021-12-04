import { MetadataObject, MetadataType } from "../../types";

describe('Testing ./src/types/metadataType.js', () => {
    test('Testing instance', () => {
        let type1 = new MetadataType('CustomObject', false, 'objects', 'object');
        expect(type1.name).toEqual('CustomObject');
        let type2 = new MetadataType(type1);
        expect(type2.name).toEqual('CustomObject');
        type2.addChild('name', new MetadataObject('test'));
        expect(type2.getChild('name').name).toEqual('test');
        expect(type2.childsCount()).toEqual(1);
        expect(type2.hasChilds()).toBeTruthy();
        expect(type2.allChildsChecked()).toBeFalsy();
    });
});