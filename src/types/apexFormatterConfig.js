const Utils = require("../utils/utils");

/**
 * Class to represent an Apex Formatter Configuration object to format apex classes with the desired format
 */
class ApexFormatterConfig {

    /**
     * Constructor to create an ApexFormatterConfig instance
     * @param {Object} [configObj] Object with the same fields of Apex Formatter or VScode Config object
     */
    constructor(configObj) {
        if (Utils.isObject(configObj)) {
            if (!Utils.isNull(configObj.apexFormat))
                configObj = configObj.apexFormat;
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
     * @returns {Object} Return the default config
     */
    static punctuationConfig(){
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
     * @returns {Object} Return the default config
     */
    static operatorConfig(){
        return {
            addWhitespaceBeforeOperator: true,
            addWhitespaceAfterOperator: true,
            addWhitespaceAfterOpenParenthesisOperator: false,
            addWhitespaceBeforeCloseParenthesisOperator: false,
        };
    }

    /**
     * Method to create the default format config to class members options
     * @returns {Object} Return the default config
     */
    static classMembersConfig(){
        return {
            newLinesBetweenCodeBlockMembers: 1,
            newLinesBetweenGetterAndSetterAccessor: 1,
            singleLineProperties: true,
            newLinesBetweenClassFields: 0,
        };
    }

    /**
     * Method to create the default format config to comments options
     * @returns {Object} Return the default config
     */
    static commentConfig(){
        return {
            holdBeforeWhitespacesOnLineComment: true,
            holdAfterWhitespacesOnLineComment: true,
            newLinesBewteenComments: 0
        };
    }

    /**
     * Method to create the default format config to queries options
     * @returns {Object} Return the default config
     */
    static queryConfig(){
        return {
            oneClausePerLine: true,
            oneProjectionFieldPerLine: false,
            maxProjectionFieldPerLine: 0
        };
    }

}
module.exports = ApexFormatterConfig;