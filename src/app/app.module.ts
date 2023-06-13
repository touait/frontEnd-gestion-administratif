import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { LayoutsModule } from './layouts/layouts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {NgxPrintModule} from 'ngx-print';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SinscrireComponent,

   
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
     // * MATERIAL IMPORTS
     MatSidenavModule,
     MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatDividerModule,
     MatListModule,


     FormsModule,
     HttpClientModule,
     ReactiveFormsModule,
     NgxPaginationModule,
     NgxPrintModule,
    ReactiveFormsModule,
   
 
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
