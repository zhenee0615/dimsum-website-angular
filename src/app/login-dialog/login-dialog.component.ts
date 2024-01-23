import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-login-dialog',
    standalone: true,
    imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
    templateUrl: './login-dialog.component.html',
    styleUrl: './login-dialog.component.scss'
})

export class LoginDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
}
