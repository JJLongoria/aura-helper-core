import { StrUtils } from "./strUtils";

const DURATION_UNITS_MULTIPLIERS: { [key: string]: number } = {
    'Y': 8 * 60 * 365,
    'y': 8 * 60 * 365,
    'M': 8 * 60 * 30,
    'W': 8 * 60 * 7,
    'w': 8 * 60 * 7,
    'D': 8 * 60,
    'd': 8 * 60,
    'H': 60,
    'h': 60,
    'm': 1
};

const DURATION_UNITS: string[] = ['Y', 'M', 'W', 'D', 'h', 'm'];


export class DateUtils {
    /**
     * Method to transform the specified `seconds` to milliseconds
     * @param {number} seconds The seconds to transform
     * @returns {number} Return the specified `seconds` transformed in milliseconds
     */
    static secondsToMillis(seconds: number): number {
        return (1000) * seconds;
    }

    /**
     * Method to transform the specified `minutes` to milliseconds
     * @param {number} minutes The minutes to transform
     * @returns {number} Return the specified `minutes` transformed in milliseconds
     */
    static minutesToMillis(minutes: number): number {
        return DateUtils.secondsToMillis(minutes * 60);
    }

    /**
     * Method to transform the specified `hours` to milliseconds
     * @param {number} hours The hours to transform
     * @returns {number} Return the specified `hours` transformed in milliseconds
     */
    static hoursToMillis(hours: number): number {
        return DateUtils.minutesToMillis(hours * 60);
    }

    /**
     * Method to transform the specified days to milliseconds
     * @param {number} days The days to transform
     * @returns {number} Return the specified `dayNumber` transformed in milliseconds
     */
    static daysToMillis(days: number): number {
        return DateUtils.hoursToMillis(days * 24);
    }

    /**
     * Method to format a Date time with the specified locale information. If not locale specified, will be use `es-ES`
     * @param {Date} date Date to format 
     * @param {string} [locale] Locale value to format
     * @returns {string} Return the `date` formaet into the specified `locale` or `es-ES`
     */
    static formatDateTime(date: Date, locale?: string): string {
        return date.toLocaleDateString(locale || 'es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: "2-digit", minute: "2-digit", second: "2-digit" })
    }

    /**
     * Method to add days to the specified date
     * @param date Date to add days
     * @param days days to add
     * @returns Return a new date with the specified days added
     */
    static addDays(date: Date, days: number): Date {
        return new Date(date.getTime() + DateUtils.daysToMillis(days));
    }

    /**
     * Method to remove days to the specified date
     * @param date Date to remove days
     * @param days days to remove
     * @returns Return a new date with the specified days removed
     */
    static removeDays(date: Date, days: number): Date {
        return new Date(date.getTime() - DateUtils.daysToMillis(days));
    }

    static intervalInMillis(oldDate: Date, newDate: Date): number {
        return newDate.getTime() - oldDate.getTime();
    }

    static intervalInSeconds(oldDate: Date, newDate: Date): number {
        return DateUtils.intervalInMillis(oldDate, newDate) / 1000;
    }

    static intervalInMinutes(oldDate: Date, newDate: Date): number {
        return DateUtils.intervalInSeconds(oldDate, newDate) / 60;
    }

    static intervalInHours(oldDate: Date, newDate: Date): number {
        return DateUtils.intervalInMinutes(oldDate, newDate) / 60;
    }

    static intervalInDays(oldDate: Date, newDate: Date): number {
        return DateUtils.intervalInHours(oldDate, newDate) / 24;
    }

    static intervalInMonths(oldDate: Date, newDate: Date): number {
        return DateUtils.intervalInDays(oldDate, newDate) / 30;
    }

    static intervalInYears(oldDate: Date, newDate: Date): number {
        return DateUtils.intervalInMonths(oldDate, newDate) / 12;
    }

    static minutesToDurationString(minutes: number, skipZeroValues?: boolean, limitTo?: string): string {
        if (!minutes) {
            return '';
        }
        const result = []
        for (const name of DURATION_UNITS) {
            const p = Math.floor(minutes / DURATION_UNITS_MULTIPLIERS[name]);
            if (p === 0) {
                if (!skipZeroValues) {
                    result.push(p.toString() + name);
                }
            } else {
                result.push(p.toString() + name);
            }
            minutes %= DURATION_UNITS_MULTIPLIERS[name];
            if (limitTo && name === limitTo) {
                break;
            }
        }
        return result.join(' ');
    }

    static durationStringToMinutes(duration: string): number {
        if (!duration) {
            return 0;
        }
        const splits = duration.split(' ');
        const units = Object.keys(DURATION_UNITS_MULTIPLIERS);
        let minutes = 0;
        for (const split of splits) {
            for (const unit of units) {
                if (StrUtils.contains(split, unit)) {
                    const value = Number(StrUtils.replace(split, unit, '').trim());
                    minutes += (value * DURATION_UNITS_MULTIPLIERS[unit]);
                }
            }
        }
        return minutes;
    }
}