import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  redirectToComponent1(): void {
    // Check if email and password are correct
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/component1']);
    } else {
      alert('Invalid email or password');
    }
  }
}
