const Process = require('../../../src/types/process');
const ProcessEvent = require('../../../src/values/processEvent');

describe('Testing ./src/types/process.js', () => {
    test('Testing run() OK', async (done) => {
        const process = new Process('cmd', ['/c', 'dir'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        process.run((event, data) => {
            if(event === ProcessEvent.END)
                done();
        });
    });
    test('Testing run() Error Out', async (done) => {
        const process = new Process('cmd', ['/css', 'dir'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        process.run((event, data) => {
            if(event === ProcessEvent.END)
                done();
        });
    });
    test('Testing kill() ', async (done) => {
        const process = new Process('cmd', ['/c', 'force:mdapi:describemetadata', '-u', 'MyOrg', '--apiVersion', '50'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        process.run((event, data) => {
            if(event === ProcessEvent.END)
                done();
        });
        process.kill();
    });
});