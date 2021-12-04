import { FileReader, MetadataItem, MetadataObject, MetadataType, PathUtils } from "../..";
import { Validator } from "../../utils";

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
    describe('Testing validateFolderPath method', () => {
        test('Testing with correct path', () => {
            const path = './src/test/assets/packages';
            const expected = PathUtils.getAbsolutePath('./src/test/assets/packages');
            expect(Validator.validateFolderPath(path, 'package')).toEqual(expected);
        });
        test('Testing with not exists path', () => {
            const path = './src/test/assetss';
            try {
                Validator.validateFolderPath(path, 'package');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toEqual('DirectoryNotFoundException');
            }
        });
        test('Testing with not folder path', () => {
            const path = './src/test/assets/packages/noPackageFile.json';
            try {
                Validator.validateFolderPath(path, 'package');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toEqual('InvalidDirectoryPathException');
            }
        });
    });
    describe('Testing validateFilePath method', () => {
        test('Testing with correct path', () => {
            const path = './src/test/assets/packages/noPackageFile.json';
            const expected = PathUtils.getAbsolutePath('./src/test/assets/packages/noPackageFile.json');
            expect(Validator.validateFilePath(path, 'file')).toEqual(expected);
        });
        test('Testing with not exists path', () => {
            const path = './src/test/assets/noPackageFiles.json';
            try {
                Validator.validateFilePath(path, 'package');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toEqual('FileNotFoundException');
            }
        });
        test('Testing with not file path', () => {
            const path = './src/test/assets/packages';
            try {
                Validator.validateFilePath(path, 'package');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toEqual('InvalidFilePathException');
            }
        });
    });
    describe('Testing validateFilePath method', () => {
        test('Testing validateMetadataJSON()', () => {
            const metadata: { [key: string]: MetadataType } = {};
            const mtType = new MetadataType('CustomField', false, "", "field");
            mtType.addChild(new MetadataObject('Account', false, ""));
            mtType.getChild('Account')?.addChild(new MetadataItem('Name', false, ""));
            metadata['CustomField'] = mtType;
            let content = Validator.validateMetadataJSON(metadata);
            content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile1.json');
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile2.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile3.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile4.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile5.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile6.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile7.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile8.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile9.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile10.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile11.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile12.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile13.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile14.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile15.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile16.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile17.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile18.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile19.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile20.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile21.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile22.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile23.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/metaFile24.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toMatch('WrongFormatException');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/noPackageFiles.json');
            } catch (error) {
                const errData = error as Error;
                expect(errData.message).toMatch('does not exists or not have access to it');
            }
            try {
                content = Validator.validateMetadataJSON('./src/test/assets/packages/package1.xml');
            } catch (error) {
                const errData = error as Error;
                expect(errData.message).toMatch('does not have a valid JSON content');
            }
        });
    });
    describe('Testing isInteger', () => {
        test('Testing with correct format', () => {
            expect(Validator.isInteger('4')).toBeTruthy();
        });
        test('Testing with wrong format', () => {
            expect(Validator.isInteger('4.5')).toBeFalsy();
        });
        test('Testing with not number format', () => {
            expect(Validator.isInteger('text')).toBeFalsy();
        });
    });
    describe('Testing validateJSONFile method', () => {
        test('Testing with correct path', () => {
            const content = JSON.parse(FileReader.readFileSync('./src/test/assets/packages/metaFile1.json'));
            const path = './src/test/assets/packages/metaFile1.json';
            expect(Validator.validateJSONFile(path, 'file')).toEqual(content);
        });
        test('Testing with not exists path', () => {
            const path = './src/test/assets/metaFile112.json';
            try {
                Validator.validateJSONFile(path, 'package');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toEqual('FileNotFoundException');
            }
        });
        test('Testing with not file path', () => {
            const path = './src/test/assets/packages';
            try {
                Validator.validateJSONFile(path, 'package');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toEqual('InvalidFilePathException');
            }
        });
        test('Testing with wrong format', () => {
            const path = './src/test/assets/packages/package1.xml';
            try {
                Validator.validateJSONFile(path, 'package');
            } catch (error) {
                const errData = error as Error;
                expect(errData.name).toEqual('WrongFormatException');
            }
        });
    });
});