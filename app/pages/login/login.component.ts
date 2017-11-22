import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
	selector: "login",
    templateUrl:'pages/login/login.component.xml',
    styleUrls: ["pages/login/login.component.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    
    //////////////////////////////////////////////////////////
    // UI Elements
    //////////////////////////////////////////////////////////

    @ViewChild("container") container: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    //////////////////////////////////////////////////////////
    // Constructor
    //////////////////////////////////////////////////////////

    constructor(private router: Router, private page: Page) {

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

}