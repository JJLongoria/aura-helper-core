const os = require('os');

/**
 * Class with util methods to work with the Operative System
 */
export class OSUtils {

    /**
     * Method to check if is the operative system is Linux
     * 
     * @returns {boolean} true if is Linux, false in otherwiese
     */
    static isLinux(): boolean {
        return os.platform() === 'linux';
    }

    /**
     * Method to check if is the operative system is Windows
     * 
     * @returns {boolean} true if is Windows, false in otherwiese
     */
    static isWindows(): boolean {
        return os.platform() === 'win32';
    }

    /**
     * Method to check if is the operative system is Mac
     * 
     * @returns {boolean} true if is Mac, false in otherwiese
     */
    static isMac(): boolean {
        return os.platform() === 'darwin';
    }

    /**
     * Method to get the available CPUs to run parallel processes
     * 
     * @returns {number} Returns the available processes
     */
    static getAvailableCPUs(): number {
        let cpus = os.cpus().length;
        if (cpus > 1) {
            cpus -= 1;
        }
        return cpus;
    }

}