const ProcessManager = require('./src/processManager');
const Types = require('./src/types');
const Utils = require('./src/utils');
const Values = require('./src/values');
const FileSystem = require('./src/fileSystem');
const Exceptions = require('./src/exceptions');

module.exports = {
    ProcessManager: ProcessManager,
    Types: Types,
    CoreUtils: Utils,
    Values: Values,
    FileSystem: FileSystem,
    Exceptions: Exceptions
}