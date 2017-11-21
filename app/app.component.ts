import { Component } from "@angular/core";
import { UserAuthService } from "./services/userAuth.service";

import firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    ngOnInit(){
        firebase.init({
            // persist set to false else numbers aren't returned during livesync
            persist: false,
            storageBucket: 'gs://liszt-native.appspot.com',
            onAuthStateChanged: (data: any) => {
              console.log(JSON.stringify(data))
              if (data.loggedIn) {
                UserAuthService.token = data.user.uid;
              }
              else {
                UserAuthService.token = "";
              }
            }
          }).then(
            function (instance) {
              console.log("firebase.init done");
            },
            function(error) {
              console.log("firebase.init error " + error);
            }
          );
    }
}
