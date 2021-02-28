const ProcessHandler = require('../../../src/processManager/processHandler');
const Process = require('../../../src/processManager/process');

describe('Testing ./src/types/process.js', () => {
    test('Testing runProcess() OK', async (done) => {
        const process = new Process('cmd', ['/c', 'dir'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        await ProcessHandler.runProcess(process);
        done();
    });
    test('Testing runProcess() Error Out', async (done) => {
        const process = new Process('cmd', ['/css', 'dir'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        try{
            await ProcessHandler.runProcess(process);
        } catch(error){
            done();
        }
        
    });
});