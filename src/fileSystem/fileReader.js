const fs = require('fs');
const path = require('path');
const StrUtils = require('../utils/strUtils');
const FileChecker = require('./fileChecker');

/**
 * Class to read files, documents and folders from file system
 */
class FileReader {

    /**
     * Method to read a Document Object and get the entire text
     * @param {TextDocument} document document to read
     * 
     * @returns {String} Return the document content string
     */
    static readDocument(document) {
        var lines = [];
        for (var i = 0; i < document.lineCount; i++) {
            lines.push(document.lineAt(i).text);
        }
        return lines.join('\n');
    }

    /**
     * Method to read a file synchronously
     * @param {String} filePath file to read
     * 
     * @returns {String} Return the file content
     */
    static readFileSync(filePath) {
        return fs.readFileSync(filePath, 'utf8');
    }

    /**
     * Method to read a file asynchronously
     * @param {String} filePath file to read
     * @param {Function} callback callback function to call when read operation finish. Use it to get the file content
     */
    static readFile(filePath, callback) {
        fs.readFile(filePath, 'utf8', callback);
    }

    /**
     * Method to read an entire directory to get the files and subfolders
     * @param {String} folderPath folder to read 
     * @param {Object} [filters] filters to apply
     * 
     * @returns {Array<String>} Return an array with the file paths
     */
    static readDirSync(folderPath, filters) {
        let folderContent = fs.readdirSync(folderPath);
        if (filters) {
            let result = [];
            for (const contentPath of folderContent) {
                let fullPath = folderPath + '/' + contentPath;
                if (filters.onlyFolders && FileChecker.isDirectory(fullPath)) {
                    result.push((filters && filters.absolutePath) ? fullPath : contentPath);
                } else if (filters.onlyFiles) {
                    if (FileChecker.isFile(fullPath)) {
                        if (filters.extensions && filters.extensions.length > 0) {
                            if (filters.extensions.includes(path.extname((filters && filters.absolutePath) ? fullPath : contentPath)))
                                result.push((filters && filters.absolutePath) ? fullPath : contentPath);
                        } else {
                            result.push((filters && filters.absolutePath) ? fullPath : contentPath);
                        }
                    }
                } else {
                    if (filters.extensions && filters.extensions.length > 0) {
                        if (filters.extensions.includes(path.extname((filters && filters.absolutePath) ? fullPath : contentPath)))
                            result.push((filters && filters.absolutePath) ? fullPath : contentPath);
                    } else {
                        result.push((filters && filters.absolutePath) ? fullPath : contentPath);
                    }
                }
            }
            return result;
        } else {
            return folderContent;
        }
    }

    /**
     * Method to read all files from a folder (including files from subfolders)
     * @param {String} folderPath folder to read
     * @param {Object} [filters] filters to apply
     * 
     * @returns {Promise<Array<String>>} Return a Promise with an array with all file paths
     */
    static getAllFiles(folderPath, filters) {
        return new Promise(function (resolve, rejected) {
            let results = [];
            fs.readdir(folderPath, function (err, list) {
                if (err){
                    rejected(err);
                    return;
                }

                var pending = list.length;
                if (!pending)
                    resolve(results);
                list.forEach(function (file) {
                    file = path.resolve(folderPath, file);
                    fs.stat(file, async function (err, stat) {
                        if (stat && stat.isDirectory()) {
                            let res = await FileReader.getAllFiles(file, filters);
                            results = results.concat(res);
                            if (!--pending){
                                resolve(results);
                                return;
                            }
                        } else {
                            if (filters && filters.length > 0) {
                                if (filters.includes(path.extname(file)))
                                    results.push(StrUtils.replace(file, '\\', '/'));
                            } else
                                results.push(StrUtils.replace(file, '\\', '/'));
                            if (!--pending){
                                resolve(results);
                                return;
                            }
                        }
                    });
                });
            });
        });
    }
}
module.exports = FileReader;