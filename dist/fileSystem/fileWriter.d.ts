/**
 * Class to create and write files into file system
 */
export declare class FileWriter {
    /**
     * Method to create files asynchronously
     * @param {string} path path to save the file
     * @param {string} content content to write into the file
     * @param {Function} callback callback function to handle the end of write
     */
    static createFile(path: string, content: string, callback: (path?: string, err?: Error) => void): void;
    /**
     * Method to create files synchronously
     * @param {string} path path to save the file
     * @param {string} content content to write into the file
     */
    static createFileSync(path: string, content: string): void;
    /**
     * Method to create folders synchronously (create the entire folders path if is needed)
     * @param {string} folderPath folder to create
     */
    static createFolderSync(folderPath: string): void;
    /**
     * Method to copy files asynchronously
     * @param {string} source source file
     * @param {string} target target file
     * @param {Function} callback callback function to handle the end of copy
     */
    static copyFile(source: string, target: string, callback: (err?: Error) => void): void;
    /**
     * Method to copy files synchronously
     * @param {string} source source file
     * @param {string} target target file
     */
    static copyFileSync(sourcePath: string, targetPath: string): void;
    /**
     * Method to copy an entire folder into another asynchronously
     * @param {string} source source folder
     * @param {string} target target folder
     * @param {boolean} overwrite true to overwrite target files
     * @param {Function} callback callback function to handle the end of copy
     */
    static copyFolder(source: string, target: string, overwrite: boolean, callback: (err?: Error) => void): void;
    /**
     * Method to copy an entire folder into another synchronously
     * @param {string} source source folder
     * @param {string} target target folder
     * @param {boolean} overwrite true to overwrite target files
     */
    static copyFolderSync(source: string, target: string, overwrite: boolean): void;
    /**
     * Method to delete and entire folder (and all subfolders)
     * @param {string} pathToDelete folder to delete
     */
    static delete(pathToDelete: string): void;
    /**
     * Methos to uncrompress a zip file asynchronously
     * @param {string} zipFile path to the zip file
     * @param {string} targetPath target folder to uncrompress
     * @param {Function} callback callback function to handle the end of uncrompression
     */
    static unzip(zipFile: string, targetPath: string, callback: (fd?: string) => void): Promise<void>;
}
