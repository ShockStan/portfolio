import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { ReachoutComponent } from './components/reachout/reachout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material.module';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, } from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
  "blur": 15,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#000000",
  "fgsPosition": "center-center",
  "fgsSize": 50,
  "fgsType": "pulse",
  "gap": 20,
  "logoPosition": "center-center",
  "logoSize": 40,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(242,242,242)",
  "hasProgressBar": false,
  "text": "LOADING...",
  "textColor": "#000000",
  "textPosition": "center-center",
  "maxTime": 1000,
  "minTime": 300
}
 
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TechstackComponent,
    ProjectsComponent,
    AboutComponent,
    ReachoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxTypedJsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
