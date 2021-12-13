export class SObjectChildRelationship {

    relationshipName?: string;
    restrictedDelete: boolean;
    cascadeDelete: boolean;
    childSObject: string;
    deprecatedAndHidden: boolean;
    field: string;
    junctionIdListNames: string[];
    junctionReferenceTo: string[];

    constructor(nameOrRelationship: string | any, childSObject?: string, field?: string) {
        if (nameOrRelationship && typeof nameOrRelationship !== 'string') {
            this.relationshipName = nameOrRelationship.relationshipName;
            this.restrictedDelete = nameOrRelationship.restrictedDelete;
            this.cascadeDelete = nameOrRelationship.cascadeDelete;
            this.childSObject = nameOrRelationship.childSObject;
            this.deprecatedAndHidden = nameOrRelationship.deprecatedAndHidden;
            this.field = nameOrRelationship.field;
            this.junctionIdListNames = nameOrRelationship.junctionIdListNames || [];
            this.junctionReferenceTo = nameOrRelationship.junctionReferenceTo || [];
        } else {
            this.relationshipName = nameOrRelationship;
            this.restrictedDelete = false;
            this.cascadeDelete = true;
            this.childSObject = childSObject || '';
            this.deprecatedAndHidden = false;
            this.field = field || '';
            this.junctionIdListNames = [];
            this.junctionReferenceTo = [];
        }
    }

}