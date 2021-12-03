"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const exceptions_1 = require("../exceptions");
const utils_1 = require("../utils");
const process_1 = require("./process");
/**
 * Class to represent system command process
 */
class Command {
    /**
     * Constructor te create a command
     * @param {string} command command to execute
     * @param {string} [name] name of the command to identify
     * @param {boolean} [jsonResponse] true if the command response are a JSON, false in otherwise
     *
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    constructor(commandOrObject, name, jsonResponse) {
        if (commandOrObject instanceof Command) {
            this.jsonResponse = commandOrObject.jsonResponse;
            this.name = commandOrObject.name;
            this.commandArgs = commandOrObject.commandArgs;
            this.command = commandOrObject.command;
        }
        else {
            this.jsonResponse = jsonResponse || false;
            this.name = name || commandOrObject;
            this.commandArgs = [];
            this.command = '';
            this.createBaseCommand(commandOrObject);
        }
    }
    /**
     * Method to convert a Command object into a Process object to execute and handle it
     * @param {ProcessOptions} options options to create the process
     * @returns Return the command cenverted into a Process object
     */
    toProcess(options) {
        return new process_1.Process(this.command, this.commandArgs, options).setProcessName(this.name).setJSONResponse(this.jsonResponse);
    }
    /**
     * Method to create the base command to the OS
     * @param {string} command command to execute
     *
     * @throws {OSNotSupportedException} Throw exception when create process with not supported Operative System. "Operative System Not Supported"
     */
    createBaseCommand(command) {
        this.commandArgs = [];
        if (utils_1.OSUtils.isWindows()) {
            this.command = 'cmd';
            this.commandArgs.push('/c');
            this.commandArgs.push(command);
        }
        else if (utils_1.OSUtils.isLinux() || utils_1.OSUtils.isMac()) {
            this.command = command;
        }
        else {
            throw new exceptions_1.OSNotSupportedException();
        }
    }
    /**
     * Method to add arguments to the command
     * @param {string} [argName] argument name
     * @param {string} [argValue] argument value
     */
    addCommandArg(argName, argValue) {
        if (argName !== undefined) {
            this.commandArgs.push(argName);
        }
        if (argValue !== undefined) {
            this.commandArgs.push(argValue);
        }
    }
}
exports.Command = Command;
//# sourceMappingURL=command.js.map