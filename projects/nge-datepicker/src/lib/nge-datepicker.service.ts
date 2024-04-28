import {Injectable} from '@angular/core';
import {
    addMonths,
    addYears,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    formatDate, isEqual, isFirstDayOfMonth, lastDayOfMonth,
    startOfMonth,
    startOfWeek
} from "date-fns";

export interface DayInMonth{
  index:number,
  day:number
}

@Injectable({
  providedIn: 'root'
})
export class NgeDatepickerService {

  constructor() {

  }

  public getWeekDaysHeader(){
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];
  }
  public getDaysOfMonth(date:Date): Date[]{
      // this.getWeeksInMonth();
      const startMonthDay = startOfMonth(date);
      const start = startOfWeek(startMonthDay, {weekStartsOn:1});

      const endMonthDay = endOfMonth(date);
      const end = endOfWeek(endMonthDay,{weekStartsOn:1});

      return eachDayOfInterval({start,end})
  }

  public changeMonth(date:Date,months:number){
      return addMonths(date, months);
  }

  public changeYear(date:Date, delta:number){
      return addYears(date,delta);
  }

  formatDate(date: Date, format: string) {
      return formatDate(date,format)
  }
  isLastDayOfMonth(date:Date){
      return isEqual(lastDayOfMonth(date) ,date);
  }

  ifFirstDayOfMonth(date:Date){
      return isFirstDayOfMonth(date);
  }
}
