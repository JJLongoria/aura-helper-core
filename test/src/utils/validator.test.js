const Validator = require("../../../src/utils/Validator");

describe('Testing src/utils/validator.js', () => {
    describe('Testing isIPv4 method', () => {
        test('Testing with IPv4 correct format', () => {
            const ipv4 = '164.240.220.125';
            Validator.getIpv4Regexp();
            expect(Validator.isIPv4(ipv4)).toBeTruthy();
        });
        test('Testing with IPv4 wrong format', () => {
            const noyIpv4 = '2.257.568.456';
            Validator.getIpv4Regexp();
            expect(Validator.isIPv4(noyIpv4)).toBeFalsy();
        });
    });
    describe('Testing isIPv6 method', () => {
        test('Testing with IPv6 correct format', () => {
            const ipv6 = '2001:0db8:85a3:0000:1319:8a2e:0370:7344';
            Validator.getIpv6Regexp();
            expect(Validator.isIPv6(ipv6)).toBeTruthy();
        });
        test('Testing with IPv6 wrong format', () => {
            const noyIpv6 = '2001:0db8:85a3:0000:1319:8a2e:0370:7344.989a';
            Validator.getIpv6Regexp();
            expect(Validator.isIPv6(noyIpv6)).toBeFalsy();
        });
    });
});