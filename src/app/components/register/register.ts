import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/index';
import { UserRegistration } from 'models';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.html'
})
export class RegisterComponent {
    @ViewChild(NgForm)
    ngForm: NgForm;
    message: string = '';

    model = new UserRegistration();

    constructor(
        private registrationService: RegistrationService,
        private router: Router
    ) { }

    register() {
        if (this.ngForm.form.invalid) {
            return;
        }
        return this.registrationService.usernameExists(this.model.username).then((result) => {
            if (result) {
                this.message = 'Username already exists';
                return;
            }
            return this.registrationService.register(this.model).then(() => this.router.navigateByUrl('/login'), (err) => this.message = err);
        },
            (err) => this.message = err);
    }
}
