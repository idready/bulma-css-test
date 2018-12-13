import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/i-users.interface';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    public defaultImage = 'https://www.placecage.com/128/128';
    public offset = 100;

    @Input()
    public user: User;

    @Input()
    public showDelete: Boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
