import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public readonly email: string = 'cavargas40@gmail.com';
  public readonly githubUrl: string = 'https://github.com/cavargas40';
  public readonly linkedinUrl: string =
    'https://www.linkedin.com/in/carlos-andres-vargas-lopez-459914105/';
  public copied: boolean = false;

  copyEmail(): void {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(this.email).catch(() => undefined);
    }
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2500);
  }
}
