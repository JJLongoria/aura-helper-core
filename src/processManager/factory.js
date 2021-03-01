const OSUtils = require('../utils/osUtils');
const BUFFER_SIZE = 1024 * 500000;
const Process = require('./Process');

class Command {

    constructor(command, name, jsonResponse) {
        this.jsonResponse = jsonResponse;
        this.name = name;
        this.createBaseCommand(command);
    }

    toProcess(options) {
        if (this.jsonResponse)
            this.commandArgs.push('--json');
        return new Process(this.command, this.commandArgs, options).setProcessName(this.name).setJSONResponse(this.jsonResponse);
    }

    createBaseCommand(command) {
        this.commandArgs = [];
        if (OSUtils.isWindows()) {
            this.command = 'cmd';
            this.commandArgs.push('/c');
            this.commandArgs.push(command);
        } else if (OSUtils.isLinux() || OSUtils.isMac()) {
            this.command = command;
        } else {
            throw new Error('Operative System Not Supported');
        }
    }

    addCommandArg(argName, argValue) {
        this.commandArgs.push(argName);
        if (argValue !== undefined)
            this.commandArgs.push(argValue);
    }
}

function listAuthOurgs() {
    let command = new Command('sfdx', 'force:auth:list', true);
    command.addCommandArg('force:auth:list');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function listMetadataTypes(usernameOrAlias, apiVersion) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    let command = new Command('sfdx', 'force:mdapi:describemetadata', true);
    command.addCommandArg('force:mdapi:describemetadata');
    command.addCommandArg('-u', usernameOrAlias);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function describeMetadataType(usernameOrAlias, metadataType, folderName, apiVersion) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (metadataType === undefined)
        throw new Error('metadataType is Required.');
    let command = new Command('sfdx', 'force:mdapi:listmetadata-' + metadataType, true);
    command.addCommandArg('force:mdapi:listmetadata');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-m', metadataType);
    if (folderName)
        command.addCommandArg('--folder', folderName);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function listSObjects(usernameOrAlias, objectCategory, apiVersion) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (!objectCategory)
        objectCategory = 'All';
    let command = new Command('sfdx', 'force:schema:sobject:list', true);
    command.addCommandArg('force:schema:sobject:list');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-c', objectCategory);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function getSObjectSchema(usernameOrAlias, sObject, apiVersion) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (sObject === undefined)
        throw new Error('sObject is Required.');
    let command = new Command('sfdx', 'force:schema:sobject:describe-' + sObject, false);
    command.addCommandArg('force:schema:sobject:describe');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-s', sObject);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function sourceRetrievePackage(usernameOrAlias, packageFile, projectFolder, apiVersion, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (packageFile === undefined)
        throw new Error('packageFile is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:source:retrieve-package', true);
    command.addCommandArg('force:source:retrieve');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-x', packageFile);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function sourceValidatePackage(usernameOrAlias, packageFile, testLevel, runTests, apiVersion, projectFolder, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (packageFile === undefined)
        throw new Error('packageFile is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:source:deploy-validatePackage', true);
    command.addCommandArg('force:source:deploy');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-x', packageFile);
    command.addCommandArg('--checkonly');
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    if (testLevel)
        command.addCommandArg('--testlevel', testLevel);
    if (runTests)
        command.addCommandArg('--runtests', runTests);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function sourceDeployPackage(usernameOrAlias, packageFile, testLevel, runTests, apiVersion, projectFolder, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (packageFile === undefined)
        throw new Error('packageFile is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:source:deploy-package', true);
    command.addCommandArg('force:source:deploy');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-x', packageFile);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    if (testLevel)
        command.addCommandArg('--testlevel', testLevel);
    if (runTests)
        command.addCommandArg('--runtests', runTests);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function sourceQuickDeploy(usernameOrAlias, deployId, apiVersion, projectFolder) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (deployId === undefined)
        throw new Error('deployId is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:source:deploy-quick', true);
    command.addCommandArg('force:source:deploy');
    command.addCommandArg('-u', usernameOrAlias);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    command.addCommandArg('--validateddeployrequestid', deployId);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function sourceDeployReport(usernameOrAlias, deployId, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (deployId === undefined)
        throw new Error('deployId is Required.');
    let command = new Command('sfdx', 'force:source:deploy:report', true);
    command.addCommandArg('force:source:deploy:report');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-i', deployId);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function sourceCancelDeploy(usernameOrAlias, deployId, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (deployId === undefined)
        throw new Error('deployId is Required.');
    let command = new Command('sfdx', 'force:source:deploy:cancel', true);
    command.addCommandArg('force:source:deploy:cancel');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-i', deployId);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function mdapiRetrievePackage(usernameOrAlias, packageFolder, apiVersion, targetDir, projectFolder, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (packageFolder === undefined)
        throw new Error('packageFolder is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:mdapi:retrieve-package', true);
    command.addCommandArg('force:mdapi:retrieve');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-d', packageFolder);
    command.addCommandArg('-r', targetDir);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function mdapiValidatePackage(usernameOrAlias, packageFolder, testLevel, runTests, apiVersion, projectFolder, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (packageFolder === undefined)
        throw new Error('packageFolder is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:mdapi:deploy-validatePackage', true);
    command.addCommandArg('force:mdapi:deploy');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-d', packageFolder);
    command.addCommandArg('--checkonly');
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    if (testLevel)
        command.addCommandArg('--testlevel', testLevel);
    if (runTests)
        command.addCommandArg('--runtests', runTests);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function mdapiDeployPackage(usernameOrAlias, packageFolder, testLevel, runTests, apiVersion, projectFolder, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (packageFolder === undefined)
        throw new Error('packageFolder is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:mdapi:deploy-package', true);
    command.addCommandArg('force:mdapi:deploy');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-d', packageFolder);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    if (testLevel)
        command.addCommandArg('--testlevel', testLevel);
    if (runTests)
        command.addCommandArg('--runtests', runTests);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function mdapiQuickDeploy(usernameOrAlias, deployId, apiVersion, projectFolder) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (deployId === undefined)
        throw new Error('deployId is Required.');
    let command = new Command('sfdx', 'force:mdapi:deploy-quick', true);
    command.addCommandArg('force:mdapi:deploy');
    command.addCommandArg('-u', usernameOrAlias);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    if (deployId)
        command.addCommandArg('--validateddeployrequestid', deployId);
    command.addCommandArg('-w', '-1');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function mdapiRetrieveReport(usernameOrAlias, retrieveId, targetDir) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (retrieveId === undefined)
        throw new Error('retrieveId is Required.');
    if (targetDir === undefined)
        throw new Error('targetDir is Required.');
    let command = new Command('sfdx', 'force:mdapi:retrieve:report', true);
    command.addCommandArg('force:mdapi:retrieve:report');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-i', retrieveId);
    command.addCommandArg('-r', targetDir);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function mdapiDeployReport(usernameOrAlias, deployId, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (deployId === undefined)
        throw new Error('deployId is Required.');
    let command = new Command('sfdx', 'force:mdapi:deploy:report', true);
    command.addCommandArg('force:mdapi:deploy:report');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-i', deployId);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function mdapiCancelDeploy(usernameOrAlias, deployId, waitMinutes) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (deployId === undefined)
        throw new Error('deployId is Required.');
    let command = new Command('sfdx', 'mdapi:deploy:cancel', true);
    command.addCommandArg('mdapi:deploy:cancel');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-i', deployId);
    command.addCommandArg('-w', (waitMinutes != undefined) ? waitMinutes.toString() : '33');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function query(usernameOrAlias, query, useToolingApi) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (query === undefined)
        throw new Error('query is Required.');
    let command = new Command('sfdx', 'force:data:soql:query-' + query, true);
    command.addCommandArg('force:data:soql:query');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-q', query);
    if (useToolingApi)
        command.addCommandArg('-t');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function convertToSFDX(packageFolder, packageFile, targetFolder, apiVersion) {
    if (packageFolder === undefined)
        throw new Error('packageFolder is Required.');
    if (packageFile === undefined)
        throw new Error('packageFile is Required.');
    if (targetFolder === undefined)
        throw new Error('targetFolder is Required.');
    let command = new Command('sfdx', 'force:mdapi:convert', false);
    command.addCommandArg('force:mdapi:convert');
    command.addCommandArg('-r', packageFolder);
    command.addCommandArg('--manifest', packageFile);
    command.addCommandArg('-d', targetFolder);
    if (apiVersion)
        command.addCommandArg('--apiversion', apiVersion);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function convertToMetadataAPI(packageFile, targetFolder, projectFolder) {
    if (packageFile === undefined)
        throw new Error('packageFile is Required.');
    if (targetFolder === undefined)
        throw new Error('targetFolder is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:source:convert', false);
    command.addCommandArg('force:source:convert');
    command.addCommandArg('--manifest', packageFile);
    command.addCommandArg('-d', targetFolder);
    command.addCommandArg('-r', projectFolder);
    command.addCommandArg('--loglevel', 'trace');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function createSFDXProject(projectName, projectFolder, template, namespace, withManifest) {
    if (projectName === undefined)
        throw new Error('projectName is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    withManifest = (withManifest === undefined) ? true : withManifest;
    let command = new Command('sfdx', 'force:project:create-' + projectName, true);
    command.addCommandArg('force:project:create');
    command.addCommandArg('-n', projectName);
    command.addCommandArg('-d', projectFolder);
    command.addCommandArg('--template', (template !== undefined) ? template : 'empty');
    if (namespace)
        command.addCommandArg('-s', namespace);
    if (withManifest)
        command.addCommandArg('--manifest');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function setAuthOrg(usernameOrAlias, projectFolder) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (projectFolder === undefined)
        throw new Error('projectFolder is Required.');
    let command = new Command('sfdx', 'force:config:set-defaultusername', true);
    command.addCommandArg('force:config:set');
    command.addCommandArg('defaultusername=' + usernameOrAlias);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE).setCWD(projectFolder);
}

function exportTreeData(usernameOrAlias, query, prefix, outputPath) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (query === undefined)
        throw new Error('query is Required.');
    if (outputPath === undefined)
        throw new Error('outputPath is Required.');
    let command = new Command('sfdx', 'force:data:tree:export-' + query, false);
    command.addCommandArg('force:data:tree:export');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-q', query);
    if (prefix)
        command.addCommandArg('-x', prefix);
    command.addCommandArg('-d', outputPath);
    command.addCommandArg('-p');
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function importTreeData(usernameOrAlias, file) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (file === undefined)
        throw new Error('file is Required.');
    let command = new Command('sfdx', 'force:data:tree:import-' + file, true);
    command.addCommandArg('force:data:tree:import');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-f', file);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function bulkDelete(usernameOrAlias, csvFile, sobject) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (csvFile === undefined)
        throw new Error('csvFile is Required.');
    if (sobject === undefined)
        throw new Error('sobject is Required.');
    let command = new Command('sfdx', 'force:data:bulk:delete-' + sobject, true);
    command.addCommandArg('force:data:bulk:delete');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-f', csvFile);
    command.addCommandArg('-s', sobject);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

function executeApexAnonymous(usernameOrAlias, scriptFile) {
    if (usernameOrAlias === undefined)
        throw new Error('usernameOrAlias is Required.');
    if (scriptFile === undefined)
        throw new Error('scriptFile is Required.');
    let command = new Command('sfdx', 'force:apex:execute-' + scriptFile, false);
    command.addCommandArg('force:apex:execute');
    command.addCommandArg('-u', usernameOrAlias);
    command.addCommandArg('-f', scriptFile);
    return command.toProcess().setMaxBuffer(BUFFER_SIZE);
}

module.exports = {
    listAuthOurgs: listAuthOurgs,
    listMetadataTypes: listMetadataTypes,
    describeMetadataType: describeMetadataType,
    listSObjects: listSObjects,
    getSObjectSchema: getSObjectSchema,
    sourceRetrievePackage: sourceRetrievePackage,
    sourceValidatePackage: sourceValidatePackage,
    sourceDeployPackage: sourceDeployPackage,
    sourceQuickDeploy: sourceQuickDeploy,
    sourceDeployReport: sourceDeployReport,
    sourceCancelDeploy: sourceCancelDeploy,
    mdapiRetrievePackage: mdapiRetrievePackage,
    mdapiValidatePackage: mdapiValidatePackage,
    mdapiDeployPackage: mdapiDeployPackage,
    mdapiQuickDeploy: mdapiQuickDeploy,
    mdapiRetrieveReport: mdapiRetrieveReport,
    mdapiDeployReport: mdapiDeployReport,
    mdapiCancelDeploy: mdapiCancelDeploy,
    query: query,
    convertToSFDX: convertToSFDX,
    convertToMetadataAPI: convertToMetadataAPI,
    createSFDXProject: createSFDXProject,
    setAuthOrg: setAuthOrg,
    exportTreeData: exportTreeData,
    importTreeData: importTreeData,
    bulkDelete: bulkDelete,
    executeApexAnonymous: executeApexAnonymous
}