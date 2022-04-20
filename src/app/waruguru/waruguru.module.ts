import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent} from '../user/user.component';
import { RepoComponent } from '../repo/repo.component';
import { Routes, RouterModule} from '@angular/router'
import { WaruguruRoutingModule } from './waruguru-routing.module';


const routes: Routes = [
  {path: 'quote', component:UserComponent},
  {path: 'about', component:RepoComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WaruguruRoutingModule,
    RouterModule
  ]
})
export class WaruguruModule { }
