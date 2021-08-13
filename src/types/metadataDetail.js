const Utils = require('../utils/utils');

class MetadataDetail {
    constructor(nameOrObject, directoryName, suffix, inFolder, metaFile) {
        if (Utils.isObject(nameOrObject)) {
            this.directoryName = nameOrObject.directoryName;
            this.inFolder = nameOrObject.inFolder;
            this.metaFile = nameOrObject.metaFile;
            this.suffix = nameOrObject.suffix;
            this.xmlName = nameOrObject.xmlName;
        } else {
            this.directoryName = directoryName;
            this.inFolder = inFolder;
            this.metaFile = metaFile;
            this.suffix = suffix;
            this.xmlName = nameOrObject;
        }
    }
}
module.exports = MetadataDetail;