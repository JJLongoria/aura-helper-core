"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrUtils = void 0;
/**
 * Method with util methods to work with Strings
 */
class StrUtils {
    /**
     * Method to replace data from a string
     * @param {string} str String to replace the data
     * @param {string} replace String to replace
     * @param {string} replacement String to replacement
     *
     * @returns {string} Returns the the String with data replaced
     */
    static replace(str, replace, replacement) {
        return str.split(replace).join(replacement);
    }
    /**
     * Method to count the ocurrences into the String
     * @param {string} str Source to check
     * @param {string} strToCheck String to check if exists on str
     *
     * @returns {number} true if "strToCheck" exists on "str", false in otherwise
     */
    static count(str, strToCheck) {
        return (str.match(new RegExp(strToCheck, 'g')) || []).length;
    }
    /**
     * Method to check if a String contains other String
     * @param {string} str Source to check
     * @param {string} strToCheck String to check if exists on str
     *
     * @returns {boolean} true if "strToCheck" exists on "str", false in otherwise
     */
    static contains(str, strToCheck) {
        return str.indexOf(strToCheck) !== -1;
    }
    /**
     * Method to check if a String contains other String ignoring letter case
     * @param {string} str Source to check
     * @param {string} strToCheck String to check if exists on str
     *
     * @returns {boolean} true if "strToCheck" exists on "str", false in otherwise
     */
    static containsIgnorecase(str, strToCheck) {
        return str.toLowerCase().indexOf(strToCheck.toLowerCase()) !== -1;
    }
    /**
     * Method to get the indent characters from a String
     * @param {string} str String to get the indent chars
     *
     * @returns {string} Returns the starts Whitespaces or tabs characters from the start of the string, or empty String
     */
    static getStringIndent(str) {
        let indent = "";
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === ' ' || char === '\t') {
                indent += char;
            }
            else {
                break;
            }
        }
        return indent;
    }
    /**
     * Returns N tabs special characters (\t)
     * @param {number} number Number of tabs (\t) to return
     *
     * @returns {string} Return an string with the specified tabs
     */
    static getTabs(number) {
        let tabs = '';
        for (let index = 0; index < number; index++) {
            tabs += '\t';
        }
        return tabs;
    }
    /**
     * Returns N newline special characters (\n)
     * @param {number} number Number of newlines (\n) to return
     *
     * @returns {string} Return an string with the specified newlines
     */
    static getNewLines(number) {
        let nl = '';
        for (let index = 0; index < number; index++) {
            nl += '\n';
        }
        return nl;
    }
    /**
     * Returns N whitespaces
     * @param {number} number Number of whitespaces to return
     *
     * @returns {string} Return an string with the specified whitespaces
     */
    static getWhitespaces(number) {
        let ws = "";
        for (let i = 0; i < number; i++) {
            ws += ' ';
        }
        return ws;
    }
    /**
     * Method to count the initial whitespaces from a string
     * @param {string} str String to count whitespaces
     *
     * @returns {number} Returns the number of initial whitespaces
     */
    static countStartWhitespaces(str) {
        let number = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                number++;
            }
            else {
                break;
            }
        }
        return number;
    }
    /**
     * Method to count the initial tags from a string
     * @param {string} str String to count tabs
     *
     * @returns {number} Returns the number of initial whitespaces
     */
    static countStartTabs(str) {
        let number = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '\t') {
                number++;
            }
            else {
                break;
            }
        }
        return number;
    }
}
exports.StrUtils = StrUtils;
//# sourceMappingURL=strUtils.js.map