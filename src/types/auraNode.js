const Utils = require('../utils/utils');

class AuraNode {

    constructor(qualifiedNameOrObjet, nodeType, token) {
        if (Utils.isObject(qualifiedNameOrObjet)) {
            this.nodeType = qualifiedNameOrObjet.nodeType;
            this.qualifiedName = qualifiedNameOrObjet.qualifiedName;
            this.name = qualifiedNameOrObjet.name;
            this.token = qualifiedNameOrObjet.token;
            this.namespace = qualifiedNameOrObjet.namespace;
            this.description = qualifiedNameOrObjet.description;
        } else {
            this.nodeType = nodeType;
            this.qualifiedName = qualifiedNameOrObjet;
            this.name = undefined;
            this.token = token;
            this.namespace = undefined;
            this.description = undefined;
            if(!Utils.isNull(this.qualifiedName) && this.qualifiedName.indexOf(':') != -1){
                const splits = this.qualifiedName.split(':');
                this.namespace = splits[0];
                this.name = splits[1];
            } else {
                this.name = this.qualifiedName;
            }
        }
    }

}
module.exports = AuraNode;