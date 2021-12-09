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
     * @param {string | { [key: string]: any }} [nameOrJSFile] File name or AuraJSFile instance
     */
    constructor(nameOrJSFile?: string | { [key: string]: any }) {
        if (nameOrJSFile && typeof nameOrJSFile !== 'string') {
            this.name = nameOrJSFile.name;
            this.methods = nameOrJSFile.methods;
            this.positionData = new PositionData(nameOrJSFile.positionData);
        } else {
            this.name = nameOrJSFile;
            this.methods = [];
        }
        this.nodeType = AuraNodeTypes.JS_FILE;
    }

}