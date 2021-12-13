import { SObjectChildRelationship } from "../../types";

describe('Testing ./src/types/SObjectChildRelationship.js', () => {
    test('Testing instance', () => {
        const sObjectField = new SObjectChildRelationship('name', 'Name', 'string');
        expect(sObjectField.relationshipName).toEqual('name');
        const sObjectField2 = new SObjectChildRelationship(sObjectField);
        expect(sObjectField2.relationshipName).toEqual('name');
    });
});