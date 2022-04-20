import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { RepoComponent } from '../repo/repo.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component:UserComponent},
  {path: 'user', component:UserComponent},
  {path: 'repo', component:RepoComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class WaruguruRoutingModule { }
