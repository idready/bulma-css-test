import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/i-users.interface';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

    public user: User;

    constructor(private router: ActivatedRoute, private storage: StorageService) { }

    ngOnInit() {

        if (!this.user) {
            this.router.params.subscribe(
                data => {
                    this.user = this.storage.get('users', true)[data.userId];
                },
                error => { console.warn(error); }
            );
        }
    }

}
