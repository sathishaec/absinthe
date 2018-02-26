import { Injectable } from '@angular/core';
import { Post, Board, Topic } from '../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private http: HttpClient) { }
    // MOCK DATA
    debugDefaultBoards: Array<Board> = [
        { id: 1, name: 'Discusstion Thread - 1', updatedat: '27/06/2017 13:48' },
        { id: 2, name: 'Discusstion Thread - 2', updatedat: '11/06/2017 13:48' },
        { id: 3, name: 'Discusstion Thread - 3', updatedat: '07/06/2017 13:48' },
        { id: 4, name: 'Discusstion Thread - 4', updatedat: '01/06/2017 13:48' },
        { id: 5, name: 'Discusstion Thread - 5', updatedat: '27/05/2017 13:48' }
    ];

    login(empid: string, password: string) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        let url = JSON.stringify(
            { "empid": empid, "password": password }
        )
        return this.http.post<any>('http://192.168.64.2/trackR/index.php/auth/login', url , httpOptions )
            .map(user => {

                // login successful if there's a jwt token in the response
                console.log(user);
                if (user && user.token) {
                    this.loggedIn.next(true);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
            
    }

    getThreads(): Array<Board> {
        return this.debugDefaultBoards;
    }


    logout() {
        // remove user from local storage to log user out
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
    }
}