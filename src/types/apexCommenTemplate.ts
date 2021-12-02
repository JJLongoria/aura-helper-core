export interface ApexCommentTagKeyword {
    name: string;
    source?: string;
    message?: string;
}

export interface ApexCommentTagData {
    tagData: ApexCommentTag;
    tag: ApexCommentTag;
    tagName: string;
}

export interface ApexCommentTag {
    equalsTo?: string;
    symbol?: string;
    keywords?: ApexCommentTagKeyword[];
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