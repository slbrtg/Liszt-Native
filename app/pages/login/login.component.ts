import { TextField } from "tns-core-modules/ui/text-field";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { Color } from "tns-core-modules/color";
import { View } from "tns-core-modules/ui/core/view";

@Component({
	selector: "login",
    templateUrl:'pages/login/login.component.html',
    styleUrls: ["pages/login/login.component.css"]
})
export class LoginComponent implements OnInit {
	// UI Properties
    appName: string = "Liszt";
    signUp: string = "Sign up";

    @ViewChild("container") container: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;

    // Methods
    constructor(private router: Router, private page: Page) {

    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

}