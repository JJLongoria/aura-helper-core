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
     * @param dayNameOrObject 
     * @param monthName 
     * @param day 
     * @param time 
     * @param year 
     * @param timeoffset 
     * @param dateStr 
     */
    constructor(dayNameOrObject: string | CommitDate, monthName?: string, day?: number | string, time?: number | string, year?: number | string, timeoffset?: number | string, dateStr?: string){
        if(dayNameOrObject instanceof CommitDate){
            this.dayName = dayNameOrObject.dayName;
            this.monthName = dayNameOrObject.monthName;
            this.day = dayNameOrObject.day;
            this.time = dayNameOrObject.time;
            this.year = dayNameOrObject.year;
            this.timeoffset = dayNameOrObject.timeoffset;
            this.dateStr = dayNameOrObject.dateStr;
        } else {
            this.dayName = dayNameOrObject;
            this.monthName = monthName;
            this.day = day;
            this.time = time;
            this.year = year;
            this.timeoffset = timeoffset;
            this.dateStr = dateStr;
        }
    }
}