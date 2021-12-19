import { AuraHelperCLICompareBetweenOptions, AuraHelperCLICompareOptions, AuraHelperCLICompressFolderOptions, AuraHelperCLICompressFileOptions, AuraHelperCLIDependenciesOptions, AuraHelperCLIDescribeOptions, AuraHelperCLIIgnoreOptions, AuraHelperCLIPackageGeneratorOptions, AuraHelperCLIPermissionsOptions, AuraHelperCLIRetrieveSpecialOptions, AuraHelperSFDXCompareBetweenOptions, AuraHelperSFDXCompareOptions, AuraHelperSFDXCompressFileOptions, AuraHelperSFDXDependenciesOptions, AuraHelperSFDXDescribeOptions, AuraHelperSFDXGitPackageOptions, AuraHelperSFDXIgnoreOptions, AuraHelperSFDXJSONPackageOptions, AuraHelperSFDXMergePackageOptions, AuraHelperSFDXPermissionsOptions, AuraHelperSFDXRetrieveSpecialOptions, AuraHelperSFDXCompressFolderOptions } from "..";
import { DataRequiredException, OSNotSupportedException, WrongDatatypeException } from "../exceptions";
import { Command } from "../types/command";
import { Process } from "../types/process";
import { ProjectUtils, Utils } from "../utils";

const BUFFER_SIZE = 1024 * 500000;

/**
 * Class with several static methods to create to many system processes to handle Aura Helper operations
 */
export class ProcessFactory {

