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
    test('Testing validateMetadataJSON()', () => {
        try {
            Validator.validateMetadataJSON([]);
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format file. The main object must be a JSON Object not an Array');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: undefined,
                    checked: undefined,
                    childs: undefined,
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. Missing name field');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: [],
                    checked: undefined,
                    childs: undefined,
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. name field must be a string, not a object');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: 'CustomObject',
                    checked: undefined,
                    childs: undefined,
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. Missing checked field');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: 'CustomObject',
                    checked: [],
                    childs: undefined,
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. checked field must be a boolean, not a object');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: 'CustomObject',
                    checked: false,
                    childs: undefined,
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. Missing childs field');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: 'CustomObject',
                    checked: false,
                    childs: [],
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. childs field must be a JSON Object, not an Array');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: 'CustomObject',
                    checked: false,
                    childs: '',
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. childs field must be a JSON Object, not a string');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: 'CustomObject',
                    checked: false,
                    childs: {},
                    path: []
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. path field must be a string, not a object');
        }
        try {
            Validator.validateMetadataJSON({
                CustomObject: {
                    name: 'CustomObject',
                    checked: false,
                    childs: {},
                    path: 'path',
                    suffix: [],
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Type with key CustomObject. suffix field must be a string, not a object');
        }
        Validator.validateMetadataJSON({
            CustomObject: {
                name: 'CustomObject',
                checked: false,
                childs: {},
                path: 'path',
                suffix: 'suffix',
            }
        });
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: undefined,
                            checked: undefined,
                            childs: undefined,
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Object with key Account (CustomField). Missing name field');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: [],
                            checked: undefined,
                            childs: undefined,
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Object with key Account (CustomField). name field must be a string, not a object');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: undefined,
                            childs: undefined,
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Object with key Account (CustomField). Missing checked field');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: [],
                            childs: undefined,
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Object with key Account (CustomField). checked field must be a boolean, not a object');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: undefined,
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Object with key Account (CustomField). Missing childs field');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: [],
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Object with key Account (CustomField). childs field must be a JSON Object, not an Array');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: '',
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Object with key Account (CustomField). childs field must be a JSON Object, not a string');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: {},
                            path: []
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Object with key Account (CustomField). path field must be a string, not a object');
        }
        Validator.validateMetadataJSON({
            CustomField: {
                name: 'CustomField',
                checked: false,
                childs: {
                    Account: {
                        name: 'Account',
                        checked: true,
                        childs: {},
                        path: 'path',
                    }
                },
            }
        });
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: {
                                Name: {
                                    name: undefined,
                                    chacked: undefined
                                }
                            },
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Item with key Name (CustomField: Account). Missing name field');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: {
                                Name: {
                                    name: [],
                                    chacked: undefined
                                }
                            },
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Item with key Name (CustomField: Account). name field must be a string, not a object');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: {
                                Name: {
                                    name: 'Name',
                                    chacked: undefined
                                }
                            },
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Item with key Name (CustomField: Account). Missing checked field');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: {
                                Name: {
                                    name: 'Name',
                                    checked: []
                                }
                            },
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Item with key Name (CustomField: Account). checked field must be a boolean, not a object');
        }
        try {
            Validator.validateMetadataJSON({
                CustomField: {
                    name: 'CustomField',
                    checked: false,
                    childs: {
                        Account: {
                            name: 'Account',
                            checked: true,
                            childs: {
                                Name: {
                                    name: 'Name',
                                    checked: false,
                                    path: []
                                }
                            },
                        }
                    },
                }
            });
        } catch (error) {
            expect(error.message).toMatch('Wrong JSON Format for Metadata Item with key Name (CustomField: Account). path field must be a string, not a object');
        }
        content = Validator.validateMetadataJSON('./test/assets/packages/noPackageFile.json');
        try {
            content = Validator.validateMetadataJSON(55);
        } catch (error) {
            expect(error.message).toMatch('Wrong file path');
        }
        try {
            content = Validator.validateMetadataJSON('./test/assets/packages/noPackageFiles.json');
        } catch (error) {
            expect(error.message).toMatch('does not exists or not have access to it');
        }
        try {
            content = Validator.validateMetadataJSON('./test/assets/packages/package1.xml');
        } catch (error) {
            expect(error.message).toMatch('does not have a valid JSON content');
        }
    })
});