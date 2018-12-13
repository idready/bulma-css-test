
export enum Status {
    ONLINE = 'online',
    OFFLINE = 'offline'
}

export interface Comment {
    text: string;
    date: Date;
    author: string;
    quoteId: number;
}

export interface Quote {
    quoteId: string;
    text: string;
    date: Date;
    comments: Comment[];
    likes: number;
}

export interface Address {
    city: string;
    country: string;
}

export interface User {
    userId: string;
    name: string;
    quotes?: Quote[];
    avatar: string;
    status: Status;
    address: Address;
    views: number;
}

