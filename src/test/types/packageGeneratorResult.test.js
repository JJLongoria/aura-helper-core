const PackageGeneratorResult = require('../../../src/types/packageGeneratorResult');

describe('Testing ./src/types/packageGeneratorResult.js', () => {
    test('Testing instance', () => {
        const generator = new PackageGeneratorResult('c:/folder/manifest/package.xml', 'c:/folder/manifest/destructiveChanges.xml', 'c:/folder/manifest/destructiveChangesPost.xml')
        expect(generator.package).toMatch('c:/folder/manifest/package.xml');
        expect(generator.destructiveChanges).toMatch('c:/folder/manifest/destructiveChanges.xml');
        expect(generator.destructiveChangesPost).toMatch('c:/folder/manifest/destructiveChangesPost.xml');
        const generator2 = new PackageGeneratorResult(generator);
        expect(generator2.package).toMatch('c:/folder/manifest/package.xml');
        expect(generator2.destructiveChanges).toMatch('c:/folder/manifest/destructiveChanges.xml');
        expect(generator2.destructiveChangesPost).toMatch('c:/folder/manifest/destructiveChangesPost.xml');
    });
});