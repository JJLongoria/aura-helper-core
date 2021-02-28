const RecordType = require('../../../src/types/recordType');

describe('Testing ./src/types/recordType.js', () => {
    test('Testing instance', () => {
        const recordType = new RecordType('devName', 'name', false, false);
        recordType.setDeveloperName('devName');
        recordType.setName('name');
        recordType.setDefault(false);
        recordType.setPersonAccountDefault(false);
        expect(recordType.developerName).toEqual('devName');
        const recordType2 = new RecordType(recordType);
        expect(recordType2.developerName).toEqual('devName');
    });
});