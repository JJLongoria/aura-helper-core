import { ApexFormatterConfig } from "../../types";


describe('Testing ./src/types/apexEnum.js', () => {
    test('Testing instance', () => {
        const config2 = new ApexFormatterConfig({
            punctuation: ApexFormatterConfig.punctuationConfig(),
            operator: ApexFormatterConfig.operatorConfig(),
            classMembers: ApexFormatterConfig.classMembersConfig(),
            comment: ApexFormatterConfig.commentConfig(),
            query: ApexFormatterConfig.queryConfig(),
        });
        const configdefault = new ApexFormatterConfig();
        expect(config2).toEqual(configdefault);
    });
});