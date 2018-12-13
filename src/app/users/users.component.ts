import { Component, OnInit } from '@angular/core';
import { GenerateUsersService } from './generate-users.service';
import { StorageService } from '../services/storage.service';
import { User } from '../models/i-users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public users: User[] = [];

    constructor(private faker: GenerateUsersService, private storage: StorageService) { }

    ngOnInit() {

        const storedUsers: User[] = this.storage.get('users', true);
        this.users =  storedUsers || this.faker.generateUser(11);

        if (!storedUsers) {
            this.storage.set('users', this.users, true);
        }

    }

}
