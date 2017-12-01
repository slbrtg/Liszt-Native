import { transition } from '@angular/animations';
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../../models/user.model";
import { FirebaseService } from "../../services/firebase.service";
import { Router } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router/router-extensions";

@Component({
	selector: 'signup',
	templateUrl: 'pages/signup/signup.component.xml',
	styleUrls:["pages/signup/signup.component.css", "pages/signup/signup.css"]
})

export class SignupComponent implements OnInit {

	//////////////////////////////////////////////////////////
	// Class Properties
	//////////////////////////////////////////////////////////

	user: User;

	//////////////////////////////////////////////////////////
    // UI Elements
    //////////////////////////////////////////////////////////

  email: string;
	password: string;
	confirmPassword: string;

	//////////////////////////////////////////////////////////
	// Constructor
	//////////////////////////////////////////////////////////

	constructor(private page: Page, route: Router,
							private firebaseService: FirebaseService,
							private routerExtensions: RouterExtensions) {
								
	}

	//////////////////////////////////////////////////////////
	// Lifecycle
	//////////////////////////////////////////////////////////

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	//////////////////////////////////////////////////////////
	// Sign Up Methods
	//////////////////////////////////////////////////////////

	signUp(): void {
		let signUpSuccess: boolean = true;
		
		if (this.password != this.confirmPassword) {
			alert("Your passwords do no match");
			return; 
		}

		this.firebaseService.signUp(this.email, this.password)
		.then(() => {
			console.log("Attempting to register a new user");
			
			// Give the computer some much needed thinkin time
			setTimeout(() => {
				if(signUpSuccess) {
					this.routerExtensions.navigate([""], {
						transition: {
							name: "flip",
							duration: 10,
							curve: "linear"
						}
					});	
				}
			}, 4000);
			
		})
		.catch((message: any) => {
			alert(message);
		})
	}
	
}