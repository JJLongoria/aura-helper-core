/**
 * Class with util methods to work with the Operative System
 */
export declare class OSUtils {
    /**
     * Method to check if is the operative system is Linux
     *
     * @returns {boolean} true if is Linux, false in otherwiese
     */
    static isLinux(): boolean;
    /**
     * Method to check if is the operative system is Windows
     *
     * @returns {boolean} true if is Windows, false in otherwiese
     */
    static isWindows(): boolean;
    /**
     * Method to check if is the operative system is Mac
     *
     * @returns {boolean} true if is Mac, false in otherwiese
     */
    static isMac(): boolean;
    /**
     * Method to get the available CPUs to run parallel processes
     *
     * @returns {number} Returns the available processes
     */
    static getAvailableCPUs(): number;
}
