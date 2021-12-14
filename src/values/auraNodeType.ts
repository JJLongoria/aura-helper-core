export const AuraNodeTypes: AuraNodeTypes = {
    APPLICATION: 'application',
    COMPONENT: 'component',
    ATTRIBUTE: 'attribute',
    HANDLER: 'handler',
    CONTROLLER_METHOD: 'controllerMethod',
    HELPER_METHOD: 'helperMethod',
    APEX_METHOD: 'apexMethod',
    EVENT: 'event',
    REGISTER_EVENT: 'registerEvent',
    DEPENDENCY: 'dependency',
    FUNCTION: 'function',
    JS_COMMENT: 'jsComment',
    JS_FILE: 'jsFile',
    JS_COMMENT_BLOCK: 'jsCommentBlock',
    SOQL: 'soql',
    SOQL_FIELD: 'soql_field'
};

interface AuraNodeTypes {
    APPLICATION: string;
    COMPONENT: string;
    ATTRIBUTE: string;
    HANDLER: string;
    CONTROLLER_METHOD: string;
    HELPER_METHOD: string;
    APEX_METHOD: string;
    EVENT: string;
    REGISTER_EVENT: string;
    DEPENDENCY: string;
    FUNCTION: string;
    JS_COMMENT: string;
    JS_FILE: string;
    JS_COMMENT_BLOCK: string;
    SOQL: string;
    SOQL_FIELD: string;
};