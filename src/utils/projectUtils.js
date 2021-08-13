const FileReader = require('../fileSystem/fileReader');
const FileChecker = require('../fileSystem/fileChecker');
const Validator = require('../utils/validator');
const HTTPConnection = require('../utils/httpConnection');
const ProjectConfig = require('../types/projectConfig');

const PROJECT_FILE = 'sfdx-project.json';
const CONFIG_FILE = 'sfdx-config.json';
let projectConfig;
class ProjectUtils {

    static getProjectConfig(projectFolder) {
        if(!projectConfig){
            projectFolder = Validator.validateFolderPath(projectFolder, 'projectFolder');
            const filePath = projectFolder + '/' + PROJECT_FILE;
            if (FileChecker.isExists(filePath)) {
                projectConfig = new ProjectConfig(JSON.parse(FileReader.readFileSync(filePath)));
                return projectConfig;
            }
            return undefined;
        } else {
            return projectConfig;
        }
    }

    static getOrgAvailableVersions(instance) {
        return new Promise(async function (resolve) {
            let data = await HTTPConnection.getRequest(instance + '/services/data');
            resolve(JSON.parse(data));
        });
    }

    static getLastVersion(orgAvailableVersions) {
        let lastVersion = (orgAvailableVersions && orgAvailableVersions.length > 0) ? orgAvailableVersions[orgAvailableVersions.length - 1].version : undefined;
        return (lastVersion) ? parseInt(lastVersion) : lastVersion;
    }

    static getOrgAlias(projectFolder) {
        projectFolder = Validator.validateFolderPath(projectFolder, 'projectFolder');
        return JSON.parse(FileReader.readFileSync(projectFolder + '/.sfdx/' + CONFIG_FILE)).defaultusername;
    }

    static getOrgNamespace(projectFolder) {
        return ProjectUtils.getProjectConfig(projectFolder).namespace;
    }

    static getApiAsString(apiVersion) {
        if (typeof apiVersion === 'string') {
            apiVersion = parseFloat(apiVersion);
            apiVersion = Math.trunc(apiVersion);
            return apiVersion + '.0';
        } else if (typeof apiVersion === 'number') {
            apiVersion = Math.trunc(apiVersion);
            return apiVersion + '.0';
        } else {
            throw new Error('Wrong API Version Datatype. Expect string or number but get ' + typeof apiVersion + '. Value: ' + apiVersion);
        }
    }

    static getApiAsNumber(apiVersion) {
        if (typeof apiVersion === 'string') {
            apiVersion = parseFloat(apiVersion);
            return Math.trunc(apiVersion);
        } else if (typeof apiVersion === 'number') {
            return Math.trunc(apiVersion);
        } else {
            throw new Error('Wrong API Version Datatype. Expect string or number but get ' + typeof apiVersion + '. Value: ' + apiVersion);
        }
    }

}
module.exports = ProjectUtils;