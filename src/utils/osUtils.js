const os = require('os');

/**
 * Class with util methods to work with the Operative System
 */
class OSUtils {

    /**
     * Method to check if is the operative system is Linux
     * 
     * @returns {Boolean} true if is Linux, false in otherwiese
     */
    static isLinux(){
        return os.platform() === 'linux';
    }

    /**
     * Method to check if is the operative system is Windows
     * 
     * @returns {Boolean} true if is Windows, false in otherwiese
     */
    static isWindows(){
        return os.platform() === 'win32';
    }

    /**
     * Method to check if is the operative system is Mac
     * 
     * @returns {Boolean} true if is Mac, false in otherwiese
     */
    static isMac(){
        return os.platform() === 'darwin';
    }

    /**
     * Method to get the available CPUs to run parallel processes
     * 
     * @returns {Number} Returns the available processes
     */
    static getAvailableCPUs(){
        let cpus = os.cpus().length;
        if(cpus > 1)
            cpus -= 1;
        return cpus;
    }

}
module.exports = OSUtils;