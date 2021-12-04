import { ApexFormatterConfig } from "../../types";


describe('Testing ./src/types/apexEnum.js', () => {
    test('Testing instance', () => {
        const config1 = new ApexFormatterConfig({
            punctuation: ApexFormatterConfig.punctuationConfig(),
            operator: ApexFormatterConfig.operatorConfig(),
            classMembers: ApexFormatterConfig.classMembersConfig(),
            comment: ApexFormatterConfig.commentConfig(),
            query: ApexFormatterConfig.queryConfig(),
        });
        const config2 = new ApexFormatterConfig(config1);
        const configdefault = new ApexFormatterConfig();
        expect(config2).toEqual(configdefault);
    });
});