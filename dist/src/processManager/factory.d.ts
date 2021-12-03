import { Process } from "../types/process";
/**
 * Class with several static methods to create to many system processes to handle Aura Helper operations
 */
export declare class ProcessFactory {
    /**
     * Method to create the Update NPM process for Aura Helper CLI
     * @returns {Process} Returns the process to run
     *
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static updateNPM(): Process;
    /**
     * Method to create the SFDX process to list all Auth Salesforce org in the system
     * @returns {Process} Returns the process to run
     *
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static listAuthOurgs(): Process;
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
    static listMetadataTypes(usernameOrAlias: string, apiVersion?: string | number): Process;
    /**
     * Method to create the SFDX process to describe the selected Metadata Type from the org
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} metadataType Metadata Type to describe (CustomObject, CustomField, ApexClass...) (Required)
     * @param {string} folderName Folder name for Metadata Types with folders (Reports, Documents, EmailTemplates...)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static describeMetadataType(usernameOrAlias: string, metadataType: string, folderName: string, apiVersion?: string | number): Process;
    /**
     * Method to create the SFDX process to list the SObjects Available in the org
     * @param {string} usernameOrAlias Username or Org Alias to connect (Required)
     * @param {string} objectCategory Object Category to list (Standard, Custom or All). All by default (Optional)
     * @param {string | number} [apiVersion] API version number to use custom API version. By default use the latest API version (Optional)
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static listSObjects(usernameOrAlias: string, objectCategory: string, apiVersion?: string | number): Process;
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
    static getSObjectSchema(usernameOrAlias: string, sObject: string, apiVersion?: string | number): Process;
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
    static sourceRetrievePackage(usernameOrAlias: string, packageFile: string, projectFolder: string, apiVersion?: string | number, waitMinutes?: string | number): Process;
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
    static sourceValidatePackage(usernameOrAlias: string, packageFile: string, projectFolder: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process;
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
    static sourceDeployPackage(usernameOrAlias: string, packageFile: string, projectFolder: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process;
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
    static sourceDeploy(usernameOrAlias: string, projectFolder: string, types: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process;
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
    static sourceQuickDeploy(usernameOrAlias: string, deployId: string, projectFolder: string, apiVersion?: string | number): Process;
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
    static sourceDeployReport(usernameOrAlias: string, deployId: string, waitMinutes?: string | number): Process;
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
    static sourceCancelDeploy(usernameOrAlias: string, deployId: string, waitMinutes?: string | number): Process;
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
    static mdapiRetrievePackage(usernameOrAlias: string, packageFolder: string, projectFolder: string, targetDir: string, apiVersion?: string | number, waitMinutes?: string | number): Process;
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
    static mdapiValidatePackage(usernameOrAlias: string, packageFolder: string, projectFolder: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process;
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
    static mdapiDeployPackage(usernameOrAlias: string, packageFolder: string, projectFolder: string, testLevel?: string, runTests?: string, apiVersion?: string | number, waitMinutes?: string | number): Process;
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
    static mdapiQuickDeploy(usernameOrAlias: string, deployId: string, projectFolder: string, apiVersion?: string | number): Process;
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
    static mdapiRetrieveReport(usernameOrAlias: string, retrieveId: string, targetDir: string): Process;
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
    static mdapiDeployReport(usernameOrAlias: string, deployId: string, waitMinutes?: string | number): Process;
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
    static mdapiCancelDeploy(usernameOrAlias: string, deployId: string, waitMinutes?: string | number): Process;
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
    static query(usernameOrAlias: string, query: string, useToolingApi?: boolean): Process;
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
    static convertToSFDX(packageFolder: string, packageFile: string, targetFolder: string, apiVersion?: string | number): Process;
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
    static convertToMetadataAPI(packageFile: string, projectFolder: string, targetFolder: string, apiVersion?: string | number): Process;
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
    static createSFDXProject(projectName: string, projectFolder: string, template?: string, namespace?: string, withManifest?: boolean): Process;
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
    static setAuthOrg(usernameOrAlias: string, projectFolder: string): Process;
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
    static exportTreeData(usernameOrAlias: string, query: string, outputPath: string, prefix?: string, apiVersion?: string | number): Process;
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
    static importTreeData(usernameOrAlias: string, file: string, apiVersion?: string | number): Process;
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
    static bulkDelete(usernameOrAlias: string, csvFile: string, sObject: string, projectFolder: string, apiVersion?: string | number): Process;
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
    static executeApexAnonymous(usernameOrAlias: string, scriptFile: string, projectFolder: string, apiVersion?: string | number): Process;
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
    static gitGetConfig(projectFolder: string, configName?: string): Process;
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
    static gitLog(projectFolder: string, logPrettyLevel?: string): Process;
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
    static gitGetTags(projectFolder: string, sortField?: string): Process;
    /**
     * Method to create the GIT process to get all branches data
     * @param {string} projectFolder Project folder path (Required)
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static gitGetBranches(projectFolder: string): Process;
    /**
     * Method to create the GIT process to fetch git data
     * @param {string} projectFolder Project folder path (Required)
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static gitFetch(projectFolder: string): Process;
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
    static gitDiff(projectFolder: string, source: string, target?: string): Process;
    /**
     * Method to create the Aura Helper CLI process to compress all XML files from a folder (and subfolders)
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperCompressFolder(projectFolder: string, options: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to one file or a list of files
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperCompressFile(projectFolder: string, options: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to compare the the local project with the auth org
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static auraHelperOrgCompare(projectFolder: string, options: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to compare two orgs between
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static auraHelperOrgCompareBetween(projectFolder: string, options: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to describe metadata types from your local project or the auth org
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static auraHelperDescribeMetadata(projectFolder: string, options: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to Retrieve special types
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static auraHelperRetrieveSpecial(projectFolder: string, options: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to load user premissions from auth org
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
    static auraHelperLoadPermissions(projectFolder: string, options?: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to create the package file
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} options Options object to run the command (Required)
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     * @throws {WrongDatatypeException} If the api version is not a Number or String. Can be undefined
     */
    static auraHelperPackageGenerator(projectFolder: string, options: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to repair the project dependencies
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperRepairDependencies(projectFolder: string, options?: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to ignore metadata from your project
     * @param {string} projectFolder Project folder path (Required)
     * @param {any} [options] Options object to run the command
     * @param {(data: any) => void} [callback] Callback to handle progress
     *
     * @returns {Process} Returns the process to run
     *
     * @throws {DataRequiredException} Throws exception when required data is not provided
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperIgnore(projectFolder: string, options?: any, callback?: (data: any) => void): Process;
    /**
     * Method to create the Aura Helper CLI process to check if is installed
     * @returns {Process} Returns the process to run
     *
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static isAuraHelperInstalled(): Process;
    /**
     * Method to create the Aura Helper CLI process to get the Aura Helper CLI version
     * @returns {Process} Returns the process to run
     *
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperVersion(): Process;
    /**
     * Method to create the Aura Helper CLI process to update Aura Helper CLI
     * @returns {Process} Returns the process to run
     *
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperUpdate(): Process;
    /**
     * Method to create the NPM process to update Aura Helper CLI
     * @returns {Process} Returns the process to run
     *
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    static auraHelperUpdateNPM(): Process;
}
