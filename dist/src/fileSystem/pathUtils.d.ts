/**
 * Class with Utils methods for handle paths
 */
export declare class PathUtils {
    /**
     * Method to get the file name from a path
     * @param {string} filePath path to process
     * @param {string} [extension] file extension to remove
     *
     * @returns {string} Returns the file name
     */
    static getBasename(filePath: string, extension?: string): string;
    /**
     * Method to get an absolute path from a file or folder path and replace \\ characters with /
     * @param {string} filePath path to process
     *
     * @returns {string} Returns the absolute file path
     */
    static getAbsolutePath(filePath: string): string;
    /**
     * Method to get the directory name from a path
     * @param {string} filePath path to process
     *
     * @returns {string} Return the folder name
     */
    static getDirname(filePath: string): string;
    /**
     * Method to get the Aura Helper CLI installed path
     *
     * @returns {string[]} return an array with all app paths
     */
    static getAuraHelperCLIAppPath(): string[];
    /**
     * Method to get the Aura Helper CLI Temp Files path
     *
     * @returns {string} Returns the Aura Helper CLI Temp files path
     */
    static getAuraHelperCLITempFilesPath(): string;
    /**
     * Method to remove a file extension from file path
     * @param {string} file file to process
     *
     * @returns {string} Returns the path without extension file
     */
    static removeFileExtension(file: string): string;
}
