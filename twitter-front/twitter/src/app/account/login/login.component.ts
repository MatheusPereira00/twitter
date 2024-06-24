import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  formSubmitted = false;

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(): void {
    this.formSubmitted = true;

    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Resposta do servidor:', response);
        this.router.navigate(['/feed']);
      },
      (error) => {
        console.error('Error no login:', error);
        this.loginError = 'Usuário ou senha inválidos';
        if (error.status === 401) {
          this.loginError = 'Usuário não existe';
        } else {
          this.loginError = 'Erro ao tentar fazer login';
        }
      }
    );
  }

  isSubmitDisabled(): boolean {
    return !this.username || !this.password || this.formSubmitted;
  }
}
