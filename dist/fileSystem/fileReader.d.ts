/// <reference types="node" />
import { FileFilters } from "../types/fileFilter";
import { TextDocument } from "../types/textDocument";
/**
 * Class to read files, documents and folders from file system
 */
export declare class FileReader {
    /**
     * Method to read a Document Object and get the entire text
     * @param {TextDocument} document document to read
     *
     * @returns {string} Return the document content string
     */
    static readDocument(document: TextDocument): string;
    /**
     * Method to read a file synchronously
     * @param {string} filePath file to read
     *
     * @returns {string} Return the file content
     */
    static readFileSync(filePath: string): string;
    /**
     * Method to read a file asynchronously
     * @param {string} filePath file to read
     * @param {Function} callback callback function to call when read operation finish. Use it to get the file content
     */
    static readFile(filePath: string, callback: (err?: Error | any, data?: string | Buffer) => void): void;
    /**
     * Method to read an entire directory to get the files and subfolders
     * @param {string} folderPath folder to read
     * @param {FileFilters} [filters] filters to apply
     *
     * @returns {Array<string>} Return an array with the file paths
     */
    static readDirSync(folderPath: string, filters?: FileFilters): string[];
    /**
     * Method to read all files from a folder (including files from subfolders)
     * @param {string} folderPath folder to read
     * @param {string[]} [filters] filters to apply
     *
     * @returns {Promise<string[]>} Return a Promise with an array with all file paths
     */
    static getAllFiles(folderPath: string, filters?: string[]): Promise<string[]>;
}
