import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProfileConstants} from "../utils/profile-constants";
import {Profile} from "../models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
    const forbidden = ProfileConstants.VALIDATE_NAME.test(control.value);
    return forbidden ? null : {forbiddenName: {value: control.value}};
  }

  createProfile(profile: Profile): void {
    this.http.post('http://localhost:3000/api/profile', profile, {
      withCredentials: false,
      observe: 'body',
      responseType: 'text'
    }).subscribe(resp => {
      console.log(resp);
    });
  }

  validPassword(password: string): ValidationErrors | null {
    if (password.length <= 8) {
      return { passwordLength: "password is too short. At least 8 chars"};
    }
    if (ProfileConstants.PASSWORD_REGEX.test(password)) {
      return { passwordError: "password should contain one lower case letter and one upper case" +
          ", one number and one special character"}
    }
    return null;
  }
}
