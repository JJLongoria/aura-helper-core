const ApexFormatterConfig = require('../../../src/types/apexFormatterConfig');


describe('Testing ./src/types/apexEnum.js', () => {
    test('Testing instance', () => {
        const config1 = new ApexFormatterConfig({
            apexFormat: {
                punctuation: ApexFormatterConfig.punctuationConfig(),
                operator: ApexFormatterConfig.operatorConfig(),
                classMembers: ApexFormatterConfig.classMembersConfig(),
                comment: ApexFormatterConfig.commentConfig(),
                query: ApexFormatterConfig.queryConfig(),
            }
        });
        const config2 = new ApexFormatterConfig({
            punctuation: ApexFormatterConfig.punctuationConfig(),
            operator: ApexFormatterConfig.operatorConfig(),
            classMembers: ApexFormatterConfig.classMembersConfig(),
            comment: ApexFormatterConfig.commentConfig(),
            query: ApexFormatterConfig.queryConfig(),
        });
        const configdefault = new ApexFormatterConfig();
        expect(config1).toEqual(config2);
        expect(config1).toEqual(configdefault);
    });
});