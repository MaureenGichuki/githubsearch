import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { WaruguruRoutingModule } from './waruguru/waruguru-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WaruguruRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
