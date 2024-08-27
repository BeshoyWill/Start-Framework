import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  inputName: string = '';
  inputEmail: string = '';
  inputAge: number | string = '';
  inputPassword: string | number = '';

  clear(): void {
    this.inputName = '';
    this.inputEmail = '';
    this.inputAge = '';
    this.inputPassword = '';
  }
}
