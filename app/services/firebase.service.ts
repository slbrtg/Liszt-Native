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
  
  // items: BehaviorSubject<Array<List>> = new BehaviorSubject([]);
  // private _allItems: Array<List> = [];

	//////////////////////////////////////////////////////////
	// Constructor
  //////////////////////////////////////////////////////////
  
  constructor(
    private ngZone: NgZone,
    private utils: UtilsService
  ) {}

	//////////////////////////////////////////////////////////
	// Sign Up / Login Methods
  //////////////////////////////////////////////////////////

  signUp(user: User) {
    return firebase.createUser({
      email: user.email,
      password: user.password
    }).then(
          function (result:any) {
            return JSON.stringify(result);
          },
          function (errorMessage:any) {
            alert(errorMessage);
          }
      )
}
}