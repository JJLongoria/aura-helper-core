const Utils = require('../utils/utils');

class AuraNode {

    constructor(qualifiedNameOrObjet, nodeType, token) {
        if (Utils.isObject(qualifiedNameOrObjet)) {
            this.nodeType = qualifiedNameOrObjet.nodeType;
            this.qualifiedName = qualifiedNameOrObjet.qualifiedName;
            this.tagName = qualifiedNameOrObjet.tagName;
            this.token = qualifiedNameOrObjet.token;
            this.namespace = qualifiedNameOrObjet.namespace;
            this.description = qualifiedNameOrObjet.description;
            this.positionData = qualifiedNameOrObjet.positionData;
            this.file = qualifiedNameOrObjet.file;
            this.name = qualifiedNameOrObjet.name;
        } else {
            this.nodeType = nodeType;
            this.qualifiedName = qualifiedNameOrObjet;
            this.tagName = undefined;
            this.token = token;
            this.namespace = undefined;
            this.description = undefined;
            if(!Utils.isNull(this.qualifiedName) && this.qualifiedName.indexOf(':') != -1){
                const splits = this.qualifiedName.split(':');
                this.namespace = splits[0];
                this.tagName = splits[1];
            } else {
                this.tagName = this.qualifiedName;
            }
            this.name = this.tagName;
            this.positionData = undefined;
            this.file = undefined;
        }
    }

}
module.exports = AuraNode;