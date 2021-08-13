const Utils = require('../utils/utils');
const Process = require('./Process');
const OSUtils = require('../utils/osUtils');

/**
 * Class to represent system command process
 */
 class Command {

    /**
     * Constructor te create a command
     * @param {String} command command to execute
     * @param {String} name name of the command to identify
     * @param {Boolean} jsonResponse true if the command response are a JSON, false in otherwise
     */
    constructor(commandOrObject, name, jsonResponse) {
        if(Utils.isObject(commandOrObject)){
            this.jsonResponse = commandOrObject.jsonResponse;
            this.name = commandOrObject.name;
            this.commandArgs = commandOrObject.commandArgs;
            this.command = commandOrObject.command;
        } else {
            this.jsonResponse = jsonResponse;
            this.name = name;
            this.commandArgs = []
            this.command = undefined;
            this.createBaseCommand(commandOrObject);
        }
    }

    /**
     * Method to convert a Command object into a Process object to execute and handle it
     * @param {Object} options options to create the process
     * @returns Return the command cenverted into a Process object
     */
    toProcess(options) {
        return new Process(this.command, this.commandArgs, options).setProcessName(this.name).setJSONResponse(this.jsonResponse);
    }

    /**
     * Method to create the base command to the OS
     * @param {String} command 
     */
    createBaseCommand(command) {
        this.commandArgs = [];
        if (OSUtils.isWindows()) {
            this.command = 'cmd';
            this.commandArgs.push('/c');
            this.commandArgs.push(command);
        } else if (OSUtils.isLinux() || OSUtils.isMac()) {
            this.command = command;
        } else {
            throw new Error('Operative System Not Supported');
        }
    }

    /**
     * Method to add arguments to the command
     * @param {String} argName argument name
     * @param {*} argValue argument value
     */
    addCommandArg(argName, argValue) {
        if (argName !== undefined)
            this.commandArgs.push(argName);
        if (argValue !== undefined)
            this.commandArgs.push(argValue);
    }
}
module.exports = Command;