import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateComponent } from './user/update/update.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './user/add/add.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { DesiListComponent } from './designation/desi-list/desi-list.component'
import { DesiAddComponent } from './designation/desi-add/desi-add.component';
import { DesiUpdateComponent } from './designation/desi-update/desi-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate: [AuthGuard] },
  { path :'deginationlist',component:DesiListComponent,canActivate:[AuthGuard] },
  { path :'deginationadd',component:DesiAddComponent,canActivate:[AuthGuard] },
  { path :'deginationupdate/:id',component:DesiUpdateComponent,canActivate:[AuthGuard] },
  { path: 'list', component: UserListComponent,canActivate: [AuthGuard] },
  { path: 'adduser', component: AddComponent,canActivate: [AuthGuard] },
  { path: 'updateuser/:id', component: UpdateComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
