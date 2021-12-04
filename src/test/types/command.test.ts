import { Command } from "../../types";


describe('Testing ./src/types/bulkStatus.js', () => {
    test('Testing instance', () => {
        const command = new Command('command', 'name', true);
        command.addCommandArg('test', 'args');
        command.addCommandArg('test');
        command.addCommandArg();
        expect(command.name).toEqual('name');
        const command2 = new Command(command);
        expect(command2.name).toEqual('name');
    });
});