    /**
     * Method to create the Update NPM process for Aura Helper CLI
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static updateNPM(): Process {
        const command = new Command('npm', 'npm-install', true);
        command.addCommandArg('install');
        command.addCommandArg('-g');
        command.addCommandArg('aura-helper-cli');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to list all Auth Salesforce org in the system
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static listAuthOurgs(): Process {
        const command = new Command('sfdx', 'force:auth:list', true);
        command.addCommandArg('force:auth:list');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to list all Metadata types available in a Salesforce organization.
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static listMetadataTypes(usernameOrAlias: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        const command = new Command('sfdx', 'force:mdapi:describemetadata', true);
        command.addCommandArg('force:mdapi:describemetadata');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to describe the selected Metadata Type from the org 
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} metadataType Metadata Type to describe (CustomObject, CustomField, ApexClass...) (Required)
     * @param {string} [folderName] Folder name for Metadata Types with folders (Reports, Documents, EmailTemplates...)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static describeMetadataType(usernameOrAlias: string, metadataType: string, folderName?: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(metadataType)) {
            throw new DataRequiredException('metadataType');
        }
        const command = new Command('sfdx', 'force:mdapi:listmetadata-' + metadataType, true);
        command.addCommandArg('force:mdapi:listmetadata');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-m', metadataType);
        command.addCommandArg((folderName !== undefined) ? '--folder' : undefined, (folderName !== undefined) ? folderName : undefined);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to list the SObjects Available in the org
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} [objectCategory] Object Category to list (Standard, Custom or All). All by default (Optional)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static listSObjects(usernameOrAlias: string, objectCategory?: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        const command = new Command('sfdx', 'force:schema:sobject:list', true);
        command.addCommandArg('force:schema:sobject:list');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-c', (objectCategory !== undefined) ? objectCategory : 'All');
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to get a Simplified SObject Schema Data (SObject Class from Types Module). 
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} sObject SObject name (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static getSObjectSchema(usernameOrAlias: string, sObject: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(sObject)) {
            throw new DataRequiredException('sObject');
        }
        const command = new Command('sfdx', 'force:schema:sobject:describe-' + sObject, false);
        command.addCommandArg('force:schema:sobject:describe');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-s', sObject);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to retrieve data to a project from a package file in a Source format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} packageFile Package file path (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static sourceRetrievePackage(usernameOrAlias: string, packageFile: string, projectFolder: string, apiVersion?: string | number, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(packageFile)) {
            throw new DataRequiredException('packageFile');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:source:retrieve-package', true);
        command.addCommandArg('force:source:retrieve');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-x', packageFile);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to Validate a package in a Source format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} packageFile Package file path (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} [testLevel] Test Level to execute test on validate (Optional)
     * @param {string} [runTests] Run tests mode to execute test on validate (Optional)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static sourceValidatePackage(usernameOrAlias: string, packageFile: string, projectFolder: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(packageFile)) {
            throw new DataRequiredException('packageFile');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:source:deploy-validatePackage', true);
        command.addCommandArg('force:source:deploy');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-x', packageFile);
        command.addCommandArg('--checkonly');
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg((testLevel !== undefined) ? '--testlevel' : undefined, (testLevel !== undefined) ? testLevel : undefined);
        command.addCommandArg((runTests !== undefined) ? '--runtests' : undefined, (runTests !== undefined) ? runTests : undefined);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to Deploy a package in a Source format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} packageFile Package file path (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} [testLevel] Test Level to execute test on validate (Optional)
     * @param {string} [runTests] Run tests mode to execute test on validate (Optional)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static sourceDeployPackage(usernameOrAlias: string, packageFile: string, projectFolder: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(packageFile)) {
            throw new DataRequiredException('packageFile');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:source:deploy-package', true);
        command.addCommandArg('force:source:deploy');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-x', packageFile);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg((testLevel !== undefined) ? '--testlevel' : undefined, (testLevel !== undefined) ? testLevel : undefined);
        command.addCommandArg((runTests !== undefined) ? '--runtests' : undefined, (runTests !== undefined) ? runTests : undefined);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to Deploy a package in a Source format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} types Types to deploy separated by commas
     * @param {string} [testLevel] Test Level to execute test on validate (Optional)
     * @param {string} [runTests] Run tests mode to execute test on validate (Optional)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static sourceDeploy(usernameOrAlias: string, projectFolder: string, types: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(types)) {
            throw new DataRequiredException('types');
        }
        const command = new Command('sfdx', 'force:source:deploy-types', true);
        command.addCommandArg('force:source:deploy');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-m', types);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg((testLevel !== undefined) ? '--testlevel' : undefined, (testLevel !== undefined) ? testLevel : undefined);
        command.addCommandArg((runTests !== undefined) ? '--runtests' : undefined, (runTests !== undefined) ? runTests : undefined);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to quick deploy a validated deployment in a Source format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} deployId Deployment Id (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional) 
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static sourceQuickDeploy(usernameOrAlias: string, deployId: string, projectFolder: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(deployId)) {
            throw new DataRequiredException('deployId');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:source:deploy-quick', true);
        command.addCommandArg('force:source:deploy');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--validateddeployrequestid', deployId);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to quick get an status of deployment in a Source format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} deployId Deployment Id (Required)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static sourceDeployReport(usernameOrAlias: string, deployId: string, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(deployId)) {
            throw new DataRequiredException('deployId');
        }
        const command = new Command('sfdx', 'force:source:deploy:report', true);
        command.addCommandArg('force:source:deploy:report');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-i', deployId);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to quick cancel a deployment in a Source format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} deployId Deployment Id (Required)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static sourceCancelDeploy(usernameOrAlias: string, deployId: string, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(deployId)) {
            throw new DataRequiredException('deployId');
        }
        const command = new Command('sfdx', 'force:source:deploy:cancel', true);
        command.addCommandArg('force:source:deploy:cancel');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-i', deployId);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to retrieve data to a project from a package file in a Metadata API format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} packageFolder Package folder path (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} targetDir The root of the directory structure where the retrieved .zip or metadata files are put. (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static mdapiRetrievePackage(usernameOrAlias: string, packageFolder: string, projectFolder: string, targetDir: string, apiVersion?: string | number, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(packageFolder)) {
            throw new DataRequiredException('packageFolder');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(targetDir)) {
            throw new DataRequiredException('targetDir');
        }
        const command = new Command('sfdx', 'force:mdapi:retrieve-package', true);
        command.addCommandArg('force:mdapi:retrieve');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-d', packageFolder);
        command.addCommandArg('-r', targetDir);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to Validate a package in a Metadata API format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} packageFolder Package folder path to deploy (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} [testLevel] Test Level to execute test on validate (Optional)
     * @param {string} [runTests] Run tests mode to execute test on validate (Optional)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static mdapiValidatePackage(usernameOrAlias: string, packageFolder: string, projectFolder: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(packageFolder)) {
            throw new DataRequiredException('packageFolder');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:mdapi:deploy-validatePackage', true);
        command.addCommandArg('force:mdapi:deploy');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-d', packageFolder);
        command.addCommandArg('--checkonly');
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg((testLevel !== undefined) ? '--testlevel' : undefined, (testLevel !== undefined) ? testLevel : undefined);
        command.addCommandArg((runTests !== undefined) ? '--runtests' : undefined, (runTests !== undefined) ? runTests : undefined);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to Deploy a package in a Metadata API format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} packageFolder Package folder path (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} [runTests] Run tests mode to execute test on validate (Optional)
     * @param {string} [testLevel] Test Level to execute test on validate (Optional
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static mdapiDeployPackage(usernameOrAlias: string, packageFolder: string, projectFolder: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(packageFolder)) {
            throw new DataRequiredException('packageFolder');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:mdapi:deploy-package', true);
        command.addCommandArg('force:mdapi:deploy');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-d', packageFolder);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg((testLevel !== undefined) ? '--testlevel' : undefined, (testLevel !== undefined) ? testLevel : undefined);
        command.addCommandArg((runTests !== undefined) ? '--runtests' : undefined, (runTests !== undefined) ? runTests : undefined);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to quick deploy a validated deployment in a Metadata API format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} deployId Deployment Id (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static mdapiQuickDeploy(usernameOrAlias: string, deployId: string, projectFolder: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(deployId)) {
            throw new DataRequiredException('deployId');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:mdapi:deploy-quick', true);
        command.addCommandArg('force:mdapi:deploy');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--validateddeployrequestid', deployId);
        command.addCommandArg('-w', '-1');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to get an status of a retrieve in a Metadata API format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} retrieveId Retrieve Id (Required)
     * @param {string} targetDir The root of the directory structure where the retrieved .zip or metadata files are put. (Required)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static mdapiRetrieveReport(usernameOrAlias: string, retrieveId: string, targetDir: string): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(retrieveId)) {
            throw new DataRequiredException('retrieveId');
        }
        if (Utils.isNull(targetDir)) {
            throw new DataRequiredException('targetDir');
        }
        const command = new Command('sfdx', 'force:mdapi:retrieve:report', true);
        command.addCommandArg('force:mdapi:retrieve:report');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-i', retrieveId);
        command.addCommandArg('-r', targetDir);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to get an status of a Deploy in a Metadata API format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} deployId Deployment Id (Required)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static mdapiDeployReport(usernameOrAlias: string, deployId: string, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(deployId)) {
            throw new DataRequiredException('deployId');
        }
        const command = new Command('sfdx', 'force:mdapi:deploy:report', true);
        command.addCommandArg('force:mdapi:deploy:report');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-i', deployId);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to quick cancel a deployment in a Metadata API format
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} deployId Deployment Id (Required)
     * @param {string | number} [waitMinutes] Minutes to wait until command end (33 By default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static mdapiCancelDeploy(usernameOrAlias: string, deployId: string, waitMinutes?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(deployId)) {
            throw new DataRequiredException('deployId');
        }
        const command = new Command('sfdx', 'mdapi:deploy:cancel', true);
        command.addCommandArg('mdapi:deploy:cancel');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-i', deployId);
        command.addCommandArg('-w', (waitMinutes !== undefined) ? waitMinutes.toString() : '33');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to execute a query in the auth org
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} query Query to execute (Required)
     * @param {boolean} [useToolingApi] True for use Tooling API, false in otherwise (false by default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static query(usernameOrAlias: string, query: string, useToolingApi?: boolean): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(query)) {
            throw new DataRequiredException('query');
        }
        const command = new Command('sfdx', 'force:data:soql:query-' + query, true);
        command.addCommandArg('force:data:soql:query');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-q', query);
        command.addCommandArg((useToolingApi) ? '-t' : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to Convert a Metadata API format project into Source format project
     * @param {string} packageFolder Package folder path (Required)
     * @param {string} packageFile Package file path (Required)
     * @param {string} targetFolder Target folder to save the converted project (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported" 
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined    
     */
    static convertToSFDX(packageFolder: string, packageFile: string, targetFolder: string, apiVersion?: string | number): Process {
        if (Utils.isNull(packageFolder)) {
            throw new DataRequiredException('packageFolder');
        }
        if (Utils.isNull(packageFile)) {
            throw new DataRequiredException('packageFile');
        }
        if (Utils.isNull(targetFolder)) {
            throw new DataRequiredException('targetFolder');
        }
        const command = new Command('sfdx', 'force:mdapi:convert', false);
        command.addCommandArg('force:mdapi:convert');
        command.addCommandArg('-r', packageFolder);
        command.addCommandArg('--manifest', packageFile);
        command.addCommandArg('-d', targetFolder);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to Convert a Source format project into Metadata API format project
     * @param {string} packageFile Package file path (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} targetFolder Target folder to save the converted project (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported" 
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined    
     */
    static convertToMetadataAPI(packageFile: string, projectFolder: string, targetFolder: string, apiVersion?: string | number): Process {
        if (Utils.isNull(packageFile)) {
            throw new DataRequiredException('packageFile');
        }
        if (Utils.isNull(targetFolder)) {
            throw new DataRequiredException('targetFolder');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:source:convert', false);
        command.addCommandArg('force:source:convert');
        command.addCommandArg('--manifest', packageFile);
        command.addCommandArg('-d', targetFolder);
        command.addCommandArg('-r', projectFolder);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--loglevel', 'trace');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to create a SFDX Project
     * @param {string} projectName Project Name to create (Required)
     * @param {string} projectFolder Folder to save the project (Required)
     * @param {string} [template] Template for create the project. Empty template bu default (Optional)
     * @param {string} [namespace] Org's namespace (Optional)
     * @param {boolean} [withManifest] true to create a project with manifest folder, false in otherwise. True by defult (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static createSFDXProject(projectName: string, projectFolder: string, template?: string, namespace?: string, withManifest?: boolean): Process {
        if (Utils.isNull(projectName)) {
            throw new DataRequiredException('projectName');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        withManifest = (withManifest !== undefined) ? withManifest : true;
        const command = new Command('sfdx', 'force:project:create-' + projectName, true);
        command.addCommandArg('force:project:create');
        command.addCommandArg('-n', projectName);
        command.addCommandArg('-d', projectFolder);
        command.addCommandArg('--template', (template !== undefined) ? template : 'empty');
        command.addCommandArg((namespace !== undefined) ? '-s' : undefined, (namespace !== undefined) ? namespace : undefined);
        command.addCommandArg((withManifest) ? '--manifest' : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process set an auth org in a project
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} projectFolder Project folder path (Required)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static setAuthOrg(usernameOrAlias: string, projectFolder: string): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:config:set-defaultusername', true);
        command.addCommandArg('force:config:set');
        command.addCommandArg('defaultusername=' + usernameOrAlias);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to create the SFDX command to export tree data from an org with a plan
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} query query to extract the data (accept subqueries as fields to exports related records) (Required) 
     * @param {string} outputPath Path to save the exported files (Required)
     * @param {string} [prefix] Prefix to add to file names (Optional)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run 
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"  
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined   
     */
    static exportTreeData(usernameOrAlias: string, query: string, outputPath: string, prefix?: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(query)) {
            throw new DataRequiredException('query');
        }
        if (Utils.isNull(outputPath)) {
            throw new DataRequiredException('outputPath');
        }
        const command = new Command('sfdx', 'force:data:tree:export-' + query, false);
        command.addCommandArg('force:data:tree:export');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-q', query);
        command.addCommandArg('-d', outputPath);
        command.addCommandArg((prefix !== undefined) ? '-x' : undefined, (prefix !== undefined) ? prefix : undefined);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('-p');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to import data extrated with tree export into an org
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} file File to import (Required) 
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run 
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"   
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined  
     */
    static importTreeData(usernameOrAlias: string, file: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(file)) {
            throw new DataRequiredException('file');
        }
        const command = new Command('sfdx', 'force:data:tree:import-' + file, true);
        command.addCommandArg('force:data:tree:import');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-f', file);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to execute a bulk delete on org
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} csvFile CSV File with the record Ids to delete (Required) 
     * @param {string} sObject SObject API Name to delete records (Required)
     * @param {string} projectFolder Project folder path (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined     
     */
    static bulkDelete(usernameOrAlias: string, csvFile: string, sObject: string, projectFolder: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(csvFile)) {
            throw new DataRequiredException('csvFile');
        }
        if (Utils.isNull(sObject)) {
            throw new DataRequiredException('sobject');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:data:bulk:delete-' + sObject, true);
        command.addCommandArg('force:data:bulk:delete');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-f', csvFile);
        command.addCommandArg('-s', sObject);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the SFDX process to execute an Apex Anonymous script file
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} scriptFile Apex script File to execute (Required) 
     * @param {string} projectFolder Project folder path (Required)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"  
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined   
     */
    static executeApexAnonymous(usernameOrAlias: string, scriptFile: string, projectFolder: string, apiVersion?: string | number): Process {
        if (Utils.isNull(usernameOrAlias)) {
            throw new DataRequiredException('usernameOrAlias');
        }
        if (Utils.isNull(scriptFile)) {
            throw new DataRequiredException('scriptFile');
        }
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'force:apex:execute-' + scriptFile, false);
        command.addCommandArg('force:apex:execute');
        command.addCommandArg('-u', usernameOrAlias);
        command.addCommandArg('-f', scriptFile);
        command.addCommandArg((apiVersion !== undefined) ? '--apiversion' : undefined, (apiVersion !== undefined) ? ProjectUtils.getApiAsString(apiVersion) : undefined);
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the GIT process to get any config value or list all configs
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} [configName] GIT config name (if not provided, list all configs) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static gitGetConfig(projectFolder: string, configName?: string): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('git', 'git:config', false);
        command.addCommandArg('config');
        command.addCommandArg((configName) ? configName : '--list');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the GIT process to execute a GIT Log with --pretty=medium option
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} [logPrettyLevel] GIT Log pretty level (Medium by default) (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static gitLog(projectFolder: string, logPrettyLevel?: string): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('git', 'git:log--pretty', false);
        command.addCommandArg('log');
        command.addCommandArg('--pretty=' + ((!logPrettyLevel) ? 'medium' : logPrettyLevel));
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the GIT process to get list all tags
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} [sortField] Sort field to sort tags (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static gitGetTags(projectFolder: string, sortField?: string): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('git', 'git:tag', false);
        command.addCommandArg('tag');
        command.addCommandArg('-l');
        command.addCommandArg('-n');
        command.addCommandArg(!Utils.isNull(sortField) ? '--sort=' + sortField : undefined);
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the GIT process to get all branches data
     * @param {string} projectFolder Project folder path (Required)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static gitGetBranches(projectFolder: string): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('git', 'git:branch-a', false);
        command.addCommandArg('branch');
        command.addCommandArg('-a');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the GIT process to fetch git data
     * @param {string} projectFolder Project folder path (Required)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static gitFetch(projectFolder: string): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('git', 'git:fetch', false);
        command.addCommandArg('fetch');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the GIT process to get diff data between two branches, tags, commits...
     * @param {string} projectFolder Project folder path (Required)
     * @param {string} source Source to get the diff (Required)
     * @param {string} [target] Target to get the diff. (If not select target, the process will execute the command "git diff source") (Optional)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static gitDiff(projectFolder: string, source: string, target?: string): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(source)) {
            throw new DataRequiredException('source');
        }
        const command = new Command('git', 'git:diff-' + source + '-' + target, false);
        command.addCommandArg('diff');
        command.addCommandArg(source);
        command.addCommandArg((target !== undefined) ? target : undefined);
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }


    /**
     * Method to create he GIT process to get all files under GIT control
     * @param {string} projectFolder Project folder path (Required)
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static gitListFiles(projectFolder: string): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('git', 'git ls-files', false);
        command.addCommandArg('ls-files');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
    }

    /**
     * Method to create the Aura Helper CLI process to compress all XML files from a folder (and subfolders)
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLICompressFolderOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperCompressFolder(projectFolder: string, options: AuraHelperCLICompressFolderOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.folder)) {
            throw new DataRequiredException('folder');
        }
        const command = new Command('aura-helper', 'ah:compress:folder-' + options.folder.join(','), true);
        command.addCommandArg('metadata:local:compress');
        command.addCommandArg('-d', '' + options.folder.join(',') + '');
        command.addCommandArg((options.sortOrder) ? '-s' : undefined, (options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to one file or a list of files
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLICompressFileOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperCompressFile(projectFolder: string, options: AuraHelperCLICompressFileOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.file)) {
            throw new DataRequiredException('file');
        }
        const command = new Command('aura-helper', 'ah:compress:file-' + options.file.join(','), true);
        command.addCommandArg('metadata:local:compress');
        command.addCommandArg('-f', '' + options.file.join(',') + '');
        command.addCommandArg((options.sortOrder) ? '-s' : undefined, (options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to compare the the local project with the auth org
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLICompareOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"  
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static auraHelperOrgCompare(projectFolder: string, options: AuraHelperCLICompareOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('aura-helper', 'ah:org:compare', true);
        command.addCommandArg('metadata:org:compare');
        command.addCommandArg((options && options.apiVersion) ? '--api-version' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to compare two orgs between
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLICompareBetweenOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static auraHelperOrgCompareBetween(projectFolder: string, options: AuraHelperCLICompareBetweenOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.target)) {
            throw new DataRequiredException('target');
        }
        const command = new Command('aura-helper', 'ah:org:compare:between', true);
        command.addCommandArg('metadata:org:compare:between');
        command.addCommandArg((options.source) ? '-s' : undefined, (options.source) ? options.source : undefined);
        command.addCommandArg('-t', options.target);
        command.addCommandArg((options.apiVersion) ? '--api-version' : undefined, (options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to describe metadata types from your local project or the auth org
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLIDescribeOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"    
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined 
     */
    static auraHelperDescribeMetadata(projectFolder: string, options: AuraHelperCLIDescribeOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        const command = new Command('aura-helper', 'ah:metadata:' + ((options.fromOrg) ? 'org' : 'local') + ':describe', true);
        command.addCommandArg('metadata:' + ((options.fromOrg) ? 'org' : 'local') + ':describe');
        command.addCommandArg((options.types) ? '-t' : '-a', (options.types) ? options.types.join(',') : undefined);
        command.addCommandArg((options.fromOrg && !options.downloadAll) ? '-o' : undefined);
        command.addCommandArg((options.apiVersion) ? '--api-version' : undefined, (options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options.groupGlobalActions) ? '--group' : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to Retrieve special types
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLIRetrieveSpecialOptions} [options] Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"    
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined 
     */
    static auraHelperRetrieveSpecial(projectFolder: string, options: AuraHelperCLIRetrieveSpecialOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('aura-helper', 'ah:metadata:' + ((options && options.fromOrg) ? 'org' : 'local') + ':retrieve:special', true);
        command.addCommandArg('metadata:' + ((options && options.fromOrg) ? 'org' : 'local') + ':retrieve:special');
        command.addCommandArg((options && options.types) ? '-t' : '-a', (options && options.types) ? options.types.join(',') : undefined);
        command.addCommandArg((options && options.fromOrg && !options.downloadAll) ? '-o' : undefined);
        command.addCommandArg((options && options.includeOrg) ? '-i' : undefined);
        command.addCommandArg((options && options.compress) ? '-c' : undefined);
        command.addCommandArg((options && options.sortOrder) ? '-s' : undefined, (options && options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg((options && options.apiVersion) ? '--api-version' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to load user premissions from auth org
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLIPermissionsOptions} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported" 
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined    
     */
    static auraHelperLoadPermissions(projectFolder: string, options?: AuraHelperCLIPermissionsOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('aura-helper', 'ah:metadata:org:permissions', true);
        command.addCommandArg('metadata:org:permissions');
        command.addCommandArg((options && options.apiVersion) ? '--api-version' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to create the package file
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLIPackageGeneratorOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"   
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined  
     */
    static auraHelperPackageGenerator(projectFolder: string, options: AuraHelperCLIPackageGeneratorOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.createFrom)) {
            throw new DataRequiredException('createFrom');
        }
        if (Utils.isNull(options.source)) {
            throw new DataRequiredException('source');
        }
        const command = new Command('aura-helper', 'ah:metadata:local:package:create', true);
        command.addCommandArg('metadata:local:package:create');
        command.addCommandArg((options.outputPath) ? '-o' : undefined, (options.outputPath) ? options.outputPath : undefined);
        command.addCommandArg((options.createType) ? '-c' : undefined, (options.createType) ? options.createType : undefined);
        command.addCommandArg('-f', options.createFrom);
        command.addCommandArg((options.deleteOrder) ? '-d' : undefined, (options.deleteOrder) ? options.deleteOrder : undefined);
        command.addCommandArg('-s', options.source);
        command.addCommandArg((options.target) ? '-t' : undefined, (options.target) ? options.target : undefined);
        command.addCommandArg((options.raw) ? '-r' : undefined);
        command.addCommandArg((options.apiVersion) ? '--api-version' : undefined, (options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options.useIgnore) ? '-u' : undefined);
        command.addCommandArg((options.ignoreFile) ? '-i' : undefined, (options.ignoreFile) ? options.ignoreFile : undefined);
        command.addCommandArg((options.explicit) ? '-e' : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to repair the project dependencies
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLIDependenciesOptions} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperRepairDependencies(projectFolder: string, options?: AuraHelperCLIDependenciesOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('aura-helper', 'ah:metadata:local:repair', true);
        command.addCommandArg('metadata:local:repair');
        command.addCommandArg((options && options.types) ? '-t' : '-a', (options && options.types) ? options.types.join(',') : undefined);
        command.addCommandArg((options && options.onlyCheck) ? '-o' : undefined);
        command.addCommandArg((options && options.compress) ? '-c' : undefined);
        command.addCommandArg((options && options.sortOrder) ? '-s' : undefined, (options && options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg((options && options.useIgnore) ? '-u' : undefined);
        command.addCommandArg((options && options.ignoreFile) ? '-i' : undefined, (options && options.ignoreFile) ? options.ignoreFile : undefined);
        command.addCommandArg((options && options.outputFile) ? '--output-file' : undefined, (options && options.outputFile) ? options.outputFile : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to ignore metadata from your project
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLIIgnoreOptions} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperIgnore(projectFolder: string, options?: AuraHelperCLIIgnoreOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('aura-helper', 'ah:metadata:local:ignore', true);
        command.addCommandArg('metadata:local:ignore');
        command.addCommandArg((options && options.types) ? '-t' : '-a', (options && options.types) ? options.types.join(',') : undefined);
        command.addCommandArg((options && options.ignoreFile) ? '-i' : undefined, (options && options.ignoreFile) ? options.ignoreFile : undefined);
        command.addCommandArg((options && options.compress) ? '-c' : undefined);
        command.addCommandArg((options && options.sortOrder) ? '-s' : undefined, (options && options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg('-p', 'json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper CLI process to check if is installed
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static isAuraHelperInstalled(): Process {
        const command = new Command('aura-helper', 'ah:aura-helper', false);
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the Aura Helper CLI process to get the Aura Helper CLI version
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperVersion(): Process {
        const command = new Command('aura-helper', 'ah:version', false);
        command.addCommandArg('version');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the Aura Helper CLI process to update Aura Helper CLI
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperUpdate(): Process {
        const command = new Command('aura-helper', 'ah:update', false);
        command.addCommandArg('update');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the Aura Helper SFDX process to compress all XML files from a folder (and subfolders)
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXCompressFolderOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
     static auraHelperSFDXCompressFolder(projectFolder: string, options: AuraHelperSFDXCompressFolderOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.folder)) {
            throw new DataRequiredException('folder');
        }
        const command = new Command('sfdx', 'ah:compress:folder-' + options.folder, true);
        command.addCommandArg('ah:metadata:local:compress');
        command.addCommandArg('--directory', '' + options.folder.join(',') + '');
        command.addCommandArg((options.sortOrder) ? '--sortorder' : undefined, (options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to one file or a list of files
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXCompressFileOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
     static auraHelperSFDXCompressFile(projectFolder: string, options: AuraHelperSFDXCompressFileOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.file)) {
            throw new DataRequiredException('file');
        }
        const command = new Command('sfdx', 'ah:metadata:local:compress:file-' + options.file, true);
        command.addCommandArg('ah:metadata:local:compress');
        command.addCommandArg('--file', '' + options.file.join(',') + '');
        command.addCommandArg((options.sortOrder) ? '--sortorder' : undefined, (options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
    * Method to create the Aura Helper SFDX process to compare the the local project with the auth org
    * @param {string} projectFolder Project folder path (Required)
    * @param {AuraHelperSFDXCompareOptions} options Options object to run the command (Required)
    * @param {(data: any) => void} [callback] Callback to handle progress
    * 
    * @returns {Process} Returns the process to run
    * 
    * @throws {DataRequiredException} Throws exception when required data is not provided
    * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"  
    * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
    */
    static auraHelperSFDXOrgCompare(projectFolder: string, options: AuraHelperSFDXCompareOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'ah:metadata:org:compare', true);
        command.addCommandArg('ah:metadata:org:compare');
        command.addCommandArg((options && options.apiVersion) ? '--apiversion' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.outputFile) ? '--outputfile' : undefined, (options && options.outputFile) ? options.outputFile : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        if (options && options.csv) {
            command.addCommandArg((options && options.csv) ? '--csv' : undefined);
        } else {
            command.addCommandArg('--json');
        }
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to compare two orgs between
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperCLICompareBetweenOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static auraHelperSFDXOrgCompareBetween(projectFolder: string, options: AuraHelperSFDXCompareBetweenOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.target)) {
            throw new DataRequiredException('target');
        }
        const command = new Command('sfdx', 'ah:metadata:org:between:compare', true);
        command.addCommandArg('ah:metadata:org:between:compare');
        command.addCommandArg((options.source) ? '--source' : undefined, (options.source) ? options.source : undefined);
        command.addCommandArg('--target', options.target);
        command.addCommandArg((options.apiVersion) ? '--apiversion' : undefined, (options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.outputFile) ? '--outputfile' : undefined, (options && options.outputFile) ? options.outputFile : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        if (options && options.csv) {
            command.addCommandArg((options && options.csv) ? '--csv' : undefined);
        } else {
            command.addCommandArg('--json');
        }
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to describe metadata types from your local project or the auth org
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXDescribeOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"    
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined 
     */
    static auraHelperSFDXDescribeMetadata(projectFolder: string, options: AuraHelperSFDXDescribeOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        const command = new Command('sfdx', 'ah:metadata:' + ((options.fromOrg) ? 'org' : 'local') + ':describe', true);
        command.addCommandArg('ah:metadata:' + ((options.fromOrg) ? 'org' : 'local') + ':describe');
        command.addCommandArg((options.types) ? '--type' : '--all', (options.types) ? options.types.join(',') : undefined);
        command.addCommandArg((options.fromOrg && options.downloadAll) ? '--downloadall' : undefined);
        command.addCommandArg((options.apiVersion) ? '--apiversion' : undefined, (options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg((options.groupGlobalActions) ? '--group' : undefined);
        command.addCommandArg((options && options.outputFile) ? '--outputfile' : undefined, (options && options.outputFile) ? options.outputFile : undefined);
        if (options && options.csv) {
            command.addCommandArg((options && options.csv) ? '--csv' : undefined);
        } else {
            command.addCommandArg('--json');
        }
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to Retrieve special types
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXRetrieveSpecialOptions} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"    
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined 
     */
    static auraHelperSFDXRetrieveSpecial(projectFolder: string, options: AuraHelperSFDXRetrieveSpecialOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        const command = new Command('sfdx', 'ah:metadata:' + ((options.fromOrg) ? 'org' : 'local') + ':special:retrieve', true);
        command.addCommandArg('ah:metadata:' + ((options.fromOrg) ? 'org' : 'local') + ':special:retrieve');
        command.addCommandArg((options.types) ? '--type' : '--all', (options.types) ? options.types.join(',') : undefined);
        command.addCommandArg((options.fromOrg && options.downloadAll) ? '--downloadall' : undefined);
        command.addCommandArg((options.includeOrg) ? '--includeorg' : undefined);
        command.addCommandArg((options.compress) ? '--compress' : undefined);
        command.addCommandArg((options.sortOrder) ? '--sortorder' : undefined, (options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg((options.apiVersion) ? '--apiversion' : undefined, (options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to load user premissions from auth org
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported" 
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined    
     */
    static auraHelperSFDXLoadPermissions(projectFolder: string, options?: AuraHelperSFDXPermissionsOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'ah:metadata:org:permissions:get', true);
        command.addCommandArg('ah:metadata:org:permissions:get');
        command.addCommandArg((options && options.apiVersion) ? '--apiversion' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.outputFile) ? '--outputfile' : undefined, (options && options.outputFile) ? options.outputFile : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        if (options && options.csv) {
            command.addCommandArg((options && options.csv) ? '--csv' : undefined);
        } else {
            command.addCommandArg('--json');
        }
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to create packages from GIT
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXGitPackageOptions} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperSFDXGitPackage(projectFolder: string, options?: AuraHelperSFDXGitPackageOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'ah:package:git:create', true);
        command.addCommandArg('ah:package:git:create');
        command.addCommandArg((options && options.source) ? '--source' : undefined, (options && options.source) ? options.source : undefined);
        command.addCommandArg((options && options.target) ? '--target' : undefined, (options && options.target) ? options.target : undefined);
        command.addCommandArg((options && options.fileType) ? '--filetype' : undefined, (options && options.fileType) ? options.fileType : undefined);
        command.addCommandArg((options && options.deleteBefore) ? '--deletebefore' : undefined);
        command.addCommandArg((options && options.useIgnore) ? '--useignore' : undefined);
        command.addCommandArg((options && options.ignoreFile) ? '--ignorefile' : undefined, (options && options.ignoreFile) ? options.ignoreFile : undefined);
        command.addCommandArg((options && options.ignoreDestructive) ? '--ignoredestructive' : undefined);
        command.addCommandArg((options && options.destructiveIgnoreFile) ? '--destructiveignorefile' : undefined, (options && options.destructiveIgnoreFile) ? options.destructiveIgnoreFile : undefined);
        command.addCommandArg((options && options.raw) ? '---raw' : undefined);
        command.addCommandArg((options && options.outputPath) ? '--outputpath' : undefined, (options && options.outputPath) ? options.outputPath : undefined);
        command.addCommandArg((options && options.apiVersion) ? '--apiversion' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to create packages from JSON
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXJSONPackageOptions} options Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperSFDXJSONPackage(projectFolder: string, options: AuraHelperSFDXJSONPackageOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.source)) {
            throw new DataRequiredException('source');
        }
        const command = new Command('sfdx', 'ah:package:json:create', true);
        command.addCommandArg('ah:package:json:create');
        command.addCommandArg((options && options.source) ? '--source' : undefined, (options && options.source) ? options.source : undefined);
        command.addCommandArg((options && options.toDelete) ? '--todelete' : undefined);
        command.addCommandArg((options && options.deleteBefore) ? '--deletebefore' : undefined);
        command.addCommandArg((options && options.useIgnore) ? '--useignore' : undefined);
        command.addCommandArg((options && options.ignoreFile) ? '--ignorefile' : undefined, (options && options.ignoreFile) ? options.ignoreFile : undefined);
        command.addCommandArg((options && options.wilcards) ? '--wildcards' : undefined);
        command.addCommandArg((options && options.outputPath) ? '--outputpath' : undefined, (options && options.outputPath) ? options.outputPath : undefined);
        command.addCommandArg((options && options.apiVersion) ? '--apiversion' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to merge package files
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXMergePackageOptions} options Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperSFDXMergePackage(projectFolder: string, options: AuraHelperSFDXMergePackageOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        if (Utils.isNull(options)) {
            throw new DataRequiredException('options');
        }
        if (Utils.isNull(options.source)) {
            throw new DataRequiredException('source');
        }
        const command = new Command('sfdx', 'ah:package:merge', true);
        command.addCommandArg('ah:package:merge');
        command.addCommandArg((options && options.source) ? '-s' : undefined, (options && options.source) ? options.source : undefined);
        command.addCommandArg((options && options.bytype) ? '--bytype' : undefined);
        command.addCommandArg((options && options.deleteBefore) ? '--deletebefore' : undefined);
        command.addCommandArg((options && options.onlyPackage) ? '--onlypackage' : undefined);
        command.addCommandArg((options && options.onlyDestructive) ? '--onlydestructive' : undefined);
        command.addCommandArg((options && options.fullPackage) ? '--fullpackage' : undefined);
        command.addCommandArg((options && options.fullDestructive) ? '--fulldestructive' : undefined);
        command.addCommandArg((options && options.useIgnore) ? '--useignore' : undefined);
        command.addCommandArg((options && options.ignoreFile) ? '--ignorefile' : undefined, (options && options.ignoreFile) ? options.ignoreFile : undefined);
        command.addCommandArg((options && options.ignoreDestructive) ? '--ignoredestructive' : undefined);
        command.addCommandArg((options && options.destructiveIgnoreFile) ? '--destructiveignorefile' : undefined, (options && options.destructiveIgnoreFile) ? options.destructiveIgnoreFile : undefined);
        command.addCommandArg((options && options.outputPath) ? '--outputpath' : undefined, (options && options.outputPath) ? options.outputPath : undefined);
        command.addCommandArg((options && options.apiVersion) ? '--apiversion' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to repair the project dependencies
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXDependenciesOptions} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperSFDXRepairDependencies(projectFolder: string, options?: AuraHelperSFDXDependenciesOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'ah:metadata:local:repair', true);
        command.addCommandArg('ah:metadata:local:repair');
        command.addCommandArg((options && options.types) ? '--type' : '--all', (options && options.types) ? options.types.join(',') : undefined);
        command.addCommandArg((options && options.onlyCheck) ? '--onlycheck' : undefined);
        command.addCommandArg((options && options.compress) ? '--compress' : undefined);
        command.addCommandArg((options && options.sortOrder) ? '--sortorder' : undefined, (options && options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg((options && options.useIgnore) ? '--useignore' : undefined);
        command.addCommandArg((options && options.ignoreFile) ? '--ignorefile' : undefined, (options && options.ignoreFile) ? options.ignoreFile : undefined);
        command.addCommandArg((options && options.outputFile) ? '--outputfile' : undefined, (options && options.outputFile) ? options.outputFile : undefined);
        command.addCommandArg((options && options.apiVersion) ? '--apiversion' : undefined, (options && options.apiVersion) ? ProjectUtils.getApiAsString(options.apiVersion) : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to ignore metadata from your project
     * @param {string} projectFolder Project folder path (Required)
     * @param {AuraHelperSFDXIgnoreOptions} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     * 
     * @returns {Process} Returns the process to run
     * 
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperSFDXIgnore(projectFolder: string, options?: AuraHelperSFDXIgnoreOptions, callback?: (data: any) => void): Process {
        if (Utils.isNull(projectFolder)) {
            throw new DataRequiredException('projectFolder');
        }
        const command = new Command('sfdx', 'ah:metadata:local:ignore', true);
        command.addCommandArg('ah:metadata:local:ignore');
        command.addCommandArg((options && options.types) ? '--type' : '--all', (options && options.types) ? options.types.join(',') : undefined);
        command.addCommandArg((options && options.ignoreFile) ? '--ignorefile' : undefined, (options && options.ignoreFile) ? options.ignoreFile : undefined);
        command.addCommandArg((options && options.compress) ? '--compress' : undefined);
        command.addCommandArg((options && options.sortOrder) ? '--sortorder' : undefined, (options && options.sortOrder) ? options.sortOrder : undefined);
        command.addCommandArg((options && options.logLevel) ? '--loglevel' : undefined, (options && options.logLevel) ? options.logLevel : undefined);
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder).setOutputCallback(callback).setHandleProgress(true);
    }

    /**
     * Method to create the Aura Helper SFDX process to get the Aura Helper SFDX version
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static getSFDXPlugins(): Process {
        const command = new Command('sfdx', 'sfdx-plugins', false);
        command.addCommandArg('plugins');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }


    /**
     * Method to create the Aura Helper SFDX process to get the Aura Helper SFDX version
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperSFDXVersion(): Process {
        const command = new Command('sfdx', 'ah:version', true);
        command.addCommandArg('ah:version');
        command.addCommandArg('--json');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the SFDX process to update Aura Helper SFDX
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperSFDXUpdate(): Process {
        const command = new Command('echo', 'sfdx-plugins:install', false);
        command.addCommandArg("y");
        command.addCommandArg('|');
        command.addCommandArg('sfdx');
        command.addCommandArg('plugins:install', 'aura-helper-sfdx');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

    /**
     * Method to create the NPM process to update Aura Helper CLI
     * @returns {Process} Returns the process to run
     * 
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"     
     */
    static auraHelperUpdateNPM(): Process {
        const command = new Command('npm', 'npm:update', false);
        command.addCommandArg('update');
        command.addCommandArg('-g');
        command.addCommandArg('aura-helper-cli');
        return command.toProcess().setMaxBuffer(BUFFER_SIZE);
    }

}