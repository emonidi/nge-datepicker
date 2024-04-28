import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output,
    signal,
    ViewContainerRef,
    WritableSignal
} from '@angular/core';
import {DayInMonth, NgeDatepickerService} from "./nge-datepicker.service";
import {NgClass, NgFor, NgForOf} from "@angular/common";
import {format, parse, toDate} from "date-fns";

@Component({
    selector: 'nge-datepicker',
    standalone: true,
    imports: [NgForOf, NgClass],
    templateUrl: "./nge-datepicker.template.html",
    styleUrl: "./nge-datepicker.style.scss"
})
export class NgeDatepickerComponent implements OnInit {

    @Input() displayDateFormat = "dd.MM.yyyy";
    @Input() currentDate: string = "";
    @Output() dateSelected: EventEmitter<Date> = new EventEmitter<Date>();
    public selectedDate: Date = new Date();
    public activeDate: Date = new Date();
    protected daysInMonth: WritableSignal<any> = signal([]);
    protected weekdaysHeader: string[] = [];

    constructor(protected datePickerService: NgeDatepickerService, private view: ViewContainerRef) {

    }

    ngOnInit() {

        this.activeDate = parse(this.currentDate, this.displayDateFormat, new Date());
        this.selectedDate = this.activeDate;
        this.weekdaysHeader = this.datePickerService.getWeekDaysHeader();
        this.daysInMonth.set(this.datePickerService.getDaysOfMonth(this.activeDate));
    }

    changeMonth(delta: number) {
        this.activeDate = this.datePickerService.changeMonth(this.activeDate, delta);
        this.daysInMonth.set(this.datePickerService.getDaysOfMonth(this.activeDate));
    }

    changeYear(delta: number) {
        this.activeDate = this.datePickerService.changeYear(this.activeDate, delta);
        this.daysInMonth.set(this.datePickerService.getDaysOfMonth(this.activeDate));

    }

    isActiveDay(day: Date) {
        console.log()
        return day.getMonth() === this.activeDate.getMonth()
    }

    selectDate(date: Date) {
        this.selectedDate = date;
        this.dateSelected.emit(this.selectedDate)
    }



    onDateFocusOut(date:Date){
        if(this.datePickerService.isLastDayOfMonth(date)){
            this.changeMonth(1);
            setTimeout(()=>{
                this.view.element.nativeElement.querySelector(".is-first").focus();
            },200)
        }
    }
}
