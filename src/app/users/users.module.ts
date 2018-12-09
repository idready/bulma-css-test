import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { GenerateUsersService } from './generate-users.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
    declarations: [UsersComponent, UserDetailComponent, UserProfileComponent, QuoteComponent],
    imports: [
        CommonModule,
        UsersRoutingModule
    ],
    providers: [GenerateUsersService]
})
export class UsersModule { }
