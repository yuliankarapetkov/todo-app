import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services';

@Component({
    selector: 'auth-root',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    constructor(
        private authService: AuthService
    ) {}

    signInAnonymously() {
        this.authService.signInAnonymously()
            .subscribe(result => console.log(result));
    }

    ngOnInit() {
    }
}
