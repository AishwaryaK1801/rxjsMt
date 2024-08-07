import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './shared/components/users/users.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { Consumer1Component } from './shared/components/subject/consumer1/consumer1.component';
import { Consumer2Component } from './shared/components/subject/consumer2/consumer2.component';
import { Consumer3Component } from './shared/components/subject/consumer3/consumer3.component';
import { UserFormComponent } from './shared/components/subject/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './shared/components/posts/posts.component';
import { CardComponent } from './shared/components/card/card.component'
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    Consumer1Component,
    Consumer2Component,
    Consumer3Component,
    UserFormComponent,
    PostsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
