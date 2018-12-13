import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '@angular/compiler';
import { format } from 'date-fns';


@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

    @Input()
    public quote: Quote[];

    constructor() { }

    ngOnInit() {
    }

    public formatDate(date: string): string {
        return format(date, 'DD/MM/YYYY');
    }

}
