import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../../models/user.model";
import { FirebaseService } from "../../services/firebase.service";
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
	// Constructor
	//////////////////////////////////////////////////////////

	constructor(private router: Router, private page: Page,
							private firebaseService: FirebaseService,
							private routerExtensions: RouterExtensions) {
								this.user = new User();
								this.user.email = "user@mail.com";
								this.user.password = "password";
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

	signUp() {
		this.firebaseService.signUp(this.user)
		.then(() => {
			console.log("Attempting to register a new user");
			this.routerExtensions.navigate([""], { clearHistory: true } )
		})
		.catch((message: any) => {
			alert(message);
		})
	}

}