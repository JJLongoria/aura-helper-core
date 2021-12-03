"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriter = void 0;
const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const unzipper = require('unzipper');
/**
 * Class to create and write files into file system
 */
class FileWriter {
    /**
     * Method to create files asynchronously
     * @param {string} path path to save the file
     * @param {string} content content to write into the file
     * @param {Function} callback callback function to handle the end of write
     */
    static createFile(path, content, callback) {
        fs.writeFile(path, content, (error) => {
            if (callback) {
                if (error) {
                    callback.call(this, undefined, error);
                }
                else {
                    callback.call(this, path, undefined);
                }
            }
        });
    }
    /**
     * Method to create files synchronously
     * @param {string} path path to save the file
     * @param {string} content content to write into the file
     */
    static createFileSync(path, content) {
        fs.writeFileSync(path, content);
    }
    /**
     * Method to create folders synchronously (create the entire folders path if is needed)
     * @param {string} folderPath folder to create
     */
    static createFolderSync(folderPath) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    /**
     * Method to copy files asynchronously
     * @param {string} source source file
     * @param {string} target target file
     * @param {Function} callback callback function to handle the end of copy
     */
    static copyFile(source, target, callback) {
        fs.copyFile(source, target, callback);
    }
    /**
     * Method to copy files synchronously
     * @param {string} source source file
     * @param {string} target target file
     */
    static copyFileSync(sourcePath, targetPath) {
        fs.copyFileSync(sourcePath, targetPath);
    }
    /**
     * Method to copy an entire folder into another asynchronously
     * @param {string} source source folder
     * @param {string} target target folder
     * @param {boolean} overwrite true to overwrite target files
     * @param {Function} callback callback function to handle the end of copy
     */
    static copyFolder(source, target, overwrite, callback) {
        fsExtra.copy(source, target, { overwrite: overwrite }, callback);
    }
    /**
     * Method to copy an entire folder into another synchronously
     * @param {string} source source folder
     * @param {string} target target folder
     * @param {boolean} overwrite true to overwrite target files
     */
    static copyFolderSync(source, target, overwrite) {
        fsExtra.copySync(source, target, { overwrite: overwrite });
    }
    /**
     * Method to delete and entire folder (and all subfolders)
     * @param {string} pathToDelete folder to delete
     */
    static delete(pathToDelete) {
        if (fs.existsSync(pathToDelete)) {
            if (fs.lstatSync(pathToDelete).isDirectory()) {
                fs.readdirSync(pathToDelete).forEach(function (entry) {
                    var entry_path = path.join(pathToDelete, entry);
                    if (fs.lstatSync(entry_path).isDirectory()) {
                        FileWriter.delete(entry_path);
                    }
                    else {
                        fs.unlinkSync(entry_path);
                    }
                });
                fs.rmdirSync(pathToDelete);
            }
            else {
                fs.unlinkSync(pathToDelete);
            }
        }
    }
    /**
     * Methos to uncrompress a zip file asynchronously
     * @param {string} zipFile path to the zip file
     * @param {string} targetPath target folder to uncrompress
     * @param {Function} callback callback function to handle the end of uncrompression
     */
    static async unzip(zipFile, targetPath, callback) {
        let rstream = fs.createReadStream(zipFile).pipe(unzipper.Extract({
            path: targetPath
        }));
        rstream.on('close', (fd) => {
            if (callback) {
                callback.call(this, fd);
            }
        });
    }
}
exports.FileWriter = FileWriter;
//# sourceMappingURL=fileWriter.js.map