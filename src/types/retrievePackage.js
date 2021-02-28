class RetrievePackage {

    constructor(nameOrObject){
        if(typeof nameOrObject === 'object'){
            this.name = nameOrObject.name;
        } else {
            this.name = nameOrObject;
        }
    }
}
module.exports = RetrievePackage;