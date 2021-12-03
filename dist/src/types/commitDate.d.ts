/**
 * Class to represent a Git Commit Date
 */
export declare class CommitDate {
    dayName: string;
    monthName?: string;
    day?: string | number;
    time?: string | number;
    year?: string | number;
    timeoffset?: string | number;
    dateStr?: string;
    /**
     * Create new Commit Date instance
     * @param {string | CommitDate} dayNameOrCommitDate Commit date day name or Commit Date instance
     * @param {string} [monthName] Commit date month name
     * @param {number | string} [day] Commit date day
     * @param {number | string} [time] Commit date time
     * @param {number | string} [year] Commit date year
     * @param {number | string} [timeoffset] Commit date time offset
     * @param {string} [dateStr] Commit date formated as string
     */
    constructor(dayNameOrCommitDate: string | CommitDate, monthName?: string, day?: number | string, time?: number | string, year?: number | string, timeoffset?: number | string, dateStr?: string);
}
