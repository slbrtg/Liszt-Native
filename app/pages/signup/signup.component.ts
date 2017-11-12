import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
	selector: 'signup',
	templateUrl: 'pages/signup/signup.component.xml',
	styleUrls:["pages/signup/signup.component.css", "pages/signup/signup.css"]
})

export class SignupComponent implements OnInit {

	constructor(private router: Router, private page: Page) {
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}
}