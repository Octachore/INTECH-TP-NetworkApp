import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/index';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    model = new UserLogin();
    message: any;

    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) {
    }

    login() {
        return this.authService.authenticate(this.model).then(() => this.router.navigateByUrl('/'), (err) => this.message = err);
    }
}
