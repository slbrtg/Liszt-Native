import { UserAuthService } from './userAuth.service';
import {Injectable, NgZone} from "@angular/core";
import {User } from "../models/user.model";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UtilsService} from './utils.service';
import 'rxjs/add/operator/share';
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { Router } from "@angular/router";

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
    private router: Router,
    private routerExtensions: RouterExtensions
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
}