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
     * @param {ApexFormatterConfig} [configObj] Object with the same fields of Apex Formatter or VScode Config object
     */
    constructor(configObj?: ApexFormatterConfig) {
        if (configObj instanceof ApexFormatterConfig) {
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
    }

    /**
     * Method to create the default format config to puctuation options
     * @returns {ApexFormatterPunctuationConfig} Return the default config
     */
    static punctuationConfig(): ApexFormatterPunctuationConfig {
        return {
            maxBlankLines: 2,
            openCurlyBracketOnNewLine: false,
            addNewLineAfterCloseCurlyBracket: false,
            addWhitespaceAfterCloseCurlyBracket: true,
            addWhitespaceBeforeOpenCurlyBracket: false,
            addWhitespaceBeforeOpenGuardParenthesis: true,
            addWhitespaceAfterOpenGuardParenthesis: false,
            addWhitespaceBeforeCloseGuardParenthesis: false,
            addWhiteSpaceAfterComma: true,
            addWhitespaceBeforeOpenTriggerEvents: true,

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
            addWhitespaceAfterOpenParenthesisOperator: false,
            addWhitespaceBeforeCloseParenthesisOperator: false,
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
            maxProjectionFieldPerLine: 0
        };
    }

}

export interface ApexFormatterPunctuationConfig {
    maxBlankLines: number;
    openCurlyBracketOnNewLine: boolean;
    addNewLineAfterCloseCurlyBracket: boolean;
    addWhitespaceAfterCloseCurlyBracket: boolean;
    addWhitespaceBeforeOpenCurlyBracket: boolean;
    addWhitespaceBeforeOpenGuardParenthesis: boolean;
    addWhitespaceAfterOpenGuardParenthesis: boolean;
    addWhitespaceBeforeCloseGuardParenthesis: boolean;
    addWhiteSpaceAfterComma: boolean;
    addWhitespaceBeforeOpenTriggerEvents: boolean;
}

export interface ApexFormatterOperatorConfig {
    addWhitespaceBeforeOperator: boolean;
    addWhitespaceAfterOperator: boolean;
    addWhitespaceAfterOpenParenthesisOperator: boolean;
    addWhitespaceBeforeCloseParenthesisOperator: boolean;
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
    oneProjectionFieldPerLine: boolean;
    maxProjectionFieldPerLine: number;
}