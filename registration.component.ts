import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else if (field === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onRegister() {
    if (this.registrationForm.valid) {
      const { password, confirmPassword } = this.registrationForm.value;
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // Registration logic here (e.g., send data to backend)
      alert('Registration successful!');
      this.router.navigate(['/Login']);
    }
  }

}
