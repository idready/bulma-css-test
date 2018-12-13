import { Injectable } from '@angular/core';
import * as Faker from 'faker';
import { Comment, User, Status, Quote } from '../models/i-users.interface';

@Injectable({
    providedIn: 'root'
})
export class GenerateUsersService {

    private faker: Faker;

    constructor() { }

    public generateUser(userAmount: number = 1): User[] {

        const incUsers = () => ({
            userId: Faker.random.uuid(),
            name: Faker.name.findName(),
            firstName: Faker.name.firstName(),
            avatar: Faker.image.avatar(),
            status: (+Date.now() % 2 === 0) ? Status.ONLINE : Status.OFFLINE,
            quotes: this.generateQuote(10),
            address: {
                city: Faker.address.city(),
                country: Faker.address.country()
            },
            views: Faker.random.number()
        });
        return this.loopGenerator(10, incUsers);
    }

    private generateQuote(quoteAmount: number = 1): Quote[] {

        const incQuotes = () => ({
            quoteId: Faker.random.uuid(),
            text: Faker.lorem.sentence(),
            date: Faker.date.past(),
            comments: this.generateComment(10),
            likes: Faker.random.number()
        });
        return this.loopGenerator(10, incQuotes);
    }

    private generateComment(amount: number = 1): Comment[] {

        const incComments = () => ({
            text: Faker.random.words(),
            date: Faker.date.past(),
            author: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
            quoteId: Faker.random.number()
        });
        return this.loopGenerator(10, incComments);
    }

    private loopGenerator(loopCount: number = 0, cbFunc: () => {}): any {

        const results = [];
        for (let i = 0; i < loopCount; i++) {
            results.push(cbFunc());
        }
        return results;
    }
}
