"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
/**
 * Class to create Utils Mathematics methods
 */
class MathUtils {
    /**
     * Method to round a number with a selected decimal precission. By default, round with two decimals
     * @param {number} number Number to round
     * @param {number} [decimalNumbers] Decimal numbers precission
     *
     * @returns {number} Returns a rounded number with the specified decimals
     */
    static round(number, decimalNumbers) {
        if (!decimalNumbers) {
            decimalNumbers = 2;
        }
        return Number(Math.round(Number(number + 'e' + decimalNumbers)) + 'e-' + decimalNumbers);
    }
}
exports.MathUtils = MathUtils;
//# sourceMappingURL=mathUtils.js.map