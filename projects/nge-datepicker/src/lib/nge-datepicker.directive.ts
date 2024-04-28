import {ComponentRef, Directive, HostListener, Input, Renderer2, ViewContainerRef} from '@angular/core';
import {NgeDatepickerComponent} from "./nge-datepicker.component";
import {NgeDatepickerService} from "./nge-datepicker.service";
import {formatDate} from "date-fns";

@Directive({
    selector: '[ngDatepicker]',
    standalone: true,
    providers: [NgeDatepickerComponent, NgeDatepickerService]
})
export class NgeDatepickerDirective {

    @Input() displayDateFormat: string = "dd.MM.yyyy"
    public datePicker: ComponentRef<NgeDatepickerComponent> | undefined;
    private datePickerShown = false;

    @HostListener('focusin',['$event']) onFocusInHandler(event:FocusEvent) {
        if (!this.datePickerShown) {
            this.showDatePicker();
            this.datePickerShown = true;
        }
    }
    @HostListener('document:keydown.escape', ['$event']) onEscapeHandler(event: KeyboardEvent) {
        this.hideDatePicker();
    }

    @HostListener('click', ['$event']) focus(event: any) {
        if (!this.datePickerShown) {
            this.showDatePicker();
            this.datePickerShown = true;
        }
    }

    constructor(public component: NgeDatepickerComponent, private viewContainerRef: ViewContainerRef, private renderer: Renderer2) {
        this.viewContainerRef.element.nativeElement.placeholder = this.displayDateFormat;
        this.renderer.listen('window', 'click', (ev: any) => {
            if (this.datePickerShown && ev.target !== viewContainerRef.element.nativeElement && !this.datePicker?.location.nativeElement.contains(ev.target)) {
                this.hideDatePicker();
            }
        })
    }


    showDatePicker() {
        this.datePicker = this.viewContainerRef.createComponent(NgeDatepickerComponent);
        this.datePicker.setInput('currentDate', this.viewContainerRef.element.nativeElement.value === "" ? formatDate(new Date().toString(), this.displayDateFormat) : this.viewContainerRef.element.nativeElement.value);
        this.datePicker.instance.dateSelected.subscribe((date: Date) => {
            this.viewContainerRef.element.nativeElement.value = formatDate(date, this.displayDateFormat);
            // this.hideDatePicker();
        })
    }

    hideDatePicker() {
        this.datePicker?.destroy();
        this.datePickerShown = false;
    }

}
