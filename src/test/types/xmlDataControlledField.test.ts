import { XMLDataControlledField } from "../../types";

describe('Testing ./src/types/xmlDataControlledField.js', () => {
    test('Testing instance', () => {
        const controllerField = new XMLDataControlledField('key', 'valueToCompare', 'valueToSet');
        controllerField.setMinApi(10);
        controllerField.setMaxApi(50);
        expect(controllerField.field).toMatch('key');
        expect(controllerField.valueToCompare).toMatch('valueToCompare');
        expect(controllerField.valueToSet).toMatch('valueToSet');
        const controllerField2 = new XMLDataControlledField(controllerField);
        expect(controllerField2.field).toMatch('key');
        expect(controllerField2.valueToCompare).toMatch('valueToCompare');
        expect(controllerField2.valueToSet).toMatch('valueToSet');
    });
});