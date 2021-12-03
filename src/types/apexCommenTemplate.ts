export interface ApexCommentTemplateTagKeyword {
    name: string;
    source?: string;
    message?: string;
}

export interface ApexCommentTemplateTagData {
    tagData: ApexCommentTemplateTag;
    tag: ApexCommentTemplateTag;
    tagName: string;
}

export interface ApexCommentTemplateTag {
    equalsTo?: string;
    symbol?: string;
    keywords?: ApexCommentTemplateTagKeyword[];
    template?: string;
    multiple?: boolean;
    anywhere?: boolean;
    source?: string;
}

export interface ApexCommentsObjectData {
    tags: string[];
    template: string[]
}

export interface ApexCommentsData {
    class: ApexCommentsObjectData;
    interface?: ApexCommentsObjectData;
    enum?: ApexCommentsObjectData;
    method: ApexCommentsObjectData;
    constructor?: ApexCommentsObjectData;
    variable: ApexCommentsObjectData;
    property?: ApexCommentsObjectData;
}

export interface ApexCommentTemplate {
    tagSymbol: string;
    tags: any;
    comments: { [key: string]: ApexCommentsObjectData };
}