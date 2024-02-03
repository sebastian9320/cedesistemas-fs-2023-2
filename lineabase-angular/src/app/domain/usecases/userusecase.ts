
import { Observable } from "rxjs";
import { Token } from "../models/User/token";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { Injectable } from "@angular/core";
import { User } from "../models/User/user";
import { UserResponse } from "../models/User/user-response";

@Injectable({
  providedIn: 'root'
})
export class Userusecase {
  constructor(private _userGateway: UserGateway){}
  login(email: String, password: String): Observable<Token>{
    //logica de aplicación, aquí va todo lo relacionado con logica
    return this._userGateway.login(email, password);
  }

  signup(user:User):Observable<UserResponse>{
    // aqui aplico la logica
    return this._userGateway.signup(user);
  }
}
