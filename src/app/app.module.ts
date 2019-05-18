import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './main-view/main-view.component';
import { Constants } from 'Constants';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [
  { path: '', component: MainViewComponent,
  children: [
    {
      path: Constants.ABOUT_PATH, component: AboutViewComponent,
    },
    {
      path: Constants.CONTACT_PATH, component: ContactViewComponent,
    }
  ]},
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AboutViewComponent,
    ContactViewComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  exports: [RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule { }
