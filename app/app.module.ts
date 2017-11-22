import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { UserAuthService } from "./services/userAuth.service";
import { UtilsService } from "./services/utils.service";
import { FirebaseService } from "./services/firebase.service";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent
    ],
    providers: [
        UserAuthService,
        FirebaseService,
        UtilsService,
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
