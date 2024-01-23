import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
	standalone: true,
	imports: [ ReactiveFormsModule, FormsModule, CommonModule, MatDialogModule]
})

export class LoginComponent {
	images = ["/assets/Images/password_hide.png", "/assets/Images/password_reveal.png"];
	image = this.images[0];
	validated = false;
	showPassword = false;
	name = '';
	user = [
		{name: 'Jun', email: "jun+2@agmostudio.com", password: "12#$qwER"}
	];

	constructor(private router: Router, public dialog: MatDialog) {}

	viewPW() {
		this.image = (this.image == this.images[0]) ? this.images[1] : this.images[0];
		this.showPassword = !this.showPassword;
	}

	loginForm = new FormGroup({
        email: new FormControl('', [
            Validators.required, 
			Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com'),
			Validators.minLength(5)
        ]),
        password: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
			this.upperCaseValidator(),
			this.lowerCaseValidator(),
			this.digitValidator()
		])
    });

	upperCaseValidator(): ValidatorFn {
		return (control:AbstractControl) : ValidationErrors | null => {
			const value = control.value;
			if (!value) {
				return null;
			}
			const noUpperCase = /[A-Z]/.test(value);
			return !noUpperCase ? {noUpperCase:true}: null;
		}
	}

	lowerCaseValidator(): ValidatorFn {
		return (control:AbstractControl) : ValidationErrors | null => {
			const value = control.value;
			if (!value) {
				return null;
			}
			const noLowCase = /[a-z]/.test(value);
			return !noLowCase ? {noLowCase:true}: null;
		}
	}

	digitValidator(): ValidatorFn {
		return (control:AbstractControl) : ValidationErrors | null => {
			const value = control.value;
			if (!value) {
				return null;
			}
			const noDigit = /\d/.test(value);
			return !noDigit ? {noDigit:true}: null;
		}
	}

    onSubmit(): void {
		for (let i = 0; i < this.user.length; i++){
			if (
				this.loginForm.get('email')?.value === this.user[i].email && 
				this.loginForm.get('password')?.value === this.user[i].password
			) {
				this.validated = true;
				this.name = this.user[i].name;
				break;
			}
		}
		this.dialog.open(LoginDialogComponent, {
			data: {
				validated: this.validated, 
				name: this.name
			}
		});
		if (this.validated)
			this.router.navigate(['/home']);
		else 
			this.loginForm.reset();
    }
}
