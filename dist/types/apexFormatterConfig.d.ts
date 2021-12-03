/**
 * Class to represent an Apex Formatter Configuration object to format apex classes with the desired format
 */
export declare class ApexFormatterConfig {
    punctuation: ApexFormatterPunctuationConfig;
    operator: ApexFormatterOperatorConfig;
    classMembers: ApexFormatterMembersConfig;
    comment: ApexFormatterCommentConfig;
    query: ApexFormatterQueryConfig;
    /**
     * Constructor to create an ApexFormatterConfig instance
     * @param {ApexFormatterConfig} [configObj] Object with the same fields of Apex Formatter or VScode Config object
     */
    constructor(configObj?: ApexFormatterConfig);
    /**
     * Method to create the default format config to puctuation options
     * @returns {ApexFormatterPunctuationConfig} Return the default config
     */
    static punctuationConfig(): ApexFormatterPunctuationConfig;
    /**
     * Method to create the default format config to operators options
     * @returns {ApexFormatterOperatorConfig} Return the default config
     */
    static operatorConfig(): ApexFormatterOperatorConfig;
    /**
     * Method to create the default format config to class members options
     * @returns {ApexFormatterMembersConfig} Return the default config
     */
    static classMembersConfig(): ApexFormatterMembersConfig;
    /**
     * Method to create the default format config to comments options
     * @returns {ApexFormatterCommentConfig} Return the default config
     */
    static commentConfig(): ApexFormatterCommentConfig;
    /**
     * Method to create the default format config to queries options
     * @returns {ApexFormatterQueryConfig} Return the default config
     */
    static queryConfig(): ApexFormatterQueryConfig;
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
