import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WorkprofileComponent } from './workprofile/workprofile.component';
import { OfficelocationsComponent } from './officelocations/officelocations.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material';


const AppRoutes: Routes = [
{ path : 'contact', component : ContactusComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WorkprofileComponent,
    OfficelocationsComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
