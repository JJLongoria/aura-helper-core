class RetrieveInboundFile {

    constructor(nameOrObject, type, state, filePath){
        if(typeof nameOrObject === 'object'){
            this.fullName = nameOrObject.fullName;
            this.state = nameOrObject.state;
            this.type = nameOrObject.type;
            this.filePath = nameOrObject.filePath;
        } else {
            this.fullName = nameOrObject;
            this.type = type;
            this.state = state;
            this.filePath = filePath;
        }
    }
}
module.exports = RetrieveInboundFile;