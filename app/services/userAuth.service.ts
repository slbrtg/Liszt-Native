var appSettings = require("application-settings");

import { Injectable } from "@angular/core";

const tokenKey = "token";

export class UserAuthService {
  static isLoggedIn(): boolean {
    return !!appSettings.getString("token");
  }

  static get token(): string {
    return appSettings.getString("token");
  }

  static set token(theToken: string){
    appSettings.setString("token", theToken);
  } 
}