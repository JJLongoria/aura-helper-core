import { OSUtils } from "../../utils";

describe('Testing ./src/utils/osUtils.js', () => {
    test('Testing isLinux()', () => {
        let result = OSUtils.isLinux();
        expect(result).toBeFalsy();
    });
    test('Testing isWindows()', () => {
        let result = OSUtils.isWindows();
        expect(result).toBeTruthy();
    });
    test('Testing isMac()', () => {
        let result = OSUtils.isMac();
        expect(result).toBeFalsy();
    });
    test('Testing getAvailableCPUs()', () => {
        let result = OSUtils.getAvailableCPUs();
        expect(result).toBeGreaterThan(1);
    });
});