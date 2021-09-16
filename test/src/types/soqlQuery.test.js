const SOQLQuery = require('../../../src/types/soqlQuery');
const Token = require('../../../src/types/token');

describe('Testing ./src/types/soqlQuery.js', () => {
    test('Testing instance', () => {
        const soqlQuery = new SOQLQuery('id', 'Name', new Token('type', 'Name', 1, 0, false));
        expect(soqlQuery.name).toEqual('Name');
        const soqlQuery2 = new SOQLQuery(soqlQuery);
        expect(soqlQuery2.name).toEqual('Name');
    });
});