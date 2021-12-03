/**
 * Method with util methods to work with Strings
 */
export declare class StrUtils {
    /**
     * Method to replace data from a string
     * @param {string} str String to replace the data
     * @param {string} replace String to replace
     * @param {string} replacement String to replacement
     *
     * @returns {string} Returns the the String with data replaced
     */
    static replace(str: string, replace: string, replacement: string): string;
    /**
     * Method to count the ocurrences into the String
     * @param {string} str Source to check
     * @param {string} strToCheck String to check if exists on str
     *
     * @returns {number} true if "strToCheck" exists on "str", false in otherwise
     */
    static count(str: string, strToCheck: string): number;
    /**
     * Method to check if a String contains other String
     * @param {string} str Source to check
     * @param {string} strToCheck String to check if exists on str
     *
     * @returns {boolean} true if "strToCheck" exists on "str", false in otherwise
     */
    static contains(str: string, strToCheck: string): boolean;
    /**
     * Method to check if a String contains other String ignoring letter case
     * @param {string} str Source to check
     * @param {string} strToCheck String to check if exists on str
     *
     * @returns {boolean} true if "strToCheck" exists on "str", false in otherwise
     */
    static containsIgnorecase(str: string, strToCheck: string): boolean;
    /**
     * Method to get the indent characters from a String
     * @param {string} str String to get the indent chars
     *
     * @returns {string} Returns the starts Whitespaces or tabs characters from the start of the string, or empty String
     */
    static getStringIndent(str: string): string;
    /**
     * Returns N tabs special characters (\t)
     * @param {number} number Number of tabs (\t) to return
     *
     * @returns {string} Return an string with the specified tabs
     */
    static getTabs(number: number): string;
    /**
     * Returns N newline special characters (\n)
     * @param {number} number Number of newlines (\n) to return
     *
     * @returns {string} Return an string with the specified newlines
     */
    static getNewLines(number: number): string;
    /**
     * Returns N whitespaces
     * @param {number} number Number of whitespaces to return
     *
     * @returns {string} Return an string with the specified whitespaces
     */
    static getWhitespaces(number: number): string;
    /**
     * Method to count the initial whitespaces from a string
     * @param {string} str String to count whitespaces
     *
     * @returns {number} Returns the number of initial whitespaces
     */
    static countStartWhitespaces(str: string): number;
    /**
     * Method to count the initial tags from a string
     * @param {string} str String to count tabs
     *
     * @returns {number} Returns the number of initial whitespaces
     */
    static countStartTabs(str: string): number;
}
