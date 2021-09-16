/**
 * Class to create Utils Mathematics methods
 */
class MathUils {

    /**
     * Method to round a number with a selected decimal precission. By default, round with two decimals
     * @param {Number} number Number to round
     * @param {Number} [decimalNumbers] Decimal numbers precission
     * 
     * @returns {Number} Returns a rounded number with the specified decimals
     */
    static round(number, decimalNumbers) {
        if(!decimalNumbers)
            decimalNumbers = 2;
        return Number(Math.round(number + 'e' + decimalNumbers) + 'e-' + decimalNumbers);
    }

}
module.exports = MathUils;