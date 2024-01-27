import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
})
export class LoginDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
