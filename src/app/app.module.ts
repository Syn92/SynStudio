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
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeViewComponent } from './home-view/home-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component'
import { HttpClientModule } from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: '', component: HomeViewComponent,
  },
  {
    path: 'admin', component: AdminViewComponent,
  },
  {
    path: Constants.ABOUT_PATH, component: AboutViewComponent,
  },
  {
    path: Constants.CONTACT_PATH, component: ContactViewComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AboutViewComponent,
    ContactViewComponent,
    HomeViewComponent,
    AdminViewComponent,
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
    FlexLayoutModule,
    MatDividerModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule { }
