import { ProcessFactory, ProcessHandler } from "../../processManager";
import { Process } from "../../types";

describe('Testing ./src/types/process.js', () => {
    test('Testing runProcess() OK', async () => {
        const process = new Process('cmd', ['/c', 'dir'], {cwd: './'});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        await ProcessHandler.runProcess(process);
        return;
    });
    test('Testing runProcess() OK', async () => {
        await ProcessHandler.runProcess(ProcessFactory.auraHelperDescribeMetadata('./src/test/assets/SFDXProject', {
            apiVersion: '50.0',
        }));
        return;
    }, 500000);
    test('Testing runProcess() Error Out', async () => {
        const process = new Process('cmd', ['/css', 'dir'], {});
        process.setProcessName('dir');
        process.setCWD('./');
        process.setJSONResponse(false);
        process.setMaxBuffer(50000);
        try{
            await ProcessHandler.runProcess(process);
        } catch(error){
            return;
        }        
    });
});