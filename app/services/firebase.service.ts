import { UserAuthService } from './userAuth.service';
import {Injectable, NgZone} from "@angular/core";
import {User } from "../models/user.model";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/share';

@Injectable()
export class FirebaseService {
  
	//////////////////////////////////////////////////////////
	// Class Properties
  //////////////////////////////////////////////////////////
  


	//////////////////////////////////////////////////////////
	// Constructor
  //////////////////////////////////////////////////////////
  
  constructor(
    private ngZone: NgZone,
    private utils: UtilsService,
  ) {}

	//////////////////////////////////////////////////////////
	// Sign Up / Login Methods
  //////////////////////////////////////////////////////////

  signUp(email: string, password: string) {
    return firebase.createUser({
      email: email,
      password: password
    }).then(
          function (result:any) {
            return JSON.stringify(result);
          },
          function (errorMessage:any) {
            alert(errorMessage);
          }
      )
  }


  login(user: User) {
    return firebase.login({
      type: firebase.LoginType.PASSWORD,
      email: user.email,
      password: user.password
    }).then((result: any) => {
          UserAuthService.token = result.uid;
          return JSON.stringify(result);
      }, (errorMessage: any) => {
        alert(errorMessage);
      });
  }

  
}