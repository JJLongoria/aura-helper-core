import { ApexCommentTemplate } from ".";

export interface ParserData {
    sObjects?: string[];
    sObjectsData: { [key: string]: any };
    userClasses?: string[];
    userClassesData?: { [key: string]: any };
    namespaceSummary?: { [key: string]: any };
    namespacesData?: { [key: string]: any };
    template?: ApexCommentTemplate
    namespaces?: string[];
}