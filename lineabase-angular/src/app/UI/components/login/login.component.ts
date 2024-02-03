import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Userusecase } from '../../../domain/usecases/userusecase';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  public validationMessage = {
    email: [
      { type: 'pattern', message: 'Formato no valido'},
      { type: 'email', message: 'Formato no valido'},
      { type: 'required', message: 'Este campo es requerido'}
    ],
    password: [
      { type: 'pattern', message: 'La contraseña debe tener al menos 8 caracteres, una minuscula, una mayuscula y un caracter especial.'},
      { type: 'required', message: 'Este campo es requerido'}
    ]
  }
  constructor(private router: Router, private formBuilder: FormBuilder, private _userUseCase: Userusecase) { }

  ngOnInit(): void{
    localStorage.setItem('email', 'admin@admin.com');
    localStorage.setItem('password', 'Colombia2023@');
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.pattern(/[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i),
          Validators.email,
          Validators.required
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
        ]
      ]
    })
  }

  public get getControls() {
    return this.loginForm.controls
  }


  /**
   * UI - login
   * UserUseCase
   * UserGateway -> UserService
   * GenericService
   * Api
   */
  login(){

    if(this.loginForm.valid){
      let user = this.loginForm.controls['email'].value
      let password = this.loginForm.controls['password'].value
      this._userUseCase.login(user, password).subscribe((data: any) => {
        if(data){
          localStorage.setItem('token', data.token);
          this.router.navigate(['/home'])
          return;
        }
      })
    }else{
      alert('El formulario no es valido')
    }
  }
}
