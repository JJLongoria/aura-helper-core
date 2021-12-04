import { XMLDependencyField } from "../../types";

describe('Testing ./src/types/xmlDataControlledField.js', () => {
    test('Testing instance', () => {
        const dependencyField = new XMLDependencyField('field', 'valueToCompare', 'allowedValues', 'forbidenValues');
        dependencyField.setMinApi(10);
        dependencyField.setMaxApi(50);
        expect(dependencyField.field).toMatch('field');
        expect(dependencyField.valueToCompare).toEqual(['valueToCompare']);
        expect(dependencyField.allowedValues).toEqual(['allowedValues']);
        expect(dependencyField.forbidenValues).toEqual(['forbidenValues']);
        const dependencyField2 = new XMLDependencyField(dependencyField);
        expect(dependencyField2.field).toMatch('field');
        expect(dependencyField2.valueToCompare).toEqual(['valueToCompare']);
        expect(dependencyField2.allowedValues).toEqual(['allowedValues']);
        expect(dependencyField2.forbidenValues).toEqual(['forbidenValues']);
    });
});