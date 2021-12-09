/**
 * Class to represent a Git Commit Date
 */
export class CommitDate {

    dayName: string;
    monthName?: string;
    day?: string | number;
    time?: string | number;
    year?: string | number;
    timeoffset?: string | number;
    dateStr?: string;

    /**
     * Create new Commit Date instance
     * @param {string | { [key: string]: any }} dayNameOrCommitDate Commit date day name or Commit Date instance
     * @param {string} [monthName] Commit date month name
     * @param {number | string} [day] Commit date day
     * @param {number | string} [time] Commit date time
     * @param {number | string} [year] Commit date year
     * @param {number | string} [timeoffset] Commit date time offset
     * @param {string} [dateStr] Commit date formated as string
     */
    constructor(dayNameOrCommitDate: string | { [key: string]: any }, monthName?: string, day?: number | string, time?: number | string, year?: number | string, timeoffset?: number | string, dateStr?: string){
        if(dayNameOrCommitDate && typeof dayNameOrCommitDate !== 'string'){
            this.dayName = dayNameOrCommitDate.dayName;
            this.monthName = dayNameOrCommitDate.monthName;
            this.day = dayNameOrCommitDate.day;
            this.time = dayNameOrCommitDate.time;
            this.year = dayNameOrCommitDate.year;
            this.timeoffset = dayNameOrCommitDate.timeoffset;
            this.dateStr = dayNameOrCommitDate.dateStr;
        } else {
            this.dayName = dayNameOrCommitDate;
            this.monthName = monthName;
            this.day = day;
            this.time = time;
            this.year = year;
            this.timeoffset = timeoffset;
            this.dateStr = dateStr;
        }
    }
}