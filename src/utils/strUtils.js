class StrUtils {

    static replace(str, replace, replacement) {
        return str.split(replace).join(replacement);
    }

    static contains(str, strToCheck){
        return str.indexOf(strToCheck)!== -1;
    }

    static containsIgnorecase(str, strToCheck){
        return str.toLowerCase().indexOf(strToCheck.toLowerCase())!== -1;
    }

    static getStringIndent(str) {
        let indent = "";
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === ' ' || char === '\t')
                indent += char;
            else
                break;
        }
        return indent;
    }

    static getTabs(number){
        let tabs = '';
        for (let index = 0; index < number; index++) {
            tabs += '\t';
        }
        return tabs;
    }

    static getNewLines(number) {
        let nl = '';
        for (let index = 0; index < number; index++) {
            nl += '\n';
        }
        return nl;
    }

    static getWhitespaces(number) {
        let ws = "";
        for (let i = 0; i < number; i++) {
            ws += ' ';
        }
        return ws;
    }

    static countStartWhitespaces(str) {
        let number = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == ' ')
                number++;
            else
                break;
        }
        return number;
    }

}
module.exports = StrUtils;