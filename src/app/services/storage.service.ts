import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    public static STORAGE_KEY = 'bp_storage';

    get(property: string, toSessionStorage: boolean = false): any {

        if (toSessionStorage) {
            return JSON.parse(window.sessionStorage.getItem(StorageService.STORAGE_KEY.concat(`_${property}`)));
        } else {
            return JSON.parse(window.localStorage.getItem(StorageService.STORAGE_KEY.concat(`_${property}`)));
        }
    }

    set(property: string, value: any, toSessionStorage: boolean = false) {

        if (toSessionStorage) {
            window.sessionStorage.setItem(StorageService.STORAGE_KEY.concat(`_${property}`), JSON.stringify(value));
        } else {
            window.localStorage.setItem(StorageService.STORAGE_KEY.concat(`_${property}`), JSON.stringify(value));
        }
    }

    remove(property: string, toSessionStorage: boolean = false) {

        if (toSessionStorage) {
            window.sessionStorage.removeItem(StorageService.STORAGE_KEY.concat(`_${property}`));
        } else {
            window.localStorage.removeItem(StorageService.STORAGE_KEY.concat(`_${property}`));
        }
    }

    clear(toSessionStorage: boolean = false) {

        if (toSessionStorage) {
            window.sessionStorage.clear();
        } else {
            window.localStorage.clear();
        }

    }

    lengthOf(toSessionStorage: boolean = false): number {

        if (toSessionStorage) {
            return window.localStorage.length;
        } else {
            return window.localStorage.length;
        }
    }

}
