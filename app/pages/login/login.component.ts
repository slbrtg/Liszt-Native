import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { FirebaseService } from "../../services/firebase.service";
import { User } from "../../models/user.model";

@Component({
	selector: "login",
    templateUrl:'pages/login/login.component.xml',
    styleUrls: ["pages/login/login.component.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    
    //////////////////////////////////////////////////////////
    // UI Elements
    //////////////////////////////////////////////////////////
    email: string;
    password: string;

    //////////////////////////////////////////////////////////
    // Model
    //////////////////////////////////////////////////////////
    user = new User();

    //////////////////////////////////////////////////////////
    // Constructor
    //////////////////////////////////////////////////////////
    constructor(private router: Router, private page: Page,
    private firebaseService: FirebaseService) {

    }

    //////////////////////////////////////////////////////////
    // Lifecycle
    //////////////////////////////////////////////////////////
    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    //////////////////////////////////////////////////////////
    // Login Methods
    //////////////////////////////////////////////////////////

    login() {

        // Commented out error checking for dev purposes
        
        // if (this.email == null || this.password == null){
        //     alert("Please enter your email and password")
        //     return;
        // } else {
            this.user.email = "dog@dog.com";
            this.user.password = "dogdog";
        // }
        this.firebaseService.login(this.user)
         .then(() => {
           console.log("Success!!!");
   
         })
         .catch((message:any) => {
             console.log(message);
         });
   }

}