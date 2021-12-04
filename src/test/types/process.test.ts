import { Process } from "../../types";
import { ProcessEvent } from "../../values";

describe('Testing ./src/types/process.js', () => {
    test('Testing run() OK', async () => {
        const process = new Process('cmd', ['/c', 'dir'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        process.run(() => {

        });
    });
    test('Testing run() Error Out', async () => {
        const process = new Process('cmd', ['/css', 'dir'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        process.run(() => {
     
        });
    });
    test('Testing kill() ', async () => {
        const process = new Process('cmd', ['/c', 'force:mdapi:describemetadata', '-u', 'MyOrg', '--apiVersion', '50'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        process.run(() => {

        });
        process.kill();
    });
});