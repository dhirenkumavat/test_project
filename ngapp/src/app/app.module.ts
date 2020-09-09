import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './user/add/add.component';
import { UpdateComponent } from './user/update/update.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DesiListComponent } from './designation/desi-list/desi-list.component';
import { DesiAddComponent } from './designation/desi-add/desi-add.component';
import { DesiUpdateComponent } from './designation/desi-update/desi-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    UpdateComponent,
    UserListComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DesiListComponent,
    DesiAddComponent,
    DesiUpdateComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
