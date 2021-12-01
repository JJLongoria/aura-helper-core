import { StrUtils } from "../utils/strUtils";
import { FileReader } from "./fileReader";
const path = require('path');
const os = require('os');
/**
 * Class with Utils methods for handle paths
 */
export class PathUtils {

    /**
     * Method to get the file name from a path
     * @param {string} filePath path to process
     * @param {string} [extension] file extension to remove
     * 
     * @returns {string} Returns the file name
     */
    static getBasename(filePath: string, extension?: string): string {
        return path.basename(filePath, extension);
    }

    /**
     * Method to get an absolute path from a file or folder path and replace \\ characters with /
     * @param {string} filePath path to process
     * 
     * @returns {string} Returns the absolute file path
     */
    static getAbsolutePath(filePath: string): string {
        return StrUtils.replace(path.resolve(filePath), '\\', '/');
    }

    /**
     * Method to get the directory name from a path
     * @param {string} filePath path to process
     * 
     * @returns {string} Return the folder name
     */
    static getDirname(filePath: string): string {
        return StrUtils.replace(path.dirname(filePath), '\\', '/');
    }

    /**
     * Method to get the Aura Helper CLI installed path
     * 
     * @returns {string[]} return an array with all app paths
     */
    static getAuraHelperCLIAppPath(): string[] {
        const result: string[] = [];
        const systemPaths = process.env.PATH!.split(';');
        if (systemPaths) {
            for (let systemPath of systemPaths) {
                systemPath = StrUtils.replace(systemPath, "\\", "/");
                try {
                    let files = FileReader.readDirSync(systemPath);
                    if (files.includes('aura-helper')) {
                        result.push(systemPath + '/aura-helper');
                    } else if (files.includes('aura-helper.exe')) {
                        result.push(systemPath + '/aura-helper.exe');
                    } else if (files.includes('ah')) {
                        result.push(systemPath + '/ah');
                    } else if (files.includes('ah.exe')) {
                        result.push(systemPath + '/ah.exe');
                    }
                } catch (error) {

                }
            }
        }
        return result;
    }

    /**
     * Method to get the Aura Helper CLI Temp Files path
     * 
     * @returns {string} Returns the Aura Helper CLI Temp files path
     */
    static getAuraHelperCLITempFilesPath(): string {
        return StrUtils.replace(os.homedir() + '/AuraHelperCLI/TempFiles', "\\", "/");
    }

    /**
     * Method to remove a file extension from file path
     * @param {string} file file to process
     * 
     * @returns {string} Returns the path without extension file
     */
    static removeFileExtension(file: string): string {
        return file.split('.').slice(0, -1).join('.');
    }
}