import { ApexCommentTemplate } from ".";

export interface ParserData {
    sObjects: any;
    sObjectsData: { [key: string]: any };
    userClasses: any;
    userClassesData: { [key: string]: any };
    namespaceSummary: { [key: string]: any };
    namespacesData: { [key: string]: any };
    template?: ApexCommentTemplate
    namespaces: string[];
}