/**
 * Class to represent an Apex Formatter Configuration object to format apex classes with the desired format
 */
export class ApexFormatterConfig {

    punctuation: ApexFormatterPunctuationConfig;
    operator: ApexFormatterOperatorConfig;
    classMembers: ApexFormatterMembersConfig;
    comment: ApexFormatterCommentConfig;
    query: ApexFormatterQueryConfig;

    /**
     * Constructor to create an ApexFormatterConfig instance
     * @param {ApexFormatterConfig | { [key: string]: any }} [configObj] Object with the same fields of Apex Formatter or VScode Config object
     */
    constructor(configObj?: ApexFormatterConfig | { [key: string]: any }) {
        if (configObj) {
            if (!(configObj instanceof ApexFormatterConfig) && configObj.apexFormat) {
                configObj = configObj.apexFormat;
            }
            if (configObj) {
                this.punctuation = configObj.punctuation;
                this.operator = configObj.operator;
                this.classMembers = configObj.classMembers;
                this.comment = configObj.comment;
                this.query = configObj.query;
            } else {
                this.punctuation = ApexFormatterConfig.punctuationConfig();
                this.operator = ApexFormatterConfig.operatorConfig();
                this.classMembers = ApexFormatterConfig.classMembersConfig();
                this.comment = ApexFormatterConfig.commentConfig();
                this.query = ApexFormatterConfig.queryConfig();
            }
        } else {
            this.punctuation = ApexFormatterConfig.punctuationConfig();
            this.operator = ApexFormatterConfig.operatorConfig();
            this.classMembers = ApexFormatterConfig.classMembersConfig();
            this.comment = ApexFormatterConfig.commentConfig();
            this.query = ApexFormatterConfig.queryConfig();
        }
    }

    /**
     * Method to create the default format config to puctuation options
     * @returns {ApexFormatterPunctuationConfig} Return the default config
     */
    static punctuationConfig(): ApexFormatterPunctuationConfig {
        return {
            maxBlankLines: 2,
            maxConditionsPerLine: -1,
            conditionLogicOperatorOnNewLine: false,
            openCurlyBracketOnNewLine: false,
            addNewLineAfterCloseCurlyBracket: false,
            addWhitespaceAfterCloseCurlyBracket: true,
            addWhitespaceBeforeOpenCurlyBracket: false,
            addWhitespaceBeforeOpenGuardParenthesis: true,
            addWhitespaceAfterOpenGuardParenthesis: false,
            addWhitespaceBeforeCloseGuardParenthesis: false,
            addWhiteSpaceAfterComma: true,
            addWhitespaceBeforeOpenTriggerEvents: true,
            SObjectFieldsPerLine: 1,
        };
    }

    /**
     * Method to create the default format config to operators options
     * @returns {ApexFormatterOperatorConfig} Return the default config
     */
    static operatorConfig(): ApexFormatterOperatorConfig {
        return {
            addWhitespaceBeforeOperator: true,
            addWhitespaceAfterOperator: true,
            addWhitespaceBeforeOpenParenthesisOperator: false,
            addWhitespaceAfterOpenParenthesisOperator: false,
            addWhitespaceBeforeCloseParenthesisOperator: false,
            addWhitespaceAfterCloseParenthesisOperator: false,
        };
    }

    /**
     * Method to create the default format config to class members options
     * @returns {ApexFormatterMembersConfig} Return the default config
     */
    static classMembersConfig(): ApexFormatterMembersConfig {
        return {
            newLinesBetweenCodeBlockMembers: 1,
            newLinesBetweenGetterAndSetterAccessor: 1,
            singleLineProperties: true,
            newLinesBetweenClassFields: 0,
        };
    }

    /**
     * Method to create the default format config to comments options
     * @returns {ApexFormatterCommentConfig} Return the default config
     */
    static commentConfig(): ApexFormatterCommentConfig {
        return {
            holdBeforeWhitespacesOnLineComment: true,
            holdAfterWhitespacesOnLineComment: true,
            newLinesBewteenComments: 0
        };
    }

    /**
     * Method to create the default format config to queries options
     * @returns {ApexFormatterQueryConfig} Return the default config
     */
    static queryConfig(): ApexFormatterQueryConfig {
        return {
            oneClausePerLine: true,
            oneProjectionFieldPerLine: false,
            oneWhereConditionPerLine: false,
            maxProjectionFieldPerLine: 0
        };
    }

}

export interface ApexFormatterPunctuationConfig {
    maxBlankLines: number;
    maxConditionsPerLine: number;
    conditionLogicOperatorOnNewLine: boolean;
    openCurlyBracketOnNewLine: boolean;
    addNewLineAfterCloseCurlyBracket: boolean;
    addWhitespaceAfterCloseCurlyBracket: boolean;
    addWhitespaceBeforeOpenCurlyBracket: boolean;
    addWhitespaceBeforeOpenGuardParenthesis: boolean;
    addWhitespaceAfterOpenGuardParenthesis: boolean;
    addWhitespaceBeforeCloseGuardParenthesis: boolean;
    addWhiteSpaceAfterComma: boolean;
    addWhitespaceBeforeOpenTriggerEvents: boolean;
    SObjectFieldsPerLine: number;
}

export interface ApexFormatterOperatorConfig {
    addWhitespaceBeforeOperator: boolean;
    addWhitespaceAfterOperator: boolean;
    addWhitespaceBeforeOpenParenthesisOperator: boolean;
    addWhitespaceAfterOpenParenthesisOperator: boolean;
    addWhitespaceBeforeCloseParenthesisOperator: boolean;
    addWhitespaceAfterCloseParenthesisOperator: boolean;
}

export interface ApexFormatterMembersConfig {
    newLinesBetweenCodeBlockMembers: number;
    newLinesBetweenGetterAndSetterAccessor: number;
    singleLineProperties: boolean;
    newLinesBetweenClassFields: number;
}

export interface ApexFormatterCommentConfig {
    holdBeforeWhitespacesOnLineComment: boolean;
    holdAfterWhitespacesOnLineComment: boolean;
    newLinesBewteenComments: number;
}

export interface ApexFormatterQueryConfig {
    oneClausePerLine: boolean;
    oneWhereConditionPerLine: boolean;
    oneProjectionFieldPerLine: boolean;
    maxProjectionFieldPerLine: number;
}