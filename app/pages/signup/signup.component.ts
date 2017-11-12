import { TextField } from "tns-core-modules/ui/text-field";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { Color } from "tns-core-modules/color";
import { View } from "tns-core-modules/ui/core/view";

@Component({
	selector: 'signup',
	templateUrl: 'pages/signup/signup.component.html',
	styleUrls:["pages/signup/signup.component.css"]
})

export class SignupComponent implements OnInit {

	constructor(private router: Router, private page: Page) {
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}
}