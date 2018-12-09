import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/i-users.interface';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    @Input()
    public user: User;

    @Input()
    public showDelete: Boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
