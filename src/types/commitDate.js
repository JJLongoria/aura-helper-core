const Utils = require('../utils/utils');

class CommitDate {

    constructor(dayNameOrObject, monthName, day, time, year, timeoffset, dateStr){
        if(Utils.isObject(dayNameOrObject)){
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
module.exports = CommitDate;