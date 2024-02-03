import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Userusecase } from '../../../domain/usecases/userusecase';
import { UserResponse } from '../../../domain/models/User/user-response';
import { User } from '../../../domain/models/User/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm!:FormGroup;

  public validationMessage = {
    email: [
      { type: 'pattern', message: 'Formato no valido'},
      { type: 'required', message: 'Este campo es requerido'}
    ],
    password: [
      { type: 'pattern', message: 'La contraseña debe tener al menos 8 caracteres, una minuscula, una mayuscula y un caracter especial.'},
      { type: 'required', message: 'Este campo es requerido'}
    ],
    name: [
      { type: 'pattern', message: 'El campo debe tener solo letras.'},
      { type: 'required', message: 'Este campo es requerido'}
    ],
    lastname: [
      { type: 'pattern', message: 'El campo debe tener solo letras.'},
      { type: 'required', message: 'Este campo es requerido'}
    ],
    phone: [
      { type: 'pattern', message: 'El campo debe tener solo números.'},
      { type: 'required', message: 'Este campo es requerido'}
    ],
    identification: [
      { type: 'pattern', message: 'El campo debe tener solo números.'},
      { type: 'required', message: 'Este campo es requerido'}
    ]
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _useruseCase: Userusecase
  ) { }

  ngOnInit(): void{
    this.signupForm = this.formBuilder.group({
      name:[
        '',
        [

          Validators.pattern(/^[a-zA-Z ]*$/),
          Validators.required
        ]
      ],
      lastname: [
        '',
        [
          Validators.pattern(/^[a-zA-Z ]*$/),
          Validators.required
        ]
      ],
      identification: [
        '',
        [
          Validators.pattern(/^[0-9 ]*$/),
          Validators.maxLength(10),
          Validators.required
        ]
      ],
      phone: [
        '',
        [
          Validators.pattern(/^[0-9]*$/),
          Validators.maxLength(10),
          Validators.required
        ]
      ],
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
    return this.signupForm.controls
  }

  /**
   *
   */
  signup(){

    if(this.signupForm.valid){
      const userObj = this.getUser()
      this._useruseCase.signup(userObj).subscribe(
        (data: UserResponse) => {
          if (data) {
            alert(`El usuario ${data.user.name} fue creado con exito`)
            this.router.navigate(['/fullscreen/login'])
            return;
          }
        }
      )
    }else{
      alert('El formulario no es válido, verifique los campos')
      return;
    }
  }

  getUser(): User {
    return {
      email: this.signupForm.controls['email'].value,
      name: this.signupForm.controls['name'].value,
      password: this.signupForm.controls['password'].value,
      phone: this.signupForm.controls['phone'].value,
      identification: this.signupForm.controls['identification'].value
    }
    /* let data = {};
    for(let control of Object.keys(this.signupForm.controls)){
      data = {
        ...data,
        [control]: this.signupForm.controls[control].value
      }
    }
    return data; */
  }
}


