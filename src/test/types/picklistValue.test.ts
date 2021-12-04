import { PicklistValue } from "../../types";

describe('Testing ./src/types/picklistValue.js', () => {
    test('Testing instance', () => {
        const pickVal = new PicklistValue('name', 'value', false, true);
        pickVal.setLabel('name');
        pickVal.setValue('value');
        pickVal.setActive(true);
        pickVal.setDefaultValue(false);
        expect(pickVal.label).toEqual('name');
        const pickVal2 = new PicklistValue(pickVal);
        expect(pickVal2.label).toEqual('name');
    });
});