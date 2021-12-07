import { AuraJSFunction, PositionData } from ".";
import { AuraNodeTypes } from "..";

/**
 * Class to represent an Aura Javascript file
 */
export class AuraJSFile {

    nodeType: string;
    name?: string;
    methods: AuraJSFunction[];
    positionData?: PositionData;

    /**
     * Create new AuraJSFile instance
     * @param {string | AuraJSFile} [nameOrJSFile] File name or AuraJSFile instance
     */
    constructor(nameOrJSFile?: string | AuraJSFile) {
        if (nameOrJSFile instanceof AuraJSFile) {
            this.name = nameOrJSFile.name;
            this.methods = nameOrJSFile.methods;
            this.positionData = nameOrJSFile.positionData;
        } else {
            this.name = nameOrJSFile;
            this.methods = [];
        }
        this.nodeType = AuraNodeTypes.JS_FILE;
    }

}