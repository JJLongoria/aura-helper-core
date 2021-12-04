import { MetadataItem, MetadataObject } from "../../types";

describe('Testing ./src/types/metadataObject.js', () => {
    test('Testing instance', () => {
        let obj1 = new MetadataObject('CustomField', false, 'objects');
        expect(obj1.name).toEqual('CustomField');
        let obj2 = new MetadataObject(obj1);
        expect(obj2.name).toEqual('CustomField');
        obj2.addChild('name', new MetadataItem('test'));
        expect(obj2.getChild('name').name).toEqual('test');
        expect(obj2.childsCount()).toEqual(1);
        expect(obj2.hasChilds()).toBeTruthy();
        expect(obj2.allChildsChecked()).toBeFalsy();
    });
});